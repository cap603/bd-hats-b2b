import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/wholesale-snapbacks";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Gorras Snapback al por Mayor | Fabricante de Snapbacks Personalizadas"
        : "Wholesale Snapback Hats | Custom Snapback Manufacturer",
    description:
      locale === "es"
        ? "Gorras snapback al por mayor directo de fábrica desde China. Snapbacks personalizadas con bordado 3D puff, MOQ 200uds, $0.98-$3.90 FOB, verificadas SGS. Programa de muestras gratuitas: cotización en 12 horas."
        : "Factory-direct wholesale snapback hats from China. Custom snapbacks with 3D puff embroidery, MOQ 200pcs, $0.98-$3.90 FOB, SGS verified. Free samples program — get your quote in 12 hours.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Snapback Personalizadas: Fábrica Directa | BD Hats"
          : "Wholesale Snapback Hats — Custom Snapback Factory | BD Hats",
      description:
        locale === "es"
          ? "Gorras snapback personalizadas a precio de fábrica. Bordado 3D puff, más de 30 colores, MOQ 200uds, producción en 15 días. Directo desde nuestra fábrica verificada SGS."
          : "Custom snapback hats at factory prices. 3D puff embroidery, 30+ colors, MOQ 200pcs, 15-day production. Direct from our SGS-verified factory.",
    },
  };
}

export default function SnapbacksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
