import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/snapback-vs-strapback-vs-buckle";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Snapback vs Strapback vs Hebilla: ¿Qué Cierre Elegir?"
        : "Snapback vs Strapback vs Buckle: Which Closure Should You Choose?",
    description:
      locale === "es"
        ? "Comparativa de cierres traseros para gorras personalizadas: rango de ajuste, aspecto, durabilidad, riesgo de devoluciones y qué cierre conviene a cada público. Datos de fábrica, MOQ 200 uds."
        : "Snapback vs strapback vs buckle closures compared: adjustment range, perceived tier, durability, hardware cost and return-rate risk. Factory data, MOQ 200 pcs, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Snapback vs Strapback vs Hebilla — Comparativa de Fábrica"
          : "Snapback vs Strapback vs Buckle — A Factory Comparison",
      description:
        locale === "es"
          ? "Ajuste, aspecto, durabilidad y riesgo de devoluciones de los tres cierres traseros estándar."
          : "Fit, look, durability and return-rate risk across the three standard back closures.",
      images: [
        {
          url: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
          width: 960,
          height: 960,
          alt: "Custom caps with snapback, strapback and buckle closures",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
