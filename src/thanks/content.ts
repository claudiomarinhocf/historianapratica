// Only an official delivery URL supplied by the owner may be configured here.
// Never read delivery destinations, payment status or purchased items from URL parameters.
export const THANKS = {
  deliveryUrl: null as string | null,
  supportEmail: null as string | null,
};

export function getDeliveryUrl(configuredUrl: string | null): string | null {
  if (!configuredUrl) return null;
  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== 'https:' || url.username || url.password) return null;
    if (url.hostname === 'pay.hotmart.com' || url.hostname === 'checkout.hotmart.com') return null;
    return url.href;
  } catch {
    return null;
  }
}

// This public page has no authenticated order source, so it never confirms a purchase.
export function getThankYouState(_search: Record<string, unknown>) {
  return { paymentConfirmed: false, showAdditionalProduct: false, deliveryUrl: getDeliveryUrl(THANKS.deliveryUrl) };
}