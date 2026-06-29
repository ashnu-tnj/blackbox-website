# BlackBox Traders — B2B Export Website

Professional, high-conversion website for **BlackBox Traders**, a specialised
Indian agricultural export house (coconut products & fresh fruits).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Mobile-first, fast, semantic, and SEO-ready, with a green "Trust & Authority"
design system (deep forest greens, fresh organic shades, crisp whites).

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx            Root layout: fonts (Poppins + Open Sans), SEO metadata, skip link
  page.tsx              Home page — composes all sections + JSON-LD structured data
  globals.css           Design tokens (green palette) + base styles + button components
  api/inquiry/route.ts  Server-side validated trade-inquiry endpoint (wire to email/CRM)
components/
  layout/   Navbar, Footer
  sections/ Hero, Products, Logistics, Credentials, InquiryForm
  ui/       Container, SectionHeading, icons (inline SVG, no emoji)
data/                   ← edit these to update content (no component changes needed)
  company.ts            Identity, contact, trust stats, GSTIN/FSSAI, IndiaMART URL
  products.ts           Product catalogue + specifications
  credentials.ts        Certifications & verifiable documents
lib/
  validation.ts         Shared client+server inquiry validation
public/documents/       Credential PDFs/images (see that folder's README)
tailwind.config.ts      Brand colour tokens & theme
```

## Updating content

- **Products / specs** → edit `data/products.ts`
- **Certifications & documents** → edit `data/credentials.ts` (and add files to `public/documents/`)
- **Company info, contact, stats** → edit `data/company.ts`
- **Theme colours** → edit the CSS variables in `app/globals.css`

## Wiring the inquiry form

`app/api/inquiry/route.ts` validates submissions server-side and currently
logs them. Replace the marked `TODO` with an email service (e.g. Resend,
SendGrid), CRM, or database call to deliver leads to your export desk.

## Design system

Generated with the **UI/UX Pro Max** design intelligence:

- **Pattern:** Enterprise Gateway · **Style:** Trust & Authority (credentials prominent)
- **Palette:** Agriculture / Farm Tech — primary `#15803D`, secondary `#22C55E`,
  accent `#A16207`, background `#F0FDF4`, text `#14532D`
- **Type:** Poppins (headings) + Open Sans (body)
