"use client";

import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";

type Filter = "All" | GalleryCategory;
const filters: Filter[] = ["All", ...galleryCategories];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Photos registered in data/gallery.ts but not uploaded yet fail to load —
  // hide those tiles instead of showing broken thumbnails.
  const [failed, setFailed] = useState<ReadonlySet<string>>(new Set());

  const markFailed = useCallback((src: string) => {
    setFailed((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  const available = galleryItems.filter((i) => !failed.has(i.src));
  const visible =
    filter === "All"
      ? available
      : available.filter((i) => i.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? null : (i + dir + visible.length) % visible.length
      ),
    [visible.length]
  );

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  if (available.length === 0) return null;

  return (
    <section id="gallery" className="scroll-mt-20 bg-muted py-20 sm:py-24">
      <Container>
        <SectionHeading
          centered
          index="04"
          eyebrow="Gallery"
          title="Our produce and shipments, up close"
          intro="A look at what we export and how it moves — from graded produce to consignments on their way to port."
        />

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
              }}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "border-brand-800 bg-brand-800 text-white"
                  : "border-line bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ul className="mt-10 grid grid-flow-dense grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {visible.map((item, i) => (
            <li
              key={item.src}
              className={item.wide ? "col-span-2" : "col-span-1"}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View larger: ${item.caption}`}
                className="group block w-full overflow-hidden rounded-lg border border-line bg-white text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-400 hover:shadow-card-hover"
              >
                <span
                  className={`block overflow-hidden ${
                    item.wide ? "aspect-[2/0.94]" : "aspect-square"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={480}
                    height={360}
                    onError={() => markFailed(item.src)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                  <span className="truncate text-xs font-medium text-brand-800">
                    {item.caption}
                  </span>
                  <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.category === "Products" ? "Product" : "Export"}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Container>

      {/* Lightbox */}
      {openIndex !== null && visible[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[openIndex].caption}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-lg bg-white">
              <img
                src={visible[openIndex].src}
                alt={visible[openIndex].alt}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-white">
              <p className="text-sm sm:text-base">
                {visible[openIndex].caption}
                <span className="ml-3 text-xs text-white/60">
                  {openIndex + 1} / {visible.length}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <LightboxButton label="Previous image" onClick={() => step(-1)}>
                  <path d="M15 6l-6 6 6 6" />
                </LightboxButton>
                <LightboxButton label="Next image" onClick={() => step(1)}>
                  <path d="M9 6l6 6-6 6" />
                </LightboxButton>
                <LightboxButton label="Close gallery viewer" onClick={close}>
                  <path d="M6 6l12 12M18 6L6 18" />
                </LightboxButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function LightboxButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-md border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
