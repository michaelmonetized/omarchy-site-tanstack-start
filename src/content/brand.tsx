import { Page } from "@/components/page";

export function BrandContent() {
  return (
    <Page
      title="The Omarchy Brand"
      lede="The official wordmark and logo. Omarchy is a pending trademark. All rights reserved."
    >
      <section className="mb-12">
        <h2 className="font-heading mb-4 text-sm font-extrabold">Wordmark</h2>
        <figure className="m-0 border border-border bg-card p-8">
          <img
            src="/brand/omarchy-wordmark.svg"
            alt="OMARCHY wordmark"
            className="mx-auto h-auto w-full max-w-xl"
          />
        </figure>
        <ul className="mt-3 flex flex-wrap gap-4 p-0 text-xs">
          <li>
            <a href="/brand/omarchy-wordmark.svg" download className="text-terminal-cyan">
              omarchy-wordmark.svg
            </a>{" "}
            <span className="text-muted-foreground">vector</span>
          </li>
          <li>
            <a href="/brand/omarchy-wordmark.png" download className="text-terminal-cyan">
              omarchy-wordmark.png
            </a>{" "}
            <span className="text-muted-foreground">4096 px</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-heading mb-4 text-sm font-extrabold">Logo</h2>
        <figure className="m-0 border border-border bg-card p-8">
          <img src="/brand/omarchy-logo.svg" alt="Omarchy logo" className="mx-auto size-40" />
        </figure>
        <ul className="mt-3 flex flex-wrap gap-4 p-0 text-xs">
          <li>
            <a href="/brand/omarchy-logo.svg" download className="text-terminal-cyan">
              omarchy-logo.svg
            </a>{" "}
            <span className="text-muted-foreground">vector</span>
          </li>
          <li>
            <a href="/brand/omarchy-logo.png" download className="text-terminal-cyan">
              omarchy-logo.png
            </a>{" "}
            <span className="text-muted-foreground">4096 px</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading mb-3 text-sm font-extrabold">Trademark</h2>
        <p className="m-0 text-sm text-muted-foreground">
          Write{" "}
          <a href="mailto:david@omarchy.org" className="text-terminal-cyan">
            david@omarchy.org
          </a>{" "}
          for partnerships.
        </p>
      </section>
    </Page>
  );
}

export default BrandContent;
