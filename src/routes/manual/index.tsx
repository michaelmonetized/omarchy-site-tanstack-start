import { createFileRoute } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "@/content/manual/chapters";
import { ManualChapterView } from "@/content/manual/chapter-view";

export const Route = createFileRoute("/manual/")({
  staticData: { layout: "sidebar" },
  component: ManualIndex,
  head: () => ({
    meta: [{ title: `${MANUAL_CHAPTERS[0].title} — The Omarchy Manual` }],
  }),
});

function ManualIndex() {
  return <ManualChapterView chapter={MANUAL_CHAPTERS[0]} />;
}
