import { ArrowDown, BookOpen, Check, Clock3, FileText, Landmark, Layers3, Lightbulb, Presentation, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import mainProduct from '@/assets/historia_pacote_completo.webp.asset.json';
import heroImage from '@/assets/hero_professor_com_ia.webp.asset.json';
import { HotmartUpsellWidget } from './HotmartUpsellWidget';
import { UPSELL, faqs, formatPrice, lessons } from './content';

const benefits = [
  { icon: Clock3, title: 'Economize tempo no planejamento', text: 'Aprenda a utilizar IA como apoio à organização do trabalho docente.' },
  { icon: FileText, title: 'Crie atividades personalizadas', text: 'Desenvolva questões, exercícios e propostas adaptadas aos objetivos de aprendizagem.' },
  { icon: Presentation, title: 'Produza aulas mais visuais', text: 'Utilize IA para apoiar a criação de apresentações e recursos didáticos.' },
  { icon: Layers3, title: 'Aproveite melhor seu material', text: 'Combine os recursos do História na Prática com as técnicas apresentadas no novo e-book.' },
];

function Brand() {
  return <span className="ia-brand"><Landmark aria-hidden="true" /><span>História <span>na Prática</span></span></span>;
}

function BookPreview() {
  if (UPSELL.cover) return <div className="ia-book"><img src={UPSELL.cover.url} width={UPSELL.cover.width} height={UPSELL.cover.height} alt="Capa original do e-book Professor de História com IA" loading="lazy" decoding="async" /></div>;
  return <div className="ia-cover-pending"><BookOpen aria-hidden="true" /><span>Capa original do e-book</span><small>Aguardando a imagem do material</small></div>;
}

export default function ProfessorIAPage() {
  const scrollToOffer = () => {
    const widget = document.getElementById('hotmart-upsell');
    widget?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    widget?.focus({ preventScroll: true });
  };
  return <div className="ia-page">
    <div className="ia-alert" role="alert">
      <p className="ia-alert-label">⚠️ ATENÇÃO:</p>
      <p className="ia-alert-message">VOCÊ NÃO TERÁ ESSA OPORTUNIDADE<br />NOVAMENTE SE FECHAR ESSA PÁGINA!</p>
    </div>
    <header className="ia-header"><div className="ia-wrap"><Brand /><span className="ia-header-note">Uma nova possibilidade para suas aulas</span></div></header>
    <main>
      <section className="ia-opening">
        <div className="ia-wrap ia-centered">
          <p className="ia-eyebrow"><Sparkles aria-hidden="true" /> UMA OFERTA ESPECIAL PARA COMPLEMENTAR SUA COMPRA</p>
          <p className="ia-product-name">Professor de História com IA</p>
          <h1>Você já tem materiais prontos. Agora aprenda a criar suas próprias aulas com <em>Inteligência Artificial!</em></h1>
          <p className="ia-lead">Descubra como utilizar a IA para planejar aulas, elaborar atividades, criar apresentações, desenvolver avaliações e produzir recursos visuais de História com mais praticidade.</p>
          <div className="ia-hero-image"><img src={heroImage.url} width={1000} height={1000} alt="Mockup do e-book Professor de História com IA com as aulas do material" loading="eager" fetchPriority="high" decoding="async" /></div>
          <div className="ia-opening-details"><span><BookOpen aria-hidden="true" /> E-book ilustrado em PDF</span><span>8 aulas práticas</span></div>
          <Button variant="ghost" className="ia-jump" onClick={scrollToOffer}>Ver a oferta complementar <ArrowDown aria-hidden="true" /></Button>
        </div>
      </section>

      <section className="ia-section ia-product"><div className="ia-wrap ia-product-grid">
        <BookPreview />
        <div><p className="ia-section-label">SEU PRÓXIMO PASSO</p><h2>Conheça o Professor de História com IA</h2>
          <p>Um guia digital ilustrado que ensina, passo a passo, como professores de História podem utilizar ferramentas de inteligência artificial para organizar seu planejamento e produzir materiais pedagógicos personalizados.</p>
          <ul className="ia-checks">{['8 aulas práticas', '+ 80 páginas ilustradas', 'Conteúdo organizado passo a passo', 'Exemplos de comandos para IA', 'Material digital em PDF'].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </div></section>

      <section className="ia-section ia-benefits"><div className="ia-wrap">
        <div className="ia-section-heading"><p className="ia-section-label">MAIS POSSIBILIDADES, MENOS COMPLICAÇÃO</p><h2>Imagine preparar suas próximas aulas com muito mais facilidade!</h2></div>
        <div className="ia-benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="ia-benefit" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="ia-section"><div className="ia-wrap">
        <div className="ia-section-heading"><p className="ia-section-label">DO PRIMEIRO COMANDO À AULA COMPLETA</p><h2>8 aulas para você começar a utilizar IA no ensino de História</h2></div>
        <div className="ia-lessons">{lessons.map(([title, text], index) => <article className="ia-lesson" key={title}><span className="ia-lesson-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3><span>Aula {index + 1} — </span>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section>

      <section className="ia-section ia-difference"><div className="ia-wrap">
        <div className="ia-section-heading"><h2>Você não precisa depender apenas de materiais prontos.</h2><p>Com o História na Prática, você já recebeu recursos que facilitam a preparação das suas aulas. Agora, com o Professor de História com IA, poderá aprender a desenvolver novos materiais e adaptá-los às necessidades das suas turmas.</p></div>
        <div className="ia-comparison"><div><img src={mainProduct.url} alt="Materiais do História na Prática — Pacote Completo" width={700} height={700} loading="lazy" decoding="async" /><h3>História na Prática</h3><p>Materiais prontos para utilizar.</p></div><span className="ia-plus" aria-hidden="true">+</span><div><img src={heroImage.url} alt="E-book Professor de História com IA" width={125} height={125} loading="lazy" decoding="async" /><h3>Professor de História com IA</h3><p>Conhecimento para criar e personalizar novos materiais.</p></div></div>
        <p className="ia-together">Juntos, eles oferecem mais possibilidades para o seu planejamento pedagógico.</p>
      </div></section>

      <section className="ia-section ia-offer"><div className="ia-wrap ia-centered">
        <p className="ia-eyebrow">COMPLEMENTE SEU PLANEJAMENTO</p><h2>Adicione agora o Professor de História com IA à sua experiência!</h2>
        <ul className="ia-offer-features">{['E-book digital ilustrado', '8 aulas práticas', '+ 80 páginas ilustradas', 'Conteúdo voltado a professores de História'].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        <p className="ia-price">{formatPrice(UPSELL.price)}</p><p className="ia-offer-support">Uma oportunidade de complementar seu material e aprender novas formas de preparar suas aulas.</p>
        <HotmartUpsellWidget html={UPSELL.widgetHtml} />
      </div></section>

      <section className="ia-section ia-faq"><div className="ia-wrap"><div className="ia-section-heading"><p className="ia-section-label">TIRE SUAS DÚVIDAS</p><h2>Perguntas frequentes</h2></div><Accordion type="single" collapsible>{faqs.map(([question, answer], index) => <AccordionItem className="ia-faq-item" value={`faq-${index}`} key={question}><AccordionTrigger className="ia-faq-trigger">{question}</AccordionTrigger><AccordionContent className="ia-faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    </main>
    <footer className="ia-footer"><Brand /><p>História na Prática · Materiais para quem ensina História.</p></footer>
  </div>;
}