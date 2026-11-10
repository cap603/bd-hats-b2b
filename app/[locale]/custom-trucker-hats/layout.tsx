import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-trucker-hats";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Gorras Trucker Personalizadas al por Mayor | Fábrica de Malla"
        : "Custom Trucker Hats Wholesale | Factory Direct",
    description:
      locale === "es"
        ? "Gorras trucker personalizadas directo de fábrica en China. Frente de espuma y malla, bordado 3D, MOQ 200uds, $3.50-$6.50 FOB, muestras en 7 días y SGS verificado."
        : "Custom trucker hats factory direct from China. Foam front & mesh back, 3D embroidery & print, MOQ 200pcs, $3.50-$6.50 FOB, 7-day samples. SGS verified since 2014.",
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
