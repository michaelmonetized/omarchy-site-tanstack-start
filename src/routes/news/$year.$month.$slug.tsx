import { createFileRoute, notFound } from "@tanstack/react-router";
import { NEWS_POSTS } from "@/content/news/posts";
import { NewsPostView } from "@/content/news/post-view";

export const Route = createFileRoute("/news/$year/$month/$slug")({
  staticData: { layout: "default" },
  loader: ({ params }) => {
    const post = NEWS_POSTS.find(
      (item) =>
        item.year === params.year && item.month === params.month && item.slug === params.slug,
    );
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.post.title ?? "News"} — Omarchy` }],
  }),
  component: NewsPostPage,
});

function NewsPostPage() {
  const { post } = Route.useLoaderData();
  return <NewsPostView post={post} />;
}
