import { Link } from "@tanstack/react-router";
import { Page } from "@/components/page";
import { OMARCHY_MAC_URL, OMARCHY_MX_MAC_URL } from "@/lib/site";
import { INSTALL_POSTS } from "./testimonials";
import { XPostGrid } from "./x-post";

export function InstallAppleSilicon() {
  return (
    <Page
      title="Install on Apple Silicon"
      lede="Not official Omarchy. This is community Asahi Linux + Omarchy, dual-booting next to macOS. M1, M2, M3. Hardware support is whatever Asahi has for your model."
    >
      <p className="mb-8 border border-border bg-muted px-4 py-3 text-xs text-pretty text-foreground">
        Official Omarchy still says no to M-series. These are community installers. Back up macOS.
        Check{" "}
        <a
          href="https://asahilinux.org/fedora/#device-support"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asahi device support
        </a>{" "}
        for your machine. Need at least 50 GB free, 100 GB is kinder. Intel Macs:{" "}
        <Link to="/install/mac/intel" className="text-terminal-cyan">
          /install/mac/intel
        </Link>
        .
      </p>

      <div className="manual-prose">
        <h2>The signed installer — maralcbr/omarchy-mx-mac</h2>
        <p>
          This is the path from{" "}
          <a href={OMARCHY_MX_MAC_URL} target="_blank" rel="noopener noreferrer">
            maralcbr/omarchy-mx-mac
          </a>
          . It verifies immutable release metadata and installs Omarchy 4 on a prepared Asahi Arch
          Minimal system. Tested on M1, M2, and M3. Qualification notes live on each GitHub release.
        </p>

        <h3>1. Asahi Arch Minimal, from macOS Terminal</h3>
        <pre>
          <code>curl https://asahi-alarm.org/installer-bootstrap.sh | sh</code>
        </pre>
        <p>
          Choose Asahi Arch Minimal. Give Linux enough disk. Finish, then boot into the new Arch
          system.
        </p>

        <h3>2. Get online as root</h3>
        <p>Log in as root with the credentials Asahi printed. If the network is down:</p>
        <pre>
          <code>nmtui</code>
        </pre>
        <p>Then update and grab the verification tools:</p>
        <pre>
          <code>pacman -Syu --needed curl gnupg linux-asahi-headers networkmanager iwd</code>
        </pre>

        <h3>3. Download, verify, install</h3>
        <p>Nothing runs until the signature check passes:</p>
        <pre>
          <code>{`release=https://github.com/maralcbr/omarchy-pkgs/releases/download/asahi-quattro-channel-25
curl -fLO "$release/install-asahi-quattro"
curl -fLO "$release/install-asahi-quattro.sig"
curl -fLO https://raw.githubusercontent.com/maralcbr/omarchy-mx-mac/main/default/omarchy-release.gpg
test "$(gpg --show-keys --with-colons omarchy-release.gpg | awk -F: '$1 == "fpr" { print $10; exit }')" = \\
  5983B1CA32CB778F4D74D24ECFF35022CA5B5959
gpgv --keyring ./omarchy-release.gpg install-asahi-quattro.sig install-asahi-quattro
bash install-asahi-quattro --verify-only
bash install-asahi-quattro --fresh`}</code>
        </pre>
        <p>
          Enter the username and passwords carefully. Do not interrupt package transactions. Then:
        </p>
        <pre>
          <code>reboot</code>
        </pre>
        <p>
          Confirm display, keyboard, touchpad, Wi-Fi, audio, brightness, and power. Later updates:
          <code> omarchy update</code>. Full troubleshooting is in the{" "}
          <a href={`${OMARCHY_MX_MAC_URL}#readme`} target="_blank" rel="noopener noreferrer">
            mx-mac README
          </a>
          .
        </p>

        <h2>The one-command path — omarchy-mac/omarchy-mac</h2>
        <p>
          Same Asahi start, then one script that creates the user, optionally encrypts, and installs
          Omarchy 4. From{" "}
          <a href={OMARCHY_MAC_URL} target="_blank" rel="noopener noreferrer">
            omarchy-mac/omarchy-mac
          </a>
          . Choose Asahi Alarm Minimal (BTRFS). Boot as root/root, get online with{" "}
          <code>nmtui</code>, then:
        </p>
        <pre>
          <code>
            {`curl -fsSL https://raw.githubusercontent.com/omarchy-mac/omarchy-mac/quattro/bin/omarchy-mac-setup | bash`}
          </code>
        </pre>
        <p>
          About fifteen minutes, three reboots. Encryption is on by default.{" "}
          <code>--no-encrypt</code> skips it. Read the script before piping it if that’s your
          religion.
        </p>

        <h2>This is community work</h2>
        <p>
          External displays, speakers, cameras, and suspend still follow Asahi, model by model.
          Official Omarchy has not signed off on M-series. When you hit a wall, the project issues
          and #omarchy-on-other on <Link to="/discord">Discord</Link> are the rooms.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-4 text-sm font-extrabold">They already did</h2>
        <XPostGrid posts={INSTALL_POSTS.filter((post) => post.platform === "arm")} />
      </section>
    </Page>
  );
}
