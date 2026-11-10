import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-dad-hats-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorras Dad Personalizadas | Fábrica Directa"
        : "Custom Dad Hats Manufacturer | Wholesale Unstructured Caps",
    description:
      locale === "es"
        ? "Gorras dad personalizadas directo de fábrica: 6 paneles sin estructura, lavado vintage. MOQ 200uds, $3.50-$6.80 FOB, muestras en 7 días y SGS verificado."
        : "Custom dad hats factory direct: unstructured 6-panel, vintage enzyme wash & pigment dye. MOQ 200pcs, $3.50-$6.80 FOB, 7-day samples. SGS verified manufacturer.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Dad Personalizadas al por Mayor — Directo de Fábrica | BD Hats"
          : "Custom Dad Hats Wholesale — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "Gorras dad sin estructura, acid wash y parches de cuero. Bordado personalizado, MOQ 200uds, producción en 15-20 días."
          : "Unstructured dad hats, acid wash finishes and leather patches. Custom embroidery, MOQ 200pcs, 15-20 day production.",
    },
  };
}

export default function DadHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
