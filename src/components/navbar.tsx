import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { menu, type MenuItem } from "@/lib/menu";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MenuLink({
  item,
  className,
  onClick,
}: {
  item: MenuItem;
  className?: string;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  const classes = cn(
    "inline-flex items-center gap-1.5 wrap-normal px-2 py-1 text-xs font-semibold whitespace-nowrap text-muted-foreground no-underline transition-colors hover:text-foreground",
    className,
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        className={classes}
        title={item.title}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <Icon className="size-3.5" aria-hidden="true" />
        <span>{item.anchor}</span>
      </a>
    );
  }

  return (
    <Link
      to={item.href as "/"}
      className={classes}
      title={item.title}
      activeProps={{ className: "text-foreground" }}
      onClick={onClick}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      <span>{item.anchor}</span>
    </Link>
  );
}

export default function NavBar({
  overlay = false,
  sticky = true,
}: {
  overlay?: boolean;
  sticky?: boolean;
}) {
  return (
    <header
      className={cn(
        "z-50 border-b border-border bg-background/80 backdrop-blur-lg",
        overlay ? "fixed inset-x-0 top-0" : sticky ? "sticky top-0" : "relative",
      )}
    >
      <nav className="flex items-center gap-2 wrap-normal px-3 py-2 whitespace-nowrap sm:px-4">
        <Link to="/" className="inline-flex shrink-0 items-center no-underline" title="Omarchy">
          <img
            src="/assets/images/favicon.png"
            alt="Omarchy"
            className="h-4 w-auto"
            width={16}
            height={16}
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center overflow-x-auto lg:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center whitespace-nowrap lg:[&_svg]:hidden">
            {menu.map((item) => (
              <MenuLink key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              className="inline-flex size-8 items-center justify-center text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs rounded-none p-0">
              <SheetHeader className="border-b border-border p-4">
                <SheetTitle>Omarchy</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col overflow-y-auto">
                {menu.map((item) => (
                  <MenuLink
                    key={item.id}
                    item={item}
                    className="w-full justify-start border-b border-border px-4 py-3 text-sm"
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
