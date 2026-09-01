import { AsciiLogo } from "./ascii-logo";

export function TeamsContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          The teams guiding Omarchy
        </h1>
      </header>

      <main className="main w-full max-w-5xl flex flex-col gap-12 my-6">
        {/* Core Team */}
        <section
          className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-6"
          id="core"
        >
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">
              Omarchy Core
            </h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Setting the direction
            </p>
          </header>

          <div className="team__members grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/dhh.webp"
                width={240}
                height={240}
                alt="DHH"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://dhh.dk" className="hover:underline">
                  DHH
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                USA/Denmark
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/ryan-hughes.webp"
                width={240}
                height={240}
                alt="Ryan Hughes"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/ryanrhughes" className="hover:underline">
                  Ryan Hughes
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">USA</p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/tobi-lutke.webp"
                width={240}
                height={240}
                alt="Tobi Lütke"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/tobi" className="hover:underline">
                  Tobi Lütke
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Canada
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/bjarne-overli.webp"
                width={240}
                height={240}
                alt="Bjarne Øverli"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/iamdothash" className="hover:underline">
                  Bjarne Øverli
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Norway
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/hancore.webp"
                width={240}
                height={240}
                alt="HANCORE"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://github.com/HANCORE-linux" className="hover:underline">
                  HANCORE
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Germany
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/spencer-bull.webp"
                width={240}
                height={240}
                alt="Spencer Bull"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/SpencerGBull" className="hover:underline">
                  Spencer Bull
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">USA</p>
            </article>
          </div>
        </section>

        {/* Security Team */}
        <section
          className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-6"
          id="security"
        >
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">
              Omarchy Security
            </h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Keeping your system safe
            </p>
          </header>

          <div className="team__members grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/adrian-rangel.webp"
                width={240}
                height={240}
                alt="Adrian Rangel"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/acrogenesis" className="hover:underline">
                  Adrian Rangel
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                Mexico
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/mehmet-ince.webp"
                width={240}
                height={240}
                alt="Mehmet İnce"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/mdisec" className="hover:underline">
                  Mehmet İnce
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                UK
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/erik-melton.webp"
                width={240}
                height={240}
                alt="Erik Melton"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/meltonaerik" className="hover:underline">
                  Erik Melton
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                Norway
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/sayem-chowdhury.webp"
                width={240}
                height={240}
                alt="Sayem Chowdhury"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/Sayem314" className="hover:underline">
                  Sayem Chowdhury
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                Bangladesh
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/sebastian-stange.webp"
                width={240}
                height={240}
                alt="Sebastian Stange"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/bastidotnet" className="hover:underline">
                  Sebastian Stange
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                Germany
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/ryan-hughes.webp"
                width={240}
                height={240}
                alt="Ryan Hughes"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://x.com/ryanrhughes" className="hover:underline">
                  Ryan Hughes
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                USA
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-20 h-20 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/dhh.webp"
                width={240}
                height={240}
                alt="DHH"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-xs font-bold text-white">
                <a href="https://dhh.dk" className="hover:underline">
                  DHH
                </a>
              </h3>
              <p className="member__meta text-[10px] text-[var(--color-terminal-black,#565f89)]">
                USA/Denmark
              </p>
            </article>
          </div>

          <p className="team__note text-center text-xs text-[var(--color-terminal-black,#565f89)] pt-4 border-t border-white/5">
            <a href="/security/" className="text-[var(--color-terminal-cyan,#7dcfff)] underline">
              Report a security issue
            </a>
          </p>
        </section>

        {/* Rangers */}
        <section
          className="team bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-6"
          id="rangers"
        >
          <header className="team__header border-b border-[var(--border-color,rgba(65,72,104,0.8))] pb-4">
            <h2 className="team__name text-xl sm:text-2xl font-bold text-white mb-1">
              Omarchy Rangers
            </h2>
            <p className="team__description text-sm text-[var(--color-turquoise,#b4f9f8)]">
              Helping others find their way
            </p>
          </header>

          <div className="team__members grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/mihai.webp"
                width={240}
                height={240}
                alt="Mihai"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/SandorhaziM" className="hover:underline">
                  Mihai
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Romania
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/mateo-vaz.webp"
                width={240}
                height={240}
                alt="Mateo Vaz"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/Mateo_VX" className="hover:underline">
                  Mateo Vaz
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Uruguay
              </p>
            </article>

            <article className="member flex flex-col items-center text-center">
              <img
                className="member__avatar w-24 h-24 rounded-full object-cover border-2 border-white/10 mb-2"
                src="/assets/images/team/nira.webp"
                width={240}
                height={240}
                alt="Nira"
                loading="lazy"
                decoding="async"
              />
              <h3 className="member__name text-sm font-bold text-white">
                <a href="https://x.com/niraletter" className="hover:underline">
                  Nira
                </a>
              </h3>
              <p className="member__meta text-xs text-[var(--color-terminal-black,#565f89)]">
                Nepal
              </p>
            </article>
          </div>

          <p className="team__note text-center text-xs text-[var(--color-terminal-black,#565f89)] pt-4 border-t border-white/5">
            Want to help? Apply to{" "}
            <a
              href="mailto:rangers@omarchy.org"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              rangers@omarchy.org
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
export default TeamsContent;
