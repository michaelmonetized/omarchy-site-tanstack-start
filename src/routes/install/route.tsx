import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/install")({
  staticData: { layout: "default" },
  component: InstallLayout,
  head: () => ({ meta: [{ title: "Install — Omarchy" }] }),
});

function InstallLayout() {
  return <Outlet />;
}
