import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/guide/importing-custom-hats-from-china";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Cómo Importar Gorras de China: Aranceles y Logística B2B"
          : "Importing Custom Hats from China: Tariffs & Logistics Guide",
    },
    description:
      locale === "es"
        ? "Guía B2B para importar gorras desde China: aranceles aduaneros (HS 6505.00), tiempos de transporte marítimo y aéreo, términos FOB vs DDP y control de calidad."
        : "Complete guide for importing custom caps and headwear from China. US tariffs (HS Code 6505.00), ocean vs air transit times, FOB vs DDP terms, and QC audit SOP.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Cómo Importar Gorras de China: Aranceles y Logística B2B"
          : "Importing Custom Hats from China: Tariffs & Logistics Guide",
      description:
        locale === "es"
          ? "Guía B2B para importar gorras desde China: aranceles aduaneros (HS 6505.00), tiempos de transporte marítimo y aéreo, términos FOB vs DDP y control de calidad."
          : "Complete guide for importing custom caps and headwear from China. US tariffs (HS Code 6505.00), ocean vs air transit times, FOB vs DDP terms, and QC audit SOP.",
    },
  };
}

export default function ImportingGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
