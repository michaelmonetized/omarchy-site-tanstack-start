import { create } from "zustand";

export type ThemePreference = "system" | "opposite";
export type ResolvedTheme = "light" | "dark";

interface ThemeState {
  preference: ThemePreference;
  systemTheme: ResolvedTheme;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
  togglePreference: () => void;
  init: () => () => void;
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem("theme_preference");
  if (stored === "opposite") return "opposite";
  return "system";
}

function applyThemeToDocument(resolved: ResolvedTheme, preference: ThemePreference) {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.setAttribute("data-theme", resolved);
  root.setAttribute("data-theme-preference", preference);
  root.style.colorScheme = resolved;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  preference: "system",
  systemTheme: "light",
  resolvedTheme: "light",

  setPreference: (preference: ThemePreference) => {
    const system = getSystemTheme();
    const resolved: ResolvedTheme =
      preference === "system" ? system : system === "dark" ? "light" : "dark";

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme_preference", preference);
      applyThemeToDocument(resolved, preference);
    }

    set({ preference, systemTheme: system, resolvedTheme: resolved });
  },

  togglePreference: () => {
    const current = get().preference;
    const next: ThemePreference = current === "system" ? "opposite" : "system";
    get().setPreference(next);
  },

  init: () => {
    if (typeof window === "undefined") return () => {};

    const preference = getStoredPreference();
    const system = getSystemTheme();
    const resolved: ResolvedTheme =
      preference === "system" ? system : system === "dark" ? "light" : "dark";

    applyThemeToDocument(resolved, preference);
    set({ preference, systemTheme: system, resolvedTheme: resolved });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      const newSys: ResolvedTheme = e.matches ? "dark" : "light";
      const curPref = get().preference;
      const newRes: ResolvedTheme =
        curPref === "system" ? newSys : newSys === "dark" ? "light" : "dark";

      applyThemeToDocument(newRes, curPref);
      set({ systemTheme: newSys, resolvedTheme: newRes });
    };

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  },
}));
