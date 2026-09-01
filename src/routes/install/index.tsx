import { createFileRoute } from "@tanstack/react-router";
import { InstallIndex } from "@/content/install/index";

export const Route = createFileRoute("/install/")({
  staticData: { layout: "default" },
  component: InstallIndex,
  head: () => ({
    meta: [
      { title: "Install Omarchy" },
      {
        name: "description",
        content: "Install Omarchy on a PC, an Intel Mac, or Apple Silicon.",
      },
    ],
  }),
});
