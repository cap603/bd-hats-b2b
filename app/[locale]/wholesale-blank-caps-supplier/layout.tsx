import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/wholesale-blank-caps-supplier";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Proveedor de Gorras Lisas al por Mayor | Fábrica en China"
        : "Wholesale Blank Caps Supplier | Plain Hat Manufacturer China",
    description:
      locale === "es"
        ? "Gorras lisas al por mayor directo de fábrica: más de 50 colores, algodón 100%, sin logo desde $3.50 FOB. MOQ 200uds, muestras en 7 días y verificación SGS."
        : "Bulk blank caps direct from factory: 50+ stock colors, 100% cotton twill, unbranded from $3.50 FOB. MOQ 200pcs, 7-day samples for embroidery & print brands.",
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
