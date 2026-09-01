import { Link } from "@tanstack/react-router";
import type { NewsPost } from "./posts";

export function NewsPostView({ post }: { post: NewsPost }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8">
      <p className="m-0 text-xs text-muted-foreground">
        <Link to="/news" className="text-terminal-cyan no-underline hover:underline">
          News
        </Link>
        {" · "}
        <span className="text-terminal-blue">{post.byline}</span> on{" "}
        <time dateTime={post.dateTime}>{post.dateFormatted}</time>
      </p>
      <h1 className="font-heading mt-3 text-xl font-extrabold text-foreground">{post.title}</h1>
      <div className="manual-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
