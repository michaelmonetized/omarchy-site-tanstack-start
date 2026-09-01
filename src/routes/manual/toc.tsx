import { createFileRoute } from "@tanstack/react-router";
import { ManualToc } from "@/content/manual/toc";

export const Route = createFileRoute("/manual/toc")({
  staticData: { layout: "sidebar" },
  component: ManualToc,
  head: () => ({
    meta: [{ title: "Table of Contents — The Omarchy Manual" }],
  }),
});
