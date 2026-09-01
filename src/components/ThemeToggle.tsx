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
        className="inline-flex size-8 items-center justify-center border border-border bg-muted text-foreground"
      >
        <span className="sr-only">Toggle theme</span>
        <Lightbulb className="size-3.5 opacity-50" />
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
            className="group relative inline-flex size-8 items-center justify-center border border-border bg-muted text-foreground transition-colors hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          />
        }
      >
        {isDark ? (
          <LightbulbOff
            className="size-3.5 text-muted-foreground transition-transform group-hover:scale-110"
            aria-hidden="true"
          />
        ) : (
          <Lightbulb
            className="size-3.5 fill-yellow text-yellow transition-transform group-hover:scale-110"
            aria-hidden="true"
          />
        )}
        <span className="sr-only">{label}</span>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="end" className="text-xs">
        <p className="font-semibold">{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</p>
        <p className="text-[10px] text-muted-foreground">
          Current: {isDark ? "Dark" : "Light"} ({isSystem ? "System" : "Opposite"})
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
