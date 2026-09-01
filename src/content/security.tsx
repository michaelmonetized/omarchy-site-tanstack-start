import { AsciiLogo } from "./ascii-logo";

export function SecurityContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          Security at Omarchy
        </h1>
      </header>

      <main className="main w-full max-w-3xl flex flex-col gap-10 my-6">
        <section className="security__intro bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-5">
          <h2 className="text-xl font-bold text-white">Report a vulnerability</h2>
          <p className="text-sm leading-relaxed">
            If you believe you&rsquo;ve found a security vulnerability in Omarchy, please tell the{" "}
            <a
              href="/teams/#security"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Omarchy Security Team
            </a>{" "}
            privately so we have an opportunity to investigate and fix it before it is made public.
          </p>

          <a
            className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded border border-[var(--border-color,rgba(65,72,104,0.8))] bg-[var(--color-background-night,#1a1b26)] hover:border-[var(--color-terminal-cyan,#7dcfff)] hover:text-white transition-colors"
            href="mailto:security@omarchy.org?subject=Security%20report"
            aria-label="Email a security report to security@omarchy.org"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M16 2 28 7v8c0 7.6-4.9 12.7-12 15C8.9 27.7 4 22.6 4 15V7l12-5zm0 3.2L7 9v6c0 5.8 3.5 9.8 9 11.9 5.5-2.1 9-6.1 9-11.9V9l-9-3.8zm-1.5 6.3h3v7h-3v-7zm0 9h3v3h-3v-3z" />
            </svg>
            <span>security@omarchy.org</span>
          </a>

          <p className="security__warning text-xs text-[#f7768e] bg-[#f7768e]/10 p-3 rounded border border-[#f7768e]/20">
            Please don&rsquo;t report potential vulnerabilities publicly in GitHub Issues, Discord,
            or social media before they&rsquo;ve been resolved.
          </p>
        </section>

        <section className="security__section bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">What to include</h2>
          <p className="text-sm">
            Give us enough information to understand and reproduce the issue:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm text-[var(--color-terminal-white,#c0caf5)]">
            <li>The affected component and Omarchy version.</li>
            <li>Steps to reproduce the vulnerability.</li>
            <li>The impact and any proof of concept you have.</li>
            <li>Your preferred contact details for follow-up.</li>
          </ul>
        </section>

        <section className="security__section bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Responsible disclosure</h2>
          <p className="text-sm">
            Please act in good faith while investigating and reporting vulnerabilities:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm text-[var(--color-terminal-white,#c0caf5)]">
            <li>Only test systems and accounts you own or have explicit permission to test.</li>
            <li>
              Avoid privacy violations, disruption, data destruction, and service degradation.
            </li>
            <li>Don&rsquo;t exploit a vulnerability beyond what is needed to demonstrate it.</li>
            <li>
              Give us a reasonable opportunity to investigate and address the issue before
              publishing details.
            </li>
          </ul>

          <p className="text-sm mt-2 text-[var(--color-terminal-white,#c0caf5)]">
            We&rsquo;ll review your report and keep you informed as we&rsquo;re able while we work
            toward a resolution.
          </p>
        </section>

        <section className="security__section bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white">Credits</h2>
          <p className="text-sm text-[var(--color-terminal-white,#c0caf5)]">
            Everyone who has reported a security issue privately and given us the chance to ship a
            fix is thanked on the{" "}
            <a
              href="/security/credits/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              security credits
            </a>{" "}
            page.
          </p>
        </section>

        <section className="security__section bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white">Regular bugs and support</h2>
          <p className="text-sm text-[var(--color-terminal-white,#c0caf5)]">
            For anything that isn&rsquo;t a security vulnerability, please use the{" "}
            <a
              href="https://github.com/omacom/omarchy/issues"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Omarchy issue tracker
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
export default SecurityContent;
