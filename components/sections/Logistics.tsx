import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShipIcon, SnowflakeIcon, GlobeIcon } from "@/components/ui/icons";
import { Tilt } from "@/components/fx/Tilt";
import { Reveal } from "@/components/fx/Reveal";
import { company } from "@/data/company";

const capabilities = [
  {
    icon: ShipIcon,
    title: "Pioneering sea freight",
    body: "First to successfully execute the sea shipment of fresh pineapples from India to the UAE — opening cost-efficient ocean routes for perishables.",
  },
  {
    icon: SnowflakeIcon,
    title: "Cold-chain expertise",
    body: "Temperature-controlled handling from farm gate to destination port, with reefer monitoring that protects quality across long-haul transit.",
  },
  {
    icon: GlobeIcon,
    title: "Export-ready documentation",
    body: "Phytosanitary certificates, certificates of origin, and compliant packing — coordinated end-to-end so consignments clear customs smoothly.",
  },
];

export function Logistics() {
  return (
    <section id="logistics" className="scroll-mt-20 bg-muted py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            index="02"
            eyebrow="Logistics & Innovation"
            title="Built for perishables, proven at sea"
            intro="Moving fresh produce across borders demands more than shipping — it demands a cold chain that doesn’t break. That’s our specialism."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <Tilt className="h-full rounded-lg">
                <div className="card-surface h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-700 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Highlight band with animated sea route */}
        <Reveal delay={120}>
          <div className="relative mt-8 overflow-hidden rounded-xl bg-brand-900 text-white">
            {/* Animated dotted trade route, Thanjavur → Jebel Ali */}
            <svg
              aria-hidden="true"
              viewBox="0 0 800 220"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-0 h-full w-full text-accent-400/40"
              fill="none"
            >
              <path
                d="M780 40 C 620 10, 420 90, 260 120 S 60 190, 20 200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 8"
                strokeLinecap="round"
                className="animate-dash"
              />
              <circle cx="780" cy="40" r="5" fill="currentColor" />
              <circle cx="20" cy="200" r="5" fill="currentColor" />
            </svg>

            <div className="relative grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-10">
              <div>
                <p className="eyebrow text-accent-400">A record first</p>
                <p className="mt-3 text-2xl font-bold leading-snug text-balance sm:text-3xl">
                  India&rsquo;s first sea shipment of fresh pineapples to the UAE.
                </p>
                <p className="mt-3 text-brand-200">
                  Carried out by {company.name} — the flag-off ceremony of the
                  sea shipment of GI Vazhakulam pineapple from Cochin to Dubai,
                  with top officials from APEDA and VFPCK present.
                </p>

                <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                  {[
                    {
                      k: "Implemented by",
                      v: "Vegetable & Fruit Promotion Council Keralam (VFPCK)",
                    },
                    {
                      k: "Technical guidance",
                      v: "Pineapple Research Station, KAU",
                    },
                    {
                      k: "Supported by",
                      v: "Agriculture & Processed Food Products Development Authority (APEDA)",
                    },
                    { k: "Flag-off", v: "6 November 2025 · Cochin → Dubai" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
                    >
                      <dt className="shrink-0 font-semibold text-brand-300 sm:w-40">
                        {row.k}
                      </dt>
                      <dd className="text-brand-100">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <Tilt max={5} scale={1.01} className="rounded-lg">
                <figure className="overflow-hidden rounded-lg border border-white/10 bg-white">
                  <img
                    src="/images/logistics/pineapple-flagoff.jpg"
                    alt="Flag-off ceremony of the sea shipment of GI Vazhakulam pineapple from Cochin to Dubai"
                    width={1800}
                    height={953}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  <figcaption className="bg-brand-950 px-4 py-2.5 text-xs text-brand-200">
                    Flag-off ceremony, 6 November 2025 — sea shipment of GI
                    Vazhakulam pineapple, Cochin to Dubai.
                  </figcaption>
                </figure>
              </Tilt>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
