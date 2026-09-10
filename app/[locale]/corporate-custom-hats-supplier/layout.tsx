import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/corporate-custom-hats-supplier";
  const canonical = `https://bdjunyang.com/${locale}${path}`;
  const languages = {
    en: `https://bdjunyang.com/en${path}`,
    es: `https://bdjunyang.com/es${path}`,
    "x-default": `https://bdjunyang.com/en${path}`,
  };

  return {
    title:
      locale === "es"
        ? "Proveedor de Gorras Corporativas Personalizadas | Gorras para Empresas"
        : "Corporate Custom Hats Supplier | Branded Caps for Companies",
    description:
      locale === "es"
        ? "Gorras corporativas personalizadas directo de fábrica: bordado de logotipo, empaque individual, entregas por fases para eventos. MOQ 200uds, $3.50-$7.00 FOB, muestras en 7 días."
        : "Corporate custom hats direct from the factory: logo embroidery, individual packaging and phased deliveries for events. MOQ 200pcs, $3.50-$7.00 FOB, samples in 7 days.",
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      url: canonical,
      title:
        locale === "es"
          ? "Gorras Corporativas Personalizadas — Directo de Fábrica | BD Hats"
          : "Corporate Custom Hats — Factory Direct | BD Hats",
      description:
        locale === "es"
          ? "Gorras con logotipo para uniformes, eventos y regalos corporativos. Bordado o parche, empaque individual."
          : "Logo caps for uniforms, events and corporate gifts. Embroidery or patches, individual packaging.",
    },
  };
}

export default function CorporateHatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
