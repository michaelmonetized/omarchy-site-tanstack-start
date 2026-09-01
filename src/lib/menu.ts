import type { LucideIcon } from "lucide-react";
import {
  CalendarIcon,
  CpuIcon,
  HeartIcon,
  HandshakeIcon,
  LaptopIcon,
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

export const nav: MenuItem[] = [
  {
    id: "news",
    anchor: "News",
    href: "/news",
    icon: NewspaperIcon,
    title: "Notes on the people, ideas, and releases shaping Omarchy.",
  },
  {
    id: "security",
    anchor: "Security",
    href: "/security",
    icon: ShieldAlertIcon,
    title: "How to responsibly report a security vulnerability in Omarchy.",
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
    id: "meetups",
    anchor: "Meetups",
    href: "/meetups",
    icon: CalendarIcon,
    title: "Omarchy meetups.",
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

export const footerColumns: { heading: string; items: MenuItem[] }[] = [
  {
    heading: "Install",
    items: [
      {
        id: "install-pc",
        anchor: "PC",
        href: "/install/pc",
        icon: MonitorIcon,
        title: "Install Omarchy on a PC.",
      },
      {
        id: "install-intel",
        anchor: "Intel Mac",
        href: "/install/mac/intel",
        icon: LaptopIcon,
        title: "Install Omarchy on an Intel Mac.",
      },
      {
        id: "install-arm",
        anchor: "Apple Silicon",
        href: "/install/mac/arm",
        icon: CpuIcon,
        title: "Install Omarchy on Apple Silicon.",
      },
    ],
  },
  {
    heading: "The system",
    items: [
      {
        id: "workstations",
        anchor: "Workstations",
        href: "/workstations",
        icon: MonitorIcon,
        title: "Workstations running Omarchy.",
      },
      {
        id: "teams",
        anchor: "Teams",
        href: "/teams",
        icon: UsersIcon,
        title: "The teams guiding Omarchy.",
      },
      {
        id: "air",
        anchor: "AIR",
        href: "/air",
        icon: PaletteIcon,
        title: "Artists in Residence.",
      },
    ],
  },
  {
    heading: "The foundation",
    items: [
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
        id: "discord",
        anchor: "Discord",
        href: "https://discord.gg/tXFUdasqhY",
        icon: MessageCircleIcon,
        title: "The Omarchy Discord.",
        external: true,
      },
    ],
  },
];

export const menu = nav;
