import { AsciiLogo } from "./ascii-logo";

export function SecurityCreditsContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          Security credits
        </h1>
      </header>

      <main className="main w-full max-w-3xl flex flex-col gap-10 my-6">
        <section className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4 mb-6">
            <h2 className="team__name text-xl font-bold text-white mb-1">Responsible disclosure</h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              They found it, told us privately, and waited for the patch
            </p>
          </header>

          <div className="team__members flex justify-center py-4">
            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-28 h-28 rounded-full object-cover border-2 border-white/10 mb-3"
                src="/assets/images/credits/teles.webp"
                width={240}
                height={240}
                alt="Teles"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-base font-bold text-white">
                <a
                  href="https://x.com/teles_dev"
                  className="hover:text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Teles
                </a>
              </h3>
            </article>
          </div>

          <p className="team__note text-center text-xs text-[var(--color-terminal-black,#565f89)] mt-6 border-t border-white/5 pt-4">
            Found something?{" "}
            <a href="/security/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
              Report it privately
            </a>{" "}
            and you&rsquo;ll end up here too.
          </p>
        </section>
      </main>
    </div>
  );
}
export default SecurityCreditsContent;
