import { createFileRoute } from "@tanstack/react-router";
import { TeamsContent } from "@/content/teams";

export const Route = createFileRoute("/teams")({
  staticData: { layout: "default" },
  component: TeamsContent,
  head: () => ({ meta: [{ title: "Teams — Omarchy" }] }),
});
