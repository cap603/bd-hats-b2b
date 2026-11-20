import { MetadataRoute } from "next";
import { HATS } from "./lib/products";
// Sitemap scope (2026-11-20): en/es full site + ja/pt/it homepages only.
// Non-en/es subpages are noindex,follow via middleware (pseudo-localization).

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bdjunyang.com";

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["en", "es"]) {
    const lc = `/${locale}`;

    entries.push(
      {
        url: `${baseUrl}${lc}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1,
      },
      {
        url: `${baseUrl}${lc}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/guide`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/materials`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/pricing`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/wholesale-snapbacks`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-trucker-hats`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/oem-hat-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-dad-hats-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/wholesale-blank-caps-supplier`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/private-label-hat-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-5-panel-caps-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/corporate-custom-hats-supplier`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/bulk-custom-hats-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-beanies-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-bucket-hats-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}${lc}/custom-corduroy-caps-manufacturer`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}${lc}/custom-golf-performance-hats`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      },
      // Comparison pages — machine-extractable X vs Y content (AI-citation friendly)
      {
        url: `${baseUrl}${lc}/compare/5-panel-vs-6-panel-caps`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/compare/flat-embroidery-vs-3d-puff`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/compare/cotton-twill-vs-brushed-cotton-vs-canvas`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/compare/snapback-vs-strapback-vs-buckle`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}${lc}/compare/merino-wool-vs-acrylic-beanies`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      },
      {
        url: `${baseUrl}${lc}/custom-hat-cost-index-2026`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.95,
      },
      {
        url: `${baseUrl}${lc}/custom-hat-tech-pack-template`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.95,
      },
      {
        url: `${baseUrl}${lc}/top-hat-manufacturers-in-china`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.95,
      },
    );

    for (const product of HATS) {
      entries.push({
        url: `${baseUrl}${lc}/product/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      });
    }
  }

  // ja/pt/it homepages are already indexed with localized UI — keep them.
  // Their subpages serve English body copy and are noindex,follow via middleware.
  for (const locale of ["ja", "pt", "it"]) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });
  }

  return entries;
}
