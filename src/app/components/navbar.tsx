"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";
import ThemeToggle from "./ui/ThemeToggle";

const links = [
  { label: "Docs", href: "/docs", external: false },
  { label: "npm", href: "https://www.npmjs.com/package/@abhaydesu/git-pilot", external: true },
  { label: "GitHub", href: "https://github.com/abhaydesu/git-pilot-cli", external: true },
];

const linkClass =
  "press focus-ring rounded-full px-3 py-2 text-[15px] text-ink/70 hover:text-ink";

const NavLink = ({
  l,
  className,
  onClick,
}: {
  l: (typeof links)[number];
  className: string;
  onClick?: () => void;
}) =>
  l.external ? (
    <a href={l.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {l.label}
    </a>
  ) : (
    <Link href={l.href} className={className} onClick={onClick}>
      {l.label}
    </Link>
  );

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const bar =
    "block h-0.5 w-5 rounded-full bg-ink transition-[transform,opacity] duration-200 ease-out-strong";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cream/90 backdrop-blur-xl transition-colors duration-200 ease-out-strong ${
        scrolled || open ? "border-ink/10" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Git Pilot home"
          className="press focus-ring rounded-lg"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav aria-label="Primary" className="flex items-center">
            {links.map((l) => (
              <NavLink key={l.label} l={l} className={linkClass} />
            ))}
          </nav>
          <ThemeToggle className="ml-1" />
          <Link
            href="/docs"
            className="press focus-ring ml-2 rounded-full bg-ink px-4 py-2 text-[15px] text-paper hover:bg-ink/85"
          >
            Get started
          </Link>
        </div>

        <div className="-mr-2 flex items-center md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="press focus-ring grid size-10 place-items-center rounded-full"
          >
            <span className="space-y-1.5">
              <span className={`${bar} ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`${bar} ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile"
        className={`origin-top border-t border-ink/10 bg-cream px-3 py-2 transition-[opacity,transform] duration-200 ease-out-strong md:hidden ${
          open ? "scale-100 opacity-100" : "pointer-events-none absolute inset-x-0 scale-95 opacity-0"
        }`}
      >
        {links.map((l) => (
          <NavLink
            key={l.label}
            l={l}
            onClick={() => setOpen(false)}
            className="press focus-ring block rounded-xl px-4 py-3 text-lg font-medium text-ink/80 hover:bg-ink/5 hover:text-ink"
          />
        ))}
      </nav>
    </header>
  );
};
