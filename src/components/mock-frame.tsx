import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MockFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="mask-mock">{children}</div>
    </div>
  );
}
