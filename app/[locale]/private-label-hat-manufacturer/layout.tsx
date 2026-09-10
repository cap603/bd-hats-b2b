import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/private-label-hat-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorras de Marca Privada | Gorras con Tu Marca en China"
        : "Private Label Hat Manufacturer | Custom Branded Caps China",
    description:
      locale === "es"
        ? "Fabricación de gorras de marca privada: etiquetas tejidas, colgantes personalizados, bolsas y empaque retail. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días desde nuestra fábrica verificada SGS."
        : "Private label hat manufacturing: woven labels, custom hang tags, poly bags and retail packaging. MOQ 200pcs, $3.50-$7.00 FOB, samples in 7 days from our SGS verified factory.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras de Marca Privada — Fábrica Directa | BD Hats"
          : "Private Label Hats — Factory Direct | BD Hats",
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
