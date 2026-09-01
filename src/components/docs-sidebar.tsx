import { Link, useRouterState } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "@/content/manual";
import { cn } from "@/lib/utils";

export default function DocsSidebar() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-border bg-sidebar lg:block">
      <nav className="sticky top-12 flex flex-col py-4" aria-label="Manual chapters">
        {MANUAL_CHAPTERS.map((chapter) => {
          const href = chapter.url.replace(/\/$/, "") || "/manual";
          const current =
            pathname === href ||
            pathname === `${href}/` ||
            (href === "/manual" && (pathname === "/manual" || pathname === "/manual/"));

          return (
            <Link
              key={chapter.url}
              to={href as "/manual"}
              className={cn(
                "px-4 py-1.5 text-xs text-muted-foreground no-underline hover:bg-muted hover:text-foreground",
                current && "bg-muted text-green",
              )}
            >
              {chapter.title.replace(/&amp;/g, "&")}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
