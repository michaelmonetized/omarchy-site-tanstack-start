import { mkdirSync, readdirSync, readFileSync, writeFileSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "../omarchy-site/manual");
const outDir = join(root, "src/content/manual");
const imagesOut = join(root, "public/manual/images");

function rewrite(html) {
  return html
    .replaceAll(
      /href="\.\.\/([\w-]+)\/?(#[^"]*)?"/g,
      (_m, slug, hash = "") => `href="/manual/${slug}${hash}"`,
    )
    .replaceAll(/href="\.\.\/(#[^"]+)"/g, (_m, hash) => `href="/manual${hash}"`)
    .replaceAll(/href="\/manual\/"/g, `href="/manual"`)
    .replaceAll(/href="\/manual\/([\w-]+)\/?"/g, (_m, slug) => `href="/manual/${slug}"`)
    .replaceAll(
      /href="\/manual\/([\w-]+)\/(#[^"]+)"/g,
      (_m, slug, hash) => `href="/manual/${slug}${hash}"`,
    )
    .replaceAll(/src="\.\.\/images\//g, `src="/manual/images/`)
    .replaceAll(/src="\/manual\/images\//g, `src="/manual/images/`);
}

function extract(html) {
  const article = html.match(
    /<article class="manual__content">([\s\S]*?)<nav class="manual__pagination">/,
  );
  if (!article) return null;
  const title = article[1].match(/<h1>([\s\S]*?)<\/h1>/)?.[1]?.trim() ?? "";
  const body = rewrite(article[1].replace(/<h1>[\s\S]*?<\/h1>\s*/, "").trim());
  return { title, html: body };
}

const chapters = [];

const welcomeHtml = readFileSync(join(source, "index.html"), "utf8");
const welcome = extract(welcomeHtml);
if (!welcome) throw new Error("welcome chapter missing");
chapters.push({
  slug: "",
  path: "/manual",
  title: welcome.title.replaceAll("&amp;", "&"),
  html: welcome.html,
});

for (const dir of readdirSync(source, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name === "images" || dir.name === "toc") continue;
  const file = join(source, dir.name, "index.html");
  if (!existsSync(file)) continue;
  const parsed = extract(readFileSync(file, "utf8"));
  if (!parsed) {
    console.warn("skip", dir.name);
    continue;
  }
  chapters.push({
    slug: dir.name,
    path: `/manual/${dir.name}`,
    title: parsed.title.replaceAll("&amp;", "&"),
    html: parsed.html,
  });
}

const order = [
  "",
  "getting-started",
  "coming-from-mac-or-windows",
  "navigation",
  "the-top-bar",
  "themes",
  "hotkeys",
  "unified-clipboard-history",
  "reminders",
  "notices",
  "text-extraction-dictation",
  "screenshots-recording",
  "toggles-idle-screensaver",
  "omarchy-cli",
  "terminal",
  "neovim",
  "ai",
  "development-tools",
  "shell-tools",
  "shell-functions",
  "tuis",
  "guis",
  "browsers",
  "commercial-apps-services",
  "web-apps",
  "gaming",
  "filling-out-pdfs",
  "windows-vm",
  "other-packages",
  "updates",
  "dotfiles",
  "shell-plugins",
  "monitors",
  "keyboard-mouse-trackpad",
  "networking",
  "system-sleep",
  "hardware-authentication",
  "fonts",
  "backgrounds",
  "prompt",
  "branding",
  "common-tweaks",
  "making-your-own-theme",
  "mac-support",
  "troubleshooting",
  "faq",
  "system-snapshots",
  "security",
  "omarchy-on",
  "dual-boot-install",
  "unattended-installs",
];
const rank = new Map(order.map((slug, i) => [slug, i]));
chapters.sort((a, b) => (rank.get(a.slug) ?? 999) - (rank.get(b.slug) ?? 999));
const welcomeTitle = chapters[0].title;

mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "chapters.ts"),
  `export type ManualChapter = {
  slug: string;
  path: string;
  title: string;
  html: string;
};

export const MANUAL_CHAPTERS: ManualChapter[] = ${JSON.stringify(chapters, null, 2)};
`,
);

const imagesIn = join(source, "images");
if (existsSync(imagesIn)) {
  mkdirSync(dirname(imagesOut), { recursive: true });
  cpSync(imagesIn, imagesOut, { recursive: true });
}

console.log(`imported ${chapters.length} chapters (welcome: ${welcomeTitle})`);
