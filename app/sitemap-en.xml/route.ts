import { urlsetXml, XML_HEADERS } from "../lib/sitemap-xml";
import { localeUrls } from "../lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(urlsetXml(localeUrls("en")), { headers: XML_HEADERS });
}