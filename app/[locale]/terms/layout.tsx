import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/terms";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Términos del Servicio | Baoding Junyang"
        : "Terms of Service | Baoding Junyang",
    description:
      locale === "es"
        ? "Términos y condiciones de abastecimiento comercial B2B de Baoding Junyang Import & Export Trading Co., Ltd."
        : "Terms and conditions for commercial B2B headwear sourcing by Baoding Junyang Import & Export Trading Co., Ltd.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title: locale === "es" ? "Términos del Servicio | Baoding Junyang" : "Terms of Service | Baoding Junyang",
      description:
        locale === "es"
          ? "Términos y condiciones de abastecimiento B2B de Baoding Junyang."
          : "Terms and conditions for commercial B2B headwear sourcing by Baoding Junyang.",
    },
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
