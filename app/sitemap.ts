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
