"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom Dad Hats",
      badge: "Unstructured Caps · Factory Direct",
      title: "Custom",
      accent: "Dad Hats",
      subtitle:
        "Soft unstructured crowns, washed finishes and clean branding — dad hats built for lifestyle and streetwear brands, straight from our factory.",
      pills: ["MOQ 200 Pcs", "From $3.50 FOB", "7-Day Samples", "50+ Stock Colors"],
    },
    featuresTitle: "What We Build Into Every Dad Hat",
    featuresIntro:
      "Dad hats live or die on their softness and finish. These are the six things buyers ask about most — and how we handle each one.",
    features: [
      {
        title: "Unstructured 6-Panel Construction",
        desc: "The defining trait of a dad hat is a soft, unstructured crown that collapses flat when not worn. We build ours with lightweight buckram-free front panels and a pre-curved visor, so the cap keeps a relaxed profile but still holds its shape on the shelf.",
      },
      {
        title: "Washed & Vintage Finishes",
        desc: "Acid wash, garment dye, enzyme wash, and stone wash are all done in-house. Each treatment level is sampled first — you choose how heavy the fading, fraying, and thread contrast should be before bulk production starts.",
      },
      {
        title: "Hardware & Closures",
        desc: "Antique brass slide buckles, self-fabric strapbacks, metal snapbacks, or plastic snaps. We match finishes (brass, nickel, gunmetal, matte black) to your brand palette and can laser-engrave your mark on the buckle.",
      },
      {
        title: "Decoration Options",
        desc: "Flat embroidery, vintage washed-thread embroidery, 3D puff, woven patches, leather patches, and leather back straps. Small left-side hit or full front panel artwork — our digitizing team handles logos as small as 8mm.",
      },
      {
        title: "Fabric Choices",
        desc: "100% cotton twill (108*56), washed heavy cotton, brushed cotton, cotton-canvas blends, corduroy, and cotton-linen. Over 50 colors are stocked for fast turnaround; Pantone TPX matching is available on any order.",
      },
      {
        title: "Small-Brand Friendly",
        desc: "MOQ is 200 pieces per style and color — low enough for first-season streetwear brands. Volume discounts start at 500, 1,000 and 5,000 pieces, and your sample fee is credited back against the bulk order.",
      },
    ],
    compareTitle: "Choosing the Right Silhouette",
    compareCols: ["Style", "Crown", "Brim", "Best for"],
    compare: [
      { style: "Dad hat (unstructured)", shape: "Soft crown, collapses flat", brim: "Curved, slightly shorter", fit: "Lifestyle, retail, casual brands" },
      { style: "Snapback (structured)", shape: "Rigid tall crown", brim: "Flat or curved", fit: "Streetwear, sports, hype drops" },
      { style: "Trucker (foam + mesh)", shape: "Structured foam front", brim: "Curved", fit: "Promo, beverage, outdoor brands" },
      { style: "5-panel (A-frame)", shape: "Wide flat front panel", brim: "Flat", fit: "Bold logos, camp-style caps" },
    ],
    compareNote:
      "Not sure which one fits your line? Send us a reference cap or a photo — we will match the construction and quote it within 12 hours.",
    pricingTitle: "Pricing, MOQ & Lead Time",
    stats: [
      { value: "$3.50 – $7.00", label: "Per unit, FOB" },
      { value: "200 Pcs", label: "MOQ per style / color" },
      { value: "7 / 15-20 Days", label: "Sample / bulk production" },
    ],
    pricingNote:
      "Final pricing depends on fabric, wash treatment, embroidery coverage and order quantity. Unwashed cotton dad hats sit at the low end; heavy acid wash with leather patch and custom packaging sit at the high end. Volume discounts apply from 500 pieces. Every quote is itemised with no hidden costs.",
    stylesTitle: "Dad Hat Styles From Our Catalog",
    products: [
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Vintage Acid Wash 6 Panel Dad Hat",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Unstructured, antique brass buckle",
      },
      {
        href: "/product/personalised-two-tone-a-frame-cap",
        name: "Personalised Two-Tone A-Frame Cap",
        img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
        note: "Contrast styling, cotton canvas",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Structured Multi-Color Baseball Cap",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "30+ colors, 3D puff ready",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras Dad Personalizadas",
      badge: "Gorras sin estructura · directo de fábrica",
      title: "Gorras Dad",
      accent: "Personalizadas",
      subtitle:
        "Coronas suaves sin estructura, acabados lavados y branding limpio — gorras dad pensadas para marcas de lifestyle y streetwear, directo de nuestra fábrica.",
      pills: ["MOQ 200 pcs", "Desde $3.50 FOB", "Muestras en 7 días", "50+ colores en stock"],
    },
    featuresTitle: "Lo que incorporamos en cada gorra dad",
    featuresIntro:
      "Las gorras dad se definen por su suavidad y su acabado. Estos son los seis puntos que más preguntan los compradores y cómo los resolvemos.",
    features: [
      {
        title: "Construcción sin estructura de 6 paneles",
        desc: "El rasgo que define a una gorra dad es su corona suave y sin estructura, que se aplasta cuando no se lleva puesta. Las fabricamos con paneles frontales ligeros sin buckram y una visera precurvada, para que la gorra mantenga un perfil relajado pero conserve su forma en el anaquel.",
      },
      {
        title: "Acabados lavados y vintage",
        desc: "El lavado ácido, el teñido en prenda, el lavado enzimático y el lavado a la piedra se realizan en nuestra propia planta. Cada nivel de tratamiento se muestra primero: tú decides qué tan intensos deben ser el desgaste, los flecos y el contraste de hilo antes de iniciar la producción en masa.",
      },
      {
        title: "Herrajes y cierres",
        desc: "Hebillas correderas de latón antiguo, correas del mismo tejido, snapbacks metálicos o broches de plástico. Igualamos los acabados (latón, níquel, gunmetal, negro mate) con la paleta de tu marca y podemos grabar tu logo con láser en la hebilla.",
      },
      {
        title: "Opciones de decoración",
        desc: "Bordado plano, bordado vintage con hilo lavado, bordado 3D puff, parches tejidos, parches de piel y correas traseras de piel. Un pequeño bordado en el lado izquierdo o un diseño a todo el panel frontal: nuestro equipo de digitalización trabaja logos de hasta 8mm.",
      },
      {
        title: "Opciones de tejido",
        desc: "Sarga 100% algodón (108*56), algodón pesado lavado, algodón cepillado, mezclas de algodón y lona, pana y mezclas de algodón y lino. Mantenemos más de 50 colores en stock para entregas rápidas; la igualación Pantone TPX está disponible en cualquier pedido.",
      },
      {
        title: "Ideal para marcas pequeñas",
        desc: "La cantidad mínima de pedido (MOQ) es de 200 piezas por estilo y color, lo bastante baja para marcas de streetwear que arrancan su primera temporada. Los descuentos por volumen comienzan en 500, 1,000 y 5,000 piezas, y el costo de la muestra se acredita a la orden de producción en masa.",
      },
    ],
    compareTitle: "Cómo elegir la silueta correcta",
    compareCols: ["Estilo", "Corona", "Visera", "Ideal para"],
    compare: [
      { style: "Gorra dad (sin estructura)", shape: "Corona suave, se aplasta", brim: "Curvada, un poco más corta", fit: "Marcas de lifestyle, retail y casual" },
      { style: "Snapback (con estructura)", shape: "Corona rígida y alta", brim: "Plana o curvada", fit: "Streetwear, deportes, lanzamientos hype" },
      { style: "Trucker (espuma + malla)", shape: "Frente estructurado de espuma", brim: "Curvada", fit: "Marcas de promociones, bebidas y outdoor" },
      { style: "5 paneles (A-frame)", shape: "Panel frontal ancho y plano", brim: "Plana", fit: "Logos llamativos, gorras estilo camp" },
    ],
    compareNote:
      "¿No sabes cuál encaja con tu línea? Envíanos una gorra de referencia o una foto: replicamos la construcción y te cotizamos en 12 horas.",
    pricingTitle: "Precios, MOQ y plazo de entrega",
    stats: [
      { value: "$3.50 – $7.00", label: "Por unidad, FOB" },
      { value: "200 Pcs", label: "MOQ por estilo / color" },
      { value: "7 / 15-20 Days", label: "Muestra / producción en masa" },
    ],
    pricingNote:
      "El precio final depende del tejido, el tratamiento de lavado, la cobertura del bordado y la cantidad del pedido. Las gorras dad de algodón sin lavar quedan en el rango bajo; el lavado ácido intenso con parche de piel y empaque personalizado, en el rango alto. Los descuentos por volumen aplican desde 500 piezas. Cada cotización está detallada y sin costos ocultos.",
    stylesTitle: "Estilos de gorras dad de nuestro catálogo",
    products: [
      {
        href: "/product/vintage-acid-wash-6-panel-dad-hat",
        name: "Gorra Dad 6 Paneles Lavado Ácido Vintage",
        img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
        note: "Sin estructura, hebilla de latón antiguo",
      },
      {
        href: "/product/personalised-two-tone-a-frame-cap",
        name: "Gorra A-Frame Bicolor Personalizada",
        img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
        note: "Estilo contrastante, lona de algodón",
      },
      {
        href: "/product/structured-multi-color-baseball-cap",
        name: "Gorra de Béisbol Multicolor con Estructura",
        img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        note: "Más de 30 colores, lista para bordado 3D puff",
      },
    ],
  },
};

export default function DadHatsPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Dad Hats Manufacturer — Wholesale Unstructured Caps",
    description:
      "Factory-direct custom dad hats: unstructured 6-panel construction, acid wash and vintage finishes, leather patches. MOQ 200pcs, samples in 7 days.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-dad-hats-manufacturer",
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
                  <th className="text-left p-4 font-black">{c.compareCols[0]}</th>
                  <th className="text-left p-4 font-black">{c.compareCols[1]}</th>
                  <th className="text-left p-4 font-black">{c.compareCols[2]}</th>
                  <th className="text-left p-4 font-black">{c.compareCols[3]}</th>
                </tr>
              </thead>
              <tbody>
                {c.compare.map((row) => (
                  <tr key={row.style} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{row.style}</td>
                    <td className="p-4 text-gray-600">{row.shape}</td>
                    <td className="p-4 text-gray-600">{row.brim}</td>
                    <td className="p-4 text-gray-600">{row.fit}</td>
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
