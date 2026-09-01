export function MeetupsContent() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">
      <h1 className="font-heading mb-8 text-xl font-extrabold text-foreground">
        Meetups around the world
      </h1>

      <main className="flex flex-col gap-12">
        <div className="meetups__calendar flex flex-col items-center gap-6 bg-[var(--color-background-storm,#24283b)] p-6 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <iframe
            className="meetups__embed w-full max-w-2xl h-[450px] rounded-lg border border-white/10"
            src="https://luma.com/embed/calendar/cal-SDGGMsEps9ExsrT/events?lt=dark"
            title="Upcoming Omarchy meetups on Luma"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[var(--border-color,rgba(65,72,104,0.8))] bg-[var(--color-background-night,#1a1b26)] hover:border-[var(--color-terminal-cyan,#7dcfff)] hover:text-white transition-colors"
            href="https://luma.com/omarchy"
            aria-label="The Omarchy calendar on Luma"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
              <path d="M10 2c.83 0 1.5.67 1.5 1.5V5h9V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V5h2.5C28.43 5 30 6.57 30 8.5v18c0 1.93-1.57 3.5-3.5 3.5h-21C3.57 30 2 28.43 2 26.5v-18C2 6.57 3.57 5 5.5 5H8V3.5C8 2.67 8.67 2 9.5 2zM27 13H5v13.5c0 .28.22.5.5.5h21c.28 0 .5-.22.5-.5zm-16.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5.5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5.5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
            <span>Open in Luma</span>
          </a>
        </div>

        <section className="rules flex flex-col gap-6 bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <header className="rules__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4">
            <h2 className="rules__title text-xl font-bold text-white mb-1">
              Run Your Own Omarchy Meetup
            </h2>
            <p className="text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Help make computers fun again for everyone
            </p>
          </header>

          <ol className="space-y-6 list-decimal list-inside">
            <li className="rule">
              <strong className="text-white text-base">About Omarchy</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                The meetup should primarily be about Omarchy, Linux, open source, programming,
                customization, or adjacent hacker culture.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">Open to everyone</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                No invitation-only &ldquo;official Omarchy&rdquo; events. Capacity limits are
                obviously fine.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">Community-run</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Organizers speak for themselves, not for Omarchy or the Omacom Foundation.
                &ldquo;Omarchy Meetup&rdquo; means community event, not official endorsement.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">No territorial ownership</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Nobody owns a city. Anyone may organize an Omarchy meetup anywhere.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">No profiteering</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Free is preferred. Charging to cover venue, food, or actual event costs is fine;
                don&rsquo;t turn the Omarchy name into an events business.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">Sponsors are fine</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Local companies can provide space, pizza, drinks, and the rest, but sponsorship must
                be disclosed and the event can&rsquo;t become a sales pitch.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">
                Behave like civilized adults (with child-like wonder)
              </strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Don&apos;t be a jackass. The organizer has final say over removal from their event.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">Use the name and logo responsibly</strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                &ldquo;Omarchy Copenhagen&rdquo; is fine. Don&rsquo;t imply that you&rsquo;re
                Omarchy itself, the Omacom Foundation, or an authorized representative.
              </p>
            </li>

            <li className="rule">
              <strong className="text-white text-base">
                <a
                  href="https://luma.com/omarchy"
                  className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
                >
                  Submit it
                </a>
              </strong>
              <p className="mt-1 ml-6 text-sm text-[var(--color-terminal-white,#c0caf5)]">
                Put the event on Luma and submit it to the global Omarchy calendar so everyone can
                find it.
              </p>
            </li>
          </ol>

          <p className="rules__note text-center italic text-xs text-[var(--color-turquoise,#b4f9f8)] mt-4">
            We need a movement to make The Prophecy come true!
          </p>
        </section>
      </main>
    </div>
  );
}
export default MeetupsContent;
