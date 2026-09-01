import { AsciiLogo } from "./ascii-logo";

export interface NewsPost {
  byline: string;
  dateTime: string;
  dateFormatted: string;
  title: string;
  excerpt: string;
  link: string;
}

export const NEWS_POSTS: NewsPost[] = [
  {
    byline: "DHH",
    dateTime: "2026-08-28",
    dateFormatted: "August 28, 2026",
    title: "The first plugin competition winners",
    excerpt:
      "Radio Atlas, Omagotchi, and AirPods take the podium in the first Omarchy plugin competition.",
    link: "/news/2026/08/the-first-plugin-competition-winners",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-28",
    dateFormatted: "August 28, 2026",
    title: "Introducing Omarchy AIR",
    excerpt:
      "A six-month, funded residency for the artists who make Omarchy beautiful. The first two are HANCORE and OldJobobo.",
    link: "/news/2026/08/introducing-omarchy-air",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-28",
    dateFormatted: "August 28, 2026",
    title: "Omarchy tops 100,000 downloads in a week",
    excerpt:
      "A hundred thousand people installed Omarchy in seven days, and we moved nearly a petabyte doing it.",
    link: "/news/2026/08/100000-downloads-in-a-week",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-27",
    dateFormatted: "August 27, 2026",
    title: "Introducing Omarchy Rangers",
    excerpt:
      "The first Omarchy Rangers are here to help people find their way, and applications are open.",
    link: "/news/2026/08/introducing-the-omarchy-rangers",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-25",
    dateFormatted: "August 25, 2026",
    title: "Omacom Foundation to be premier mise sponsor",
    excerpt:
      "Third sponsorship out the door! The Omacom Foundation is becoming a premier sponsor of mise , and thereby of jdx , who has spent years building the tool that quietly makes managing different versions of Ruby, Node, Go a joy to manage, and\u2026",
    link: "/news/2026/08/omacom-foundation-to-be-premier-mise-sponsor",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-24",
    dateFormatted: "August 24, 2026",
    title: "Omarchy meetups around the world",
    excerpt:
      "Find an Omarchy meetup near you or start one yourself and add it to the global calendar.",
    link: "/news/2026/08/omarchy-meetups-around-the-world",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-24",
    dateFormatted: "August 24, 2026",
    title: "Omacom Foundation to be premier Quickshell sponsor",
    excerpt:
      "More money in , more money out! Our second major sponsorship from the Omacom Foundation is going to outfoxxed for his superb work on Quickshell . It\u2019s only been part of the public release for a week, but it\u2019s already crystal clear that it\u2026",
    link: "/news/2026/08/omacom-foundation-to-be-premier-quickshell-sponsor",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-24",
    dateFormatted: "August 24, 2026",
    title: "Omacom Foundation funding hits $10m",
    excerpt:
      "Drew Houston and Peter Steinberger join the Omacom Foundation as Founding Patrons, taking total funding to $10 million.",
    link: "/news/2026/08/omacom-foundation-funding-hits-10m",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-21",
    dateFormatted: "August 21, 2026",
    title: "Omacom Foundation to be exclusive Hyprland sponsor",
    excerpt:
      "What better way to start spending some of the treasure we just raised for the Omacom Foundation than on the most cracked Linux kid in Poland: Vaxry ! As the creator of Hyprland , he\u2019s responsible for one of the three core technologies in\u2026",
    link: "/news/2026/08/omacom-foundation-to-be-exclusive-hyprland-sponsor",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-21",
    dateFormatted: "August 21, 2026",
    title: "Omacom Foundation launches with $8 million",
    excerpt:
      "It\u2019s time to dream big. Omarchy Quattro has given people a chance to experience what the malleable computer of the future looks like, and they like it (a lot!). It now feels like a moral obligation to make this future more broadly\u2026",
    link: "/news/2026/08/omacom-foundation-launches-with-8-million",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-19",
    dateFormatted: "August 19, 2026",
    title: "The Omarchy Core Team",
    excerpt:
      "Omarchy\u2019s explosive growth demands structured teams in response, and we\u2019re going to get started by incorporating The Omarchy Core Team. This group will share the responsibility of driving the direction of our distro, ensuring we continue\u2026",
    link: "/news/2026/09/the-omarchy-core-team",
  },
  {
    byline: "DHH",
    dateTime: "2026-08-19",
    dateFormatted: "August 19, 2026",
    title: "The first plugin competition",
    excerpt:
      "The Omarchy Plugin Marketplace is already home to over 500 plugins and growing very fast. We have a million ideas for how we can improve this setup, including with automated agent-powered security reviews, but let\u2019s not have perfect be\u2026",
    link: "/news/2026/08/the-first-plugin-competition",
  },
];

export function NewsContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          Announcements, releases, and other news
        </h1>
      </header>

      <main className="news-page w-full max-w-4xl my-6">
        <section className="news-list grid gap-6 sm:gap-8" aria-label="News posts">
          {NEWS_POSTS.map((post, idx) => (
            <article
              key={idx}
              className="news-card bg-[var(--color-background-storm,#24283b)] p-6 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] hover:border-[var(--color-terminal-cyan,#7dcfff)] transition-all group flex flex-col gap-3"
            >
              <header>
                <p className="news-meta text-xs text-[var(--color-terminal-black,#565f89)]">
                  <span className="news-byline text-[var(--color-terminal-blue,#7aa2f7)] font-semibold">
                    {post.byline}
                  </span>{" "}
                  on{" "}
                  <time className="news-date" dateTime={post.dateTime}>
                    {post.dateFormatted}
                  </time>
                </p>
                <h2 className="news-card__title text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-terminal-cyan,#7dcfff)] transition-colors mt-1">
                  {post.title}
                </h2>
              </header>

              <div className="news-card__excerpt text-sm text-[var(--color-terminal-white,#c0caf5)] leading-relaxed">
                {post.excerpt}
              </div>

              <div className="mt-2">
                <a
                  className="news-card__link inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border border-[var(--border-color,rgba(65,72,104,0.8))] bg-[var(--color-background-night,#1a1b26)] hover:border-[var(--color-terminal-cyan,#7dcfff)] hover:text-white transition-colors"
                  href={post.link}
                  aria-label={`Post: ${post.title}, on ${post.dateFormatted}`}
                >
                  Read more &rarr;
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
export default NewsContent;
