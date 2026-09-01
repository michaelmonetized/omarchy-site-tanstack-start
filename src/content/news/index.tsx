import { Link } from "@tanstack/react-router";
import { Page } from "@/components/page";
import { NEWS_POSTS } from "./posts";

export type { NewsPost } from "./posts";
export { NEWS_POSTS } from "./posts";

export function NewsContent() {
  return (
    <Page title="Announcements, releases, and other news" wide>
      <section className="grid gap-6" aria-label="News posts">
        {NEWS_POSTS.map((post) => (
          <article key={post.path} className="border border-border bg-card p-5">
            <p className="m-0 text-xs text-muted-foreground">
              <span className="font-semibold text-terminal-blue">{post.byline}</span> on{" "}
              <time dateTime={post.dateTime}>{post.dateFormatted}</time>
            </p>
            <h2 className="font-heading mt-2 mb-2 text-sm font-extrabold text-foreground">
              {post.title}
            </h2>
            <p className="m-0 text-xs text-pretty text-muted-foreground">{post.excerpt}</p>
            <Link
              to="/news/$year/$month/$slug"
              params={{ year: post.year, month: post.month, slug: post.slug }}
              className="mt-3 inline-block text-xs font-bold text-terminal-cyan no-underline hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </Page>
  );
}

export default NewsContent;
