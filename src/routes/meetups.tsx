import { createFileRoute } from "@tanstack/react-router";
import { MeetupsContent } from "@/content/meetups";

export const Route = createFileRoute("/meetups")({
  staticData: { layout: "default" },
  component: MeetupsContent,
  head: () => ({ meta: [{ title: "Meetups — Omarchy" }] }),
});
