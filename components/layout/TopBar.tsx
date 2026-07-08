import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { ShieldCheckIcon } from "@/components/ui/icons";

/** Slim corporate utility bar above the main navigation (desktop only). */
export function TopBar() {
  return (
    <div className="hidden border-b border-brand-800 bg-brand-900 text-brand-50 md:block">
      <Container>
        <div className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${company.email}`}
              className="text-brand-100/90 transition-colors hover:text-white"
            >
              {company.email}
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="text-brand-100/90 transition-colors hover:text-white"
            >
              {company.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-brand-100/80">
              GSTIN <span className="font-mono tabular-nums">{company.gstin}</span>
            </span>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <a
              href={company.indiamartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-brand-100 transition-colors hover:text-white"
            >
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              IndiaMART Verified
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
