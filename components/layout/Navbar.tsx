"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { LeafIcon, ArrowRightIcon } from "@/components/ui/icons";

const links = [
  { href: "#products", label: "Products" },
  { href: "#logistics", label: "Logistics" },
  { href: "#credentials", label: "Credentials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-200 ${
        scrolled
          ? "border-b border-line bg-background/85 shadow-card backdrop-blur"
          : "border-b border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-brand-900"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <LeafIcon className="h-5 w-5" />
            </span>
            {company.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-brand-900/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href="#inquiry" className="btn-accent group px-5 py-2.5 text-sm">
              Trade Inquiry
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 hover:bg-brand-50 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-surface md:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#inquiry"
                  onClick={() => setOpen(false)}
                  className="btn-accent w-full"
                >
                  Trade Inquiry
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
