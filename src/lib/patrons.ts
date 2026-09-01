export type Patron = {
  name: string;
  url: string;
  avatar: string;
  org: string;
  orgUrl: string;
  logo?: string;
};

export const FOUNDING_PATRONS: Patron[] = [
  {
    name: "Tobi Lütke",
    url: "https://x.com/tobi",
    avatar: "/assets/images/patrons/tobi-lutke.webp",
    org: "Shopify",
    orgUrl: "https://www.shopify.com/",
  },
  {
    name: "Patrick Collison",
    url: "https://x.com/patrickc",
    avatar: "/assets/images/patrons/patrick-collison.webp",
    org: "Stripe",
    orgUrl: "https://stripe.com",
  },
  {
    name: "Michael Dell",
    url: "https://x.com/MichaelDell",
    avatar: "/assets/images/patrons/michael-dell.webp",
    org: "Dell Technologies",
    orgUrl: "https://www.dell.com",
  },
  {
    name: "Jack Dorsey",
    url: "https://x.com/jack",
    avatar: "/assets/images/patrons/jack-dorsey.webp",
    org: "Block",
    orgUrl: "https://block.xyz",
  },
  {
    name: "Matthew Prince",
    url: "https://x.com/eastdakota",
    avatar: "/assets/images/patrons/matthew-prince.webp",
    org: "Cloudflare",
    orgUrl: "https://www.cloudflare.com",
    logo: "/assets/images/logos/cloudflare.svg",
  },
  {
    name: "Brendan Iribe",
    url: "https://x.com/brendaniribe",
    avatar: "/assets/images/patrons/brendan-iribe.webp",
    org: "Sesame",
    orgUrl: "https://www.sesame.com",
  },
  {
    name: "Jason Fried",
    url: "https://x.com/jasonfried",
    avatar: "/assets/images/patrons/jason-fried.webp",
    org: "37signals",
    orgUrl: "https://37signals.com",
    logo: "/assets/images/patrons/37signals.webp",
  },
  {
    name: "Drew Houston",
    url: "https://x.com/drewhouston",
    avatar: "/assets/images/patrons/drew-houston.webp",
    org: "Dropbox",
    orgUrl: "https://www.dropbox.com",
  },
  {
    name: "Peter Steinberger",
    url: "https://x.com/steipete",
    avatar: "/assets/images/patrons/peter-steinberger.webp",
    org: "OpenClaw",
    orgUrl: "https://openclaw.ai",
  },
  {
    name: "Brian Armstrong",
    url: "https://x.com/brian_armstrong",
    avatar: "/assets/images/patrons/brian-armstrong.webp",
    org: "Coinbase",
    orgUrl: "https://www.coinbase.com",
  },
  {
    name: "Yunjie Dai",
    url: "https://x.com/xdanger",
    avatar: "/assets/images/patrons/yunjie-dai.webp",
    org: "TapTap",
    orgUrl: "https://www.taptap.io",
  },
  {
    name: "DHH",
    url: "https://dhh.dk",
    avatar: "/assets/images/patrons/dhh.webp",
    org: "37signals",
    orgUrl: "https://37signals.com",
    logo: "/assets/images/patrons/37signals.webp",
  },
];

export type Sponsor = {
  name: string;
  href: string;
  logo: string;
  terms: string;
  author: string;
  x: string;
};

export const CORE_SPONSORS: Sponsor[] = [
  {
    name: "Hyprland",
    href: "https://hypr.land/",
    logo: "/assets/images/logos/hyprland.svg",
    terms: "Exclusive",
    author: "Vaxry",
    x: "https://x.com/vaxryy",
  },
  {
    name: "Quickshell",
    href: "https://quickshell.org/",
    logo: "/assets/images/logos/quickshell.svg",
    terms: "Premier",
    author: "outfoxxed",
    x: "https://x.com/outfoxxedd",
  },
  {
    name: "mise",
    href: "https://mise.jdx.dev/",
    logo: "/assets/images/logos/mise.svg",
    terms: "Premier",
    author: "jdx",
    x: "https://x.com/jdxcode",
  },
];
