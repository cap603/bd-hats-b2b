import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/snapback-vs-strapback-vs-buckle";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Snapback vs Strapback vs Hebilla: Costos y Ajuste | BD Hats"
          : "Snapback vs Strapback vs Buckle: Cap Closures | BD Hats",
    },
    description:
      locale === "es"
        ? "Guía B2B de cierres traseros para gorras: costos de herrajes, durabilidad y ajuste entre snapback, strapback y hebilla de latón. MOQ de fábrica 200 uds."
        : "Cap closure comparison guide: hardware unit cost, adjustment range, durability and return risks between snapback, strapback and metal buckle. Factory MOQ 200pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Snapback vs Strapback vs Hebilla — Comparativa de Fábrica"
          : "Snapback vs Strapback vs Buckle — A Factory Comparison",
      description:
        locale === "es"
          ? "Ajuste, aspecto, durabilidad y riesgo de devoluciones de los tres cierres traseros estándar."
          : "Fit, look, durability and return-rate risk across the three standard back closures.",
      images: [
        {
          url: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
          width: 960,
          height: 960,
          alt: "Custom caps with snapback, strapback and buckle closures",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
