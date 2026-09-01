export const LAYOUTS = ["default", "full", "landing", "canvas", "sidebar"] as const;

export type LayoutVariant = (typeof LAYOUTS)[number];

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    layout?: LayoutVariant;
  }
}

export function layoutFromMatches(
  matches: ReadonlyArray<{ staticData?: { layout?: LayoutVariant } }>,
): LayoutVariant {
  for (let i = matches.length - 1; i >= 0; i -= 1) {
    const layout = matches[i]?.staticData?.layout;
    if (layout) return layout;
  }
  return "default";
}
