import type { Metadata } from "next";
import { HATS } from "../../../lib/products";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const hat = HATS.find(h => String(h.id) === String(params.id));
  if (!hat) return { title: "Product Not Found | BD Hats" };

  return {
    title: `${hat.name} | Custom Wholesale | BD Hats Factory`,
    description: `${hat.desc} Price: ${hat.price} FOB. MOQ ${hat.moq}pcs. Custom ${hat.specs.material} material with ${hat.specs.logo}. Factory direct from Baoding Junyang.`,
    openGraph: {
      title: `${hat.name} | BD Hats Factory`,
      description: `Custom wholesale ${hat.name}. ${hat.price} FOB · MOQ ${hat.moq}pcs · Factory direct from Baoding Junyang.`,
      images: [hat.img],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${hat.name} | BD Hats`,
      description: `Factory direct ${hat.name}. ${hat.price} FOB.`,
      images: [hat.img],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
