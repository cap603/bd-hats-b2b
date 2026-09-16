"use client";

import Link from "next/link";
import {
  ComparisonShell,
  ComparisonTable,
  ComparisonFaq,
} from "../../../components/ComparisonShell";
import { useLang } from "../../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Flat vs 3D Puff Embroidery",
      badge: "Headwear Comparison · Factory Data 2026",
      title: "Flat Embroidery vs",
      accent: "3D Puff",
      subtitle:
        "Both decorations run on the same Barudan machines, but they solve different problems. One keeps your artwork low and detailed, the other pushes it off the fabric. The choice changes your cost, your usable logo scale and how the cap reads across a room.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "Choose flat embroidery for small text, fine detail and a lower unit cost: one pass, no foam. Choose 3D puff when you want a raised, high-impact logo on a cap with a flat front panel. Both run on the same machines, at MOQ 200 pcs per style and colour.",
    },
    table: {
      caption: "Decoration and commercial comparison",
      columns: [
        { key: "spec", label: "Specification" },
        { key: "flat", label: "Flat embroidery" },
        { key: "puff", label: "3D puff embroidery" },
      ],
      rows: [
        {
          label: "Appearance and height",
          values: [
            "Sits at the level of the fabric; the only volume comes from thread density",
            "Raised and rounded: a foam layer lifts the stitching clear of the fabric surface",
          ],
        },
        {
          label: "Foam backing",
          values: [
            "None",
            "Yes — a foam sheet is stitched over and the excess is trimmed away around the artwork",
          ],
        },
        {
          label: "Cost structure",
          values: [
            "One embroidery pass, no extra material; charges move mainly with stitch count",
            "Costs more: a second pass over the foam, the foam itself as a consumable, and longer digitising time",
          ],
        },
        {
          label: "Durability and care",
          values: [
            "Takes repeated wear and washing with nothing to compress or peel",
            "Lasts well when digitised correctly, but the raised height can soften over time at hard creases",
          ],
        },
        {
          label: "Fine detail and smallest text",
          values: [
            "Handles small lettering and fine lines; the limit is set by thread, font and fabric",
            "Needs thick, well-spaced strokes — small letters close up in raised stitching",
          ],
        },
        {
          label: "Best logo types",
          values: [
            "Wordmarks, fine-line marks, multi-colour emblems, small text",
            "Bold simplified shapes in one or two colours: varsity letters, block marks, chunky icons",
          ],
        },
        {
          label: "Common applications",
          values: [
            "Corporate uniform, team sport, retail basics, promotional caps",
            "Streetwear and skate fronts, varsity and college caps, lifestyle caps built around a big logo",
          ],
        },
        {
          label: "Sampling and digitising difficulty",
          values: [
            "Straightforward — a standard digitised file is usually enough",
            "More demanding: the file is built for foam with its own underlay and border run, so the physical sample matters more before bulk",
          ],
        },
        {
          label: "MOQ (2026)",
          values: ["200 pcs per style / colour", "200 pcs per style / colour"],
        },
        {
          label: "Factory price band (2026)",
          values: ["$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB"],
        },
      ],
      note: "MOQ, sample lead time and price band are identical for both decorations and reflect Baoding Junyang factory terms as of 2026. 3D puff usually quotes towards the upper part of the $3.50 – $7.00 FOB band because of the extra pass and the foam; final pricing depends on stitch count, decoration positions and order quantity.",
    },
    cost: {
      title: "Does 3D puff embroidery cost more than flat embroidery?",
      body: [
        "Yes — the same logo costs more in 3D puff than in flat embroidery, and the reason is mechanical rather than commercial. Puff is a second pass: the machine stitches over a sheet of foam, so the artwork is embroidered twice, at higher density, with a border run that holds the foam edge. The foam is a consumable, and the digitised file has to be built differently, with its own underlay and outline, which takes our digitising team longer before a single cap is sewn.",
        "Flat embroidery takes one pass and no extra material, which is why it remains the cheapest way to put a logo on a cap and why it can quote anywhere inside the $3.50 – $7.00 FOB band. It is also the only one of the two that holds fine lines, small lettering and three or more colours cleanly.",
        "The honest way to price this is to send us the artwork. Stitch count, logo width, the number of decoration positions (front, side, back, visor) and order quantity move the unit cost far more than the decoration type does, so we quote from the file instead of from a rule of thumb.",
      ],
    },
    choose: {
      title: "Which decoration should your brand pick?",
      items: [
        {
          t: "Choose flat embroidery if…",
          d: "your logo has fine lines, small text or more than two colours, or you are decorating the sides, back and visor as well as the front. It is the lower-cost, lower-risk option and works on every fabric we run.",
        },
        {
          t: "Choose 3D puff if…",
          d: "your logo is a bold, simplified shape and you want it to stand off the cap. Puff reads best on a flat front panel with no centre seam, in one or two colours, and it is the decoration streetwear and varsity ranges are built around.",
        },
        {
          t: "Use both on one cap if…",
          d: "a 3D puff front with flat embroidery on the side or back is a standard combination and costs nothing extra in setup — the minimum applies per style and colour, not per decoration type.",
        },
      ],
    },
    related: {
      title: "Where can you get these caps made?",
      intro:
        "The decoration is one line on a spec sheet. These pages cover the programmes behind it: how the cap is built, how it is decorated and how a full order is run.",
      links: [
        {
          href: "/custom-5-panel-caps-manufacturer",
          label: "Custom 5-panel caps",
          d: "Flat, seam-free fronts — the natural base for a 3D puff logo.",
        },
        {
          href: "/custom-dad-hats-manufacturer",
          label: "Custom dad hats",
          d: "Soft, unstructured shapes, usually decorated in flat embroidery.",
        },
        {
          href: "/oem-hat-manufacturer",
          label: "OEM hat manufacturing",
          d: "How a full programme runs from artwork to bulk delivery.",
        },
        {
          href: "/guide",
          label: "Headwear buyer’s guide",
          d: "Fabrics, crowns, closures and decoration methods in one place.",
        },
      ],
    },
    facts: {
      title: "Factory terms",
      cards: [
        { k: "200 pcs", v: "MOQ per style / colour" },
        { k: "7 days", v: "Physical sample lead time" },
        { k: "15–20 days", v: "Bulk production after sample approval" },
        { k: "AQL 2.5", v: "Piece-by-piece inspection standard" },
      ],
      note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ Japanese Barudan embroidery machines and a 200-person production team. The factory is SGS verified, ships 5M+ caps a year, and sends 70% of that output to North America.",
    },
    faq: {
      heading: "Flat embroidery and 3D puff FAQ",
      items: [
        {
          q: "Should I choose flat embroidery or 3D puff for my logo?",
          a: "If your artwork has fine lines, small text or three or more colours, choose flat embroidery. If it is a bold, simplified shape in one or two colours and you want it to stand off the cap, choose 3D puff. The practical rule from the factory floor: puff needs thick strokes and generous spacing, flat embroidery handles everything else.",
        },
        {
          q: "Does 3D puff embroidery cost more?",
          a: "Yes. Puff takes a second embroidery pass over a foam layer, plus the foam itself, and the digitised file takes longer to prepare, so it generally quotes towards the upper part of the $3.50 – $7.00 FOB band. Flat embroidery takes one pass and no extra material. Both carry the same MOQ of 200 pcs per style and colour.",
        },
        {
          q: "What is the smallest text I can use in embroidery?",
          a: "It depends on the thread, the font and the fabric, not on the decoration type alone. Small lettering is always easier in flat embroidery, because raised puff stitching closes up as the letters get smaller. Send us the wording and we will tell you the smallest size your specific text will read at.",
        },
        {
          q: "Does 3D puff embroidery survive washing and heavy wear?",
          a: "Yes, when it is digitised correctly, with a proper underlay and a border run holding the foam edge. The raised height can soften over time at hard creases such as the front fold, so wash cooler and avoid pressing a hot iron directly onto the foam. Flat embroidery has nothing to compress and is the more forgiving option for caps that are washed often.",
        },
        {
          q: "Can I use both decorations on the same cap?",
          a: "Yes, and it is common: 3D puff on the front with flat embroidery on a side or back panel, or a flat wordmark sitting above a puff emblem. Minimums apply per style and colour, not per decoration type, so mixing the two does not raise your MOQ.",
        },
      ],
    },
    cta: {
      title: "Send your artwork — we will recommend the decoration and quote it",
      text: "We assess your logo, advise between flat embroidery and 3D puff, and quote within 12 hours. MOQ 200 pcs, physical samples in 7 days.",
      button: "Get Factory Quote",
    },
  },
  es: {
    hero: {
      crumb: "Bordado Plano vs 3D Puff",
      badge: "Comparativa de Gorras · Datos de Fábrica 2026",
      title: "Bordado Plano vs",
      accent: "Bordado 3D Puff",
      subtitle:
        "Las dos decoraciones se bordan en las mismas máquinas Barudan, pero resuelven problemas distintos. Una mantiene tu diseño bajo y detallado; la otra lo levanta de la tela. La elección cambia el costo, la escala útil de tu logo y cómo se lee la gorra a distancia.",
      quickAnswerLabel: "Respuesta corta",
      quickAnswer:
        "Elige bordado plano para textos pequeños, detalle fino y un costo unitario menor: una sola pasada y sin foam. Elige bordado 3D puff si quieres un logo en relieve y de alto impacto sobre un frente plano. Ambos usan las mismas máquinas, con MOQ de 200 uds por estilo y color.",
    },
    table: {
      caption: "Comparativa de decoración y de condiciones comerciales",
      columns: [
        { key: "spec", label: "Especificación" },
        { key: "flat", label: "Bordado plano" },
        { key: "puff", label: "Bordado 3D puff" },
      ],
      rows: [
        {
          label: "Aspecto y altura",
          values: [
            "Queda al ras de la tela; el único volumen lo da la densidad del hilo",
            "Elevado y redondeado: una capa de foam separa el bordado de la superficie de la tela",
          ],
        },
        {
          label: "Base de foam",
          values: [
            "No lleva",
            "Sí: se borda encima de una lámina de foam y se recorta el sobrante alrededor del diseño",
          ],
        },
        {
          label: "Estructura de costo",
          values: [
            "Una sola pasada de bordado y sin material extra; el precio se mueve sobre todo con el número de puntadas",
            "Cuesta más: segunda pasada de bordado sobre el foam, el foam como consumible y más tiempo de digitalización",
          ],
        },
        {
          label: "Durabilidad y cuidado",
          values: [
            "Aguanta el uso y los lavados repetidos sin material que se comprima ni se despegue",
            "Dura bien si está bien digitalizado, pero el relieve puede bajar con el tiempo en los pliegues duros",
          ],
        },
        {
          label: "Detalle fino y letra más pequeña",
          values: [
            "Admite letras pequeñas y líneas finas; el límite lo marcan el hilo, la tipografía y la tela",
            "Pide trazos gruesos y bien separados: en letras pequeñas el bordado en relieve se cierra",
          ],
        },
        {
          label: "Tipos de logo ideales",
          values: [
            "Logotipos tipográficos, marcas de línea fina, emblemas multicolor, textos pequeños",
            "Formas simples y macizas en uno o dos colores: letras varsity, bloques, iconos gruesos",
          ],
        },
        {
          label: "Aplicaciones habituales",
          values: [
            "Uniforme corporativo, deporte de equipo, retail básico, promocional",
            "Frentes de streetwear y skate, gorras varsity y universitarias, lifestyle con logo grande",
          ],
        },
        {
          label: "Dificultad de digitalización y muestra",
          values: [
            "Sencilla: normalmente basta un archivo digitalizado estándar",
            "Más exigente: el archivo se prepara para foam, con su propia entretela y contorno, así que la muestra física pesa más antes de producir",
          ],
        },
        {
          label: "MOQ (2026)",
          values: ["200 uds por estilo / color", "200 uds por estilo / color"],
        },
        {
          label: "Banda de precio de fábrica (2026)",
          values: ["$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB"],
        },
      ],
      note: "El MOQ, el plazo de muestra y la banda de precio son idénticos para las dos decoraciones y reflejan las condiciones de fábrica de Baoding Junyang en 2026. El 3D puff suele cotizarse en la parte alta de la banda de $3.50 – $7.00 FOB por la pasada extra y el foam; el precio final depende del número de puntadas, las posiciones de decoración y la cantidad del pedido.",
    },
    cost: {
      title: "¿Cuesta más el bordado 3D puff que el bordado plano?",
      body: [
        "Sí: el mismo logo cuesta más en 3D puff que en bordado plano, y la razón es mecánica, no comercial. El puff es una segunda pasada: la máquina borda encima de una lámina de foam, así que el diseño se borda dos veces, con más densidad y con un contorno que fija el borde del foam. El foam es un consumible y el archivo digitalizado debe prepararse de otra forma, con entretela y contorno propios, lo que alarga el trabajo del equipo de digitalización antes de coser la primera gorra.",
        "El bordado plano lleva una sola pasada y ningún material extra: por eso sigue siendo la forma más económica de poner un logo en una gorra y por eso puede cotizarse en cualquier punto de la banda de $3.50 – $7.00 FOB. Además es el único de los dos que mantiene con nitidez las líneas finas, las letras pequeñas y los diseños de tres o más colores.",
        "La forma honesta de poner precio es enviarnos el diseño. El número de puntadas, el ancho del logo, las posiciones de decoración (frente, lateral, espalda, visera) y la cantidad del pedido mueven el costo unitario mucho más que el tipo de decoración, así que cotizamos desde el archivo y no desde una regla general.",
      ],
    },
    choose: {
      title: "¿Qué decoración debería elegir tu marca?",
      items: [
        {
          t: "Elige bordado plano si…",
          d: "tu logo tiene líneas finas, letras pequeñas o más de dos colores, o si vas a decorar también laterales, espalda y visera. Es la opción más económica y de menor riesgo, y funciona en todas las telas que trabajamos.",
        },
        {
          t: "Elige bordado 3D puff si…",
          d: "tu logo es una forma maciza y simple y quieres que se levante de la gorra. El puff luce mejor en un frente plano sin costura central, en uno o dos colores, y es la decoración sobre la que se construyen las colecciones de streetwear y varsity.",
        },
        {
          t: "Usa las dos en la misma gorra si…",
          d: "combinar un frente en 3D puff con bordado plano en el lateral o la espalda es habitual y no suma costo de preparación: el mínimo aplica por estilo y color, no por tipo de decoración.",
        },
      ],
    },
    related: {
      title: "¿Dónde puedes fabricar estas gorras?",
      intro:
        "La decoración es una línea en la ficha técnica. Estas páginas cubren los programas que hay detrás: cómo se construye la gorra, cómo se decora y cómo se gestiona un pedido completo.",
      links: [
        {
          href: "/custom-5-panel-caps-manufacturer",
          label: "Gorras de 5 paneles personalizadas",
          d: "Frentes planos y sin costura: la base natural para un logo en 3D puff.",
        },
        {
          href: "/custom-dad-hats-manufacturer",
          label: "Gorras dad hat personalizadas",
          d: "Formas suaves y sin estructura, que normalmente se decoran en bordado plano.",
        },
        {
          href: "/oem-hat-manufacturer",
          label: "Fabricación OEM de gorras",
          d: "Cómo funciona un programa completo, del diseño a la entrega en masa.",
        },
        {
          href: "/guide",
          label: "Guía del comprador de gorras",
          d: "Telas, coronas, cierres y métodos de decoración en un solo lugar.",
        },
      ],
    },
    facts: {
      title: "Condiciones de fábrica",
      cards: [
        { k: "200 uds", v: "MOQ por estilo / color" },
        { k: "7 días", v: "Plazo de muestra física" },
        { k: "15–20 días", v: "Producción en masa tras aprobar muestra" },
        { k: "AQL 2.5", v: "Estándar de inspección pieza por pieza" },
      ],
      note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan y un equipo de producción de 200 personas. La fábrica está verificada por SGS, produce más de 5 millones de gorras al año y envía el 70% de esa producción a Norteamérica.",
    },
    faq: {
      heading: "Preguntas frecuentes: bordado plano y 3D puff",
      items: [
        {
          q: "¿Qué me conviene para mi logo, bordado plano o 3D puff?",
          a: "Si tu diseño tiene líneas finas, letras pequeñas o tres o más colores, elige bordado plano. Si es una forma maciza y simple en uno o dos colores y quieres que se levante de la gorra, elige 3D puff. La regla práctica de fábrica: el puff necesita trazos gruesos y bien separados; el bordado plano resuelve todo lo demás.",
        },
        {
          q: "¿El bordado 3D puff cuesta más?",
          a: "Sí. El puff lleva una segunda pasada de bordado sobre una capa de foam, más el foam en sí, y el archivo digitalizado tarda más en prepararse, así que suele cotizarse en la parte alta de la banda de $3.50 – $7.00 FOB. El bordado plano lleva una pasada y ningún material extra. Ambos comparten el mismo MOQ de 200 uds por estilo y color.",
        },
        {
          q: "¿Cuál es el texto más pequeño que puedo bordar?",
          a: "Depende del hilo, de la tipografía y de la tela, no solo del tipo de decoración. Las letras pequeñas siempre son más fáciles en bordado plano, porque el relieve del puff se cierra a medida que la letra se reduce. Envíanos el texto y te diremos el tamaño mínimo al que tu copy se lee bien.",
        },
        {
          q: "¿El bordado 3D puff aguanta los lavados y el uso intenso?",
          a: "Sí, cuando está bien digitalizado, con una entretela adecuada y un contorno que sujeta el borde del foam. El relieve puede bajar con el tiempo en los pliegues duros, como el doblez frontal, así que conviene lavar en frío y no planchar directamente sobre el foam. El bordado plano no tiene nada que comprimir y perdona más en gorras que se lavan a menudo.",
        },
        {
          q: "¿Puedo usar las dos decoraciones en la misma gorra?",
          a: "Sí, y es habitual: 3D puff en el frente con bordado plano en un panel lateral o trasero, o un logotipo plano encima de un emblema en puff. Los mínimos aplican por estilo y color, no por tipo de decoración, así que combinarlas no sube tu MOQ.",
        },
      ],
    },
    cta: {
      title: "Envíanos tu diseño y te recomendamos la decoración con su cotización",
      text: "Evaluamos tu logo, te asesoramos entre bordado plano y 3D puff, y cotizamos en 12 horas. MOQ 200 uds, muestras físicas en 7 días.",
      button: "Solicitar Cotización",
    },
  },
};

