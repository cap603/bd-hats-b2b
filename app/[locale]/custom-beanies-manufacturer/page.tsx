"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom Beanies",
      badge: "Knit Hats · Winter Programs",
      title: "Custom",
      accent: "Beanies Manufacturer",
      subtitle:
        "Cuffed, uncuffed, pom-pom and jacquard knit beanies — yarn, gauge and stretch built to your spec, with your logo applied in the factory.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "Wool & Acrylic Blends", "7-Day Samples"],
    },
    featuresTitle: "What We Control in a Knit Beanie",
    featuresIntro:
      "A beanie is a simple product that is easy to get wrong: the wrong yarn pills after three wears and the wrong gauge makes it too tight. These are the variables we lock down.",
    features: [
      {
        title: "Knit Structures",
        desc: "Cuffed (double-layer fold), uncuffed, short skull cap, long slouchy fit, and pom-pom styles. Rib heights, fold depth and overall length are all set to your reference sample or spec sheet.",
      },
      {
        title: "Yarn & Materials",
        desc: "100% acrylic, acrylic-wool blends, 100% merino, lambswool, recycled polyester and cotton blends. We confirm the exact blend on the quote — no substituting a cheaper yarn after order.",
      },
      {
        title: "Gauge, Stretch & Fit",
        desc: "3GG, 5GG and 7GG knit gauges give visibly different texture and stretch. We send a sample in the actual gauge so you can test the fit on real heads before committing to thousands of units.",
      },
      {
        title: "Jacquard & All-Over Patterns",
        desc: "Your pattern knitted directly into the fabric — stripes, repeat logos or full graphic designs. This is the most durable branding method for knitwear because the colour is in the yarn, not printed on top.",
      },
      {
        title: "Patches & Embroidery",
        desc: "Woven patches, leather patches, PVC patches and direct embroidery are all applied in-house. Embroidery on knit fabric needs a stabiliser backing to avoid distortion — we build that into the sample.",
      },
      {
        title: "Seasonal Production Planning",
        desc: "Winter programs need to land before the cold season starts. Book your production slot early: standard lead time is 15-20 days after sample approval, plus 5-8 days air express, and Q3/Q4 capacity fills first.",
      },
    ],
    compareTitle: "Which Beanie Style Sells Best",
    compareHead: ["Style", "Structure", "Best for"],
    compare: [
      { style: "Cuffed beanie", structure: "Double-layer fold, warmest", best: "General retail, corporate gifts, outdoor" },
      { style: "Uncuffed / short", structure: "Single layer, minimal", best: "Streetwear, skater and fashion drops" },
      { style: "Slouchy / long", structure: "Extra length, drops at the back", best: "Lifestyle brands, oversized looks" },
      { style: "Pom-pom", structure: "Cuffed plus yarn pom", best: "Gift shops, kids and winter fashion" },
      { style: "Fisherman roll", structure: "Short, tight roll", best: "Workwear, utilitarian and fishing brands" },
    ],
    compareNote:
      "Want both a knitted graphic and an embroidery hit? Choose jacquard for the pattern plus a woven patch — we quote the combination as one SKU.",
    pricingTitle: "Pricing, MOQ & Lead Time",
    pricing: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "200 Pcs", label: "MOQ per style / colour" },
      { value: "7 / 15-20 Days", label: "Sample / bulk production" },
    ],
    pricingNote:
      "Simple acrylic beanies sit at the low end; merino blends with jacquard knitting or leather patches sit at the high end. Custom yarn dyeing carries a minimum quantity per colour — ask us before designing a palette with many shades.",
    productsTitle: "Our Beanie Range",
    productsNote: "MOQ 200 pcs · factory direct",
    products: [
      {
        href: "/product/custom-embroidery-knitted-beanie",
        name: "Custom Embroidery Knitted Beanie",
        img: "https://s.alicdn.com/@sc04/kf/H7fafba7566ca4703a3f63a78943c98d4u.jpg",
        note: "100% acrylic · 61 stock colours",
      },
      {
        href: "/product/retro-washed-knitted-beanie",
        name: "Retro Washed Knitted Beanie",
        img: "https://s.alicdn.com/@sc04/kf/H379e73c6541e4b8ca551a5dcbc322440H.jpg",
        note: "Vintage wash · core yarn",
      },
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Outdoor Performance 5 Panel Cap",
        img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
        note: "Winter-to-summer outdoor programs",
      },
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Knits plus caps in one drop",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Pairs with beanies for a two-season line",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorros de Punto",
      badge: "Gorros Tejidos · Programas de Invierno",
      title: "Fabricante de",
      accent: "Gorros de Punto",
      subtitle:
        "Gorros con doblez, sin doblez, con pompón y de jacquard: hilo, galga y elasticidad según tu especificación, con tu logotipo aplicado en la fábrica.",
      pills: ["MOQ 200 uds", "Desde $3.50 FOB", "Lana y acrílico", "Muestras en 7 días"],
    },
    featuresTitle: "Qué controlamos en un gorro de punto",
    featuresIntro:
      "Un gorro es un producto sencillo pero fácil de arruinar: un hilo equivocado forma bolitas tras tres usos y una galga incorrecta lo deja demasiado ajustado. Estas son las variables que fijamos.",
    features: [
      {
        title: "Estructuras de tejido",
        desc: "Con doblez (doble capa), sin doblez, tipo skull corto, largo tipo slouchy y con pompón. La altura del canalé, la profundidad del doblez y el largo total se ajustan a tu muestra de referencia o ficha técnica.",
      },
      {
        title: "Hilos y materiales",
        desc: "100% acrílico, mezclas de acrílico y lana, 100% merino, lana de cordero, poliéster reciclado y mezclas con algodón. Confirmamos la mezcla exacta en la cotización: no sustituimos por un hilo más barato después del pedido.",
      },
      {
        title: "Galga, elasticidad y talla",
        desc: "Las galgas 3GG, 5GG y 7GG dan una textura y elasticidad visiblemente distintas. Enviamos una muestra en la galga real para que compruebes el ajuste antes de comprometer miles de unidades.",
      },
      {
        title: "Jacquard y diseños integrales",
        desc: "Tu diseño se teje directamente en la tela: rayas, logotipos repetidos o gráficos completos. Es el método de personalización más duradero para tejidos de punto, porque el color está en el hilo y no impreso encima.",
      },
      {
        title: "Parches y bordado",
        desc: "Parches tejidos, de cuero, de PVC y bordado directo, todos aplicados en fábrica. El bordado sobre tejido de punto necesita un estabilizador para no deformarse: lo incluimos desde la muestra.",
      },
      {
        title: "Planificación por temporada",
        desc: "Los programas de invierno deben llegar antes de que empiece el frío. Reserva tu turno de producción con antelación: el plazo estándar es de 15-20 días tras aprobar la muestra, más 5-8 días de envío aéreo, y la capacidad del tercer y cuarto trimestre se llena primero.",
      },
    ],
    compareTitle: "Qué estilo de gorro se vende mejor",
    compareHead: ["Estilo", "Estructura", "Ideal para"],
    compare: [
      { style: "Con doblez", structure: "Doble capa, el más abrigado", best: "Retail general, regalos corporativos, outdoor" },
      { style: "Sin doblez / corto", structure: "Una sola capa, minimalista", best: "Streetwear, skater y colecciones de moda" },
      { style: "Largo tipo slouchy", structure: "Largo extra, cae en la nuca", best: "Marcas lifestyle, looks oversize" },
      { style: "Con pompón", structure: "Con doblez más pompón de hilo", best: "Tiendas de regalo, infantil y moda de invierno" },
      { style: "Pescador enrollado", structure: "Corto y con rollo ajustado", best: "Workwear, marcas utilitarias y de pesca" },
    ],
    compareNote:
      "¿Quieres un gráfico tejido y también un bordado? Elige jacquard para el diseño y añade un parche tejido: cotizamos la combinación como un solo SKU.",
    pricingTitle: "Precio, MOQ y Plazo de Entrega",
    pricing: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "200 uds", label: "MOQ por estilo / color" },
      { value: "7 / 15-20 días", label: "Muestra / producción en masa" },
    ],
    pricingNote:
      "Los gorros sencillos de acrílico se ubican en la parte baja del rango; las mezclas con merino, el tejido jacquard o los parches de cuero se ubican en la parte alta. El teñido de hilo a medida exige una cantidad mínima por color: consúltanos antes de diseñar una paleta con muchos tonos.",
    productsTitle: "Nuestra línea de gorros",
    productsNote: "MOQ 200 uds · directo de fábrica",
    products: [
      {
        href: "/product/custom-embroidery-knitted-beanie",
        name: "Custom Embroidery Knitted Beanie",
        img: "https://s.alicdn.com/@sc04/kf/H7fafba7566ca4703a3f63a78943c98d4u.jpg",
        note: "100% acrílico · 61 colores en stock",
      },
      {
        href: "/product/retro-washed-knitted-beanie",
        name: "Retro Washed Knitted Beanie",
        img: "https://s.alicdn.com/@sc04/kf/H379e73c6541e4b8ca551a5dcbc322440H.jpg",
        note: "Lavado vintage · hilo core",
      },
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Outdoor Performance 5 Panel Cap",
        img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
        note: "Programas outdoor de invierno a verano",
      },
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Gorros de punto y gorras en una misma colección",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
        note: "Combina con gorros para una línea de dos temporadas",
      },
    ],
  },
};

export default function BeaniesPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Beanies Manufacturer — Wholesale Knit Hats China",
    description:
      "Custom knit beanies direct from the factory: cuffed, pom-pom, jacquard and patch styles in wool blends or acrylic. MOQ 200pcs, 7-day samples.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-beanies-manufacturer",
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
                  <tr key={row.style} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.style}</td>
                    <td className="p-4 text-gray-600">{row.structure}</td>
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
