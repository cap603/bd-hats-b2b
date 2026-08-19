import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n";

// Legacy product URL redirects: old numeric IDs (from pre-slug era) → new SEO slugs.
// Keeps previously indexed Google URLs working and preserves SEO equity.
const LEGACY_PRODUCT_REDIRECTS: Record<string, string> = {
  "1": "two-tone-3d-embroidery-a-frame-cap",
  "1601670043022": "custom-3d-embroidered-5-panel-gorras",
  "1601021501358": "vintage-acid-wash-6-panel-dad-hat",
  "1601709883793": "outdoor-performance-5-panel-cap",
  "1601674075270": "structured-multi-color-baseball-cap",
  "1601440937602": "ladies-plain-blank-cotton-sports-cap",
  "1601796700808": "personalised-two-tone-a-frame-cap",
  "1601198883417": "breathable-custom-embroidered-6-panel",
};

// Canonical domain: all traffic must land on https://bdjunyang.com
// b2b.bdjunyang.com and www.bdjunyang.com → 301 to the apex domain (preserves path & query).
const CANONICAL_HOST = "bdjunyang.com";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.nextUrl.hostname;

  // Enforce canonical host (skip preview deployments like xxx.vercel.app)
  if (hostname !== CANONICAL_HOST && hostname.endsWith("bdjunyang.com")) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  // Skip static files, API, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  const effectiveLocale = hasLocale ? pathname.split("/")[1] : defaultLocale;

  // Extract the non-locale path for matching
  const pathWithoutLocale = hasLocale
    ? pathname.replace(`/${effectiveLocale}`, "") || "/"
    : pathname;

  // Legacy product URL redirect (301)
  const legacyMatch = pathWithoutLocale.match(/^\/product\/([^/]+)$/);
  if (legacyMatch) {
    const legacyId = legacyMatch[1];
    const newSlug = LEGACY_PRODUCT_REDIRECTS[legacyId];
    if (newSlug) {
      const url = request.nextUrl.clone();
      url.pathname = `/${effectiveLocale}/product/${newSlug}`;
      return NextResponse.redirect(url, 301);
    }
    // Removed products (e.g. slides) → catalog
    if (/^\d+$/.test(legacyId)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${effectiveLocale}`;
      url.hash = "catalog";
      return NextResponse.redirect(url, 301);
    }
  }

  if (!hasLocale) {
    // Redirect to default locale
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
