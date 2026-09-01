import { AsciiLogo } from "@/components/ascii-logo";
import { FOUNDING_PATRONS } from "@/lib/patrons";

export function PatronsContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          The Omacom Foundation
        </h1>
      </header>

      <main className="main w-full max-w-5xl flex flex-col gap-12 my-6">
        {/* Founding Patrons */}
        <section className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4 mb-6">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">
              Founding Patrons
            </h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Each contributing $1,000,000 to the mission
            </p>
          </header>

          <div className="team__members grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {FOUNDING_PATRONS.map((p) => (
              <article key={p.name} className="member flex flex-col items-center text-center group">
                <img
                  className="member__avatar w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white/10 group-hover:border-[var(--color-terminal-cyan,#7dcfff)] transition-colors mb-3"
                  src={p.avatar}
                  width={240}
                  height={240}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="member__name text-sm font-bold text-white mb-1">
                  <a
                    href={p.url}
                    className="hover:text-[var(--color-terminal-cyan,#7dcfff)] underline"
                  >
                    {p.name}
                  </a>
                </h3>
                <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                  <a href={p.orgUrl} className="hover:underline">
                    {p.org}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Distinguished Patrons */}
        <section className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4 mb-4">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">
              Distinguished Patrons
            </h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Each contributing $100,000 to the mission
            </p>
          </header>

          <p className="team__note text-sm text-[var(--color-terminal-white,#c0caf5)]">
            Get in touch with{" "}
            <a
              href="mailto:david@omarchy.org"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              david@omarchy.org
            </a>
          </p>
        </section>

        {/* Patrons */}
        <section className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4 mb-4">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">Patrons</h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Each contributing as they see fit to the mission
            </p>
          </header>

          <p className="team__note text-sm italic text-[var(--color-terminal-black,#565f89)]">
            Open for everyone. Coming soon.
          </p>
        </section>
      </main>
    </div>
  );
}
export default PatronsContent;
