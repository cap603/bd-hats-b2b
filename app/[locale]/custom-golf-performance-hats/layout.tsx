import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-golf-performance-hats";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Gorras de Golf de Rendimiento al por Mayor | BD Hats"
          : "Custom Performance Golf Hats | BD Hats",
    },
    description:
      locale === "es"
        ? "Gorras de golf personalizadas. Tejido DWR impermeable, perforación láser, logotipos de silicona y TPU, MOQ 200uds, FOB desde $5.20. Muestras rápidas."
        : "Custom performance golf hats. Waterproof DWR fabric, laser-cut ventilation, silicone & TPU logos, MOQ 200pcs, FOB from $5.20. 7-day fast samples.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title: "Custom Performance Golf Hats | BD Hats",
      description: "Tour-grade laser-perforated waterproof performance golf hats direct sourcing. MOQ 200 pcs.",
    },
  };
}

export default function GolfHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
