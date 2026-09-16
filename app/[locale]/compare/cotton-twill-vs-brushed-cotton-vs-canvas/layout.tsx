import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/cotton-twill-vs-brushed-cotton-vs-canvas";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Sarga de Algodón vs Algodón Cepillado vs Canvas: ¿Cuál Elegir?"
        : "Cotton Twill vs Brushed Cotton vs Canvas Caps: Which to Choose?",
    description:
      locale === "es"
        ? "Sarga de algodón, algodón cepillado y canvas comparados: tacto, peso y estructura, transpiración, durabilidad, teñido y acabados lavados, precio y estilos de gorra. Datos de fábrica, MOQ 200 uds."
        : "Cotton twill, brushed cotton and canvas compared: hand feel, weight and structure, breathability, durability, dyeing and washed finishes, price position and cap styles. Factory data, MOQ 200 pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Sarga de Algodón vs Algodón Cepillado vs Canvas — Comparativa de Fábrica"
          : "Cotton Twill vs Brushed Cotton vs Canvas — A Factory Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de tacto, estructura, envejecimiento y precio entre las tres telas de algodón más usadas en gorras."
          : "Real hand-feel, structure, ageing and price differences between the three most-used cotton cap fabrics.",
      images: [
        {
          url: "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png",
          alt: "BD Hats · JUNYANG custom cap factory",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
