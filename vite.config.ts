import { defineConfig, lazyPlugins } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

// `vercel build` sets VERCEL=1 and keeps Nitro; every other build targets Cloudflare Workers.
const vercel = Boolean(process.env.VERCEL);

const config = defineConfig({
  // Edge-cached HTML is keyed per build so a deploy never serves pages that point at removed assets.
  define: { __BUILD_ID__: JSON.stringify(Date.now().toString(36)) },
  server: {
    allowedHosts: [".ts.net"],
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  resolve: { tsconfigPaths: true },
  plugins: lazyPlugins(() => [
    ...(vercel ? [] : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    devtools(),
    ...(vercel ? [nitro({ rollupConfig: { external: [/^@sentry\//] } })] : []),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ]),
});

export default config;
