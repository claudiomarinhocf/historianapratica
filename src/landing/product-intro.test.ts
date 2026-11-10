import { describe, expect, it } from "vitest";
import {
  productIntroBenefits,
  productIntroClosing,
  productIntroTitle,
} from "./product-intro";

describe("Product introduction section copy", () => {
  it("shows the approved headline", () => {
    expect(productIntroTitle).toBe(
      "+300 Slides de História Prontos para Suas Aulas!",
    );
  });

  it("lists exactly the ten approved benefits, in order", () => {
    expect([...productIntroBenefits]).toEqual([
      "Mais de 300 slides de História ilustrados e organizados",
      "Conteúdos de História Geral e História do Brasil",
      "Material para o Ensino Fundamental II e Ensino Médio",
      "Apresentações prontas para projetar em sala de aula",
      "Arquivos em PowerPoint e PDF",
      "Conteúdos sobre civilizações, revoluções e períodos históricos",
      "Recursos visuais para facilitar a compreensão dos alunos",
      "Material desenvolvido para economizar tempo de planejamento",
      "Organização por temas para facilitar a busca dos conteúdos",
      "Acesso digital após a confirmação da compra",
    ]);
  });

  it("closes with the approved message", () => {
    expect(productIntroClosing).toBe("E muito mais...");
  });
});
