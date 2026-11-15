import { describe, expect, it } from 'vitest';
import { DOWNSELL, preserveDownsellSearch } from './content';
import { UPSELL } from '@/upsell/content';

describe('Downsell commercial rules', () => {
  it('proposes a price of R$ 27,90', () => { expect(DOWNSELL.price).toBe(27.90); });
  it('shows the prior upsell price of R$ 47,90', () => { expect(DOWNSELL.previousPrice).toBe(47.90); });
  it('keeps the exact same product as the upsell', () => { expect(DOWNSELL.product).toBe(UPSELL); });
  it('delivers an illustrated PDF rather than video', () => { expect(DOWNSELL.product.format).toBe('PDF'); });
  it('retains all 8 practical lessons', () => { expect(DOWNSELL.product.lessons).toBe(8); });
  it('retains the 80-page content base', () => { expect(DOWNSELL.product.approximatePages).toBe(80); });
  it('records the official funnel snippet supplied for the downsell', () => { expect(DOWNSELL.widgetSnippetSupplied).toBe(true); });
  it('preserves purchase and tracking parameters without rewriting them', () => {
    const search = { purchaseContext: 'test-context', utm_source: 'hotmart', off: 'downsell-stage', unknown: ['a', 'b'] };
    expect(preserveDownsellSearch(search)).toEqual(search);
  });
});