import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/oem-hat-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Fabricante OEM de Gorras en China | Fábrica Directa"
        : "OEM Hat Manufacturer China | Factory Direct",
    description:
      locale === "es"
        ? "Fabricante OEM/ODM de gorras en China. Más de 100 máquinas Barudan, certificación SGS/CE. Gorras de béisbol, snapbacks, gorros. MOQ 200uds, muestras en 7 días."
        : "OEM/ODM hat manufacturer in China. 100+ Barudan embroidery machines, SGS/CE certified. Custom baseball caps, snapbacks, beanies, MOQ 200pcs, 7-day samples.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Fabricante OEM de Gorras en China: Fábrica de Marca Propia | BD Hats"
          : "OEM Hat Manufacturer China — Private Label Factory | BD Hats",
      description:
        locale === "es"
          ? "Fabricación OEM/ODM completa de gorras: diseño, muestra, producción, control de calidad y empaque. Más de 300 marcas atendidas en más de 50 países. Directo de fábrica desde 2014."
          : "Complete OEM/ODM hat manufacturing: design, sample, production, QC, packaging. 300+ brands served in 50+ countries. Factory-direct since 2014.",
    },
  };
}

export default function OemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
