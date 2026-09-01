import { createFileRoute } from "@tanstack/react-router";
import { NewsContent } from "@/content/news";

export const Route = createFileRoute("/news/")({
  staticData: { layout: "default" },
  component: NewsContent,
  head: () => ({ meta: [{ title: "News — Omarchy" }] }),
});
