import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/wholesale-blank-caps-supplier";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Proveedor de Gorras Lisas al por Mayor | BD Hats"
          : "Wholesale Blank Caps Supplier & Plain Hats | BD Hats",
    },
    description:
      locale === "es"
        ? "Gorras lisas al por mayor, sourcing directo: más de 50 colores, algodón 100%, sin logo desde $3.50 FOB. MOQ 200uds, muestras en 7 días y cotización en 2h."
        : "Bulk blank caps, direct sourcing: 50+ stock colors, 100% cotton twill, unbranded from $3.50 FOB. MOQ 200pcs, 7-day samples for embroidery & print brands.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Lisas al por Mayor — Sourcing Directo | BD Hats"
          : "Wholesale Blank Caps — Direct Sourcing | BD Hats",
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
