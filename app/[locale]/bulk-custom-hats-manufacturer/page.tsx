"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Bulk Custom Hats",
      badge: "Large Volume · 10,000+ Pcs",
      title: "Bulk Custom",
      accent: "Hats Manufacturer",
      subtitle:
        "Industrial-scale cap production: 5 million pieces a year, 100+ embroidery machines and dedicated lines — with tiered pricing that rewards volume.",
      pills: ["5M+ Caps / Year", "100+ Machines", "100% QC", "FOB or CIF"],
    },
    featuresTitle: "Why Volume Buyers Work With Us",
    featuresIntro:
      "At 10,000 pieces and above, the risk shifts from unit price to consistency, delivery reliability and documentation. This is how we de-risk a large order.",
    features: [
      {
        title: "Capacity That Absorbs Spikes",
        desc: "50,000 sqm of production space, 200+ tailors and 100+ Japanese Barudan embroidery machines, with annual output above 5 million caps. A 50,000-piece order runs on dedicated lines rather than competing with small jobs for machine time.",
      },
      {
        title: "Tiered Volume Pricing",
        desc: "Price breaks at 500, 1,000, 5,000 and 10,000+ pieces. Above 10,000 pieces we quote the specific configuration — machine time, yarn and thread consumption are calculated per order rather than from a generic price list.",
      },
      {
        title: "Colour Consistency Across Batches",
        desc: "The most common failure in large orders is shade variation between dye lots. We lock a dye lot per colour at order confirmation and keep an approved reference swatch on file for reorders.",
      },
      {
        title: "Audit-Ready Documentation",
        desc: "SGS factory verification, CE product certification and REACH/RoHS compliance documents available for your compliance team. We support third-party inspections by SGS, Intertek or Bureau Veritas at any production stage.",
      },
      {
        title: "Payment & Trade Terms",
        desc: "T/T with 30% deposit and 70% before shipment is standard. L/C at sight is accepted for orders above $50,000, and Alibaba Trade Assurance is available if you prefer escrow protection.",
      },
      {
        title: "Logistics Planning",
        desc: "FOB or CIF, air express (5-8 days), air freight (7-12 days) or sea freight (25-35 days). For 10,000+ pieces sea freight typically cuts landed cost dramatically — we quote both so the comparison is clear.",
      },
    ],
    compareTitle: "Volume Tiers at a Glance",
    compareHead: ["Quantity", "Typical use", "What changes"],
    compare: [
      { qty: "200 – 500 pcs", use: "Brand launch, test run", change: "Standard pricing, stock colours" },
      { qty: "500 – 1,000 pcs", use: "First full season", change: "First volume discount, custom labels included" },
      { qty: "1,000 – 5,000 pcs", use: "Multi-channel retail", change: "Custom colour dyeing becomes practical" },
      { qty: "5,000 – 10,000 pcs", use: "Distributor and wholesale programs", change: "Dedicated production slots, priority scheduling" },
      { qty: "10,000+ pcs", use: "National retail chains, export programs", change: "Negotiated pricing, L/C terms, staged deliveries" },
    ],
    compareNote:
      "Not sure which tier you land in? Send your target quantity and style mix — we will quote the exact tier and show what the next break would save you.",
    pricingTitle: "Pricing, MOQ & Lead Time",
    pricing: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "500 – 10,000+", label: "Volume discount tiers" },
      { value: "15-20 Days", label: "Bulk production" },
    ],
    pricingNote:
      "The $3.50–$7.00 range covers standard configurations. Very large uniform orders on stock colours and simple decoration can be quoted below the published range — ask for a specific volume quotation rather than relying on the list price.",
    productsTitle: "Styles Suited to Large Orders",
    productsNote: "Proven, repeatable construction",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Custom 3D Embroidered 5 Panel Gorras",
        img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
        note: "Our highest-volume production style",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "30+ colours, uniform program friendly",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Sports and event giveaways at scale",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras al por Mayor",
      badge: "Grandes Volúmenes · 10.000+ uds",
      title: "Fabricante de Gorras",
      accent: "al por Mayor",
      subtitle:
        "Producción de gorras a escala industrial: 5 millones de unidades al año, más de 100 máquinas de bordado y líneas dedicadas, con precios escalonados que premian el volumen.",
      pills: ["5M+ gorras al año", "Más de 100 máquinas", "QC 100%", "FOB o CIF"],
    },
    featuresTitle: "Por qué los grandes compradores trabajan con nosotros",
    featuresIntro:
      "A partir de 10.000 unidades, el riesgo deja de ser el precio unitario y pasa a ser la consistencia, el cumplimiento de plazos y la documentación. Así reducimos el riesgo de un pedido grande.",
    features: [
      {
        title: "Capacidad para absorber picos",
        desc: "50.000 m² de superficie productiva, más de 200 costureros y más de 100 máquinas de bordado japonesas Barudan, con una producción anual superior a 5 millones de gorras. Un pedido de 50.000 unidades se fabrica en líneas dedicadas en lugar de competir por tiempo de máquina con pedidos pequeños.",
      },
      {
        title: "Precios escalonados por volumen",
        desc: "Descuentos en tramos de 500, 1.000, 5.000 y más de 10.000 unidades. Por encima de 10.000 unidades cotizamos la configuración específica: el tiempo de máquina y el consumo de hilo se calculan por pedido y no a partir de una lista genérica.",
      },
      {
        title: "Consistencia de color entre lotes",
        desc: "El fallo más habitual en pedidos grandes es la variación de tono entre partidas de teñido. Fijamos un lote por color al confirmar el pedido y conservamos una muestra de referencia aprobada para las reposiciones.",
      },
      {
        title: "Documentación lista para auditoría",
        desc: "Verificación de fábrica SGS, certificación de producto CE y documentos de cumplimiento REACH/RoHS a disposición de tu equipo de cumplimiento. Facilitamos inspecciones de terceros (SGS, Intertek o Bureau Veritas) en cualquier etapa de la producción.",
      },
      {
        title: "Condiciones comerciales y de pago",
        desc: "El estándar es transferencia bancaria (T/T) con 30% de anticipo y 70% antes del embarque. Aceptamos carta de crédito (L/C) a la vista para pedidos superiores a 50.000 USD y ofrecemos Alibaba Trade Assurance si prefieres protección con depósito en garantía.",
      },
      {
        title: "Planificación logística",
        desc: "FOB o CIF, envío aéreo exprés (5-8 días), flete aéreo (7-12 días) o flete marítimo (25-35 días). Para más de 10.000 unidades, el flete marítimo suele reducir drásticamente el costo final: cotizamos ambas opciones para que la comparación sea clara.",
      },
    ],
    compareTitle: "Tramos de volumen de un vistazo",
    compareHead: ["Cantidad", "Uso típico", "Qué cambia"],
    compare: [
      { qty: "200 – 500 uds", use: "Lanzamiento de marca, pedido de prueba", change: "Precio estándar, colores de stock" },
      { qty: "500 – 1.000 uds", use: "Primera temporada completa", change: "Primer descuento por volumen, etiquetas incluidas" },
      { qty: "1.000 – 5.000 uds", use: "Retail multicanal", change: "El teñido a color personalizado pasa a ser viable" },
      { qty: "5.000 – 10.000 uds", use: "Distribuidores y programas mayoristas", change: "Turnos de producción dedicados y prioridad de agenda" },
      { qty: "10.000+ uds", use: "Cadenas de retail nacionales, exportación", change: "Precio negociado, condiciones L/C, entregas por fases" },
    ],
    compareNote:
      "¿No sabes en qué tramo te ubicas? Envíanos la cantidad objetivo y la mezcla de estilos: cotizaremos el tramo exacto y te mostraremos cuánto ahorrarías al alcanzar el siguiente.",
    pricingTitle: "Precio, MOQ y Plazo de Entrega",
    pricing: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "500 – 10.000+", label: "Tramos de descuento" },
      { value: "15-20 días", label: "Producción en masa" },
    ],
    pricingNote:
      "El rango de $3.50 a $7.00 cubre configuraciones estándar. Los pedidos muy grandes de uniformes con colores de stock y decoración sencilla pueden cotizarse por debajo del rango publicado: solicita una cotización específica por volumen en lugar de guiarte por el precio de lista.",
    productsTitle: "Estilos recomendados para pedidos grandes",
    productsNote: "Construcción probada y repetible",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Custom 3D Embroidered 5 Panel Gorras",
        img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
        note: "Nuestro estilo de mayor volumen",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "Más de 30 colores, ideal para uniformes",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Eventos deportivos y regalos a gran escala",
      },
    ],
  },
};

