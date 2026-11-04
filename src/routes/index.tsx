import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/landing/LandingPage";

const DESC =
  "+300 Slides completos e editáveis de Artes prontos para professores de Ensino Médio e Fundamental II.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+300 Slides de Artes" },
      { name: "description", content: DESC },
      { property: "og:title", content: "+300 Slides de Artes" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
