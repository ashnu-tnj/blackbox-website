/**
 * BlackBox Traders cube mark — an isometric "black box" rebuilt as crisp
 * vector so it scales sharply and inherits colour via `currentColor`
 * (dark on light surfaces, light on dark ones). Transparent separators
 * between faces let whatever background sits behind it show through.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 104"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M 50.00 9.79 L 90.42 30.00 L 50.00 50.21 L 9.58 30.00 Z" />
      <path d="M 7.60 35.59 L 48.40 55.99 L 48.40 60.41 L 7.60 40.01 Z" />
      <path d="M 92.40 35.59 L 92.40 40.01 L 51.60 60.41 L 51.60 55.99 Z" />
      <path d="M 7.60 46.59 L 48.40 66.99 L 48.40 93.41 L 7.60 73.01 Z" />
      <path d="M 92.40 46.59 L 92.40 73.01 L 51.60 93.41 L 51.60 66.99 Z" />
    </svg>
  );
}
