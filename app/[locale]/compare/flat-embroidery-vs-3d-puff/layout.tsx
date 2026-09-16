import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/flat-embroidery-vs-3d-puff";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Bordado Plano vs Bordado 3D Puff: ¿Cuál Elegir para Tu Logo?"
        : "Flat Embroidery vs 3D Puff: Which Should Your Logo Use?",
    description:
      locale === "es"
        ? "Bordado plano vs bordado 3D puff: altura y aspecto, estructura de costo, durabilidad, tamaño mínimo de letra, tipos de logo y aplicaciones. Datos de fábrica, MOQ 200 uds, muestras en 7 días."
        : "Flat embroidery vs 3D puff embroidery compared: height and appearance, cost structure, durability, minimum lettering size, best logo types and typical uses. Factory data, MOQ 200 pcs, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Bordado Plano vs Bordado 3D Puff — Comparativa de Fábrica"
          : "Flat Embroidery vs 3D Puff — A Factory Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de costo, relieve y durabilidad entre bordado plano y bordado 3D puff."
          : "Real cost, relief and durability differences between flat embroidery and 3D puff.",
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
