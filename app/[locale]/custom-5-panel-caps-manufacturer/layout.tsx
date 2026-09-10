import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-5-panel-caps-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorras de 5 Paneles Personalizadas al por Mayor"
        : "Custom 5-Panel Caps Manufacturer | Wholesale 5 Panel Hats",
    description:
      locale === "es"
        ? "Gorras de 5 paneles personalizadas directo de fábrica: estilo A-frame y camper, bordado 3D puff, más de 30 colores. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días."
        : "Custom 5-panel caps from the factory: A-frame and camper styles, 3D puff embroidery, 30+ colors. MOQ 200pcs, $3.50-$7.00 FOB, samples in 7 days. SGS verified.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras de 5 Paneles al por Mayor — Directo de Fábrica | BD Hats"
          : "Custom 5-Panel Caps Wholesale — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "A-frame y camper de 5 paneles con bordado 3D puff. Panel frontal amplio para logotipos grandes. MOQ 200uds."
          : "A-frame and camper 5-panels with 3D puff embroidery. Wide front panel for bold logos. MOQ 200pcs.",
    },
  };
}

export default function FivePanelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
