/**
 * Single source of truth for company identity, contact, and trust signals.
 * Update values here to propagate across the entire site.
 */
export const company = {
  name: "BlackBox Traders",
  tagline: "Pioneering Global Trade in Premium Agricultural Exports",
  shortDescription:
    "A premier Indian export house specialising in coconut-based products and fresh fruits, backed by cold-chain logistics and pioneering sea-freight expertise.",
  // Statutory identifiers
  gstin: "33AANFB9273H2Z5",
  fssai: "12421999000538",
  // Verified marketplace presence
  indiamartUrl: "https://www.indiamart.com/blackbox-traders/",
  // Contact — update with live details
  email: "exports@blackboxtraders.in",
  phone: "+91-00000-00000",
  location: "Tamil Nadu, India",
} as const;

/** Headline metrics shown as trust signals. */
export const stats = [
  { value: "1st", label: "Sea shipment of fresh pineapples, India → UAE" },
  { value: "4+", label: "Government bodies & boards registered with" },
  { value: "100%", label: "Cold-chain monitored perishable exports" },
  { value: "FSSAI", label: "Licensed & GST-verified export house" },
] as const;
