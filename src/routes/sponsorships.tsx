import { createFileRoute } from "@tanstack/react-router";
import { SponsorshipsContent } from "@/content/sponsorships";

export const Route = createFileRoute("/sponsorships")({
  staticData: { layout: "default" },
  component: SponsorshipsContent,
  head: () => ({ meta: [{ title: "Sponsorships — Omarchy" }] }),
});
