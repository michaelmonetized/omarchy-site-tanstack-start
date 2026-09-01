import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Page({
  title,
  lede,
  children,
  wide = false,
  className,
}: {
  title: string;
  lede?: ReactNode;
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 py-10 sm:px-8",
        wide ? "max-w-6xl" : "max-w-3xl",
        className,
      )}
    >
      <h1 className="font-heading text-xl font-extrabold text-foreground">{title}</h1>
      {lede ? (
        <div className="mt-3 max-w-3xl text-sm text-pretty text-muted-foreground">{lede}</div>
      ) : null}
      <div className="mt-8">{children}</div>
    </main>
  );
}
