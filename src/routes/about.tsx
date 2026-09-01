import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/page";

export const Route = createFileRoute("/about")({
  staticData: { layout: "default" },
  component: About,
  head: () => ({ meta: [{ title: "About — Omarchy" }] }),
});

function About() {
  return (
    <Page
      title="About Omarchy"
      lede="Beautiful, fun, and opinionated Linux by DHH. The malleable OS for the age of agents."
    >
      <div className="manual-prose">
        <p>
          Omarchy is an omakase Linux distribution based on Arch, Hyprland, and Quickshell. It ships
          with everything a modern, savvy computer user needs to be productive immediately. From
          Neovim (btw) to Chromium, Obsidian to LibreOffice, and Kdenlive to OBS Studio.
        </p>
        <p>
          This isn’t a grab bag of preinstalled packages. It’s a complete system designed with both
          aesthetics and productivity in mind. A beautiful system is a motivating system, and
          productivity has always been downstream from motivation.
        </p>
        <p>
          <Link to="/install">Install it</Link>. Read <Link to="/manual">the manual</Link>. Or start
          with <Link to="/news">the news</Link>.
        </p>
      </div>
    </Page>
  );
}
