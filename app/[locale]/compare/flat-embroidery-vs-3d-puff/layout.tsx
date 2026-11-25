import type { Metadata } from "next";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/compare/flat-embroidery-vs-3d-puff";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Bordado Plano vs 3D Puff en Gorras: Guía B2B"
          : "Flat vs 3D Embroidery on Hats: B2B Sourcing Guide",
    },
    description:
      locale === "es"
        ? "Comparativa de bordado plano vs 3D puff en gorras: límites de trazo (1mm vs 3mm), durabilidad del foam, costes FOB y pedido mínimo de fábrica de 200 uds."
        : "Flat vs 3D embroidery on custom hats compared: stitch density, stroke limits (1mm vs 3mm), foam durability, and FOB cost impact. Factory MOQ 200 pcs.",
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title:
        locale === "es"
          ? "Bordado Plano vs Bordado 3D Puff — Comparativa de Fábrica"
          : "Flat Embroidery vs 3D Puff — A Factory Comparison",
      description:
        locale === "es"
          ? "Diferencias reales de costo, relieve y durabilidad entre bordado plano y bordado 3D puff."
          : "Real cost, relief and durability differences between flat embroidery and 3D puff.",
      images: [
        {
          url: "/images/brand/junyang-logo.png",
          alt: "BD Hats · JUNYANG custom cap factory",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
