import { describe, expect, it } from "vitest";
import {
  productContentsClosing,
  productContentsTitle,
  productContentsTopics,
} from "./product-intro";

describe("Contents section copy", () => {
  it("shows the approved headline", () => {
    expect(productContentsTitle).toBe(
      "+300 Slides de História — Confira os Conteúdos!",
    );
  });

  it("lists exactly the thirteen approved topics, in order", () => {
    expect([...productContentsTopics]).toEqual([
      "Pré-História e Origens da Humanidade",
      "Mesopotâmia, Egito Antigo e Civilizações Orientais",
      "Grécia Antiga, Roma e Origens da Democracia",
      "Povos Indígenas e Civilizações Pré-Colombianas",
      "Idade Média, Feudalismo e Sociedade Medieval",
      "Renascimento Cultural e Reformas Religiosas",
      "Grandes Navegações e Expansão Marítima",
      "Brasil Colonial, Escravidão e Resistências",
      "Iluminismo, Revolução Francesa e Revolução Industrial",
      "Independência do Brasil e Brasil Império",
      "Primeira e Segunda Guerra Mundial",
      "Brasil República, Era Vargas e Ditadura Militar",
      "Guerra Fria, Globalização e História Contemporânea",
    ]);
  });

  it("closes with the approved message", () => {
    expect(productContentsClosing).toBe("E muito mais...");
  });
});
