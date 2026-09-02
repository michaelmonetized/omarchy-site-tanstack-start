import type { ReactNode } from "react";
import { MockFrame } from "@/components/mock-frame";
import { SHIPPED_THEMES } from "@/lib/shipped-themes";
import { cn } from "@/lib/utils";

const MENU_ROWS = [
  { label: "Apps", hint: "Launch anything" },
  { label: "Style", hint: "Theme, font, background" },
  { label: "Setup", hint: "Monitors, input, defaults" },
  { label: "Install", hint: "Package, AUR, editor, gaming" },
  { label: "Update", hint: "Omarchy and the rest" },
  { label: "System", hint: "Power, toggle, capture" },
  { label: "About", hint: "This machine" },
];

const PLUGIN_ROWS = [
  { name: "omarchy-menu", about: "The menu is a plugin surface. Add your own rows." },
  { name: "shell-bar", about: "Swap widgets. Keep the one process." },
  { name: "theme-pack", about: "Ship a theme as a repo. Install from the menu." },
  { name: "agent-hooks", about: "Teach the agent the same commands you type." },
];

function SectionCopy({
  kicker,
  title,
  children,
  href,
  hrefLabel,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  href: string;
  hrefLabel: string;
}) {
  const external = href.startsWith("http");
  return (
    <div className="flex max-w-xl flex-col justify-center">
      <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">{kicker}</p>
      <h2 className="font-heading mt-2 text-xl font-extrabold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted-foreground">{children}</div>
      <p className="mt-5">
        <a
          href={href}
          className="text-xs text-terminal-cyan"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {hrefLabel}
        </a>
      </p>
    </div>
  );
}

function FeatureRow({
  reverse = false,
  copy,
  mock,
}: {
  reverse?: boolean;
  copy: ReactNode;
  mock: ReactNode;
}) {
  return (
    <section className="border-t border-border px-4 py-16 sm:px-8">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        {copy}
        {mock}
      </div>
    </section>
  );
}

function MenuMock() {
  return (
    <MockFrame>
      <div className="border border-border bg-card/90 p-4 font-mono sm:p-6">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-bold text-foreground">Omarchy Menu</span>
          <kbd className="border border-border bg-muted px-1.5 py-0.5 text-[11px] text-terminal-cyan">
            Super + Space
          </kbd>
        </div>
        <ul className="divide-y divide-border border border-border">
          {MENU_ROWS.map((row, index) => (
            <li
              key={row.label}
              className={cn(
                "flex items-center justify-between gap-4 px-3 py-2 text-sm",
                index === 0 ? "bg-muted text-green" : "text-foreground",
              )}
            >
              <span>{row.label}</span>
              <span className="text-xs text-muted-foreground">{row.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  );
}

function ThemesMock() {
  return (
    <MockFrame>
      <div className="grid grid-cols-3 gap-px bg-border sm:grid-cols-4">
        {SHIPPED_THEMES.map((theme) => (
          <figure key={theme.title} className="bg-card">
            <img
              src={theme.imgSrc}
              alt={theme.title}
              className="aspect-video w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="px-2 py-1.5 text-[11px] text-muted-foreground">
              {theme.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </MockFrame>
  );
}

function HyprlandMock() {
  return (
    <MockFrame>
      <div className="grid grid-cols-2 gap-px bg-border">
        {[
          { src: "/assets/images/mocks/navigation-dwindle-layout.webp", alt: "Dwindle layout" },
          { src: "/assets/images/mocks/navigation-fourway-tiling.webp", alt: "Four-way tiling" },
          { src: "/assets/images/mocks/navigation-scrolling-layout.webp", alt: "Scrolling layout" },
          { src: "/assets/images/mocks/navigation-stacked.webp", alt: "Stacked windows" },
        ].map((shot) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </MockFrame>
  );
}

function QuickshellMock() {
  return (
    <MockFrame>
      <div className="grid grid-cols-2 gap-px bg-border">
        {[
          { src: "/assets/images/mocks/shell-bar.webp", alt: "Omarchy bar" },
          { src: "/assets/images/mocks/notice-weather.webp", alt: "Weather panel" },
          { src: "/assets/images/mocks/clipboard-history.webp", alt: "Clipboard overlay" },
          { src: "/assets/images/mocks/lock-screen.webp", alt: "Lock screen" },
        ].map((shot) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </MockFrame>
  );
}

function PluginsMock() {
  return (
    <MockFrame>
      <div className="border border-border bg-card/90 p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="font-bold text-foreground">omarchyplugins.com</span>
          <span className="text-green">live</span>
        </div>
        <ul className="divide-y divide-border border border-border">
          {PLUGIN_ROWS.map((plugin) => (
            <li key={plugin.name} className="px-3 py-3">
              <p className="font-mono text-sm text-terminal-cyan">{plugin.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{plugin.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  );
}

export default function FeatureSections() {
  return (
    <>
      <FeatureRow
        copy={
          <SectionCopy
            kicker="Omarchy menu"
            title="Super + Space. That's the whole computer."
            href="/manual/navigation"
            hrefLabel="Read navigation"
          >
            <p>
              Apps, style, install, update, capture, the lot. Type to filter. Jump straight to a
              branch. Script it. Teach your agent to drive it.
            </p>
          </SectionCopy>
        }
        mock={<MenuMock />}
      />

      <FeatureRow
        reverse
        copy={
          <SectionCopy
            kicker="Themes"
            title="Twenty-two shipped. The rest is a repo."
            href="/themes"
            hrefLabel="Browse extra themes"
          >
            <p>
              Desktop, terminal, neovim, btop, Chromium, the bar, the menu, the lock screen. One
              switch. Extra themes live on their own page.
            </p>
          </SectionCopy>
        }
        mock={<ThemesMock />}
      />

      <FeatureRow
        copy={
          <SectionCopy
            kicker="Hyprland"
            title="Window management that stays out of the way."
            href="/sponsorships"
            hrefLabel="Why we sponsor Hyprland"
          >
            <p>
              Tiling, dwindle, scrolling, stacked. Keyboard first. Omarchy is the exclusive Hyprland
              sponsor so Vaxry can keep building it without a sales job.
            </p>
          </SectionCopy>
        }
        mock={<HyprlandMock />}
      />

      <FeatureRow
        reverse
        copy={
          <SectionCopy
            kicker="Quickshell"
            title="One process draws the desktop."
            href="/sponsorships"
            hrefLabel="Why we sponsor Quickshell"
          >
            <p>
              Bar, menu, notifications, OSDs, lock screen. Shipped in Quattro. A thousand plugins
              followed in the first week.
            </p>
          </SectionCopy>
        }
        mock={<QuickshellMock />}
      />

      <FeatureRow
        copy={
          <SectionCopy
            kicker="Plugins"
            title="Then you fork the rest."
            href="https://omarchyplugins.com/"
            hrefLabel="Open the plugin directory"
          >
            <p>
              The OS is a starting point. Add menu rows. Swap shell widgets. Ship a theme. Be the
              Omarch.
            </p>
          </SectionCopy>
        }
        mock={<PluginsMock />}
      />
    </>
  );
}
