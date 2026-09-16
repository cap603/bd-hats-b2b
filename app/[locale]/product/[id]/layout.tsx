import type { Metadata } from "next";
import { HATS } from "../../../lib/products";
import { priceLabel } from "../../../lib/price";

export async function generateMetadata({ params }: { params: { locale: string; id: string } }): Promise<Metadata> {
  const { locale, id } = await params;
  const hat = HATS.find((h) => String(h.id) === String(id));
  if (!hat) return { title: "Product Not Found | BD Hats" };

  const path = `/product/${hat.id}`;
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title: `${hat.name} | Custom Wholesale`,
    description: `${hat.desc} Price: ${priceLabel(hat.price)}. MOQ ${hat.moq}pcs. Custom ${hat.specs.material} material with ${hat.specs.logo}. Factory direct from Baoding Junyang.`,
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
      description: `Factory direct ${hat.name}. ${priceLabel(hat.price)}.`,
      images: [hat.img],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
