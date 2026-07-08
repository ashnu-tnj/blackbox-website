import type { ReactNode } from "react";

/** Eyebrow (+ optional index) + title + optional intro, heading each section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
  index,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  centered?: boolean;
  /** Optional section number, e.g. "01". */
  index?: string;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          {index && (
            <span className="font-mono text-xs font-semibold tabular-nums text-primary/60">
              {index}
            </span>
          )}
          <span aria-hidden="true" className="h-px w-6 bg-brand-300" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-[1.15] text-balance text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
          {intro}
        </p>
      )}
    </div>
  );
}
