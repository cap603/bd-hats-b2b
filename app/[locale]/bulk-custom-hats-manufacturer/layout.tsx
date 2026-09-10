import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/bulk-custom-hats-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorras al por Mayor | Producción en Grandes Volúmenes"
        : "Bulk Custom Hats Manufacturer | Large Volume Cap Production",
    description:
      locale === "es"
        ? "Producción de gorras personalizadas en gran volumen: 5M+ unidades al año, más de 100 máquinas de bordado, descuentos desde 500uds hasta 10.000+. AQL 2.5, SGS verificado, FOB o CIF."
        : "Large-volume custom hat production: 5M+ caps per year, 100+ embroidery machines, volume pricing from 500 to 10,000+ pcs. AQL 2.5, SGS verified, FOB or CIF terms.",
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
          ? "Capacidad industrial de 5M+ gorras al año con control de calidad AQL 2.5 y escalones de precio por volumen."
          : "Industrial capacity of 5M+ caps per year with AQL 2.5 QC and tiered volume pricing.",
    },
  };
}

export default function BulkHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
