import { Link, useRouterState } from "@tanstack/react-router";
import { MANUAL_CHAPTERS } from "@/content/manual/chapters";
import { cn } from "@/lib/utils";

export default function DocsSidebar() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname.replace(/\/$/, "") || "/",
  });

  return (
    <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-border bg-sidebar lg:block">
      <nav className="sticky top-12 flex flex-col py-4" aria-label="Manual chapters">
        {MANUAL_CHAPTERS.map((chapter) => {
          const current =
            pathname === chapter.path || (chapter.path === "/manual" && pathname === "/manual");

          const className = cn(
            "px-4 py-1.5 text-xs text-muted-foreground no-underline hover:bg-muted hover:text-foreground",
            current && "bg-muted text-green",
          );

          if (chapter.slug === "") {
            return (
              <Link key={chapter.path} to="/manual" className={className}>
                {chapter.title}
              </Link>
            );
          }

          return (
            <Link
              key={chapter.path}
              to="/manual/$slug"
              params={{ slug: chapter.slug }}
              className={className}
            >
              {chapter.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
