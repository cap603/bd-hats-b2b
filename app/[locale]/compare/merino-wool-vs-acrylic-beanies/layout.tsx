import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/merino-wool-vs-acrylic-beanies";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Gorros Lana Merina vs Acrílico | Guía de Fábrica"
        : "Merino Wool vs Acrylic Beanies | Sourcing Guide",
    description:
      locale === "es"
        ? "Comparativa de gorros de lana merina vs acrílico: coste de hilo, calidez, lavado y MOQ. Guía de fábrica para marcas de streetwear y outdoor."
        : "Merino wool vs acrylic beanies compared: yarn cost, warmth, washability, and MOQ. Factory guide for winter streetwear and outdoor knitwear drops.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title: "Merino Wool vs Acrylic Beanies | BD Hats Sourcing Guide",
      description: "Yarn cost, thermal performance, and factory MOQ comparison for custom knit beanies.",
    },
  };
}

export default function MerinoComparisonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
