import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-trucker-hats";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Gorras Trucker Personalizadas al por Mayor | Fábrica de Gorras de Malla"
        : "Custom Trucker Hats Wholesale | Mesh Back Caps Factory",
    description:
      locale === "es"
        ? "Gorras trucker personalizadas al por mayor desde una fábrica china. Frente de espuma + espalda de malla, bordado e impresión personalizados, MOQ 200uds, precios directos de fábrica. Fabricante verificado SGS desde 2014."
        : "Wholesale custom trucker hats from a Chinese factory. Foam front + mesh back caps, custom embroidery & printing, MOQ 200pcs, factory direct pricing. SGS verified manufacturer since 2014.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Trucker Personalizadas: Fábrica al por Mayor de Espalda de Malla | BD Hats"
          : "Custom Trucker Hats — Mesh Back Wholesale Factory | BD Hats",
      description:
        locale === "es"
          ? "Gorras trucker personalizadas con frente de espuma y espalda de malla transpirable. Ideales para marcas promocionales, de bebidas y outdoor. MOQ 200uds, producción en 15 días."
          : "Custom trucker hats with foam fronts and breathable mesh backs. Ideal for promo, beverage and outdoor brands. MOQ 200pcs, 15-day production.",
    },
  };
}

export default function TruckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
