import { createFileRoute } from "@tanstack/react-router";
import { WorkstationsContent } from "@/content/workstations";

export const Route = createFileRoute("/workstations")({
  staticData: { layout: "default" },
  component: WorkstationsContent,
  head: () => ({ meta: [{ title: "Workstations — Omarchy" }] }),
});
