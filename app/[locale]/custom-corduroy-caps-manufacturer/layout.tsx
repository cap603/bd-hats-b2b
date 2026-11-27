import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-corduroy-caps-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Gorras de Pana Personalizadas al por Mayor | BD Hats"
          : "Custom Corduroy Caps & Wholesale | BD Hats",
    },
    description:
      locale === "es"
        ? "Gorras de pana personalizadas en China. Pana vintage 8W, 14W y 21W, bordado 3D, MOQ 200uds, FOB desde $4.50. Muestras en 7 días y cotización en 2h."
        : "Custom corduroy caps sourced in China. 8W, 14W & 21W vintage corduroy hats, 3D embroidery, MOQ 200pcs, FOB from $4.50. 7-day samples, written quote in 2h.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title: "Custom Corduroy Caps | BD Hats",
      description: "Direct-sourced custom corduroy hats. 8W, 14W & 21W wale options with 3D puff embroidery. MOQ 200 pcs.",
    },
  };
}

export default function CorduroyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
