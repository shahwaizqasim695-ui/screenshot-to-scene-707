import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, BookOpen } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex flex-col items-center gap-0.5">
          <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
            Maxine Cross
          </span>
          <span className="eyebrow text-[0.55rem] text-muted-foreground">
            Novels of suspense
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-medium uppercase tracking-[0.25em] transition-colors ${
                pathname === l.to
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/#the-impossible-client" className="btn-primary !px-5 !py-2.5 text-[0.65rem]">
            <BookOpen className="h-3.5 w-3.5" />
            The Novel
          </Link>
        </nav>

        <button
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`py-3 text-sm uppercase tracking-[0.25em] ${
                pathname === l.to ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/#the-impossible-client" className="btn-primary mt-2">
            The Novel
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center">
        <div>
          <p className="font-display text-3xl font-semibold text-foreground">Maxine Cross</p>
          <p className="eyebrow mt-2 text-[0.6rem] text-muted-foreground">
            Elegant &middot; Romantic &middot; Sophisticated &middot; Mysterious
          </p>
        </div>
        <div className="ornament w-40 text-xs">
          <span>&#10022;</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Maxine Cross &middot; Published by The Collingwood Press
        </p>
      </div>
    </footer>
  );
}
