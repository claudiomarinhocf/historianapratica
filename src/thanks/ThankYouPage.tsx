import { BookOpen, CircleCheck, Landmark, Mail, FolderOpen, GraduationCap, LifeBuoy } from 'lucide-react';
import productImage from '@/assets/historia_pacote_completo.webp.asset.json';
import { THANKS } from './content';

const steps = [
  { icon: Mail, title: 'Confira seu e-mail', text: 'Verifique a caixa de entrada do e-mail utilizado na compra. Confira também as pastas de spam e promoções.' },
  { icon: FolderOpen, title: 'Acesse a área de entrega', text: 'Siga as instruções enviadas pela Hotmart para acessar os materiais adquiridos.' },
  { icon: GraduationCap, title: 'Comece a utilizar', text: 'Explore os slides, atividades, mapas mentais e planos de aula e organize suas próximas aulas!' },
];

export default function ThankYouPage() {
  return (
    <div className="thanks-page">
      <header className="thanks-brand" aria-label="História na Prática">
        <Landmark aria-hidden="true" />
        <span>História <strong>na Prática</strong></span>
      </header>
      <main>
        <section className="thanks-welcome" aria-labelledby="thanks-title">
          <div className="thanks-confirmation"><CircleCheck aria-hidden="true" /></div>
          <h1 id="thanks-title">🎉 OBRIGADO POR ESCOLHER O <span>HISTÓRIA NA PRÁTICA!</span></h1>
          <p className="thanks-subtitle">Você deu um passo importante para tornar suas aulas de História mais práticas, organizadas e envolventes!</p>
          <img className="thanks-product" src={productImage.url} alt="História na Prática: caixa com mais de 300 slides e materiais complementares de atividades, mapas mentais e planos de aula" width={700} height={700} loading="eager" fetchPriority="high" decoding="async" />
          <p className="thanks-warm">Preparamos este material para ajudar você a economizar tempo no planejamento e levar conteúdos mais visuais e interessantes para seus alunos.</p>
        </section>
        <section className="thanks-access" aria-labelledby="thanks-access-title">
          <div className="thanks-inner">
            <h2 id="thanks-access-title">📚 Agora, veja como acessar seus materiais</h2>
            <ol className="thanks-steps">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <li className="thanks-step" key={title}>
                  <div className="thanks-step-top"><span>PASSO {index + 1}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3><p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="thanks-support" aria-labelledby="thanks-support-title">
          <LifeBuoy aria-hidden="true" /><div><h2 id="thanks-support-title">Precisa de ajuda para acessar seus materiais?</h2>
          <p>Se você tiver alguma dificuldade para localizar sua compra ou acessar seus materiais, consulte as instruções de acesso enviadas pela Hotmart.</p>
          {THANKS.supportEmail && <a href={`mailto:${THANKS.supportEmail}`}>{THANKS.supportEmail}</a>}</div>
        </section>
      </main>
      <footer className="thanks-ending">
        <div className="thanks-ending-symbol" aria-hidden="true"><span /><BookOpen /><span /></div>
        <p>“Que suas próximas aulas sejam repletas de conhecimento, criatividade e novas descobertas!”</p>
        <strong>História na Prática — Bons estudos e ótimas aulas!</strong>
      </footer>
    </div>
  );
}