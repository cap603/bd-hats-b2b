import { HATS } from "./products";

// Shared sitemap data for the hand-rolled sitemap routes.
//
// Why hand-rolled: Next.js 14.2's `generateSitemaps` produced working shard
// files but its /sitemap.xml index route threw
// `Cannot find module './sitemap.xml.json'` (MODULE_NOT_FOUND) — the index
// manifest is never emitted. Route handlers below build the index and shards
// directly, so the entry point Google reads from robots.txt stays healthy.
//
// Scope: en/es full site + ja/pt/it homepages (2026-11-20 decision).
//
// lastmod discipline: each URL carries its last *real* content update
// (CONTENT_UPDATED). Unlisted pages fall back to the 2026-11-20 baseline
// deploy — not new Date(), which made every URL look freshly updated on every
// build and trained Google to ignore the signal.
export const SITE = "https://bdjunyang.com";
export const BASELINE = "2026-11-20";

export const CONTENT_UPDATED: Record<string, string> = {
  "/en/compare/cotton-twill-vs-brushed-cotton-vs-canvas": "2026-11-23",
  "/es/compare/cotton-twill-vs-brushed-cotton-vs-canvas": "2026-11-23",
  "/en/guide": "2026-11-23",
  "/es/guide": "2026-11-23",
  "/en/pricing": "2026-11-23",
  "/es/pricing": "2026-11-23",
  "/en/resources": "2026-11-24",
  "/es/resources": "2026-11-24",
  "/en/resources/hat-sample-approval-guide": "2026-11-24",
  "/es/resources/hat-sample-approval-guide": "2026-11-24",
  "/en/resources/vet-hat-manufacturer-checklist": "2026-11-24",
  "/es/resources/vet-hat-manufacturer-checklist": "2026-11-24",
  "/en/resources/custom-hat-moq-guide": "2026-11-24",
  "/es/resources/custom-hat-moq-guide": "2026-11-24",
  "/en/resources/import-hats-us-compliance": "2026-11-24",
  "/es/resources/import-hats-us-compliance": "2026-11-24",
  "/en/resources/safe-sourcing-trade-assurance": "2026-11-24",
  "/es/resources/safe-sourcing-trade-assurance": "2026-11-24",
  ...Object.fromEntries(
    ["en", "es"].flatMap((l) =>
      HATS.map((h) => [`/${l}/product/${h.id}`, "2026-11-23"])
    )
  ),
};

const CORE_PAGES: Array<{
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
  { path: "/resources", priority: 0.9, freq: "weekly" },
  { path: "/resources/hat-sample-approval-guide", priority: 0.85, freq: "monthly" },
  { path: "/resources/vet-hat-manufacturer-checklist", priority: 0.85, freq: "monthly" },
  { path: "/resources/custom-hat-moq-guide", priority: 0.85, freq: "monthly" },
  { path: "/resources/import-hats-us-compliance", priority: 0.85, freq: "monthly" },
  { path: "/resources/safe-sourcing-trade-assurance", priority: 0.85, freq: "monthly" },
];

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export function localeUrls(locale: "en" | "es"): SitemapUrl[] {
  const updated = (path: string) => CONTENT_UPDATED[`/${locale}${path}`] ?? BASELINE;
  const urls: SitemapUrl[] = [
    { loc: `${SITE}/${locale}`, lastmod: BASELINE, changefreq: "weekly", priority: 1 },
  ];
  for (const p of CORE_PAGES) {
    urls.push({
      loc: `${SITE}/${locale}${p.path}`,
      lastmod: updated(p.path),
      changefreq: p.freq,
      priority: p.priority,
    });
  }
  for (const hat of HATS) {
    urls.push({
      loc: `${SITE}/${locale}/product/${hat.id}`,
      lastmod: updated(`/product/${hat.id}`),
      changefreq: "monthly",
      priority: 0.9,
    });
  }
  return urls;
}