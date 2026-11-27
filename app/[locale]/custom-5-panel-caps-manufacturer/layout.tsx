import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-5-panel-caps-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Gorras de 5 Paneles Personalizadas | BD Hats"
          : "Custom 5-Panel Caps & Wholesale | BD Hats",
    },
    description:
      locale === "es"
        ? "Gorras de 5 paneles, sourcing directo: A-frame y camper, bordado 3D puff, más de 30 colores. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días y cotización en 2h."
        : "Custom 5-panel caps, direct sourcing: A-frame & camper styles, 3D puff embroidery, 30+ colors. MOQ 200pcs, $3.50-$7.00 FOB, 7-day samples, written quote in 2h.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras de 5 Paneles al por Mayor — Sourcing Directo | BD Hats"
          : "Custom 5-Panel Caps Wholesale — Direct Sourcing | BD Hats",
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
