import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials, type Credential } from "@/data/credentials";
import { company } from "@/data/company";
import { ShieldCheckIcon, DocumentIcon, ArrowRightIcon } from "@/components/ui/icons";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          centered
          eyebrow="Credentials & Compliance"
          title="A verified, compliant export partner"
          intro="Registered with India's principal trade and food-safety authorities. Documents are available to verified buyers on request."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((credential) => (
            <CredentialCard key={credential.abbr} credential={credential} />
          ))}
        </div>

        {/* IndiaMART verified-seller callout */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheckIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold text-brand-900">Verified business on IndiaMART</p>
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
      </Container>
    </section>
  );
}

function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-primary">
          <ShieldCheckIcon className="h-6 w-6" />
        </span>
        <span className="font-heading text-lg font-bold text-brand-900">{credential.abbr}</span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-brand-900">{credential.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {credential.description}
      </p>

      {credential.reference && (
        <p className="mt-3 font-mono text-xs tabular-nums text-muted-foreground">
          {credential.reference}
        </p>
      )}

      {credential.document && (
        <a
          href={credential.document}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <DocumentIcon className="h-4 w-4" />
          View document
        </a>
      )}
    </article>
  );
}
