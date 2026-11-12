
import type { MetadataRoute } from "next";

const baseUrl = "https://mountain-bike-morocco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/cycling-trips/mtb",
    "/cycling-trips/e-mtb",
    "/cycling-trips/gravel",
    "/cycling-trips/road",
    "/cycling-trips/family-mtb",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
  }));
}
