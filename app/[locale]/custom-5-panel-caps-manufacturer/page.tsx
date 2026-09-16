"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom 5-Panel Caps",
      badge: "5-Panel · A-Frame · Camper",
      title: "Custom",
      accent: "5-Panel Caps",
      subtitle:
        "Seam-free front panels built for oversized 3D puff logos — A-frame and camper profiles, made to your reference cap.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "Seam-Free Front", "50+ Colors"],
    },
    featuresTitle: "Built Around the Front Panel",
    featuresIntro:
      "Every design decision on a 5-panel serves one goal: giving your logo the biggest, cleanest surface possible. Here is how we build it.",
    features: [
      {
        title: "One Unbroken Front Panel",
        desc: "A 5-panel cap has no centre seam across the front, which gives a single flat canvas for your logo. There is no seam tape cutting through artwork, so large 3D puff logos stay perfectly symmetrical — the main reason streetwear brands choose 5-panels over 6-panels.",
      },
      {
        title: "A-Frame & Camper Profiles",
        desc: "We build both the A-frame (mid to high profile, flat brim) and the camper / runner style (lower profile, shorter brim). Profile height, brim length and crown depth are all adjustable to your reference sample.",
      },
      {
        title: "The Ideal 3D Puff Canvas",
        desc: "High-density foam underlay plus a seam-free panel means embroidery can reach 4-6 mm of relief without distortion. We digitise your logo specifically for the curve of the front panel, not as a flat transfer.",
      },
      {
        title: "Fabric Options",
        desc: "108*56 heavy cotton twill, brushed cotton, ripstop nylon, corduroy, canvas and cotton-nylon blends. Contrast crowns, contrast visors and piping are all standard options. Over 50 colors held in stock.",
      },
      {
        title: "Closures & Hardware",
        desc: "Plastic snapback, metal snapback, self-fabric strap with brass slide, plastic buckle, or elastic flexfit. Eyelets can be embroidered, laser-cut or metal-riveted depending on the look you want.",
      },
      {
        title: "Low MOQ for a Structured Cap",
        desc: "MOQ is 200 pieces per style and color — the same as our 6-panels and dad hats. That lets you run several colorways in one order instead of committing your whole budget to a single SKU.",
      },
    ],
    compareTitle: "5-Panel or 6-Panel?",
    compareCols: ["Aspect", "5-Panel", "6-Panel"],
    compare: [
      { aspect: "Front panel", five: "Single panel, no centre seam", six: "Two front panels with centre seam" },
      { aspect: "Logo canvas", five: "Widest — ideal for large 3D puff", six: "Split by seam, better for narrow logos" },
      { aspect: "Shape", five: "Flatter, more angular A-frame", six: "Rounder, taller traditional crown" },
      { aspect: "Typical use", five: "Streetwear, camp caps, branded drops", six: "Sports, corporate, classic retail" },
      { aspect: "MOQ", five: "200 pcs", six: "200 pcs" },
    ],
    compareNote:
      "Still deciding? Send us your logo file — we will tell you honestly which construction will reproduce it better, and quote both so you can compare.",
    pricingTitle: "Pricing & Production",
    stats: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "7 / 15-20 Days", label: "Sample / bulk" },
      { value: "In-House", label: "QC team" },
    ],
    pricingNote:
      "A plain 5-panel in cotton twill sits at the low end of the range. Adding heavy 3D puff embroidery, contrast panels, custom lining and retail packaging moves it toward the top. Digitising, thread colour matching and one round of sample revisions are included.",
    stylesTitle: "5-Panel Styles From Our Catalog",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Custom 3D Embroidered 5 Panel Gorras",
        img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
        note: "Best seller, 108*56 cotton twill",
      },
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Outdoor Performance 5 Panel Cap",
        img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
        note: "Lightweight, moisture-wicking",
      },
      {
        href: "/product/two-tone-3d-embroidery-a-frame-cap",
        name: "Two-Tone 3D Embroidery A-Frame Cap",
        img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
        note: "Contrast visor, structured A-frame",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras de 5 Paneles Personalizadas",
      badge: "5 paneles · A-frame · camper",
      title: "Gorras de",
      accent: "5 Paneles Personalizadas",
      subtitle:
        "Paneles frontales sin costura, diseñados para logos 3D puff de gran tamaño: perfiles A-frame y camper, hechos según tu gorra de referencia.",
      pills: ["MOQ 200 pcs", "Desde $3.50 FOB", "Frente sin costura", "50+ colores"],
    },
    featuresTitle: "Diseñada en torno al panel frontal",
    featuresIntro:
      "Cada decisión de diseño en un 5 paneles sirve a un objetivo: darle a tu logo la superficie más grande y limpia posible. Así es como la construimos.",
    features: [
      {
        title: "Un panel frontal sin cortes",
        desc: "Una gorra de 5 paneles no tiene costura central en el frente, lo que deja un lienzo plano y único para tu logo. No hay cinta de costura que atraviese el diseño, así que los logos 3D puff de gran tamaño se mantienen perfectamente simétricos: la principal razón por la que las marcas de streetwear eligen 5 paneles en lugar de 6.",
      },
      {
        title: "Perfiles A-frame y camper",
        desc: "Fabricamos tanto el A-frame (perfil medio a alto, visera plana) como el estilo camper / runner (perfil más bajo, visera más corta). La altura del perfil, el largo de la visera y la profundidad de la corona se ajustan a tu muestra de referencia.",
      },
      {
        title: "El lienzo ideal para bordado 3D puff",
        desc: "Una base de espuma de alta densidad más un panel sin costura permiten que el bordado alcance 4-6 mm de relieve sin deformarse. Digitalizamos tu logo específicamente para la curvatura del panel frontal, no como una transferencia plana.",
      },
      {
        title: "Opciones de tejido",
        desc: "Sarga pesada de algodón 108*56, algodón cepillado, nylon ripstop, pana, lona y mezclas de algodón y nylon. Coronas contrastantes, viseras contrastantes y vivos son opciones estándar. Mantenemos más de 50 colores en stock.",
      },
      {
        title: "Cierres y herrajes",
        desc: "Snapback de plástico, snapback metálico, correa del mismo tejido con hebilla corredera de latón, hebilla de plástico o flexfit elástico. Los ojales pueden ir bordados, cortados con láser o remachados en metal según el look que busques.",
      },
      {
        title: "MOQ baja para una gorra con estructura",
        desc: "La cantidad mínima de pedido (MOQ) es de 200 piezas por estilo y color, igual que en nuestros 6 paneles y gorras dad. Así puedes producir varias combinaciones de color en un solo pedido en lugar de comprometer todo tu presupuesto en un único SKU.",
      },
    ],
    compareTitle: "¿5 paneles o 6 paneles?",
    compareCols: ["Aspecto", "5 paneles", "6 paneles"],
    compare: [
      { aspect: "Panel frontal", five: "Panel único, sin costura central", six: "Dos paneles frontales con costura central" },
      { aspect: "Lienzo para el logo", five: "El más amplio: ideal para 3D puff de gran tamaño", six: "Dividido por la costura, mejor para logos estrechos" },
      { aspect: "Forma", five: "A-frame más plano y anguloso", six: "Corona tradicional más redonda y alta" },
      { aspect: "Uso típico", five: "Streetwear, gorras camp, lanzamientos de marca", six: "Deportes, corporativo, retail clásico" },
      { aspect: "MOQ", five: "200 pcs", six: "200 pcs" },
    ],
    compareNote:
      "¿Sigues decidiendo? Envíanos el archivo de tu logo y te diremos con honestidad qué construcción lo reproduce mejor; cotizamos ambas para que compares.",
    pricingTitle: "Precio y producción",
    stats: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "7 / 15-20 Days", label: "Muestra / producción en masa" },
      { value: "Interno", label: "Equipo QC" },
    ],
    pricingNote:
      "Un 5 paneles liso en sarga de algodón queda en el rango bajo. Agregar bordado 3D puff intenso, paneles contrastantes, forro personalizado y empaque retail lo lleva hacia el tope. La digitalización, la igualación de color de hilo y una ronda de revisiones de muestra están incluidas.",
    stylesTitle: "Estilos de 5 paneles de nuestro catálogo",
    products: [
      {
        href: "/product/custom-3d-embroidered-5-panel-gorras",
        name: "Gorras 5 Paneles con Bordado 3D Personalizado",
        img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
        note: "Más vendida, sarga de algodón 108*56",
      },
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Gorra 5 Paneles de Alto Rendimiento Outdoor",
        img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
        note: "Ligera, con control de humedad",
      },
      {
        href: "/product/two-tone-3d-embroidery-a-frame-cap",
        name: "Gorra A-Frame Bicolor con Bordado 3D",
        img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
        note: "Visera contrastante, A-frame con estructura",
      },
    ],
  },
};

export default function FivePanelPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom 5-Panel Caps Manufacturer — Wholesale 5 Panel Hats",
    description:
      "Custom 5-panel caps from the factory: A-frame and camper styles, seamless front panel for 3D puff embroidery, 30+ colors, MOQ 200pcs, samples in 7 days.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-5-panel-caps-manufacturer",
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.compareTitle}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-black w-1/4">{c.compareCols[0]}</th>
                  <th className="text-left p-4 font-black">{c.compareCols[1]}</th>
                  <th className="text-left p-4 font-black">{c.compareCols[2]}</th>
                </tr>
              </thead>
              <tbody>
                {c.compare.map((row) => (
                  <tr key={row.aspect} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.aspect}</td>
                    <td className="p-4 text-gray-600">{row.five}</td>
                    <td className="p-4 text-gray-600">{row.six}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {c.compareNote}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            {c.pricingTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <p className="text-gray-600 text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            {c.pricingNote}
          </p>
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
