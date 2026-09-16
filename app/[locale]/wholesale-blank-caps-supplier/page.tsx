"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Wholesale Blank Caps",
      badge: "Blank Shells · Ready to Decorate",
      title: "Wholesale",
      accent: "Blank Caps",
      subtitle:
        "Plain, undecorated caps in 50+ stock colors — the lowest-cost way to start a hat line. Ship blank or let us decorate later.",
      pills: ["From $3.50 FOB", "MOQ 200 Pcs", "50+ Stock Colors", "7-Day Samples"],
    },
    featuresTitle: "Why Buy Blank Caps From the Factory",
    featuresIntro:
      "Dealers, decorators and private-label brands buy blanks for one reason: the shell is cheap, and the decoration happens on your side. Here is what we control for you.",
    features: [
      {
        title: "No-Logo Pricing, Factory Direct",
        desc: "Blank caps skip embroidery, patches and label costs — which is why they are the cheapest way into a cap program. You buy the shell from us and decorate locally, or we decorate for you later. Pricing starts at $3.50 per unit FOB.",
      },
      {
        title: "50+ Stock Colors",
        desc: "Black, navy, white, khaki, olive, burgundy, forest, royal and more — all held in 100% cotton twill 108*56. Stock colors ship fastest. Custom Pantone TPX colors are also available with a small dyeing MOQ.",
      },
      {
        title: "Neutral or Branded Inner Labels",
        desc: "Blank caps usually need a tamper-proof inner label so your buyers never see another brand. We supply neutral grey labels as standard, or print your own brand name on the sweatband at no extra tooling cost.",
      },
      {
        title: "Structures & Panels",
        desc: "5-panel, 6-panel, structured and unstructured, low-profile and high-profile — plus trucker foam fronts, beanies and bucket hats. Every shell is available blank so you can build one consistent line across styles.",
      },
      {
        title: "Closures",
        desc: "Plastic snapback, metal snapback, self-fabric strap with brass slide, velcro, or elastic flexfit bands. Mixed closures on the same order are fine — we keep them as separate SKUs for your inventory.",
      },
      {
        title: "Decoration-Ready Quality",
        desc: "Blank does not mean cheap. Caps go through the same five QC stages: fabric check, panel symmetricity, stitching integrity, thread trimming and packing audit. Flat brims stay flat after shipping.",
      },
    ],
    specsTitle: "Blank Cap Specification Sheet",
    specs: [
      { k: "Fabric", v: "100% cotton twill 108*56 · brushed cotton · canvas" },
      { k: "Panels", v: "5-panel · 6-panel · unstructured · trucker" },
      { k: "Colors", v: "50+ stock colors · Pantone TPX matching on request" },
      { k: "Closure", v: "Plastic / metal snapback · strapback · velcro · elastic" },
      { k: "MOQ", v: "200 pcs per style / color" },
      { k: "Pricing", v: "$3.50 – $7.00 per unit FOB" },
      { k: "Lead time", v: "Samples 7 days · bulk 15-20 days" },
      { k: "Packing", v: "25 pcs / polybag / inner box · export cartons" },
    ],
    specsNote:
      "Buying for screen printing? Ask for a flat-brim 6-panel in 100% cotton — print holds better on cotton twill than on polyester-mesh truckers.",
    stepsTitle: "How Blank Orders Work",
    steps: [
      { n: "01", t: "Pick shells & colors", d: "Tell us the styles and colors — or order a color card with physical fabric swatches before committing." },
      { n: "02", t: "Confirm the sample", d: "We send one blank sample per style in 7 days so you can test decoration, fit and shrinkage first." },
      { n: "03", t: "Bulk & ship", d: "15-20 days production, then air express (5-8 days) or sea freight. Packing list and QC photos before dispatch." },
    ],
    stylesTitle: "Blank & Ready-to-Decorate Styles",
    products: [
      {
        href: "/product/ladies-plain-blank-cotton-sports-cap",
        name: "Ladies Plain Blank Cotton Sports Cap",
        img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
        note: "Feminine fit, fine cotton twill",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "High-profile, 30+ colors",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Ventilated sports profile",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras Blank al Mayoreo",
      badge: "Bases blank · listas para decorar",
      title: "Gorras Blank",
      accent: "al Mayoreo",
      subtitle:
        "Gorras lisas y sin decorar en más de 50 colores en stock: la forma más económica de arrancar una línea de gorras. Envíalas blank o deja que las decoremos después.",
      pills: ["Desde $3.50 FOB", "MOQ 200 pcs", "50+ colores en stock", "Muestras en 7 días"],
    },
    featuresTitle: "Por qué comprar gorras blank directo de fábrica",
    featuresIntro:
      "Distribuidores, decoradores y marcas private label compran blank por una razón: la base es económica y la decoración corre por tu cuenta. Esto es lo que controlamos para ti.",
    features: [
      {
        title: "Precio sin logo, directo de fábrica",
        desc: "Las gorras blank se ahorran el bordado, los parches y las etiquetas, por eso son la vía más económica para iniciar un programa de gorras. Compras la base con nosotros y la decoras localmente, o la decoramos nosotros después. El precio comienza en $3.50 por unidad FOB.",
      },
      {
        title: "Más de 50 colores en stock",
        desc: "Negro, azul marino, blanco, caqui, oliva, borgoña, verde bosque, royal y más, todos en sarga 100% algodón 108*56. Los colores en stock son los que se envían más rápido. También ofrecemos colores Pantone TPX personalizados con una MOQ pequeña de teñido.",
      },
      {
        title: "Etiquetas internas neutras o con tu marca",
        desc: "Las gorras blank suelen necesitar una etiqueta interna de seguridad para que tus compradores nunca vean otra marca. Suministramos etiquetas grises neutras como estándar, o imprimimos el nombre de tu marca en la banda de sudor sin costo adicional de herramienta.",
      },
      {
        title: "Estructuras y paneles",
        desc: "5 paneles, 6 paneles, con y sin estructura, perfil bajo y perfil alto, además de frentes de espuma tipo trucker, beanies y gorras bucket. Cada base está disponible en blank para que armes una línea coherente en todos los estilos.",
      },
      {
        title: "Cierres",
        desc: "Snapback de plástico, snapback metálico, correa del mismo tejido con hebilla corredera de latón, velcro o bandas elásticas flexfit. Puedes combinar cierres en el mismo pedido: los mantenemos como SKU separados para tu inventario.",
      },
      {
        title: "Calidad lista para decorar",
        desc: "Blank no significa barato. Las gorras pasan las mismas cinco etapas de control: revisión de tejido, simetría de paneles, integridad de costuras, corte de hilos y auditoría de empaque. Las viseras planas se mantienen planas después del envío.",
      },
    ],
    specsTitle: "Ficha técnica de la gorra blank",
    specs: [
      { k: "Tejido", v: "Sarga 100% algodón 108*56 · algodón cepillado · lona" },
      { k: "Paneles", v: "5 paneles · 6 paneles · sin estructura · trucker" },
      { k: "Colores", v: "Más de 50 colores en stock · igualación Pantone TPX a solicitud" },
      { k: "Cierre", v: "Snapback de plástico / metal · strapback · velcro · elástico" },
      { k: "MOQ", v: "200 pcs por estilo / color" },
      { k: "Precio", v: "$3.50 – $7.00 por unidad FOB" },
      { k: "Plazo de entrega", v: "Muestras 7 días · producción en masa 15-20 días" },
      { k: "Empaque", v: "25 pcs / bolsa de polietileno / caja interna · cartones de exportación" },
    ],
    specsNote:
      "¿Compras para serigrafía? Pide un 6 paneles de visera plana en 100% algodón: la impresión fija mejor sobre sarga de algodón que sobre truckers de malla de poliéster.",
    stepsTitle: "Cómo funcionan los pedidos blank",
    steps: [
      { n: "01", t: "Elige bases y colores", d: "Indícanos los estilos y colores, o pide una carta de color con muestras físicas de tejido antes de decidir." },
      { n: "02", t: "Confirma la muestra", d: "Enviamos una muestra blank por estilo en 7 días para que primero pruebes la decoración, el calce y el encogimiento." },
      { n: "03", t: "Producción y envío", d: "15-20 días de producción y luego envío aéreo exprés (5-8 días) o marítimo. Lista de empaque y fotos de control de calidad antes del despacho." },
    ],
    stylesTitle: "Estilos blank y listos para decorar",
    products: [
      {
        href: "/product/ladies-plain-blank-cotton-sports-cap",
        name: "Gorra Deportiva Blank Lisa de Algodón para Dama",
        img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
        note: "Calce femenino, sarga de algodón fina",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Gorra de Béisbol Multicolor con Estructura",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "Perfil alto, más de 30 colores",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Gorra 6 Paneles Bordada Personalizada Transpirable",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Perfil deportivo ventilado",
      },
    ],
  },
};

export default function BlankCapsPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wholesale Blank Caps Supplier — Plain Hat Manufacturer China",
    description:
      "Bulk blank caps direct from the factory: 50+ stock colors, 100% cotton twill, no-logo pricing from $3.50 FOB, MOQ 200pcs, 7-day samples.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/wholesale-blank-caps-supplier",
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
            {c.featuresTitle}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            {c.featuresIntro}
          </p>
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.specsTitle}
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {c.specs.map((s, i) => (
                  <tr key={s.k} className={i % 2 ? "bg-gray-50/60" : ""}>
                    <th className="text-left p-4 font-black text-black w-1/3 align-top">{s.k}</th>
                    <td className="p-4 text-gray-600">{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {c.specsNote}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.stepsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">01</p>
              <h3 className="font-black text-black mb-2">{c.steps[0].t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {c.steps[0].d}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">02</p>
              <h3 className="font-black text-black mb-2">{c.steps[1].t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {c.steps[1].d}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">03</p>
              <h3 className="font-black text-black mb-2">{c.steps[2].t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {c.steps[2].d}
              </p>
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
