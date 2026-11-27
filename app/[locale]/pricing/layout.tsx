import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/pricing";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    // absolute: avoid the root layout's "| BD Hats" template duplicating the
    // brand suffix (was rendering "… | BD Hats | BD Hats").
    title: {
      absolute:
        locale === "es"
          ? "Precios y MOQ de Gorras Personalizadas | BD Hats"
          : "Custom Hat Pricing & MOQ Guide | BD Hats",
    },
    description:
      locale === "es"
        ? "Guía de precios transparente para gorras personalizadas: cuánto cuestan las gorras a medida, FOB vs CIF, MOQ 200uds, costos de flete aéreo vs marítimo, tarifas de muestras y descuentos por volumen. Sourcing directo desde China."
        : "Transparent pricing guide for custom hats: how much do custom caps cost, FOB vs CIF explained, MOQ 200pcs, air freight vs sea freight costs, sample fees, and volume discounts. Direct sourcing from China.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Precios y Envío de Gorras Personalizadas | BD Hats"
          : "Custom Hat Pricing & Shipping Guide | BD Hats",
      description:
        locale === "es"
          ? "Desglose completo de costos para pedidos de gorras personalizadas: precios al por mayor, MOQ, métodos de envío, costos de muestras y descuentos por volumen."
          : "Complete cost breakdown for custom hat orders: wholesale pricing, MOQ, shipping methods, sample costs, and volume discounts explained.",
    },
  };
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
