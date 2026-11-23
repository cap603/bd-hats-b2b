import { MetadataRoute } from "next";
import { HATS } from "./lib/products";

// Sitemap index (2026-11-23): split the single 105-URL sitemap into per-locale
// shards so GSC reports indexation per shard and Google can allocate crawl
// budget per shard. Scope stays en/es full site + ja/pt/it homepages
// (2026-11-20 decision).
//
// lastmod discipline: each URL carries its last *real* content update date
// (CONTENT_UPDATED below). Unlisted pages fall back to the 2026-11-20 baseline
// deploy — NOT new Date(), which made every URL look freshly updated on every
// build and trained Google to ignore the signal.
const CONTENT_UPDATED: Record<string, string> = {
  "/en/compare/cotton-twill-vs-brushed-cotton-vs-canvas": "2026-11-23",
  "/es/compare/cotton-twill-vs-brushed-cotton-vs-canvas": "2026-11-23",
  "/en/guide": "2026-11-23",
  "/es/guide": "2026-11-23",
  "/en/pricing": "2026-11-23",
  "/es/pricing": "2026-11-23",
  ...Object.fromEntries(
    ["en", "es"].flatMap((l) =>
      HATS.map((h) => [`/${l}/product/${h.id}`, "2026-11-23"])
    )
  ),
};

export function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bdjunyang.com";
  const baseline = "2026-11-20"; // last sitewide deploy before this batch

  const corePages: Array<{
    path: string;
    priority: number;
    freq: "weekly" | "monthly";
  }> = [
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/guide", priority: 0.8, freq: "monthly" },
    { path: "/materials", priority: 0.7, freq: "monthly" },
    { path: "/pricing", priority: 0.7, freq: "monthly" },
    { path: "/wholesale-snapbacks", priority: 0.8, freq: "monthly" },
    { path: "/custom-trucker-hats", priority: 0.8, freq: "monthly" },
    { path: "/oem-hat-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/custom-dad-hats-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/wholesale-blank-caps-supplier", priority: 0.8, freq: "monthly" },
    { path: "/private-label-hat-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/custom-5-panel-caps-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/corporate-custom-hats-supplier", priority: 0.8, freq: "monthly" },
    { path: "/bulk-custom-hats-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/custom-beanies-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/custom-bucket-hats-manufacturer", priority: 0.8, freq: "monthly" },
    { path: "/custom-corduroy-caps-manufacturer", priority: 0.9, freq: "weekly" },
    { path: "/custom-golf-performance-hats", priority: 0.9, freq: "weekly" },
    { path: "/compare/5-panel-vs-6-panel-caps", priority: 0.7, freq: "monthly" },
    { path: "/compare/flat-embroidery-vs-3d-puff", priority: 0.7, freq: "monthly" },
    { path: "/compare/cotton-twill-vs-brushed-cotton-vs-canvas", priority: 0.7, freq: "monthly" },
    { path: "/compare/snapback-vs-strapback-vs-buckle", priority: 0.7, freq: "monthly" },
    { path: "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing", priority: 0.7, freq: "monthly" },
    { path: "/compare/merino-wool-vs-acrylic-beanies", priority: 0.85, freq: "weekly" },
    { path: "/custom-hat-cost-index-2026", priority: 0.95, freq: "weekly" },
    { path: "/custom-hat-tech-pack-template", priority: 0.95, freq: "weekly" },
    { path: "/top-hat-manufacturers-in-china", priority: 0.95, freq: "weekly" },
  ];

  const entries: MetadataRoute.Sitemap = [];

  if (id === 0) {
    // Shard 0: English core (home + landing + compare + guides + PDPs)
    entries.push({
      url: `${baseUrl}/en`,
      lastModified: new Date(baseline),
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const p of corePages) {
      entries.push({
        url: `${baseUrl}/en${p.path}`,
        lastModified: new Date(CONTENT_UPDATED[`/en${p.path}`] ?? baseline),
        changeFrequency: p.freq,
        priority: p.priority,
      });
    }
    for (const hat of HATS) {
      entries.push({
        url: `${baseUrl}/en/product/${hat.id}`,
        lastModified: new Date(
          CONTENT_UPDATED[`/en/product/${hat.id}`] ?? baseline
        ),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  } else {
    // Shard 1: Spanish core + ja/pt/it homepages (already indexed, keep)
    entries.push({
      url: `${baseUrl}/es`,
      lastModified: new Date(baseline),
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const p of corePages) {
      entries.push({
        url: `${baseUrl}/es${p.path}`,
        lastModified: new Date(CONTENT_UPDATED[`/es${p.path}`] ?? baseline),
        changeFrequency: p.freq,
        priority: p.priority,
      });
    }
    for (const hat of HATS) {
      entries.push({
        url: `${baseUrl}/es/product/${hat.id}`,
        lastModified: new Date(
          CONTENT_UPDATED[`/es/product/${hat.id}`] ?? baseline
        ),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
    for (const locale of ["ja", "pt", "it"]) {
      entries.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(baseline),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return entries;
}