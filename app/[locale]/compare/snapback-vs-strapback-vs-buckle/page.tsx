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
      crumb: "Snapback vs Strapback vs Buckle",
      badge: "Headwear Comparison · Factory Data 2026",
      title: "Snapback vs Strapback vs",
      accent: "Buckle",
      subtitle:
        "The back closure is the part of a cap a buyer touches first, and the part that decides whether your range reads streetwear, casual or premium. Here is how the three standard closures compare on fit, look, durability and returns.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "Snapback is the adjustable plastic closure most streetwear and youth ranges use, strapback is a softer fabric strap that suits unstructured and dad-hat shapes, and buckle is a metal closure that reads more premium and lasts longer. All three sit in the same MOQ and price band.",
    },
    table: {
      caption: "Back closure comparison — fit, look and risk",
      columns: [
        { key: "spec", label: "Closure" },
        { key: "snap", label: "Snapback (plastic)" },
        { key: "strap", label: "Strapback (fabric)" },
        { key: "buckle", label: "Buckle (metal)" },
      ],
      rows: [
        {
          label: "How it adjusts",
          values: [
            "Plastic snap tab with preset holes — you set it to the nearest hole",
            "Fabric strap with a sliding buckle — continuous adjustment along the strap",
            "Metal buckle with a prong or a sliding rail, depending on the hardware chosen",
          ],
        },
        {
          label: "Adjustment range",
          values: [
            "Fixed increments: the fit is either one hole or the next",
            "Continuous: the most forgiving option across head sizes",
            "Wide, but the steps depend on the hardware — usually more range than a fixed size",
          ],
        },
        {
          label: "Look and perceived tier",
          values: [
            "Sporty and streetwear; the plastic tab stays visible from behind",
            "Casual, relaxed and retro; the strap blends into the silhouette",
            "Premium and vintage; metal reads higher-end on a shelf",
          ],
        },
        {
          label: "Durability",
          values: [
            "Plastic teeth can crack under repeated bending and in cold weather",
            "Fabric strap wears well; the slider is the part that fails first",
            "Metal hardware is the most durable of the three, though plating can rub over years of use",
          ],
        },
        {
          label: "Hardware cost position",
          values: [
            "Low-cost plastic component",
            "Fabric strap and slider, usually comparable to plastic",
            "The highest hardware cost of the three, though small next to fabric and decoration",
          ],
        },
        {
          label: "Typical wearer profile",
          values: [
            "Teen through 30s — streetwear, skate, music merchandise",
            "Broad: dad hats, washed cotton, relaxed adult ranges",
            "Adult and premium audiences, gift and heritage ranges",
          ],
        },
        {
          label: "Best cap shapes",
          values: [
            "5-panel and 6-panel with a tall or structured crown",
            "Unstructured 6-panel, dad hats and washed finishes",
            "6-panel, camp caps and vintage-style crowns",
          ],
        },
        {
          label: "Return-rate risk",
          values: [
            "Highest: hole-to-hole steps mean one size does not fit every head",
            "Lowest: continuous adjustment removes most size complaints",
            "Low, provided the hardware range covers the head sizes sold in your market",
          ],
        },
        {
          label: "Decoration on the closure",
          values: [
            "Usually left plain — the tab is moulded plastic",
            "Can carry a woven label or a small embroidered mark",
            "Hardware can be engraved, or branded with a small label next to it",
          ],
        },
        {
          label: "MOQ (2026)",
          values: [
            "200 pcs per style / colour",
            "200 pcs per style / colour",
            "200 pcs per style / colour",
          ],
        },
        {
          label: "Factory price band (2026)",
          values: ["$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB"],
        },
      ],
      note: "Closure choice does not change our MOQ or our price band: minimums apply per style and colour, and hardware cost is small next to fabric, decoration count and order quantity. These are Baoding Junyang factory terms as of 2026.",
    },
    fit: {
      title: "Which closure adjusts to the widest range of head sizes?",
      body: [
        "A snapback is the least forgiving of the three. The plastic tab has a fixed row of holes, so the wearer lands on the nearest setting — a head that sits between two holes is always either slightly loose or slightly tight. On a one-size cap that is normally acceptable, but it is the biggest single source of fit complaints, which is why snapback ranges often carry the highest size-related return rate.",
        "A strapback adjusts continuously. The fabric strap threads through a sliding buckle, so the wearer sets it anywhere along its length instead of at a fixed step. For unstructured caps and dad hats — shapes that sit soft against the head — this is the closure that produces the fewest fit problems, and it is why washed-cotton and relaxed ranges default to it.",
        "A metal buckle sits between the two. The range depends on the hardware you choose: a prong buckle gives you punched holes, while a sliding rail gives near-continuous adjustment. Because the metal is heavier, it also holds the strap in place without slipping, which matters on heavier fabrics.",
        "Practical rule: if your market spans a wide spread of head sizes, or you sell online where returns are expensive, choose strapback or a sliding buckle. Reserve the classic snapback for ranges where the visible plastic tab is part of the look and a loose one-size fit is the expectation.",
      ],
    },
    choose: {
      title: "Which closure should your brand order?",
      items: [
        {
          t: "Order snapback if…",
          d: "your audience is streetwear, skate or music-led and expects the visible plastic tab. It is the most recognisable closure of the three and the one buyers ask for by name.",
        },
        {
          t: "Order strapback if…",
          d: "you sell dad hats, washed or unstructured caps and want the fewest fit complaints. Continuous adjustment is the simplest way to reduce size-related returns.",
        },
        {
          t: "Order buckle if…",
          d: "the range has to read premium or heritage, or you are building a gift and higher-tier product where metal hardware supports the price point. Many brands run all three across one collection — minimums apply per style and colour, so mixing costs nothing extra.",
        },
      ],
    },
    related: {
      title: "Where do these closures fit in a real custom program?",
      intro:
        "The closure is one line on a spec sheet. These pages cover the programme side: how orders are structured, sampled and produced.",
      links: [
        {
          href: "/oem-hat-manufacturer",
          label: "OEM hat manufacturing",
          d: "How a full OEM programme runs from tech pack to bulk delivery.",
        },
        {
          href: "/bulk-custom-hats-manufacturer",
          label: "Bulk custom hats",
          d: "Minimums, capacity and how volume is planned.",
        },
        {
          href: "/wholesale-snapbacks",
          label: "Wholesale snapbacks",
          d: "Snapback supply for resellers and retail programmes.",
        },
        {
          href: "/private-label-hat-manufacturer",
          label: "Private label caps",
          d: "Your own label, hangtag and packaging on our construction.",
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
      note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ Japanese Barudan embroidery machines and a 200-person production team, with SGS verification.",
    },
    faq: {
      heading: "Which closure should you choose? Common buyer questions",
      items: [
        {
          q: "Snapback, strapback or buckle — which should my brand choose?",
          a: "Start from the wearer and the sales channel. Choose strapback for unstructured and dad-hat shapes where fit tolerance matters most, snapback for streetwear ranges where the visible plastic tab is part of the look, and buckle when the product has to read premium. If you sell online across a wide spread of head sizes, the closure with continuous adjustment will produce the fewest returns.",
        },
        {
          q: "Which closure is the most durable?",
          a: "Metal buckle hardware lasts longest, followed by the fabric strap, where the slider is the wear point. Plastic snap teeth are the component most likely to crack, especially if a cap is bent repeatedly or worn in cold weather. Fabric choice alone does not decide it — the closure hardware is usually what fails first.",
        },
        {
          q: "Does the closure change the price?",
          a: "Not within our terms. All three closures sit in the same $3.50–$7.00 FOB band and under the same 200 pcs per style and colour minimum. Fabric, the number of decoration positions and the order quantity move unit cost far more than the closure hardware does.",
        },
        {
          q: "Which closure has the lowest return rate?",
          a: "Strapback, because adjustment is continuous rather than stepped. Snapback carries the highest size-related risk, since the wearer is always between two holes. For a buckle, choose hardware with a wide adjustment range and the risk drops close to strapback levels.",
        },
        {
          q: "Can I order different closures in one order?",
          a: "Yes. Minimums apply per style and colour, not per closure type, so a mixed order is standard practice. A typical first order is 200 pcs of each closure in a single colourway, which also lets you test which one sells best in your market.",
        },
      ],
    },
    cta: {
      title: "Send your artwork — we will match it to the right closure",
      text: "We assess your logo and shape, recommend the closure and crown profile, then quote with a production plan. MOQ 200 pcs, physical samples in 7 days.",
      button: "Get Factory Quote",
    },
  },
  es: {
    hero: {
      crumb: "Snapback vs Strapback vs Hebilla",
      badge: "Comparativa de Gorras · Datos de Fábrica 2026",
      title: "Snapback vs Strapback vs",
      accent: "Hebilla",
      subtitle:
        "El cierre trasero es la parte que el comprador toca primero y la que define si tu colección se percibe streetwear, casual o premium. Así se comparan los tres cierres estándar en ajuste, aspecto, durabilidad y devoluciones.",
      quickAnswerLabel: "Respuesta corta",
      quickAnswer:
        "El snapback es el cierre plástico regulable que usa la mayoría de colecciones streetwear y juveniles; el strapback es una correa de tela más suave, ideal para gorras sin estructura y dad hats; y la hebilla es un cierre metálico que se percibe más premium y dura más. Los tres comparten MOQ y banda de precio.",
    },
    table: {
      caption: "Comparativa de cierres traseros: ajuste, aspecto y riesgo",
      columns: [
        { key: "spec", label: "Cierre" },
        { key: "snap", label: "Snapback (plástico)" },
        { key: "strap", label: "Strapback (tela)" },
        { key: "buckle", label: "Hebilla (metal)" },
      ],
      rows: [
        {
          label: "Cómo se ajusta",
          values: [
            "Pestaña plástica de presión con orificios fijos: se ajusta al orificio más cercano",
            "Correa de tela con hebilla deslizante: ajuste continuo a lo largo de la correa",
            "Hebilla metálica con gancho o riel deslizante, según el herraje elegido",
          ],
        },
        {
          label: "Rango de ajuste",
          values: [
            "Incrementos fijos: la talla es un orificio o el siguiente",
            "Continuo: la opción más tolerante entre tallas de cabeza",
            "Amplio, pero los pasos dependen del herraje: normalmente más rango que una talla fija",
          ],
        },
        {
          label: "Aspecto y nivel percibido",
          values: [
            "Deportivo y streetwear; la pestaña plástica queda visible por detrás",
            "Casual, relajado y retro; la correa se integra a la silueta",
            "Premium y vintage; el metal se percibe de gama más alta en anaquel",
          ],
        },
        {
          label: "Durabilidad",
          values: [
            "Los dientes plásticos pueden agrietarse con el doblado repetido y el frío",
            "La correa de tela resiste bien; el deslizador es la pieza que falla primero",
            "El herraje metálico es el más duradero de los tres, aunque el baño puede desgastarse con los años",
          ],
        },
        {
          label: "Costo del herraje",
          values: [
            "Componente plástico de bajo costo",
            "Correa de tela y deslizador, normalmente comparables al plástico",
            "El mayor costo de herraje de los tres, aunque pequeño frente a tela y decoración",
          ],
        },
        {
          label: "Perfil de usuario habitual",
          values: [
            "De adolescente a los 30 y tantos: streetwear, skate, merchandising musical",
            "Amplio: dad hats, sarga lavada, colecciones adultas relajadas",
            "Público adulto y premium, colecciones de regalo y de estilo heritage",
          ],
        },
        {
          label: "Formas de gorra recomendadas",
          values: [
            "5 y 6 paneles con corona alta o estructurada",
            "6 paneles sin estructura, dad hats y acabados lavados",
            "6 paneles, camp caps y coronas de estilo vintage",
          ],
        },
        {
          label: "Riesgo de devoluciones",
          values: [
            "El más alto: los saltos entre orificios hacen que una talla no sirva a todas las cabezas",
            "El más bajo: el ajuste continuo elimina casi todas las quejas de talla",
            "Bajo, siempre que el rango del herraje cubra las tallas que vendes en tu mercado",
          ],
        },
        {
          label: "Decoración sobre el cierre",
          values: [
            "Normalmente se deja liso: la pestaña es plástico moldeado",
            "Puede llevar etiqueta tejida o una marca bordada pequeña",
            "El herraje admite grabado, o una etiqueta pequeña a su lado",
          ],
        },
        {
          label: "MOQ (2026)",
          values: ["200 uds por estilo / color", "200 uds por estilo / color", "200 uds por estilo / color"],
        },
        {
          label: "Banda de precio de fábrica (2026)",
          values: ["$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB", "$3.50 – $7.00 FOB"],
        },
      ],
      note: "El tipo de cierre no cambia nuestro MOQ ni nuestra banda de precio: los mínimos aplican por estilo y color, y el costo del herraje es pequeño frente a la tela, el número de decoraciones y la cantidad del pedido. Son condiciones de fábrica de Baoding Junyang en 2026.",
    },
    fit: {
      title: "¿Qué cierre se ajusta al mayor rango de tallas?",
      body: [
        "El snapback es el menos tolerante de los tres. La pestaña plástica tiene una fila fija de orificios, así que el usuario queda en la posición más cercana: una cabeza que cae entre dos orificios siempre queda algo floja o algo ajustada. En una gorra talla única suele ser aceptable, pero es la mayor fuente de quejas de talla, y por eso las colecciones snapback tienden a tener la tasa más alta de devoluciones por ajuste.",
        "El strapback se ajusta de forma continua. La correa de tela pasa por una hebilla deslizante, así que el usuario la fija en cualquier punto de su largo, no en un salto fijo. En gorras sin estructura y dad hats — formas blandas que apoyan sobre la cabeza — es el cierre que genera menos problemas de talla, y es la razón por la que las colecciones de sarga lavada y estilo relajado lo eligen por defecto.",
        "La hebilla metálica queda en medio. El rango depende del herraje que elijas: una hebilla de gancho da orificios perforados, mientras que un riel deslizante permite un ajuste casi continuo. Como el metal pesa más, también mantiene la correa en su sitio sin deslizarse, algo que importa en telas gruesas.",
        "Regla práctica: si tu mercado abarca un rango amplio de tallas, o vendes online donde las devoluciones son caras, elige strapback o una hebilla deslizante. Reserva el snapback clásico para colecciones donde la pestaña plástica visible es parte del look y el ajuste holgado es intencional.",
      ],
    },
    choose: {
      title: "¿Qué cierre debería pedir tu marca?",
      items: [
        {
          t: "Pide snapback si…",
          d: "tu público es streetwear, skate o de perfil musical y espera la pestaña plástica visible. Es el cierre más reconocible de los tres y el que los compradores piden por su nombre.",
        },
        {
          t: "Pide strapback si…",
          d: "vendes dad hats, gorras lavadas o sin estructura y quieres el mínimo de quejas de talla. El ajuste continuo es la forma más simple de reducir devoluciones por talla.",
        },
        {
          t: "Pide hebilla si…",
          d: "la colección debe percibirse premium o heritage, o si construyes un producto de regalo o de gama alta donde el herraje metálico sostiene el precio. Muchas marcas usan los tres en una misma colección: los mínimos aplican por estilo y color, así que combinarlos no cuesta extra.",
        },
      ],
    },
    related: {
      title: "¿Dónde encajan estos cierres en un programa real?",
      intro:
        "El cierre es una línea de la ficha técnica. Estas páginas cubren el lado del programa: cómo se estructuran, se muestrean y se producen los pedidos.",
      links: [
        {
          href: "/oem-hat-manufacturer",
          label: "Fabricación OEM de gorras",
          d: "Cómo funciona un programa OEM completo, del tech pack a la entrega en masa.",
        },
        {
          href: "/bulk-custom-hats-manufacturer",
          label: "Gorras personalizadas al por mayor",
          d: "Mínimos, capacidad y cómo se planifica el volumen.",
        },
        {
          href: "/wholesale-snapbacks",
          label: "Snapbacks al por mayor",
          d: "Suministro de snapbacks para revendedores y programas de retail.",
        },
        {
          href: "/private-label-hat-manufacturer",
          label: "Gorras marca privada",
          d: "Tu propia etiqueta, colgante y empaque sobre nuestra construcción.",
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
      note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan, un equipo de producción de 200 personas y verificación SGS.",
    },
    faq: {
      heading: "¿Qué cierre elegir? Preguntas frecuentes de compradores",
      items: [
        {
          q: "Snapback, strapback o hebilla: ¿cuál debería elegir mi marca?",
          a: "Parte del usuario y del canal de venta. Elige strapback para formas sin estructura y dad hats donde la tolerancia de talla es lo más importante, snapback para colecciones streetwear donde la pestaña plástica visible es parte del look, y hebilla cuando el producto debe percibirse premium. Si vendes online a un rango amplio de tallas, el cierre de ajuste continuo generará menos devoluciones.",
        },
        {
          q: "¿Qué cierre es el más duradero?",
          a: "El herraje de hebilla metálica dura más, seguido de la correa de tela, donde el deslizador es el punto de desgaste. Los dientes plásticos del snapback son la pieza con más probabilidad de agrietarse, sobre todo si la gorra se dobla con frecuencia o se usa con frío. La tela por sí sola no lo decide: el herraje del cierre suele fallar primero.",
        },
        {
          q: "¿El tipo de cierre cambia el precio?",
          a: "No dentro de nuestras condiciones. Los tres cierres están en la misma banda de $3.50–$7.00 FOB y bajo el mismo mínimo de 200 uds por estilo y color. La tela, el número de posiciones de decoración y la cantidad del pedido mueven el costo unitario mucho más que el herraje del cierre.",
        },
        {
          q: "¿Qué cierre tiene menos devoluciones?",
          a: "El strapback, porque el ajuste es continuo y no por saltos. El snapback tiene el mayor riesgo de talla, ya que el usuario siempre queda entre dos orificios. En la hebilla, elige un herraje con rango de ajuste amplio y el riesgo baja casi al nivel del strapback.",
        },
        {
          q: "¿Puedo pedir cierres distintos en un mismo pedido?",
          a: "Sí. Los mínimos aplican por estilo y color, no por tipo de cierre, así que un pedido mixto es práctica habitual. Un primer pedido típico es de 200 uds de cada cierre en un solo color, lo que además te permite probar cuál vende mejor en tu mercado.",
        },
      ],
    },
    cta: {
      title: "Envíanos tu diseño y lo ajustamos al cierre correcto",
      text: "Evaluamos tu logo y la forma, recomendamos el cierre y el perfil de corona, y cotizamos con un plan de producción. MOQ 200 uds, muestras físicas en 7 días.",
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
        ? "Snapback vs Strapback vs Hebilla: ¿Qué Cierre Elegir para Tu Marca?"
        : "Snapback vs Strapback vs Buckle: Which Back Closure Should You Choose?",
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
      "@id": `https://bdjunyang.com/${lang}/compare/snapback-vs-strapback-vs-buckle`,
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
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.fit.title}</h2>
          <div className="space-y-5">
            {c.fit.body.map((p, i) => (
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
