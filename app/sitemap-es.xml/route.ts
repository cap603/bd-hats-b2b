import { urlsetXml, XML_HEADERS } from "../lib/sitemap-xml";
import { localeUrls, SITE, BASELINE } from "../lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  const urls = localeUrls("es");
  // ja/pt/it homepages are already indexed with localized UI — keep them in
  // this shard alongside the Spanish core pages.
  for (const locale of ["ja", "pt", "it"]) {
    urls.push({
      loc: `${SITE}/${locale}`,
      lastmod: BASELINE,
      changefreq: "weekly",
      priority: 0.8,
    });
  }
  return new Response(urlsetXml(urls), { headers: XML_HEADERS });
}