import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} — Premium Agricultural Exports`,
    short_name: company.name,
    description: company.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F7ED",
    theme_color: "#4A7043",
    lang: "en-IN",
    categories: ["business", "food"],
  };
}
