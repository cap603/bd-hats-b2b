export const SITE_URL = "https://bdjunyang.com";

/**
 * Locales with fully translated, indexable content (2026-11-20 containment).
 * de/fr/pt/it/ja landing & comparison pages currently serve English body copy
 * (pseudo-localization). GSC confirmed 22 canonical conflicts and 249
 * discovered-but-never-crawled URLs from this. Until human translation lands,
 * only en/es are declared as hreflang alternates and submitted in the sitemap.
 * ja/pt/it homepages remain indexable (already indexed, localized UI strings).
 */
export const indexableLocales = ["en", "es"] as const;

export function getAlternateLanguages(path: string): Record<string, string> {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};
  for (const locale of indexableLocales) {
    languages[locale] = `${SITE_URL}/${locale}${cleanPath}`;
  }
  languages["x-default"] = `${SITE_URL}/en${cleanPath}`;
  return languages;
}