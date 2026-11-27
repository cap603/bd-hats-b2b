import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/private-label-hat-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Gorras de Marca Privada | BD Hats"
          : "Private Label Hats in China | BD Hats",
    },
    description:
      locale === "es"
        ? "Fabricación de gorras de marca privada: etiquetas tejidas, colgantes, bolsas y empaque retail. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días y cotización en 2h."
        : "Private label hat manufacturing: woven labels, custom hang tags & retail packaging. MOQ 200pcs, $3.50-$7.00 FOB, 7-day samples. Custom hat sourcing partner in China.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras de Marca Privada — Sourcing Directo | BD Hats"
          : "Private Label Hats — Direct Sourcing | BD Hats",
      description:
        locale === "es"
          ? "Etiquetas tejidas, colgantes, empaque retail y bordado para tu marca. Más de 300 marcas atendidas desde 2014."
          : "Woven labels, hang tags, retail packaging and embroidery for your brand. 300+ brands served since 2014.",
    },
  };
}

export default function PrivateLabelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
