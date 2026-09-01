import { createFileRoute } from "@tanstack/react-router";
import { DiscordContent } from "@/content/discord";

export const Route = createFileRoute("/discord")({
  staticData: { layout: "default" },
  component: DiscordContent,
  head: () => ({ meta: [{ title: "Discord — Omarchy" }] }),
});
