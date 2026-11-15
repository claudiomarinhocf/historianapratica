import { Check, Clock3, FileText, Gift, Presentation, ShieldCheck } from 'lucide-react';
import paymentFlags from '@/assets/bandeiras_pagamento.webp.asset.json';
import heroImage from '@/assets/hero_professor_com_ia_v2.webp.asset.json';
import { HotmartSalesFunnel } from './HotmartSalesFunnel';
import { UPSELL, formatPrice } from './content';
import { UpsellAulasCarousel } from './UpsellAulasCarousel';

const benefits = [
  { icon: Clock3, title: 'Economize tempo', text: 'Aprenda a planejar suas aulas com mais rapidez utilizando inteligência artificial.' },
  { icon: FileText, title: 'Crie seus próprios materiais', text: 'Produza apresentações, atividades e avaliações personalizadas com apoio da IA.' },
  { icon: Presentation, title: 'Aulas mais criativas', text: 'Descubra como desenvolver recursos visuais e estratégias para envolver seus alunos.' },
];

export default function ProfessorIAPage() {
  return <div className="ia-page">
    <div className="ia-alert" role="alert">
      <p className="ia-alert-label">⚠️ ATENÇÃO: NÃO FECHE ESTA PÁGINA</p>
      <p className="ia-alert-message">Conheça esta oferta especial antes de continuar.</p>
    </div>
    <div className="ia-progress-block">
      <p className="ia-progress-text">Você está na etapa final da sua experiência...</p>
      <div className="ia-progress" aria-hidden="true"><div className="ia-progress-fill" /><span>95%</span></div>
      <p className="ia-progress-note">Seu acesso ao História na Prática já está garantido.</p>
    </div>
    <main>
      <section className="ia-opening">
        <div className="ia-wrap ia-centered">
          <p className="ia-product-name">EXCLUSIVO PARA QUEM ADQUIRIU O HISTÓRIA NA PRÁTICA</p>
          <h1>E se você pudesse <em>criar suas próprias aulas</em> como as do História na Prática?</h1>
          <div className="ia-hero-image"><img src={heroImage.url} width={1000} height={1000} alt="Mockup do e-book Professor de História com IA com as aulas do material" loading="eager" fetchPriority="high" decoding="async" /></div>
          <p className="ia-lead">Com o Professor de História com IA, aprenda, passo a passo, a criar apresentações, atividades, avaliações e recursos visuais personalizados usando inteligência artificial.</p>
          <HotmartSalesFunnel placement="hero" />
        </div>
      </section>

      <section className="ia-section ia-benefits"><div className="ia-wrap">
        <div className="ia-section-heading"><p className="ia-section-label">MAIS POSSIBILIDADES, MENOS COMPLICAÇÃO</p><h2>Imagine preparar suas próximas aulas com muito mais facilidade!</h2></div>
        <div className="ia-benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="ia-benefit" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>


      <UpsellAulasCarousel />

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

    </main>
  </div>;
}