import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { BrandMark } from "@/components/ui/BrandMark";
import { YoutubeIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <BrandMark className="h-9 w-9 text-white" />
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
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  <YoutubeIcon className="h-4 w-4" />
                  YouTube
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
            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href={company.indiamartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-white"
              >
                Verified on IndiaMART
              </a>
              <a
                href={company.exportersIndiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-white"
              >
                Listed on ExportersIndia
              </a>
              <a
                href={company.tradeIndiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-white"
              >
                Listed on TradeIndia
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-brand-300/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <span className="font-medium text-brand-200">
              AFLATUS OPC PVT LTD
            </span>
            , Chennai
          </p>
        </div>
      </Container>
    </footer>
  );
}
