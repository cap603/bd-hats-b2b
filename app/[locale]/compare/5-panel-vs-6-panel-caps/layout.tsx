import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/5-panel-vs-6-panel-caps";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Gorras de 5 vs 6 Paneles: Cuál Elegir | BD Hats"
          : "5-Panel vs 6-Panel Caps: Which to Choose | BD Hats",
    },
    description:
      locale === "es"
        ? "Comparativa de gorras de 5 y 6 paneles: construcción del frente, superficie para logo, compatibilidad con bordado 3D puff, costo y cuál vende más. Datos de producción, MOQ 200 uds."
        : "5-panel vs 6-panel caps compared: front panel construction, logo area, 3D puff suitability, cost differences and which style sells better. Production data, MOQ 200 pcs, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats",
      title:
        locale === "es"
          ? "Gorras de 5 Paneles vs 6 Paneles — Comparativa B2B"
          : "5-Panel vs 6-Panel Caps — A B2B Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de construcción, superficie de logo y costos entre gorras de 5 y 6 paneles."
          : "Real construction, logo-area and cost differences between 5-panel and 6-panel caps.",
      images: [
        {
          url: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
          width: 960,
          height: 960,
          alt: "5-panel vs 6-panel custom caps",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
