import { Link } from "@tanstack/react-router";
import { Page } from "@/components/page";
import { ISO_URL, ISO_VERSION, OMARCHY_MAC_URL } from "@/lib/site";
import { INSTALL_POSTS } from "./testimonials";
import { XPostGrid } from "./x-post";

export function InstallIntelMac() {
  return (
    <Page
      title="Install on an Intel Mac"
      lede="Official Omarchy. Same ISO as a PC. The installer sees Mac hardware and applies Broadcom Wi-Fi, the SPI keyboard driver, and T2 audio/fan support by itself. It will wipe macOS."
    >
      <p className="mb-6 border border-border bg-muted px-4 py-3 text-xs text-pretty text-foreground">
        This is Intel only — 2012 through 2020, including T1/T2 Touch Bar machines. Apple Silicon
        (M1 and later) is a different path:{" "}
        <Link to="/install/mac/arm" className="text-terminal-cyan">
          /install/mac/arm
        </Link>
        . The GitHub project named omarchy-mac is Asahi for M-series, not this page.
      </p>

      <a
        href={ISO_URL}
        className="inline-flex items-center gap-2 border border-green bg-green px-4 py-2 text-xs font-bold text-background no-underline hover:bg-success"
      >
        Download Omarchy {ISO_VERSION} ISO
      </a>
      <p className="mt-2 text-xs text-muted-foreground">
        Flash it with{" "}
        <a href="https://etcher.balena.io/" target="_blank" rel="noopener noreferrer">
          balenaEtcher
        </a>
        . Then:
      </p>

      <div className="manual-prose mt-10">
        <h2>1. Disable Apple Secure Boot</h2>
        <ol>
          <li>Turn the Mac off.</li>
          <li>Turn it on and immediately hold Command-R until Recovery appears.</li>
          <li>Select your user and enter the password if asked.</li>
          <li>Utilities → Startup Security Utility.</li>
          <li>Authenticate, then choose “No Security”.</li>
          <li>Allow booting from external or removable media.</li>
        </ol>

        <h2>2. Boot the USB</h2>
        <ol>
          <li>Insert the stick.</li>
          <li>Restart and immediately hold Option until the boot devices appear.</li>
          <li>Pick the orange EFI Boot device.</li>
          <li>
            Continue as in <Link to="/install/pc">the PC install</Link> — questions, drive, watch it
            go.
          </li>
        </ol>
        <p>
          Omarchy is the only OS on the disk. macOS is gone. Internet Recovery can put it back later
          if you want.
        </p>

        <h2>What the installer fixes for you</h2>
        <p>
          Broadcom Wi-Fi and firmware. SPI keyboard on the MacBooks that need it. NVMe suspend on
          those same models. On T2 machines: the patched linux-t2 kernel, T2 audio, Apple firmware,
          and t2fanrd. Touch Bar gets the kernel’s Boot Camp-style support.
        </p>

        <h2>Known limits</h2>
        <p>
          2016 first-gen Touch Bar (T1): Touch Bar and sound do not work. T2 machines are in much
          better shape. Full model list and caveats:{" "}
          <Link to="/manual/$slug" params={{ slug: "mac-support" }}>
            Mac support
          </Link>{" "}
          in the manual. Community work continues in #omarchy-on-other on{" "}
          <Link to="/discord">Discord</Link>.
        </p>

        <h2>36% faster</h2>
        <p>
          A 2019 MacBook Pro picked up 36% in a simple test just by leaving macOS. That’s why people
          keep putting Omarchy on the Intel Mac in the closet.
        </p>

        <p>
          The project named{" "}
          <a href={OMARCHY_MAC_URL} target="_blank" rel="noopener noreferrer">
            omarchy-mac
          </a>{" "}
          is the Apple Silicon Asahi installer. Wrong chip for this page — use{" "}
          <Link to="/install/mac/arm">Apple Silicon</Link> instead.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-4 text-sm font-extrabold">They already did</h2>
        <XPostGrid posts={INSTALL_POSTS.filter((post) => post.platform === "intel")} />
      </section>
    </Page>
  );
}
