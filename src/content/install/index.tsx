import { Link } from "@tanstack/react-router";
import { CpuIcon, DownloadIcon, LaptopIcon, MonitorIcon } from "lucide-react";
import { Page } from "@/components/page";
import { ISO_VERSION } from "@/lib/site";
import { INSTALL_POSTS } from "./testimonials";
import { XPostGrid } from "./x-post";

const MACHINES = [
  {
    to: "/install/pc" as const,
    icon: MonitorIcon,
    title: "PC",
    copy: `The official ISO. Flash a USB, turn off Secure Boot, and you're in. Omarchy ${ISO_VERSION}.`,
  },
  {
    to: "/install/mac/intel" as const,
    icon: LaptopIcon,
    title: "Intel Mac",
    copy: "Same ISO. Disable Apple Secure Boot, boot the orange EFI device, and the installer applies the T2 fixes itself.",
  },
  {
    to: "/install/mac/arm" as const,
    icon: CpuIcon,
    title: "Apple Silicon",
    copy: "Not official yet. Community Asahi installs from maralcbr/omarchy-mx-mac and omarchy-mac/omarchy-mac.",
  },
];

export function InstallIndex() {
  return (
    <Page
      title="Install Omarchy"
      lede="Pick the machine you actually have. PCs and Intel Macs run the official ISO. Apple Silicon is a community Asahi install — dual-boot with macOS, not a wipe."
      wide
    >
      <div className="grid gap-4 md:grid-cols-3">
        {MACHINES.map((machine) => {
          const Icon = machine.icon;
          return (
            <Link
              key={machine.to}
              to={machine.to}
              className="flex flex-col gap-3 border border-border bg-card p-5 text-foreground no-underline hover:border-green"
            >
              <Icon className="size-5 text-green" aria-hidden="true" />
              <h2 className="font-heading m-0 text-sm font-extrabold">{machine.title}</h2>
              <p className="m-0 text-xs text-pretty text-muted-foreground">{machine.copy}</p>
              <span className="mt-auto text-xs font-bold text-terminal-cyan">Read the steps →</span>
            </Link>
          );
        })}
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-2 text-sm font-extrabold text-foreground">
          From the people who already did it
        </h2>
        <p className="mb-6 text-xs text-muted-foreground">
          Real posts. Real machines. PC, Intel Mac, and Apple Silicon.
        </p>
        <XPostGrid posts={INSTALL_POSTS} />
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        <DownloadIcon className="mr-1 inline size-3.5 align-text-bottom" aria-hidden="true" />
        Already know you want the ISO?{" "}
        <Link to="/install/pc" className="text-terminal-cyan">
          Download it on the PC page
        </Link>
        .
      </p>
    </Page>
  );
}
