import { createFileRoute, notFound } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "@/content/manual/chapters";
import { ManualChapterView } from "@/content/manual/chapter-view";

export const Route = createFileRoute("/manual/$slug")({
  staticData: { layout: "sidebar" },
  loader: ({ params }) => {
    const chapter = MANUAL_CHAPTERS.find((item) => item.slug === params.slug);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.chapter.title ?? "Manual"} — The Omarchy Manual` }],
  }),
  component: ManualChapterPage,
});

function ManualChapterPage() {
  const { chapter } = Route.useLoaderData();
  return <ManualChapterView chapter={chapter} />;
}
