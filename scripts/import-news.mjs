import { mkdirSync, readdirSync, readFileSync, writeFileSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "../omarchy-site/news");
const outDir = join(root, "src/content/news");
const publicNews = join(root, "public/news");

function rewrite(html, publicPath) {
  return html
    .replaceAll(/src="(?!https?:|\/)([^"]+)"/g, (_m, file) => `src="${publicPath}/${file}"`)
    .replaceAll(/href="\/patrons\/"/g, `href="/patrons"`)
    .replaceAll(/href="\/foundation\/"/g, `href="/patrons"`)
    .replaceAll(/href="\/news\/"/g, `href="/news"`)
    .replaceAll(/href="\/manual\/"/g, `href="/manual"`)
    .replaceAll(/href="\/themes\/"/g, `href="/themes"`)
    .replaceAll(/href="\/air\/"/g, `href="/air"`)
    .replaceAll(/href="\/teams\/"/g, `href="/teams"`)
    .replaceAll(/href="\/meetups\/"/g, `href="/meetups"`)
    .replaceAll(/href="\/sponsorships\/"/g, `href="/sponsorships"`);
}

function extract(html, publicPath) {
  const title = html.match(/<h1 class="news-post__title">([\s\S]*?)<\/h1>/)?.[1]?.trim() ?? "";
  const byline =
    html.match(/<span class="news-byline">By <a[^>]*>([\s\S]*?)<\/a>/)?.[1]?.trim() ?? "DHH";
  const dateTime = html.match(/datetime="([^"]+)"/)?.[1] ?? "";
  const dateFormatted =
    html.match(/<time class="news-date"[^>]*>([\s\S]*?)<\/time>/)?.[1]?.trim() ?? "";
  const excerpt =
    html.match(/<meta name="description" content="([^"]+)"/)?.[1] ??
    html.match(/<p>([\s\S]*?)<\/p>/)?.[1]?.replaceAll(/<[^>]+>/g, "") ??
    "";
  const body = html.match(/<div class="news-prose">([\s\S]*?)<\/div>/)?.[1]?.trim() ?? "";
  return {
    title: title.replaceAll("&amp;", "&"),
    byline,
    dateTime,
    dateFormatted,
    excerpt: excerpt.replaceAll("&amp;", "&").replaceAll("&ldquo;", "“").replaceAll("&rdquo;", "”"),
    html: rewrite(body, publicPath),
  };
}

const posts = [];

for (const yearDir of readdirSync(source, { withFileTypes: true })) {
  if (!yearDir.isDirectory()) continue;
  const yearPath = join(source, yearDir.name);
  for (const monthDir of readdirSync(yearPath, { withFileTypes: true })) {
    if (!monthDir.isDirectory()) continue;
    const monthPath = join(yearPath, monthDir.name);
    for (const slugDir of readdirSync(monthPath, { withFileTypes: true })) {
      if (!slugDir.isDirectory()) continue;
      const file = join(monthPath, slugDir.name, "index.html");
      if (!existsSync(file)) continue;
      const publicPath = `/news/${yearDir.name}/${monthDir.name}/${slugDir.name}`;
      const parsed = extract(readFileSync(file, "utf8"), publicPath);
      posts.push({
        year: yearDir.name,
        month: monthDir.name,
        slug: slugDir.name,
        path: publicPath,
        ...parsed,
      });
      const dest = join(publicNews, yearDir.name, monthDir.name, slugDir.name);
      mkdirSync(dest, { recursive: true });
      for (const asset of readdirSync(join(monthPath, slugDir.name))) {
        if (asset === "index.html") continue;
        cpSync(join(monthPath, slugDir.name, asset), join(dest, asset));
      }
    }
  }
}

posts.sort((a, b) => (a.dateTime < b.dateTime ? 1 : a.dateTime > b.dateTime ? -1 : 0));

mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "posts.ts"),
  `export type NewsPost = {
  year: string;
  month: string;
  slug: string;
  path: string;
  title: string;
  byline: string;
  dateTime: string;
  dateFormatted: string;
  excerpt: string;
  html: string;
};

export const NEWS_POSTS: NewsPost[] = ${JSON.stringify(posts, null, 2)};
`,
);

console.log(`imported ${posts.length} news posts`);
