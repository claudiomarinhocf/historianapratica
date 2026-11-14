import { describe, expect, it } from 'vitest';
import { UPSELL } from './content';

describe('Upsell product rules', () => {
  it('offers the complementary e-book for R$ 47,90', () => { expect(UPSELL.price).toBe(47.90); });
  it('delivers a PDF, not video', () => { expect(UPSELL.format).toBe('PDF'); });
  it('contains 8 practical lessons', () => { expect(UPSELL.lessons).toBe(8); });
  it('has approximately 80 pages', () => { expect(UPSELL.approximatePages).toBe(80); });
  it('does not activate payments before receiving the official widget', () => { expect(UPSELL.widgetHtml).toBe(''); });
});