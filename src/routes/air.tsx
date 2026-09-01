import { createFileRoute } from "@tanstack/react-router";
import { AirContent } from "@/content/air";

export const Route = createFileRoute("/air")({
  staticData: { layout: "default" },
  component: AirContent,
  head: () => ({ meta: [{ title: "Artists in Residence — Omarchy" }] }),
});
