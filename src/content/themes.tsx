import { useState, useMemo } from "react";
import { AsciiLogo } from "./ascii-logo";

export interface ThemeItem {
  title: string;
  repoUrl: string;
  imgSrc: string;
}

export const COMMUNITY_THEMES: ThemeItem[] = [
  {
    title: "Aetheria",
    repoUrl: "https://github.com/JJDizz1L/aetheria",
    imgSrc: "/assets/themes/aetheria.webp",
  },
  {
    title: "Amberbyte",
    repoUrl: "https://github.com/tahfizhabib/omarchy-amberbyte-theme",
    imgSrc: "/assets/themes/amberbyte.webp",
  },
  {
    title: "Arc Blueberry",
    repoUrl: "https://github.com/vale-c/omarchy-arc-blueberry",
    imgSrc: "/assets/themes/arc-blueberry.webp",
  },
  {
    title: "Archwave",
    repoUrl: "https://github.com/davidguttman/archwave",
    imgSrc: "/assets/themes/archwave.webp",
  },
  {
    title: "Ash",
    repoUrl: "https://github.com/bjarneo/omarchy-ash-theme",
    imgSrc: "/assets/themes/ash.webp",
  },
  {
    title: "Artzen",
    repoUrl: "https://github.com/tahfizhabib/omarchy-artzen-theme",
    imgSrc: "/assets/themes/artzen.webp",
  },
  {
    title: "Aura",
    repoUrl: "https://github.com/bjarneo/omarchy-aura-theme",
    imgSrc: "/assets/themes/aura.webp",
  },
  {
    title: "All Hallow&#39;s Eve",
    repoUrl: "https://github.com/guilhermetk/omarchy-all-hallows-eve-theme",
    imgSrc: "/assets/themes/all-hallow-s-eve.webp",
  },
  {
    title: "Atelier",
    repoUrl: "https://github.com/atif-1402/omarchy-atelier-theme",
    imgSrc: "/assets/themes/atelier.webp",
  },
  {
    title: "Ayaka",
    repoUrl: "https://github.com/abhijeet-swami/omarchy-ayaka-theme",
    imgSrc: "/assets/themes/ayaka.webp",
  },
  {
    title: "Azure Glow",
    repoUrl: "https://github.com/Hydradevx/omarchy-azure-glow-theme",
    imgSrc: "/assets/themes/azure-glow.webp",
  },
  {
    title: "Batman",
    repoUrl: "https://github.com/OldJobobo/omarchy-batman-theme",
    imgSrc: "/assets/themes/batman.webp",
  },
  {
    title: "Batou",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-batou-theme",
    imgSrc: "/assets/themes/batou.webp",
  },
  {
    title: "Bauhaus",
    repoUrl: "https://github.com/somerocketeer/omarchy-bauhaus-theme",
    imgSrc: "/assets/themes/bauhaus.webp",
  },
  {
    title: "Biscuit de Mar Dark",
    repoUrl: "https://github.com/OldJobobo/omarchy-biscuit-de-mar-dark-theme",
    imgSrc: "/assets/themes/biscuit-de-mar-dark.webp",
  },
  {
    title: "Black Arch",
    repoUrl: "https://github.com/ankur311sudo/black_arch",
    imgSrc: "/assets/themes/black-arch.webp",
  },
  {
    title: "Black Gold",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-blackgold-theme",
    imgSrc: "/assets/themes/black-gold.webp",
  },
  {
    title: "Black Sand",
    repoUrl: "https://github.com/pkovzz/omarchy-black-sand-theme",
    imgSrc: "/assets/themes/black-sand.webp",
  },
  {
    title: "Black Turq",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-blackturq-theme",
    imgSrc: "/assets/themes/black-turq.webp",
  },
  {
    title: "bluedotrb",
    repoUrl: "https://github.com/dotsilva/omarchy-bluedotrb-theme",
    imgSrc: "/assets/themes/bluedotrb.webp",
  },
  {
    title: "Blue Ridge Dark",
    repoUrl: "https://github.com/hipsterusername/omarchy-blueridge-dark-theme",
    imgSrc: "/assets/themes/blue-ridge-dark.webp",
  },
  {
    title: "Castle on a Lake",
    repoUrl: "https://github.com/shmall03/omarchy-castle-on-a-lake-theme",
    imgSrc: "/assets/themes/castle-on-a-lake.webp",
  },
  {
    title: "Catppuccin Mocha Dark",
    repoUrl: "https://github.com/Luquatic/omarchy-catppuccin-dark",
    imgSrc: "/assets/themes/catppuccin-mocha-dark.webp",
  },
  {
    title: "Cincinnati",
    repoUrl: "https://github.com/jkwuc89/omarchy-cincinnati-theme",
    imgSrc: "/assets/themes/cincinnati.webp",
  },
  {
    title: "Citrus Cynapse",
    repoUrl: "https://github.com/Grey-007/citrus-cynapse",
    imgSrc: "/assets/themes/citrus-cynapse.webp",
  },
  {
    title: "City-783",
    repoUrl: "https://github.com/OldJobobo/omarchy-city-783-theme",
    imgSrc: "/assets/themes/city-783.webp",
  },
  {
    title: "Cobalt2",
    repoUrl: "https://github.com/hoblin/omarchy-cobalt2-theme",
    imgSrc: "/assets/themes/cobalt2.webp",
  },
  {
    title: "Coffee",
    repoUrl: "https://github.com/megabyte0x/omarchy-coffee-theme",
    imgSrc: "/assets/themes/coffee.webp",
  },
  {
    title: "Coffee Latte",
    repoUrl: "https://github.com/megabyte0x/omarchy-coffee-latte-theme",
    imgSrc: "/assets/themes/coffee-latte.webp",
  },
  {
    title: "Commit",
    repoUrl: "https://github.com/c0ze/omarchy-commit-theme",
    imgSrc: "/assets/themes/commit.webp",
  },
  {
    title: "CpUnk",
    repoUrl: "https://github.com/stannorbvb-cmd/cpunk",
    imgSrc: "/assets/themes/cpunk.webp",
  },
  {
    title: "Crimson Gold",
    repoUrl: "https://github.com/knappkevin/omarchy-crimson-gold-theme",
    imgSrc: "/assets/themes/crimson-gold.webp",
  },
  {
    title: "Darcula",
    repoUrl: "https://github.com/noahljungberg/omarchy-darcula-theme",
    imgSrc: "/assets/themes/darcula.webp",
  },
  {
    title: "Demon",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-demon-theme",
    imgSrc: "/assets/themes/demon.webp",
  },
  {
    title: "Dotrb",
    repoUrl: "https://github.com/dotsilva/omarchy-dotrb-theme",
    imgSrc: "/assets/themes/dotrb.webp",
  },
  {
    title: "Dos Moos",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-dos-moos-theme",
    imgSrc: "/assets/themes/dos-moos.webp",
  },
  {
    title: "Drac",
    repoUrl: "https://github.com/ShehabShaef/omarchy-drac-theme",
    imgSrc: "/assets/themes/drac.webp",
  },
  {
    title: "Dracula",
    repoUrl: "https://github.com/catlee/omarchy-dracula-theme",
    imgSrc: "/assets/themes/dracula.webp",
  },
  {
    title: "Eldritch",
    repoUrl: "https://github.com/eldritch-theme/omarchy",
    imgSrc: "/assets/themes/eldritch.webp",
  },
  {
    title: "Event Horizon",
    repoUrl: "https://github.com/OldJobobo/omarchy-event-horizon-theme",
    imgSrc: "/assets/themes/event-horizon.webp",
  },
  {
    title: "Evergarden",
    repoUrl: "https://github.com/celsobenedetti/omarchy-evergarden",
    imgSrc: "/assets/themes/evergarden.webp",
  },
  {
    title: "Felix",
    repoUrl: "https://github.com/TyRichards/omarchy-felix-theme",
    imgSrc: "/assets/themes/felix.webp",
  },
  {
    title: "Fireside",
    repoUrl: "https://github.com/bjarneo/omarchy-fireside-theme",
    imgSrc: "/assets/themes/fireside.webp",
  },
  {
    title: "Flat Dracula",
    repoUrl: "https://github.com/OldJobobo/omarchy-flat-dracula-theme",
    imgSrc: "/assets/themes/flat-dracula.webp",
  },
  {
    title: "Flexoki Dark",
    repoUrl: "https://github.com/euandeas/omarchy-flexoki-dark-theme",
    imgSrc: "/assets/themes/flexoki-dark.webp",
  },
  {
    title: "Forest Green",
    repoUrl: "https://github.com/abhijeet-swami/omarchy-forest-green-theme",
    imgSrc: "/assets/themes/forest-green.webp",
  },
  {
    title: "Frost",
    repoUrl: "https://github.com/bjarneo/omarchy-frost-theme",
    imgSrc: "/assets/themes/frost.webp",
  },
  {
    title: "fuchsblau",
    repoUrl: "https://github.com/fuchsblau/omarchy-fuchsblau-theme",
    imgSrc: "/assets/themes/fuchsblau.webp",
  },
  {
    title: "Futurism",
    repoUrl: "https://github.com/bjarneo/omarchy-futurism-theme",
    imgSrc: "/assets/themes/futurism.webp",
  },
  {
    title: "Futurist",
    repoUrl: "https://github.com/benwillems/omarchy-futurist-theme",
    imgSrc: "/assets/themes/futurist.webp",
  },
  {
    title: "Gand",
    repoUrl: "https://github.com/c0ze/omarchy-gand-theme",
    imgSrc: "/assets/themes/gand.webp",
  },
  {
    title: "Ghost Pastel",
    repoUrl: "https://github.com/row-huh/omarchy-ghost-pastel-theme",
    imgSrc: "/assets/themes/ghost-pastel.webp",
  },
  {
    title: "Gold Rush",
    repoUrl: "https://github.com/tahayvr/omarchy-gold-rush-theme",
    imgSrc: "/assets/themes/gold-rush.webp",
  },
  {
    title: "Golden Brown",
    repoUrl: "https://github.com/atif-1402/omarchy-golden-brown-theme",
    imgSrc: "/assets/themes/golden-brown.webp",
  },
  {
    title: "The Greek",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-thegreek-theme",
    imgSrc: "/assets/themes/the-greek.webp",
  },
  {
    title: "Greek Noir",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-greek-noir-theme",
    imgSrc: "/assets/themes/greek-noir.webp",
  },
  {
    title: "Green Garden",
    repoUrl: "https://github.com/kalk-ak/omarchy-green-garden-theme",
    imgSrc: "/assets/themes/green-garden.webp",
  },
  {
    title: "Gruvbox Material",
    repoUrl: "https://github.com/curbol/omarchy-gruvbox-material",
    imgSrc: "/assets/themes/gruvbox-material.webp",
  },
  {
    title: "Gruvu",
    repoUrl: "https://github.com/ankur311sudo/gruvu",
    imgSrc: "/assets/themes/gruvu.webp",
  },
  {
    title: "Harbor",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-harbor-theme",
    imgSrc: "/assets/themes/harbor.webp",
  },
  {
    title: "Harbor Dark",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-harbordark-theme",
    imgSrc: "/assets/themes/harbor-dark.webp",
  },
  {
    title: "Hermarchy",
    repoUrl: "https://github.com/archer-clawbot/omarchy-hermarchy-theme",
    imgSrc: "/assets/themes/hermarchy.webp",
  },
  {
    title: "Hinterlands",
    repoUrl: "https://github.com/OldJobobo/omarchy-hinterlands-theme",
    imgSrc: "/assets/themes/hinterlands.webp",
  },
  {
    title: "Infernium",
    repoUrl: "https://github.com/RiO7MAKK3R/omarchy-infernium-dark-theme",
    imgSrc: "/assets/themes/infernium.webp",
  },
  {
    title: "Inky Pinky",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-inkypinky-theme",
    imgSrc: "/assets/themes/inky-pinky.webp",
  },
  {
    title: "Japan Night",
    repoUrl: "https://github.com/devgtv/omarchy-japan-night-theme",
    imgSrc: "/assets/themes/japan-night.webp",
  },
  {
    title: "Lamplight",
    repoUrl: "https://github.com/thisisgm/omarchy-lamplight-theme",
    imgSrc: "/assets/themes/lamplight.webp",
  },
  {
    title: "Lawson Night",
    repoUrl: "https://github.com/phuclh/omarchy-lawson-night-theme",
    imgSrc: "/assets/themes/lawson-night.webp",
  },
  {
    title: "Map Quest",
    repoUrl: "https://github.com/ItsABigIgloo/omarchy-mapquest-theme",
    imgSrc: "/assets/themes/map-quest.webp",
  },
  {
    title: "Mars",
    repoUrl: "https://github.com/steve-lohmeyer/omarchy-mars-theme",
    imgSrc: "/assets/themes/mars.webp",
  },
  {
    title: "Matrix",
    repoUrl: "https://github.com/BVisagie/omarchy-matrix-theme",
    imgSrc: "/assets/themes/matrix.webp",
  },
  {
    title: "Mechanoonna",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-mechanoonna-theme",
    imgSrc: "/assets/themes/mechanoonna.webp",
  },
  {
    title: "Midnight",
    repoUrl: "https://github.com/JaxonWright/omarchy-midnight-theme",
    imgSrc: "/assets/themes/midnight.webp",
  },
  {
    title: "Milky Matcha",
    repoUrl: "https://github.com/hipsterusername/omarchy-milkmatcha-light-theme",
    imgSrc: "/assets/themes/milky-matcha.webp",
  },
  {
    title: "Mini Jcw",
    repoUrl: "https://github.com/davydotcom/omarchy-mini-jcw-theme",
    imgSrc: "/assets/themes/mini-jcw.webp",
  },
  {
    title: "Monochrome",
    repoUrl: "https://github.com/Swarnim114/omarchy-monochrome-theme",
    imgSrc: "/assets/themes/monochrome.webp",
  },
  {
    title: "Monokai",
    repoUrl: "https://github.com/bjarneo/omarchy-monokai-theme",
    imgSrc: "/assets/themes/monokai.webp",
  },
  {
    title: "Moodpeak",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-moodpeak-theme",
    imgSrc: "/assets/themes/moodpeak.webp",
  },
  {
    title: "Nagai Poolside",
    repoUrl: "https://github.com/somerocketeer/omarchy-nagai-poolside-theme",
    imgSrc: "/assets/themes/nagai-poolside.webp",
  },
  {
    title: "Naysayer",
    repoUrl: "https://github.com/brianblakely/omarchy-naysayer-theme",
    imgSrc: "/assets/themes/naysayer.webp",
  },
  {
    title: "Neo Sploosh",
    repoUrl: "https://github.com/monoooki/omarchy-neo-sploosh-theme",
    imgSrc: "/assets/themes/neo-sploosh.webp",
  },
  {
    title: "Neon Dusk",
    repoUrl: "https://github.com/daniel-felipe/omarchy-neon-dusk-theme",
    imgSrc: "/assets/themes/neon-dusk.webp",
  },
  {
    title: "Neovoid",
    repoUrl: "https://github.com/RiO7MAKK3R/omarchy-neovoid-theme",
    imgSrc: "/assets/themes/neovoid.webp",
  },
  {
    title: "Neptune Blue",
    repoUrl: "https://github.com/davydotcom/omarchy-neptune-blue-theme",
    imgSrc: "/assets/themes/neptune-blue.webp",
  },
  {
    title: "NES",
    repoUrl: "https://github.com/bjarneo/omarchy-nes-theme",
    imgSrc: "/assets/themes/nes.webp",
  },
  {
    title: "Noir",
    repoUrl: "https://github.com/tahadx/omarchy-noir-theme",
    imgSrc: "/assets/themes/noir.webp",
  },
  {
    title: "Oligarchy",
    repoUrl: "https://github.com/EF-Code/omarchy-oligarchy-theme",
    imgSrc: "/assets/themes/oligarchy.webp",
  },
  {
    title: "Nujabes",
    repoUrl: "https://github.com/HalmyLyseas/omarchy-nujabes-theme",
    imgSrc: "/assets/themes/nujabes.webp",
  },
  {
    title: "Omacarchy",
    repoUrl: "https://github.com/RiO7MAKK3R/omarchy-omacarchy-theme",
    imgSrc: "/assets/themes/omacarchy.webp",
  },
  {
    title: "OmaLED",
    repoUrl: "https://github.com/brianblakely/omarchy-omaled-theme",
    imgSrc: "/assets/themes/omaled.webp",
  },
  {
    title: "One Dark",
    repoUrl: "https://github.com/joaopinto15/omarchy-one-dark-theme",
    imgSrc: "/assets/themes/one-dark.webp",
  },
  {
    title: "One Dark Pro",
    repoUrl: "https://github.com/sc0ttman/omarchy-one-dark-pro-theme",
    imgSrc: "/assets/themes/one-dark-pro.webp",
  },
  {
    title: "Oxo Carbon",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-oxocarbon-theme",
    imgSrc: "/assets/themes/oxo-carbon.webp",
  },
  {
    title: "Pagan",
    repoUrl: "https://github.com/c0ze/omarchy-pagan-theme",
    imgSrc: "/assets/themes/pagan.webp",
  },
  {
    title: "Pandora",
    repoUrl: "https://github.com/imbypass/omarchy-pandora-theme",
    imgSrc: "/assets/themes/pandora.webp",
  },
  {
    title: "Periphery",
    repoUrl: "https://github.com/r-bart/omarchy-periphery-theme",
    imgSrc: "/assets/themes/periphery.webp",
  },
  {
    title: "Pina",
    repoUrl: "https://github.com/bjarneo/omarchy-pina-theme",
    imgSrc: "/assets/themes/pina.webp",
  },
  {
    title: "Pink Blood",
    repoUrl: "https://github.com/ITSZXY/pink-blood-omarchy-theme",
    imgSrc: "/assets/themes/pink-blood.webp",
  },
  {
    title: "Pulsar",
    repoUrl: "https://github.com/bjarneo/omarchy-pulsar-theme",
    imgSrc: "/assets/themes/pulsar.webp",
  },
  {
    title: "Purple Moon",
    repoUrl: "https://github.com/Grey-007/purple-moon",
    imgSrc: "/assets/themes/purple-moon.webp",
  },
  {
    title: "Purplewave",
    repoUrl: "https://github.com/dotsilva/omarchy-purplewave-theme",
    imgSrc: "/assets/themes/purplewave.webp",
  },
  {
    title: "Rainy Night",
    repoUrl: "https://github.com/atif-1402/omarchy-rainynight-theme",
    imgSrc: "/assets/themes/rainy-night.webp",
  },
  {
    title: "Red Monarch",
    repoUrl: "https://github.com/kamatealif/omarchy-red-monarch-theme",
    imgSrc: "/assets/themes/red-monarch.webp",
  },
  {
    title: "Red Pill",
    repoUrl: "https://github.com/ferlemes/omarchy-red-pill-theme",
    imgSrc: "/assets/themes/red-pill.webp",
  },
  {
    title: "RetroPC",
    repoUrl: "https://github.com/rondilley/omarchy-retropc-theme",
    imgSrc: "/assets/themes/retropc.webp",
  },
  {
    title: "Ristretto Light",
    repoUrl: "https://github.com/brokkoli71/omarchy-ristretto-light-theme",
    imgSrc: "/assets/themes/ristretto-light.webp",
  },
  {
    title: "RobZee84",
    repoUrl: "https://github.com/robzolkos/omarchy-robzee84-theme",
    imgSrc: "/assets/themes/robzee84.webp",
  },
  {
    title: "Rose Pine Dark",
    repoUrl: "https://github.com/guilhermetk/omarchy-rose-pine-dark",
    imgSrc: "/assets/themes/rose-pine-dark.webp",
  },
  {
    title: "Rose Pine Moon",
    repoUrl: "https://github.com/Memnoc/omarchy-rose-pine-moon-theme",
    imgSrc: "/assets/themes/rose-pine-moon.webp",
  },
  {
    title: "Rose of Dune",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-roseofdune-theme",
    imgSrc: "/assets/themes/rose-of-dune.webp",
  },
  {
    title: "Ryu",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-ryu-theme",
    imgSrc: "/assets/themes/ryu.webp",
  },
  {
    title: "Sakura",
    repoUrl: "https://github.com/bjarneo/omarchy-sakura-theme",
    imgSrc: "/assets/themes/sakura.webp",
  },
  {
    title: "Sakura Mochi",
    repoUrl: "https://github.com/OldJobobo/omarchy-sakura-mochi-theme",
    imgSrc: "/assets/themes/sakura-mochi.webp",
  },
  {
    title: "Saga",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-saga-theme",
    imgSrc: "/assets/themes/saga.webp",
  },
  {
    title: "Sapphire",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-sapphire-theme",
    imgSrc: "/assets/themes/sapphire.webp",
  },
  {
    title: "Shades of Jade",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-shadesofjade-theme",
    imgSrc: "/assets/themes/shades-of-jade.webp",
  },
  {
    title: "Space Monkey",
    repoUrl: "https://github.com/TyRichards/omarchy-space-monkey-theme/",
    imgSrc: "/assets/themes/space-monkey.webp",
  },
  {
    title: "Snow",
    repoUrl: "https://github.com/bjarneo/omarchy-snow-theme",
    imgSrc: "/assets/themes/snow.webp",
  },
  {
    title: "Snow Black",
    repoUrl: "https://github.com/ankur311sudo/snow_black",
    imgSrc: "/assets/themes/snow-black.webp",
  },
  {
    title: "Solarized",
    repoUrl: "https://github.com/Gazler/omarchy-solarized-theme",
    imgSrc: "/assets/themes/solarized.webp",
  },
  {
    title: "Solarized Light",
    repoUrl: "https://github.com/dfrico/omarchy-solarized-light-theme",
    imgSrc: "/assets/themes/solarized-light.webp",
  },
  {
    title: "Solarized Osaka",
    repoUrl: "https://github.com/motorsss/omarchy-solarizedosaka-theme",
    imgSrc: "/assets/themes/solarized-osaka.webp",
  },
  {
    title: "Starry Night",
    repoUrl: "https://github.com/juangalt/omarchy-starry-night-theme",
    imgSrc: "/assets/themes/starry-night.webp",
  },
  {
    title: "Starsend",
    repoUrl: "https://github.com/r-bart/omarchy-starsend-theme",
    imgSrc: "/assets/themes/starsend.webp",
  },
  {
    title: "Sunset",
    repoUrl: "https://github.com/rondilley/omarchy-sunset-theme",
    imgSrc: "/assets/themes/sunset.webp",
  },
  {
    title: "Sunset Drive",
    repoUrl: "https://github.com/tahayvr/omarchy-sunset-drive-theme",
    imgSrc: "/assets/themes/sunset-drive.webp",
  },
  {
    title: "Super Game Bro",
    repoUrl: "https://github.com/TyRichards/omarchy-super-game-bro-theme",
    imgSrc: "/assets/themes/super-game-bro.webp",
  },
  {
    title: "Synthwave &#39;84",
    repoUrl: "https://github.com/omacom-io/omarchy-synthwave84-theme/",
    imgSrc: "/assets/themes/synthwave-84.webp",
  },
  {
    title: "Temerald",
    repoUrl: "https://github.com/Ahmad-Mtr/omarchy-temerald-theme",
    imgSrc: "/assets/themes/temerald.webp",
  },
  {
    title: "Terminus",
    repoUrl: "https://github.com/r-bart/omarchy-terminus-theme",
    imgSrc: "/assets/themes/terminus.webp",
  },
  {
    title: "Tokyo Night OLED",
    repoUrl: "https://github.com/Justin-De-Sio/omarchy-tokyoled-theme",
    imgSrc: "/assets/themes/tokyo-night-oled.webp",
  },
  {
    title: "Tycho",
    repoUrl: "https://github.com/leonardobetti/omarchy-tycho",
    imgSrc: "/assets/themes/tycho.webp",
  },
  {
    title: "Waffle Cat",
    repoUrl: "https://github.com/OldJobobo/omarchy-waffle-cat-theme",
    imgSrc: "/assets/themes/waffle-cat.webp",
  },
  {
    title: "Waveform Dark",
    repoUrl: "https://github.com/hipsterusername/omarchy-waveform-dark-theme",
    imgSrc: "/assets/themes/waveform-dark.webp",
  },
  {
    title: "White Gold",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-whitegold-theme",
    imgSrc: "/assets/themes/white-gold.webp",
  },
  {
    title: "Windows Dark Mode",
    repoUrl: "https://github.com/oldjobobo/omarchy-windows-dark-mode-theme",
    imgSrc: "/assets/themes/windows-dark-mode.webp",
  },
  {
    title: "Winslow",
    repoUrl: "https://github.com/chipkoziara/omarchy-winslow-theme",
    imgSrc: "/assets/themes/winslow.webp",
  },
  {
    title: "Van Gogh",
    repoUrl: "https://github.com/Nirmal314/omarchy-van-gogh-theme",
    imgSrc: "/assets/themes/van-gogh.webp",
  },
  {
    title: "Vault",
    repoUrl: "https://github.com/r-bart/omarchy-vault-theme",
    imgSrc: "/assets/themes/vault.webp",
  },
  {
    title: "Velvet Night",
    repoUrl: "https://github.com/HANCORE-linux/omarchy-velvetnight-theme",
    imgSrc: "/assets/themes/velvet-night.webp",
  },
  {
    title: "Venice from Above",
    repoUrl: "https://github.com/mattbbia/venice-from-above-omarchy",
    imgSrc: "/assets/themes/venice-from-above.webp",
  },
  {
    title: "Vesper",
    repoUrl: "https://github.com/thmoee/omarchy-vesper-theme",
    imgSrc: "/assets/themes/vesper.webp",
  },
  {
    title: "VHS 80",
    repoUrl: "https://github.com/tahayvr/omarchy-vhs80-theme",
    imgSrc: "/assets/themes/vhs-80.webp",
  },
  {
    title: "Void",
    repoUrl: "https://github.com/vyrx-dev/omarchy-void-theme",
    imgSrc: "/assets/themes/void.webp",
  },
  {
    title: "Vulkanite",
    repoUrl: "https://github.com/kyerpotts/omarchy-vulkanite-theme",
    imgSrc: "/assets/themes/vulkanite.webp",
  },
];

