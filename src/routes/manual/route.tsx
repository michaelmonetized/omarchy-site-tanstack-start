import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/manual")({
  staticData: { layout: "sidebar" },
  component: ManualLayout,
  head: () => ({ meta: [{ title: "The Manual — Omarchy" }] }),
});

function ManualLayout() {
  return <Outlet />;
}
