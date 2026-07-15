/**
 * Photo gallery manifest.
 *
 * To add photos: drop image files into /public/images/ and add an entry here —
 * the Gallery section renders directly from this array. Entries whose image
 * file is not present yet are hidden automatically (the tile's onError removes
 * it), so the "Harvesting / Grading / Container Loading" set below stays
 * invisible until those files are uploaded to /public/images/gallery/.
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
  // --- Live now: real product & logistics imagery already deployed ---
  {
    src: "/images/products/fresh-pineapples.jpg",
    alt: "Export-grade pineapples growing in the field",
    caption: "Field-grown pineapples — Queen variety",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/products/coconuts.jpg",
    alt: "Fresh semi-husked coconuts, cut to show the white kernel",
    caption: "Semi-husked coconuts, graded for export",
    category: "Products",
  },
  {
    src: "/images/products/desiccated-coconut.jpg",
    alt: "Grated desiccated coconut",
    caption: "Desiccated coconut, food-manufacturing grade",
    category: "Products",
  },
  {
    src: "/images/products/frozen-coconut.jpg",
    alt: "White frozen coconut pieces in packaging",
    caption: "IQF frozen coconut, cold-chain handled",
    category: "Products",
  },
  {
    src: "/images/products/copra.jpg",
    alt: "Sun-dried whole copra, one cut open",
    caption: "Milling-grade copra",
    category: "Products",
  },
  {
    src: "/images/products/watermelons.jpg",
    alt: "Striped watermelon ripening in the field",
    caption: "Field-fresh watermelons",
    category: "Products",
  },
  {
    src: "/images/hero-trade.svg",
    alt: "Engraving of a cargo ship carrying containers across the sea",
    caption: "Sea freight — our India-to-UAE route",
    category: "Exports & Logistics",
    wide: true,
  },

  // --- Pending upload: hidden until the files land in /public/images/gallery/ ---
  // Harvesting (10 photos)
  {
    src: "/images/gallery/harvesting-01.jpg",
    alt: "Whole coconuts harvested and piled in the field",
    caption: "Whole-coconut harvest, ready for processing",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/harvesting-02.jpg",
    alt: "Workers harvesting coconuts from trees",
    caption: "Field harvesting of semi-husked coconuts",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-03.jpg",
    alt: "Pile of freshly harvested coconuts",
    caption: "Daily harvest collection — semi-husked variety",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-04.jpg",
    alt: "Workers preparing coconuts for de-husking",
    caption: "Pre-processing preparation at harvest site",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-05.jpg",
    alt: "Coconut husking equipment and process",
    caption: "Traditional husking process",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-06.jpg",
    alt: "Fresh coconuts in storage bins",
    caption: "Husked coconuts in temporary storage",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-07.jpg",
    alt: "Workers inspecting harvested produce",
    caption: "Quality check at point of harvest",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-08.jpg",
    alt: "Coconuts transported in open trucks",
    caption: "Field-to-facility transport",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-09.jpg",
    alt: "Freshly picked pineapples in field rows",
    caption: "Pineapple harvest — Queen variety",
    category: "Products",
  },
  {
    src: "/images/gallery/harvesting-10.jpg",
    alt: "Workers cutting pineapples from plants",
    caption: "Hand-harvested pineapples with stems",
    category: "Products",
  },

  // Grading & Sorting (8 photos)
  {
    src: "/images/gallery/grading-01.jpg",
    alt: "Coconuts on a grading and sorting conveyor line",
    caption: "Mechanical grading by size and weight",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/grading-02.jpg",
    alt: "Workers sorting coconuts by quality grade",
    caption: "Manual quality assessment — shape and surface",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-03.jpg",
    alt: "Sorted coconuts arranged by grade categories",
    caption: "Grade A, B, C separation bins",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-04.jpg",
    alt: "Inspecting coconuts for export specifications",
    caption: "Compliance verification before boxing",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-05.jpg",
    alt: "Pineapples on a sorting conveyor system",
    caption: "Pineapple size and maturity grading",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-06.jpg",
    alt: "Workers quality-checking graded pineapples",
    caption: "Visual inspection for export quality",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-07.jpg",
    alt: "Watermelons being sorted by size categories",
    caption: "Watermelon grading station",
    category: "Products",
  },
  {
    src: "/images/gallery/grading-08.jpg",
    alt: "Temperature-controlled grading facility",
    caption: "Climate-controlled processing facility",
    category: "Products",
  },

  // Packing (2 photos)
  {
    src: "/images/gallery/packing-01.jpg",
    alt: "Workers packing coconuts into wooden crates",
    caption: "Export crating — coconuts packed for shipment",
    category: "Products",
    wide: true,
  },
  {
    src: "/images/gallery/packing-02.jpg",
    alt: "Packed and sealed export cartons ready for container",
    caption: "Final boxing and labeling for overseas consignment",
    category: "Products",
    wide: true,
  },

  // Container Loading (8 photos)
  {
    src: "/images/gallery/container-loading-01.jpg",
    alt: "Forklift loading packed crates into shipping container",
    caption: "Loading deck — containerization begins",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/container-loading-02.jpg",
    alt: "Cargo containers stacked at the loading dock",
    caption: "Multi-container consignment staged for pickup",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/container-loading-03.jpg",
    alt: "Inside view of loaded 20ft container",
    caption: "20ft FCL — organized stacking for stability",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/container-loading-04.jpg",
    alt: "Workers securing cargo inside the container",
    caption: "Cargo lashing and bracing for sea transport",
    category: "Exports & Logistics",
  },
  {
    src: "/images/gallery/container-loading-05.jpg",
    alt: "Sealed and locked container with customs seal",
    caption: "Container sealed and documented for customs",
    category: "Exports & Logistics",
  },
  {
    src: "/images/gallery/container-loading-06.jpg",
    alt: "Warehouse loading dock with multiple containers",
    caption: "Warehouse loading operations — final stage",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/container-loading-07.jpg",
    alt: "Container crane loading cargo onto transport truck",
    caption: "Crane operations — container to truck transfer",
    category: "Exports & Logistics",
    wide: true,
  },
  {
    src: "/images/gallery/container-loading-08.jpg",
    alt: "Truck with loaded container leaving the warehouse",
    caption: "En route to port — ready for sea freight",
    category: "Exports & Logistics",
    wide: true,
  },
];
