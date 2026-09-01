import { createFileRoute } from "@tanstack/react-router";
import { SecurityCreditsContent } from "@/content/security-credits";

export const Route = createFileRoute("/security/credits")({
  staticData: { layout: "default" },
  component: SecurityCreditsContent,
  head: () => ({
    meta: [
      { title: "Security Credits — Omarchy" },
      {
        name: "description",
        content:
          "Thanking the people who reported security issues in Omarchy privately, and gave us the chance to fix them.",
      },
    ],
  }),
});
