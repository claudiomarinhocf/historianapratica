// @ts-nocheck
/* Faithful port of the original slidesdeartes.netlify.app landing page. */
import * as ol from "react";
import * as c from "react/jsx-runtime";
import {
  Check as tn, ArrowLeft as x1, ArrowRight as Ui, X as Be, Gift as g0, Star as l0,
  Zap as v1, Award as g1, ShieldCheck as bf, MessageSquare as y1, Printer as b1,
  Infinity as t0, Download as e0, Clock as p1, ChevronUp as N1, ChevronDown as S1,
  ShoppingCart as E1,
} from "lucide-react";
import bonusAtividadesImg from "@/assets/bonus_atividades_historia_original.png.asset.json";
import bonusMapasImg from "@/assets/bonus_planos_historia_original.png.asset.json";
import bonusPlanosImg from "@/assets/bonus_mapas_historia_original.png.asset.json";
import bonusGuiaImg from "@/assets/bonus_guia_historia_original.png.asset.json";
import slideHistoria1 from "@/assets/slide_historia_01.webp.asset.json";
import slideHistoria2 from "@/assets/slide_historia_02.webp.asset.json";
import slideHistoria3 from "@/assets/slide_historia_03.webp.asset.json";
import slideHistoria4 from "@/assets/slide_historia_04.webp.asset.json";
import slideHistoria5 from "@/assets/slide_historia_05.webp.asset.json";
import slideHistoria6 from "@/assets/slide_historia_06.webp.asset.json";
import slideHistoria7 from "@/assets/slide_historia_07.webp.asset.json";
import slideHistoria8 from "@/assets/slide_historia_08.webp.asset.json";
function B1(N) {
  if (typeof window > "u" || !window.location.search) return N;
  const Z = window.location.search.replace(/^\?/, "");
  if (!Z) return N;
  const C = N.includes("?") ? "&" : "?";
  return `${N}${C}${Z}`;
}
function Tf(N) {
  N.startsWith("#")
    ? (window.location.hash = N)
    : (window.location.href = B1(N));
}
const w1 = [
    {
      id: 1,
      title: "+60 Atividades de História para Imprimir",
      description:
        "Fichas, exercícios e atividades práticas para o Ensino Fundamental II e Médio, prontas para imprimir e aplicar nas suas aulas de História.",
      price: 47,
      imageUrl: bonusAtividadesImg.url,
    },
    {
      id: 2,
      title: "+30 Mapas Mentais de História",
      description:
        "Resumos visuais dos principais períodos históricos, acontecimentos e conceitos — prontos para projetar, imprimir ou revisar antes da aula.",
      price: 57,
      imageUrl: bonusMapasImg.url,
    },
    {
      id: 3,
      title: "+30 Planos de Aula de História",
      description:
        "Roteiros passo a passo com objetivos, conteúdos, atividades práticas e temas da BNCC para facilitar o planejamento e engajar a turma.",
      price: 67,
      imageUrl: bonusPlanosImg.url,
    },
    {
      id: 4,
      title: "Guia Anual de Planejamento de História (BNCC)",
      description:
        "Cronograma completo do ano letivo de História, organizado por bimestre, competência e tema — alinhado à BNCC e ao Novo Ensino Médio.",
      price: 47,
      imageUrl: bonusGuiaImg.url,
    },
  ],
  qt = [
    {
      id: 1,
      name: "Depoimento de Professor 1",
      imageUrl: "/img/depoimento-01.webp",
    },
    {
      id: 2,
      name: "Depoimento de Professor 2",
      imageUrl: "/img/depoimento-02.webp",
    },
    {
      id: 3,
      name: "Depoimento de Professor 3",
      imageUrl: "/img/depoimento-03.webp",
    },
    {
      id: 4,
      name: "Depoimento de Professor 4",
      imageUrl: "/img/depoimento-04.webp",
    },
    {
      id: 5,
      name: "Depoimento de Professor 5",
      imageUrl: "/img/depoimento-05.webp",
    },
  ],
  U1 = [
    {
      question: "Para qual professor é indicado?",
      answer:
        "O material é feito para professores de História do Ensino Fundamental II e Ensino Médio, especialmente para quem busca praticidade e segurança para lecionar os principais períodos históricos, da Pré-História à História do Brasil.",
    },
    {
      question: "Recebo em qual formato? Consigo editar os slides?",
      answer:
        "Sim! Você recebe o material em PDF, prontos para projetar e 100% editáveis para personalizar textos, cores ou adicionar suas próprias imagens e anotações sempre que quiser.",
    },
    {
      question: "Consigo abrir e apresentar os slides em qualquer dispositivo?",
      answer:
        "Como os materiais são entregues em formato PDF, você pode abrir e projetar pelo computador ou notebooks, e também abrir o PDF em tablets e celulares compatíveis.",
    },
    {
      question: "O material é alinhado à BNCC / ENEM?",
      answer:
        "O Guia Anual de Planejamento de História é organizado por bimestre, competência e tema, com referência à BNCC e ao Novo Ensino Médio, e os conteúdos cobrem os principais períodos cobrados em sala e em avaliações.",
    },
    {
      question: "É assinatura mensal ou pagamento único?",
      answer:
        "Pagamento único. Acesso vitalício aos +300 slides e a todos os bônus inclusos, sem nenhuma mensalidade.",
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer:
        "Você tem 7 dias de garantia total. Se achar que o material não atendeu às suas expectativas ou não trouxe a segurança que você precisa em sala de aula, basta enviar uma mensagem que devolvemos 100% do seu dinheiro.",
    },
  ],
  r0 = [
    "Ana",
    "Beatriz",
    "Camila",
    "Daniela",
    "Eduarda",
    "Fernanda",
    "Gabriela",
    "Helena",
    "Isabela",
    "Julia",
    "Larissa",
    "Mariana",
    "Natália",
    "Olivia",
    "Patrícia",
    "Rafaela",
    "Sofia",
    "Tatiana",
    "Vanessa",
    "Yasmin",
    "Letícia",
    "Caroline",
    "Bruna",
    "Amanda",
    "Alice",
    "Lucas",
    "Matheus",
    "Gabriel",
    "Pedro",
    "João",
    "Guilherme",
    "Gustavo",
    "Felipe",
    "Rafael",
    "Bruno",
    "Daniel",
    "Rodrigo",
    "Thiago",
    "Vinícius",
    "Leonardo",
    "Arthur",
    "Davi",
    "Miguel",
    "Heitor",
    "Bernardo",
    "Samuel",
    "André",
    "Diego",
    "Marcos",
    "Rodrigo",
  ],
  d0 = [
    "Silva",
    "Santos",
    "Oliveira",
    "Souza",
    "Rodrigues",
    "Ferreira",
    "Alves",
    "Pereira",
    "Lima",
    "Gomes",
    "Costa",
    "Ribeiro",
    "Martins",
    "Carvalho",
    "Almeida",
    "Lopes",
    "Soares",
    "Fernandes",
    "Vieira",
    "Barbosa",
    "Rocha",
    "Dias",
    "Nascimento",
    "Moreira",
    "Andrade",
    "Cardozo",
    "Teixeira",
    "Araujo",
    "Melo",
    "Campos",
    "Nunes",
    "Cardoso",
    "Pinheiro",
    "Guimarães",
    "Castro",
    "Santana",
    "Silveira",
    "Mendes",
    "Barros",
    "Freitas",
    "Correia",
    "Machado",
    "Assis",
    "Moura",
    "Borges",
    "Pacheco",
    "Rezende",
    "Cavalcanti",
    "Fonseca",
    "Pinto",
  ],
  m0 = [
    "São Paulo - SP",
    "Rio de Janeiro - RJ",
    "Belo Horizonte - MG",
    "Curitiba - PR",
    "Porto Alegre - RS",
    "Salvador - BA",
    "Fortaleza - CE",
    "Brasília - DF",
    "Recife - PE",
    "Goiânia - GO",
    "Manaus - AM",
    "Belém - PA",
    "Florianópolis - SC",
    "Vitória - ES",
    "Natal - RN",
  ],
  h0 = [
    "HÁ 1 MINUTO",
    "HÁ 2 MINUTOS",
    "HÁ 3 MINUTOS",
    "HÁ 5 MINUTOS",
    "HÁ 8 MINUTOS",
    "HÁ 10 MINUTOS",
    "HÁ 15 MINUTOS",
    "HÁ 20 MINUTOS",
    "HÁ 30 MINUTOS",
    "HÁ 45 MINUTOS",
    "HÁ 1 HORA",
    "HÁ 2 HORAS",
    "HÁ 3 HORAS",
    "HÁ 4 HORAS",
  ];
