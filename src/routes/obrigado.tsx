import { createFileRoute } from '@tanstack/react-router';
import ThankYouPage from '@/thanks/ThankYouPage';
import thanksCss from '@/thanks/thanks.css?url';
import productImage from '@/assets/historia_pacote_completo.webp.asset.json';

const title = 'Obrigado pela preferência | História na Prática';
const description = 'Obrigado por escolher o História na Prática. Confira as orientações da Hotmart para acessar seus materiais e preparar suas próximas aulas de História.';

export const Route = createFileRoute('/obrigado')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    links: [
      { rel: 'stylesheet', href: thanksCss },
      { rel: 'canonical', href: 'https://historianapratica.lovable.app/obrigado' },
      { rel: 'preload', as: 'image', href: productImage.url, type: 'image/webp', fetchpriority: 'high' },
    ],
  }),
  component: ThankYouPage,
});