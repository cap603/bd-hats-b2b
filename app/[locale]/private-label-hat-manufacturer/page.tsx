"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Private Label Hats",
      badge: "Private Label · Your Brand Only",
      title: "Private",
      accent: "Label Hat Manufacturing",
      subtitle:
        "Your brand on the label, the sweatband, the hang tag and the box — with no trace of ours. Full private label service from 200 pieces.",
      pills: ["MOQ 200 Pcs", "Your Labels & Tags", "Barcode Ready", "7-Day Samples"],
    },
    brandingTitle: "The Nine Branding Points We Control",
    brandingIntro:
      "A private label cap is judged on details a customer only notices when they are missing. These are the elements we produce and apply at the factory.",
    branding: [
      {
        title: "Woven & Printed Labels",
        desc: "Your brand name woven into the inner seam tape or printed on the sweatband — the single most important anti-resale marker for private label. We produce the labels in-house to your artwork and sew them during assembly, not after.",
      },
      {
        title: "Care & Content Labels",
        desc: "Fabric composition, washing instructions, origin marking and your company details. We format them to US, EU and Australian retail requirements so your caps clear customs without re-labelling.",
      },
      {
        title: "Hang Tags & Price Tickets",
        desc: "Custom card stock, spot UV, matte or kraft finishes, plus string, plastic barb or loop attachment. Standard retail size is 50 x 90 mm — larger tags and folded booklets are also available.",
      },
      {
        title: "Packaging & Poly Bags",
        desc: "Individual poly bags with or without suffocation warnings, header cards, sticker closure, or fully recyclable paper bags for EU markets. Custom printed retail boxes on orders above 1,000 pieces.",
      },
      {
        title: "Barcode & FNSKU Support",
        desc: "We print and apply UPC, EAN or Amazon FNSKU labels at the factory, so your shipment arrives scan-ready for retail or FBA. Just send the label file and the mapping list.",
      },
      {
        title: "Under-Visor & Inner Prints",
        desc: "Custom under-visor prints, inner crown lining prints and size tags help a private label cap feel genuinely own-brand. Small details, high perceived value at retail.",
      },
    ],
    modelsTitle: "Private Label vs OEM vs ODM",
    modelCols: ["Model", "Who designs", "What we do", "Best for"],
    models: [
      {
        model: "Private label",
        design: "You own the design and brand",
        factory: "We build your existing specs",
        moq: "200 pcs",
        best: "Retail brands scaling a proven style",
      },
      {
        model: "OEM",
        design: "You supply sketches or a reference cap",
        factory: "We engineer the pattern and sample it",
        moq: "200 pcs",
        best: "Brands with a defined look but no factory files",
      },
      {
        model: "ODM",
        design: "You pick from our developed styles",
        factory: "We brand and adjust it for you",
        moq: "200 pcs",
        best: "First-time sellers testing the market",
      },
    ],
    modelsNote:
      "All three run at the same MOQ of 200 pieces per style and color, so you can start with ODM, then move to private label once a style proves itself.",
    stepsTitle: "From Brand Kit to Retail Shelf",
    steps: [
      { n: "01", t: "Send your brand kit", d: "Logo files (AI/PDF), label artwork, packaging references and target quantity. We reply with questions and a quote within 12 hours." },
      { n: "02", t: "Approve the branded sample", d: "In 7 days you receive a physical cap with your label, hang tag and packaging applied — the whole brand experience, not just the cap." },
      { n: "03", t: "Production with photo updates", d: "15-20 days of bulk production. We send weekly photos of embroidery, label sewing and packing so you can approve remotely." },
      { n: "04", t: "Retail-ready shipment", d: "Barcodes applied, cartons labelled per size and color, packing list issued. Air express 5-8 days or sea freight 25-35 days." },
    ],
    stats: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "200 Pcs", label: "Per style / color" },
      { value: "No Tooling Fee", label: "On labels & tags" },
    ],
    stylesTitle: "Styles Most Often Private Labelled",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Custom 3D Embroidered 5 Panel Gorras",
        img: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
        note: "Our most requested private label base",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "/images/products/breathable-custom-embroidered-6-panel.webp",
        note: "Sports and activewear programs",
      },
      {
        href: "/product/two-tone-3d-embroidery-a-frame-cap",
        name: "Two-Tone 3D Embroidery A-Frame Cap",
        img: "/images/products/two-tone-3d-embroidery-a-frame-cap.webp",
        note: "Streetwear private label",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras Private Label",
      badge: "Private label · solo tu marca",
      title: "Fabricación de",
      accent: "Gorras Private Label",
      subtitle:
        "Tu marca en la etiqueta, la banda de sudor, el colgante y la caja, sin rastro de la nuestra. Servicio completo de private label desde 200 piezas.",
      pills: ["MOQ 200 pcs", "Tus etiquetas y colgantes", "Listo para código de barras", "Muestras en 7 días"],
    },
    brandingTitle: "Los nueve puntos de branding que controlamos",
    brandingIntro:
      "Una gorra private label se juzga por detalles que el cliente solo nota cuando faltan. Estos son los elementos que producimos y aplicamos en la fábrica.",
    branding: [
      {
        title: "Etiquetas tejidas e impresas",
        desc: "El nombre de tu marca tejido en la cinta interna de la costura o impreso en la banda de sudor: el marcador antirreventa más importante del private label. Producimos las etiquetas en nuestra planta según tu diseño y las cosemos durante el ensamble, no después.",
      },
      {
        title: "Etiquetas de cuidado y composición",
        desc: "Composición del tejido, instrucciones de lavado, marcado de origen y los datos de tu empresa. Las formateamos según los requisitos retail de EE. UU., la UE y Australia para que tus gorras pasen la aduana sin reetiquetado.",
      },
      {
        title: "Colgantes y etiquetas de precio",
        desc: "Cartulina personalizada, UV localizado, acabados mate o kraft, además de sujeción con cordón, púa de plástico o lazo. El tamaño retail estándar es 50 x 90 mm; también ofrecemos colgantes más grandes y folletos plegados.",
      },
      {
        title: "Empaque y bolsas de polietileno",
        desc: "Bolsas individuales de polietileno con o sin advertencia de asfixia, tarjetas cabecera, cierre con sticker o bolsas de papel totalmente reciclables para el mercado de la UE. Cajas retail impresas a medida en pedidos superiores a 1,000 piezas.",
      },
      {
        title: "Soporte de código de barras y FNSKU",
        desc: "Imprimimos y aplicamos etiquetas UPC, EAN o FNSKU de Amazon en la fábrica, para que tu embarque llegue listo para escanear en retail o FBA. Solo envíanos el archivo de la etiqueta y la lista de asignación.",
      },
      {
        title: "Impresiones bajo la visera y en el interior",
        desc: "Las impresiones personalizadas bajo la visera, en el forro interno de la corona y las etiquetas de talla hacen que una gorra private label se sienta realmente de tu marca. Detalles pequeños, alto valor percibido en retail.",
      },
    ],
    modelsTitle: "Private label vs OEM vs ODM",
    modelCols: ["Modelo", "Quién diseña", "Qué hacemos", "Ideal para"],
    models: [
      {
        model: "Private label",
        design: "Tú eres dueño del diseño y la marca",
        factory: "Fabricamos según tus especificaciones actuales",
        moq: "200 pcs",
        best: "Marcas retail que escalan un estilo probado",
      },
      {
        model: "OEM",
        design: "Tú aportas bocetos o una gorra de referencia",
        factory: "Desarrollamos el patrón y lo muestreamos",
        moq: "200 pcs",
        best: "Marcas con un look definido pero sin archivos de fábrica",
      },
      {
        model: "ODM",
        design: "Eliges entre nuestros estilos ya desarrollados",
        factory: "Le aplicamos tu marca y lo ajustamos",
        moq: "200 pcs",
        best: "Vendedores primerizos que prueban el mercado",
      },
    ],
    modelsNote:
      "Los tres modelos manejan la misma MOQ de 200 piezas por estilo y color, así que puedes empezar con ODM y pasar a private label cuando un estilo demuestre funcionar.",
    stepsTitle: "Del kit de marca al anaquel retail",
    steps: [
      { n: "01", t: "Envía tu kit de marca", d: "Archivos de logo (AI/PDF), diseño de etiquetas, referencias de empaque y cantidad objetivo. Respondemos con preguntas y una cotización en 12 horas." },
      { n: "02", t: "Aprueba la muestra con marca", d: "En 7 días recibes una gorra física con tu etiqueta, colgante y empaque aplicados: toda la experiencia de marca, no solo la gorra." },
      { n: "03", t: "Producción con actualizaciones fotográficas", d: "15-20 días de producción en masa. Enviamos fotos semanales del bordado, el cosido de etiquetas y el empaque para que apruebes a distancia." },
      { n: "04", t: "Embarque listo para retail", d: "Códigos de barras aplicados, cartones etiquetados por talla y color, lista de empaque emitida. Envío aéreo exprés 5-8 días o marítimo 25-35 días." },
    ],
    stats: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "200 Pcs", label: "Por estilo / color" },
      { value: "Sin costo de herramienta", label: "En etiquetas y colgantes" },
    ],
    stylesTitle: "Estilos que más se piden en private label",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Gorras 5 Paneles con Bordado 3D Personalizado",
        img: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
        note: "Nuestra base private label más solicitada",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Gorra 6 Paneles Bordada Personalizada Transpirable",
        img: "/images/products/breathable-custom-embroidered-6-panel.webp",
        note: "Programas deportivos y de activewear",
      },
      {
        href: "/product/two-tone-3d-embroidery-a-frame-cap",
        name: "Gorra A-Frame Bicolor con Bordado 3D",
        img: "/images/products/two-tone-3d-embroidery-a-frame-cap.webp",
        note: "Private label para streetwear",
      },
    ],
  },
};

