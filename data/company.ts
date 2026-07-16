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
  exportersIndiaUrl: "https://www.exportersindia.com/hajeeco/",
  // Contact
  contactPerson: "Mohamed Ashfaaq",
  email: "blackboxtraders@hotmail.com",
  location: "Thanjavur, Tamil Nadu, India",
  address:
    "S-16, SIDCO Industrial Estate, Nanjikottai Road, Thanjavur 613007, Tamil Nadu, India",
} as const;

/** Headline metrics shown as trust signals. */
export const stats = [
  { value: "1st", label: "Sea shipment of fresh pineapples, India → UAE" },
  { value: "4+", label: "Government bodies & boards registered with" },
  { value: "100%", label: "Cold-chain monitored perishable exports" },
  { value: "FSSAI", label: "Licensed & GST-verified export house" },
] as const;
