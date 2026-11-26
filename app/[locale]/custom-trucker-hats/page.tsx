"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../lib/comparison-links";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { ShippingCalculator } from "../../components/ShippingCalculator";

const CONTENT = {
  en: {
    hero: {
      badge: "Mesh Back Caps · Wholesale",
      h1Pre: "Custom ",
      h1Highlight: "Trucker Hats",
      h1Post: ", Wholesale from the Factory",
      subtitle: "Foam fronts, breathable mesh backs, and your logo done right — custom trucker hats for promo, beverage, and outdoor brands, made in our factory.",
      pills: ["From $3.50 FOB", "MOQ 200 Pcs", "15-20 Day Production", "Written Quote in 2h"]
    },
    sections: [
      {
        title: "What Makes a Trucker Hat",
        desc: "A trucker hat pairs a structured foam front panel with breathable mesh back panels — giving it that classic, instantly recognizable silhouette. Originally a promotional giveaway for farmers and truckers, it is now a staple for beverage brands, outdoor gear labels, and streetwear drops. The foam front creates a slightly puffed, casual crown that sits lighter than a rigid baseball cap."
      },
      {
        title: "Customization Options",
        desc: "The foam front panel is perfect for embroidery, and the mesh back takes screen printing cleanly. We offer flat embroidery, 3D puff embroidery, woven patches, and printed logos — placed on the front, side panels, or back. Add a custom under-visor print, internal sweatband label, or a contrast-colored brim to make your trucker stand out on the shelf."
      },
      {
        title: "Materials & Colors",
        desc: "Choose between solid polyester mesh, two-tone mesh, or performance mesh back panels, paired with 100% cotton twill or nylon foam fronts. We stock over 30 colors and match any Pantone reference. Mesh density options range from standard ventilation to ultra-breathable performance mesh for sports programs."
      },
      {
        title: "Pricing & Lead Time",
        desc: "Custom trucker hats start from $3.50 FOB for basic two-tone programs and range up to $7.00 for premium 3D puff + patch combinations. Standard MOQ is 200 pieces per style and color, with discounts from 500 pcs. Sample production takes 7 days; bulk production 15-20 days."
      }
    ],
    deepTitle: "Trucker Construction: Foam Front vs Cotton Front",
    deepIntro:
      "The single decision that changes price, feel and decoration limits more than any other on a trucker program is the front panel. Below is how we build both versions on our own lines, and what each one allows you to do with your artwork.",
    frontTable: {
      head: ["Build", "Foam front (classic promo trucker)", "Cotton twill front (premium trucker)"],
      rows: [
        ["Front panel material", "Laminated foam over polyester face", "Cotton twill, same mill fabric as our 6-panel caps"],
        ["Crown feel", "Higher, puffier crown; holds shape without buckram", "Softer, lower crown; structure comes from fusing"],
        ["Best decoration", "Flat or 3D puff embroidery, woven patch", "Flat embroidery, 3D puff, woven patch, direct-to-film transfer"],
        ["Screen print on front", "Works, but ink sits on the foam face — test a strike-off before bulk", "Prints cleanly and holds fine detail"],
        ["Typical use", "Beverage, feed-store, outdoor promo runs", "Streetwear labels, retail programs, resort and golf"],
        ["Relative cost", "Lower — our entry trucker programs start here", "Higher — chosen when the cap is a retail product rather than a giveaway"]
      ]
    },
    meshTitle: "Mesh Back Options and What They Change",
    meshBody:
      "We build mesh backs in three constructions: standard polyester mesh, two-tone mesh (contrast upper/lower panels) and a performance mesh used on active programs. The choice is not cosmetic. Standard mesh is the most open construction and gives the strongest classic trucker look. Two-tone mesh lets you carry a second brand colour without adding a cut-and-sew panel, which is how most promo programs hit a lower unit price. Performance mesh is tighter and sits closer to the head, which active buyers choose when the cap must stay put during movement. All three are available with the same closure options: plastic snap, hook-and-loop, or a metal buckle with a fabric strap.",
    decorationTitle: "Decoration Limits You Should Design Around",
    decorationBody:
      "Two constraints matter on truckers more than on closed-panel caps. First, the foam front has a seam down the centre of the crown on most 5-panel builds — a logo that crosses that seam will distort, so we advise keeping the main mark inside one front panel and art-proving it before sampling. Second, mesh cannot carry embroidery directly: the needle perforates the open structure and the stitches sink into the holes. To brand the mesh side or back, we apply a woven or embroidered patch first, patch onto mesh, then close the panel. If your artwork has fine serifs or a gradient, send it as vector art so our studio can redraw it for stitch files rather than scaling a raster logo.",
    checklistTitle: "What to Send Us for an Accurate Trucker Quote",
    checklist: [
      "Front construction: foam or cotton twill front, and the crown height you want (high crown promo vs lower retail crown)",
      "Mesh type and colour split: standard, two-tone or performance mesh, plus the Pantone references for each panel",
      "Closure: plastic snap, hook-and-loop, or metal buckle with fabric strap",
      "Artwork as vector (AI / PDF / EPS) across the placement list: front, side mesh (patch), side cotton panel, under-visor, inner sweatband label",
      "Quantity per style/colour and target ship date, so we can confirm the 15–20 day bulk window against your deadline",
      "Whether you need a pre-production sample (7 days) and whether your program will reach 500 pcs, where sample cost is credited back"
    ],
    faqTitle: "Trucker Sourcing FAQ",
    faq: [
      {
        q: "Why is my trucker quote higher than the price I saw on a marketplace listing?",
        a: "Marketplace listings usually price a blank cap without decoration, cap only, ex-works — not a decorated cap delivered FOB. Our quotes are itemised: front construction, mesh type, decoration method and count, patch tooling, patch application labour, and packing. Ask any supplier to break a trucker quote into those lines and the difference becomes visible. We send that breakdown in writing within 2 hours."
      },
      {
        q: "Can you embroider directly onto the mesh back?",
        a: "No — and any supplier who says yes should be asked how. The needle perforates the open mesh and stitches sink into the holes, so the mark breaks up. The correct build is a woven or embroidered patch applied to the mesh, which is also why mesh-side branding adds a tooling line to the quote."
      },
      {
        q: "What is the minimum for a two-tone mesh trucker?",
        a: "MOQ is 200 pieces per style and colour. Below that we can still run 1–5 pieces as a paid sample run, which is how most brands art-prove the seam-crossing logo and the mesh patch before committing to bulk."
      },
      {
        q: "How do I compare a foam-front and a cotton-front quote fairly?",
        a: "Hold the decoration count and the closure constant, then compare only the front construction. A foam front at one embroidery placement is not comparable to a cotton front with a 3D puff mark plus a mesh patch. Normalize those two variables and the remaining difference is the front panel build, which is exactly the decision you are trying to make."
      }
    ],
    rangeTitle: "Our Trucker Hat Range",
    ctaTitle: "Launch Your Trucker Program",
    ctaDesc: "Send us your artwork — get a factory quote within 2 hours and a physical sample in 7 days.",
    ctaPrimary: "Request Factory Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "Gorras con malla atrás · Al por mayor",
      h1Pre: "",
      h1Highlight: "Gorras trucker personalizadas",
      h1Post: ", al por mayor directo de fábrica",
      subtitle: "Frentes de espuma, espaldas de malla transpirable y su logo bien hecho — gorras trucker personalizadas para marcas de promocionales, bebidas y actividades al aire libre, fabricadas en nuestra fábrica.",
      pills: ["Desde $3.50 FOB", "MOQ 200 pzs", "Producción en 15-20 días", "Cotización en 2h"]
    },
    sections: [
      {
        title: "Qué hace única a una gorra trucker",
        desc: "Una gorra trucker combina un panel frontal estructurado de espuma con paneles traseros de malla transpirable, lo que le da esa silueta clásica e inconfundible. Originalmente un regalo promocional para agricultores y camioneros, hoy es un básico para marcas de bebidas, etiquetas de equipo para actividades al aire libre y lanzamientos de streetwear. El frente de espuma crea una corona sin estructura, ligeramente abultada e informal, que se siente más ligera que una gorra de béisbol rígida."
      },
      {
        title: "Opciones de personalización",
        desc: "El panel frontal de espuma es perfecto para el bordado, y la parte trasera de malla recibe limpiamente la serigrafía. Ofrecemos bordado plano, bordado 3D puff, parches tejidos y logos impresos, colocados en el frente, los paneles laterales o la parte trasera. Agregue una impresión personalizada debajo de la visera, una etiqueta interna para la banda del sudor o una visera en color de contraste para que su trucker destaque en el estante."
      },
      {
        title: "Materiales y colores",
        desc: "Elija entre malla de poliéster sólida, malla bicolor o paneles traseros de malla de alto rendimiento, combinados con frentes de espuma de sarga 100% algodón o nailon. Tenemos más de 30 colores en stock e igualamos cualquier referencia Pantone. Las opciones de densidad de malla van desde la ventilación estándar hasta la malla de alto rendimiento ultratranspirable para programas deportivos."
      },
      {
        title: "Precios y plazo de entrega",
        desc: "Las gorras trucker personalizadas comienzan en $3.50 FOB para programas bicolor básicos y llegan hasta $7.00 para combinaciones premium de bordado 3D puff + parche. El MOQ estándar es de 200 piezas por estilo y color, con descuentos desde 500 pzs. La producción de muestras toma 7 días; la producción en masa, 15-20 días."
      }
    ],
    deepTitle: "Construcción trucker: frente de espuma vs frente de algodón",
    deepIntro:
      "La decisión que más cambia el precio, el tacto y los límites de decoración en un programa trucker es el panel frontal. Así fabricamos ambas versiones en nuestras propias líneas y lo que cada una permite hacer con su diseño.",
    frontTable: {
      head: ["Aspecto", "Frente de espuma (trucker promocional clásico)", "Frente de sarga de algodón (trucker premium)"],
      rows: [
        ["Material del panel frontal", "Espuma laminada sobre faz de poliéster", "Sarga de algodón, la misma tela de nuestras gorras de 6 paneles"],
        ["Sensación de la copa", "Copa más alta y abultada; mantiene la forma sin buckram", "Copa más baja y suave; la estructura proviene del entretelado"],
        ["Mejor decoración", "Bordado plano o 3D puff, parche tejido", "Bordado plano, 3D puff, parche tejido, transfer DTF"],
        ["Serigrafía en el frente", "Funciona, pero la tinta queda sobre la faz de espuma — pida una prueba antes del volumen", "Imprime limpio y conserva el detalle fino"],
        ["Uso habitual", "Bebidas, tiendas agropecuarias, promocionales de exterior", "Marcas de streetwear, programas retail, resort y golf"],
        ["Coste relativo", "Menor — aquí empiezan nuestros programas trucker de entrada", "Mayor — se elige cuando la gorra es producto de venta y no un regalo"]
      ]
    },
    meshTitle: "Opciones de malla trasera y qué cambia cada una",
    meshBody:
      "Fabricamos la malla trasera en tres construcciones: malla de poliéster estándar, malla bicolor (paneles superior e inferior en contraste) y malla performance para programas deportivos. La elección no es cosmética. La malla estándar es la más abierta y da el look trucker clásico más marcado. La malla bicolor permite llevar un segundo color de marca sin añadir un panel de corte y confección, que es como la mayoría de los programas promocionales bajan el precio unitario. La malla performance es más cerrada y se ajusta más a la cabeza, la eligen los compradores deportivos cuando la gorra debe mantenerse firme en movimiento. Las tres admiten los mismos cierres: snap plástico, velcro o hebilla metálica con correa de tela.",
    decorationTitle: "Límites de decoración que debe considerar al diseñar",
    decorationBody:
      "Dos restricciones importan más en una trucker que en una gorra de panel cerrado. Primera: el frente de espuma lleva una costura en el centro de la copa en la mayoría de las construcciones de 5 paneles — un logo que cruce esa costura se deformará, por eso recomendamos mantener la marca principal dentro de un solo panel frontal y validarla antes de la muestra. Segunda: la malla no admite bordado directo: la aguja perfora la estructura abierta y los puntos se hunden en los agujeros. Para marcar la malla lateral o trasera aplicamos primero un parche tejido o bordado y luego cerramos el panel. Si su diseño tiene serifas finas o degradados, envíelo en vectorial para que nuestro estudio lo redibuje como archivo de bordado en lugar de escalar un logo rasterizado.",
    checklistTitle: "Qué enviarnos para una cotización trucker precisa",
    checklist: [
      "Construcción frontal: espuma o sarga de algodón, y la altura de copa deseada (copa alta promocional vs copa baja retail)",
      "Tipo de malla y reparto de color: estándar, bicolor o performance, más las referencias Pantone de cada panel",
      "Cierre: snap plástico, velcro o hebilla metálica con correa de tela",
      "Diseño en vectorial (AI / PDF / EPS) con la lista de ubicaciones: frente, malla lateral (parche), panel lateral de algodón, bajo visera, etiqueta interna",
      "Cantidad por estilo/color y fecha objetivo de embarque, para confirmar la ventana de 15–20 días contra su plazo",
      "Si necesita muestra previa (7 días) y si su programa llegará a 500 pzs, donde el coste de la muestra se reintegra"
    ],
    faqTitle: "Preguntas frecuentes sobre compra de truckers",
    faq: [
      {
        q: "¿Por qué mi cotización trucker es más alta que el precio de un anuncio de marketplace?",
        a: "Los anuncios de marketplace suelen publicar el precio de una gorra en blanco, sin decoración, ex-works — no una gorra decorada entregada FOB. Nuestras cotizaciones son desglosadas: construcción frontal, tipo de malla, método y número de decoraciones, utillaje del parche, mano de obra de aplicación y embalaje. Pida a cualquier proveedor que desglose así una cotización trucker y la diferencia se hace visible. Enviamos ese desglose por escrito en 2 horas."
      },
      {
        q: "¿Se puede bordar directamente sobre la malla trasera?",
        a: "No — y conviene preguntar cómo lo haría quien diga que sí. La aguja perfora la malla abierta y los puntos se hunden en los agujeros, de modo que la marca se rompe. La construcción correcta es aplicar un parche tejido o bordado sobre la malla, y por eso marcar el lateral de malla añade una línea de utillaje a la cotización."
      },
      {
        q: "¿Cuál es el mínimo para una trucker de malla bicolor?",
        a: "El MOQ es de 200 piezas por estilo y color. Por debajo de eso podemos producir de 1 a 5 piezas como corrida de muestra pagada, que es como la mayoría de las marcas valida el logo que cruza la costura y el parche sobre malla antes de comprometerse al volumen."
      },
      {
        q: "¿Cómo comparo justamente una cotización de frente de espuma y otra de frente de algodón?",
        a: "Mantenga constantes el número de decoraciones y el cierre, y compare solo la construcción frontal. Un frente de espuma con una ubicación de bordado no es comparable a un frente de algodón con 3D puff más parche en malla. Normalice esas dos variables y la diferencia restante es el panel frontal, que es justo la decisión que quiere tomar."
      }
    ],
    rangeTitle: "Nuestra línea de gorras trucker",
    ctaTitle: "Lance su programa de gorras trucker",
    ctaDesc: "Envíenos su diseño — reciba una cotización de fábrica en 2 horas y una muestra física en 7 días.",
    ctaPrimary: "Solicite cotización de fábrica",
    ctaSecondary: "Ver catálogo completo"
  }
};

