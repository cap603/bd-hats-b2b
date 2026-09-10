"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom Bucket Hats",
      badge: "Fishing Hats · Summer & Festival",
      title: "Custom",
      accent: "Bucket Hats",
      subtitle:
        "Soft-brim bucket hats in cotton twill, corduroy, ripstop and reversible builds — decorated with embroidery, patches or print at the factory.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "Reversible Options", "7-Day Samples"],
    },
    featuresTitle: "How We Build a Bucket Hat",
    featuresIntro:
      "Bucket hats have no structure to hide behind — the brim shape, panel symmetry and fabric weight are all visible at a glance. These are the details we hold to spec.",
    features: [
      {
        title: "Panel Count & Crown Depth",
        desc: "Four-panel and six-panel crowns, with classic deep or modern shallow profiles. We set crown depth and circumference from your reference hat so the fit matches what your buyers already expect.",
      },
      {
        title: "Brim Shape & Stitch",
        desc: "Short downturned, mid, or wide floppy brims, with single, double or triple-row topstitching. Brim edge finish can be folded, bound or raw — each gives a noticeably different casual or premium feel.",
      },
      {
        title: "Fabric Options",
        desc: "Cotton twill 108*56, heavy canvas, corduroy, ripstop nylon, cotton-linen and terry towelling for resort lines. Over 50 colours in stock; Pantone TPX matching available with a small dyeing minimum.",
      },
      {
        title: "Reversible Construction",
        desc: "Double-face bucket hats with two fabrics and two colourways in one SKU. A strong retail proposition — one hat, two looks — and a popular choice for festival and outdoor brands.",
      },
      {
        title: "Decoration Methods",
        desc: "Flat or 3D puff embroidery on the front panel, woven and leather patches, direct screen print, and custom under-brim prints. On reversible hats we plan where the decoration lands so both faces stay wearable.",
      },
      {
        title: "Sweatband & Details",
        desc: "Cotton or moisture-wicking sweatbands, chin straps, adjustable toggle cords, eyelets and custom inner labels. Small hardware choices decide whether a bucket hat reads as a cheap giveaway or a retail product.",
      },
    ],
    compareTitle: "Bucket Hat Brims Compared",
    compareHead: ["Brim", "Depth", "Look", "Best for"],
    compare: [
      { brim: "Short downturned", depth: "Approx. 4 cm", look: "Minimal, modern", best: "Streetwear and workwear crossovers" },
      { brim: "Mid", depth: "Approx. 6 cm", look: "Classic bucket", best: "General retail, unisex programs" },
      { brim: "Wide floppy", depth: "Approx. 8 cm+", look: "Relaxed, resort", best: "Festival, beach and holiday brands" },
      { brim: "Reversible wide", depth: "Approx. 7 cm", look: "Two-in-one", best: "Concept drops and gift retail" },
    ],
    compareNote:
      "Brim depth must be measured on the finished hat after the fabric relaxes — we confirm it on the pre-production sample, not on the pattern file.",
    pricingTitle: "Pricing, MOQ & Lead Time",
    pricing: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "200 Pcs", label: "MOQ per style / colour" },
      { value: "7 / 15-20 Days", label: "Sample / bulk production" },
    ],
    pricingNote:
      "A single-colour cotton bucket sits at the low end. Reversible constructions, corduroy or terry fabrics, wide floppy brims and multi-position decoration move toward the top of the range. Bucket hats can be produced in the same order as caps and beanies to consolidate freight.",
    productsTitle: "Order Alongside Your Bucket Hats",
    productsNote: "One shipment, several categories",
    products: [
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Same washed-cotton aesthetic",
      },
      {
        href: "/product/personalised-two-tone-a-frame-cap",
        name: "Personalised Two-Tone A-Frame Cap",
        img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
        note: "Contrast styling for the same drop",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "30+ colours to match your palette",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorros Bucket",
      badge: "Sombreros de Pescador · Verano y Festivales",
      title: "Gorros",
      accent: "Bucket Personalizados",
      subtitle:
        "Gorros bucket de ala suave en sarga de algodón, pana, ripstop y versiones reversibles, decorados con bordado, parches o impresión en fábrica.",
      pills: ["MOQ 200 uds", "Desde $3.50 FOB", "Opción reversible", "Muestras en 7 días"],
    },
    featuresTitle: "Cómo fabricamos un gorro bucket",
    featuresIntro:
      "El gorro bucket no tiene estructura que lo disimule: la forma del ala, la simetría de los paneles y el gramaje de la tela se ven a simple vista. Estos son los detalles que respetamos.",
    features: [
      {
        title: "Número de paneles y profundidad de copa",
        desc: "Copas de cuatro y seis paneles, con perfiles clásico profundo o moderno y poco profundo. Definimos la profundidad y el contorno a partir de tu gorro de referencia para que el ajuste coincida con lo que tus clientes ya esperan.",
      },
      {
        title: "Forma y costura del ala",
        desc: "Alas cortas hacia abajo, medias o anchas y caídas, con costura superior de una, dos o tres hileras. El borde puede ir doblado, ribeteado o en crudo: cada acabado da una sensación informal o premium claramente distinta.",
      },
      {
        title: "Opciones de tela",
        desc: "Sarga de algodón 108*56, lona pesada, pana, nailon ripstop, mezcla de algodón y lino, y rizo de toalla para líneas de resort. Más de 50 colores en stock; igualación Pantone TPX disponible con un mínimo de teñido reducido.",
      },
      {
        title: "Construcción reversible",
        desc: "Gorros de doble cara con dos telas y dos combinaciones de color en un solo SKU. Una propuesta muy atractiva en retail (un gorro, dos looks) y una opción popular entre marcas de festivales y outdoor.",
      },
      {
        title: "Métodos de decoración",
        desc: "Bordado plano o 3D puff en el panel frontal, parches tejidos y de cuero, serigrafía directa e impresión personalizada bajo el ala. En los reversibles planificamos la ubicación de la decoración para que ambas caras se puedan usar.",
      },
      {
        title: "Banda de sudor y detalles",
        desc: "Bandas de sudor de algodón o de secado rápido, barboquejo, cordón con regulador, ojales y etiquetas interiores personalizadas. Los pequeños herrajes deciden si un bucket parece un artículo promocional barato o un producto de retail.",
      },
    ],
    compareTitle: "Comparación de alas del gorro bucket",
    compareHead: ["Ala", "Profundidad", "Estilo", "Ideal para"],
    compare: [
      { brim: "Corta hacia abajo", depth: "Aprox. 4 cm", look: "Minimalista, moderno", best: "Cruces de streetwear y workwear" },
      { brim: "Media", depth: "Aprox. 6 cm", look: "Bucket clásico", best: "Retail general, programas unisex" },
      { brim: "Ancha y caída", depth: "Aprox. 8 cm o más", look: "Relajado, resort", best: "Marcas de festivales, playa y vacaciones" },
      { brim: "Ancha reversible", depth: "Aprox. 7 cm", look: "Dos en uno", best: "Colecciones conceptuales y regalería" },
    ],
    compareNote:
      "La profundidad del ala debe medirse sobre el gorro terminado, una vez que la tela se relaja: lo confirmamos en la muestra de preproducción, no sobre el patrón.",
    pricingTitle: "Precio, MOQ y Plazo de Entrega",
    pricing: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "200 uds", label: "MOQ por estilo / color" },
      { value: "7 / 15-20 días", label: "Muestra / producción en masa" },
    ],
    pricingNote:
      "Un bucket sencillo de algodón se ubica en la parte baja del rango. Las construcciones reversibles, las telas de pana o rizo, las alas anchas y la decoración en varias posiciones llevan el precio hacia la parte alta. Los gorros bucket pueden producirse en el mismo pedido que las gorras y los gorros de punto para consolidar el flete.",
    productsTitle: "Combina tu pedido con estos estilos",
    productsNote: "Un solo envío, varias categorías",
    products: [
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Misma estética de algodón lavado",
      },
      {
        href: "/product/personalised-two-tone-a-frame-cap",
        name: "Personalised Two-Tone A-Frame Cap",
        img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
        note: "Contraste para la misma colección",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "Más de 30 colores para tu paleta",
      },
    ],
  },
};

export default function BucketHatsPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Bucket Hats Manufacturer — Wholesale Fisherman Hats",
    description:
      "Custom bucket hats direct from the factory: cotton twill, corduroy, ripstop and reversible builds with embroidery, patches or print. MOQ 200pcs, 7-day samples.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-bucket-hats-manufacturer",
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
                  <tr key={row.brim} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.brim}</td>
                    <td className="p-4 text-gray-600">{row.depth}</td>
                    <td className="p-4 text-gray-600">{row.look}</td>
                    <td className="p-4 text-gray-600">{row.best}</td>
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
