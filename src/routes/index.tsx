import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/landing/LandingPage";
import heroImage from "@/assets/historia_pacote_completo.webp.asset.json";

const DESC =
  "+300 Slides completos e editáveis de História prontos para professores de Ensino Médio e Fundamental II.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: heroImage.url, type: "image/webp", fetchpriority: "high" },
    ],
    meta: [
      { title: "+300 Slides de História | História na Prática" },
      { name: "description", content: DESC },
      { property: "og:title", content: "+300 Slides de História | História na Prática" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
