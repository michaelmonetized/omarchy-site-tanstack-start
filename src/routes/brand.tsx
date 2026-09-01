import { createFileRoute } from "@tanstack/react-router";
import { BrandContent } from "@/content/brand";

export const Route = createFileRoute("/brand")({
  staticData: { layout: "default" },
  component: BrandContent,
  head: () => ({
    meta: [
      { title: "Brand — Omarchy" },
      {
        name: "description",
        content: "The official Omarchy logo and wordmark, and the terms for using them.",
      },
    ],
  }),
});
