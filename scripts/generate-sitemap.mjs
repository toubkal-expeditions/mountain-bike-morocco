import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://mountain-bike-morocco.com";
const APP_DIR = path.join(process.cwd(), "src", "app");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const OUTPUT_FILE = path.join(PUBLIC_DIR, "sitemap.xml");

const PAGE_FILES = new Set([
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
]);

const EXCLUDED_SEGMENTS = new Set([
  "api",
  "_next",
]);

async function collectRoutes(directory, segments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes = [];

  if (entries.some((entry) => entry.isFile() && PAGE_FILES.has(entry.name))) {
    routes.push(segments);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    if (
      name.startsWith(".") ||
      name.startsWith("@") ||
      name.startsWith("[") ||
      EXCLUDED_SEGMENTS.has(name)
    ) {
      continue;
    }

    // Route groups do not appear in the URL.
    const nextSegments = name.startsWith("(")
      ? segments
      : [...segments, name];

    routes.push(
      ...(await collectRoutes(path.join(directory, name), nextSegments))
    );
  }

  return routes;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const routes = await collectRoutes(APP_DIR);

const urls = [...new Set(routes.map((segments) => {
  const route = segments.map(encodeURIComponent).join("/");
  return route ? `${BASE_URL}/${route}` : BASE_URL;
}))].sort();

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

await mkdir(PUBLIC_DIR, { recursive: true });
await writeFile(OUTPUT_FILE, sitemap, "utf8");

console.log(`Sitemap generated: ${urls.length} URLs`);
console.log(`File: ${OUTPUT_FILE}`);