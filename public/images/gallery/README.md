# Gallery photos

Drop your real photographs here (JPG/PNG/WebP — WebP preferred for size).
Suggested naming: `product-<name>.jpg`, `export-<description>.jpg`.

Then register each photo in `data/gallery.ts`:

```ts
{
  src: "/images/gallery/export-pineapple-loading.jpg",
  alt: "Workers loading pineapple cartons into a reefer container",
  caption: "Loading fresh pineapples for the UAE",
  category: "Exports & Logistics",
  wide: true, // optional — landscape shots span two columns
},
```

The current entries in `data/gallery.ts` are placeholder illustrations —
replace them as real photos arrive. Keep photos under ~300 KB each
(resize to ~1600px on the long edge) for fast loading.
