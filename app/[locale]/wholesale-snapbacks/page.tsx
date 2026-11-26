"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../lib/comparison-links";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { ShippingCalculator } from "../../components/ShippingCalculator";

const CONTENT = {
  en: {
    hero: {
      badge: "Wholesale Snapbacks · Factory Direct",
      h1Pre: "Wholesale ",
      h1Highlight: "Snapback Hats",
      h1Post: " — Custom, From the Factory",
      subtitle: "Flat brims, 3D puff embroidery, and buckram-structured fronts — snapbacks built for streetwear and sports brands, shipped direct from our partner factories.",
      pills: ["From $3.50 FOB", "MOQ 200 Pcs", "15-Day Production", "In-House QC"]
    },
    features: [
      {
        title: "Snapback Styles We Manufacture",
        desc: "Flat-brim, curved-brim, high-profile, low-profile and mid-profile snapbacks — all in 6-panel or 5-panel construction. Our snapback range covers streetwear, sports, corporate and workwear programs, with over 30 stocked fabric colors and full Pantone color matching."
      },
      {
        title: "Logo & Embroidery Options",
        desc: "Snapbacks are the #1 canvas for bold branding. We offer high-density 3D puff embroidery, flat embroidery, chenille patches, and combination techniques. Front panel, side panels, and back embroidery all supported — with a professional digitizing service included in your order."
      },
      {
        title: "Structured Front Panels",
        desc: "A true snapback keeps its shape. We build the front two panels with heavy-duty buckram lining so your logo area stays crisp and elevated, order after order. Premium snapback hardware (plastic, metal button, or color-matched) completes the look."
      },
      {
        title: "Pricing & MOQ",
        desc: "Wholesale snapbacks start at $3.50 FOB for standard cotton twill and range up to $7.00 for premium 3D puff programs. Standard MOQ is 200 pieces per style and color — with volume discounts at 500, 1,000 and 5,000+ tiers. Samples are produced in 7 days."
      }
    ],
    deepTitle: "Crown Profile: The Spec That Decides How Your Snapback Looks",
    deepIntro:
      "Two snapbacks can share the same fabric, the same logo and the same closure, and still look like different products on the shelf. The variable is crown profile — how tall the front rises and how steeply it slopes back. It is the first thing we confirm on a snapback brief, because changing it later means re-cutting panels and re-approving samples.",
    profileTable: {
      head: ["Profile", "Front height & shape", "Embroidery area", "Who buys it"],
      rows: [
        ["High profile", "Tall, near-vertical front; classic streetwear block", "Largest usable logo area; suits oversized 3D puff marks", "Streetwear drops, team sports, licensed team gear"],
        ["Mid profile", "Moderate front height with a gentler slope", "Balanced area; works for wordmarks and stacked logos", "Corporate uniform programs, golf and resort"],
        ["Low profile", "Shallow front that follows the head", "Smaller area; fine detail survives better than oversized puff", "Dad-hat crossover buyers, lifestyle and heritage brands"]
      ]
    },
    structureTitle: "Buckram, Brim and the Flat-Brim Question",
    structureBody:
      "A snapback holds its block because the front two panels are fused with buckram. Without it the crown collapses after the first wash and the logo area goes soft, so we treat buckram weight as a production spec, not an option. Flat brims are cut from a laminated visor board; flat and curved are different tooling, flat stays flat without a wearer breaking it in, and a curved visor needs a separate board die. Flat brims also carry the removable sticker culture some streetwear brands want kept intact — if your program needs the visor sticker applied at the factory, tell us before sampling, because application position and adhesive are part of the brief, not an afterthought.",
    structureBody2:
      "On the back, the plastic snap tape is the defining hardware. We supply standard two-tone tape, colour-matched tape and metal snap buttons. Snap tape colour matching is where most importers get surprised: a Pantone matched on cotton twill does not automatically match on injection-moulded plastic, so we approve the tape against a physical colour chip rather than a screen reference. Bulk closures are then checked against that approved sample.",
    puffTitle: "3D Puff on a Structured Front: What Holds and What Fails",
    puffBody:
      "High-density 3D puff is the reason most brands choose snapbacks, and it is also where rejections happen. Puff foam sits under the satin stitch column; the loft is controlled by foam thickness and stitch density together. Too open a density and the foam shows through the stitching; too tight and the column perforates the buckram-backed front and the panel puckers. We set density against the fabric and buckram combination on a strike-off before bulk, and we keep the puff mark inside one front panel so the crown seam never runs through the raised area. Large lettering blocks hold up better than thin serifs; heavy block letters with a satin border clean up well, while hairline serifs and gradients do not survive the puff process. If your artwork combines a puff wordmark with small flat-stitch text, we digitize them as separate files so the small text stays flat and crisp.",
    puffBody2:
      "Colour count also drives cost more than logo size does. Thread colour changes on a multi-head precision embroidery run are thread changes on every head, and a six-colour logo costs more machine time than a two-colour logo of the same physical size. Buyers comparing quotes should normalize colour count before comparing unit price.",
    qcTitle: "How We Inspect Structured Caps Before Shipment",
    qcBody:
      "Structured caps fail differently from soft crowns: we check crown symmetry left to right after fusing, delamination of the fused front (it must not bubble after steam finishing), crown height consistency across the run, and snap tape function — every closure must snap and release cleanly. Delamination shows up at steam finishing, which is why our final inspection sits after ironing rather than before.",
    qcBody2:
      "Before packing we verify the approved sample against the bulk cartons: logo placement distance from the brim edge, logo height, snap tape colour, visor type (flat or curved) and carton count. Bulk is checked carton by carton against the approved sample, because a single misaligned front panel on a structured cap is visible to the retail customer immediately.",
    checklistTitle: "Snapback Brief Checklist",
    checklist: [
      "Crown profile: high, mid or low profile, plus the target front height",
      "Brim: flat or curved, and whether a factory-applied visor sticker is required",
      "Front fabric and buckram requirement, with Pantone references per panel",
      "Decoration: puff or flat, number of thread colours, placement list, and whether small text should stay flat",
      "Closure: snap tape type and colour, or metal snap button, approved against a physical colour chip",
      "Quantity per style/colour, target ship date, and whether the program reaches 500 pcs for sample-cost credit",
      "Any retail packing requirement: hangtags, polybag, barcode, individual box"
    ],
    faqTitle: "Snapback Sourcing FAQ",
    faq: [
      {
        q: "Why does the same logo look smaller on a low-profile snapback?",
        a: "Usable embroidery area shrinks with front height. A mark art-proved on a high-profile front can over-run the panel boundary on a low-profile front, so the artwork must be re-scaled and re-approved for that profile. We confirm placement and maximum mark size on the sample before bulk."
      },
      {
        q: "Can you match my Pantone on the snap tape?",
        a: "Yes, but not from a screen reference. Injection-moulded plastic takes colour differently from woven cotton, so we match the tape against a physical colour chip and approve it with you at sample stage. Bulk closures are inspected against the approved sample."
      },
      {
        q: "Can you embroider directly onto the mesh back?",
        a: "Snapbacks have no mesh back — that is a trucker construction. The back panels are closed fabric and take embroidery directly, so side and back marks need no patch tooling. If your design needs branding on open mesh, that is a trucker build and we would quote it as such."
      },
      {
        q: "What is the minimum for a custom snapback?",
        a: "MOQ 200 pieces per style and colour, with 1–5 pieces available as a paid sample run. Sample cost is credited back on programs that reach 500 pieces."
      }
    ],
    modelsTitle: "Our Snapback Range",
    ctaTitle: "Start Your Snapback Line Today",
    ctaDesc: "Send us your requirements — get a factory quote within 2 hours and a physical sample in 7 days.",
    ctaPrimary: "Request Factory Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "Snapbacks al por mayor · Directo de fábrica",
      h1Pre: "",
      h1Highlight: "Snapbacks al por mayor",
      h1Post: " — personalizados, directo de fábrica",
      subtitle: "Viseras planas, bordado 3D puff y frentes estructurados con buckram — snapbacks hechos para marcas de streetwear y deportivas, enviados directo de nuestras fábricas asociadas.",
      pills: ["Desde $3.50 FOB", "MOQ 200 pzs", "Producción en 15 días", "QC interno"]
    },
    features: [
      {
        title: "Estilos de snapback que fabricamos",
        desc: "Snapbacks de visera plana, visera curva, perfil alto, perfil bajo y perfil medio, todos en construcción de 6 o 5 paneles. Nuestra gama de snapbacks cubre programas de streetwear, deportes, corporativos y ropa de trabajo, con más de 30 colores de tela en stock e igualación completa de colores Pantone."
      },
      {
        title: "Opciones de logo y bordado",
        desc: "Los snapbacks son el lienzo número 1 para el branding audaz. Ofrecemos bordado 3D puff de alta densidad, bordado plano, parches de chenille y técnicas combinadas. Bordado en panel frontal, paneles laterales y parte trasera, con un servicio profesional de digitalizado incluido en su pedido."
      },
      {
        title: "Paneles frontales estructurados",
        desc: "Un verdadero snapback mantiene su forma. Construimos los dos paneles frontales con forro de buckram de alta resistencia para que el área de su logo se mantenga nítida y elevada, pedido tras pedido. Los herrajes premium del snapback (plástico, botón metálico o igualado al color) completan el acabado."
      },
      {
        title: "Precios y MOQ",
        desc: "Los snapbacks al por mayor comienzan en $3.50 FOB para sarga de algodón estándar y llegan hasta $7.00 para programas premium de bordado 3D puff. El MOQ estándar es de 200 piezas por estilo y color, con descuentos por volumen en niveles de 500, 1,000 y 5,000+. Las muestras se producen en 7 días."
      }
    ],
    deepTitle: "Perfil de copa: la especificación que define el aspecto de su snapback",
    deepIntro:
      "Dos snapbacks pueden compartir tela, logo y cierre, y aun así parecer productos distintos en el estante. La variable es el perfil de copa: cuánto sube el frente y con qué pendiente cae hacia atrás. Es lo primero que confirmamos en un brief de snapback, porque cambiarlo después implica volver a cortar paneles y reaprobar muestras.",
    profileTable: {
      head: ["Perfil", "Altura y forma del frente", "Área de bordado", "Quién lo compra"],
      rows: [
        ["Perfil alto", "Frente alto y casi vertical; bloque clásico de streetwear", "Mayor área útil de logo; admite marcas 3D puff sobredimensionadas", "Lanzamientos streetwear, deportes de equipo, producto con licencia"],
        ["Perfil medio", "Altura moderada con pendiente más suave", "Área equilibrada; funciona con logotipos y marcas apiladas", "Programas corporativos de uniforme, golf y resort"],
        ["Perfil bajo", "Frente bajo que sigue la forma de la cabeza", "Área menor; el detalle fino se conserva mejor que el puff grande", "Compradores de dad hat, marcas lifestyle y heritage"]
      ]
    },
    structureTitle: "Buckram, visera y la cuestión de la visera plana",
    structureBody:
      "Una snapback mantiene su bloque porque los dos paneles frontales van entretelados con buckram. Sin él la copa se viene abajo tras el primer lavado y el área del logo queda blanda, por eso tratamos el gramaje del buckram como especificación de producción y no como opción. Las viseras planas se cortan de un cartón de visera laminado; plana y curva son utillaje distinto, la plana se mantiene plana sin que el usuario la amolde, y la curva necesita una troqueladora aparte. Las viseras planas admiten la cultura de la pegatina retirable que algunas marcas de streetwear quieren intacta: si su programa requiere pegatina aplicada en fábrica, indíquelo antes de la muestra, porque posición y adhesivo forman parte del brief.",
    structureBody2:
      "En la parte trasera, la cinta snap de plástico es el herraje que define la gorra. Suministramos cinta estándar bicolor, cinta igualada a color y botones snap metálicos. Igualar el Pantone en la cinta es donde más sorpresas se llevan los importadores: un Pantone igualado en sarga de algodón no se iguala solo en plástico inyectado, por eso aprobamos la cinta contra una carta de color física y no contra una referencia en pantalla. El volumen se inspecciona contra esa muestra aprobada.",
    puffTitle: "3D puff sobre frente estructurado: qué funciona y qué falla",
    puffBody:
      "El 3D puff de alta densidad es la razón por la que muchas marcas eligen snapbacks, y también donde ocurren los rechazos. La espuma puff va bajo la columna de puntada satén; el relieve lo controlan juntos el espesor de la espuma y la densidad de puntada. Con densidad demasiado abierta la espuma asoma entre las puntadas; con densidad excesiva la columna perfora el frente con buckram y el panel se frunce. Ajustamos la densidad según la combinación de tela y buckram en una prueba previa al volumen, y mantenemos la marca puff dentro de un solo panel frontal para que la costura de la copa nunca atraviese la zona en relieve. Las letras de bloque gruesas se comportan mejor que las serifas finas; los degradados no sobreviven al proceso puff. Si su diseño combina un logotipo puff con texto pequeño en puntada plana, los digitalizamos como archivos separados para que el texto pequeño quede nítido.",
    puffBody2:
      "El número de colores también encarece más que el tamaño del logo. En una máquina de bordado multi-cabezal, cada cambio de color es un cambio de hilo en todos los cabezales, y un logo de seis colores consume más tiempo de máquina que uno de dos colores del mismo tamaño. Al comparar cotizaciones conviene normalizar el número de colores antes de comparar el precio unitario.",
    qcTitle: "Cómo inspeccionamos las gorras estructuradas antes del embarque",
    qcBody:
      "Las gorras estructuradas fallan de forma distinta a las de copa blanda: revisamos simetría de copa de izquierda a derecha tras el entretelado, deslaminación del frente (no debe formar burbujas tras el planchado con vapor), consistencia de altura de copa en toda la corrida y funcionamiento del snap — cada cierre debe abrochar y soltar con limpieza. La deslaminación aparece en el planchado con vapor, por eso la inspección final va después del planchado y no antes.",
    qcBody2:
      "Antes de embalar contrastamos la muestra aprobada contra las cajas del volumen: distancia del logo al borde de la visera, altura del logo, color de la cinta snap, tipo de visera y conteo por caja. La inspección del volumen se realiza caja a caja contra la muestra aprobada, porque un solo panel frontal desalineado en una gorra estructurada lo ve el cliente final de inmediato.",
    checklistTitle: "Lista de datos para su brief de snapback",
    checklist: [
      "Perfil de copa: alto, medio o bajo, más la altura de frente deseada",
      "Visera: plana o curva, y si requiere pegatina aplicada en fábrica",
      "Tela frontal y requisito de buckram, con referencias Pantone por panel",
      "Decoración: puff o plano, número de colores de hilo, lista de ubicaciones y si el texto pequeño debe quedar plano",
      "Cierre: tipo y color de cinta snap, o botón metálico, aprobado contra carta de color física",
      "Cantidad por estilo/color, fecha objetivo de embarque y si el programa llega a 500 pzs para el reintegro de la muestra",
      "Requisitos de embalaje retail: hangtag, bolsa, código de barras, caja individual"
    ],
    faqTitle: "Preguntas frecuentes sobre compra de snapbacks",
    faq: [
      {
        q: "¿Por qué el mismo logo se ve más pequeño en una snapback de perfil bajo?",
        a: "El área útil de bordado se reduce con la altura del frente. Una marca validada en perfil alto puede desbordar el límite del panel en perfil bajo, así que el diseño debe reescalarse y reaprobarse para ese perfil. Confirmamos ubicación y tamaño máximo en la muestra antes del volumen."
      },
      {
        q: "¿Pueden igualar mi Pantone en la cinta snap?",
        a: "Sí, pero no desde una referencia en pantalla. El plástico inyectado recibe el color de forma distinta al algodón tejido, por eso igualamos la cinta contra una carta de color física y la aprobamos con usted en la etapa de muestra. Los cierres del volumen se inspeccionan contra la muestra aprobada."
      },
      {
        q: "¿Se puede bordar directamente sobre la malla trasera?",
        a: "Las snapbacks no llevan malla trasera: eso es una construcción trucker. Los paneles traseros son de tela cerrada y admiten bordado directo, así que las marcas laterales o traseras no requieren utillaje de parche. Si su diseño necesita marcar malla abierta, se trata de una construcción trucker y se cotiza como tal."
      },
      {
        q: "¿Cuál es el mínimo para una snapback personalizada?",
        a: "El MOQ es de 200 piezas por estilo y color, con 1–5 piezas disponibles como corrida de muestra pagada. El coste de la muestra se reintegra en programas que alcanzan 500 piezas."
      }
    ],
    modelsTitle: "Nuestra línea de snapbacks",
    ctaTitle: "Inicie su línea de snapbacks hoy",
    ctaDesc: "Envíenos sus requisitos — reciba una cotización de fábrica en 2 horas y una muestra física en 7 días.",
    ctaPrimary: "Solicite cotización de fábrica",
    ctaSecondary: "Ver catálogo completo"
  }
};

