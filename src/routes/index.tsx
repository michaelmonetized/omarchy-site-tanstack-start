import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/content/home";
import HomeHero from "@/content/home/hero";

export const Route = createFileRoute("/")({
  staticData: { layout: "landing" },
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Omarchy — Beautiful, Fun & Opinionated Linux by DHH" },
      {
        name: "description",
        content:
          "Beautiful, Fun & Opinionated Linux by DHH. The malleable OS for the age of agents.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeContent />
    </>
  );
}
