import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/top-hat-manufacturers-in-china";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Top Fabricantes de Gorras en China 2026: Guía B2B"
          : "Top Hat Manufacturers in China 2026: Sourcing Guide",
    },
    description:
      locale === "es"
        ? "Guía B2B de fabricantes de gorras en China 2026. Análisis de clústeres en Hebei y Guangdong, pedidos mínimos (MOQ), precios FOB y auditoría de calidad."
        : "Top hat manufacturers in China compared for 2026. Audit industrial clusters in Hebei and Guangdong, factory MOQs, FOB pricing tiers, and OEM capabilities.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Top Fabricantes de Gorras en China 2026: Guía B2B"
          : "Top Hat Manufacturers in China 2026: Sourcing Guide",
      description:
        locale === "es"
          ? "Guía B2B de fabricantes de gorras en China 2026. Análisis de clústeres en Hebei y Guangdong, pedidos mínimos (MOQ), precios FOB y auditoría de calidad."
          : "Top hat manufacturers in China compared for 2026. Audit industrial clusters in Hebei and Guangdong, factory MOQs, FOB pricing tiers, and OEM capabilities.",
    },
  };
}

export default function TopManufacturersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
