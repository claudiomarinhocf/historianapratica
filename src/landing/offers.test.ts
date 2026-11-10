import { describe, expect, it } from "vitest";
import { offers, formatPrice } from "./offers";

describe("Approved sales offers", () => {
  it("uses 67 as the basic reference price", () => expect(offers.basic.original).toBe(67));
  it("charges 17.90 for basic", () => expect(offers.basic.price).toBe(17.9));
  it("uses 197 as the complete reference price", () => expect(offers.complete.original).toBe(197));
  it("charges 27.90 for complete", () => expect(offers.complete.price).toBe(27.9));
  it("uses 27.90 as the popup reference price", () => expect(offers.special.original).toBe(27.9));
  it("charges 21.90 for the popup offer", () => expect(offers.special.price).toBe(21.9));
  it("sends popup acceptance to the approved Hotmart offer", () => {
    expect(offers.special.checkout).toBe("https://pay.hotmart.com/V108330893P?off=6u5zpbjt&checkoutMode=10");
  });
  it("sends basic continuation to the approved Hotmart offer", () => {
    expect(offers.basic.checkout).toBe("https://pay.hotmart.com/V108330893P?off=ioezjrpu&checkoutMode=10");
  });
  it("calculates basic savings from the current prices", () => {
    expect(formatPrice(offers.basic.original - offers.basic.price)).toBe("R$ 49,10");
  });
  it("calculates complete savings from the current prices", () => {
    expect(formatPrice(offers.complete.original - offers.complete.price)).toBe("R$ 169,10");
  });
});