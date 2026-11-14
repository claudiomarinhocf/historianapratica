import { useEffect, useRef, useState } from 'react';
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aulasImages } from './aulas-images';

export function UpsellAulasCarousel() {
  const autoScroll = useRef(AutoScroll({ speed: 0.65, playOnInit: false, stopOnInteraction: true }));
  const viewportRef = useRef<HTMLDivElement>(null);
  const [embla, setEmbla] = useState<EmblaCarouselType>();
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const carousel = EmblaCarousel(viewport, { loop: true, align: 'start', dragFree: true }, [autoScroll.current]);
    setEmbla(carousel);
    return () => carousel.destroy();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!embla || !section) return;
    const plugin = autoScroll.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let hovered = false;
    let focused = false;
    let interacting = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    const sync = () => {
      if (paused || preference.matches || !visible || document.hidden || hovered || focused || interacting) plugin.stop();
      else plugin.play(0);
    };
    const onPreference = () => { setReducedMotion(preference.matches); sync(); };
    const onEnter = (event: PointerEvent) => { if (event.pointerType !== 'touch') { hovered = true; sync(); } };
    const onLeave = () => { hovered = false; sync(); };
    const onFocus = () => { focused = true; sync(); };
    const onBlur = (event: FocusEvent) => { if (!section.contains(event.relatedTarget as Node | null)) { focused = false; sync(); } };
    const onPointerDown = () => { clearTimeout(resumeTimer); interacting = true; sync(); };
    const onPointerUp = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { interacting = false; sync(); }, 1800);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; sync(); }, { threshold: 0.1 });
    observer.observe(section);
    onPreference();
    preference.addEventListener('change', onPreference);
    document.addEventListener('visibilitychange', sync);
    section.addEventListener('pointerenter', onEnter);
    section.addEventListener('pointerleave', onLeave);
    section.addEventListener('focusin', onFocus);
    section.addEventListener('focusout', onBlur);
    embla.on('pointerDown', onPointerDown).on('pointerUp', onPointerUp).on('reInit', sync);
    return () => {
      clearTimeout(resumeTimer);
      observer.disconnect();
      plugin.stop();
      preference.removeEventListener('change', onPreference);
      document.removeEventListener('visibilitychange', sync);
      section.removeEventListener('pointerenter', onEnter);
      section.removeEventListener('pointerleave', onLeave);
      section.removeEventListener('focusin', onFocus);
      section.removeEventListener('focusout', onBlur);
      embla.off('pointerDown', onPointerDown).off('pointerUp', onPointerUp).off('reInit', sync);
    };
  }, [embla, paused]);

  return <section ref={sectionRef} className="ia-section ia-aulas-carousel" aria-labelledby="ia-carousel-title" aria-roledescription="carrossel">
    <div className="ia-wrap">
      <div className="ia-section-heading">
        <h2 id="ia-carousel-title">O QUE VAI RECEBER:</h2>
      </div>
      <div className="ia-aulas-viewport" ref={viewportRef} tabIndex={0} aria-label="Aulas ilustradas" onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); embla?.scrollPrev(); }
        if (event.key === 'ArrowRight') { event.preventDefault(); embla?.scrollNext(); }
      }}>
        <div className="ia-aulas-track">
          {aulasImages.map((image, index) => <div className="ia-aulas-slide" key={image.url} role="group" aria-roledescription="slide" aria-label={`${index + 1} de 8`}>
            <img src={image.url} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" draggable={false} />
          </div>)}
        </div>
      </div>
      {!reducedMotion && <div className="ia-aulas-controls"><Button variant="ghost" className="ia-aulas-pause" aria-label={paused ? 'Reproduzir carrossel' : 'Pausar carrossel'} title={paused ? 'Reproduzir carrossel' : 'Pausar carrossel'} onClick={() => setPaused(value => !value)}>{paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</Button></div>}
    </div>
  </section>;
}