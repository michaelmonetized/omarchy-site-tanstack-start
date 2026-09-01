import { createFileRoute } from "@tanstack/react-router";
import { PotatoContent } from "@/content/potato";

export const Route = createFileRoute("/potato")({
  staticData: { layout: "default" },
  component: PotatoContent,
  head: () => ({ meta: [{ title: "Potato — Omarchy" }] }),
});
