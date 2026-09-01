export type InstallPlatform = "pc" | "intel" | "arm";

export type InstallPost = {
  id: string;
  platform: InstallPlatform;
  name: string;
  handle: string;
  avatar: string;
  date: string;
  href: string;
  text: string;
};

export const INSTALL_POSTS: InstallPost[] = [
  {
    id: "2094874025428148634",
    platform: "pc",
    name: "Erik Westerdahl",
    handle: "erikwesterdahl",
    avatar: "/assets/images/install/erikwesterdahl.jpg",
    date: "Sep 1",
    href: "https://x.com/erikwesterdahl/status/2094874025428148634",
    text: "Haven’t used a Linux distro since Ubuntu in 2008, but Omarchy felt like a no-brainer for my old gaming PC. Under 5 min install. Time to start building the things I dreamed about as a kid. Nice work @dhh",
  },
  {
    id: "2093820398026867058",
    platform: "pc",
    name: "renerocksai",
    handle: "renerocksai",
    avatar: "/assets/images/install/renerocksai.jpg",
    date: "Aug 29",
    href: "https://x.com/renerocksai/status/2093820398026867058",
    text: "So, a few days ago, I tried @dhh's #omarchy. Got myself a beautiful X1 Carbon < 1kg. Install time: 56s. Ten minutes later, it had become my daily driver, demoting the 16\" M3 Pro Max to a mere SSH server. It is literally SO good and so much fun!",
  },
  {
    id: "2094896308402188791",
    platform: "intel",
    name: "Catalin I. Cighi",
    handle: "CatalinCighi",
    avatar: "/assets/images/install/catalincighi.jpg",
    date: "Sep 1",
    href: "https://x.com/CatalinCighi/status/2094896308402188791",
    text: "This is how long it took to install #omarchy on a ten years old MacBook Pro I thought I may never find a use for — it’s the one with the Touch Bar.",
  },
  {
    id: "2094850755924812110",
    platform: "intel",
    name: "Loadedlen",
    handle: "loadedlen",
    avatar: "/assets/images/install/loadedlen.jpg",
    date: "Sep 1",
    href: "https://x.com/loadedlen/status/2094850755924812110",
    text: "I put it on a 2017 MacBook Air after struggling to get OCLP to play nice with my aftermarket 1TB NVMe. Omarchy installed in 4 minutes and it's AWESOME! I spent an hour last night just dicking around learning key bindings and I'm never going back to MacOS.",
  },
  {
    id: "2094077648456614380",
    platform: "intel",
    name: "Dr. Abdullah Altaweel",
    handle: "DrQ80_7",
    avatar: "/assets/images/install/drq80.jpg",
    date: "Aug 30",
    href: "https://x.com/DrQ80_7/status/2094077648456614380",
    text: "I just installed Omarchy on my 2016 Macbook Pro, it gave it NEW life. Never touched it before, ive got an M2 max in its place. Now I look forward to tinkering around with it.",
  },
  {
    id: "2094036144446902522",
    platform: "arm",
    name: "Focus",
    handle: "BowTiedFocus",
    avatar: "/assets/images/install/bowtiedfocus.jpg",
    date: "Aug 30",
    href: "https://x.com/BowTiedFocus/status/2094036144446902522",
    text: "I installed Omarchy on an old M1, but Asahi doesn’t have support for my beautiful ProArt display 😭",
  },
];
