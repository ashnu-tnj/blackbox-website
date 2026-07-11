/**
 * Photo gallery manifest.
 *
 * To add photos: drop image files into /public/images/gallery/ and add an
 * entry here — the Gallery section renders directly from this array.
 *
 * NOTE: The current entries are placeholder illustrations. Replace `src`
 * values with real photographs (e.g. "/images/gallery/pineapple-loading.jpg")
 * as they become available; captions and categories are free text.
 */
export type GalleryCategory = "Products" | "Exports & Logistics";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Set true for landscape/wide shots so the grid gives them more room. */
  wide?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "Products",
  "Exports & Logistics",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/hero-trade.svg",
    alt: "Cargo ship carrying containers across the sea",
    caption: "Sea freight — our pioneering India-to-UAE route",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/products/coconuts.svg",
    alt: "Semi-husked coconuts",
    caption: "Semi-husked coconuts, graded for export",
    category: "Products",
  },
  {
    src: "/images/products/fresh-pineapples.svg",
    alt: "Fresh pineapple",
    caption: "Fresh pineapples — Queen & MD2 varieties",
    category: "Products",
  },
  {
    src: "/images/products/desiccated-coconut.svg",
    alt: "Desiccated coconut in a bowl",
    caption: "Desiccated coconut, food-manufacturing grade",
    category: "Products",
  },
  {
    src: "/images/products/copra.svg",
    alt: "Dried copra halves",
    caption: "Milling-grade copra",
    category: "Products",
  },
  {
    src: "/images/products/frozen-coconut.svg",
    alt: "Frozen coconut",
    caption: "IQF frozen coconut, cold-chain handled",
    category: "Products",
  },
  {
    src: "/images/products/watermelons.svg",
    alt: "Watermelons, whole and sliced",
    caption: "Field-fresh watermelons",
    category: "Products",
  },
];
