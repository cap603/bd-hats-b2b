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
        ? "Gorras Snapback al por Mayor | Snapbacks Personalizados"
        : "Wholesale Snapback Hats | Custom Programs",
    description:
      locale === "es"
        ? "Gorras snapback al por mayor con sourcing directo en China. Bordado 3D puff, MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días y cotización en 2h."
        : "Custom snapbacks, direct sourcing with 3D puff embroidery. MOQ 200pcs, $3.50-$7.00 FOB, 7-day samples. Custom snapback programs — quote in 2h.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Snapback Personalizadas: Sourcing Directo | BD Hats"
          : "Wholesale Snapback Hats — Custom Snapback Sourcing | BD Hats",
      description:
        locale === "es"
          ? "Gorras snapback personalizadas a precio de fábrica. Bordado 3D puff, más de 30 colores, MOQ 200uds, producción en 15 días. Directo desde nuestras fábricas asociadas."
          : "Custom snapback hats at factory prices. 3D puff embroidery, 30+ colors, MOQ 200pcs, 15-day production. Direct from our partner factories.",
    },
  };
}

export default function SnapbacksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
