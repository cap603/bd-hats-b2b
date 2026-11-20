import type { Metadata } from "next";
import { HATS } from "../../../lib/products";
import { priceLabel } from "../../../lib/price";
import { getAlternateLanguages } from "../../../lib/seo";

// Pre-render en/es product pages at build time; other locales render on demand
// (they are noindex,follow via middleware until translated).
export function generateStaticParams() {
  return ["en", "es"].flatMap((locale) =>
    HATS.map((h) => ({ locale, id: String(h.id) }))
  );
}

export async function generateMetadata({ params }: { params: { locale: string; id: string } }): Promise<Metadata> {
  const { locale, id } = await params;
  const hat = HATS.find((h) => String(h.id) === String(id));
  if (!hat) return { title: "Product Not Found | BD Hats" };

  const path = `/product/${hat.id}`;
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);
  const description = `Custom wholesale ${hat.name}. High-density 3D embroidery, MOQ ${hat.moq}pcs, ${priceLabel(hat.price)}. 7-day samples & SGS verified. Get factory quote.`;

  const shortName = hat.name.length > 36 ? hat.name.substring(0, 36).trim() : hat.name;

  return {
    title: {
      absolute: `${shortName} | BD Hats`,
    },
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: `${hat.name} | BD Hats Factory`,
      description: `Custom wholesale ${hat.name}. ${priceLabel(hat.price)} · MOQ ${hat.moq}pcs · Factory direct from Baoding Junyang.`,
      images: [hat.img],
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: `${hat.name} | BD Hats`,
      description,
      images: [hat.img],
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string; id: string };
}) {
  // Product JSON-LD is emitted exactly once by page.tsx (single schema source).
  // The duplicate hardcoded 3.50–7.00 schema that used to live here conflicted
  // with the page schema (different SKU/brand/price) and weakened rich-results.
  return <>{children}</>;
}