export default function Page() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      lang === "es"
        ? "Bordado Plano vs Bordado 3D Puff: ¿Cuál Elegir para Tu Logo?"
        : "Flat Embroidery vs 3D Puff: Which Should Your Logo Use?",
    description: c.hero.quickAnswer,
    inLanguage: lang === "es" ? "es" : "en",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    author: {
      "@type": "Organization",
      name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
      url: "https://bdjunyang.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bdjunyang.com/${lang}/compare/flat-embroidery-vs-3d-puff`,
    },
  };

  return (
    <ComparisonShell
      crumb={c.hero.crumb}
      badge={c.hero.badge}
      title={c.hero.title}
      accent={c.hero.accent}
      subtitle={c.hero.subtitle}
      quickAnswerLabel={c.hero.quickAnswerLabel}
      quickAnswer={c.hero.quickAnswer}
      ctaTitle={c.cta.title}
      ctaText={c.cta.text}
      ctaButton={c.cta.button}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ComparisonTable
            caption={c.table.caption}
            columns={c.table.columns}
            rows={c.table.rows}
            note={c.table.note}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.cost.title}</h2>
          <div className="space-y-5">
            {c.cost.body.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{c.choose.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.choose.items.map((item) => (
              <div key={item.t} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-black text-lg mb-3">{item.t}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">{c.related.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">{c.related.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.related.links.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className="group block border border-gray-200 rounded-xl p-5 bg-white hover:border-black transition"
              >
                <span className="font-bold text-gray-900 block mb-1">{link.label}</span>
                <span className="text-sm text-gray-500">{link.d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{c.facts.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.facts.cards.map((card) => (
              <div key={card.k} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <p className="text-2xl md:text-3xl font-black text-black mb-2">{card.k}</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                  {card.v}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 leading-relaxed">{c.facts.note}</p>
        </div>
      </section>

      <ComparisonFaq heading={c.faq.heading} items={c.faq.items} />
    </ComparisonShell>
  );
}
