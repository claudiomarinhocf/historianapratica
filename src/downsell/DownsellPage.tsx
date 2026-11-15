import { Check } from 'lucide-react';
import heroImage from '@/assets/hero_professor_com_ia_v2.webp.asset.json';
import { formatPrice } from '@/upsell/content';
import { DOWNSELL } from './content';
import { HotmartDownsellPlaceholder } from './HotmartDownsellPlaceholder';

export default function DownsellPage() {
  const features = [
    `E-book digital ilustrado em ${DOWNSELL.product.format}`,
    `${DOWNSELL.product.lessons} aulas práticas`,
    `+ de ${DOWNSELL.product.approximatePages} páginas`,
    'Exemplos de comandos para IA',
    'Mesmo conteúdo da oferta anterior',
  ];

  return <div className="ds-page">
    <div className="ds-alert">
      <p>⚠️ ESPERE! TEMOS UMA CONDIÇÃO AINDA MAIS ESPECIAL PARA VOCÊ!</p>
      <small>Antes de continuar, confira esta nova oportunidade.</small>
    </div>
    <main>
      <section className="ds-opening"><div className="ds-wrap">
        <p className="ds-seal">UMA SEGUNDA OPORTUNIDADE</p>
        <h1>Que tal aprender a criar suas próprias aulas com IA por um <em>valor ainda menor?</em></h1>
        <p className="ds-subtitle">Sabemos que você decidiu não aproveitar a primeira oferta. Por isso, preparamos uma condição especial para você adquirir o Professor de História com IA.</p>
        <img className="ds-hero" src={heroImage.url} width={1000} height={1000} alt="Professor de História com IA: robô, professor e recursos históricos" loading="eager" fetchPriority="high" decoding="async" />
      </div></section>
      <section className="ds-offer" aria-labelledby="ds-offer-title"><div className="ds-wrap">
        <div className="ds-card">
          <h2 id="ds-offer-title">Leve agora o Professor de História com IA por um preço especial!</h2>
          <div className="ds-product">
            <img src={heroImage.url} width={1000} height={1000} alt="E-book Professor de História com IA" loading="lazy" decoding="async" />
            <h3>Professor de História com IA</h3>
          </div>
          <p className="ds-old"><del>{formatPrice(DOWNSELL.previousPrice)}</del></p>
          <p className="ds-price">{formatPrice(DOWNSELL.price)}</p>
          <p className="ds-payment">Pagamento único.</p>
          <HotmartDownsellPlaceholder />
          <ul className="ds-features">{features.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          <p className="ds-same">É o mesmo produto, com o mesmo conteúdo, agora por uma condição especial.</p>
        </div>
      </div></section>
    </main>
  </div>;
}