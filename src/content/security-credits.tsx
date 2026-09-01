import { Link } from "@tanstack/react-router";
import { Page } from "@/components/page";

const CREDITS = [
  {
    name: "Roger Piñol",
    href: "https://x.com/RogerKernel",
    img: "/assets/images/credits/roger-pinol.webp",
  },
  {
    name: "Ruben Lopes",
    href: "https://x.com/LopesR1993",
    img: "/assets/images/credits/ruben-lopes.webp",
  },
  {
    name: "Afonso Oliveira",
    href: "https://www.linkedin.com/in/afoliveira2/",
    img: "/assets/images/credits/afonso-oliveira.webp",
  },
  { name: "_SiCk", href: "https://x.com/encrypted_past", img: "/assets/images/credits/sick.webp" },
  {
    name: "Erik Hunstad",
    href: "https://x.com/badsectorlabs",
    img: "/assets/images/credits/erik-hunstad.webp",
  },
  { name: "Teles", href: "https://x.com/teles_dev", img: "/assets/images/credits/teles.webp" },
];

export function SecurityCreditsContent() {
  return (
    <Page
      title="Security credits"
      lede="They found it, told us privately, and waited for the patch."
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {CREDITS.map((person) => (
          <article key={person.name} className="flex flex-col items-center text-center">
            <img
              src={person.img}
              alt={person.name}
              width={240}
              height={240}
              className="mb-3 size-24 object-cover sm:size-28"
              loading="lazy"
              decoding="async"
            />
            <h2 className="m-0 text-sm font-bold">
              <a
                href={person.href}
                className="text-foreground no-underline hover:text-terminal-cyan"
              >
                {person.name}
              </a>
            </h2>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        Found something?{" "}
        <Link to="/security" className="text-terminal-cyan">
          Report it privately
        </Link>
        . The first reporter of a confirmed vulnerability is credited here.
      </p>
    </Page>
  );
}

export default SecurityCreditsContent;
