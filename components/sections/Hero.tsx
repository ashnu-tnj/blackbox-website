import { Container } from "@/components/ui/Container";
import { company, stats } from "@/data/company";
import { ArrowRightIcon, ShieldCheckIcon, GlobeIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-background to-background"
    >
      {/* Decorative, non-semantic background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(34,197,94,0.18), transparent), radial-gradient(40rem 24rem at 0% 10%, rgba(21,128,61,0.12), transparent)",
        }}
      />

      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-surface px-4 py-1.5 text-sm font-medium text-primary shadow-card">
            <GlobeIcon className="h-4 w-4" />
            DGFT · APEDA · Coconut Board · Spices Board registered
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
            Pioneering Global Trade in{" "}
            <span className="text-primary">Premium Agricultural Exports</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {company.name} delivers coconut-based products and fresh fruits to
            international markets — backed by precision cold-chain logistics and
            a record of firsts, including India&rsquo;s first sea shipment of
            fresh pineapples to the UAE.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#inquiry" className="btn-accent group w-full sm:w-auto">
              Request a Trade Quote
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#products" className="btn-outline w-full sm:w-auto">
              Explore Products
            </a>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheckIcon className="h-4 w-4 text-primary" />
            Verified seller on{" "}
            <a
              href={company.indiamartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              IndiaMART
            </a>
          </p>
        </div>

        {/* Trust metrics */}
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-line bg-surface p-5 text-center shadow-card"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-primary">{s.value}</span>
                <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Trade scene banner */}
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-brand-200 shadow-card">
          <img
            src="/images/hero-trade.svg"
            alt="Cargo ship carrying stacked containers across the sea — BlackBox Traders' global agricultural exports"
            width={1200}
            height={460}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}