export default function BulkHatsPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bulk Custom Hats Manufacturer — Large Volume Cap Production",
    description:
      "Large-volume custom hat production: 5M+ caps per year, 100+ embroidery machines, volume tier pricing from 500 to 10,000+ pcs, 100% QC, FOB or CIF.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/bulk-custom-hats-manufacturer",
  };

  return (
    <LandingShell
      crumb={c.hero.crumb}
      badge={c.hero.badge}
      title={c.hero.title}
      accent={c.hero.accent}
      subtitle={c.hero.subtitle}
      pills={c.hero.pills}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">{c.featuresTitle}</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">{c.featuresIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-black text-lg text-black mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">{c.compareTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  {c.compareHead.map((h) => (
                    <th key={h} className="text-left p-4 font-black">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.compare.map((row) => (
                  <tr key={row.qty} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.qty}</td>
                    <td className="p-4 text-gray-600">{row.use}</td>
                    <td className="p-4 text-gray-600">{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">{c.compareNote}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">{c.pricingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.pricing.map((p) => (
              <div key={p.label} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <p className="text-3xl font-black text-black mb-1">{p.value}</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{p.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center">{c.pricingNote}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">{c.productsTitle}</h2>
          <ProductLinks items={c.products} />
        </div>
      </section>
    </LandingShell>
  );
}
