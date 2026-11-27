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
        ? "Sourcing OEM de Gorras en China | Sourcing Directo"
        : "OEM Hat Manufacturing China | Direct Sourcing",
    description:
      locale === "es"
        ? "Socio OEM/ODM de gorras en China. líneas de bordado multicabezal de precisión, fábricas asociadas seleccionadas. Gorras de béisbol, snapbacks, gorros. MOQ 200uds, muestras en 7 días."
        : "OEM/ODM hat manufacturing in China. precision multi-head embroidery lines, vetted partner facilities. Custom baseball caps, snapbacks, beanies, MOQ 200pcs, 7-day samples.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "OEM de Gorras en China: Marca Propia | BD Hats"
          : "OEM Hat Manufacturing China — Private Label Programs | BD Hats",
      description:
        locale === "es"
          ? "Fabricación OEM/ODM completa de gorras: diseño, muestra, producción, control de calidad y empaque. Más de 300 marcas atendidas en más de 50 países. Sourcing directo desde 2014."
          : "Complete OEM/ODM hat manufacturing: design, sample, production, QC, packaging. 300+ brands served in 50+ countries. Direct sourcing since 2014.",
    },
  };
}

export default function OemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
