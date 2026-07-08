import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShipIcon, SnowflakeIcon, GlobeIcon } from "@/components/ui/icons";

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
        <SectionHeading
          centered
          index="02"
          eyebrow="Logistics & Innovation"
          title="Built for perishables, proven at sea"
          intro="Moving fresh produce across borders demands more than shipping — it demands a cold chain that doesn’t break. That’s our specialism."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-surface p-7">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-800 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-800">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight band */}
        <div className="mt-8 overflow-hidden rounded-xl bg-brand-900 text-white">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <p className="eyebrow text-accent-400">A record first</p>
              <p className="mt-3 text-2xl font-bold leading-snug text-balance sm:text-3xl">
                India&rsquo;s first sea shipment of fresh pineapples to the UAE.
              </p>
              <p className="mt-3 text-brand-200">
                A milestone we&rsquo;re proud to have delivered — and the
                foundation of our cold-chain sea-freight capability.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
              <img
                src="/images/hero-trade.svg"
                alt="Line engraving of a cargo ship carrying containers across the sea"
                width={1200}
                height={460}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
