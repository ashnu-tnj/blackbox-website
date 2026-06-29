import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { LeafIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-brand-900 text-brand-50">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-heading text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <LeafIcon className="h-5 w-5" />
              </span>
              {company.name}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Compliance
            </h3>
            <dl className="mt-4 space-y-2 text-sm text-brand-100/90">
              <div className="flex gap-2">
                <dt className="font-medium text-brand-200">GSTIN:</dt>
                <dd className="font-mono tabular-nums">{company.gstin}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-brand-200">FSSAI:</dt>
                <dd className="font-mono tabular-nums">{company.fssai}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-100/90">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>{company.location}</li>
              <li>
                <a
                  href={company.indiamartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-brand-200 hover:text-white"
                >
                  Verified on IndiaMART
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 text-xs text-brand-200/70">
          © {year} {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
