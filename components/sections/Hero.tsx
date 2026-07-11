"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { company, stats } from "@/data/company";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Tilt } from "@/components/fx/Tilt";

const registrations = ["DGFT", "APEDA", "Coconut Board", "Spices Board", "FSSAI"];

/** Decorative leaf drawn in the site's engraving style. */
function Leaf({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M32 56C18 44 14 28 20 12c16 4 26 16 24 34-2 6-6 9-12 10Z" />
      <path d="M28 50C26 38 28 26 34 16" strokeLinecap="round" />
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef(0);

  /**
   * Mouse parallax: writes normalized pointer offsets (-0.5..0.5) to CSS
   * variables on the section; depth layers translate against them. No React
   * re-renders — just a CSS variable update per animation frame.
   */
  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--px", px.toFixed(3));
      el.style.setProperty("--py", py.toFixed(3));
    });
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(160deg, #2C3E2C 0%, #3A5A40 55%, #4A7043 100%)",
      }}
    >
      {/* Background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(42rem 24rem at 78% -10%, rgba(233,185,73,0.22), transparent), radial-gradient(36rem 22rem at 0% 110%, rgba(171,205,134,0.18), transparent)",
        }}
      />

      {/* Depth layer: slow-rotating globe (far) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-8 hidden lg:block"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * -18px), calc(var(--py, 0) * -12px), 0)",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-[30rem] w-[30rem] animate-spin-slow text-white/10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="200" cy="200" r="160" />
          <ellipse cx="200" cy="200" rx="160" ry="60" />
          <ellipse cx="200" cy="200" rx="160" ry="110" />
          <ellipse cx="200" cy="200" rx="60" ry="160" />
          <ellipse cx="200" cy="200" rx="110" ry="160" />
          <line x1="40" y1="200" x2="360" y2="200" />
          <line x1="200" y1="40" x2="200" y2="360" />
        </svg>
      </div>

      {/* Depth layer: floating leaves (near — move with the pointer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-24 hidden md:block"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * 26px), calc(var(--py, 0) * 20px), 0)",
        }}
      >
        <Leaf className="h-16 w-16 animate-float-soft text-brand-300/30" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 right-[12%] hidden md:block"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * 38px), calc(var(--py, 0) * 30px), 0)",
        }}
      >
        <Leaf className="h-12 w-12 animate-float text-accent-400/25 [animation-delay:1.6s]" />
      </div>
      {/* Soft glow orbs (mid depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * -30px), calc(var(--py, 0) * -22px), 0)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * 24px), calc(var(--py, 0) * 18px), 0)",
        }}
      />

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
            Premium Agricultural Exports · Thanjavur, India
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            Pioneering Global Trade in{" "}
            <span className="text-accent-400">Premium Agricultural Exports</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
            {company.name} exports coconut-based products and fresh fruits to
            international markets — backed by precision cold-chain logistics and a
            record of firsts, including India&rsquo;s first sea shipment of fresh
            pineapples to the UAE.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#inquiry" className="btn-accent group w-full sm:w-auto">
              Request a Trade Quote
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#products" className="btn-ghost-light w-full sm:w-auto">
              Explore Products
            </a>
          </div>

          <div className="mt-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              Registered &amp; certified with
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {registrations.map((r) => (
                <span key={r} className="text-sm font-semibold text-brand-100">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stat cards — individually tilt in 3D on hover */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <Tilt
              key={s.label}
              max={10}
              scale={1.04}
              className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm"
            >
              <p className="p-6 text-center">
                <span className="block text-3xl font-bold text-accent-300">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-sm leading-snug text-brand-100">
                  {s.label}
                </span>
              </p>
            </Tilt>
          ))}
        </div>
      </Container>
    </section>
  );
}
