import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://mountain-bike-morocco.com/sitemap.xml",
    host: "https://mountain-bike-morocco.com",
  };
}