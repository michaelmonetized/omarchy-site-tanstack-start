import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/foundation")({
  staticData: { layout: "default" },
  loader: () => {
    throw redirect({ to: "/patrons" });
  },
  component: () => null,
});
