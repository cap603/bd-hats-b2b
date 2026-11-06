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

  return {
    title: `${hat.name} | Custom Factory`,
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

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
