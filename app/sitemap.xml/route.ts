import { indexXml, XML_HEADERS } from "../lib/sitemap-xml";
import { SITE } from "../lib/sitemap-data";

// Sitemap index. Hand-rolled because Next.js 14.2's generateSitemaps index
// route threw `Cannot find module './sitemap.xml.json'`.
export const dynamic = "force-static";

export function GET() {
  return new Response(indexXml([`${SITE}/sitemap-en.xml`, `${SITE}/sitemap-es.xml`]), {
    headers: XML_HEADERS,
  });
}