import { UPSELL } from '@/upsell/content';

// Proposed display price. Confirm the identical value in the Hotmart downsell
// stage before publishing; never infer its configuration from the upsell widget.
export const DOWNSELL = {
  price: 27.90,
  previousPrice: UPSELL.price,
  product: UPSELL,
  widgetSnippetSupplied: true,
} as const;

export function preserveDownsellSearch(search: Record<string, unknown>): Record<string, unknown> {
  return search;
}