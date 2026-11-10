export const offers = {
  basic: { original: 67, price: 17.9, checkout: "https://pay.hotmart.com/V108330893P?off=ioezjrpu&checkoutMode=10" },
  complete: { original: 197, price: 27.9, checkout: "https://pay.hotmart.com/V108330893P?checkoutMode=10" },
  special: { original: 27.9, price: 21.9, checkout: "https://pay.hotmart.com/V108330893P?off=6u5zpbjt&checkoutMode=10" },
} as const;

export function formatPrice(value: number, whole = false) {
  return `R$ ${value.toFixed(whole ? 0 : 2).replace(".", ",")}`;
}