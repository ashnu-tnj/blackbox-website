import type { SVGProps } from "react";

/**
 * Lightweight inline SVG icons (Lucide-style, 1.75 stroke) — no emoji, no
 * raster assets, tree-shakeable and theme-aware via currentColor.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ShipIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 20a6 6 0 0 0 5-3 6 6 0 0 0 10 0 6 6 0 0 0 5 3" />
    <path d="M4 18 2 9h20l-2 9" />
    <path d="M12 2v7M7 9V5h10v4" />
  </Base>
);

export const SnowflakeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2v20M2 12h20" />
    <path d="m4.5 4.5 15 15M19.5 4.5l-15 15" />
  </Base>
);

export const LeafIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 9-11 0 7 3 11 7 13a7 7 0 0 1-9 5Z" />
    <path d="M5 21c2-3 5-5 9-6" />
  </Base>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const GlobeIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 5 5 9-11" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const YoutubeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 12c0-2.4.2-3.9.5-4.8a2.6 2.6 0 0 1 1.8-1.8C6 5 8.4 4.8 12 4.8s6 .2 7.2.6a2.6 2.6 0 0 1 1.8 1.8c.3.9.5 2.4.5 4.8s-.2 3.9-.5 4.8a2.6 2.6 0 0 1-1.8 1.8c-1.2.4-3.6.6-7.2.6s-6-.2-7.2-.6a2.6 2.6 0 0 1-1.8-1.8c-.3-.9-.5-2.4-.5-4.8Z" />
    <path d="m10 9.5 5 2.5-5 2.5Z" />
  </Base>
);

export const DocumentIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Base>
);
