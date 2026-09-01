import type { ReactNode } from "react";
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Layout from "@/components/layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotFoundContent } from "@/content/not-found";

import appCss from "../tailwind.config.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme_preference');var oldTheme=window.localStorage.getItem('theme');var pref=stored||(oldTheme==='dark'||oldTheme==='light'?'opposite':'system');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=pref==='opposite'?(prefersDark?'light':'dark'):(prefersDark?'dark':'light');var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);root.setAttribute('data-theme',resolved);root.setAttribute('data-theme-preference',pref);root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
  staticData: { layout: "default" },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Omarchy — Beautiful, Fun & Opinionated Linux by DHH",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/assets/images/favicon.png",
      },
    ],
  }),
  notFoundComponent: NotFoundContent,
  component: RootComponent,
  shellComponent: RootDocument,
});

function RootComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="overflow-x-hidden font-sans antialiased wrap-break-word selection:bg-green/25">
        <TooltipProvider>{children}</TooltipProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
