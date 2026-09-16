"use client";

import {
  ComparisonShell,
  ComparisonTable,
  ComparisonFaq,
} from "../../../components/ComparisonShell";
import { useLang } from "../../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "5-Panel vs 6-Panel Caps",
      badge: "Headwear Comparison · Factory Data 2026",
      title: "5-Panel vs",
      accent: "6-Panel Caps",
      subtitle:
        "These two constructions sit behind almost every custom cap program. The choice changes your usable logo area, your decoration options and how the finished cap reads on a shelf.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "Choose 6-panel for a structured, traditional baseball shape and the widest decoration options. Choose 5-panel when your logo is large or 3D puff: the front is one continuous panel with no centre seam cutting through the artwork. Both carry the same MOQ of 200 pcs and the same $3.50–$7.00 FOB band.",
    },
    table: {
      caption: "Construction and commercial comparison",
      columns: [
        { key: "spec", label: "Specification" },
        { key: "five", label: "5-Panel" },
        { key: "six", label: "6-Panel" },
      ],
      rows: [
        {
          label: "Front construction",
          values: ["One continuous panel, no centre seam", "Two front panels split by a centre seam"],
        },
        {
          label: "Panel layout",
          values: ["1 front · 2 side · 2 back", "2 front · 2 side · 2 back"],
        },
        {
          label: "Usable logo width",
          values: [
            "Widest — artwork can run nearly edge to edge",
            "Constrained by the seam running down the middle",
          ],
        },
        {
          label: "3D puff embroidery",
          values: [
            "Ideal: no seam to interrupt raised stitching",
            "Works, but artwork must clear the centre seam",
          ],
        },
        {
          label: "Typical crown shape",
          values: ["Lower and flatter — A-frame / camper profile", "Rounder and taller — classic baseball profile"],
        },
        {
          label: "Structure",
          values: ["Usually unstructured or lightly structured", "Structured (buckram front) or unstructured"],
        },
        {
          label: "Common end uses",
          values: [
            "Streetwear, ski and camper, promotional",
            "Team sport, corporate uniform, retail basics",
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
      note: "Price band and MOQ reflect Baoding Junyang factory terms as of 2026; both constructions sit in the same band because they use comparable fabric and machine time. Final pricing depends on fabric, decoration count and order quantity.",
    },
    seam: {
      title: "How does the centre seam change my logo?",
      body: [
        "On a 6-panel cap the crown is built from two front panels joined by a seam that runs vertically down the middle of the forehead. Flat embroidery crosses it without any real problem. Raised 3D puff embroidery is different: the seam changes height by a millimetre or two, and foam-backed puff sitting across that ridge can look slightly stepped rather than level.",
        "A 5-panel cap removes the seam entirely. The front is a single piece of fabric, so a large or wide logo — a wordmark, a full-width graphic, a heavy 3D puff block — stays perfectly symmetrical and flat. This is the single biggest technical reason streetwear and skate brands default to 5-panel construction.",
        "Practical rule: if your artwork is wider than about 8 cm or uses 3D puff, shortlist 5-panel first. If it is a compact centred emblem and you want a traditional ball-cap silhouette, 6-panel gives you a broader choice of crown heights and closures.",
      ],
    },
    choose: {
      title: "Which one should your brand pick?",
      items: [
        {
          t: "Pick 5-panel if…",
          d: "your logo is wide, uses 3D puff, or you want a flatter streetwear / camper profile. Also the safer choice if you plan to run the same artwork across a cap and a beanie.",
        },
        {
          t: "Pick 6-panel if…",
          d: "you want the recognisable baseball-cap shape, need team-sport or corporate uniformity, or your logo is a compact centred mark where the seam causes no issues.",
        },
        {
          t: "Pick both if…",
          d: "you are building a range. Mixing constructions across one collection is common and does not change the MOQ structure — minimums apply per style and colour, not per construction type.",
        },
      ],
    },
    facts: {
      title: "Factory terms",
      cards: [
        { k: "200 pcs", v: "MOQ per style / colour" },
        { k: "7 days", v: "Physical sample lead time" },
        { k: "15–20 days", v: "Bulk production after sample approval" },
        { k: "In-House", v: "Quality control at each stage" },
      ],
      note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ Japanese Barudan embroidery machines and a 200-person production team.",
    },
    faq: {
      heading: "5-panel and 6-panel cap FAQ",
      items: [
        {
          q: "Is a 5-panel or 6-panel cap better for large 3D puff embroidery?",
          a: "5-panel. The front is one continuous panel, so raised 3D puff embroidery sits on an even surface. On a 6-panel cap a centre seam runs through the middle of the front; puff crossing that seam can look stepped. If your artwork is wider than roughly 8 cm and uses 3D puff, choose 5-panel.",
        },
        {
          q: "Which style sells better in 2026?",
          a: "It depends on the segment rather than one beating the other. 5-panel A-frame and camper shapes dominate streetwear, skate and outdoor lifestyle ranges. 6-panel remains the default for team sport, corporate uniform and general retail basics. Many brands now stock both and split the range by price tier.",
        },
        {
          q: "Can I order 5-panel and 6-panel caps in the same order?",
          a: "Yes. Minimums apply per style and colour, not per construction type, so a mixed order is standard. A typical starting order is 200 pcs of each construction in one colourway.",
        },
        {
          q: "Do 5-panel and 6-panel caps cost the same?",
          a: "They sit in the same $3.50–$7.00 FOB band. Construction alone rarely moves the price — fabric choice, the number of decoration positions (front, side, back, visor) and order quantity drive the final unit cost far more than panel count.",
        },
        {
          q: "Which one is better if I want a structured front?",
          a: "6-panel. Buckram-backed structured fronts are most commonly built on a 6-panel crown, giving the tall, firm front panel associated with classic baseball caps. 5-panel caps are usually made unstructured or only lightly structured, which is what creates their softer, flatter profile.",
        },
      ],
    },
    cta: {
      title: "Send your artwork — we will tell you which construction fits it",
      text: "We assess your logo, recommend the construction and crown profile, then quote within 12 hours. MOQ 200 pcs, physical samples in 7 days.",
      button: "Get Factory Quote",
    },
  },
  es: {
    hero: {
      crumb: "5 Paneles vs 6 Paneles",
      badge: "Comparativa de Gorras · Datos de Fábrica 2026",
      title: "5 Paneles vs",
      accent: "6 Paneles",
      subtitle:
        "Estas dos construcciones están detrás de casi cualquier programa de gorras personalizadas. La elección cambia la superficie útil para tu logo, tus opciones de decoración y cómo se percibe la gorra terminada.",
      quickAnswerLabel: "Respuesta corta",
      quickAnswer:
        "Elige 6 paneles para una forma estructurada y tradicional de gorra de béisbol, con más opciones de decoración. Elige 5 paneles si tu logo es grande o usa bordado 3D puff: el frente es un solo panel continuo, sin costura central que corte el diseño. Ambas tienen el mismo MOQ de 200 uds y la misma banda de $3.50–$7.00 FOB.",
    },
    table: {
      caption: "Comparativa de construcción y comercial",
      columns: [
        { key: "spec", label: "Especificación" },
        { key: "five", label: "5 Paneles" },
        { key: "six", label: "6 Paneles" },
      ],
      rows: [
        {
          label: "Construcción del frente",
          values: ["Un panel continuo, sin costura central", "Dos paneles frontales divididos por una costura central"],
        },
        {
          label: "Distribución de paneles",
          values: ["1 frente · 2 laterales · 2 atrás", "2 frente · 2 laterales · 2 atrás"],
        },
        {
          label: "Ancho útil del logo",
          values: [
            "El mayor: el diseño puede ir casi de borde a borde",
            "Limitado por la costura central",
          ],
        },
        {
          label: "Bordado 3D puff",
          values: [
            "Ideal: no hay costura que interrumpa el relieve",
            "Funciona, pero el diseño debe evitar la costura central",
          ],
        },
        {
          label: "Forma de la corona",
          values: ["Más baja y plana — perfil A-frame / camper", "Más redonda y alta — perfil clásico de béisbol"],
        },
        {
          label: "Estructura",
          values: ["Normalmente sin estructura o ligera", "Estructurada (frente con buckram) o sin estructura"],
        },
        {
          label: "Usos habituales",
          values: [
            "Streetwear, esquí y camper, promocional",
            "Deporte de equipo, uniforme corporativo, retail básico",
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
      note: "La banda de precio y el MOQ reflejan las condiciones de fábrica de Baoding Junyang en 2026; ambas construcciones comparten banda porque usan tela y tiempo de máquina comparables. El precio final depende de la tela, el número de decoraciones y la cantidad del pedido.",
    },
    seam: {
      title: "¿Cómo cambia la costura central mi logo?",
      body: [
        "En una gorra de 6 paneles, la corona se arma con dos paneles frontales unidos por una costura que corre verticalmente por el centro de la frente. El bordado plano la cruza sin problema real. El bordado 3D puff es distinto: la costura cambia de altura uno o dos milímetros, y el bordado en relieve sobre esa cresta puede verse escalonado en lugar de parejo.",
        "La gorra de 5 paneles elimina la costura por completo. El frente es una sola pieza de tela, así que un logo grande o ancho — un logotipo tipográfico, un gráfico a todo lo ancho, un bloque grueso de 3D puff — queda perfectamente simétrico y plano. Esta es la razón técnica principal por la que las marcas de streetwear y skate eligen la construcción de 5 paneles.",
        "Regla práctica: si tu diseño supera unos 8 cm de ancho o usa 3D puff, considera primero el 5 paneles. Si es un emblema compacto y centrado y buscas la silueta tradicional de gorra de béisbol, el 6 paneles te da más opciones de altura de corona y cierres.",
      ],
    },
    choose: {
      title: "¿Cuál debería elegir tu marca?",
      items: [
        {
          t: "Elige 5 paneles si…",
          d: "tu logo es ancho, usa 3D puff o buscas un perfil más plano de streetwear / camper. También es la opción más segura si planeas usar el mismo diseño en una gorra y en un gorro de punto.",
        },
        {
          t: "Elige 6 paneles si…",
          d: "quieres la forma reconocible de gorra de béisbol, necesitas uniformidad para deporte de equipo o corporativo, o tu logo es una marca centrada y compacta donde la costura no genera problemas.",
        },
        {
          t: "Elige ambas si…",
          d: "estás construyendo una colección. Combinar construcciones en una misma colección es habitual y no cambia la estructura de MOQ: los mínimos aplican por estilo y color, no por tipo de construcción.",
        },
      ],
    },
    facts: {
      title: "Condiciones de fábrica",
      cards: [
        { k: "200 uds", v: "MOQ por estilo / color" },
        { k: "7 días", v: "Plazo de muestra física" },
        { k: "15–20 días", v: "Producción en masa tras aprobar muestra" },
        { k: "Interno", v: "Control de calidad en cada etapa" },
      ],
      note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan y un equipo de producción de 200 personas.",
    },
    faq: {
      heading: "Preguntas frecuentes: gorras de 5 y 6 paneles",
      items: [
        {
          q: "¿Qué va mejor para bordado 3D puff grande, 5 o 6 paneles?",
          a: "5 paneles. El frente es un panel continuo, así que el bordado 3D puff en relieve asienta sobre una superficie pareja. En una gorra de 6 paneles hay una costura central en medio del frente; el puff que la cruza puede verse escalonado. Si tu diseño supera unos 8 cm de ancho y usa 3D puff, elige 5 paneles.",
        },
        {
          q: "¿Qué estilo vende más en 2026?",
          a: "Depende del segmento, más que de un ganador único. Las formas A-frame y camper de 5 paneles dominan streetwear, skate y lifestyle outdoor. El 6 paneles sigue siendo el estándar para deporte de equipo, uniforme corporativo y retail básico. Muchas marcas ahora manejan ambos y dividen la colección por rango de precio.",
        },
        {
          q: "¿Puedo pedir gorras de 5 y 6 paneles en el mismo pedido?",
          a: "Sí. Los mínimos aplican por estilo y color, no por tipo de construcción, así que un pedido mixto es habitual. Un pedido inicial típico es de 200 uds de cada construcción en un solo color.",
        },
        {
          q: "¿Cuestan lo mismo las gorras de 5 y 6 paneles?",
          a: "Están en la misma banda de $3.50–$7.00 FOB. La construcción por sí sola rara vez mueve el precio: la tela, el número de posiciones de decoración (frente, lateral, espalda, visera) y la cantidad del pedido influyen mucho más que el número de paneles.",
        },
        {
          q: "¿Cuál conviene si quiero el frente estructurado?",
          a: "6 paneles. Los frentes estructurados con buckram se construyen habitualmente sobre una corona de 6 paneles, dando ese panel frontal alto y firme asociado a las gorras de béisbol clásicas. Las de 5 paneles suelen hacerse sin estructura o con estructura ligera, y de ahí su perfil más blando y plano.",
        },
      ],
    },
    cta: {
      title: "Envíanos tu diseño y te diremos qué construcción le va mejor",
      text: "Evaluamos tu logo, recomendamos la construcción y el perfil de corona, y cotizamos en 12 horas. MOQ 200 uds, muestras físicas en 7 días.",
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
        ? "Gorras de 5 Paneles vs 6 Paneles: ¿Cuál Elegir para Tu Marca?"
        : "5-Panel vs 6-Panel Caps: Which Should Your Brand Choose?",
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
      "@id": `https://bdjunyang.com/${lang}/compare/5-panel-vs-6-panel-caps`,
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
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.seam.title}</h2>
          <div className="space-y-5">
            {c.seam.body.map((p, i) => (
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
