import { createFileRoute } from "@tanstack/react-router";
import { ManualContent } from "@/content/manual";

export const Route = createFileRoute("/manual/")({
  staticData: { layout: "sidebar" },
  component: ManualContent,
});
