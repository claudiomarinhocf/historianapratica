import { createFileRoute } from '@tanstack/react-router';
import DownsellPage from '@/downsell/DownsellPage';
import downsellCss from '@/downsell/downsell.css?url';
import heroImage from '@/assets/hero_professor_com_ia_v2.webp.asset.json';
import { preserveDownsellSearch } from '@/downsell/content';

const title = 'Oferta Especial | Professor de História com IA';
const description = 'Uma segunda oportunidade para adquirir o mesmo e-book Professor de História com IA: 8 aulas práticas em PDF e mais de 80 páginas, por uma condição especial.';

export const Route = createFileRoute('/downsell')({
  validateSearch: preserveDownsellSearch,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://historianapratica.lovable.app/downsell' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    links: [
      { rel: 'stylesheet', href: downsellCss },
      { rel: 'canonical', href: 'https://historianapratica.lovable.app/downsell' },
      { rel: 'preload', as: 'image', href: heroImage.url, type: 'image/webp', fetchpriority: 'high' },
    ],
  }),
  component: DownsellPage,
});