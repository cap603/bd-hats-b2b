import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/privacy";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title:
      locale === "es"
        ? "Política de Privacidad | Baoding Junyang"
        : "Privacy Policy | Baoding Junyang",
    description:
      locale === "es"
        ? "Política de privacidad de Baoding Junyang Import & Export Trading Co., Ltd. Conoce cómo protegemos y gestionamos tus datos personales y comerciales."
        : "Privacy Policy for Baoding Junyang Import & Export Trading Co., Ltd. Learn how we handle and protect your personal and commercial data.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title: locale === "es" ? "Política de Privacidad | Baoding Junyang" : "Privacy Policy | Baoding Junyang",
      description:
        locale === "es"
          ? "Política de privacidad de Baoding Junyang Import & Export Trading Co., Ltd."
          : "Privacy Policy for Baoding Junyang Import & Export Trading Co., Ltd.",
    },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
