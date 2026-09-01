import { Link } from "@tanstack/react-router";
import { Page } from "@/components/page";
import { ISO_URL, ISO_VERSION } from "@/lib/site";
import { INSTALL_POSTS } from "./testimonials";
import { XPostGrid } from "./x-post";

export function InstallPc() {
  return (
    <Page
      title="Install on a PC"
      lede="Download the ISO, put it on a USB stick, boot it, answer a few questions. Under five minutes on a modern machine. Under a minute on the fastest ones."
    >
      <a
        href={ISO_URL}
        className="inline-flex items-center gap-2 border border-green bg-green px-4 py-2 text-xs font-bold text-background no-underline hover:bg-success"
      >
        Download Omarchy {ISO_VERSION} ISO
      </a>
      <p className="mt-2 text-xs text-muted-foreground">
        Direct from iso.omarchy.org. About 6 GB. Cloudflare sits in front of it.
      </p>

      <div className="manual-prose mt-10">
        <h2>1. Put it on a USB stick</h2>
        <p>
          Use{" "}
          <a href="https://etcher.balena.io/" target="_blank" rel="noopener noreferrer">
            balenaEtcher
          </a>{" "}
          on Mac or Windows, or{" "}
          <a href="https://github.com/ifd3f/caligula" target="_blank" rel="noopener noreferrer">
            caligula
          </a>{" "}
          on Linux. Flash the ISO onto a USB stick of at least 8 GB. That’s the installer.
        </p>

        <h2>2. Turn off Secure Boot and TPM</h2>
        <p>
          Boot into the BIOS/UEFI and disable Secure Boot and TPM. They’re Microsoft security
          schemes meant for Windows and Microsoft-affiliated Linux distributions. Omarchy will not
          install while they’re on.
        </p>

        <h2>3. Boot the stick</h2>
        <p>
          Restart, open the boot menu (often F12, F10, Esc, or Del — it depends on the machine), and
          pick the USB. Use a wired or 2.4 GHz keyboard. A Bluetooth keyboard will not type the disk
          encryption password at startup.
        </p>

        <h2>4. Answer the questions</h2>
        <p>
          Full-disk install takes the whole drive. Free-space install puts Omarchy in unallocated
          space — that’s how you{" "}
          <Link to="/manual/$slug" params={{ slug: "dual-boot-install" }}>
            dual boot
          </Link>{" "}
          next to Windows. Turn off BitLocker first. Encryption is on by default. The full-disk
          option wipes the selected drive, so back up first.
        </p>
        <p>
          Confirm the summary, pick the drive, and watch it go. Then you’re ready to Omarchy. The
          longer version lives in{" "}
          <Link to="/manual/$slug" params={{ slug: "getting-started" }}>
            Getting Started
          </Link>
          .
        </p>

        <h2>Handing a machine to someone else</h2>
        <p>
          Hit Ctrl+C on the first installer screen (keyboard selection). Omarchy will install now
          and defer username, password, and keyboard until first boot. The password they pick
          becomes the encryption password too.
        </p>

        <h2>Stuck?</h2>
        <p>
          <Link to="/discord">#omarchy-help</Link> on Discord.{" "}
          <Link to="/install/mac/intel">Intel Mac?</Link>{" "}
          <Link to="/install/mac/arm">Apple Silicon?</Link>
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-4 text-sm font-extrabold">They already did</h2>
        <XPostGrid posts={INSTALL_POSTS.filter((post) => post.platform === "pc")} />
      </section>
    </Page>
  );
}
