/**
 * Product catalogue. Add, remove, or edit entries here — the Products grid
 * renders directly from this array, so no component changes are needed.
 */
export type Product = {
  slug: string;
  name: string;
  category: "Coconut Products" | "Fresh Fruits";
  description: string;
  /** Illustration shown on the product card (path under /public). */
  image: string;
  /** Optional trade specifications (moisture, grading, packing, etc.). */
  specs?: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "coconuts",
    name: "Semi-Husked Coconuts",
    category: "Coconut Products",
    image: "/images/products/coconuts.svg",
    description:
      "Mature, semi-husked coconuts selected for export weight and water content, packed for long-haul freight.",
    specs: [
      { label: "Grade", value: "Premium / A-Grade" },
      { label: "Avg. weight", value: "400–650 g" },
      { label: "Packing", value: "Mesh bags / cartons" },
    ],
  },
  {
    slug: "desiccated-coconut",
    name: "Desiccated Coconut (DC)",
    category: "Coconut Products",
    image: "/images/products/desiccated-coconut.svg",
    description:
      "High-grade desiccated coconut powder, hygienically processed for confectionery and food manufacturing.",
    specs: [
      { label: "Moisture", value: "≤ 3%" },
      { label: "Fat content", value: "60–68%" },
      { label: "Cut", value: "Fine / Medium" },
    ],
  },
  {
    slug: "frozen-coconut",
    name: "Frozen Coconut",
    category: "Coconut Products",
    image: "/images/products/frozen-coconut.svg",
    description:
      "IQF frozen coconut meat and kernels, cold-chain handled to retain freshness and texture in transit.",
    specs: [
      { label: "Storage", value: "-18 °C IQF" },
      { label: "Format", value: "Chunks / grated" },
      { label: "Shelf life", value: "12–18 months" },
    ],
  },
  {
    slug: "copra",
    name: "Copra",
    category: "Coconut Products",
    image: "/images/products/copra.svg",
    description:
      "Sun-dried and milling-grade copra for oil extraction, sorted for uniform moisture and quality.",
    specs: [
      { label: "Moisture", value: "≤ 6%" },
      { label: "Type", value: "Milling / Edible" },
      { label: "Oil content", value: "63–70%" },
    ],
  },
  {
    slug: "fresh-pineapples",
    name: "Fresh Pineapples",
    category: "Fresh Fruits",
    image: "/images/products/fresh-pineapples.svg",
    description:
      "Export-grade fresh pineapples — the product behind our pioneering India-to-UAE sea shipment.",
    specs: [
      { label: "Variety", value: "Queen / MD2" },
      { label: "Grading", value: "Count 6–10 per carton" },
      { label: "Transit", value: "Reefer sea / air" },
    ],
  },
  {
    slug: "watermelons",
    name: "Watermelons",
    category: "Fresh Fruits",
    image: "/images/products/watermelons.svg",
    description:
      "Field-fresh watermelons graded for sweetness and size, cold-chain handled for export markets.",
    specs: [
      { label: "Brix", value: "11–13%" },
      { label: "Size", value: "3–8 kg" },
      { label: "Packing", value: "Reefer bulk / cartons" },
    ],
  },
];
