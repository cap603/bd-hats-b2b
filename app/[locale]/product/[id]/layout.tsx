import type { Metadata } from "next";
import { HATS } from "../../../lib/products";
import { priceLabel } from "../../../lib/price";
import { getAlternateLanguages } from "../../../lib/seo";

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
  const { locale, id } = await params;
  const hat = HATS.find((h) => String(h.id) === String(id));

  // Build JSON-LD Product & Offer Schema
  const schema = hat
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: hat.name,
        image: `https://bdjunyang.com${hat.img}`,
        description: hat.fullDesc || hat.desc,
        sku: `JY-${hat.id.substring(0, 8).toUpperCase()}`,
        brand: {
          "@type": "Brand",
          name: "BD Hats",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
          url: "https://bdjunyang.com",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "3.50",
          highPrice: "7.00",
          offerCount: "1",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
          },
        },
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {children}
    </>
  );
}
