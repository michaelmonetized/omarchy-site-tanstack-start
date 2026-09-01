import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  staticData: { layout: "default" },
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-foreground sm:text-5xl">
          Omarchy is opinionated Linux that stays yours.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-muted-foreground">
          Beautiful, fun, and built for the age of agents. This site is the front door.
        </p>
      </section>
    </main>
  );
}