export default function PrivateLabelPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Private Label Hat Manufacturer — Custom Branded Caps China",
    description:
      "Private label hat manufacturing: woven labels, care labels, hang tags, retail packaging and barcode application. MOQ 200pcs, samples in 7 days, SGS verified factory.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/private-label-hat-manufacturer",
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
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">
            {c.brandingTitle}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            {c.brandingIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.branding.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-black text-lg text-black mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.modelsTitle}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-black">{c.modelCols[0]}</th>
                  <th className="text-left p-4 font-black">{c.modelCols[1]}</th>
                  <th className="text-left p-4 font-black">{c.modelCols[2]}</th>
                  <th className="text-left p-4 font-black">{c.modelCols[3]}</th>
                </tr>
              </thead>
              <tbody>
                {c.models.map((m) => (
                  <tr key={m.model} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{m.model}</td>
                    <td className="p-4 text-gray-600">{m.design}</td>
                    <td className="p-4 text-gray-600">{m.factory}</td>
                    <td className="p-4 text-gray-600">{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {c.modelsNote}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.stepsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <p className="text-3xl font-black text-yellow-500 mb-3">{s.n}</p>
                <h3 className="font-black text-black mb-2">{s.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">{c.stats[0].value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{c.stats[0].label}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">{c.stats[1].value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{c.stats[1].label}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">{c.stats[2].value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{c.stats[2].label}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.stylesTitle}
          </h2>
          <ProductLinks items={c.products} />
        </div>
      </section>
    </LandingShell>
  );
}