// Every trucker hat this factory makes — keep in sync with products.ts
// (category "Trucker Hats").
const RELATED = [
  { href: "/product/custom-foam-front-trucker-hat", name: "Custom Foam Front 5 Panel Trucker Hat", img: "/images/products/custom-foam-front-trucker-hat.webp" },
  { href: "/product/cotton-front-5-panel-mesh-trucker-cap", name: "Cotton Front 5 Panel Mesh Trucker Cap", img: "/images/products/cotton-front-5-panel-mesh-trucker-cap.webp" },
  { href: "/product/curved-brim-6-panel-mesh-trucker-cap", name: "Curved Brim 6 Panel Mesh Trucker Cap", img: "/images/products/curved-brim-6-panel-mesh-trucker-cap.webp" }
];

export default function TruckerPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Custom Trucker Hats Wholesale — Mesh Back Caps Factory Direct",
    "description": "Wholesale custom trucker hats: foam front, mesh back, embroidery and printing options, materials, pricing and MOQ from a Chinese factory.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "datePublished": "2026-08-25",
    "dateModified": "2026-11-24",
    "mainEntityOfPage": `https://bdjunyang.com/${lang}/custom-trucker-hats`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Trucker Hats" }]} />

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">{c.hero.badge}</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {c.hero.h1Pre}<span className="text-yellow-400">{c.hero.h1Highlight}</span>{c.hero.h1Post}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {c.hero.pills.map((p, i) => (
              <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {c.sections.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="font-black text-xl text-black mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="font-black text-2xl text-black mb-4">{c.deepTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{c.deepIntro}</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {c.frontTable.head.map((h) => (
                      <th key={h} className="text-left font-bold text-black px-4 py-3 border-b border-gray-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.frontTable.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-gray-100 last:border-0">
                      {row.map((cell, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-semibold text-black" : "text-gray-600"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-3">{c.meshTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{c.meshBody}</p>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-3">{c.decorationTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{c.decorationBody}</p>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-3">{c.checklistTitle}</h2>
            <ul className="space-y-2">
              {c.checklist.map((item) => (
                <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-black">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-4">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faq.map((f) => (
                <div key={f.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-black mb-2">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              <Link href={`/${lang}/compare/flat-embroidery-vs-3d-puff`} className="text-black font-semibold underline">
                {lang === "es" ? "Bordado plano vs 3D puff" : "Flat embroidery vs 3D puff"}
              </Link>
              {" · "}
              <Link href={`/${lang}/pricing`} className="text-black font-semibold underline">
                {lang === "es" ? "Guía de precios y MOQ" : "Pricing & MOQ guide"}
              </Link>
              {" · "}
              <Link href={`/${lang}/guide`} className="text-black font-semibold underline">
                {lang === "es" ? "Guía de fabricación B2B" : "B2B manufacturing guide"}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-black tracking-tight mb-10">{c.rangeTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED.map((p) => (
              <Link key={p.href} href={`/${lang}${p.href}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" width="480" height="480" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm text-black group-hover:text-yellow-600 transition">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 max-w-5xl mx-auto">
        <ShippingCalculator defaultCapType="structured" productName="Custom Wholesale Trucker Hats" sku="JY-TRUCKER" />
      </section>

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{c.ctaTitle}</h2>
          <p className="text-gray-400 text-lg mb-8">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/#inquiry`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              {c.ctaPrimary} <ArrowRight size={20} />
            </Link>
            <Link href={`/${lang}/#catalog`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Import and Export Trade Co., Ltd. — headwear sourcing and quality partner since 2014.</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/wholesale-snapbacks`} className="hover:text-white">Wholesale Snapbacks</Link></li>
                <li><Link href={`/${lang}/custom-trucker-hats`} className="hover:text-white">Custom Trucker Hats</Link></li>
                <li><Link href={`/${lang}/oem-hat-manufacturer`} className="hover:text-white">OEM Hat Manufacturing</Link></li>
                {COMPARISON_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={`/${lang}${l.href}`} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>WhatsApp: +86 15933930830</li>
                <li>Email: admin@bdjunyang.com</li>
                <li>Office: Baoding, Hebei, China</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Baoding Junyang Import and Export Trade Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
