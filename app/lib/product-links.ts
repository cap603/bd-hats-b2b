/**
 * Product → category landing page + comparison-cluster mapping.
 *
 * Product pages used to carry only 6 internal links (nav + 3 related cards),
 * which left all of them as near-orphans. This table lets a product page point
 * back up to its category landing page (the page that actually ranks for the
 * category keyword) and sideways into the comparison cluster, so link equity
 * and crawl paths flow through the whole catalog.
 *
 * Keep in sync with the `category` values in products.ts.
 */

/** Category landing page — the keyword asset each product belongs under. */
export const CATEGORY_LANDING: Record<string, string> = {
  "Baseball Caps": "/custom-5-panel-caps-manufacturer",
  "Vintage Series": "/custom-dad-hats-manufacturer",
  "Sports & Active": "/custom-5-panel-caps-manufacturer",
  "Trucker Hats": "/custom-trucker-hats",
  "Snapback Caps": "/wholesale-snapbacks",
  "Beanies": "/custom-beanies-manufacturer",
  "Bucket Hats": "/custom-bucket-hats-manufacturer",
};

/** Comparison pages most relevant to each category, best first. */
export const CATEGORY_COMPARISONS: Record<string, string[]> = {
  "Baseball Caps": [
    "/compare/5-panel-vs-6-panel-caps",
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    "/compare/snapback-vs-strapback-vs-buckle",
  ],
  "Vintage Series": [
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    "/compare/flat-embroidery-vs-3d-puff",
    "/compare/5-panel-vs-6-panel-caps",
  ],
  "Sports & Active": [
    "/compare/5-panel-vs-6-panel-caps",
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    "/compare/flat-embroidery-vs-3d-puff",
  ],
  "Trucker Hats": [
    "/compare/5-panel-vs-6-panel-caps",
    "/compare/flat-embroidery-vs-3d-puff",
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
  ],
  "Snapback Caps": [
    "/compare/snapback-vs-strapback-vs-buckle",
    "/compare/flat-embroidery-vs-3d-puff",
    "/compare/5-panel-vs-6-panel-caps",
  ],
  Beanies: [
    "/compare/flat-embroidery-vs-3d-puff",
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
  ],
  "Bucket Hats": [
    "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
    "/compare/5-panel-vs-6-panel-caps",
  ],
};

/**
 * Comparison pages and support pages get short labels here — used as anchor
 * text on product pages so links read as "5-panel vs 6-panel caps" rather
 * than a raw slug.
 */
export const PAGE_LABELS: Record<string, { en: string; es: string }> = {
  "/compare/5-panel-vs-6-panel-caps": { en: "5-panel vs 6-panel caps", es: "gorras de 5 vs 6 paneles" },
  "/compare/flat-embroidery-vs-3d-puff": { en: "flat embroidery vs 3D puff", es: "bordado plano vs 3D puff" },
  "/compare/cotton-twill-vs-brushed-cotton-vs-canvas": { en: "cotton twill vs brushed cotton vs canvas", es: "sarga vs algodón cepillado vs lona" },
  "/compare/snapback-vs-strapback-vs-buckle": { en: "snapback vs strapback vs buckle", es: "snapback vs strapback vs hebilla" },
  "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing": { en: "sourcing in China vs Vietnam vs Bangladesh", es: "producir en China vs Vietnam vs Bangladés" },
  "/pricing": { en: "pricing and shipping FAQ", es: "precios y envíos" },
  "/materials": { en: "hat materials and customization guide", es: "guía de materiales y personalización" },
  "/guide": { en: "custom hat buying guide", es: "guía de compra de gorras" },
  "/custom-5-panel-caps-manufacturer": { en: "custom 5-panel caps", es: "gorras de 5 paneles" },
  "/custom-dad-hats-manufacturer": { en: "custom dad hats", es: "dad hats personalizadas" },
  "/custom-trucker-hats": { en: "custom trucker hats", es: "gorras trucker" },
  "/wholesale-snapbacks": { en: "wholesale snapbacks", es: "snapbacks al por mayor" },
  "/custom-beanies-manufacturer": { en: "custom beanies", es: "gorros personalizados" },
  "/custom-bucket-hats-manufacturer": { en: "custom bucket hats", es: "gorros bucket" },
};

export function labelFor(href: string, lang: "en" | "es"): string {
  return PAGE_LABELS[href]?.[lang] ?? href.replace(/^\/(compare\/)?/, "").replace(/-/g, " ");
}