function R1() {
  const N = r0[Math.floor(Math.random() * r0.length)],
    Z = d0[Math.floor(Math.random() * d0.length)],
    C = m0[Math.floor(Math.random() * m0.length)],
    v = h0[Math.floor(Math.random() * h0.length)];
  return { name: `${N} ${Z}`, city: C, timeAgo: v };
}
function H1() {
  const [N, Z] = ol.useState(null),
    [C, v] = ol.useState(!1),
    [L, J] = ol.useState(0);
  return (
    ol.useEffect(() => {
      let X;
      const Ol = (D) => {
        X = setTimeout(() => {
          (Z(R1()), v(!0), J((A) => A + 1));
          const q = Math.floor(Math.random() * 2e4) + 35e3;
          Ol(q);
        }, D);
      };
      return (
        Ol(1e4),
        () => {
          clearTimeout(X);
        }
      );
    }, []),
    ol.useEffect(() => {
      if (C) {
        const X = setTimeout(() => {
          (v(!1), setTimeout(() => Z(null), 300));
        }, 4200);
        return () => clearTimeout(X);
      }
    }, [C, L]),
    c.jsx("div", {
      id: "purchase-toast-overlay",
      className:
        "fixed top-4 right-4 z-[9999] pointer-events-none w-full max-w-[235px] sm:max-w-[255px]",
      children:
        N &&
        c.jsxs(
          "div",
          {
            id: `purchase-toast-card-${L}`,
            className: `pointer-events-auto bg-white border border-[#E2EAF4] rounded-[14px] shadow-[0_8px_24px_rgba(38,97,156,0.06)] p-3 flex items-center space-x-3 w-full transition-all duration-300 transform ${C ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95 translate-x-2"}`,
            children: [
              c.jsx("div", {
                className:
                  "relative flex-shrink-0 w-8 h-8 rounded-full bg-[#5E4B8B]/5 border border-[#5E4B8B]/10 flex items-center justify-center",
                children: c.jsx("div", {
                  className:
                    "w-5.5 h-5.5 rounded-full border-2 border-[#5E4B8B] flex items-center justify-center bg-white shadow-sm",
                  children: c.jsx(tn, {
                    className: "w-3 h-3 text-[#5E4B8B] stroke-[4]",
                  }),
                }),
              }),
              c.jsxs("div", {
                className: "flex-1 min-w-0 text-left",
                children: [
                  c.jsx("h4", {
                    className:
                      "text-[11px] sm:text-[12px] font-black text-gray-900 font-sans tracking-tight leading-tight",
                    children: N.name,
                  }),
                  c.jsxs("p", {
                    className:
                      "text-[9.5px] text-gray-500 font-sans leading-none mt-0.5",
                    children: [
                      "Adquiriu o ",
                      c.jsx("span", {
                        className: "font-extrabold text-[#5E4B8B]",
                        children: "Pacote Completo",
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "flex items-center mt-1",
                    children: c.jsx("span", {
                      className:
                        "text-[8px] tracking-wider font-extrabold text-[#5E4B8B] font-sans uppercase",
                      children: N.timeAgo,
                    }),
                  }),
                ],
              }),
            ],
          },
          L,
        ),
    })
  );
}
function q1() {
  const [N, Z] = ol.useState(0),
    [C, v] = ol.useState(!1),
    L = ol.useRef(null);
  ol.useEffect(() => {
    if (!L.current) return;
    const D = new IntersectionObserver(
      ([q]) => {
        q.isIntersecting && (v(!0), D.disconnect());
      },
      { rootMargin: "500px" },
    );
    return (D.observe(L.current), () => D.disconnect());
  }, []);
  const J = () => {
      Z((D) => (D === 0 ? qt.length - 1 : D - 1));
    },
    X = () => {
      Z((D) => (D === qt.length - 1 ? 0 : D + 1));
    },
    Ol = (D) => {
      const q = qt.length;
      let A = (D - N + q) % q;
      return (
        A > q / 2 && (A -= q),
        A === 0
          ? {
              transform: "translateX(0%) scale(1)",
              zIndex: 20,
              opacity: 1,
              filter: "brightness(1)",
              cursor: "default",
              pointerEvents: "auto",
            }
          : A === 1
            ? {
                transform: "translateX(50%) scale(0.86)",
                zIndex: 10,
                opacity: 0.5,
                filter: "brightness(0.65)",
                cursor: "pointer",
                pointerEvents: "auto",
              }
            : A === -1
              ? {
                  transform: "translateX(-50%) scale(0.86)",
                  zIndex: 10,
                  opacity: 0.5,
                  filter: "brightness(0.65)",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }
              : {
                  transform: `translateX(${A > 0 ? "95%" : "-95%"}) scale(0.7)`,
                  zIndex: 0,
                  opacity: 0,
                  filter: "brightness(0.4)",
                  cursor: "default",
                  pointerEvents: "none",
                }
      );
    };
  return c.jsxs("div", {
    id: "whatsapp-carousel-root",
    className: "relative max-w-4xl mx-auto px-2 sm:px-4 select-none",
    ref: L,
    children: [
      c.jsxs("div", {
        className:
          "relative mx-auto flex items-center justify-center min-h-[420px] xs:min-h-[480px] sm:min-h-[540px] md:min-h-[590px] overflow-hidden py-4 sm:py-6",
        children: [
          c.jsx("button", {
            id: "btn-prev-review-side",
            onClick: J,
            className:
              "absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/20",
            "aria-label": "Depoimento Anterior",
            children: c.jsx(x1, {
              className: "w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]",
            }),
          }),
          c.jsx("div", {
            className:
              "relative w-[220px] xs:w-[250px] sm:w-[285px] md:w-[315px] h-[390px] xs:h-[450px] sm:h-[510px] md:h-[550px] flex items-center justify-center",
            children: qt.map((D, q) => {
              const A = Ol(q),
                y = q === N,
                S = (q - N + qt.length) % qt.length === qt.length - 1,
                K = (q - N + qt.length) % qt.length === 1;
              return c.jsxs(
                "div",
                {
                  id: `review-slide-${D.id}`,
                  onClick: () => {
                    (S && J(), K && X());
                  },
                  className:
                    "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  style: {
                    ...A,
                    transformOrigin: "center center",
                    willChange: "transform, opacity",
                  },
                  children: [
                    D.imageUrl
                      ? c.jsx("div", {
                          className:
                            "w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-slate-200/80",
                          children:
                            C &&
                            c.jsx("img", {
                              src: D.imageUrl,
                              alt: D.name || `Depoimento ${D.id}`,
                              className:
                                "w-full h-full object-contain select-none pointer-events-none",
                              loading: "lazy",
                              decoding: "async",
                              referrerPolicy: "no-referrer",
                              width: "315",
                              height: "550",
                            }),
                        })
                      : c.jsx("div", {
                          className:
                            "w-full h-full border-2 border-dashed border-gray-300 bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-lg select-none",
                          children: c.jsxs("span", {
                            className:
                              "text-sm sm:text-base font-bold text-gray-600 tracking-wider",
                            children: ["DEPOIMENTO 0", D.id],
                          }),
                        }),
                    !y &&
                      c.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/25 pointer-events-none rounded-2xl",
                      }),
                  ],
                },
                D.id,
              );
            }),
          }),
          c.jsx("button", {
            id: "btn-next-review-side",
            onClick: X,
            className:
              "absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/20",
            "aria-label": "Próximo Depoimento",
            children: c.jsx(Ui, {
              className: "w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]",
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className:
          "flex items-center justify-center mt-2 space-x-2 select-none",
        children: qt.map((D, q) =>
          c.jsx(
            "button",
            {
              id: `indicator-dot-${q}`,
              onClick: () => Z(q),
              className: `rounded-full transition-all duration-300 cursor-pointer ${N === q ? "w-6 h-2.5 bg-[#F2C14E] shadow-[0_0_8px_rgba(242,193,78,0.5)]" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"}`,
              "aria-label": `Ir para depoimento ${q + 1}`,
            },
            q,
          ),
        ),
      }),
    ],
  });
}
const zf = [slideHistoria1.url, slideHistoria2.url, slideHistoria3.url, slideHistoria4.url],
  Af = [slideHistoria5.url, slideHistoria6.url, slideHistoria7.url, slideHistoria8.url],
  Y1 = [...zf, ...zf],
  G1 = [...Af, ...Af];
function x0({ imageUrl: N, index: Z }) {
  return c.jsx("div", {
    className:
      "relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] aspect-[16/9] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(94,75,139,0.18)] hover:border-[#5E4B8B]/50 transition-all duration-300 select-none group",
    children: c.jsx("img", {
      src: N,
      alt: `Apresentação de Slide de História ${Z + 1}`,
      className:
        "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500",
      loading: "lazy",
      decoding: "async",
      referrerPolicy: "no-referrer",
      width: "460",
      height: "259",
    }),
  });
}
function X1() {
  const [N, Z] = ol.useState(!1),
    [C, v] = ol.useState(!0),
    L = ol.useRef(null);
  return (
    ol.useEffect(() => {
      if (!L.current) return;
      const J = new IntersectionObserver(
        ([X]) => {
          X.isIntersecting ? (Z(!0), v(!0)) : v(!1);
        },
        { rootMargin: "350px" },
      );
      return (J.observe(L.current), () => J.disconnect());
    }, []),
    c.jsx("div", {
      ref: L,
      id: "infinite-gallery-section",
      className:
        "w-full relative select-none overflow-hidden space-y-3.5 sm:space-y-5 py-2",
      children: N
        ? c.jsxs(c.Fragment, {
            children: [
              c.jsx("div", {
                className: "w-full overflow-hidden flex py-1",
                children: c.jsx("div", {
                  className:
                    "animate-marquee-left hover:[animation-play-state:paused] flex gap-3.5 sm:gap-5 items-center cursor-pointer",
                  style: { animationPlayState: C ? void 0 : "paused" },
                  children: Y1.map((J, X) =>
                    c.jsx(
                      x0,
                      { imageUrl: J, index: X % zf.length },
                      `row1-${X}`,
                    ),
                  ),
                }),
              }),
              c.jsx("div", {
                className: "w-full overflow-hidden flex py-1",
                children: c.jsx("div", {
                  className:
                    "animate-marquee-right hover:[animation-play-state:paused] flex gap-3.5 sm:gap-5 items-center cursor-pointer",
                  style: { animationPlayState: C ? void 0 : "paused" },
                  children: G1.map((J, X) =>
                    c.jsx(
                      x0,
                      { imageUrl: J, index: X % Af.length },
                      `row2-${X}`,
                    ),
                  ),
                }),
              }),
            ],
          })
        : c.jsx("div", {
            className: "w-full h-[320px] flex items-center justify-center",
            children: c.jsx("div", {
              className:
                "w-8 h-8 rounded-full border-2 border-[#5E4B8B] border-t-transparent animate-spin opacity-40",
            }),
          }),
    })
  );
}
function V1({
  isOpen: N,
  onClose: Z,
  onUpgradeToComplete: C,
  onContinueBasic: v,
}) {
  const [L, J] = ol.useState(!1);
  return (
    ol.useEffect(() => {
      if (N) J(!0);
      else {
        const X = setTimeout(() => J(!1), 200);
        return () => clearTimeout(X);
      }
    }, [N]),
    !N && !L
      ? null
      : c.jsx("div", {
          className: `fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto transition-opacity duration-200 ${N ? "opacity-100" : "opacity-0"}`,
          children: c.jsxs("div", {
            className: `relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto transform transition-all duration-200 ${N ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`,
            children: [
              c.jsxs("div", {
                className:
                  "bg-[#5E4B8B] text-white px-4 py-3.5 sm:px-5 sm:py-4 text-center relative flex flex-col items-center",
                children: [
                  c.jsx("button", {
                    onClick: Z,
                    className:
                      "absolute top-3 right-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition-all cursor-pointer",
                    "aria-label": "Fechar",
                    children: c.jsx(Be, { className: "w-4 h-4 stroke-[2.5]" }),
                  }),
                  c.jsx("div", {
                    className:
                      "w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-1.5 text-white shadow-inner",
                    children: c.jsx(g0, { className: "w-5 h-5" }),
                  }),
                  c.jsxs("h3", {
                    className:
                      "text-sm sm:text-base font-extrabold tracking-tight text-white flex items-center gap-1.5 justify-center leading-snug",
                    children: [
                      c.jsx("span", { children: "🎁" }),
                      c.jsx("span", {
                        children: "ESPERE! Vai deixar esses bônus incríveis?",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "p-4 sm:p-5 space-y-3",
                children: [
                  c.jsxs("p", {
                    className:
                      "text-center font-extrabold text-slate-700 text-xs sm:text-sm uppercase tracking-wide",
                    children: [
                      "O Pacote Básico ",
                      c.jsx("span", {
                        className: "text-red-500",
                        children: "NÃO INCLUI:",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-red-50/70 border border-red-100 rounded-xl p-3 space-y-1.5",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-[11px] sm:text-xs text-red-900/80 font-bold",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 font-extrabold text-xs",
                            children: "✕",
                          }),
                          c.jsx("span", {
                            children:
                              "+150 Slides Adicionais (Total de +300 Slides)",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-[11px] sm:text-xs text-red-900/80 font-bold",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 font-extrabold text-xs",
                            children: "✕",
                          }),
                          c.jsx("span", {
                            children: "+60 Atividades de História para Imprimir",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-[11px] sm:text-xs text-red-900/80 font-bold",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 font-extrabold text-xs",
                            children: "✕",
                          }),
                          c.jsx("span", {
                            children: "+30 Mapas Mentais de História",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-[11px] sm:text-xs text-red-900/80 font-bold",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 font-extrabold text-xs",
                            children: "✕",
                          }),
                          c.jsx("span", {
                            children: "+30 Planos de Aula de História",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-[11px] sm:text-xs text-red-900/80 font-bold",
                        children: [
                          c.jsx("span", {
                            className: "text-red-500 font-extrabold text-xs",
                            children: "✕",
                          }),
                          c.jsx("span", {
                            children: "Guia Anual de Planejamento de História (BNCC)",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-[#5E4B8B]/10 border border-[#5E4B8B]/30 rounded-xl p-3 text-center space-y-0.5",
                    children: [
                      c.jsxs("p", {
                        className: "text-xs font-extrabold text-[#5E4B8B]",
                        children: [
                          "Por apenas ",
                          c.jsx("span", {
                            className: "text-[#5E4B8B] font-black",
                            children: "+ R$ 5,90",
                          }),
                          ", destrave o",
                        ],
                      }),
                      c.jsx("p", {
                        className:
                          "text-lg sm:text-xl font-black text-[#5E4B8B] font-display tracking-tight uppercase",
                        children: "PACOTE COMPLETO",
                      }),
                      c.jsx("p", {
                        className: "text-[11px] font-bold text-slate-500",
                        children: "com todos os Bônus (valem R$ 97,24)",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "space-y-2 pt-1",
                    children: [
                      c.jsx("a", {
                        id: "btn-modal-upgrade-complete",
                        href: "https://ggcheckout.app/checkout/v5/nCx49LrTVFiCFbjY9URd",
                        onClick: (X) => {
                          C
                            ? (X.preventDefault(), C())
                            : Tf(
                                "https://ggcheckout.app/checkout/v5/nCx49LrTVFiCFbjY9URd",
                              );
                        },
                        className:
                          "w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-3 px-3.5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm cursor-pointer shadow-[0_4px_16px_rgba(22,163,74,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all text-center leading-snug block",
                        children:
                          "SIM! Quero o Pacote Completo Com Desconto (R$ 15,90)",
                      }),
                      c.jsx("a", {
                        id: "btn-modal-continue-basic",
                        href: "https://ggcheckout.app/checkout/v5/MRifqMwACteBaJOdDdNK",
                        onClick: (X) => {
                          v
                            ? (X.preventDefault(), v())
                            : Tf(
                                "https://ggcheckout.app/checkout/v5/MRifqMwACteBaJOdDdNK",
                              );
                        },
                        className:
                          "w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 py-2.5 px-3 rounded-xl font-bold text-xs cursor-pointer transition-all text-center block",
                        children: "Continuar apenas com o pacote básico",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
export default function Q1() {
  const [N, Z] = ol.useState(null),
    [C, v] = ol.useState(!1),
    [L, J] = ol.useState(!1),
    [X, Ol] = ol.useState(0),
    [D, q] = ol.useState(!1),
    A = ol.useRef(null);
  (ol.useEffect(() => {}, []),
    ol.useEffect(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
      )
        return;
      const K = Array.from(document.querySelectorAll(".rev")).filter((ml) =>
          ml.getBoundingClientRect().top < window.innerHeight * 0.92
            ? !1
            : (ml.classList.add("rev-oculto"), !0),
        ),
        yl = new IntersectionObserver(
          (ml) => {
            ml.forEach((P) => {
              P.isIntersecting &&
                (P.target.classList.remove("rev-oculto"),
                yl.unobserve(P.target));
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
        );
      return (K.forEach((ml) => yl.observe(ml)), () => yl.disconnect());
    }, []),
    ol.useEffect(() => {
      let S = !1;
      const K = () => {
          const ml = document.documentElement.scrollHeight - window.innerHeight;
          Ol(ml > 0 ? (window.scrollY / ml) * 100 : 0);
          const P = document.getElementById("hero-section"),
            it = document.getElementById("checkout-section");
          if (!P) {
            S = !1;
            return;
          }
          const ca = P.getBoundingClientRect().bottom < 100;
          let Yt = !0;
          (it &&
            (Yt = it.getBoundingClientRect().top > window.innerHeight - 50),
            J(ca && Yt),
            (S = !1));
        },
        yl = () => {
          S || (window.requestAnimationFrame(K), (S = !0));
        };
      return (
        window.addEventListener("scroll", yl, { passive: !0 }),
        K(),
        () => window.removeEventListener("scroll", yl)
      );
    }, []),
    ol.useEffect(() => {
      if (!A.current) return;
      const S = new IntersectionObserver(
        ([K]) => {
          K.isIntersecting && (q(!0), S.disconnect());
        },
        { rootMargin: "300px" },
      );
      return (S.observe(A.current), () => S.disconnect());
    }, []));
  const y = (S) => {
    Z(N === S ? null : S);
  };
  return c.jsxs("div", {
    className:
      "min-h-screen bg-[#F7F3EA] text-[#2B2B2B] font-sans selection:bg-[#5E4B8B]/15 selection:text-[#5E4B8B] overflow-x-hidden",
    children: [
      c.jsx("div", {
        id: "reading-progress",
        className: "fixed top-0 left-0 h-[3px] z-50 pointer-events-none",
        style: {
          width: `${X}%`,
          background: "linear-gradient(90deg,#5E4B8B,#F2C14E)",
          transition: "width 100ms linear",
        },
        "aria-hidden": "true",
      }),
      c.jsxs("div", {
        id: "urgency-bar",
        className:
          "w-full bg-[#4C3C73] text-white py-2 px-4 text-center text-xs font-semibold tracking-wide flex items-center justify-center space-x-2 relative z-40 shadow-sm font-display",
        children: [
          c.jsx("span", {
            className: "inline-block animate-pulse",
            children: "🔥",
          }),
          c.jsx("span", {
            children: "OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO!",
          }),
        ],
      }),
      c.jsx("div", {
        className: "pincelada w-full relative z-30",
        "aria-hidden": "true",
      }),
      c.jsx("div", {
        className: "friso w-full relative z-30 mt-1.5",
        "aria-hidden": "true",
      }),
      c.jsxs("section", {
        id: "hero-section",
        className:
          "relative py-4 sm:py-10 px-2 sm:px-6 max-w-6xl mx-auto text-center",
        children: [
          c.jsx("div", {
            className:
              "absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#5E4B8B]/5 blur-[120px] pointer-events-none -z-10",
          }),
          c.jsxs("div", {
            className:
              "bg-white border border-[#E3DCCF] rounded-[24px] sm:rounded-[36px] p-3.5 sm:p-8 md:p-10 space-y-5 sm:space-y-8 shadow-sm",
            children: [
              c.jsxs("div", {
                id: "hero-badge",
                className:
                  "inline-flex items-center space-x-1 bg-white border border-[#E3DCCF] px-4 py-2 rounded-full shadow-xs mx-auto animate-fade-in-down",
                children: [
                  c.jsx("div", {
                    className: "flex text-[#F2C14E]",
                    children: [...Array(5)].map((S, K) =>
                      c.jsx(l0, { className: "w-4 h-4 fill-[#F2C14E]" }, K),
                    ),
                  }),
                  c.jsx("span", {
                    className: "text-xs font-semibold text-gray-700 font-sans",
                    children:
                      "Aprovado por +1.250 professores de História no Brasil",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "max-w-4xl mx-auto space-y-4",
                children: [
                  c.jsxs("h1", {
                    id: "hero-title",
                    className:
                      "text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight font-display leading-[1.15]",
                    children: [
                      "+300 ",
                      c.jsx("span", {
                        className: "text-[#5E4B8B] grifo-pincel",
                        children: "Slides de História",
                      }),
                      " prontos para utilizar",
                    ],
                  }),
                  c.jsx("div", { className: "filete-ouro w-40 mx-auto !mt-5" }),
                ],
              }),
              c.jsx("div", {
                id: "hero-image-container",
                className: "w-full my-3 sm:my-6 flex justify-center",
                children: c.jsx("img", {
                  src: "/img/mockup-hero-640.webp",
                  srcSet:
                    "/img/mockup-hero-640.webp 640w, /img/mockup-hero.webp 1254w",
                  sizes: "(max-width: 640px) 100vw, 896px",
                  alt: "Mockup do Pacote de Slides de História",
                  width: 640,
                  height: 640,
                  className:
                    "flutua w-full max-w-4xl lg:max-w-5xl h-auto object-contain drop-shadow-xl rounded-xl sm:rounded-2xl",
                  loading: "eager",
                  fetchPriority: "high",
                  decoding: "async",
                  referrerPolicy: "no-referrer",
                }),
              }),
              c.jsx("p", {
                id: "hero-subtitle",
                className:
                  "text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed px-2 sm:px-4",
                children:
                  "Apresentações completas pra projetar em sala. Economize horas de planejamento e tenha aulas visuais de História que prendem a atenção dos alunos.",
              }),
              c.jsxs("div", {
                className: "space-y-4 max-w-md mx-auto pt-2",
                children: [
                  c.jsxs("a", {
                    id: "btn-hero-cta",
                    href: "#checkout-section",
                    className:
                      "cta-brilho w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 px-8 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center space-x-2.5 shadow-lg shadow-green-900/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer",
                    children: [
                      c.jsx("span", { children: "Quero Acessar Agora" }),
                      c.jsx(Ui, { className: "w-5 h-5 stroke-[2.5]" }),
                    ],
                  }),
                  c.jsxs("p", {
                    id: "hero-trust-labels",
                    className:
                      "text-xs text-gray-500 font-sans flex flex-wrap justify-center items-center gap-y-2 gap-x-4",
                    children: [
                      c.jsxs("span", {
                        className: "flex items-center",
                        children: [
                          c.jsx(v1, {
                            className: "w-3.5 h-3.5 text-[#5E4B8B] mr-1",
                          }),
                          " Acesso imediato",
                        ],
                      }),
                      c.jsx("span", {
                        className: "text-gray-300",
                        children: "•",
                      }),
                      c.jsxs("span", {
                        className: "flex items-center",
                        children: [
                          c.jsx(g1, {
                            className: "w-3.5 h-3.5 text-[#5E4B8B] mr-1",
                          }),
                          " Bônus exclusivos",
                        ],
                      }),
                      c.jsx("span", {
                        className: "text-gray-300",
                        children: "•",
                      }),
                      c.jsxs("span", {
                        className: "flex items-center",
                        children: [
                          c.jsx(bf, {
                            className: "w-3.5 h-3.5 text-[#5E4B8B] mr-1",
                          }),
                          " Garantia de 7 dias",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        id: "transformation-section",
        className:
          "py-10 sm:py-14 px-3 sm:px-6 bg-white border-y border-[#E3DCCF]/60",
        children: c.jsxs("div", {
          className: "max-w-4xl mx-auto space-y-6 sm:space-y-8",
          children: [
            c.jsxs("div", {
              className:
                "rev text-center space-y-3 max-w-2xl mx-auto px-2 flex flex-col items-center",
              children: [
                c.jsx("div", {
                  className: "friso w-36 mb-1",
                  "aria-hidden": "true",
                }),
                c.jsxs("h2", {
                  className:
                    "text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F1F1F] font-display tracking-tight leading-tight",
                  children: [
                    "Com esse material você ",
                    c.jsx("span", {
                      className: "text-[#5E4B8B]",
                      children: "não precisa mais:",
                    }),
                  ],
                }),
                c.jsx("div", { className: "filete-ouro w-32 mx-auto !mt-4" }),
              ],
            }),
            c.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl mx-auto",
              children: [
                c.jsxs("div", {
                  className:
                    "rev bg-white border border-[#E3DCCF] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:border-[#5E4B8B]/40 hover:-translate-y-[3px] hover:shadow-[0_10px_26px_rgba(94,75,139,0.10)]",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0",
                      children: c.jsx(Be, {
                        className:
                          "w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-500 stroke-[3]",
                      }),
                    }),
                    c.jsx("p", {
                      className:
                        "text-xs sm:text-sm md:text-base text-gray-800 font-medium font-sans leading-snug",
                      children: "Criar slides do zero toda semana",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "rev bg-white border border-[#E3DCCF] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:border-[#5E4B8B]/40 hover:-translate-y-[3px] hover:shadow-[0_10px_26px_rgba(94,75,139,0.10)]",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0",
                      children: c.jsx(Be, {
                        className:
                          "w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-500 stroke-[3]",
                      }),
                    }),
                    c.jsx("p", {
                      className:
                        "text-xs sm:text-sm md:text-base text-gray-800 font-medium font-sans leading-snug",
                      children:
                        "Ensinar um conteúdo de História que você não estudou na faculdade",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "rev bg-white border border-[#E3DCCF] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:border-[#5E4B8B]/40 hover:-translate-y-[3px] hover:shadow-[0_10px_26px_rgba(94,75,139,0.10)]",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0",
                      children: c.jsx(Be, {
                        className:
                          "w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-500 stroke-[3]",
                      }),
                    }),
                    c.jsx("p", {
                      className:
                        "text-xs sm:text-sm md:text-base text-gray-800 font-medium font-sans leading-snug",
                      children:
                        "Passar grande parte da aula escrevendo no quadro ou caçando atividades na internet",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "rev bg-white border border-[#E3DCCF] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:border-[#5E4B8B]/40 hover:-translate-y-[3px] hover:shadow-[0_10px_26px_rgba(94,75,139,0.10)]",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0",
                      children: c.jsx(Be, {
                        className:
                          "w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-500 stroke-[3]",
                      }),
                    }),
                    c.jsx("p", {
                      className:
                        "text-xs sm:text-sm md:text-base text-gray-800 font-medium font-sans leading-snug",
                      children:
                        "Sentir insegurança ao abordar períodos históricos fora da sua especialidade",
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "cantoneira rev relative overflow-hidden bg-[#2A2145] rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 text-center shadow-md max-w-3xl mx-auto border border-[#45386B]",
              children: c.jsx("p", {
                className:
                  "text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white font-sans leading-relaxed",
                children:
                  "Porque você já encontra tudo pronto, organizado e com total segurança sobre o conteúdo em um único lugar — cobrindo os principais períodos da História: Pré-História, História Antiga, Idade Média, Idade Moderna, História Contemporânea e História do Brasil.",
              }),
            }),
          ],
        }),
      }),
      c.jsxs("section", {
        id: "what-you-get-section",
        className:
          "relative py-12 sm:py-16 bg-[#F7F3EA] text-center overflow-hidden",
        children: [
          c.jsxs("svg", {
            className:
              "marca-secao right-[-30px] top-8 w-48 h-48 text-[#5E4B8B]",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              c.jsx("path", { d: "m3 9 9-6 9 6H3ZM5 9v10M10 9v10M14 9v10M19 9v10M3 19h18M2 22h20" }),
            ],
          }),
          c.jsxs("div", {
            className: "relative z-10 w-full space-y-8 sm:space-y-10",
            children: [
              c.jsxs("div", {
                className:
                  "rev space-y-3 max-w-2xl mx-auto px-4 flex flex-col items-center",
                children: [
                  c.jsx("div", {
                    className: "friso w-36 mb-1",
                    "aria-hidden": "true",
                  }),
                  c.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl font-black text-[#1F1F1F] font-display tracking-tight",
                    children: "Veja os slides por dentro",
                  }),
                  c.jsx("div", { className: "filete-ouro w-32 mx-auto !mt-4" }),
                  c.jsx("p", {
                    className:
                      "text-sm sm:text-base text-gray-600 font-sans mt-3",
                    children:
                      "Observe algumas apresentações reais do conteúdo que você recebe.",
                  }),
                ],
              }),
              c.jsx(X1, {}),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        id: "middle-cta-banner",
        className:
          "relative bg-[#2A2145] text-center text-white overflow-hidden",
        children: [
          c.jsx("svg", {
            className: "block w-full h-[22px] sm:h-[28px]",
            viewBox: "0 0 120 26",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: c.jsx("path", {
              d: "M0 26V8c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8 10-8 20-8 10 8 20 8v18z",
              fill: "#F7F3EA",
            }),
          }),
          c.jsxs("svg", {
            className: "marca-secao left-[-26px] top-6 w-40 h-40 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              c.jsx("path", { d: "m3 9 9-6 9 6H3ZM5 9v10M10 9v10M14 9v10M19 9v10M3 19h18M2 22h20" }),
            ],
          }),
          c.jsxs("svg", {
            className:
              "marca-secao right-[-26px] bottom-6 w-40 h-40 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              c.jsx("path", { d: "M7 3h10M7 21h10M7 3v4c0 2 5 5 5 5s5-3 5-5V3M7 21v-4c0-2 5-5 5-5s5 3 5 5v4M10 6h4M10 18h4" }),
            ],
          }),
          c.jsxs("div", {
            className:
              "relative z-10 px-4 pt-3 pb-10 sm:pb-12 max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6",
            children: [
              c.jsx("div", { className: "friso w-36", "aria-hidden": "true" }),
              c.jsx("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight leading-tight",
                children: "Pronto para transformar suas aulas?",
              }),
              c.jsx("div", { className: "filete-ouro w-32" }),
              c.jsxs("a", {
                id: "btn-receive-cta",
                href: "#checkout-section",
                className:
                  "cta-brilho bg-[#16A34A] hover:bg-[#15803D] text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full font-black text-sm sm:text-lg flex items-center justify-center space-x-2.5 cursor-pointer shadow-[0_10px_34px_rgba(22,163,74,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full sm:w-auto",
                children: [
                  c.jsx("span", { children: "Começar Agora" }),
                  c.jsx(Ui, { className: "w-5 h-5 stroke-[2.5]" }),
                ],
              }),
            ],
          }),
          c.jsx("svg", {
            className: "block w-full h-[22px] sm:h-[28px] rotate-180",
            viewBox: "0 0 120 26",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: c.jsx("path", {
              d: "M0 26V8c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8 10-8 20-8 10 8 20 8v18z",
              fill: "#F7F3EA",
            }),
          }),
        ],
      }),
      c.jsx("section", {
        id: "bonus-section",
        className: "cv-auto py-10 sm:py-12 bg-[#F7F3EA] px-3 sm:px-4",
        children: c.jsxs("div", {
          className: "max-w-4xl mx-auto space-y-8 text-center",
          children: [
            c.jsxs("div", {
              className: "rev space-y-3",
              children: [
                c.jsx("div", {
                  className: "flex justify-center",
                  children: c.jsxs("span", {
                    className:
                      "bg-white text-[#5E4B8B] text-[11px] font-extrabold uppercase tracking-[0.18em] px-5 py-2 rounded-full inline-flex items-center gap-2 border border-[#DBA63A]/60 shadow-sm",
                    children: [
                      c.jsx(g0, { className: "w-3.5 h-3.5 text-[#DBA63A]" }),
                      "BÔNUS EXCLUSIVOS",
                    ],
                  }),
                }),
                c.jsx("h2", {
                  className:
                    "text-xl sm:text-2xl md:text-3xl font-black text-[#5E4B8B] font-display tracking-tight leading-tight",
                  children: "E tem mais! Leve também:",
                }),
                c.jsx("div", { className: "filete-ouro w-32 mx-auto !mt-4" }),
              ],
            }),
            c.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto",
              children: w1.map((S) =>
                c.jsxs(
                  "div",
                  {
                    id: `bonus-card-${S.id}`,
                    className:
                      "rev bg-white border border-[#E3DCCF] rounded-[20px] p-5 sm:p-6 flex flex-col items-center text-center space-y-3.5 shadow-[0_6px_20px_rgba(94,75,139,0.04)] hover:shadow-[0_14px_34px_rgba(94,75,139,0.12)] hover:border-[#5E4B8B]/30 hover:-translate-y-1 relative overflow-hidden",
                    children: [
                      c.jsxs("span", {
                        className:
                          "absolute top-3.5 right-3.5 bg-[#5E4B8B]/10 text-[#5E4B8B] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                        children: ["Bônus #", S.id],
                      }),
                      c.jsx("div", {
                        className:
                          "w-full flex items-center justify-center pt-2",
                        children: S.imageUrl
                          ? c.jsxs("div", {
                              className:
                                "relative w-full max-w-[250px] aspect-square mx-auto flex items-center justify-center mt-6 mb-1",
                              children: [
                                c.jsx("svg", {
                                  viewBox: "0 0 200 200",
                                  fill: "none",
                                  "aria-hidden": "true",
                                  className:
                                    "absolute inset-0 w-full h-full text-[#DBA63A] pointer-events-none z-0 overflow-visible",
                                  children: c.jsxs("g", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                      c.jsx("path", {
                                        d: "M62 8 100 -12 138 8",
                                        strokeWidth: "1.3",
                                        opacity: ".7",
                                      }),
                                      c.jsx("circle", {
                                        cx: "100",
                                        cy: "-13",
                                        r: "2.6",
                                        fill: "currentColor",
                                        stroke: "none",
                                      }),
                                      c.jsx("rect", {
                                        x: "8",
                                        y: "8",
                                        width: "184",
                                        height: "184",
                                        rx: "5",
                                        strokeWidth: "2.4",
                                      }),
                                      c.jsx("rect", {
                                        x: "14",
                                        y: "14",
                                        width: "172",
                                        height: "172",
                                        rx: "3",
                                        strokeWidth: "1",
                                        opacity: ".6",
                                      }),
                                      c.jsx("rect", {
                                        x: "24",
                                        y: "24",
                                        width: "152",
                                        height: "152",
                                        rx: "2",
                                        strokeWidth: "1.6",
                                      }),
                                      c.jsx("path", {
                                        d: "M8 8 24 24M192 8 176 24M8 192 24 176M192 192 176 176",
                                        strokeWidth: "1.2",
                                        opacity: ".75",
                                      }),
                                      c.jsx("path", {
                                        d: "M100 14.5l4 4.5-4 4.5-4-4.5zM100 176.5l4 4.5-4 4.5-4-4.5zM19 95.5l4.5 4-4.5 4-4.5-4zM181 95.5l4.5 4-4.5 4-4.5-4z",
                                        fill: "currentColor",
                                        stroke: "none",
                                      }),
                                    ],
                                  }),
                                }),
                                c.jsx("img", {
                                  src: S.imageUrl,
                                  alt: S.title,
                                  width: 360,
                                  height: 360,
                                  className:
                                    "relative z-10 w-[72%] h-[72%] object-contain",
                                  loading: "lazy",
                                  decoding: "async",
                                }),
                              ],
                            })
                          : c.jsx("div", {
                              className:
                                "w-full h-40 sm:h-48 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center shadow-xs select-none",
                              children: c.jsxs("span", {
                                className:
                                  "text-xs sm:text-sm font-bold text-gray-500 tracking-wider",
                                children: ["IMG BÔNUS ", S.id],
                              }),
                            }),
                      }),
                      c.jsx("h3", {
                        className:
                          "font-extrabold text-sm sm:text-base text-[#5E4B8B] font-display tracking-tight leading-snug",
                        children: S.title,
                      }),
                      c.jsx("p", {
                        className:
                          "text-xs sm:text-sm text-gray-600 leading-relaxed",
                        children: S.description,
                      }),
                    ],
                  },
                  S.id,
                ),
              ),
            }),
            c.jsxs("div", {
              className:
                "cantoneira rev bg-[#2A2145] text-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-center max-w-xl mx-auto shadow-[0_14px_40px_rgba(42,33,69,0.30)] relative overflow-hidden border border-[#45386B]",
              children: [
                c.jsx("div", {
                  className:
                    "absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none",
                }),
                c.jsxs("div", {
                  className: "relative z-10 space-y-1.5 sm:space-y-2.5",
                  children: [
                    c.jsx("p", {
                      className:
                        "text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/85",
                      children: "VALOR TOTAL DOS BÔNUS",
                    }),
                    c.jsx("div", { className: "filete-ouro w-24 mx-auto" }),
                    c.jsx("p", {
                      className:
                        "text-lg sm:text-2xl font-black text-white/70 line-through font-display tracking-tight",
                      children: "R$ 97,24",
                    }),
                    c.jsxs("div", {
                      className:
                        "pt-1 text-xs sm:text-base md:text-lg font-black text-white flex items-center justify-center gap-1.5 sm:gap-2.5 whitespace-nowrap",
                      children: [
                        c.jsx("span", { children: "Inclusos" }),
                        c.jsx("span", {
                          className:
                            "bg-[#F2C14E] text-[#2A2145] font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-lg uppercase tracking-wide shadow-xs",
                          children: "GRÁTIS",
                        }),
                        c.jsx("span", { children: "no Pacote Completo!" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsxs("section", {
        id: "checkout-section",
        className:
          "relative overflow-hidden py-12 sm:py-14 bg-[#EFE7D8]/60 border-t border-[#E3DCCF] px-4 scroll-mt-12",
        children: [
          c.jsxs("svg", {
            className: "marca-secao -left-10 top-10 w-56 h-56 text-[#5E4B8B]",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              c.jsx("path", { d: "m3 9 9-6 9 6H3ZM5 9v10M10 9v10M14 9v10M19 9v10M3 19h18M2 22h20" }),
            ],
          }),
          c.jsxs("svg", {
            className:
              "marca-secao -right-10 bottom-10 w-56 h-56 text-[#5E4B8B]",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              c.jsx("path", { d: "M7 3h10M7 21h10M7 3v4c0 2 5 5 5 5s5-3 5-5V3M7 21v-4c0-2 5-5 5-5s5 3 5 5v4M10 6h4M10 18h4" }),
            ],
          }),
          c.jsxs("div", {
            className:
              "rev relative z-10 max-w-4xl mx-auto text-center space-y-4",
            children: [
              c.jsx("div", {
                className: "friso w-44 mx-auto",
                "aria-hidden": "true",
              }),
              c.jsx("h2", {
                className:
                  "text-3xl sm:text-5xl md:text-6xl font-black text-[#5E4B8B] font-display tracking-tight leading-tight",
                children: "Escolha o Melhor Pacote Para Você!",
              }),
              c.jsx("div", { className: "filete-ouro w-40 mx-auto !mt-5" }),
              c.jsx("p", {
                className:
                  "text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed",
                children:
                  "Mais praticidade pra planejar e ministrar suas aulas de História, com apresentações de slides completas e materiais extras prontos pra aplicar com total segurança.",
              }),
              c.jsxs("div", {
                className:
                  "pt-2 flex flex-col items-center justify-center gap-2 text-[#5E4B8B] text-xs sm:text-sm font-extrabold uppercase tracking-wide",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx(y1, {
                        className: "w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]",
                      }),
                      c.jsx("span", {
                        children: "ENVIADO NO SEU E-MAIL E WHATSAPP",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "flex flex-wrap items-center justify-center gap-4 sm:gap-6",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          c.jsx(b1, {
                            className: "w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]",
                          }),
                          c.jsx("span", { children: "PODE SER IMPRESSO" }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          c.jsx(bf, {
                            className: "w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]",
                          }),
                          c.jsx("span", { children: "GARANTIA DE 7 DIAS" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "relative z-10 mt-8 sm:mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start",
            children: [
              c.jsxs("div", {
                id: "plan-basic-card",
                className:
                  "bg-white border border-[#E3DCCF] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative text-center",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-2xl sm:text-3xl font-black text-gray-900 font-display",
                        children: "Pacote Básico",
                      }),
                      c.jsx("div", {
                        className: "mt-3 mb-1",
                        children: c.jsx("span", {
                          className:
                            "text-sm font-bold text-gray-400 line-through",
                          children: "R$ 37,90",
                        }),
                      }),
                      c.jsx("div", {
                        className:
                          "text-5xl sm:text-6xl font-black text-[#16A34A] font-display tracking-tight mb-1",
                        children: "R$ 10",
                      }),
                      c.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-bold text-gray-500 mb-2",
                        children: "Pagamento único",
                      }),
                      c.jsx("div", {
                        className:
                          "inline-block bg-[#E8F8F0] text-[#16A34A] border border-[#A7F3D0] font-black text-[11px] sm:text-xs px-4 py-1 rounded-full uppercase tracking-wider mb-6",
                        children: "ECONOMIZE R$ 27,90",
                      }),
                      c.jsx("div", {
                        className: "w-full border-t border-gray-100 my-4",
                      }),
                      c.jsxs("ul", {
                        className: "space-y-3.5 text-left mb-6",
                        children: [
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800",
                            children: [
                              c.jsx(tn, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children: "+150 Slides de História",
                              }),
                            ],
                          }),
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800",
                            children: [
                              c.jsx(tn, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children:
                                  "Prontos para projetar e 100% editáveis",
                              }),
                            ],
                          }),
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800",
                            children: [
                              c.jsx(t0, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children:
                                  "Acesso vitalício ao material principal",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "text-left mb-8",
                        children: [
                          c.jsx("p", {
                            className:
                              "text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-3",
                            children: "NÃO INCLUSOS NESTE PACOTE:",
                          }),
                          c.jsxs("ul", {
                            className: "space-y-3",
                            children: [
                              c.jsxs("li", {
                                className:
                                  "flex items-center gap-3 text-xs sm:text-sm text-slate-400 line-through",
                                children: [
                                  c.jsx(Be, {
                                    className:
                                      "w-4 h-4 text-slate-300 flex-shrink-0 stroke-[2.5]",
                                  }),
                                  c.jsx("span", {
                                    children:
                                      "+150 Slides Adicionais (Total de +300)",
                                  }),
                                ],
                              }),
                              c.jsxs("li", {
                                className:
                                  "flex items-center gap-3 text-xs sm:text-sm text-slate-400 line-through",
                                children: [
                                  c.jsx(Be, {
                                    className:
                                      "w-4 h-4 text-slate-300 flex-shrink-0 stroke-[2.5]",
                                  }),
                                  c.jsx("span", {
                                    children: "Todos os Bônus Exclusivos",
                                  }),
                                ],
                              }),
                              c.jsxs("li", {
                                className:
                                  "flex items-center gap-3 text-xs sm:text-sm text-slate-400 line-through",
                                children: [
                                  c.jsx(Be, {
                                    className:
                                      "w-4 h-4 text-slate-300 flex-shrink-0 stroke-[2.5]",
                                  }),
                                  c.jsx("span", {
                                    children:
                                      "Atualizações periódicas de conteúdo",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "bg-[#5E4B8B]/10 border border-[#5E4B8B]/20 rounded-2xl p-3.5 sm:p-4 mb-6 flex items-center justify-center gap-2 text-center text-[#5E4B8B]",
                        children: [
                          c.jsx(e0, {
                            className: "w-5 h-5 flex-shrink-0 stroke-[2.5]",
                          }),
                          c.jsx("span", {
                            className:
                              "text-xs sm:text-sm font-bold italic leading-snug",
                            children:
                              "Receba o link de download instantaneamente no seu e-mail e WhatsApp.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("a", {
                    id: "btn-buy-basic",
                    href: "https://ggcheckout.app/checkout/v5/MRifqMwACteBaJOdDdNK",
                    onClick: (S) => {
                      (S.preventDefault(), v(!0));
                    },
                    className:
                      "w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg cursor-pointer shadow-[0_8px_25px_rgba(22,163,74,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center block",
                    children: "Quero o Pacote Básico",
                  }),
                ],
              }),
              c.jsxs("div", {
                id: "plan-complete-card",
                className:
                  "cantoneira bg-white border-[3px] border-[#5E4B8B] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative text-center md:scale-105",
                children: [
                  c.jsxs("span", {
                    className:
                      "absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5E4B8B] text-white text-[11px] sm:text-xs font-black tracking-wider px-4 sm:px-5 py-1.5 rounded-full uppercase flex items-center space-x-1.5 shadow-md",
                    children: [
                      c.jsx(l0, {
                        className: "w-3.5 h-3.5 fill-[#F2C14E] text-[#F2C14E]",
                      }),
                      c.jsx("span", { children: "MELHOR ESCOLHA" }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-2xl sm:text-3xl font-black text-gray-900 font-display",
                        children: "Pacote Completo",
                      }),
                      c.jsx("div", {
                        className: "mt-3 mb-1",
                        children: c.jsx("span", {
                          className:
                            "text-sm font-bold text-gray-400 line-through",
                          children: "R$ 127,00",
                        }),
                      }),
                      c.jsx("div", {
                        className:
                          "text-5xl sm:text-6xl font-black text-[#16A34A] font-display tracking-tight mb-1",
                        children: "R$ 19,90",
                      }),
                      c.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-bold text-gray-500 mb-2",
                        children: "Pagamento único",
                      }),
                      c.jsx("div", {
                        className:
                          "inline-block bg-[#E8F8F0] text-[#16A34A] border border-[#A7F3D0] font-black text-[11px] sm:text-xs px-4 py-1 rounded-full uppercase tracking-wider mb-6",
                        children: "ECONOMIZE R$ 107,10",
                      }),
                      c.jsx("div", {
                        className: "w-full border-t border-gray-100 my-4",
                      }),
                      c.jsxs("ul", {
                        className: "space-y-3.5 text-left mb-6",
                        children: [
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-black text-gray-900",
                            children: [
                              c.jsx(tn, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children:
                                  "+300 Slides de História + Todos os Bônus Exclusivos!",
                              }),
                            ],
                          }),
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800",
                            children: [
                              c.jsx(tn, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children:
                                  "Prontos para projetar e 100% editáveis",
                              }),
                            ],
                          }),
                          c.jsxs("li", {
                            className:
                              "flex items-center gap-3 text-sm sm:text-base font-bold text-gray-800",
                            children: [
                              c.jsx(t0, {
                                className:
                                  "w-5 h-5 text-[#5E4B8B] flex-shrink-0 stroke-[2.5]",
                              }),
                              c.jsx("span", {
                                children:
                                  "Acesso vitalício ao material principal e bônus",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "bg-[#5E4B8B]/10 border border-[#5E4B8B]/20 rounded-2xl p-4 sm:p-5 text-left mb-6 space-y-3",
                        children: [
                          c.jsxs("p", {
                            className:
                              "text-xs font-black text-[#5E4B8B] uppercase tracking-wide flex items-center gap-1.5",
                            children: [
                              c.jsx("span", { children: "🎁" }),
                              c.jsx("span", {
                                children:
                                  "BÔNUS EXCLUSIVOS INCLUSOS GRATUITAMENTE:",
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "bg-white rounded-xl p-3 sm:py-3.5 sm:px-4 shadow-xs border border-gray-100/80 flex items-center gap-2.5 font-bold text-xs sm:text-sm text-gray-800",
                                children: [
                                  c.jsx("span", {
                                    className: "text-base",
                                    children: "📊",
                                  }),
                                  c.jsx("span", {
                                    children:
                                      "+60 Atividades de História para Imprimir",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className:
                                  "bg-white rounded-xl p-3 sm:py-3.5 sm:px-4 shadow-xs border border-gray-100/80 flex items-center gap-2.5 font-bold text-xs sm:text-sm text-gray-800",
                                children: [
                                  c.jsx("span", {
                                    className: "text-base",
                                    children: "📦",
                                  }),
                                  c.jsx("span", {
                                    children: "+30 Mapas Mentais de História",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className:
                                  "bg-white rounded-xl p-3 sm:py-3.5 sm:px-4 shadow-xs border border-gray-100/80 flex items-center gap-2.5 font-bold text-xs sm:text-sm text-gray-800",
                                children: [
                                  c.jsx("span", {
                                    className: "text-base",
                                    children: "🎯",
                                  }),
                                  c.jsx("span", {
                                    children: "+30 Planos de Aula de História",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className:
                                  "bg-white rounded-xl p-3 sm:py-3.5 sm:px-4 shadow-xs border border-gray-100/80 flex items-center gap-2.5 font-bold text-xs sm:text-sm text-gray-800",
                                children: [
                                  c.jsx("span", {
                                    className: "text-base",
                                    children: "📅",
                                  }),
                                  c.jsx("span", {
                                    children:
                                      "Guia Anual de Planejamento de História (BNCC)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "bg-[#5E4B8B]/10 border border-[#5E4B8B]/20 rounded-2xl p-3.5 sm:p-4 mb-6 flex items-center justify-center gap-2 text-center text-[#5E4B8B]",
                        children: [
                          c.jsx(e0, {
                            className: "w-5 h-5 flex-shrink-0 stroke-[2.5]",
                          }),
                          c.jsx("span", {
                            className:
                              "text-xs sm:text-sm font-bold italic leading-snug",
                            children:
                              "Receba o link de download instantaneamente no seu e-mail e WhatsApp.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("a", {
                        id: "btn-buy-complete",
                        href: "https://ggcheckout.app/checkout/v5/KHejZ6vBDcnlo0d8hT7n",
                        onClick: (S) => {
                          (S.preventDefault(),
                            Tf(
                              "https://ggcheckout.app/checkout/v5/KHejZ6vBDcnlo0d8hT7n",
                            ));
                        },
                        className:
                          "w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg cursor-pointer shadow-[0_8px_25px_rgba(22,163,74,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-center",
                        children: c.jsx("span", {
                          children: "Quero o Pacote Completo",
                        }),
                      }),
                      c.jsxs("div", {
                        className:
                          "mt-4 flex items-center justify-center gap-1.5 text-gray-500 text-[11px] font-extrabold uppercase tracking-wider",
                        children: [
                          c.jsx(p1, { className: "w-3.5 h-3.5 stroke-[2.5]" }),
                          c.jsx("span", {
                            children:
                              "OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        id: "how-to-access-section",
        className:
          "py-8 sm:py-12 px-4 bg-[#F7F3EA] border-y border-[#E3DCCF]/60 text-center",
        children: [
          c.jsx("h2", {
            className:
              "rev text-2xl sm:text-3xl font-black text-gray-900 font-display tracking-tight leading-snug mb-3.5",
            children: "Como você vai receber o acesso",
          }),
          c.jsx("div", { className: "filete-ouro w-28 mx-auto mb-6 sm:mb-8" }),
          c.jsxs("div", {
            className: "max-w-xl mx-auto space-y-3 sm:space-y-3.5",
            children: [
              c.jsxs("div", {
                className:
                  "rev bg-white border border-[#E3DCCF] border-l-[5px] border-l-[#5E4B8B] rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4.5 flex items-center gap-3.5 sm:gap-5 shadow-xs text-left hover:-translate-y-[2px]",
                children: [
                  c.jsx("div", {
                    className:
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5E4B8B] text-white flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-xs",
                    children: "1",
                  }),
                  c.jsx("p", {
                    className:
                      "font-bold text-gray-800 text-xs sm:text-[15px] leading-snug",
                    children: "A compra é confirmada após a aprovação do pagamento via Pix ou Cartão",
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "rev bg-white border border-[#E3DCCF] border-l-[5px] border-l-[#5E4B8B] rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4.5 flex items-center gap-3.5 sm:gap-5 shadow-xs text-left hover:-translate-y-[2px]",
                children: [
                  c.jsx("div", {
                    className:
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5E4B8B] text-white flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-xs",
                    children: "2",
                  }),
                  c.jsx("p", {
                    className:
                      "font-bold text-gray-800 text-xs sm:text-[15px] leading-snug",
                    children:
                      "Você recebe o link de acesso por WhatsApp e e-mail",
                  }),
                ],
              }),
              c.jsxs("div", {
                className:
                  "rev bg-white border border-[#E3DCCF] border-l-[5px] border-l-[#5E4B8B] rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4.5 flex items-center gap-3.5 sm:gap-5 shadow-xs text-left hover:-translate-y-[2px]",
                children: [
                  c.jsx("div", {
                    className:
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5E4B8B] text-white flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-xs",
                    children: "3",
                  }),
                  c.jsx("p", {
                    className:
                      "font-bold text-gray-800 text-xs sm:text-[15px] leading-snug",
                    children:
                      "Você acessa os slides de História no Drive, escolhe o tema e já projeta na sala ou edita quando quiser",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        id: "testimonials-section",
        className:
          "cv-auto relative overflow-hidden py-12 sm:py-16 bg-white border-b border-[#E3DCCF]",
        children: [
          c.jsx("svg", {
            className:
              "marca-secao left-[-34px] top-10 w-52 h-52 text-[#5E4B8B]",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: c.jsx("path", {
              d: "M21 11.5a8.4 8.4 0 01-11.8 7.7L3 21l1.9-5.9A8.4 8.4 0 1121 11.5z",
            }),
          }),
          c.jsxs("div", {
            className: "relative z-10 max-w-6xl mx-auto px-4 text-center",
            children: [
              c.jsx("div", {
                className: "friso w-36 mx-auto mb-3",
                "aria-hidden": "true",
              }),
              c.jsx("h2", {
                className:
                  "text-3xl sm:text-5xl font-black text-[#5E4B8B] font-display tracking-tight leading-tight",
                children: "O que dizem nossos clientes",
              }),
              c.jsx("div", { className: "filete-ouro w-32 mx-auto mt-4" }),
              c.jsx("p", {
                className:
                  "mt-3 text-sm sm:text-base md:text-lg font-bold text-gray-700 max-w-xl mx-auto mb-8 sm:mb-10 leading-snug",
                children:
                  "Em breve, depoimentos de professores que já utilizam o História na Prática em sala de aula.",
              }),
              c.jsx("div", {
                className:
                  "max-w-md mx-auto bg-[#F7F3EA] border border-dashed border-[#5E4B8B]/30 rounded-2xl px-6 py-10 text-sm sm:text-base font-bold text-gray-500",
                children:
                  "Estamos reunindo os primeiros depoimentos de professores. Volte em breve!",
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        id: "guarantee-section",
        className: "cv-auto py-10 sm:py-16 px-4 bg-[#F7F3EA]",
        children: c.jsxs("div", {
          className:
            "rev max-w-2xl mx-auto bg-white border-2 border-[#5E4B8B] rounded-3xl shadow-[0_18px_48px_rgba(42,33,69,0.16)] overflow-hidden text-center flex flex-col",
          children: [
            c.jsxs("div", {
              className:
                "relative bg-[#2A2145] text-white p-6 sm:p-7 flex flex-col items-center justify-center space-y-2.5 overflow-hidden",
              children: [
                c.jsx("div", {
                  className:
                    "absolute -top-12 -right-10 w-36 h-36 rounded-full bg-white/[0.06] pointer-events-none",
                }),
                c.jsxs("div", {
                  className: "relative z-10 flex items-center gap-3",
                  children: [
                    c.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#F2C14E",
                      strokeWidth: "1.6",
                      className: "w-7 h-9 opacity-85 -scale-x-100",
                      "aria-hidden": "true",
                      children: [
                        c.jsx("path", {
                          d: "M12 22c-5-2.5-7.5-7-7.5-12.5C7 9.5 9.5 10.4 12 12.8",
                        }),
                        c.jsx("path", {
                          d: "M12 16.5c-2.6-.6-4.3-2-5.2-4M12 12c-2.2-.5-3.7-1.6-4.6-3.2",
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className:
                        "w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-white shadow-inner",
                      children: c.jsx(bf, {
                        className: "w-7 h-7 stroke-[2.5]",
                      }),
                    }),
                    c.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#F2C14E",
                      strokeWidth: "1.6",
                      className: "w-7 h-9 opacity-85",
                      "aria-hidden": "true",
                      children: [
                        c.jsx("path", {
                          d: "M12 22c-5-2.5-7.5-7-7.5-12.5C7 9.5 9.5 10.4 12 12.8",
                        }),
                        c.jsx("path", {
                          d: "M12 16.5c-2.6-.6-4.3-2-5.2-4M12 12c-2.2-.5-3.7-1.6-4.6-3.2",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx("h3", {
                  className:
                    "relative z-10 font-black text-lg sm:text-2xl uppercase tracking-wider",
                  children: "Garantia Incondicional de 7 Dias",
                }),
                c.jsx("div", { className: "filete-ouro w-28 relative z-10" }),
              ],
            }),
            c.jsxs("div", {
              className: "p-6 sm:p-8 space-y-4",
              children: [
                c.jsx("h4", {
                  className:
                    "text-2xl sm:text-3xl font-black text-gray-900 font-display",
                  children: "Risco Zero",
                }),
                c.jsx("p", {
                  className:
                    "text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto",
                  children:
                    "Se você não achar que este material economizou seu tempo, melhorou suas aulas e te deu total segurança para lecionar História, basta solicitar o reembolso em até 7 dias e receber 100% do seu dinheiro de volta, conforme as condições da garantia.",
                }),
                c.jsxs("div", {
                  className:
                    "pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4",
                  children: [
                    c.jsxs("div", {
                      className:
                        "rounded-full border border-[#5E4B8B]/15 bg-[#FAF8FC] px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 font-black text-xs sm:text-sm text-slate-800 uppercase tracking-wider shadow-2xs",
                      children: [
                        c.jsx("span", {
                          className: "text-base",
                          children: "🛡️",
                        }),
                        c.jsx("span", { children: "REEMBOLSO TOTAL" }),
                      ],
                    }),
                    c.jsxs("div", {
                      className:
                        "rounded-full border border-[#5E4B8B]/15 bg-[#FAF8FC] px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 font-black text-xs sm:text-sm text-slate-800 uppercase tracking-wider shadow-2xs",
                      children: [
                        c.jsx("span", {
                          className: "text-base text-[#F2C14E]",
                          children: "⚡",
                        }),
                        c.jsx("span", { children: "PROCESSO RÁPIDO" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        id: "faq-section",
        className:
          "cv-auto py-10 sm:py-16 px-4 bg-[#EFE7D8]/40 border-t border-[#E3DCCF]",
        ref: A,
        children:
          D &&
          c.jsxs("div", {
            className: "max-w-3xl mx-auto animate-fade-in",
            children: [
              c.jsxs("div", {
                className: "text-center flex flex-col items-center gap-3 mb-8",
                children: [
                  c.jsx("div", {
                    className: "friso w-36",
                    "aria-hidden": "true",
                  }),
                  c.jsx("h2", {
                    className:
                      "text-2xl sm:text-3xl font-extrabold text-[#5E4B8B] font-display uppercase tracking-wider",
                    children: "Dúvidas Frequentes",
                  }),
                  c.jsx("div", { className: "filete-ouro w-32" }),
                ],
              }),
              c.jsx("div", {
                className: "space-y-4",
                children: U1.map((S, K) =>
                  c.jsxs(
                    "div",
                    {
                      className: `bg-white border rounded-xl overflow-hidden shadow-xs transition-all duration-200 border-l-[4px] ${N === K ? "border-[#DBA63A]/60 border-l-[#DBA63A] shadow-[0_8px_22px_rgba(219,166,58,0.14)]" : "border-[#E3DCCF] border-l-[#E3DCCF] hover:border-l-[#5E4B8B]"}`,
                      children: [
                        c.jsxs("button", {
                          onClick: () => y(K),
                          className:
                            "w-full text-left px-5 py-4 font-bold text-gray-900 flex items-center justify-between gap-3 cursor-pointer",
                          children: [
                            c.jsx("span", { children: S.question }),
                            N === K
                              ? c.jsx(N1, {
                                  className:
                                    "w-5 h-5 text-[#5E4B8B] flex-shrink-0",
                                })
                              : c.jsx(S1, {
                                  className:
                                    "w-5 h-5 text-[#5E4B8B] flex-shrink-0",
                                }),
                          ],
                        }),
                        c.jsx("div", {
                          className:
                            "overflow-hidden transition-all duration-300",
                          style: {
                            height: N === K ? "auto" : 0,
                            opacity: N === K ? 1 : 0,
                          },
                          children: c.jsx("div", {
                            className: "px-5 pb-4 pt-1 text-sm text-gray-600",
                            children: S.answer,
                          }),
                        }),
                      ],
                    },
                    K,
                  ),
                ),
              }),
            ],
          }),
      }),
      c.jsxs("section", {
        id: "final-cta-section",
        className:
          "relative bg-[#2A2145] text-white text-center overflow-hidden",
        children: [
          c.jsx("svg", {
            className: "block w-full h-[26px] sm:h-[34px]",
            viewBox: "0 0 120 26",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: c.jsx("path", {
              d: "M0 26V8c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8 10-8 20-8 10 8 20 8v18z",
              fill: "#F7F3EA",
            }),
          }),
          c.jsx("div", {
            className: "absolute inset-0 pointer-events-none",
            "aria-hidden": "true",
            children: [
              ["8%", "18%", "0s"],
              ["18%", "52%", "1.1s"],
              ["84%", "24%", "2.2s"],
              ["92%", "62%", "0.6s"],
              ["46%", "88%", "1.7s"],
              ["70%", "14%", "2.8s"],
            ].map(([S, K, yl], ml) =>
              c.jsx(
                "span",
                {
                  className:
                    "cintila absolute w-1.5 h-1.5 rounded-full bg-[#F2C14E]",
                  style: { left: S, top: K, animationDelay: yl },
                },
                ml,
              ),
            ),
          }),
          c.jsxs("div", {
            className:
              "relative z-10 px-4 pt-6 sm:pt-10 pb-12 sm:pb-16 max-w-3xl mx-auto flex flex-col items-center gap-6 sm:gap-7",
            children: [
              c.jsxs("div", {
                className:
                  "rev w-full max-w-sm sm:max-w-md flex flex-col items-center",
                children: [
                  c.jsxs("div", {
                    className:
                      "w-full rounded-t-[10px] bg-[#1C1630] border-2 border-[#45386B] border-b-0 px-3 py-1.5 flex items-center gap-1.5",
                    children: [
                      c.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-[#16A34A]",
                      }),
                      c.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-[#F2C14E]/70",
                      }),
                      c.jsx("span", {
                        className:
                          "ml-auto text-[9px] tracking-[0.18em] uppercase text-[#D9CFF0]/70 font-sans",
                        children: "Apresentação",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "projetor w-full aspect-[16/9] rounded-b-[10px] border-2 border-[#45386B] border-t-0 bg-[#1C1630] shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
                    children: [
                      c.jsx("img", {
                        src: slideHistoria1.url,
                        alt: "Slide do acervo: Egito Antigo",
                        loading: "lazy",
                        decoding: "async",
                        width: 920,
                        height: 518,
                      }),
                      c.jsx("img", {
                        src: slideHistoria6.url,
                        alt: "Slide do acervo: Origens da Democracia",
                        loading: "lazy",
                        decoding: "async",
                        width: 920,
                        height: 518,
                      }),
                      c.jsx("img", {
                        src: slideHistoria7.url,
                        alt: "Slide do acervo: Renascimento",
                        loading: "lazy",
                        decoding: "async",
                        width: 920,
                        height: 518,
                      }),
                      c.jsx("img", {
                        src: slideHistoria5.url,
                        alt: "Slide do acervo: Revolução Industrial",
                        loading: "lazy",
                        decoding: "async",
                        width: 920,
                        height: 518,
                      }),
                    ],
                  }),
                  c.jsx("div", { className: "w-1.5 h-7 bg-[#45386B]" }),
                  c.jsx("div", {
                    className: "w-24 h-1.5 rounded-full bg-[#45386B]",
                  }),
                  c.jsx("div", {
                    className:
                      "feixe mt-1 w-56 h-10 bg-gradient-to-b from-[#F2C14E]/25 to-transparent blur-md pointer-events-none",
                  }),
                ],
              }),
              c.jsx("h2", {
                className:
                  "text-3xl sm:text-5xl font-black font-display tracking-tight",
                children:
                  "PROFESSOR, TENHA CENTENAS DE SLIDES DE HISTÓRIA PRONTOS HOJE MESMO!",
              }),
              c.jsx("div", { className: "filete-ouro w-36" }),
              c.jsx("p", {
                className:
                  "text-sm sm:text-base text-[#E4DCF5]/90 max-w-2xl mx-auto",
                children:
                  "Não perca mais noites montando apresentações de slides do zero. Tenha em mãos +300 slides completos de História com todos os bônus inclusos por um valor simbólico.",
              }),
              c.jsxs("a", {
                href: "#checkout-section",
                className:
                  "cta-brilho inline-flex bg-[#16A34A] hover:bg-[#15803D] text-white py-4 px-8 rounded-2xl font-black text-base sm:text-lg cursor-pointer shadow-[0_10px_34px_rgba(22,163,74,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all items-center justify-center space-x-2",
                children: [
                  c.jsx("span", { children: "Quero Acessar Agora" }),
                  c.jsx(Ui, { className: "w-5 h-5 stroke-[2.5]" }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("footer", {
        className: "bg-[#F7F3EA] border-t border-[#E3DCCF] text-center text-xs",
        children: [
          c.jsx("div", {
            className: "friso w-full mt-2 opacity-50",
            "aria-hidden": "true",
          }),
          c.jsxs("div", {
            className: "px-4 py-9 flex flex-col items-center gap-3",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3 text-[#5E4B8B]",
                "aria-hidden": "true",
                children: [
                  c.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-6 h-6",
                    children: [
                      c.jsx("path", { d: "m3 9 9-6 9 6H3ZM5 9v10M10 9v10M14 9v10M19 9v10M3 19h18M2 22h20" }),
                    ],
                  }),
                  c.jsx("span", { className: "w-px h-6 bg-[#DBA63A]/50" }),
                  c.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-6 h-6",
                    children: [
                      c.jsx("path", { d: "M7 3h10M7 21h10M7 3v4c0 2 5 5 5 5s5-3 5-5V3M7 21v-4c0-2 5-5 5-5s5 3 5 5v4M10 6h4M10 18h4" }),
                    ],
                  }),
                ],
              }),
              c.jsx("p", {
                className: "font-bold text-gray-900 font-display text-sm",
                children: "História na Prática — +300 Slides de História Prontos",
              }),
              c.jsx("div", { className: "filete-ouro w-24" }),
              c.jsx("p", {
                className: "max-w-xl mx-auto text-gray-800",
                children:
                  "© 2026 Todos os direitos reservados. Este material é digital e protegido por direitos autorais.",
              }),
            ],
          }),
        ],
      }),
      L &&
        c.jsxs("a", {
          href: "#checkout-section",
          className:
            "fixed bottom-7 right-4 sm:bottom-9 sm:right-6 z-40 bg-[#16A34A] hover:bg-[#15803D] text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-full font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-[0_10px_30px_rgba(22,163,74,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-green-400/30 animate-fade-in-up",
          children: [
            c.jsx(E1, { className: "w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" }),
            c.jsx("span", { children: "Garantir Acesso" }),
          ],
        }),
      c.jsx(V1, { isOpen: C, onClose: () => v(!1) }),
    ],
  });
}
