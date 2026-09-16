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
      crumb: "Cotton Twill vs Brushed Cotton vs Canvas",
      badge: "Headwear Comparison · Factory Data 2026",
      title: "Cotton Twill vs Brushed Cotton",
      accent: "vs Canvas",
      subtitle:
        "These three fabrics sit behind most of the custom cap market. They differ in how the crown holds its shape, how the cap feels on day one and how the finished product ages — which is what your customer actually notices.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "Cotton twill is the structured, retail-standard choice; brushed cotton is softer with a washed, vintage hand; canvas is the heaviest and most rugged. Twill suits corporate and team caps, brushed cotton suits streetwear and dad hats, canvas suits workwear and outdoor ranges. All three carry the same MOQ and price band.",
    },
    table: {
      caption: "Fabric and commercial comparison",
      columns: [
        { key: "spec", label: "Specification" },
        { key: "twill", label: "Cotton twill" },
        { key: "brushed", label: "Brushed cotton" },
        { key: "canvas", label: "Canvas" },
      ],
      rows: [
        {
          label: "Hand feel and appearance",
          values: [
            "Smooth and tightly woven with a light sheen; crisp and uniform across the panel",
            "Brushed surface: soft, matte and slightly fuzzy, with a worn-in look from day one",
            "Visible, coarser weave in a matte finish; becomes softer with every wash",
          ],
        },
        {
          label: "Weight and structure",
          values: [
            "Usually the reference weight for caps; holds a structured buckram front without extra help",
            "Usually the lightest and most relaxed of the three; drapes instead of standing up",
            "Usually the heaviest of the three; holds a firm crown shape on its own",
          ],
        },
        {
          label: "Breathability",
          values: [
            "Tight weave: moderate airflow, feels cooler than brushed cotton in summer",
            "Brushed fibres trap air, so it feels warmer and softer against the skin",
            "Thicker yarns keep some airflow, but the weight makes it the warmest of the three in direct sun",
          ],
        },
        {
          label: "Durability",
          values: [
            "Dense weave resists abrasion and keeps its shape through repeated wear",
            "Softer surface shows wear sooner, especially at friction points like the sweatband and visor edge",
            "The most abrasion-resistant of the three: it takes heavy use, washing and outdoor wear",
          ],
        },
        {
          label: "Dyeing and washed finishes",
          values: [
            "Takes solid, saturated colour cleanly, which keeps brand colours consistent",
            "Responds well to garment washing and enzyme washes for a faded, vintage effect",
            "Dye settles unevenly across the visible weave, which is what gives the natural, speckled workwear look",
          ],
        },
        {
          label: "Price position",
          values: [
            "Sits inside the $3.50 – $7.00 FOB band; the baseline fabric for most custom programs",
            "Usually quoted above a plain twill, because brushing and wash treatments add process steps",
            "Usually quoted above a plain twill of the same construction, because heavier fabric uses more material per cap",
          ],
        },
        {
          label: "Best cap styles",
          values: [
            "6-panel baseball, snapback, trucker front, corporate and team caps",
            "Dad hats, unstructured 5-panel, relaxed lifestyle and vintage shapes",
            "5-panel and 6-panel workwear, camper, outdoor and streetwear caps",
          ],
        },
        {
          label: "Decoration compatibility",
          values: [
            "Flat embroidery, 3D puff, patches and printing all sit well on the tight surface",
            "Flat embroidery and woven labels suit the soft nap; heavy 3D puff is less common on this base",
            "Handles bold flat embroidery, chenille and 3D puff, and hides small stitching irregularities",
          ],
        },
        {
          label: "How it ages",
          values: [
            "Holds colour and shape; keeps a crisp front for the life of the cap",
            "Fades pleasantly and gets softer with each wash, which is the point of the finish",
            "Softens with use and develops a worn-in patina while holding colour well",
          ],
        },
        {
          label: "MOQ and lead time (2026)",
          values: [
            "200 pcs per style / colour · samples 7 days · bulk 15–20 days",
            "200 pcs per style / colour · samples 7 days · bulk 15–20 days",
            "200 pcs per style / colour · samples 7 days · bulk 15–20 days",
          ],
        },
      ],
      note: "MOQ, sample lead time and price band are identical across all three fabrics under Baoding Junyang factory terms as of 2026. Where a fabric sits inside the $3.50 – $7.00 FOB band depends on fabric weight, the brushing or wash treatment and the decoration, so we quote per artwork rather than from a fixed table.",
    },
    vintage: {
      title: "Is brushed cotton or canvas better for a vintage, washed look?",
      body: [
        "Both can look vintage, but they get there in different ways. Brushed cotton is a napped fabric: the surface is brushed so the fibres lift, which produces the soft, faded, slightly fuzzy hand that reads as a well-worn dad hat. It responds well to garment washing and enzyme washes, and you can see the effect as soon as the cap comes out of the bag.",
        "Canvas is not brushed. Its character comes from the weave itself: from a distance it looks flat and technical, and up close you can see every yarn, which is what gives workwear and outdoor ranges their honest, utilitarian feel. Heavier washes soften it and lighten the colour, but the surface stays crisp rather than fuzzy.",
        "So the answer depends on your reference product. If it is a soft, faded cap that looks like it has been worn for years, brushed cotton is the closer match. If it is a structured, rugged cap that has to take abuse, canvas ages into its own look without pretending to be soft. Both can be ordered in washed colourways, and neither needs a different minimum: 200 pcs per style and colour either way.",
      ],
    },
    choose: {
      title: "Which fabric fits your brand positioning?",
      items: [
        {
          t: "Choose cotton twill if…",
          d: "you are building a corporate, team or retail basics program and need a crisp, consistent look with the widest decoration options. It is the safest fabric to scale across sizes, colourways and repeat orders.",
        },
        {
          t: "Choose brushed cotton if…",
          d: "your range is streetwear, lifestyle or vintage-inspired and the cap should feel soft and already broken in. Dad hats and unstructured 5-panel shapes are the natural fit for it.",
        },
        {
          t: "Choose canvas if…",
          d: "your product is workwear, outdoor or utility-led and has to survive real use. It holds a firm crown, hides wear and gives a heavier, more premium hand than twill.",
        },
      ],
    },
    related: {
      title: "Where can you source these fabrics on finished caps?",
      intro:
        "Fabric is one line on a spec sheet. These pages cover the construction behind it: which shape suits each fabric and how a full order is run.",
      links: [
        {
          href: "/custom-dad-hats-manufacturer",
          label: "Custom dad hats",
          d: "Soft, unstructured shapes in brushed cotton and washed finishes.",
        },
        {
          href: "/custom-5-panel-caps-manufacturer",
          label: "Custom 5-panel caps",
          d: "Flat fronts that carry a large logo on canvas or twill.",
        },
        {
          href: "/wholesale-blank-caps-supplier",
          label: "Wholesale blank caps",
          d: "Stock caps in the same fabrics for print or embroidery later.",
        },
        {
          href: "/guide",
          label: "Headwear buyer’s guide",
          d: "Fabric weights, crowns, closures and decoration methods in one place.",
        },
      ],
    },
    facts: {
      title: "Factory terms",
      cards: [
        { k: "200 pcs", v: "MOQ per style / colour" },
        { k: "7 days", v: "Physical sample lead time" },
        { k: "15–20 days", v: "Bulk production after sample approval" },
        { k: "100% Inspected", v: "Piece-by-piece inspection, not sampling" },
      ],
      note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ Japanese Barudan embroidery machines and a 200-person production team. The factory is SGS verified, ships 5M+ caps a year, and sends 70% of that output to North America.",
    },
    faq: {
      heading: "Cotton twill, brushed cotton and canvas FAQ",
      items: [
        {
          q: "Which fabric should I choose for my custom caps?",
          a: "Choose cotton twill for corporate, team and retail basics programs that need a crisp, uniform look. Choose brushed cotton when the cap should feel soft and faded, as in streetwear and dad hats. Choose canvas when the cap has to survive heavy use, as in workwear and outdoor ranges. All three run at the same MOQ of 200 pcs per style and colour.",
        },
        {
          q: "Is brushed cotton or canvas more expensive?",
          a: "Both are usually quoted above a plain cotton twill, for different reasons: brushing and washing add process steps, while canvas uses more fabric per cap because it is heavier. Exact pricing depends on fabric weight, the wash treatment and the decoration, so we quote from your artwork rather than from a fixed table.",
        },
        {
          q: "Which fabric is best for embroidery and 3D puff?",
          a: "Cotton twill gives the crispest stitch definition and is the safest base for fine detail and for 3D puff. Brushed cotton suits flat embroidery and woven labels, since the soft nap can slightly soften very fine lettering. Canvas carries bold flat embroidery, chenille and 3D puff well, and its heavier body supports raised decoration.",
        },
        {
          q: "Which fabric holds its shape longest?",
          a: "Canvas, because it is the heaviest of the three, followed by cotton twill, which stays crisp behind a buckram-backed front. Brushed cotton is the most relaxed and drapes rather than standing up — that is a deliberate part of its look rather than a defect, so it suits unstructured shapes.",
        },
        {
          q: "Can I order all three fabrics in one order?",
          a: "Yes. Minimums apply per style and colour, not per fabric, so a mixed order is standard: a typical first order is 200 pcs of each fabric in one colourway. All three run on the same production line, with physical samples in 7 days and bulk in 15–20 days.",
        },
      ],
    },
    cta: {
      title: "Send your logo — we will advise on fabric and quote it",
      text: "Tell us the cap style and the feel you want, and we will recommend cotton twill, brushed cotton or canvas and quote within 12 hours. MOQ 200 pcs, physical samples in 7 days.",
      button: "Get Factory Quote",
    },
  },
  es: {
    hero: {
      crumb: "Sarga de Algodón vs Algodón Cepillado vs Canvas",
      badge: "Comparativa de Gorras · Datos de Fábrica 2026",
      title: "Sarga de Algodón vs Algodón Cepillado",
      accent: "vs Canvas",
      subtitle:
        "Estas tres telas están detrás de casi todo el mercado de gorras personalizadas. Se diferencian en cómo la corona mantiene la forma, cómo se siente la gorra el primer día y cómo envejece el producto terminado, que es lo que tu cliente sí nota.",
      quickAnswerLabel: "Respuesta corta",
      quickAnswer:
        "La sarga de algodón es la opción estructurada y estándar en retail; el algodón cepillado es más suave y con un tacto lavado y vintage; el canvas es el más pesado y resistente. La sarga encaja en corporativo y deporte de equipo, el cepillado en streetwear y dad hats, y el canvas en workwear y outdoor. Las tres comparten MOQ y banda de precio.",
    },
    table: {
      caption: "Comparativa de tela y de condiciones comerciales",
      columns: [
        { key: "spec", label: "Especificación" },
        { key: "twill", label: "Sarga de algodón" },
        { key: "brushed", label: "Algodón cepillado" },
        { key: "canvas", label: "Canvas" },
      ],
      rows: [
        {
          label: "Tacto y aspecto",
          values: [
            "Tejido denso y liso con un brillo leve; se ve nítido y uniforme en todo el panel",
            "Superficie cepillada: suave, mate y algo afelpada, con aspecto de ya usada desde el primer día",
            "Tejido más grueso y visible, de acabado mate; se ablanda con cada lavado",
          ],
        },
        {
          label: "Peso y estructura",
          values: [
            "Habitualmente el peso de referencia en gorras; sostiene un frente estructurado con buckram sin ayuda extra",
            "Suele ser la más ligera y relajada de las tres; cae en lugar de mantenerse erguida",
            "Suele ser la más pesada de las tres; mantiene una corona firme por sí sola",
          ],
        },
        {
          label: "Transpiración",
          values: [
            "Tejido cerrado: ventilación moderada, se siente más fresca que el cepillado en verano",
            "Las fibras cepilladas retienen aire, así que se siente más cálida y suave sobre la piel",
            "Los hilos más gruesos dejan pasar algo de aire, pero el peso la hace la más cálida de las tres al sol",
          ],
        },
        {
          label: "Durabilidad",
          values: [
            "El tejido denso resiste la abrasión y mantiene la forma con el uso repetido",
            "La superficie suave muestra el desgaste antes, sobre todo en los puntos de roce como la banda interior y el borde de la visera",
            "Es la más resistente a la abrasión: aguanta uso intenso, lavados y exterior",
          ],
        },
        {
          label: "Teñido y acabados lavados",
          values: [
            "Toma el color sólido y saturado con limpieza, lo que mantiene los colores de marca consistentes",
            "Responde muy bien al lavado de prenda y a los lavados enzimáticos para un efecto desteñido y vintage",
            "El tinte se asienta de forma irregular sobre el tejido visible, y de ahí el aspecto natural y jaspeado del workwear",
          ],
        },
        {
          label: "Posición de precio",
          values: [
            "Dentro de la banda de $3.50 – $7.00 FOB; es la tela base de la mayoría de los programas personalizados",
            "Suele cotizarse por encima de una sarga lisa, porque el cepillado y los lavados añaden pasos de proceso",
            "Suele cotizarse por encima de una sarga lisa de la misma construcción, porque una tela más pesada usa más material por gorra",
          ],
        },
        {
          label: "Estilos de gorra ideales",
          values: [
            "Gorra de béisbol de 6 paneles, snapback, frente de trucker, corporativa y de equipo",
            "Dad hats, 5 paneles sin estructura, formas lifestyle y vintage",
            "5 y 6 paneles de workwear, camper, outdoor y streetwear",
          ],
        },
        {
          label: "Compatibilidad de decoración",
          values: [
            "Bordado plano, 3D puff, parches y estampado asientan bien sobre la superficie cerrada",
            "El bordado plano y las etiquetas tejidas van bien con la superficie afelpada; el 3D puff grueso es menos habitual aquí",
            "Admite bordado plano macizo, chenille y 3D puff, y disimula pequeñas irregularidades de bordado",
          ],
        },
        {
          label: "Envejecimiento",
          values: [
            "Mantiene el color y la forma; el frente se conserva nítido durante toda la vida de la gorra",
            "Se destiñe de forma agradable y se ablanda con cada lavado, que es justo el objetivo del acabado",
            "Se ablanda con el uso y gana una pátina de desgaste sin perder el color",
          ],
        },
        {
          label: "MOQ y plazos (2026)",
          values: [
            "200 uds por estilo / color · muestras 7 días · producción 15–20 días",
            "200 uds por estilo / color · muestras 7 días · producción 15–20 días",
            "200 uds por estilo / color · muestras 7 días · producción 15–20 días",
          ],
        },
      ],
      note: "El MOQ, el plazo de muestra y la banda de precio son idénticos en las tres telas según las condiciones de fábrica de Baoding Junyang en 2026. El punto dentro de la banda de $3.50 – $7.00 FOB depende del peso de la tela, del tratamiento de cepillado o lavado y de la decoración, así que cotizamos por diseño y no con una tabla fija.",
    },
    vintage: {
      title: "¿Qué va mejor para un look vintage lavado, el algodón cepillado o el canvas?",
      body: [
        "Las dos pueden verse vintage, pero llegan ahí de forma distinta. El algodón cepillado es una tela perchada: la superficie se cepilla para levantar las fibras, y eso produce el tacto suave, desteñido y algo afelpado que se asocia a un dad hat muy usado. Responde muy bien al lavado de prenda y a los lavados enzimáticos, y el efecto se ve desde que la gorra sale de la bolsa.",
        "El canvas no se cepilla. Su carácter viene del propio tejido: de lejos se ve liso y técnico, y de cerca se distinguen todos los hilos, que es lo que da a las líneas de workwear y outdoor ese aire honesto y utilitario. Los lavados más fuertes lo ablandan y aclaran el color, pero la superficie sigue nítida en lugar de afelpada.",
        "Así que la respuesta depende de tu producto de referencia. Si es una gorra suave y desteñida que parece usada desde hace años, el algodón cepillado es el más cercano. Si es una gorra estructurada y resistente que tiene que aguantar maltrato, el canvas envejece con su propio carácter sin pretender ser suave. Ambas pueden pedirse en colores lavados y ninguna cambia el mínimo: 200 uds por estilo y color en los dos casos.",
      ],
    },
    choose: {
      title: "¿Qué tela encaja con el posicionamiento de tu marca?",
      items: [
        {
          t: "Elige sarga de algodón si…",
          d: "estás armando un programa corporativo, de equipo o de básicos de retail y necesitas un look nítido y consistente con el mayor número de opciones de decoración. Es la tela más segura para escalar en tallas, colores y pedidos repetidos.",
        },
        {
          t: "Elige algodón cepillado si…",
          d: "tu línea es streetwear, lifestyle o de inspiración vintage y la gorra debe sentirse suave y ya domada. Los dad hats y las formas de 5 paneles sin estructura son su encaje natural.",
        },
        {
          t: "Elige canvas si…",
          d: "tu producto es workwear, outdoor o de uso utilitario y tiene que aguantar uso real. Mantiene una corona firme, disimula el desgaste y ofrece un tacto más pesado y premium que la sarga.",
        },
      ],
    },
    related: {
      title: "¿Dónde puedes conseguir estas telas en gorras terminadas?",
      intro:
        "La tela es una línea en la ficha técnica. Estas páginas cubren la construcción que hay detrás: qué forma encaja con cada tela y cómo se gestiona un pedido completo.",
      links: [
        {
          href: "/custom-dad-hats-manufacturer",
          label: "Gorras dad hat personalizadas",
          d: "Formas suaves y sin estructura en algodón cepillado y acabados lavados.",
        },
        {
          href: "/custom-5-panel-caps-manufacturer",
          label: "Gorras de 5 paneles personalizadas",
          d: "Frentes planos que llevan un logo grande en canvas o sarga.",
        },
        {
          href: "/wholesale-blank-caps-supplier",
          label: "Gorras en blanco al por mayor",
          d: "Gorras de stock en las mismas telas, para estampar o bordar después.",
        },
        {
          href: "/guide",
          label: "Guía del comprador de gorras",
          d: "Pesos de tela, coronas, cierres y métodos de decoración en un solo lugar.",
        },
      ],
    },
    facts: {
      title: "Condiciones de fábrica",
      cards: [
        { k: "200 uds", v: "MOQ por estilo / color" },
        { k: "7 días", v: "Plazo de muestra física" },
        { k: "15–20 días", v: "Producción en masa tras aprobar muestra" },
        { k: "100% Inspeccionado", v: "Inspección pieza por pieza, sin muestreo" },
      ],
      note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan y un equipo de producción de 200 personas. La fábrica está verificada por SGS, produce más de 5 millones de gorras al año y envía el 70% de esa producción a Norteamérica.",
    },
    faq: {
      heading: "Preguntas frecuentes: sarga de algodón, algodón cepillado y canvas",
      items: [
        {
          q: "¿Qué tela debería elegir para mis gorras personalizadas?",
          a: "Elige sarga de algodón para programas corporativos, de equipo y de básicos de retail que necesitan un look nítido y uniforme. Elige algodón cepillado cuando la gorra deba sentirse suave y desteñida, como en streetwear y dad hats. Elige canvas cuando tenga que aguantar uso intenso, como en workwear y outdoor. Las tres tienen el mismo MOQ de 200 uds por estilo y color.",
        },
        {
          q: "¿Es más caro el algodón cepillado o el canvas?",
          a: "Los dos suelen cotizarse por encima de una sarga de algodón lisa, por razones distintas: el cepillado y los lavados añaden pasos de proceso, y el canvas usa más tela por gorra porque es más pesado. El precio exacto depende del peso de la tela, del tratamiento de lavado y de la decoración, así que cotizamos desde tu diseño y no con una tabla fija.",
        },
        {
          q: "¿Qué tela va mejor para bordado y para 3D puff?",
          a: "La sarga de algodón da la definición de puntada más nítida y es la base más segura para el detalle fino y para el 3D puff. El algodón cepillado encaja con bordado plano y etiquetas tejidas, ya que la superficie afelpada puede suavizar un poco las letras muy finas. El canvas admite bien bordado plano macizo, chenille y 3D puff, y su cuerpo más pesado sostiene la decoración en relieve.",
        },
        {
          q: "¿Qué tela mantiene la forma por más tiempo?",
          a: "El canvas, porque es la más pesada de las tres; después la sarga de algodón, que se mantiene nítida con un frente reforzado con buckram. El algodón cepillado es el más relajado y cae en lugar de mantenerse erguido: eso es parte intencional de su look y no un defecto, así que va mejor en formas sin estructura.",
        },
        {
          q: "¿Puedo pedir las tres telas en un mismo pedido?",
          a: "Sí. Los mínimos aplican por estilo y color, no por tela, así que un pedido mixto es habitual: un primer pedido típico es de 200 uds de cada tela en un solo color. Las tres salen de la misma línea de producción, con muestras físicas en 7 días y producción en 15–20 días.",
        },
      ],
    },
    cta: {
      title: "Envíanos tu logo y te asesoramos sobre la tela con su cotización",
      text: "Cuéntanos el estilo de gorra y el tacto que buscas, y te recomendamos sarga de algodón, algodón cepillado o canvas, con cotización en 12 horas. MOQ 200 uds, muestras físicas en 7 días.",
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
        ? "Sarga de Algodón vs Algodón Cepillado vs Canvas: ¿Cuál Elegir para Tus Gorras?"
        : "Cotton Twill vs Brushed Cotton vs Canvas: Which Fabric Should Your Caps Use?",
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
      "@id": `https://bdjunyang.com/${lang}/compare/cotton-twill-vs-brushed-cotton-vs-canvas`,
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
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.vintage.title}</h2>
          <div className="space-y-5">
            {c.vintage.body.map((p, i) => (
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
