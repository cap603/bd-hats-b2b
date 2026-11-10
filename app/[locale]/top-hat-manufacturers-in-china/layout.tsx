import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/top-hat-manufacturers-in-china";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Top Fabricantes de Gorras en China | Guía B2B 2026"
        : "Top Custom Hat Manufacturers in China | 2026 B2B Sourcing Guide",
    description:
      locale === "es"
        ? "Guía y comparativa de los mejores fabricantes de gorras en China 2026. Análisis de clústeres (Hebei, Guangdong, Zhejiang), MOQ, precios FOB y auditoría de calidad."
        : "Top custom hat manufacturers in China compared for 2026. Objective audit of industrial clusters (Hebei, Guangdong, Zhejiang), MOQs, FOB pricing tiers, and lead times.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title: "Top Custom Hat Manufacturers in China | 2026 Sourcing Guide & Cluster Analysis",
      description: "Comprehensive industry benchmark comparing China's leading headwear industrial clusters, factory capabilities, MOQs, and FOB pricing for global apparel brands.",
    },
  };
}

export default function TopManufacturersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
