import { Link } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "./chapters";

export function ManualToc() {
  return (
    <nav className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8" aria-label="Chapters">
      <h1 className="font-heading mb-8 text-xl font-extrabold text-foreground">The Manual</h1>
      <ol className="grid list-none gap-2 p-0 sm:grid-cols-2">
        {MANUAL_CHAPTERS.map((chapter, index) => (
          <li key={chapter.path} className="flex gap-3 text-sm">
            <span className="text-green tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            {chapter.slug === "" ? (
              <Link to="/manual" className="text-foreground no-underline hover:text-terminal-cyan">
                {chapter.title}
              </Link>
            ) : (
              <Link
                to="/manual/$slug"
                params={{ slug: chapter.slug }}
                className="text-foreground no-underline hover:text-terminal-cyan"
              >
                {chapter.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
