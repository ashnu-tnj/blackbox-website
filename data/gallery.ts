/**
 * Photo gallery manifest.
 *
 * To add photos: drop image files into /public/images/gallery/ and add an
 * entry here — the Gallery section renders directly from this array. Any
 * entry whose image file is missing is hidden automatically (the tile's
 * onError removes it), so the section never shows a broken thumbnail.
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
  // --- Harvest & produce ---
  {
    src: "/images/gallery/391045.jpg",
    alt: "Cluster of tender green coconuts fresh from the palm",
    caption: "Tender green coconuts, fresh from the palm",
    category: "Products",
  },
  {
    src: "/images/gallery/391022.jpg",
    alt: "Freshly harvested coconuts spread across the grove floor",
    caption: "Freshly harvested coconuts at the grove",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/391024.jpg",
    alt: "Large field pile of semi-husked coconuts",
    caption: "Harvest pile — semi-husked coconuts",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/391046.jpg",
    alt: "De-husking yard with coconuts and palms behind",
    caption: "De-husking yard at the farm",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/391029.jpg",
    alt: "Pile of mature husked coconuts collected for grading",
    caption: "Mature coconuts, collected for grading",
    category: "Products",
  },
  {
    src: "/images/gallery/391030.jpg",
    alt: "Semi-husked coconuts beside a woven packing sack",
    caption: "Semi-husked coconuts, sorted for packing",
    category: "Products",
  },

  // --- Grading & selection ---
  {
    src: "/images/gallery/391041.jpg",
    alt: "Coconuts laid out on the floor for sorting",
    caption: "Grading and sorting before packing",
    category: "Products",
  },
  {
    src: "/images/gallery/391038.jpg",
    alt: "A single coconut on a digital weighing scale",
    caption: "Weight grading for export selection",
    category: "Products",
  },
  {
    src: "/images/gallery/391050.jpg",
    alt: "Hand holding a split coconut showing the white kernel",
    caption: "Split coconut — kernel quality check",
    category: "Products",
  },

  // --- Processing ---
  {
    src: "/images/gallery/391066.jpg",
    alt: "Crates of shelled and peeled coconuts during processing",
    caption: "Shelling and peeling in progress",
    category: "Products",
  },
  {
    src: "/images/gallery/391058.jpg",
    alt: "Peeled white coconut kernels in a crate at the processing unit",
    caption: "Peeled kernels at the processing unit",
    category: "Products",
  },
  {
    src: "/images/gallery/391063.jpg",
    alt: "Peeled white coconuts on a stainless-steel processing line",
    caption: "Kernel processing — stainless line",
    category: "Products",
  },
  {
    src: "/images/gallery/391065.jpg",
    alt: "Peeled coconut kernels beside a weighing machine",
    caption: "Weighing peeled kernels",
    category: "Products",
  },
  {
    src: "/images/gallery/391053.jpg",
    alt: "White coconut pieces moving along a processing conveyor",
    caption: "Coconut pieces on the processing line",
    category: "Products",
  },

  // --- Product forms ---
  {
    src: "/images/gallery/391082.jpg",
    alt: "White coconut chips in a container",
    caption: "Coconut chips, graded white",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/391098.jpg",
    alt: "Container of white coconut slices",
    caption: "Sliced coconut, uniform white grade",
    category: "Products",
  },
  {
    src: "/images/gallery/391099.jpg",
    alt: "Tray of diced coconut cubes",
    caption: "Diced coconut — uniform cut",
    category: "Products",
  },
  {
    src: "/images/gallery/391086.jpg",
    alt: "Close-up of finely grated desiccated coconut",
    caption: "Desiccated coconut — fine grate",
    category: "Products",
  },
  {
    src: "/images/gallery/391090.jpg",
    alt: "Freshly grated coconut in a crate, ready for drying",
    caption: "Freshly grated coconut, ready to dry",
    category: "Products",
  },

  // --- Packing, warehousing & dispatch ---
  {
    src: "/images/gallery/391014.jpg",
    alt: "Packing hall with sacks staged for dispatch",
    caption: "Packing hall — consignments staged for dispatch",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/391016.jpg",
    alt: "Workers bagging fresh coconuts into branded export sacks",
    caption: "Bagging fresh coconuts for export",
    category: "Exports & Logistics",
  },
  {
    src: "/images/gallery/391039.jpg",
    alt: "Branded 'Fresh Coconut' sacks stacked on a cart, ready to load",
    caption: "Packed fresh coconuts, ready to load",
    category: "Exports & Logistics",
  },
  {
    src: "/images/gallery/391043.jpg",
    alt: "Coconuts in 'Product of India' export bags",
    caption: "Export-bagged coconuts — Product of India",
    category: "Exports & Logistics",
  },
  {
    src: "/images/gallery/391056.jpg",
    alt: "Sacked product stacked and staged for the container",
    caption: "Sacked product, stacked for the container",
    category: "Exports & Logistics",
  },
];
