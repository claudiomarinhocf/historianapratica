import { useEffect, useRef, useState } from 'react';

/** Trusted owner-supplied official funnel HTML only. Never accept HTML from URL input. */
export function HotmartUpsellWidget({ html }: { html: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = container.current;
    if (!host || !html.trim()) return;
    let cancelled = false;
    setFailed(false);
    // Deferring prevents the first StrictMode setup from executing any scripts.
    const mount = async () => {
      await Promise.resolve();
      if (cancelled) return;
      const template = document.createElement('template');
      template.innerHTML = html;
      const scripts = [...template.content.querySelectorAll('script')];
      const slots = scripts.map((script) => {
        const slot = document.createComment('official-hotmart-script');
        script.replaceWith(slot);
        return { script, slot };
      });
      host.replaceChildren(template.content);
      for (const { script: original, slot } of slots) {
        if (cancelled) return;
        const script = document.createElement('script');
        for (const attribute of original.attributes) script.setAttribute(attribute.name, attribute.value);
        script.textContent = original.textContent;
        if (original.src && !original.hasAttribute('async')) script.async = false;
        const executable = !original.type || /^(module|text\/javascript|application\/javascript)$/i.test(original.type);
        const waits = executable && (original.hasAttribute('src') || original.type === 'module');
        const loaded = waits ? new Promise<void>((resolve, reject) => {
          script.addEventListener('load', () => resolve(), { once: true });
          script.addEventListener('error', () => reject(new Error('Widget load failed')), { once: true });
        }) : Promise.resolve();
        slot.replaceWith(script);
        await loaded;
      }
    };
    void mount().catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; host.replaceChildren(); };
  }, [html]);

  return (
    <div id="hotmart-upsell" className="ia-widget" tabIndex={-1} aria-label="Oferta complementar Hotmart">
      <div ref={container} />
      {!html.trim() && import.meta.env.DEV && (
        <p className="ia-widget-placeholder">ÁREA RESERVADA AO WIDGET OFICIAL DE UPSELL DA HOTMART</p>
      )}
      {failed && <p role="alert">Não foi possível carregar a oferta. Atualize a página para tentar novamente.</p>}
    </div>
  );
}