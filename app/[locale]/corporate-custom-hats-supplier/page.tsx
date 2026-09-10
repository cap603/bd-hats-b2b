"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Corporate Custom Hats",
      badge: "Corporate · Promotional · Uniforms",
      title: "Corporate Custom",
      accent: "Hats Supplier",
      subtitle:
        "Logo caps for staff uniforms, launch events, client gifts and trade shows — produced to your brand standards and delivered on your deadline.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "Pantone Matching", "7-Day Samples"],
    },
    featuresTitle: "Built for Procurement Teams",
    featuresIntro:
      "Corporate orders are judged on consistency, paperwork and delivery dates — not just unit price. Here is what we handle for you.",
    features: [
      {
        title: "Accurate Logo Reproduction",
        desc: "Embroidery is the right choice for most corporate marks: it never cracks, fades or peels after washing, unlike screen print. We digitise from your vector or high-resolution file and send a physical sample for sign-off before bulk.",
      },
      {
        title: "Pantone & Brand Colour Matching",
        desc: "Your brand colour is matched to Pantone TPX for fabric and to thread charts for embroidery. Running several departments or regions? Every reorder is matched to the original approved sample so uniforms stay consistent year after year.",
      },
      {
        title: "Event & Season Deadlines",
        desc: "Standard production is 15-20 days after sample approval, plus 5-8 days air express. Tell us your event date up front and we will confirm honestly whether the timeline works — and offer rush options if it does not.",
      },
      {
        title: "Individual Packaging",
        desc: "Poly bag with size sticker, hang tag, tissue wrap, or fully recyclable paper bags for CSR-sensitive programs. Gifts and client-facing orders can ship in printed boxes with your branding on the outside.",
      },
      {
        title: "Phased & Split Deliveries",
        desc: "One purchase order, multiple destinations or dates. We pack by department, region or size and label every carton, so your warehouse does not have to re-sort the shipment on arrival.",
      },
      {
        title: "Procurement-Friendly Pricing",
        desc: "Tiered pricing at 500, 1,000, 5,000 and 10,000+ pieces with a fully itemised quote — cap cost, embroidery setup, labels, tags and export packing shown separately. No hidden surcharges after the PO is placed.",
      },
    ],
    compareTitle: "Embroidery, Print or Patch?",
    compareHead: ["Method", "Durability", "Best for", "Setup"],
    compare: [
      {
        method: "3D puff embroidery",
        durability: "Excellent — survives repeated washing",
        best: "Front panel logos on caps and snapbacks",
        setup: "Digitising fee, no tooling",
      },
      {
        method: "Flat embroidery",
        durability: "Excellent — the corporate standard",
        best: "Small text, side panels, curved areas",
        setup: "Digitising fee, no tooling",
      },
      {
        method: "Screen print",
        durability: "Good — can fade on heavy wear",
        best: "Mesh trucker backs, large flat areas",
        setup: "Screen charge per colour",
      },
      {
        method: "Woven or leather patch",
        durability: "Excellent — premium perception",
        best: "Lifestyle and retail corporate gifting",
        setup: "Patch mould fee",
      },
    ],
    compareNote:
      "Send us your logo file and we will recommend the method that reproduces it most faithfully — then quote every option so you can compare.",
    pricingTitle: "Pricing, MOQ & Lead Time",
    pricing: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "200 Pcs", label: "MOQ per style / colour" },
      { value: "7 / 15-20 Days", label: "Sample / bulk production" },
    ],
    pricingNote:
      "Corporate orders typically land in the middle of the range: one-colour front embroidery on a stock colour cap. Multiple positions, specialty fabrics or individual retail packaging move toward the upper end. Volume discounts apply from 500 pieces.",
    productsTitle: "Styles Most Often Ordered for Corporate Use",
    productsNote: "Structured cap, 3D puff ready",
    products: [
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "30+ stock colours for uniform programs",
      },
      {
        href: "/product/ladies-plain-blank-cotton-sports-cap",
        name: "Ladies Plain Blank Cotton Sports Cap",
        img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
        note: "Feminine fit for mixed-gender staff",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Ventilated — good for outdoor teams",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras Corporativas",
      badge: "Corporativo · Promocional · Uniformes",
      title: "Proveedor de Gorras",
      accent: "Corporativas Personalizadas",
      subtitle:
        "Gorras con logotipo para uniformes de personal, lanzamientos, regalos a clientes y ferias — fabricadas según los estándares de tu marca y entregadas en tu fecha límite.",
      pills: ["MOQ 200 uds", "Desde $3.50 FOB", "Igualación Pantone", "Muestras en 7 días"],
    },
    featuresTitle: "Diseñado para Equipos de Compras",
    featuresIntro:
      "En un pedido corporativo se juzga la consistencia, la documentación y la fecha de entrega, no solo el precio unitario. Esto es lo que gestionamos por ti.",
    features: [
      {
        title: "Reproducción precisa del logotipo",
        desc: "El bordado es la mejor opción para la mayoría de los logotipos corporativos: no se agrieta, no se decolora ni se despega con los lavados, a diferencia de la serigrafía. Digitalizamos tu archivo vectorial o de alta resolución y enviamos una muestra física para tu aprobación antes de la producción en masa.",
      },
      {
        title: "Igualación de color Pantone y de marca",
        desc: "Tu color de marca se iguala a Pantone TPX para la tela y a las cartas de hilo para el bordado. ¿Manejas varios departamentos o regiones? Cada reposición se iguala a la muestra original aprobada para que los uniformes se mantengan consistentes año tras año.",
      },
      {
        title: "Fechas de eventos y temporadas",
        desc: "La producción estándar es de 15-20 días tras aprobar la muestra, más 5-8 días de envío aéreo exprés. Indícanos la fecha del evento desde el inicio y te confirmaremos con honestidad si el plazo es viable; si no lo es, te ofreceremos opciones urgentes.",
      },
      {
        title: "Empaque individual",
        desc: "Bolsa con etiqueta de talla, colgante, envoltura de papel o bolsas de papel totalmente reciclables para programas con requisitos de sostenibilidad. Los pedidos de regalo pueden enviarse en cajas impresas con tu marca en el exterior.",
      },
      {
        title: "Entregas por fases y a varias sedes",
        desc: "Una sola orden de compra, varios destinos o fechas. Empacamos por departamento, región o talla y etiquetamos cada caja, para que tu almacén no tenga que reclasificar el envío a su llegada.",
      },
      {
        title: "Precios adaptados a compras",
        desc: "Precios escalonados desde 500, 1.000, 5.000 y más de 10.000 unidades, con una cotización totalmente detallada: costo de la gorra, preparación del bordado, etiquetas, colgantes y empaque de exportación por separado. Sin recargos ocultos tras emitir la orden de compra.",
      },
    ],
    compareTitle: "¿Bordado, serigrafía o parche?",
    compareHead: ["Método", "Durabilidad", "Ideal para", "Preparación"],
    compare: [
      {
        method: "Bordado 3D puff",
        durability: "Excelente: resiste lavados repetidos",
        best: "Logotipos en el frente de gorras y snapbacks",
        setup: "Costo de digitalización, sin moldes",
      },
      {
        method: "Bordado plano",
        durability: "Excelente: el estándar corporativo",
        best: "Textos pequeños, paneles laterales, zonas curvas",
        setup: "Costo de digitalización, sin moldes",
      },
      {
        method: "Serigrafía",
        durability: "Buena: puede decolorarse con uso intenso",
        best: "Parte trasera de malla en trucker, superficies planas grandes",
        setup: "Cargo por pantalla y color",
      },
      {
        method: "Parche tejido o de cuero",
        durability: "Excelente: alta percepción de valor",
        best: "Regalos corporativos lifestyle y retail",
        setup: "Costo del molde del parche",
      },
    ],
    compareNote:
      "Envíanos tu archivo de logotipo y te recomendaremos el método que lo reproduzca con mayor fidelidad; después cotizamos cada opción para que puedas comparar.",
    pricingTitle: "Precio, MOQ y Plazo de Entrega",
    pricing: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "200 uds", label: "MOQ por estilo / color" },
      { value: "7 / 15-20 días", label: "Muestra / producción en masa" },
    ],
    pricingNote:
      "Los pedidos corporativos suelen ubicarse en la parte media del rango: bordado a un color en el frente sobre un color de stock. Varias posiciones, telas especiales o empaque individual de retail llevan el precio hacia la parte alta. Los descuentos por volumen aplican desde 500 unidades.",
    productsTitle: "Estilos más pedidos para uso corporativo",
    productsNote: "Gorra estructurada, lista para bordado 3D puff",
    products: [
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "Más de 30 colores de stock para programas de uniformes",
      },
      {
        href: "/product/ladies-plain-blank-cotton-sports-cap",
        name: "Ladies Plain Blank Cotton Sports Cap",
        img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
        note: "Corte femenino para personal de ambos géneros",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Ventilada: ideal para equipos al aire libre",
      },
    ],
  },
};

export default function CorporateHatsPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Corporate Custom Hats Supplier — Branded Caps for Companies",
    description:
      "Corporate custom hats direct from the factory: logo embroidery, Pantone matching, individual packaging and phased deliveries. MOQ 200pcs, samples in 7 days.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/corporate-custom-hats-supplier",
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
                  <tr key={row.method} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.method}</td>
                    <td className="p-4 text-gray-600">{row.durability}</td>
                    <td className="p-4 text-gray-600">{row.best}</td>
                    <td className="p-4 text-gray-600">{row.setup}</td>
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
