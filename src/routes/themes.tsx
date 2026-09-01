import { createFileRoute } from "@tanstack/react-router";
import { ThemesContent } from "@/content/themes";

export const Route = createFileRoute("/themes")({
  staticData: { layout: "default" },
  component: ThemesContent,
  head: () => ({ meta: [{ title: "Themes — Omarchy" }] }),
});
