import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials, type Credential } from "@/data/credentials";
import { company } from "@/data/company";
import { ShieldCheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Tilt } from "@/components/fx/Tilt";
import { Reveal } from "@/components/fx/Reveal";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            index="03"
            eyebrow="Credentials & Compliance"
            title="A verified, compliant export partner"
            intro="Registered with India's principal trade and food-safety authorities. Documents are available to verified buyers on request."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((credential, i) => (
            <Reveal key={credential.abbr} delay={(i % 3) * 90}>
              <CredentialCard credential={credential} />
            </Reveal>
          ))}
        </div>

        {/* IndiaMART verified-seller callout */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-line bg-muted p-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-700 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-brand-800">
                  Verified business on IndiaMART
                </p>
                <p className="text-sm text-muted-foreground">
                  Independently listed and verified marketplace presence.
                </p>
              </div>
            </div>
            <a
              href={company.indiamartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group shrink-0"
            >
              View profile
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <Tilt max={6} className="h-full rounded-lg">
      <article className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
            <ShieldCheckIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold text-brand-800">
            {credential.abbr}
          </span>
        </div>

        <h3 className="mt-4 text-sm font-semibold text-brand-800">
          {credential.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {credential.description}
        </p>

        {credential.reference && (
          <p className="mt-3 font-mono text-xs tabular-nums text-muted-foreground">
            {credential.reference}
          </p>
        )}
      </article>
    </Tilt>
  );
}
