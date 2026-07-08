import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "BlackBox Traders — premium Indian exporter of coconut products (coconuts, desiccated coconut, frozen coconut, copra) and fresh fruits (pineapples, watermelons). DGFT, APEDA, Coconut Board & Spices Board registered, with cold-chain logistics.";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackboxtraders.in"),
  title: {
    default: `${company.name} — Premium Agricultural Exports from India`,
    template: `%s | ${company.name}`,
  },
  description,
  keywords: [
    "coconut export India",
    "desiccated coconut exporter",
    "copra export",
    "frozen coconut",
    "fresh pineapple export UAE",
    "agricultural exporter India",
    "APEDA registered exporter",
    "cold chain perishable export",
  ],
  openGraph: {
    title: `${company.name} — Pioneering Global Trade`,
    description,
    type: "website",
    locale: "en_IN",
    siteName: company.name,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2a47",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#products"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
