import type { LucideIcon } from "lucide-react";
import {
  BookOpenIcon,
  CalendarIcon,
  DownloadIcon,
  GithubIcon,
  HeartIcon,
  HandshakeIcon,
  MessageCircleIcon,
  MonitorIcon,
  NewspaperIcon,
  PaletteIcon,
  PuzzleIcon,
  ShieldAlertIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";

export type MenuItem = {
  id: string;
  anchor: string;
  href: string;
  title: string;
  icon: LucideIcon;
  external?: boolean;
};

export const menu: MenuItem[] = [
  {
    id: "manual",
    anchor: "Manual",
    href: "/manual",
    icon: BookOpenIcon,
    title: "The Omarchy Manual.",
  },
  {
    id: "iso",
    anchor: "ISO",
    href: "https://iso.omarchy.org/omarchy-4.0.2.iso",
    icon: DownloadIcon,
    title: "Download the Omarchy ISO.",
    external: true,
  },
  {
    id: "plugins",
    anchor: "Plugins",
    href: "https://omarchyplugins.com/",
    icon: PuzzleIcon,
    title: "The plugin directory.",
    external: true,
  },
  {
    id: "github",
    anchor: "GitHub",
    href: "https://github.com/omacom/omarchy",
    icon: GithubIcon,
    title: "The Omarchy source.",
    external: true,
  },
  {
    id: "security",
    anchor: "Security",
    href: "/security",
    icon: ShieldAlertIcon,
    title: "How to responsibly report a security vulnerability in Omarchy.",
  },
  {
    id: "news",
    anchor: "News",
    href: "/news",
    icon: NewspaperIcon,
    title: "Notes on the people, ideas, and releases shaping Omarchy.",
  },
  {
    id: "teams",
    anchor: "Teams",
    href: "/teams",
    icon: UsersIcon,
    title: "The teams guiding Omarchy.",
  },
  {
    id: "patrons",
    anchor: "Patrons",
    href: "/patrons",
    icon: HeartIcon,
    title: "The patrons funding Omarchy.",
  },
  {
    id: "sponsors",
    anchor: "Sponsorships",
    href: "/sponsorships",
    icon: HandshakeIcon,
    title: "The projects Omarchy sponsors.",
  },
  {
    id: "air",
    anchor: "AIR",
    href: "/air",
    icon: PaletteIcon,
    title: "Artists in Residence.",
  },
  {
    id: "discord",
    anchor: "Discord",
    href: "https://discord.gg/tXFUdasqhY",
    icon: MessageCircleIcon,
    title: "The Omarchy Discord.",
    external: true,
  },
  {
    id: "meetups",
    anchor: "Meetups",
    href: "/meetups",
    icon: CalendarIcon,
    title: "Omarchy meetups.",
  },
  {
    id: "workstations",
    anchor: "Workstations",
    href: "/workstations",
    icon: MonitorIcon,
    title: "Workstations running Omarchy.",
  },
  {
    id: "merch",
    anchor: "Merch",
    href: "https://supply.37signals.com/collections/omarchy",
    icon: ShoppingBagIcon,
    title: "Omarchy merch.",
    external: true,
  },
];
