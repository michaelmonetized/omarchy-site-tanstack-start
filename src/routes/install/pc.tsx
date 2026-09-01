import { createFileRoute } from "@tanstack/react-router";
import { InstallPc } from "@/content/install/pc";

export const Route = createFileRoute("/install/pc")({
  staticData: { layout: "default" },
  component: InstallPc,
  head: () => ({
    meta: [
      { title: "Install on a PC — Omarchy" },
      {
        name: "description",
        content: "Download the Omarchy ISO, flash a USB stick, and install on a PC.",
      },
    ],
  }),
});
