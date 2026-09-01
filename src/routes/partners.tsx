import { createFileRoute } from "@tanstack/react-router";
import { PatronsContent } from "@/content/patrons";

export const Route = createFileRoute("/partners")({
  staticData: { layout: "default" },
  component: PatronsContent,
  head: () => ({ meta: [{ title: "Partners — Omarchy" }] }),
});
