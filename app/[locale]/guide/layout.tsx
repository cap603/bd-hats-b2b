import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/guide";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Guía de Fabricación de Gorras Personalizadas B2B | Cómo Comprar Gorras al por Mayor desde China"
        : "B2B Custom Hat Manufacturing Guide | How to Source Wholesale Caps from China",
    description:
      locale === "es"
        ? "Guía completa para compradores B2B: cómo elegir una fábrica de gorras, tipos de bordado, negociación de MOQ, estándares de control de calidad y logística de envío. Consejos de una fábrica con 12 años de experiencia."
        : "Complete guide for B2B buyers: how to choose a custom hat factory, embroidery types explained, MOQ negotiation, quality control standards, and shipping logistics. Expert advice from a 12-year factory.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Fábrica de Gorras Personalizadas para Compradores B2B | BD Hats"
          : "Custom Hat Factory Guide for B2B Buyers | BD Hats",
      description:
        locale === "es"
          ? "Todo lo que necesitas saber antes de pedir gorras personalizadas desde China: selección de fábrica, tipos de bordado, control de calidad y envío."
          : "Everything you need to know before ordering custom caps from China — factory selection, embroidery types, QC, and shipping.",
    },
  };
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
