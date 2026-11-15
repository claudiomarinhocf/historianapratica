import { describe, expect, it } from 'vitest';
import { getDeliveryUrl, getThankYouState, THANKS } from './content';

describe('Public thank-you safety', () => {
  it('keeps access unavailable until an official delivery URL is supplied', () => {
    expect(THANKS.deliveryUrl).toBeNull();
    expect(getDeliveryUrl(THANKS.deliveryUrl)).toBeNull();
  });
  it('does not confirm payment from editable query parameters', () => {
    expect(getThankYouState({ status: 'approved', paymentConfirmed: true }).paymentConfirmed).toBe(false);
  });
  it('does not confirm acquisition of the optional IA ebook from query parameters', () => {
    expect(getThankYouState({ upsell: 'accepted', product: 'Professor de História com IA' }).showAdditionalProduct).toBe(false);
  });
  it('does not allow query parameters to supply a delivery destination', () => {
    expect(getThankYouState({ deliveryUrl: 'https://example.com/paid-files' }).deliveryUrl).toBeNull();
  });
  it('does not use a new Hotmart checkout as delivery access', () => {
    expect(getDeliveryUrl('https://pay.hotmart.com/V108330893P')).toBeNull();
  });
  it('only permits secure configured delivery links', () => {
    expect(getDeliveryUrl('javascript:alert(1)')).toBeNull();
    expect(getDeliveryUrl('https://example.com/materials')).toBe('https://example.com/materials');
  });
});