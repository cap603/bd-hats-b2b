import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-hat-tech-pack-template";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Plantilla Tech Pack de Gorras Gratis | Ficha Técnica Vectorial"
        : "Custom Hat Tech Pack Template | Free Vector Cap Guide",
    description:
      locale === "es"
        ? "Descarga plantillas tech pack vectoriales para gorras (AI/PDF). Medidas de corona, costuras, bordado 3D, MOQ 200 y revisión técnica gratuita en 2 horas."
        : "Free custom hat tech pack template (AI/PDF). 6-panel, 5-panel, trucker & beanie vector flats with exact crown specs, stitch limits, and 2-hr factory review.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title: "Custom Hat Tech Pack Template & Factory Sourcing Guide | BD Hats",
      description: "Production-ready 2D vector flat templates for 6-panel, 5-panel, trucker, and beanie headwear. Direct factory engineering specs.",
    },
  };
}

export default function TechPackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
