import type { ReactNode } from "react";

/** Eyebrow + title + optional intro, used to head each major section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}
