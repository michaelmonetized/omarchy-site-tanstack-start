import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  staticData: { layout: "default" },
  component: NewsLayout,
  head: () => ({ meta: [{ title: "News — Omarchy" }] }),
});

function NewsLayout() {
  return <Outlet />;
}
