import { Link, createFileRoute } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "@/content/manual";

export const Route = createFileRoute("/manual/$slug")({
  staticData: { layout: "sidebar" },
  component: ManualChapterPage,
});

function ManualChapterPage() {
  const { slug } = Route.useParams();
  const chapter = MANUAL_CHAPTERS.find((item) => item.url.includes(`/manual/${slug}`));
  const title = chapter?.title.replace(/&amp;/g, "&") ?? slug.replace(/-/g, " ");

  return (
    <main className="px-4 py-10 sm:px-8">
      <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">The Manual</p>
      <h1 className="font-heading mt-2 text-xl font-extrabold text-foreground">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Chapter pages land next. The full manual still lives on{" "}
        <a href={`https://omarchy.org/manual/${slug}/`}>omarchy.org</a> while we move it over.
      </p>
      <p className="mt-6">
        <Link to="/manual" className="text-xs text-terminal-cyan">
          All chapters
        </Link>
      </p>
    </main>
  );
}
