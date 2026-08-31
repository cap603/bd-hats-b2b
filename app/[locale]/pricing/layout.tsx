import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/pricing";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Guía de Precios, MOQ y Envío de Gorras Personalizadas | Desglose de Costos al por Mayor"
        : "Custom Hat Pricing, MOQ & Shipping Guide | Wholesale Cost Breakdown",
    description:
      locale === "es"
        ? "Guía de precios transparente para gorras personalizadas: cuánto cuestan las gorras a medida, FOB vs CIF, MOQ 200uds, costos de flete aéreo vs marítimo, tarifas de muestras y descuentos por volumen. Directo de fábrica desde China."
        : "Transparent pricing guide for custom hats: how much do custom caps cost, FOB vs CIF explained, MOQ 200pcs, air freight vs sea freight costs, sample fees, and volume discounts. Factory-direct from China.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Precios y Envío de Gorras Personalizadas | Fábrica BD Hats"
          : "Custom Hat Pricing & Shipping Guide | BD Hats Factory",
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
