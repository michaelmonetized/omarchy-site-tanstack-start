import { createFileRoute } from "@tanstack/react-router";
import { ServerContent } from "@/content/server";

export const Route = createFileRoute("/server")({
  staticData: { layout: "default" },
  component: ServerContent,
  head: () => ({ meta: [{ title: "Server — Omarchy" }] }),
});
