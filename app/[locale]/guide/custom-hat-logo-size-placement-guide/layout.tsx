import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/guide/custom-hat-logo-size-placement-guide";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Guía de Tamaños y Ubicación de Logos en Gorras | BD Hats"
          : "Hat Logo Size & Placement Guide: Specs for Custom Caps",
    },
    description:
      locale === "es"
        ? "Especificaciones de tamaño y ubicación de logos en gorras. Medidas máximas para frontales, laterales y cierres en gorras trucker, 5 paneles y beanies."
        : "Official custom hat logo sizing and placement specs. Maximum height and width for front panels, side embroidery, and back straps across 5-panel, trucker, and beanies.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Tamaños y Ubicación de Logos en Gorras | BD Hats"
          : "Hat Logo Size & Placement Guide: Specs for Custom Caps",
      description:
        locale === "es"
          ? "Especificaciones de tamaño y ubicación de logos en gorras. Medidas máximas para frontales, laterales y cierres en gorras trucker, 5 paneles y beanies."
          : "Official custom hat logo sizing and placement specs. Maximum height and width for front panels, side embroidery, and back straps across 5-panel, trucker, and beanies.",
    },
  };
}

export default function LogoSizeGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
