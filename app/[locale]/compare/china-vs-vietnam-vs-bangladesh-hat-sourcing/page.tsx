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
      crumb: "China vs Vietnam vs Bangladesh",
      badge: "Sourcing Comparison · Factory Data 2026",
      title: "China vs Vietnam vs",
      accent: "Bangladesh",
      subtitle:
        "Where a cap is made decides how easily you can change a logo, how quickly a sample arrives and how much of the range you can build in one place. Here is a neutral look at the three most common headwear sourcing countries.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "China is strongest in supply-chain depth and craft range: fabric, embroidery and hardware sit in one industrial region, which supports fast sampling and complex decoration. Vietnam is often chosen for mid-size programmes and a second production base, Bangladesh for very large cut-and-sew volumes. MOQ, lead time and communication matter more than the flag on the label.",
    },
    table: {
      caption: "Headwear sourcing comparison — capability and programme fit",
      columns: [
        { key: "spec", label: "Decision factor" },
        { key: "cn", label: "China" },
        { key: "vn", label: "Vietnam" },
        { key: "bd", label: "Bangladesh" },
      ],
      rows: [
        {
          label: "Supply chain depth",
          values: [
            "Deepest: fabric mills, embroidery thread, buckram, hardware and finishing sit inside the same industrial region",
            "A growing supplier base with good access to fabric and trims; headwear-specific depth varies from factory to factory",
            "Strong in cut-and-sew apparel; headwear trims and embroidery are organised factory by factory",
          ],
        },
        {
          label: "Craft and decoration range",
          values: [
            "Widest: 3D puff, flat embroidery, appliqué, leather patches, sublimation and washed finishes are all routine",
            "Solid embroidery and print capability; complex multi-technique builds depend on the individual factory",
            "Most often used for straightforward embroidery and print within volume programmes",
          ],
        },
        {
          label: "MOQ flexibility",
          values: [
            "Our factory term is 200 pcs per style / colour, which keeps small trial runs viable",
            "Minimums are set by each factory — ask for the per-style and per-colour rules before you plan the range",
            "Volume-led factories usually expect larger programme sizes; confirm the minimum in writing",
          ],
        },
        {
          label: "Sampling speed",
          values: [
            "Physical samples in 7 days at our factory, because fabric, embroidery and assembly are all local",
            "Depends on whether embroidery and trims are handled in-house; external sourcing adds rounds to the sample stage",
            "Depends on the factory sampling line and on component lead time",
          ],
        },
        {
          label: "Communication and response",
          values: [
            "Direct contact with the factory; artwork feedback and quotes in English",
            "Responsive teams are common; the depth of technical feedback depends on the factory",
            "Established export documentation; expect the same correspondence style as with any volume exporter",
          ],
        },
        {
          label: "Delivery stability",
          values: [
            "Bulk production runs 15–20 days after sample approval, booked against your approval date",
            "Lead time follows the factory production calendar and its peak seasons",
            "Lead time follows the factory calendar; large programmes are usually planned further ahead",
          ],
        },
        {
          label: "Logistics",
          values: [
            "Inland factory (Baoding, Hebei): truck to port, then sea or air; 70% of our output ships to North America and 25% to Western Europe",
            "Coastal manufacturing hubs with direct sea lanes to the US and EU",
            "Coastal manufacturing hubs with direct sea lanes to the EU and US",
          ],
        },
        {
          label: "Best-fit order size",
          values: [
            "Small to mid-size programmes, multi-style ranges and frequent artwork changes",
            "Mid-size programmes, and brands adding a second production base",
            "Large, high-volume basic programmes where run length matters most",
          ],
        },
        {
          label: "Factory price band (2026)",
          values: [
            "$3.50 – $7.00 FOB (our own terms)",
            "Quoted by each supplier — request a quote for your brief",
            "Quoted by each supplier — request a quote for your brief",
          ],
        },
      ],
      note: "Baoding Junyang is a Chinese factory, so the China column reflects our own verified terms. Figures for Vietnam and Bangladesh are deliberately left open: minimums, lead times and costs are set factory by factory, and those numbers should come from the suppliers you are actually evaluating. Compare like for like — same artwork, same decoration count, same quantity, same fabric.",
    },
    country: {
      title: "Which country should you source custom hats from?",
      body: [
        "There is no single best sourcing country. The right answer depends on three things: how large your programme is, how complex the decoration is, and how often you plan to change the artwork. Those three questions narrow the field far faster than a country-level comparison does.",
        "China is strongest in supply-chain depth. Fabric, embroidery thread, buckram, hardware and finishing all sit inside the same industrial region, which is why a physical sample can be produced in 7 days and why multi-technique decoration — 3D puff on one panel, a leather patch on another, a woven label at the back — is routine rather than a special project. It also keeps small programmes viable, because our minimum is 200 pcs per style and colour.",
        "Vietnam is often chosen when a brand wants a second production base, or when headwear is added to a programme that is already apparel-led. Factories there work to their own minimums and calendars, so the practical step is to send the same brief to two or three suppliers and compare the responses side by side.",
        "Bangladesh is commonly used for large, high-volume cut-and-sew programmes where run length is the priority rather than decoration complexity. As with Vietnam, minimums are set by each factory and are best confirmed in writing before you plan a range.",
        "Across all three, the factors that actually decide quality and deadlines are factory-level rather than country-level: does the factory embroider in-house, does it send a physical sample before bulk, is the minimum counted per style, per colour or per order, and who inspects the goods before they ship. Ask every supplier the same four questions and the comparison becomes concrete.",
      ],
    },
    pricing: {
      title: "Does the sourcing country change your MOQ or price band?",
      body: [
        "Country is not the main price driver. Within headwear, unit cost is moved most by fabric, the number of decoration positions, the structure of the crown and the order quantity. Two factories in the same country can quote differently for the same cap, and two factories in different countries can land in a similar range when the brief is identical.",
        "For transparency about our own position: Baoding Junyang is a Chinese manufacturer with an MOQ of 200 pcs per style and colour, a factory price band of $3.50–$7.00 FOB, physical samples in 7 days and bulk production in 15–20 days after sample approval. Those are our terms, not a claim about any other country.",
        "What does change between suppliers is the shape of the minimum. A minimum counted per style and colour lets you build several colourways without multiplying the order; a minimum counted per order with a high volume requirement pushes you towards fewer, larger styles. That structure affects range planning far more than the headline unit price.",
        "The practical approach for a first order: send one brief — artwork, fabric, quantity, target market, delivery window — to each supplier you are considering, ask each of them for a physical sample, and compare the quote together with the sample. Request a quote and we will price the headwear part of your programme.",
      ],
    },
    related: {
      title: "Where can you see these sourcing options in practice?",
      intro:
        "These pages show how a headwear programme is scoped, sampled and produced with a single factory.",
      links: [
        {
          href: "/oem-hat-manufacturer",
          label: "OEM hat manufacturing",
          d: "Full OEM programme: tech pack, sampling, bulk production and QC.",
        },
        {
          href: "/bulk-custom-hats-manufacturer",
          label: "Bulk custom hats",
          d: "How minimums, capacity and volume pricing are structured.",
        },
        {
          href: "/private-label-hat-manufacturer",
          label: "Private label caps",
          d: "Your branding, labels and packaging on our construction.",
        },
        {
          href: "/guide",
          label: "Custom hat buyer's guide",
          d: "Fabrics, decoration, sizing and lead times explained.",
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
      note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ Japanese Barudan embroidery machines and a 200-person production team, with capacity above 5M caps per year and SGS verification.",
    },
    faq: {
      heading: "Sourcing custom hats: common buyer questions",
      items: [
        {
          q: "Should I source custom hats from China, Vietnam or Bangladesh?",
          a: "It depends on your programme rather than on one country being better. China is strongest for supply-chain depth, fast sampling and complex decoration, which suits small to mid-size programmes and frequent artwork changes. Vietnam is often chosen for mid-size programmes or a second production base, and Bangladesh for very large cut-and-sew volumes. Send one identical brief to each supplier you consider and compare the sample as well as the price.",
        },
        {
          q: "Is China suitable for small custom hat orders?",
          a: "Yes. Our minimum is 200 pcs per style and colour and physical samples are produced in 7 days, so a first order can stay small. Bulk production runs 15–20 days after sample approval. A trial order before scaling to a full range is common.",
        },
        {
          q: "How long does production take from a Chinese hat factory?",
          a: "At our factory: 7 days for a physical sample and 15–20 days for bulk production after the sample is approved. Total door-to-door time then depends on the shipping method and the destination lane, so ask for a transit option that matches your launch date.",
        },
        {
          q: "How do I compare quotes from different countries fairly?",
          a: "Use the same brief for every supplier: same artwork file, same decoration positions, same fabric, same quantity, same delivery window. Then check whether trim, labels, packaging and inspection are included, whether the price is quoted FOB or delivered, and whether a physical sample is part of the process. Quotes built on different briefs cannot be compared.",
        },
        {
          q: "What if I want to split production across countries?",
          a: "Brands do this to spread risk or to serve different price tiers. Keep artwork as vector files with defined colour references so the specification is portable, and keep one factory responsible for the master sample. We are glad to quote and produce the headwear part of a multi-country plan.",
        },
      ],
    },
    cta: {
      title: "Send your brief — we will quote the headwear part",
      text: "Send artwork, quantity, fabric and target market and we will come back with a quote, a sampling plan and the production calendar. MOQ 200 pcs, physical samples in 7 days.",
      button: "Get Factory Quote",
    },
  },
  es: {
    hero: {
      crumb: "China vs Vietnam vs Bangladés",
      badge: "Comparativa de Abastecimiento · Datos de Fábrica 2026",
      title: "China vs Vietnam vs",
      accent: "Bangladés",
      subtitle:
        "El país donde se fabrica una gorra define con qué facilidad cambias un logo, en cuánto tiempo llega una muestra y cuánta colección puedes construir en un solo lugar. Aquí tienes una comparación neutral de los tres países de abastecimiento más habituales.",
      quickAnswerLabel: "Respuesta corta",
      quickAnswer:
        "China destaca en profundidad de cadena de suministro y variedad de acabados: tela, bordado y herrajes están en la misma región industrial, lo que permite muestras rápidas y decoraciones complejas. Vietnam suele elegirse para programas medianos o una segunda base de producción, y Bangladés para volúmenes muy grandes de confección. El MOQ, el plazo y la comunicación pesan más que la bandera en la etiqueta.",
    },
    table: {
      caption: "Comparativa de abastecimiento de gorras: capacidad y encaje del programa",
      columns: [
        { key: "spec", label: "Factor de decisión" },
        { key: "cn", label: "China" },
        { key: "vn", label: "Vietnam" },
        { key: "bd", label: "Bangladés" },
      ],
      rows: [
        {
          label: "Profundidad de la cadena de suministro",
          values: [
            "La mayor: telares, hilo de bordado, buckram, herrajes y acabados están en la misma región industrial",
            "Base de proveedores en crecimiento con buen acceso a tela y avíos; la profundidad en gorras varía según la fábrica",
            "Sólido en confección de prendas; los avíos y el bordado para gorras se organizan fábrica por fábrica",
          ],
        },
        {
          label: "Variedad de oficio y decoración",
          values: [
            "La más amplia: 3D puff, bordado plano, appliqué, parches de cuero, sublimación y acabados lavados son rutina",
            "Buena capacidad de bordado e impresión; las construcciones con varias técnicas dependen de cada fábrica",
            "Se usa sobre todo para bordado e impresión directos dentro de programas de volumen",
          ],
        },
        {
          label: "Flexibilidad de MOQ",
          values: [
            "Nuestra condición es 200 uds por estilo / color, lo que mantiene viables las pruebas pequeñas",
            "Los mínimos los fija cada fábrica: pide las reglas por estilo y por color antes de planificar la colección",
            "Las fábricas orientadas a volumen suelen esperar programas más grandes; confirma el mínimo por escrito",
          ],
        },
        {
          label: "Velocidad de muestreo",
          values: [
            "Muestra física en 7 días en nuestra fábrica, porque tela, bordado y ensamble son locales",
            "Depende de si el bordado y los avíos son internos; el suministro externo añade rondas al muestreo",
            "Depende de la línea de muestras de la fábrica y del plazo de los componentes",
          ],
        },
        {
          label: "Comunicación y respuesta",
          values: [
            "Contacto directo con la fábrica; comentarios de arte y cotizaciones en inglés",
            "Es habitual encontrar equipos receptivos; la profundidad del feedback técnico depende de la fábrica",
            "Documentación de exportación consolidada; el estilo de comunicación es el de cualquier exportador de volumen",
          ],
        },
        {
          label: "Estabilidad de entrega",
          values: [
            "La producción en masa tarda 15–20 días tras aprobar la muestra y se reserva contra tu fecha de aprobación",
            "El plazo sigue el calendario de producción de la fábrica y sus temporadas altas",
            "El plazo sigue el calendario de la fábrica; los programas grandes se planifican con más antelación",
          ],
        },
        {
          label: "Logística",
          values: [
            "Fábrica en el interior (Baoding, Hebei): camión al puerto y luego mar o aire; el 70% de nuestra producción va a Norteamérica y el 25% a Europa Occidental",
            "Hubs costeros con rutas marítimas directas a EE. UU. y la UE",
            "Hubs costeros con rutas marítimas directas a la UE y EE. UU.",
          ],
        },
        {
          label: "Tamaño de pedido ideal",
          values: [
            "Programas pequeños y medianos, colecciones con varios estilos y cambios de diseño frecuentes",
            "Programas medianos y marcas que añaden una segunda base de producción",
            "Programas grandes de básicos y alto volumen, donde manda la longitud de la tirada",
          ],
        },
        {
          label: "Banda de precio de fábrica (2026)",
          values: [
            "$3.50 – $7.00 FOB (nuestras condiciones)",
            "Cotizado por cada proveedor — solicita cotización con tu brief",
            "Cotizado por cada proveedor — solicita cotización con tu brief",
          ],
        },
      ],
      note: "Baoding Junyang es una fábrica china, así que la columna de China refleja nuestras propias condiciones verificadas. Los datos de Vietnam y Bangladés se dejan deliberadamente abiertos: los mínimos, plazos y costos los fija cada fábrica, y esas cifras deben venir de los proveedores que realmente estés evaluando. Compara en igualdad de condiciones: mismo diseño, mismas decoraciones, misma cantidad y misma tela.",
    },
    country: {
      title: "¿En qué país debería fabricar tus gorras personalizadas?",
      body: [
        "No existe un único mejor país de abastecimiento. La respuesta correcta depende de tres cosas: el tamaño de tu programa, la complejidad de la decoración y la frecuencia con la que piensas cambiar el diseño. Esas tres preguntas acotan el campo mucho más rápido que una comparación entre países.",
        "China destaca en profundidad de cadena de suministro. Tela, hilo de bordado, buckram, herrajes y acabados están en la misma región industrial, y por eso una muestra física se produce en 7 días y la decoración con varias técnicas — 3D puff en un panel, parche de cuero en otro, etiqueta tejida atrás — es rutina y no un proyecto especial. También mantiene viables los programas pequeños, porque nuestro mínimo es de 200 uds por estilo y color.",
        "Vietnam suele elegirse cuando una marca quiere una segunda base de producción, o cuando las gorras se suman a un programa ya liderado por prendas de vestir. Las fábricas allí trabajan con sus propios mínimos y calendarios, así que el paso práctico es enviar el mismo brief a dos o tres proveedores y comparar las respuestas en paralelo.",
        "Bangladés se usa con frecuencia para programas grandes de confección y alto volumen, donde la prioridad es la longitud de la tirada más que la complejidad de la decoración. Igual que en Vietnam, los mínimos los fija cada fábrica y conviene confirmarlos por escrito antes de planificar la colección.",
        "En los tres casos, lo que realmente decide la calidad y los plazos está a nivel de fábrica, no de país: si la fábrica borda internamente, si envía una muestra física antes de la producción en masa, si el mínimo se cuenta por estilo, por color o por pedido, y quién inspecciona la mercancía antes de embarcar. Haz las mismas cuatro preguntas a cada proveedor y la comparación se vuelve concreta.",
      ],
    },
    pricing: {
      title: "¿El país de origen cambia tu MOQ o tu banda de precio?",
      body: [
        "El país no es el principal factor de precio. En gorras, el costo unitario lo mueven sobre todo la tela, el número de posiciones de decoración, la estructura de la corona y la cantidad del pedido. Dos fábricas del mismo país pueden cotizar distinto la misma gorra, y dos fábricas de países distintos pueden caer en un rango parecido si el brief es idéntico.",
        "Para ser transparentes con nuestra propia posición: Baoding Junyang es un fabricante chino con un MOQ de 200 uds por estilo y color, una banda de precio de fábrica de $3.50–$7.00 FOB, muestras físicas en 7 días y producción en masa de 15–20 días tras aprobar la muestra. Son nuestras condiciones, no una afirmación sobre ningún otro país.",
        "Lo que sí cambia entre proveedores es la forma del mínimo. Un mínimo por estilo y color te permite construir varios colores sin multiplicar el pedido; un mínimo por pedido con volumen alto te empuja hacia menos estilos y más grandes. Esa estructura afecta la planificación de la colección mucho más que el precio unitario.",
        "El enfoque práctico para un primer pedido: envía un único brief — diseño, tela, cantidad, mercado objetivo y ventana de entrega — a cada proveedor que estés considerando, pide a cada uno una muestra física y compara la cotización junto con la muestra. Solicita una cotización y te cotizamos la parte de gorras de tu programa.",
      ],
    },
    related: {
      title: "¿Dónde puedes ver estas opciones de abastecimiento en la práctica?",
      intro:
        "Estas páginas muestran cómo se define, se muestrea y se produce un programa de gorras con una sola fábrica.",
      links: [
        {
          href: "/oem-hat-manufacturer",
          label: "Fabricación OEM de gorras",
          d: "Programa OEM completo: tech pack, muestreo, producción en masa y control de calidad.",
        },
        {
          href: "/bulk-custom-hats-manufacturer",
          label: "Gorras personalizadas al por mayor",
          d: "Cómo se estructuran los mínimos, la capacidad y el precio por volumen.",
        },
        {
          href: "/private-label-hat-manufacturer",
          label: "Gorras marca privada",
          d: "Tu marca, etiquetas y empaque sobre nuestra construcción.",
        },
        {
          href: "/guide",
          label: "Guía del comprador de gorras",
          d: "Telas, decoración, tallas y plazos explicados.",
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
      note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan, un equipo de producción de 200 personas, capacidad superior a 5 millones de gorras al año y verificación SGS.",
    },
    faq: {
      heading: "Abastecimiento de gorras: preguntas frecuentes de compradores",
      items: [
        {
          q: "¿Debo fabricar mis gorras personalizadas en China, Vietnam o Bangladés?",
          a: "Depende de tu programa, más que de que un país sea mejor. China destaca en profundidad de cadena de suministro, muestreo rápido y decoración compleja, lo que encaja con programas pequeños y medianos y con cambios de diseño frecuentes. Vietnam se elige a menudo para programas medianos o una segunda base de producción, y Bangladés para volúmenes muy grandes de confección. Envía un brief idéntico a cada proveedor y compara la muestra además del precio.",
        },
        {
          q: "¿China sirve para pedidos pequeños de gorras personalizadas?",
          a: "Sí. Nuestro mínimo es de 200 uds por estilo y color y las muestras físicas se producen en 7 días, así que un primer pedido puede ser pequeño. La producción en masa tarda 15–20 días tras aprobar la muestra. Es habitual hacer un pedido de prueba antes de escalar a una colección completa.",
        },
        {
          q: "¿Cuánto tarda la producción en una fábrica china de gorras?",
          a: "En nuestra fábrica: 7 días para una muestra física y 15–20 días de producción en masa tras aprobar la muestra. El tiempo total puerta a puerta depende después del método de envío y de la ruta, así que pide una opción de tránsito que cuadre con tu fecha de lanzamiento.",
        },
        {
          q: "¿Cómo comparo cotizaciones de distintos países de forma justa?",
          a: "Usa el mismo brief para cada proveedor: mismo archivo de diseño, mismas posiciones de decoración, misma tela, misma cantidad y misma ventana de entrega. Luego revisa si incluyen avíos, etiquetas, empaque e inspección, si el precio es FOB o entregado, y si el proceso incluye una muestra física. Las cotizaciones hechas sobre briefs distintos no se pueden comparar.",
        },
        {
          q: "¿Y si quiero repartir la producción entre varios países?",
          a: "Las marcas lo hacen para repartir riesgo o para atender distintos niveles de precio. Mantén tus diseños en vectores con referencias de color definidas para que la especificación sea transferible, y deja que una sola fábrica sea responsable de la muestra maestra. Con gusto cotizamos y producimos la parte de gorras de un plan multipaís.",
        },
      ],
    },
    cta: {
      title: "Envíanos tu brief y cotizamos la parte de gorras",
      text: "Envíanos diseño, cantidad, tela y mercado objetivo y te respondemos con cotización, plan de muestreo y calendario de producción. MOQ 200 uds, muestras físicas en 7 días.",
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
        ? "China vs Vietnam vs Bangladés: ¿Dónde Fabricar Gorras Personalizadas?"
        : "China vs Vietnam vs Bangladesh: Where Should You Source Custom Hats?",
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
      "@id": `https://bdjunyang.com/${lang}/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing`,
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
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.country.title}</h2>
          <div className="space-y-5">
            {c.country.body.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">{c.pricing.title}</h2>
          <div className="space-y-5">
            {c.pricing.body.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed">
                {p}
              </p>
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
