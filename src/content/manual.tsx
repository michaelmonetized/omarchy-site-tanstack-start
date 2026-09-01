import { useState } from "react";
import { AsciiLogo } from "./ascii-logo";

export interface ManualChapter {
  url: string;
  title: string;
}

export const MANUAL_CHAPTERS: ManualChapter[] = [
  {
    url: "/manual/",
    title: "Welcome to Omarchy!",
  },
  {
    url: "/manual/getting-started/",
    title: "Getting Started",
  },
  {
    url: "/manual/coming-from-mac-or-windows/",
    title: "Coming From Mac or Windows",
  },
  {
    url: "/manual/navigation/",
    title: "Navigation",
  },
  {
    url: "/manual/the-top-bar/",
    title: "The Top Bar",
  },
  {
    url: "/manual/themes/",
    title: "Themes",
  },
  {
    url: "/manual/hotkeys/",
    title: "Hotkeys",
  },
  {
    url: "/manual/unified-clipboard-history/",
    title: "Unified Clipboard &amp; History",
  },
  {
    url: "/manual/reminders/",
    title: "Reminders",
  },
  {
    url: "/manual/notices/",
    title: "Notices",
  },
  {
    url: "/manual/text-extraction-dictation/",
    title: "Text Extraction &amp; Dictation",
  },
  {
    url: "/manual/screenshots-recording/",
    title: "Screenshots &amp; Recording",
  },
  {
    url: "/manual/toggles-idle-screensaver/",
    title: "Toggles, Idle &amp; the Screensaver",
  },
  {
    url: "/manual/omarchy-cli/",
    title: "Omarchy CLI",
  },
  {
    url: "/manual/terminal/",
    title: "Terminal",
  },
  {
    url: "/manual/neovim/",
    title: "Neovim",
  },
  {
    url: "/manual/ai/",
    title: "AI",
  },
  {
    url: "/manual/development-tools/",
    title: "Development Tools",
  },
  {
    url: "/manual/shell-tools/",
    title: "Shell Tools",
  },
  {
    url: "/manual/shell-functions/",
    title: "Shell Functions",
  },
  {
    url: "/manual/tuis/",
    title: "TUIs",
  },
  {
    url: "/manual/guis/",
    title: "GUIs",
  },
  {
    url: "/manual/browsers/",
    title: "Browsers",
  },
  {
    url: "/manual/commercial-apps-services/",
    title: "Commercial apps/services",
  },
  {
    url: "/manual/web-apps/",
    title: "Web Apps",
  },
  {
    url: "/manual/gaming/",
    title: "Gaming",
  },
  {
    url: "/manual/filling-out-pdfs/",
    title: "Filling out PDFs",
  },
  {
    url: "/manual/windows-vm/",
    title: "Windows VM",
  },
  {
    url: "/manual/other-packages/",
    title: "Other Packages",
  },
  {
    url: "/manual/updates/",
    title: "Updates",
  },
  {
    url: "/manual/dotfiles/",
    title: "Dotfiles",
  },
  {
    url: "/manual/shell-plugins/",
    title: "Shell Plugins",
  },
  {
    url: "/manual/monitors/",
    title: "Monitors",
  },
  {
    url: "/manual/keyboard-mouse-trackpad/",
    title: "Keyboard, Mouse, Trackpad",
  },
  {
    url: "/manual/networking/",
    title: "Networking",
  },
  {
    url: "/manual/system-sleep/",
    title: "System sleep",
  },
  {
    url: "/manual/hardware-authentication/",
    title: "Hardware authentication",
  },
  {
    url: "/manual/fonts/",
    title: "Fonts",
  },
  {
    url: "/manual/backgrounds/",
    title: "Backgrounds",
  },
  {
    url: "/manual/prompt/",
    title: "Prompt",
  },
  {
    url: "/manual/branding/",
    title: "Branding",
  },
  {
    url: "/manual/common-tweaks/",
    title: "Common tweaks",
  },
  {
    url: "/manual/making-your-own-theme/",
    title: "Making your own theme",
  },
  {
    url: "/manual/mac-support/",
    title: "Mac support",
  },
  {
    url: "/manual/troubleshooting/",
    title: "Troubleshooting",
  },
  {
    url: "/manual/faq/",
    title: "FAQ",
  },
  {
    url: "/manual/system-snapshots/",
    title: "System snapshots",
  },
  {
    url: "/manual/security/",
    title: "Security",
  },
  {
    url: "/manual/omarchy-on/",
    title: "Omarchy on...",
  },
  {
    url: "/manual/dual-boot-install/",
    title: "Dual Boot Install",
  },
  {
    url: "/manual/unattended-installs/",
    title: "Unattended Installs",
  },
];

