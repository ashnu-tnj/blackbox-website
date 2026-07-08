import { Container } from "@/components/ui/Container";
import { company, stats } from "@/data/company";
import { ArrowRightIcon } from "@/components/ui/icons";

const registrations = ["DGFT", "APEDA", "Coconut Board", "Spices Board", "FSSAI"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-900 text-white"
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
            "radial-gradient(42rem 24rem at 78% -10%, rgba(47,111,237,0.35), transparent), radial-gradient(36rem 22rem at 0% 110%, rgba(47,111,237,0.14), transparent)",
        }}
      />
      {/* Decorative globe */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-16 top-8 hidden h-[30rem] w-[30rem] text-white/10 lg:block"
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

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
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

        {/* Stat bar */}
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-brand-900 p-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-white">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-sm leading-snug text-brand-200">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
