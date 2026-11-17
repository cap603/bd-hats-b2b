import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "China vs Vietnam vs Bangladés: Precios y MOQ | BD Hats"
          : "China vs Vietnam vs Bangladesh: Hat Sourcing Rates | BD Hats",
    },
    description:
      locale === "es"
        ? "Comparativa de producción de gorras 2026: costos FOB, tiempos de entrega y MOQ real entre China, Vietnam y Bangladés. Guía para compradores B2B, fábrica MOQ 200 uds."
        : "2026 custom hat sourcing benchmark: FOB cost comparison, production lead times and realistic MOQs across China, Vietnam and Bangladesh. Factory direct MOQ 200pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "China vs Vietnam vs Bangladés — Comparativa de Abastecimiento de Gorras"
          : "China vs Vietnam vs Bangladesh — Custom Hat Sourcing Compared",
      description:
        locale === "es"
          ? "Dónde conviene fabricar gorras personalizadas según el tamaño del programa y la complejidad de la decoración."
          : "Where to source custom hats, judged by programme size and decoration complexity rather than by country alone.",
      images: [
        {
          url: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
          width: 960,
          height: 960,
          alt: "Custom hat sourcing comparison",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
