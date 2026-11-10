import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/wholesale-snapbacks";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Gorras Snapback al por Mayor | Fabricante de Snapbacks"
        : "Wholesale Snapback Hats | Custom Manufacturer",
    description:
      locale === "es"
        ? "Gorras snapback al por mayor directo de fábrica en China. Bordado 3D puff, MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días y SGS verificado. Cotización en 12h."
        : "Factory-direct custom snapbacks with 3D puff embroidery. MOQ 200pcs, $3.50-$7.00 FOB, 7-day samples, SGS verified. Direct Chinese manufacturer — quote in 12h.",
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
