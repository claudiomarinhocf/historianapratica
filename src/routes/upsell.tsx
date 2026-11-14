import { createFileRoute } from '@tanstack/react-router';
import ProfessorIAPage from '@/upsell/ProfessorIAPage';
import upsellCss from '@/upsell/upsell.css?url';

const title = 'Professor de História com IA | História na Prática';
const description = 'Complemente seu História na Prática com um e-book ilustrado em PDF: 8 aulas práticas para criar e personalizar materiais de História com inteligência artificial.';

export const Route = createFileRoute('/upsell')({
  // Retain all Hotmart and tracking query keys without interpreting or rewriting them.
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'noindex, nofollow' },
      { property: 'og:url', content: 'https://historianapratica.lovable.app/upsell' },
    ],
    links: [
      { rel: 'stylesheet', href: upsellCss },
      { rel: 'canonical', href: 'https://historianapratica.lovable.app/upsell' },
    ],
  }),
  component: ProfessorIAPage,
});
