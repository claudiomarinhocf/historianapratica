import { createFileRoute, redirect } from '@tanstack/react-router';

// Old upsell URL kept working: permanently sends visitors (and their tracking
// query params) to the new /upsell address.
export const Route = createFileRoute('/professor-de-historia-com-ia')({
  validateSearch: (search: Record<string, unknown>): Record<string, unknown> => search,
  beforeLoad: ({ search }) => {
    throw redirect({ to: '/upsell', search, replace: true });
  },
});