// Every snapback this factory makes — keep in sync with products.ts
// (category "Snapback Caps").
const RELATED = [
  { href: "/product/vintage-flat-brim-snapback-cap", name: "Vintage Flat Brim Snapback Cap", img: "/images/products/vintage-flat-brim-snapback-cap.webp" }
];

export default function SnapbacksPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wholesale Snapback Hats from Factory — Custom Snapback Manufacturer",
    "description": "Factory-direct wholesale snapbacks: styles, 3D puff embroidery, buckram structure, pricing and MOQ. Custom snapback manufacturer in China.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "datePublished": "2026-08-25",
    "dateModified": "2026-11-24",
    "mainEntityOfPage": `https://bdjunyang.com/${lang}/wholesale-snapbacks`
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
          <Link
            href={`/${lang}/#inquiry`}
            className="bg-green-500 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition"
            aria-label="Get a factory quote"
          >
            Get Quote
          </Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wholesale Snapback Hats" }]} />

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
              p.includes("FOB") ? (
                <Link
                  key={i}
                  href={`/${lang}/pricing`}
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 hover:border-white/40 transition-colors"
                  aria-label={`${p} — view pricing details`}
                >
                  {p}
                </Link>
              ) : (
                <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full">{p}</span>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {c.features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                {i === 0 ? (
                  <Link
                    href={`/${lang}#catalog`}
                    className="inline-flex items-center gap-1.5 font-black text-xl text-black hover:text-emerald-700 transition-colors mb-3"
                  >
                    {f.title} <ArrowRight size={18} className="shrink-0" />
                  </Link>
                ) : (
                  <h2 className="font-black text-xl text-black mb-3">{f.title}</h2>
                )}
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
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
                    {c.profileTable.head.map((h) => (
                      <th key={h} className="text-left font-bold text-black px-4 py-3 border-b border-gray-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.profileTable.rows.map((row) => (
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
            <h2 className="font-black text-xl text-black mb-3">{c.structureTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{c.structureBody}</p>
            <p className="text-gray-600 leading-relaxed">{c.structureBody2}</p>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-3">{c.puffTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{c.puffBody}</p>
            <p className="text-gray-600 leading-relaxed">{c.puffBody2}</p>
          </div>

          <div>
            <h2 className="font-black text-xl text-black mb-3">{c.qcTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{c.qcBody}</p>
            <p className="text-gray-600 leading-relaxed">{c.qcBody2}</p>
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
              <Link href={`/${lang}/compare/snapback-vs-strapback-vs-buckle`} className="text-black font-semibold underline">
                {lang === "es" ? "Snapback vs strapback vs hebilla" : "Snapback vs strapback vs buckle"}
              </Link>
              {" · "}
              <Link href={`/${lang}/compare/flat-embroidery-vs-3d-puff`} className="text-black font-semibold underline">
                {lang === "es" ? "Bordado plano vs 3D puff" : "Flat embroidery vs 3D puff"}
              </Link>
              {" · "}
              <Link href={`/${lang}/custom-trucker-hats`} className="text-black font-semibold underline">
                {lang === "es" ? "Gorras trucker personalizadas" : "Custom trucker hats"}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-black tracking-tight mb-10">{c.modelsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED.map((p) => (
              <Link key={p.href} href={`/${lang}${p.href}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" width="480" height="480" loading="lazy" decoding="async" />
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
        <ShippingCalculator defaultCapType="structured" productName="Custom Wholesale Snapbacks" sku="JY-SNAPBACK" />
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
