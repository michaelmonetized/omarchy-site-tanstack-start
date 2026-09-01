import { createFileRoute } from "@tanstack/react-router";
import { InstallIntelMac } from "@/content/install/intel";

export const Route = createFileRoute("/install/mac/intel")({
  staticData: { layout: "default" },
  component: InstallIntelMac,
  head: () => ({
    meta: [
      { title: "Install on an Intel Mac — Omarchy" },
      {
        name: "description",
        content: "Install official Omarchy on an Intel Mac with the ISO and a USB stick.",
      },
    ],
  }),
});
