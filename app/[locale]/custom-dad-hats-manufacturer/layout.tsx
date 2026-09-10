import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-dad-hats-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorras Dad Personalizadas | Gorras sin Estructura al por Mayor"
        : "Custom Dad Hats Manufacturer | Wholesale Unstructured Caps",
    description:
      locale === "es"
        ? "Gorras dad personalizadas directo de fábrica: 6 paneles sin estructura, acid wash y acabados vintage. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días. Fábrica verificada SGS en China."
        : "Factory-direct custom dad hats: unstructured 6-panel, acid wash, garment dye and vintage finishes. MOQ 200pcs, $3.50-$7.00 FOB, samples in 7 days. SGS verified factory in China.",
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