export function ManualContent() {
  const [search, setSearch] = useState("");

  const filteredChapters = search.trim()
    ? MANUAL_CHAPTERS.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    : MANUAL_CHAPTERS;

  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          The Manual
        </h1>
      </header>

      <main className="main w-full max-w-5xl my-6 flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar TOC */}
        <aside className="manual__sidebar w-full lg:w-80 shrink-0 bg-[var(--color-background-storm,#24283b)] p-5 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <div className="mb-4">
            <input
              type="search"
              placeholder="Search chapters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))] bg-[var(--color-background-night,#1a1b26)] text-white placeholder-[var(--color-terminal-black,#565f89)] text-xs outline-none focus:border-[var(--color-terminal-cyan,#7dcfff)]"
            />
          </div>

          <nav className="manual__toc max-h-[70vh] overflow-y-auto pr-2" aria-label="Chapters">
            <ol className="space-y-1.5 list-decimal list-inside text-xs">
              {filteredChapters.map((ch, idx) => (
                <li key={idx} className="truncate">
                  <a
                    href={ch.url}
                    className="hover:text-[var(--color-terminal-cyan,#7dcfff)] text-[var(--color-terminal-white,#c0caf5)] hover:underline ml-1"
                  >
                    {ch.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Article content */}
        <article className="manual__content flex-1 bg-[var(--color-background-storm,#24283b)] p-6 sm:p-8 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] flex flex-col gap-5 text-sm sm:text-base">
          <h1 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/10 pb-4">
            Welcome to Omarchy!
          </h1>

          <p className="leading-relaxed">
            Omarchy is an{" "}
            <a
              href="https://manuals.omamix.org/3/omacom/76/omakase-computing"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              omakase
            </a>{" "}
            Linux distribution based on{" "}
            <a
              href="https://archlinux.org/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Arch
            </a>
            , the tiling window manager{" "}
            <a
              href="https://hypr.land/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Hyprland
            </a>
            , and the desktop construction-kit{" "}
            <a
              href="https://quickshell.org/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Quickshell
            </a>
            . It ships with everything a modern, savvy computer user needs to be productive
            immediately. From{" "}
            <a
              href="https://neovim.io/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Neovim
            </a>{" "}
            (btw) to Chromium,{" "}
            <a
              href="https://obsidian.md/"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              Obsidian
            </a>{" "}
            to LibreOffice, and Kdenlive to OBS Studio. Hell, even a retro Winamp-style music player
            is there!
          </p>

          <p className="leading-relaxed">
            This isn’t just a grab bag of preinstalled packages, though. It’s a complete system
            designed with both aesthetics and productivity in mind. Because a <em>beautiful</em>{" "}
            system is a <em>motivating</em> system, and productivity has always been{" "}
            <a
              href="https://world.hey.com/dhh/beautiful-motivations-6fef7c73"
              className="text-[var(--color-terminal-cyan,#7dcfff)] underline"
            >
              downstream from motivation
            </a>
            . There’s zero bloat here: Just everything I use.
          </p>

          <p className="leading-relaxed">
            It’s true that developing an eye for the beauty of a TUI-heavy, theme-delighted,
            tiling-window-managed system like Omarchy can be an acquired taste. But that’s why
            you’re here, isn’t it? To experience something a little outside of your comfort zone? To
            embark on a little bit of an adventure into a new way of working with computers? I hope
            so.
          </p>

          <p className="leading-relaxed">
            Omarchy isn’t like Windows and it’s not like macOS either. It’s not trying to be as
            familiar as possible. It’s trying to be beautiful and <em>better</em>. Embrace the
            Linux-ness of it all. Manually editing some config files, sure. Heavy on the terminal,
            definitely.
          </p>

          <p className="font-semibold text-[var(--color-turquoise,#b4f9f8)]">
            Let’s get started with the basics.
          </p>

          <nav className="manual__pagination flex items-center justify-between border-t border-white/10 pt-6 mt-4 text-xs sm:text-sm">
            <span />
            <a
              className="manual__pagination-contents text-[var(--color-terminal-blue,#7aa2f7)] underline"
              href="/manual/toc/"
            >
              Table of Contents
            </a>
            <a
              className="manual__pagination-next text-[var(--color-terminal-cyan,#7dcfff)] underline font-bold"
              href="/manual/getting-started/"
              rel="next"
            >
              Getting Started →
            </a>
          </nav>
        </article>
      </main>
    </div>
  );
}
export default ManualContent;
