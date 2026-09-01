import { createFileRoute } from "@tanstack/react-router";
import { InstallAppleSilicon } from "@/content/install/arm";

export const Route = createFileRoute("/install/mac/arm")({
  staticData: { layout: "default" },
  component: InstallAppleSilicon,
  head: () => ({
    meta: [
      { title: "Install on Apple Silicon — Omarchy" },
      {
        name: "description",
        content: "Community Asahi install of Omarchy on M1, M2, and M3 Macs.",
      },
    ],
  }),
});
