import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-hat-cost-index-2026";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Índice de Costes de Gorras 2026 | Guía de Fábrica B2B"
        : "Custom Hat Cost Index 2026 | B2B Sourcing Guide",
    description:
      locale === "es"
        ? "Índice de costes de fabricación de gorras personalizadas 2026. Desglose FOB real de fábrica en algodón, pana y tejidos técnicos. Escalado por volumen y MOQ 200."
        : "2026 custom hat manufacturing cost index. Real factory FOB breakdowns across cotton, corduroy, and tech fabrics. Volume tiers, MOQ 200, and lead times.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title: "2026 Custom Hat Manufacturing Cost Index | BD Hats",
      description: "Direct factory economics and FOB cost benchmarks for global apparel brands and streetwear labels.",
    },
  };
}

export default function CostIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
