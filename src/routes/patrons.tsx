import { createFileRoute } from "@tanstack/react-router";
import { PatronsContent } from "@/content/patrons";

export const Route = createFileRoute("/patrons")({
  staticData: { layout: "default" },
  component: PatronsContent,
  head: () => ({ meta: [{ title: "Omacom Foundation — Omarchy" }] }),
});
