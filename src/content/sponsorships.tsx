export function SponsorshipsContent() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">
      <h1 className="font-heading mb-8 text-xl font-extrabold text-foreground">
        Omacom Foundation Funding
      </h1>

      <main className="flex flex-col gap-10">
        {/* Hyprland */}
        <section
          className="sponsorship bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-4"
          id="hyprland"
        >
          <div className="sponsorship__logo w-24 h-12 flex items-center">
            <a href="https://hypr.land/">
              <img
                src="/assets/images/logos/hyprland.svg"
                alt="Hyprland"
                className="max-h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="sponsorship__name text-xl sm:text-2xl font-bold text-white">Hyprland</h2>
            <span className="sponsorship__terms text-xs font-semibold px-2.5 py-0.5 rounded bg-[var(--color-terminal-blue,#7aa2f7)]/20 text-[var(--color-terminal-cyan,#7dcfff)] border border-[var(--color-terminal-blue,#7aa2f7)]/30">
              Exclusive
            </span>
          </div>

          <p className="sponsorship__body text-sm leading-relaxed text-[var(--color-terminal-white,#c0caf5)]">
            The tiling Wayland compositor that has been at the heart of Omarchy since day one, and
            one of its three core technologies. The sponsorship lets Vaxry work on it without having
            to think about commercial development or fundraising — and it freed the existing
            Hyprperks program to be released for everyone, for free. The deal runs three years, with
            an option for another two, and starts October 10.
          </p>

          <p className="text-xs text-[var(--color-terminal-black,#565f89)] pt-2 border-t border-white/5">
            <a
              href="/news/2026/08/omacom-foundation-to-be-exclusive-hyprland-sponsor"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Read the announcement
            </a>{" "}
            &middot;{" "}
            <a
              href="https://hypr.land/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Hyprland
            </a>{" "}
            by{" "}
            <a
              href="https://x.com/vaxryy"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Vaxry
            </a>
          </p>
        </section>

        {/* Quickshell */}
        <section
          className="sponsorship bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-4"
          id="quickshell"
        >
          <div className="sponsorship__logo w-24 h-12 flex items-center">
            <a href="https://quickshell.org/">
              <img
                src="/assets/images/logos/quickshell.svg"
                alt="Quickshell"
                className="max-h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="sponsorship__name text-xl sm:text-2xl font-bold text-white">
              Quickshell
            </h2>
            <span className="sponsorship__terms text-xs font-semibold px-2.5 py-0.5 rounded bg-[var(--color-turquoise,#b4f9f8)]/20 text-[var(--color-turquoise,#b4f9f8)] border border-[var(--color-turquoise,#b4f9f8)]/30">
              Premier
            </span>
          </div>

          <p className="sponsorship__body text-sm leading-relaxed text-[var(--color-terminal-white,#c0caf5)]">
            The desktop construction kit the Omarchy shell is built on: one long-running process
            drawing the bar, the menu, the notifications, the OSDs and the lock screen. It shipped
            in Quattro, and over a thousand plugins followed in the first week. Termed for three
            years out the gate.
          </p>

          <p className="text-xs text-[var(--color-terminal-black,#565f89)] pt-2 border-t border-white/5">
            <a
              href="/news/2026/08/omacom-foundation-to-be-premier-quickshell-sponsor"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Read the announcement
            </a>{" "}
            &middot;{" "}
            <a
              href="https://quickshell.org/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Quickshell
            </a>{" "}
            by{" "}
            <a
              href="https://x.com/outfoxxedd"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              outfoxxed
            </a>
          </p>
        </section>

        {/* mise */}
        <section
          className="sponsorship bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-4"
          id="mise"
        >
          <div className="sponsorship__logo w-24 h-12 flex items-center">
            <a href="https://mise.jdx.dev/">
              <img
                src="/assets/images/logos/mise.svg"
                alt="mise"
                className="max-h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="sponsorship__name text-xl sm:text-2xl font-bold text-white">mise</h2>
            <span className="sponsorship__terms text-xs font-semibold px-2.5 py-0.5 rounded bg-[var(--color-turquoise,#b4f9f8)]/20 text-[var(--color-turquoise,#b4f9f8)] border border-[var(--color-turquoise,#b4f9f8)]/30">
              Premier
            </span>
          </div>

          <p className="sponsorship__body text-sm leading-relaxed text-[var(--color-terminal-white,#c0caf5)]">
            The tool that manages the language runtimes and, just as importantly, ships every
            coding-agent CLI as a lazy-loading stub. A new harness is one command away instead of a
            packaging project — which is what keeps Omarchy moving at the pace agent tooling
            actually ships.
          </p>

          <p className="text-xs text-[var(--color-terminal-black,#565f89)] pt-2 border-t border-white/5">
            <a
              href="/news/2026/08/omacom-foundation-to-be-premier-mise-sponsor"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Read the announcement
            </a>{" "}
            &middot;{" "}
            <a
              href="https://mise.jdx.dev/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              mise
            </a>{" "}
            by{" "}
            <a
              href="https://x.com/jdxcode"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              jdx
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
export default SponsorshipsContent;
