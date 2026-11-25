import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/blog";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Blog de Fabricación de Gorras B2B | BD Hats"
          : "Headwear Sourcing & Manufacturing Blog | BD Hats",
    },
    description:
      locale === "es"
        ? "Artículos técnicos, guías de abastecimiento, análisis de costes FOB, normativas aduaneras y consejos de fabricación de gorras para compradores B2B."
        : "Direct factory insights, technical headwear specs, FOB pricing benchmarks, customs clearance guides, and quality control SOPs for global apparel brands.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Blog de Fabricación de Gorras B2B | BD Hats"
          : "Headwear Sourcing & Manufacturing Blog | BD Hats",
      description:
        locale === "es"
          ? "Artículos técnicos, guías de abastecimiento, análisis de costes FOB y normativas de importación de gorras desde China."
          : "Direct factory insights, technical headwear specs, FOB pricing benchmarks, and customs clearance guides for custom caps.",
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
