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
    <section id="logistics" className="scroll-mt-20 bg-brand-900 py-20 text-brand-50 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Logistics & Innovation"
          title={<span className="text-white">Built for perishables, proven at sea</span>}
          intro={
            <span className="text-brand-100/85">
              Moving fresh produce across borders demands more than shipping — it
              demands a cold chain that doesn&rsquo;t break. That&rsquo;s our
              specialism.
            </span>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-800 bg-brand-800/40 p-7 backdrop-blur"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-700 bg-gradient-to-r from-primary/20 to-brand-700/20 p-8 text-center">
          <p className="text-lg font-medium text-white sm:text-xl">
            India&rsquo;s first sea shipment of fresh pineapples to the UAE —
            <span className="text-brand-200"> a first we&rsquo;re proud to have delivered.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
