import { AsciiLogo } from "./ascii-logo";

export function AirContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          Artists in Residence
        </h1>
      </header>

      <main className="main w-full max-w-3xl flex flex-col gap-10 my-6">
        <p className="air__lede text-base sm:text-lg leading-relaxed text-[var(--color-turquoise,#b4f9f8)] font-medium">
          A six-month residency for artists who make Omarchy beautiful. Themes, plugins, and
          whatever else. The point is to let creativity flow with the support of the Omacom
          Foundation. Up to five seats at any one time.
        </p>

        <section className="air__section flex flex-col gap-8">
          <h2 className="text-xl font-bold text-[var(--color-terminal-blue,#7aa2f7)] border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-2">
            The first residents
          </h2>

          <article className="resident flex flex-col sm:flex-row gap-5 items-start bg-[var(--color-background-storm,#24283b)] p-5 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))]">
            <img
              className="resident__avatar w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border border-white/10"
              src="/assets/images/air/hancore.webp"
              width={240}
              height={240}
              alt="HANCORE"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <h3 className="resident__name text-lg font-bold text-white mb-2">
                <a
                  href="https://github.com/HANCORE-linux"
                  className="hover:text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  HANCORE
                </a>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-terminal-white,#c0caf5)] leading-relaxed">
                <a
                  href="/manual/themes/"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Solitude and Last Horizon
                </a>{" "}
                both ship with Omarchy, and another twenty of his themes sit on{" "}
                <a href="/themes/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
                  the extras page
                </a>{" "}
                &mdash; more than anyone else has contributed: Batou, Oxo Carbon, Velvet Night, Rose
                of Dune, Shades of Jade, and on it goes. He&rsquo;s a mechanical engineer who became
                one of the defining aesthetic forces in this community, sits on{" "}
                <a href="/teams/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
                  Omarchy Core
                </a>
                , and helps steward{" "}
                <a
                  href="https://omarchyplugins.com/"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  the plugin ecosystem
                </a>
                .
              </p>
            </div>
          </article>

          <article className="resident flex flex-col sm:flex-row gap-5 items-start bg-[var(--color-background-storm,#24283b)] p-5 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))]">
            <img
              className="resident__avatar w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border border-white/10"
              src="/assets/images/air/oldjobobo.webp"
              width={240}
              height={240}
              alt="OldJobobo"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <h3 className="resident__name text-lg font-bold text-white mb-2">
                <a
                  href="https://github.com/OldJobobo"
                  className="hover:text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  OldJobobo
                </a>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-terminal-white,#c0caf5)] leading-relaxed">
                Three of the themes that ship with Omarchy are his &mdash;{" "}
                <a
                  href="/manual/themes/"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Lumon, Miasma, and Retro 82
                </a>{" "}
                &mdash; and another ten sit on{" "}
                <a href="/themes/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
                  the extras page
                </a>
                , from Batman to City-783 to Sakura Mochi. He works in whole palettes rather than
                one-off colour schemes, which is why his themes hold together across the terminal,
                Neovim, btop, and the shell instead of just looking good in a screenshot.
              </p>
            </div>
          </article>

          <article className="resident flex flex-col sm:flex-row gap-5 items-start bg-[var(--color-background-storm,#24283b)] p-5 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))]">
            <img
              className="resident__avatar w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border border-white/10"
              src="/assets/images/air/taha.webp"
              width={240}
              height={240}
              alt="Taha"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <h3 className="resident__name text-lg font-bold text-white mb-2">
                <a
                  href="https://github.com/tahayvr"
                  className="hover:text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Taha
                </a>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-terminal-white,#c0caf5)] leading-relaxed">
                He drew the Omarchy logo, which is reason enough, and he built{" "}
                <a
                  href="https://github.com/tahayvr/omarchist"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Omarchist
                </a>
                , the GUI for making your own themes without touching a config file.{" "}
                <a
                  href="/manual/themes/"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Matte Black
                </a>{" "}
                is his and ships with Omarchy, along with Gold Rush, Sunset Drive, and VHS 80 on{" "}
                <a href="/themes/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
                  the extras page
                </a>
                .
              </p>
            </div>
          </article>

          <p className="air__note text-center italic text-[var(--color-terminal-black,#565f89)]">
            Remaining seats by invitation
          </p>
        </section>

        <section className="air__section flex flex-col gap-4 mt-4">
          <h2 className="text-xl font-bold text-[var(--color-terminal-blue,#7aa2f7)] border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-2">
            What it comes with
          </h2>

          <ul className="air__perks list-disc list-inside space-y-2.5 bg-[var(--color-background-storm,#24283b)] p-5 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))]">
            <li>
              <span>
                <strong className="text-white">$2,500/month</strong> for the full six months.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-white">Token account</strong> so the agents never need to
                stop.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-white">Permanent recognition</strong> as AIR alumni when six
                months are up.
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
export default AirContent;
