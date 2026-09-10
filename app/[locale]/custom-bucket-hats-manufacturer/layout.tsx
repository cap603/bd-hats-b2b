import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/custom-bucket-hats-manufacturer";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Fabricante de Gorros Bucket Personalizados | Sombreros de Pescador al por Mayor"
        : "Custom Bucket Hats Manufacturer | Wholesale Fisherman Hats",
    description:
      locale === "es"
        ? "Gorros bucket personalizados directo de fábrica: sarga de algodón, pana, ripstop y reversibles. Bordado, parches e impresión. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días."
        : "Custom bucket hats direct from the factory: cotton twill, corduroy, ripstop and reversible styles. Embroidery, patches and print. MOQ 200pcs, $3.50-$7.00 FOB, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorros Bucket Personalizados al por Mayor | BD Hats"
          : "Custom Bucket Hats Wholesale — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "Sombreros de pescador con tu marca: varias telas, ala reversible y bordado 3D. MOQ 200uds."
          : "Branded fisherman hats: multiple fabrics, reversible brims and 3D embroidery. MOQ 200pcs.",
    },
  };
}

export default function BucketHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
