import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/wholesale-blank-caps-supplier";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Proveedor de Gorras Lisas al por Mayor | Fabricante de Gorras en China"
        : "Wholesale Blank Caps Supplier | Plain Hat Manufacturer China",
    description:
      locale === "es"
        ? "Gorras lisas al por mayor directo de fábrica: más de 50 colores en stock, sarga de algodón 100%, sin logo desde $3.50 FOB. MOQ 200uds, muestras en 7 días para programas de serigrafía y bordado."
        : "Bulk blank caps direct from the factory: 50+ stock colors, 100% cotton twill, no-logo pricing from $3.50 FOB. MOQ 200pcs and 7-day samples for screen printing and embroidery programs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Lisas al por Mayor — Directo de Fábrica | BD Hats"
          : "Wholesale Blank Caps — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "Gorras lisas en sarga de algodón, más de 50 colores, listas para bordar o imprimir. MOQ 200uds."
          : "Cotton twill blank caps, 50+ stock colors, ready for your embroidery or print. MOQ 200pcs.",
    },
  };
}

export default function BlankCapsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
