import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { ShieldCheckIcon } from "@/components/ui/icons";

/** Slim corporate utility bar above the main navigation (desktop only). */
export function TopBar() {
  return (
    <div className="hidden bg-brand-950 text-brand-100 md:block">
      <Container>
        <div className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-white"
            >
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden text-brand-200/80 lg:inline">
              GSTIN{" "}
              <span className="font-mono tabular-nums">{company.gstin}</span>
            </span>
            <span aria-hidden="true" className="hidden text-brand-700 lg:inline">
              |
            </span>
            <a
              href={company.indiamartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent-400 transition-colors hover:text-white"
            >
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              IndiaMART Verified
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <a
              href={company.exportersIndiaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent-400 transition-colors hover:text-white"
            >
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              ExportersIndia
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <a
              href={company.tradeIndiaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent-400 transition-colors hover:text-white"
            >
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              TradeIndia
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