export function ThemesContent() {
  const [search, setSearch] = useState("");

  const filteredThemes = useMemo(() => {
    if (!search.trim()) return COMMUNITY_THEMES;
    const q = search.toLowerCase();
    return COMMUNITY_THEMES.filter((t) => t.title.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          The Extra Themes
        </h1>
      </header>

      <main className="main w-full max-w-6xl my-6 flex flex-col gap-8">
        <div className="bg-[var(--color-background-storm,#24283b)] p-5 sm:p-6 rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))]">
          <p className="themes__intro text-sm sm:text-base text-[var(--color-terminal-white,#c0caf5)] leading-relaxed">
            Install any of these community themes by copying its GitHub URL and selecting{" "}
            <em className="text-[var(--color-terminal-cyan,#7dcfff)] not-italic font-semibold">
              Install &gt; Style &gt; Theme
            </em>{" "}
            via the Omarchy menu (
            <code className="px-1.5 py-0.5 rounded bg-[var(--color-background-night,#1a1b26)] border border-white/10 text-white">
              Super + Space
            </code>
            ). Remove it again with{" "}
            <em className="text-[var(--color-terminal-cyan,#7dcfff)] not-italic font-semibold">
              Remove &gt; Theme
            </em>
            . Made your own? Get it added with a pull request to{" "}
            <a
              href="https://github.com/omacom-io/omarchy-site"
              className="text-[var(--color-terminal-blue,#7aa2f7)] underline"
            >
              the omarchy-site repo
            </a>
            .
          </p>
        </div>

        {/* Search input */}
        <div className="w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search themes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color,rgba(65,72,104,0.8))] bg-[var(--color-background-storm,#24283b)] text-white placeholder-[var(--color-terminal-black,#565f89)] outline-none focus:border-[var(--color-terminal-cyan,#7dcfff)] transition-colors"
          />
        </div>

        {/* Themes Grid */}
        <div className="themes__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredThemes.map((theme, idx) => (
            <figure
              key={idx}
              className="themes__theme bg-[var(--color-background-storm,#24283b)] rounded-xl overflow-hidden border border-[var(--border-color,rgba(65,72,104,0.8))] hover:border-[var(--color-terminal-cyan,#7dcfff)] transition-all flex flex-col group"
            >
              <a
                href={theme.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-full overflow-hidden bg-black block"
              >
                <img
                  src={theme.imgSrc}
                  alt={`${theme.title} theme`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <figcaption className="p-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={theme.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white group-hover:text-[var(--color-terminal-cyan,#7dcfff)] transition-colors underline"
                >
                  {theme.title}
                </a>
                <span className="text-xs text-[var(--color-terminal-black,#565f89)]">
                  GitHub &rarr;
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
export default ThemesContent;
