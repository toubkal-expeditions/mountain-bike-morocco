import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://mountain-bike-morocco.com";
const appDirectory = path.join(process.cwd(), "src", "app");

async function collectPageRoutes(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith(".")) {
        continue;
      }

      routes.push(
        ...(await collectPageRoutes(path.join(directory, entry.name)))
      );
    } else if (entry.isFile() && entry.name === "page.tsx") {
      const relativePath = path.relative(appDirectory, directory);

      const segments = relativePath
        .split(path.sep)
        .filter(Boolean);

      // Skip dynamic routes and route groups.
      if (
        segments.some(
          (segment) =>
            segment.startsWith("[") || segment.startsWith("(")
        )
      ) {
        continue;
      }

      const route = segments.length > 0
        ? `/${segments.join("/")}`
        : "/";

      routes.push(route);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await collectPageRoutes(appDirectory);

  return [...new Set(routes)].sort().map((route) => ({
    url: new URL(route, baseUrl).toString(),
  }));
}