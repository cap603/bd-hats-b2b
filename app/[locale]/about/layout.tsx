import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/about";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Acerca de BD Hats | Socio de Abastecimiento y Calidad en Baoding, China"
        : "About BD Hats | Headwear Sourcing & Quality Partner",
    description:
      locale === "es"
        ? "Baoding Junyang Import and Export Trade Co., Ltd. — 12 años conectando marcas globales con fábricas especializadas en China. Control de calidad antes del envío desde 2014."
        : "Baoding Junyang Import and Export Trade Co., Ltd. — 12 years connecting global apparel brands with vetted headwear makers. Pre-shipment QC and direct sourcing since 2014.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Acerca de BD Hats | Historia y Compromiso de Calidad"
          : "About BD Hats | Sourcing Partner Story & Quality Mission",
      description:
        locale === "es"
          ? "Socio integral de abastecimiento de gorras personalizadas desde 2014. Más de 300 marcas atendidas en 50+ países con control de calidad riguroso."
          : "Dedicated headwear sourcing partner since 2014. Serving 300+ brands across 50+ countries with pre-shipment QC.",
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
