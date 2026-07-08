import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10 font-display text-sm font-bold text-white">
                BB
              </span>
              {company.name}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200/80">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Compliance
            </h3>
            <dl className="mt-4 space-y-2 text-sm text-brand-200/90">
              <div className="flex gap-2">
                <dt className="font-medium text-brand-300">GSTIN:</dt>
                <dd className="font-mono tabular-nums">{company.gstin}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-brand-300">FSSAI:</dt>
                <dd className="font-mono tabular-nums">{company.fssai}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-200/90">
              <li className="font-medium text-brand-100">
                {company.contactPerson}
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Office
            </h3>
            <address className="mt-4 text-sm not-italic leading-relaxed text-brand-200/90">
              {company.address}
            </address>
            <a
              href={company.indiamartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-white"
            >
              Verified on IndiaMART
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-brand-300/70">
          © {year} {company.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
