import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/guide";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    // absolute: the root layout appends "| BD Hats" via title.template, which
    // duplicated the brand suffix when this page used a plain title string.
    title: {
      absolute:
        locale === "es"
          ? "Guía B2B de Gorras Personalizadas | BD Hats"
          : "Custom Hat Sourcing Guide for B2B Buyers | BD Hats",
    },
    description:
      locale === "es"
        ? "Guía completa para compradores B2B: cómo elegir una fábrica de gorras, tipos de bordado, negociación de MOQ, control de calidad y logística de envío. Consejos de un socio con 12 años de experiencia."
        : "Complete guide for B2B buyers: how to choose a custom hat factory, embroidery types explained, MOQ negotiation, quality control, and shipping logistics. Expert advice from a 12-year sourcing partner.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Gorras Personalizadas para Compradores B2B | BD Hats"
          : "Custom Hat Sourcing Guide for B2B Buyers | BD Hats",
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
