import { Link } from "@tanstack/react-router";
import InvestmentChart from "@/content/home/investments";
import { CORE_SPONSORS, DISTINGUISHED_PATRONS, FOUNDING_PATRONS } from "@/lib/patrons";

export default function RaiseSection() {
  return (
    <section className="border-t border-border bg-background px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">
          Omacom Foundation
        </p>
        <h2 className="font-heading mt-2 text-xl font-extrabold text-foreground">
          $13M in under two weeks.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Twelve founding patrons put a million each. Four distinguished patrons just put a hundred
          thousand. Eighteen backers, a nonprofit that funds the OS, the compositor, the shell, and
          the people who build them. The chart is the raise. The names are why it exists.
        </p>

        <div className="mt-8 border border-border bg-card p-3 sm:p-5">
          <InvestmentChart />
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-md font-bold text-foreground">Founding patrons</h3>
            <Link to="/partners" className="text-xs text-terminal-cyan">
              Partners
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {FOUNDING_PATRONS.map((patron) => (
              <li key={patron.name} className="flex flex-col items-center text-center">
                <a href={patron.url} className="block no-underline" title={patron.name}>
                  <img
                    src={patron.avatar}
                    alt=""
                    width={120}
                    height={120}
                    className="size-20 object-cover sm:size-24"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a href={patron.url} className="mt-2 text-xs font-bold text-foreground">
                  {patron.name}
                </a>
                <a
                  href={patron.orgUrl}
                  title={patron.org}
                  className="mt-2 inline-flex size-8 items-center justify-center"
                >
                  <img
                    src={patron.logo}
                    alt={patron.org}
                    className="max-h-8 max-w-8 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-md font-bold text-foreground">Distinguished patrons</h3>
            <Link to="/patrons" className="text-xs text-terminal-cyan">
              Patrons
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {DISTINGUISHED_PATRONS.map((patron) => (
              <li key={patron.name} className="flex flex-col items-center text-center">
                <a href={patron.url} className="block no-underline" title={patron.name}>
                  <img
                    src={patron.avatar}
                    alt=""
                    width={120}
                    height={120}
                    className="size-20 object-cover sm:size-24"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a href={patron.url} className="mt-2 text-xs font-bold text-foreground">
                  {patron.name}
                </a>
                <a
                  href={patron.orgUrl}
                  title={patron.org}
                  className="mt-2 inline-flex size-8 items-center justify-center"
                >
                  <img
                    src={patron.logo}
                    alt={patron.org}
                    className="max-h-8 max-w-8 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-md font-bold text-foreground">Sponsors</h3>
            <Link to="/sponsorships" className="text-xs text-terminal-cyan">
              Sponsorships
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CORE_SPONSORS.map((sponsor) => (
              <li
                key={sponsor.name}
                className="flex items-center gap-4 border border-border bg-card p-4"
              >
                <a
                  href={sponsor.href}
                  className="flex size-16 shrink-0 items-center justify-center bg-muted p-2"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-10 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground">
                    <a href={sponsor.href} className="text-foreground no-underline hover:underline">
                      {sponsor.name}
                    </a>
                  </p>
                  <p className="text-[11px] tracking-wide text-terminal-cyan uppercase">
                    {sponsor.terms}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    <a href={sponsor.x}>{sponsor.author}</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
