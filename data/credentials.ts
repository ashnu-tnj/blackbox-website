/**
 * Certifications, registrations, and verified documents.
 *
 * `document` points to a file in /public/documents (the source PDFs/images:
 * "BB GST Verified.pdf", "FSSAI license.pdf", "IE Code.jpeg"). Drop the files
 * into public/documents/ with the names below and the links activate.
 * Leave `document` undefined for badges that are registrations only.
 */
export type Credential = {
  abbr: string;
  name: string;
  description: string;
  /** Statutory number, if applicable. */
  reference?: string;
  /** Path under /public for a verifiable document, if available. */
  document?: string;
};

export const credentials: Credential[] = [
  {
    abbr: "DGFT",
    name: "Directorate General of Foreign Trade",
    description:
      "Registered exporter with a valid Importer-Exporter Code (IEC) for international trade.",
    document: "/documents/ie-code.jpeg",
  },
  {
    abbr: "APEDA",
    name: "Agricultural & Processed Food Products Export Development Authority",
    description:
      "Registered for the export of scheduled agricultural and processed food products.",
  },
  {
    abbr: "CDB",
    name: "Coconut Development Board",
    description:
      "Recognised for trade in coconut and coconut-derived products.",
  },
  {
    abbr: "Spices Board",
    name: "Spices Board of India",
    description:
      "Registered exporter under the Ministry of Commerce & Industry, Govt. of India.",
  },
  {
    abbr: "GSTIN",
    name: "GST Verified",
    description: "Goods & Services Tax registered and verified entity.",
    reference: "33AANFB9273H2Z5",
    document: "/documents/bb-gst-verified.pdf",
  },
  {
    abbr: "FSSAI",
    name: "Food Safety & Standards Authority of India",
    description: "Licensed for food safety compliance across export operations.",
    reference: "12421999000538",
    document: "/documents/fssai-license.pdf",
  },
];
