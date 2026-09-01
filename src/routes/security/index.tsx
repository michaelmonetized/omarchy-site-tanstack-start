import { createFileRoute } from "@tanstack/react-router";
import { SecurityContent } from "@/content/security";

export const Route = createFileRoute("/security/")({
  staticData: { layout: "default" },
  component: SecurityContent,
  head: () => ({ meta: [{ title: "Security — Omarchy" }] }),
});
