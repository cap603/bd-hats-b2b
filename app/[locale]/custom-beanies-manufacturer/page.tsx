"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";
import { trackWhatsAppClick } from "../../lib/tracking";
import { MessageCircle, ArrowRight, Layers, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom Beanies",
      badge: "⚡ Q4 Urgent Winter Drops · Knitwear Program",
      title: "Custom",
      accent: "Beanies Manufacturer",
      subtitle:
        "Cuffed, fisherman, satin-lined and custom jacquard knit beanies — yarn gauge, stretch and rib depth built to your tech pack, with factory-direct wholesale pricing from $3.50.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "7-Day Samples", "15-Day Fast Turnaround", "Wool, Acrylic & Satin Lined"],
    },
    silhouettesTitle: "Core Winter Knit Silhouettes for Brand Drops",
    silhouettesSub:
      "4 proven silhouettes ready for custom private labeling. Fast pre-production sampling in 7 days, bulk production in 15 days.",
    silhouettes: [
      {
        tag: "Best Seller",
        name: "Classic Cuffed Ribbed Beanie",
        gauge: "5GG / 7GG Ribbed Knit",
        yarn: "100% Soft Acrylic / Merino Wool Blend",
        bestLogo: "3D Puff Embroidery / Woven Patch",
        desc: "The universal retail staple. Deep double-layer foldover cuff delivers maximum ear warmth and optimal surface area for front patch branding.",
      },
      {
        tag: "Streetwear Pick",
        name: "Fisherman Short Roll Beanie",
        gauge: "5GG Heavy Ribbed Knit",
        yarn: "Anti-Pilling Core Spun Yarn",
        bestLogo: "Clip Label on Fold / Direct Embroidery",
        desc: "Shallow crown designed to sit right on or above the ears. Chunky ribbed structure with tight elastic recovery. Top seller for skate and workwear collections.",
      },
      {
        tag: "High Margin",
        name: "Satin-Lined Anti-Frizz Beanie",
        gauge: "7GG Fine Knit + Satin Interior",
        yarn: "Cashmere-Feel Acrylic + 100% Silk-Touch Satin",
        bestLogo: "Laser-Etched Leather Patch / Metal Badge",
        desc: "Engineered specifically for curly hair and static prevention. Protects curls from moisture loss and breakage. High-margin favorite for premium lifestyle drops.",
      },
      {
        tag: "Holiday & Ski",
        name: "Custom Jacquard Pompom Beanie",
        gauge: "3GG / 5GG Double-Layer Jacquard",
        yarn: "Multi-Color Dyed Yarn + Matching Pompom",
        bestLogo: "Full Knitted Pattern + Foldover Cuff Hit",
        desc: "All-over multi-color knitted artwork paired with fluffy yarn or faux-fur pompom. Essential for winter sports, ski resorts, and festive holiday drops.",
      },
    ],
    featuresTitle: "What We Control in a Knit Beanie",
    featuresIntro:
      "A beanie is a simple product that is easy to get wrong: the wrong yarn pills after three wears and the wrong gauge makes it too tight. These are the variables we lock down in our knitting workshop.",
    features: [
      {
        title: "Knit Structures & Rib Heights",
        desc: "Cuffed (double-layer fold), uncuffed, short skull cap, long slouchy fit, and pom-pom styles. Rib heights, fold depth and overall length are all set to your reference sample or spec sheet.",
      },
      {
        title: "Yarn & Raw Materials",
        desc: "100% acrylic, acrylic-wool blends, 100% merino wool, lambswool, recycled polyester and cotton blends. We confirm the exact blend on the quote — no substituting a cheaper yarn after order.",
      },
      {
        title: "Gauge, Stretch & Head Fit",
        desc: "3GG, 5GG and 7GG knit gauges give visibly different texture and stretch. We send a sample in the actual gauge so you can test the fit on real heads before committing to thousands of units.",
      },
      {
        title: "Jacquard & All-Over Patterns",
        desc: "Your pattern knitted directly into the fabric — stripes, repeat logos or full graphic designs. This is the most durable branding method for knitwear because the colour is in the yarn, not printed on top.",
      },
      {
        title: "Patches & 3D Embroidery",
        desc: "Woven patches, leather patches, PVC rubber patches and direct 3D embroidery are all applied in-house. Embroidery on knit fabric uses a specialised backing stabiliser to prevent puckering.",
      },
      {
        title: "Urgent Q4 Winter Production Slots",
        desc: "Winter programs need to land before the cold season peak. Book your production slot early: standard turnaround is 15-20 days after sample approval, plus 5-8 days air express directly to your door.",
      },
    ],
    compareTitle: "Which Beanie Style Sells Best",
    compareHead: ["Style", "Structure", "Best for"],
    compare: [
      { style: "Cuffed beanie", structure: "Double-layer fold, warmest", best: "General retail, corporate gifts, outdoor" },
      { style: "Fisherman roll", structure: "Short, tight roll above ears", best: "Workwear, streetwear, utilitarian brands" },
      { style: "Uncuffed / short", structure: "Single layer, minimal", best: "Streetwear, skater and fashion drops" },
      { style: "Slouchy / long", structure: "Extra length, drops at the back", best: "Lifestyle brands, oversized looks" },
      { style: "Pom-pom jacquard", structure: "Cuffed plus yarn/fur pom", best: "Ski resorts, holiday gifts and winter fashion" },
    ],
    compareNote:
      "Want both a knitted graphic and an embroidery hit? Choose jacquard for the pattern plus a woven patch — we quote the combination as one unified SKU.",
    pricingTitle: "Wholesale Pricing, MOQ & Turnaround",
    pricing: [
      { value: "From $3.50", label: "Per unit, FOB wholesale" },
      { value: "200 Pcs", label: "MOQ per style / colour" },
      { value: "7 / 15 Days", label: "Sample / bulk production" },
    ],
    pricingNote:
      "Simple acrylic beanies sit at the $3.50 floor; merino blends with complex jacquard knitting or genuine leather patches sit around $5.00–$7.00. Stock yarn cards contain 60+ Pantone shades with zero dyeing delay.",
    productsTitle: "Our Beanie Range & Stock Styles",
    productsNote: "MOQ 200 pcs · factory direct",
    products: [
      {
        href: "/product/custom-embroidery-knitted-beanie",
        name: "Custom Embroidery Knitted Beanie",
        img: "/images/products/custom-embroidery-knitted-beanie.webp",
        note: "100% acrylic · 61 stock colours",
      },
      {
        href: "/product/retro-washed-knitted-beanie",
        name: "Retro Washed Knitted Beanie",
        img: "/images/products/retro-washed-knitted-beanie.webp",
        note: "Vintage wash · core yarn",
      },
      {
        href: "/product/silk-lined-pompom-knitted-beanie",
        name: "Silk Lined Pompom Knitted Beanie",
        img: "/images/products/silk-lined-pompom-knitted-beanie.webp",
        note: "Satin lining · pompom",
      },
      {
        href: "/product/pompom-fur-ball-knitted-beanie",
        name: "Pompom Fur Ball Knitted Beanie",
        img: "/images/products/pompom-fur-ball-knitted-beanie.webp",
        note: "Fur-ball topper · kids & adult",
      },
      {
        href: "/product/multi-colour-satin-lined-winter-beanie",
        name: "Multi-Colour Satin Lined Winter Beanie",
        img: "/images/products/multi-colour-satin-lined-winter-beanie.webp",
        note: "Multi-colour yarn · satin lining",
      },
    ],
    companionTitle: "Companion Caps for a Two-Season Line",
    companionProducts: [
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Outdoor Performance 5 Panel Cap",
        img: "/images/products/outdoor-performance-5-panel-cap.webp",
        note: "Winter-to-summer outdoor programs",
      },
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
        note: "Knits plus caps in one drop",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "/images/products/breathable-custom-embroidered-6-panel.webp",
        note: "Pairs with beanies for a two-season line",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorros de Punto",
      badge: "⚡ Colecciones Urgentes T4 · Programas de Punto",
      title: "Fabricante de",
      accent: "Gorros de Punto",
      subtitle:
        "Gorros con doblez, estilo pescador, con forro de satén y jacquard personalizado: galga de tejido, elasticidad y profundidad de doblez según ficha técnica, desde $3.50 FOB directo de fábrica.",
      pills: ["MOQ 200 uds", "Desde $3.50 FOB", "Muestras en 7 días", "Producción en 15 días", "Lana, acrílico y forro de satén"],
    },
    silhouettesTitle: "Siluetas Esenciales de Gorros para Colecciones de Invierno",
    silhouettesSub:
      "4 modelos clave listos para personalización con marca propia. Muestreo de preproducción en 7 días y producción en masa en 15 días.",
    silhouettes: [
      {
        tag: "Más Vendido",
        name: "Gorro Clásico de Canalé con Doblez",
        gauge: "Punto Acanalado 5GG / 7GG",
        yarn: "100% Acrílico Suave / Mezcla con Lana Merino",
        bestLogo: "Bordado 3D / Parche Tejido",
        desc: "El básico indispensable para retail. El doblez pronunciado ofrece doble capa de abrigo térmico y máximo espacio para parches frontales.",
      },
      {
        tag: "Tendencia Urbana",
        name: "Gorro Corto Tipo Pescador (Fisherman)",
        gauge: "Punto Grueso 5GG",
        yarn: "Hilo Hilado en Núcleo Antipeeling",
        bestLogo: "Etiqueta en el Borde / Bordado Directo",
        desc: "Corona corta diseñada para quedar justo sobre las orejas. Estructura elástica de alta recuperación. Favorito de marcas streetwear y skate.",
      },
      {
        tag: "Alta Gama",
        name: "Gorro con Forro de Satén Antifrizz",
        gauge: "Punto Fino 7GG + Interior de Satén",
        yarn: "Acrílico Tacto Cachemira + Satén Seda",
        bestLogo: "Parche de Cuero / Placa Metálica",
        desc: "Protege el cabello rizado de la fricción y la electricidad estática. Mantiene la hidratación natural. Ideal para marcas premium y belleza.",
      },
      {
        tag: "Deportes y Nieve",
        name: "Gorro Jacquard con Pompón de Invierno",
        gauge: "Jacquard Doble Capa 3GG / 5GG",
        yarn: "Hilos Teñidos Multicolor + Pompón a Juego",
        bestLogo: "Patrón Tejido Integral + Logo en Doblez",
        desc: "Diseño gráfico tejido directamente en la tela con pompón superior. Esencial para estaciones de esquí, outdoor y regalos de fin de año.",
      },
    ],
    featuresTitle: "Qué controlamos en un gorro de punto",
    featuresIntro:
      "Un gorro es un producto sencillo pero fácil de arruinar: un hilo equivocado forma bolitas tras tres usos y una galga incorrecta lo deja demasiado ajustado. Estas son las variables que fijamos en nuestro taller de tejido.",
    features: [
      {
        title: "Estructuras de tejido y canalé",
        desc: "Con doblez (doble capa), sin doblez, tipo skull corto, largo tipo slouchy y con pompón. La altura del canalé, la profundidad del doblez y el largo total se ajustan a tu muestra de referencia o ficha técnica.",
      },
      {
        title: "Hilos y materias primas",
        desc: "100% acrílico, mezclas de acrílico y lana, 100% merino, lana de cordero, poliéster reciclado y mezclas con algodón. Confirmamos la mezcla exacta en la cotización: no sustituimos por un hilo más barato después del pedido.",
      },
      {
        title: "Galga, elasticidad y ajuste craneal",
        desc: "Las galgas 3GG, 5GG y 7GG dan una textura y elasticidad visiblemente distintas. Enviamos una muestra en la galga real para que compruebes el ajuste antes de comprometer miles de unidades.",
      },
      {
        title: "Jacquard y diseños integrales",
        desc: "Tu diseño se teje directamente en la tela: rayas, logotipos repetidos o gráficos completos. Es el método de personalización más duradero para tejidos de punto, porque el color está en el hilo y no impreso encima.",
      },
      {
        title: "Parches y bordado 3D",
        desc: "Parches tejidos, de cuero, de PVC y bordado directo 3D, todos aplicados en fábrica. El bordado sobre tejido de punto necesita un estabilizador para no deformarse: lo incluimos desde la muestra.",
      },
      {
        title: "Cupos urgentes de producción T4",
        desc: "Los programas de invierno deben llegar antes del pico de frío. Reserva tu turno de producción con antelación: el plazo estándar es de 15 días tras aprobar la muestra, más 5-8 días de envío aéreo.",
      },
    ],
    compareTitle: "Qué estilo de gorro se vende mejor",
    compareHead: ["Estilo", "Estructura", "Ideal para"],
    compare: [
      { style: "Con doblez", structure: "Doble capa, el más abrigado", best: "Retail general, regalos corporativos, outdoor" },
      { style: "Pescador enrollado", structure: "Corto y con rollo ajustado", best: "Workwear, marcas utilitarias y streetwear" },
      { style: "Sin doblez / corto", structure: "Una sola capa, minimalista", best: "Streetwear, skater y colecciones de moda" },
      { style: "Largo tipo slouchy", structure: "Largo extra, cae en la nuca", best: "Marcas lifestyle, looks oversize" },
      { style: "Jacquard con pompón", structure: "Con doblez más pompón de hilo/piel", best: "Estaciones de esquí, regalos y moda de invierno" },
    ],
    compareNote:
      "¿Quieres un gráfico tejido y también un bordado? Elige jacquard para el diseño y añade un parche tejido: cotizamos la combinación como un solo SKU.",
    pricingTitle: "Precio por Mayor, MOQ y Plazo de Entrega",
    pricing: [
      { value: "Desde $3.50", label: "Por unidad, FOB al por mayor" },
      { value: "200 uds", label: "MOQ por estilo / color" },
      { value: "7 / 15 días", label: "Muestra / producción en masa" },
    ],
    pricingNote:
      "Los gorros sencillos de acrílico arrancan en el piso de $3.50; las mezclas con lana merino, el tejido jacquard complejo o parches de cuero genuino rondan $5.00–$7.00. Disponemos de más de 60 colores Pantone en stock permanente sin esperas de tintura.",
    productsTitle: "Nuestra línea de gorros y estilos en stock",
    productsNote: "MOQ 200 uds · directo de fábrica",
    products: [
      {
        href: "/product/custom-embroidery-knitted-beanie",
        name: "Custom Embroidery Knitted Beanie",
        img: "/images/products/custom-embroidery-knitted-beanie.webp",
        note: "100% acrílico · 61 colores en stock",
      },
      {
        href: "/product/retro-washed-knitted-beanie",
        name: "Retro Washed Knitted Beanie",
        img: "/images/products/retro-washed-knitted-beanie.webp",
        note: "Lavado vintage · hilo de núcleo",
      },
      {
        href: "/product/silk-lined-pompom-knitted-beanie",
        name: "Silk Lined Pompom Knitted Beanie",
        img: "/images/products/silk-lined-pompom-knitted-beanie.webp",
        note: "Forro de satén · pompón",
      },
      {
        href: "/product/pompom-fur-ball-knitted-beanie",
        name: "Pompom Fur Ball Knitted Beanie",
        img: "/images/products/pompom-fur-ball-knitted-beanie.webp",
        note: "Pompón de piel · niños y adultos",
      },
      {
        href: "/product/multi-colour-satin-lined-winter-beanie",
        name: "Multi-Colour Satin Lined Winter Beanie",
        img: "/images/products/multi-colour-satin-lined-winter-beanie.webp",
        note: "Hilo multicolor · forro de satén",
      },
    ],
    companionTitle: "Gorras complementarias para colecciones bi-temporada",
    companionProducts: [
      {
        href: "/product/outdoor-performance-5-panel-cap",
        name: "Outdoor Performance 5 Panel Cap",
        img: "/images/products/outdoor-performance-5-panel-cap.webp",
        note: "Colecciones outdoor de invierno a verano",
      },
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
        note: "Punto y gorras en un solo lanzamiento",
      },
      {
        href: "/product/breathable-custom-embroidered-6-panel",
        name: "Breathable Custom Embroidered 6 Panel",
        img: "/images/products/breathable-custom-embroidered-6-panel.webp",
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
    dateModified: "2026-10-08",
    mainEntityOfPage: "https://bdjunyang.com/custom-beanies-manufacturer",
  };

  const handleWhatsAppFastQuote = (styleName?: string) => {
    trackWhatsAppClick({
      button: "beanies_fast_quote",
      label: styleName ? `Beanies Silhouette: ${styleName}` : "Beanies Q4 Fast Track Banner",
    });
    const text = encodeURIComponent(
      `Hi Baoding Junyang! I am interested in custom manufacturing beanies (${styleName ? styleName : "Winter Knit Beanie Collection"}). Please send me your knitwear spec sheet & yarn color cards. MOQ 200pcs.`
    );
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
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

      {/* Silhouette Showcase: 4 Core Winter Knit Models */}
      <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-3">
              Knitwear Silhouettes
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
              {c.silhouettesTitle}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {c.silhouettesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.silhouettes.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      {s.tag}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">From $3.50</span>
                  </div>

                  <h3 className="font-black text-base text-slate-900 mb-2 leading-snug">
                    {s.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] mb-5">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">Gauge:</span>
                      <span className="text-slate-800 font-medium">{s.gauge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">Yarn:</span>
                      <span className="text-slate-800 font-medium truncate max-w-[130px]">{s.yarn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">Best Logo:</span>
                      <span className="text-slate-800 font-medium truncate max-w-[130px]">{s.bestLogo}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppFastQuote(s.name)}
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span>Inquire Spec & Quote</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
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

      {/* Comparison table */}
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

      {/* Pricing & MOQ */}
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

      {/* Fast CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles size={16} />
              <span>Q4 Direct Factory Fast Track</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-2">
              {lang === "es" ? "¿Listo para lanzar tu colección de gorros de invierno?" : "Ready to Launch Your Autumn/Winter Beanie Line?"}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              {lang === "es"
                ? "Consulta directamente con nuestros ingenieros textiles en WhatsApp. Recibe catálogos de hilos y fichas técnicas en 2 horas."
                : "Talk directly with our knitwear technical team on WhatsApp. Receive physical yarn shade cards and custom CAD mockups in 2 hours."}
            </p>
          </div>
          <button
            onClick={() => handleWhatsAppFastQuote()}
            className="shrink-0 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black py-3.5 px-6 rounded-xl text-sm transition flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle size={18} />
            <span>{lang === "es" ? "Cotizar por WhatsApp" : "Instant WhatsApp Quote"}</span>
          </button>
        </div>
      </div>

      {/* Product Range */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">{c.productsTitle}</h2>
          <ProductLinks items={c.products} />

          <h3 className="text-xl md:text-2xl font-black tracking-tight mt-16 mb-10 text-center">
            {c.companionTitle}
          </h3>
          <ProductLinks items={c.companionProducts} />
        </div>
      </section>
    </LandingShell>
  );
}
