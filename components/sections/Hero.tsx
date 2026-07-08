import { Container } from "@/components/ui/Container";
import { company, stats } from "@/data/company";
import { ArrowRightIcon, ShieldCheckIcon, GlobeIcon } from "@/components/ui/icons";

const registrations = ["DGFT", "APEDA", "Coconut Board", "Spices Board", "FSSAI"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Layered background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-50 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(48rem 26rem at 88% -8%, rgba(34,197,94,0.16), transparent), radial-gradient(36rem 22rem at -6% 4%, rgba(74,112,67,0.12), transparent)",
        }}
      />

      <Container className="py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="badge-pill">
              <GlobeIcon className="h-4 w-4 text-primary" />
              Premium agri-export house · Thanjavur, India
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.06] text-balance text-brand-900 sm:text-5xl lg:text-[3.4rem]">
              Pioneering Global Trade in{" "}
              <span className="text-primary">Premium Agricultural Exports</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {company.name} delivers coconut-based products and fresh fruits to
              international markets — backed by precision cold-chain logistics and
              a record of firsts, including India&rsquo;s first sea shipment of
              fresh pineapples to the UAE.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#inquiry" className="btn-accent group">
                Request a Trade Quote
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#products" className="btn-outline">
                Explore Products
              </a>
            </div>

            <div className="mt-9 border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Registered &amp; certified with
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                {registrations.map((r) => (
                  <span
                    key={r}
                    className="text-sm font-semibold text-brand-800"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up">
            <div className="card-surface overflow-hidden rounded-3xl">
              <img
                src="/images/hero-trade.svg"
                alt="Line engraving of a cargo ship carrying containers across the sea — BlackBox Traders' global agricultural exports"
                width={1200}
                height={460}
                className="h-auto w-full"
                fetchPriority="high"
              />
            </div>

            {/* Floating highlight — pioneering shipment */}
            <div className="card-surface absolute -bottom-6 left-4 max-w-[15rem] rounded-2xl p-4 sm:left-6">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <GlobeIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium leading-snug text-brand-900">
                  India&rsquo;s first sea shipment of fresh pineapples to the UAE
                </p>
              </div>
            </div>

            {/* Floating badge — verified */}
            <div className="badge-pill absolute -right-2 -top-4 sm:-right-4">
              <ShieldCheckIcon className="h-4 w-4 text-primary" />
              IndiaMART Verified
            </div>
          </div>
        </div>

        {/* Metrics strip — hairline dividers via 1px gap over a line-coloured bg */}
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-primary">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-sm leading-snug text-muted-foreground">
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
