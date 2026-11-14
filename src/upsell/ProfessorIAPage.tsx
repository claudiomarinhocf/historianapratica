import { ArrowDown, BookOpen, Check, Clock3, FileText, Gift, Landmark, Layers3, Presentation, ShieldCheck } from 'lucide-react';
import paymentFlags from '@/assets/bandeiras_pagamento.webp.asset.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import mainProduct from '@/assets/historia_pacote_completo.webp.asset.json';
import heroImage from '@/assets/hero_professor_com_ia_v2.webp.asset.json';
import { HotmartSalesFunnel } from './HotmartSalesFunnel';
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

export default function ProfessorIAPage() {
  const scrollToOffer = () => {
    const widget = document.getElementById('hotmart-upsell');
    widget?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    widget?.focus({ preventScroll: true });
  };
  return <div className="ia-page">
    <div className="ia-alert" role="alert">
      <p className="ia-alert-label">⚠️ ATENÇÃO: NÃO FECHE ESTA PÁGINA</p>
      <p className="ia-alert-message">Sua compra está garantida! Conheça esta oferta especial antes de continuar.</p>
    </div>
    <div className="ia-progress-block">
      <p className="ia-progress-text">Você está na etapa final da sua experiência...</p>
      <div className="ia-progress" aria-hidden="true"><div className="ia-progress-fill" /><span>95%</span></div>
      <p className="ia-progress-note">Seu acesso ao História na Prática já está garantido.</p>
    </div>
    <header className="ia-header"><div className="ia-wrap"><Brand /><span className="ia-header-note">Uma nova possibilidade para suas aulas</span></div></header>
    <main>
      <section className="ia-opening">
        <div className="ia-wrap ia-centered">
          <p className="ia-product-name">EXCLUSIVO PARA QUEM ADQUIRIU O HISTÓRIA NA PRÁTICA</p>
          <h1>E se você pudesse <em>criar suas próprias aulas</em> como as do História na Prática?</h1>
          <p className="ia-lead">Com o Professor de História com IA, descubra como utilizar a inteligência artificial para desenvolver apresentações, atividades, avaliações e recursos visuais personalizados, seguindo um passo a passo prático.</p>
          <div className="ia-hero-image"><img src={heroImage.url} width={1000} height={1000} alt="Mockup do e-book Professor de História com IA com as aulas do material" loading="eager" fetchPriority="high" decoding="async" /></div>
          <div className="ia-opening-details"><span><BookOpen aria-hidden="true" /> E-book ilustrado em PDF</span><span>8 aulas práticas</span></div>
          <Button variant="ghost" className="ia-jump" onClick={scrollToOffer}>Ver a oferta complementar <ArrowDown aria-hidden="true" /></Button>
        </div>
      </section>

      <section className="ia-section ia-benefits"><div className="ia-wrap">
        <div className="ia-section-heading"><p className="ia-section-label">MAIS POSSIBILIDADES, MENOS COMPLICAÇÃO</p><h2>Imagine preparar suas próximas aulas com muito mais facilidade!</h2></div>
        <div className="ia-benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="ia-benefit" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>


      <section className="ia-section ia-lessons-section"><div className="ia-wrap">
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
        <div className="ia-offer-card">
          <span className="ia-offer-badge">⭐ OFERTA ESPECIAL</span>
          <img className="ia-offer-card-image" src={heroImage.url} width={1000} height={1000} alt="Mockup do e-book Professor de História com IA com as aulas do material" loading="lazy" decoding="async" />
          <h3 className="ia-offer-card-title">Professor de História com IA</h3>
          <p className="ia-price-old">{formatPrice(UPSELL.oldPrice)}</p>
          <p className="ia-price">{formatPrice(UPSELL.price)}</p>
          <p className="ia-price-note">Pagamento único</p>
          <ul className="ia-offer-features">{['E-book digital ilustrado em PDF', '8 aulas práticas passo a passo', '+ 80 páginas ilustradas', 'Exemplos de comandos para IA'].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          <ul className="ia-offer-gifts">{['Conteúdo voltado a professores de História', 'Acesso imediato após a compra'].map(item => <li key={item}><Gift aria-hidden="true" />{item}</li>)}</ul>
          <HotmartSalesFunnel />
          <img className="ia-offer-flags" src={paymentFlags.url} width={340} height={41} alt="Bandeiras de pagamento aceitas: MasterCard, Visa, American Express, Diners Club, Hipercard, Elo e Banco do Brasil" loading="lazy" decoding="async" />
          <p className="ia-offer-guarantee"><ShieldCheck aria-hidden="true" /> Garantia de 7 dias</p>
        </div>
      </div></section>

      <section className="ia-section ia-faq"><div className="ia-wrap"><div className="ia-section-heading"><p className="ia-section-label">TIRE SUAS DÚVIDAS</p><h2>Perguntas frequentes</h2></div><Accordion type="single" collapsible>{faqs.map(([question, answer], index) => <AccordionItem className="ia-faq-item" value={`faq-${index}`} key={question}><AccordionTrigger className="ia-faq-trigger">{question}</AccordionTrigger><AccordionContent className="ia-faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    </main>
    <footer className="ia-footer"><Brand /><p>História na Prática · Materiais para quem ensina História.</p></footer>
  </div>;
}