import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/cotton-twill-vs-brushed-cotton-vs-canvas";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Sarga vs Algodón Cepillado vs Lona: Guía | BD Hats"
          : "Cotton Twill vs Brushed Cotton vs Canvas | BD Hats",
    },
    description:
      locale === "es"
        ? "Comparativa de telas de gorras B2B: precios FOB, gramajes GSM, tacto y durabilidad entre sarga, algodón cepillado y canvas. MOQ 200 uds con sourcing directo."
        : "Cap fabric cost & weight guide: FOB rates, GSM weights, hand feel and durability compared between cotton twill, brushed cotton and canvas. Direct factory MOQ 200pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats",
      title:
        locale === "es"
          ? "Sarga de Algodón vs Algodón Cepillado vs Canvas — Comparativa B2B"
          : "Cotton Twill vs Brushed Cotton vs Canvas — A B2B Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de tacto, estructura, envejecimiento y precio entre las tres telas de algodón más usadas en gorras."
          : "Real hand-feel, structure, ageing and price differences between the three most-used cotton cap fabrics.",
      images: [
        {
          url: "/images/brand/junyang-logo.png",
          alt: "BD Hats · JUNYANG custom caps",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
