import { MetadataRoute } from "next";
import { HATS } from "./lib/products";
import { locales } from "../i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bdjunyang.com";

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
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

  return entries;
}
