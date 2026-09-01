import { Link } from "@tanstack/react-router";
import { footerColumns } from "@/lib/menu";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-4 py-10 text-sm text-muted-foreground">
      <div className="mx-auto grid w-full max-w-5xl gap-8 sm:grid-cols-3">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <p className="mb-3 text-xs font-bold tracking-wide text-foreground uppercase">
              {column.heading}
            </p>
            <ul className="flex flex-col gap-2 p-0">
              {column.items.map((item) => (
                <li key={item.id}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground no-underline hover:text-terminal-cyan"
                      title={item.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.anchor}
                    </a>
                  ) : (
                    <Link
                      to={item.href as "/"}
                      className="text-muted-foreground no-underline hover:text-terminal-cyan"
                      title={item.title}
                    >
                      {item.anchor}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-2 text-xs">
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
          <Link to="/brand" className="text-muted-foreground no-underline hover:text-terminal-cyan">
            Omarchy is a pending trademark
          </Link>
        </p>
      </div>
    </footer>
  );
}
