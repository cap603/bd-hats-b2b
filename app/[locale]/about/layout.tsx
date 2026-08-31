import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/about";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Acerca de BD Hats | Fábrica de Gorras Personalizadas en Baoding, China"
        : "About BD Hats | 12-Year Custom Hat Factory in Baoding, China",
    description:
      locale === "es"
        ? "De un taller de 15 personas a una instalación de 50.000m² que sirve a más de 300 marcas globales. Conoce la trayectoria, misión, equipo y capacidades de Baoding Junyang desde 2014."
        : "From a 15-person workshop to a 50,000sqm facility serving 300+ global brands. Learn about Baoding Junyang's journey, mission, team, and factory capabilities since 2014.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Acerca de BD Hats | Nuestra Historia y Misión de Fábrica"
          : "About BD Hats | Our Factory Story & Mission",
      description:
        locale === "es"
          ? "12 años de excelencia en fabricación de gorras personalizadas. Más de 300 marcas, 50 países, 5M+ gorras producidas anualmente."
          : "12 years of custom hat manufacturing excellence. 300+ brands, 50+ countries, 5M+ caps produced annually.",
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
