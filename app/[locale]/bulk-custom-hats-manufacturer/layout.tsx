import type { Metadata } from "next";
import { getAlternateLanguages } from "../../lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/bulk-custom-hats-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute:
        locale === "es"
          ? "Fabricante de Gorras en Grandes Volúmenes | BD Hats"
          : "Bulk Custom Hats Manufacturer & Wholesale | BD Hats",
    },
    description:
      locale === "es"
        ? "Producción de gorras personalizadas en gran volumen con líneas asociadas dedicadas y descuentos desde 500 uds hasta 10.000+. FOB o CIF."
        : "Large-volume custom hat production with dedicated partner lines and volume pricing from 500 to 10,000+ pcs. FOB or CIF terms.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Personalizadas al por Mayor — Grandes Volúmenes | BD Hats"
          : "Bulk Custom Hats — Large Volume Production | BD Hats",
      description:
        locale === "es"
          ? "Capacidad industrial con control de calidad pre-envío y escalones de precio por volumen."
          : "Industrial-scale capacity with pre-shipment quality control and tiered volume pricing.",
    },
  };
}

export default function BulkHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
