import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "China vs Vietnam vs Bangladés: ¿Dónde Fabricar Gorras Personalizadas?"
        : "China vs Vietnam vs Bangladesh: Where Should You Source Custom Hats?",
    description:
      locale === "es"
        ? "Comparativa neutral de abastecimiento de gorras: China, Vietnam y Bangladés en cadena de suministro, MOQ, muestreo, comunicación, plazos, logística y tamaño de pedido ideal. MOQ de fábrica 200 uds."
        : "A neutral headwear sourcing comparison of China, Vietnam and Bangladesh: supply chain depth, MOQ flexibility, sampling speed, communication, delivery, logistics and best-fit order size. Factory MOQ 200 pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "China vs Vietnam vs Bangladés — Comparativa de Abastecimiento de Gorras"
          : "China vs Vietnam vs Bangladesh — Custom Hat Sourcing Compared",
      description:
        locale === "es"
          ? "Dónde conviene fabricar gorras personalizadas según el tamaño del programa y la complejidad de la decoración."
          : "Where to source custom hats, judged by programme size and decoration complexity rather than by country alone.",
      images: [
        {
          url: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
          width: 960,
          height: 960,
          alt: "Custom hat sourcing comparison",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
