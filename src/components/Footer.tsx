export default function Footer() {
  return (
    <footer className="site-footer mt-auto border-t border-border px-4 py-10 text-center text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <p className="m-0">
          Looking to become a partner or patron of Omarchy? Write{" "}
          <a href="mailto:david@omarchy.org" className="text-terminal-cyan">
            david@omarchy.org
          </a>
        </p>
        <p className="m-0">
          Incubated at{" "}
          <a
            href="https://37signals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground"
          >
            37signals
          </a>{" "}
          (makers of{" "}
          <a
            href="https://basecamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground"
          >
            Basecamp
          </a>{" "}
          and{" "}
          <a
            href="https://hey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground"
          >
            HEY
          </a>
          )
        </p>
        <p className="m-0">
          Sponsored hosting by{" "}
          <a
            href="https://cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground"
          >
            Cloudflare
          </a>
        </p>
        <p className="m-0">
          <a href="/brand" className="text-muted-foreground">
            Omarchy is a pending trademark
          </a>
        </p>
      </div>
    </footer>
  );
}
