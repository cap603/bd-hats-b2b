import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/5-panel-vs-6-panel-caps";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Gorras de 5 Paneles vs 6 Paneles: ¿Cuál Elegir para Tu Marca? | BD Hats"
        : "5-Panel vs 6-Panel Caps: Which Should Your Brand Choose? | BD Hats",
    description:
      locale === "es"
        ? "Comparativa de gorras de 5 y 6 paneles: construcción del frente, superficie para logo, compatibilidad con bordado 3D puff, costo y cuál vende más. Datos de fábrica, MOQ 200 uds."
        : "5-panel vs 6-panel caps compared: front panel construction, logo area, 3D puff suitability, cost differences and which style sells better. Factory data, MOQ 200 pcs, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Gorras de 5 Paneles vs 6 Paneles — Comparativa de Fábrica"
          : "5-Panel vs 6-Panel Caps — A Factory Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de construcción, superficie de logo y costos entre gorras de 5 y 6 paneles."
          : "Real construction, logo-area and cost differences between 5-panel and 6-panel caps.",
      images: [
        {
          url: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
          width: 960,
          height: 960,
          alt: "5-panel vs 6-panel custom caps",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
