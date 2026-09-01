import { useMatches } from "@tanstack/react-router";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import DocsSidebar from "@/components/docs-sidebar";
import { layoutFromMatches, type LayoutVariant } from "@/lib/layout";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: LayoutVariant;
}) {
  const matches = useMatches();
  const layout = variant ?? layoutFromMatches(matches);

  if (layout === "canvas") {
    return <div className="flex min-h-dvh flex-col">{children}</div>;
  }

  if (layout === "landing") {
    return (
      <div className="flex min-h-dvh flex-col">
        <NavBar overlay />
        <div className="flex grow flex-col">{children}</div>
        <Footer />
      </div>
    );
  }

  if (layout === "sidebar") {
    return (
      <div className="flex min-h-dvh flex-col">
        <NavBar sticky />
        <div className="flex min-h-0 grow">
          <DocsSidebar />
          <div className="min-w-0 grow">{children}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={cn("flex min-h-dvh flex-col")}>
      <NavBar sticky={layout === "default"} />
      <div className="flex grow flex-col" id="top">
        {children}
      </div>
      <Footer />
    </div>
  );
}
