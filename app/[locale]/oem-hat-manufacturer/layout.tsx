import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/oem-hat-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante OEM de Gorras en China | Fábrica de Gorras de Marca Propia"
        : "OEM Hat Manufacturer China | Private Label Hat Factory",
    description:
      locale === "es"
        ? "Fabricante OEM/ODM de gorras en China. Más de 100 máquinas de bordado, fábrica de 50.000m², certificada SGS/CE/REACH, control de calidad AQL 2.5. Gorras de béisbol, snapbacks y gorros de marca propia desde 2014."
        : "Full-service OEM/ODM hat manufacturer in China. 100+ embroidery machines, 50,000sqm factory, SGS/CE/REACH certified, AQL 2.5 QC. Private label baseball caps, snapbacks, beanies since 2014.",
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
