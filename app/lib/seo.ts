import { locales } from "../../i18n";

export const SITE_URL = "https://bdjunyang.com";

/**
 * Generate complete hreflang alternates for all 7 supported locales + x-default.
 * Ensures search engines understand language counterparts for all indexed landing pages.
 */
export function getAlternateLanguages(path: string): Record<string, string> {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${cleanPath}`;
  }
  languages["x-default"] = `${SITE_URL}/en${cleanPath}`;
  return languages;
}
