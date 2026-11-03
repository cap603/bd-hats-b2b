export const locales = ["en", "es", "de", "fr", "pt", "it", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
