import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MANUAL_CHAPTERS, type ManualChapter } from "./chapters";
import { cn } from "@/lib/utils";

function neighbors(slug: string) {
  const index = MANUAL_CHAPTERS.findIndex((chapter) => chapter.slug === slug);
  return {
    prev: index > 0 ? MANUAL_CHAPTERS[index - 1] : undefined,
    next: index >= 0 && index < MANUAL_CHAPTERS.length - 1 ? MANUAL_CHAPTERS[index + 1] : undefined,
  };
}

function ManualLink({
  chapter,
  className,
  children,
}: {
  chapter: ManualChapter;
  className?: string;
  children: ReactNode;
}) {
  if (chapter.slug === "") {
    return (
      <Link to="/manual" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/manual/$slug" params={{ slug: chapter.slug }} className={className}>
      {children}
    </Link>
  );
}

export function ManualChapterView({ chapter }: { chapter: ManualChapter }) {
  const { prev, next } = neighbors(chapter.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-8">
      <details className="mb-6 border border-border lg:hidden">
        <summary className="cursor-pointer px-3 py-2 text-xs font-bold text-foreground">
          Chapters
        </summary>
        <nav
          className="flex max-h-[50vh] flex-col overflow-y-auto border-t border-border"
          aria-label="Chapters"
        >
          {MANUAL_CHAPTERS.map((item) => (
            <ManualLink
              key={item.path}
              chapter={item}
              className={cn(
                "px-3 py-1.5 text-xs text-muted-foreground no-underline hover:bg-muted hover:text-foreground",
                item.slug === chapter.slug && "bg-muted text-green",
              )}
            >
              {item.title}
            </ManualLink>
          ))}
        </nav>
      </details>

      <h1 className="font-heading text-xl font-extrabold text-foreground">{chapter.title}</h1>
      <div className="manual-prose" dangerouslySetInnerHTML={{ __html: chapter.html }} />

      <nav className="mt-10 grid grid-cols-[1fr_auto_1fr] items-baseline gap-4 border-t border-border pt-6 text-xs">
        {prev ? (
          <ManualLink chapter={prev} className="text-terminal-cyan no-underline hover:underline">
            ← {prev.title}
          </ManualLink>
        ) : (
          <span />
        )}
        <Link
          to="/manual/toc"
          className="text-center text-terminal-blue no-underline hover:underline"
        >
          Table of Contents
        </Link>
        {next ? (
          <span className="text-right">
            <ManualLink chapter={next} className="text-terminal-cyan no-underline hover:underline">
              {next.title} →
            </ManualLink>
          </span>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
