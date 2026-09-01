import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/security")({
  staticData: { layout: "default" },
  component: SecurityLayout,
  head: () => ({ meta: [{ title: "Security — Omarchy" }] }),
});

function SecurityLayout() {
  return <Outlet />;
}
