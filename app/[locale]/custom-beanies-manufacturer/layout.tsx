import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-beanies-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorros de Punto | Beanies al por Mayor"
        : "Custom Beanies Manufacturer | Wholesale Knit Hats China",
    description:
      locale === "es"
        ? "Gorros de punto personalizados directo de fábrica: cuff, con pompón, jacquard y parches. Lana y acrílico. MOQ 200uds, $3.50-$7.00 FOB, muestras rápidas en 7 días."
        : "Custom knit beanies direct from factory: cuffed, pom-pom, jacquard & patch styles. Wool & acrylic blends, MOQ 200pcs, $3.50-$7.00 FOB, 7-day fast samples.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorros de Punto Personalizados al por Mayor | BD Hats"
          : "Custom Beanies Wholesale — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "Gorros de invierno con tu marca: jacquard, bordado y parches tejidos. MOQ 200uds, producción en 15-20 días."
          : "Winter beanies for your brand: jacquard knit, embroidery and woven patches. MOQ 200pcs, 15-20 day production.",
    },
  };
}

export default function BeaniesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
