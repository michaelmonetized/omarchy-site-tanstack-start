import { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { useThemeStore } from "@/lib/theme-store";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const { preference, resolvedTheme, togglePreference, init } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cleanup = init();
    return cleanup;
  }, [init]);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5"
      >
        <span className="sr-only">Toggle theme</span>
        <Lightbulb className="h-4 w-4 opacity-50" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const isSystem = preference === "system";

  const label = isDark
    ? `Dark mode (${isSystem ? "System" : "Opposite of system"}). Click for Light mode.`
    : `Light mode (${isSystem ? "System" : "Opposite of system"}). Click for Dark mode.`;

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            onClick={togglePreference}
            aria-label={label}
            className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        }
      >
        {isDark ? (
          // System / resolved is dark -> empty/unlit lightbulb icon. Click gives light mode.
          <LightbulbOff
            className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          />
        ) : (
          // System / resolved is light -> lit lightbulb icon. Click gives dark mode.
          <Lightbulb
            className="h-4 w-4 text-amber-500 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          />
        )}
        <span className="sr-only">{label}</span>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="end" className="text-xs">
        <p className="font-semibold">{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</p>
        <p className="text-muted-foreground text-[10px]">
          Current: {isDark ? "Dark" : "Light"} ({isSystem ? "System" : "Opposite"})
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
