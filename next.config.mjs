/** @type {import('next').NextConfig} */

/**
 * Content-Security-Policy.
 * 'unsafe-inline' is required for Next.js hydration bootstrap and the inline
 * style props / Tailwind styles this static site uses; there is no
 * user-generated content rendered, so the residual XSS surface is minimal.
 * vercel.live is allowed so the Vercel preview/comment toolbar keeps working.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "connect-src 'self' https://vercel.live https://*.pusher.com wss://*.pusher.com https://vitals.vercel-insights.com",
  "frame-src 'self' https://vercel.live",
  "frame-ancestors 'self' https://vercel.live",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
