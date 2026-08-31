import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/materials";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Guía de Materiales para Gorras Personalizadas | Algodón, Lana, Poliéster y Más"
        : "Custom Hat Materials Guide | Cotton, Wool, Polyester & More",
    description:
      locale === "es"
        ? "Guía completa de materiales para gorras personalizadas: sarga de algodón, algodón cepillado, lana, poliéster, nailon, lona. Conoce los tipos de cierre (snapback, hebilla, velcro, ajuste fijo) y la construcción de paneles para tu pedido al por mayor."
        : "Complete guide to custom hat materials: cotton twill, brushed cotton, wool, polyester, nylon, canvas. Learn closure types (snapback, buckle, velcro, fitted) and panel construction for your wholesale cap order.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      title:
        locale === "es"
          ? "Guía de Materiales y Opciones de Personalización de Gorras | Fábrica BD Hats"
          : "Hat Materials & Customization Options Guide | BD Hats Factory",
      description:
        locale === "es"
          ? "Todo sobre tejidos, cierres, paneles y opciones personalizadas de gorras. Sarga de algodón, snapback, hebilla, ajuste fijo: elige lo correcto para tu marca."
          : "Everything about cap fabrics, closures, panels, and custom options. Cotton twill, snapback, buckle, fitted — make the right choice for your brand.",
    },
  };
}

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
