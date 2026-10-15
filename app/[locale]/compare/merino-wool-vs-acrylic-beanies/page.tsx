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
      crumb: "Merino Wool vs Acrylic Beanies",
      badge: "Knitwear Sourcing Guide · Factory Specs 2026",
      title: "Merino Wool vs",
      accent: "Acrylic Beanies",
      subtitle:
        "Acrylic dominates high-volume streetwear and promotional runs; Merino wool commands premium margins in alpine and luxury outdoor retail. Understanding the exact yarn cost, thermal performance, itch threshold, and washability differences is the difference between a high-return drop and unsold inventory.",
      quickAnswerLabel: "Short answer",
      quickAnswer:
        "Choose acrylic beanies for budget-friendly retail drops ($3.20 - $4.50 FOB, MOQ 200 pcs): it is soft, machine-washable, completely itch-free, and holds vibrant yarn dyes. Choose Merino wool (or 50/50 Merino-acrylic blends) for premium outdoor and luxury collections ($5.50 - $9.20 FOB): it delivers superior natural warmth, odor resistance, and breathability with zero synthetic shine. Both run on our computerized flat knitting machines in 5GG and 7GG gauges.",
    },
    table: {
      caption: "Material, Technical & Commercial Comparison",
      columns: [
        { key: "spec", label: "Specification" },
        { key: "acrylic", label: "100% Soft Acrylic" },
        { key: "merino", label: "Merino Wool & Blends" },
      ],
      rows: [
        {
          label: "Fiber Origin & Composition",
          values: [
            "Petroleum-based synthetic polyacrylonitrile fiber; engineered to mimic wool bulk and crimp",
            "Natural protein fiber shorn from Merino sheep; extra-fine grade (18.5 to 20.5 microns)",
          ],
        },
        {
          label: "Unit FOB Factory Cost (MOQ 200+)",
          values: [
            "$3.20 – $4.50 FOB (Highly economical; predictable raw material pricing)",
            "$5.50 – $9.20 FOB (Reflects raw wool global commodity cost and specialized spinning)",
          ],
        },
        {
          label: "Skin Comfort & Itch Factor",
          values: [
            "100% hypoallergenic and itch-free; smooth cylindrical synthetic fibers",
            "Ultra-fine Merino fibers (<20 microns) bend against skin without prickling; non-scratchy",
          ],
        },
        {
          label: "Warmth & Insulation",
          values: [
            "High bulk-to-weight ratio; traps warm air pockets effectively in dry cold",
            "Superior active thermoregulation; retains insulation even when damp from snow or sweat",
          ],
        },
        {
          label: "Breathability & Odor Resistance",
          values: [
            "Moderate breathability; hydrophobic fiber does not absorb moisture, can retain sweat odor",
            "Exceptional natural breathability; keratin fibers neutralize odor bacteria for multi-day wear",
          ],
        },
        {
          label: "Color Vibrancy & Dye Penetration",
          values: [
            "High saturation; accommodates neon, bright pastels, and sharp multi-color jacquard",
            "Rich, natural, matte appearance; earthy tones, melange heathers, and understated heritage shades",
          ],
        },
        {
          label: "Washing & Retail Care",
          values: [
            "Easy care: machine washable on warm, tumble dry low, highly resistant to shrinkage",
            "Delicate care: hand wash cold or gentle wool cycle, dry flat to prevent felting",
          ],
        },
        {
          label: "Pilling & Shape Retention",
          values: [
            "High tensile strength; anti-pilling core-spun yarns maintain rib elasticity season after season",
            "Natural fibers can pill in high-friction zones; blending with 30-50% acrylic prevents fuzzing",
          ],
        },
        {
          label: "Best Retail Application",
          values: [
            "Streetwear, skate brands, collegiate drops, corporate gifts, fast-fashion retail ($18-$32 MSRP)",
            "Technical outdoor, ski resorts, boutique heritage apparel, luxury lifestyle gifts ($45-$85 MSRP)",
          ],
        },
      ],
    },
    sections: [
      {
        heading: "1. The Sourcing Dilemma: Warmth vs Production Economics",
        paragraphs: [
          "When brand founders begin sourcing knit beanies, the immediate instinct is often to specify '100% natural wool.' However, in commercial wholesale production, 100% pure wool introduces significant retail friction: higher unit cost, stricter washing warnings that cause consumer returns if machine-washed, and sensitivity for wearers with sensitive foreheads.",
          "High-grade acrylic, on the other hand, is the global workhorse of modern headwear. Our factory uses premium core-spun acrylic yarns that are specifically combed to remove rough burrs. The result is a handfeel nearly indistinguishable from cashmere at one-third the raw material cost, with total machine-wash convenience for end consumers.",
        ],
      },
      {
        heading: "2. The Industry Secret: The 50/50 Merino-Acrylic Hybrid",
        paragraphs: [
          "For brands wanting the luxury marketing claim of Merino wool without the price tag and fragility of 100% pure fleece, we frequently recommend our 50% Merino Wool / 50% Anti-Pilling Acrylic blend.",
          "This hybrid yarn provides the best of both worlds: genuine wool breathability, premium thermoregulation, and luxury hang-tag claims, reinforced by acrylic's structural elasticity, shape memory, and wash durability. At an FOB price point of approximately $4.80 - $6.50, it is the highest-margin sweet spot for European and North American streetwear labels.",
        ],
      },
      {
        heading: "3. Knit Gauge Selection: 3GG vs 5GG vs 7GG",
        paragraphs: [
          "Both acrylic and Merino yarns can be knitted on our computerized Shima Seiki and flat knitting machines across three primary gauges:",
          "• 7GG (Fine Gauge): Dense, clean, and lightweight. The gold standard for sleek cuffed beanies worn under jackets or in mild urban winter.",
          "• 5GG (Medium Ribbed): The classic fisherman and chunky rib profile. High elasticity, deep foldover cuffs, and maximum surface area for front patches.",
          "• 3GG (Chunky Cable Knit): Heavyweight, rustic texture. Ideal for heavy winter mountain beanies and holiday gift programs.",
        ],
      },
      {
        heading: "4. Logo Decoration Compatibility on Knitted Beanies",
        paragraphs: [
          "Knitwear expands and contracts with head circumference. Directly embroidering large rigid graphics onto knit ribs can distort the stretch. We advise the following decoration hierarchy based on material:",
          "• Woven Labels & Clip Labels: The most reliable method. Folded over the cuff edge or centered on the front, woven damask labels allow the knit to stretch freely around the stitch line.",
          "• Genuine or Faux Leather Patches: Embossed or laser-engraved leather adds an immediate $15+ perceived retail value, especially when paired with Merino wool's natural texture.",
          "• 3D Puff & Direct Embroidery: Best suited for tighter 7GG knits. We apply an elastic water-soluble backing underneath to ensure stitches do not pull into the rib grooves.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which material is better for our brand's first custom beanie drop?",
        a: "If this is your first collection or you are selling at retail between $20 and $35, 100% soft acrylic is the safest and most profitable choice. It offers low MOQ (200 pcs), zero customer complaints regarding itchiness, and easy machine washing. If you are an outdoor or luxury label retailing above $45, go with a Merino wool blend.",
      },
      {
        q: "Does Merino wool itch on the forehead?",
        a: "Standard coarse wool (28-35 microns) causes prickling and itchiness because the thick fiber ends do not bend. Our factory exclusively sources extra-fine Merino wool under 20.5 microns. The fibers bend effortlessly upon skin contact, making them comfortable for over 98% of wearers.",
      },
      {
        q: "What is the minimum order quantity (MOQ) for custom dyed yarn?",
        a: "We maintain over 60 stock acrylic colors and 25 stock Merino-blend shades that can be ordered at our standard MOQ of 200 pieces. For custom yarn laboratory dip-dyeing to an exact Pantone color, the minimum batch is 500 pieces per colorway.",
      },
      {
        q: "Can we add a satin lining to Merino wool beanies?",
        a: "Yes. We frequently build hybrid beanies featuring a Merino wool or acrylic exterior with a 100% silk-touch satin interior. This combination prevents frizz, preserves hair moisture, and eliminates any direct skin contact with the outer knit.",
      },
      {
        q: "How does unit pricing compare for an order of 500 pieces?",
        a: "For a standard 5GG cuffed beanie with a custom woven foldover label at 500 pieces: 100% Soft Acrylic runs approximately $3.40 FOB; 50/50 Merino-Acrylic blend runs ~$5.20 FOB; 100% Pure Merino Wool runs ~$7.50 - $8.20 FOB depending on final cap weight (75g vs 95g).",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Lana Merino vs Gorros Acrílicos",
      badge: "Guía de Aprovisionamiento · Especificaciones de Fábrica 2026",
      title: "Lana Merino vs",
      accent: "Gorros Acrílicos",
      subtitle:
        "El acrílico domina el streetwear de gran volumen y la moda promocional; la lana merino lidera el retail alpino y outdoor premium. Comprender el coste del hilo, el rendimiento térmico, la resistencia al picor y el lavado es la clave para una colección rentable sin devoluciones.",
      quickAnswerLabel: "Respuesta rápida",
      quickAnswer:
        "Elija gorros acrílicos para colecciones de moda urbana accesibles ($3.20 - $4.50 FOB, MOQ 200 uds): son suaves, lavables a máquina, no pican y fijan colores vivos. Elija lana merino (o mezclas 50/50 merino-acrílico) para colecciones técnicas y marcas de lujo ($5.50 - $9.20 FOB): aportan abrigo natural superior, control de olores y transpirabilidad sin brillos sintéticos. Ambos se tejen en galgas 5GG y 7GG.",
    },
    table: {
      caption: "Comparativa Técnica, Térmica y Comercial de Materiales",
      columns: [
        { key: "spec", label: "Especificación" },
        { key: "acrylic", label: "100% Acrílico Suave" },
        { key: "merino", label: "Lana Merino y Mezclas" },
      ],
      rows: [
        {
          label: "Origen y Composición de la Fibra",
          values: [
            "Fibra sintética de poliacrilonitrilo; diseñada para imitar el volumen y la suavidad de la lana",
            "Fibra proteica natural esquilada de ovejas merinas; calidad extrafina (18.5 a 20.5 micras)",
          ],
        },
        {
          label: "Coste Unitario FOB Fábrica (MOQ 200+)",
          values: [
            "$3.20 – $4.50 FOB (Muy económico; precio de materia prima predecible y estable)",
            "$5.50 – $9.20 FOB (Refleja el coste de la lana en el mercado mundial y el hilado técnico)",
          ],
        },
        {
          label: "Tacto y Nivel de Picor en la Frente",
          values: [
            "100% hipoalergénico y libre de picores; fibras cilíndricas sintéticas suaves",
            "Fibras ultrafinas (<20 micras) que se doblan con la piel sin causar irritación ni cosquilleo",
          ],
        },
        {
          label: "Aislamiento Térmico y Abrigo",
          values: [
            "Excelente relación volumen/peso; retiene cámaras de aire caliente en clima frío y seco",
            "Termorregulación activa superior; conserva el calor corporal incluso si se moja con nieve",
          ],
        },
        {
          label: "Transpirabilidad y Control de Olores",
          values: [
            "Transpirabilidad moderada; la fibra no absorbe humedad y puede retener olor a sudor",
            "Transpirabilidad natural máxima; la queratina neutraliza bacterias y evita malos olores",
          ],
        },
        {
          label: "Intensidad del Color y Teñido",
          values: [
            "Gran saturación; admite tonos flúor, colores pastel vivos y jacquards nítidos",
            "Aspecto rico y mate; tonos tierra naturales, jaspeados y gamas clásicas de alta gama",
          ],
        },
        {
          label: "Lavado y Cuidado por el Consumidor",
          values: [
            "Cuidado fácil: lavable a máquina, secado rápido, gran resistencia al encogimiento",
            "Cuidado delicado: lavado a mano en frío o programa lana, secado en plano para no deformar",
          ],
        },
        {
          label: "Resistencia al Pilling y Deformación",
          values: [
            "Alta resistencia; hilos de núcleo hilado antipilling mantienen la elasticidad año tras año",
            "La fibra natural puede formar bolitas por fricción; mezclar 30-50% de acrílico lo previene",
          ],
        },
        {
          label: "Mercado y Aplicación Comercial",
          values: [
            "Streetwear, marcas de skate, merchandising, moda accesible (PVP $18-$32)",
            "Marcas outdoor alpino, estaciones de esquí, moda de lujo y boutique (PVP $45-$85)",
          ],
        },
      ],
    },
    sections: [
      {
        heading: "1. El Dilema del Comprador: Calidez vs Economía de Escala",
        paragraphs: [
          "Muchos directores de producto buscan instintivamente '100% lana natural'. No obstante, en la producción B2B a gran escala, la lana pura implica mayores costes, riesgo de quejas si el cliente final la lava en caliente y una textura que puede no agradar a usuarios con piel hipersensible.",
          "El acrílico de alta densidad, en cambio, es el estándar de la moda actual. En nuestra fábrica utilizamos hilo acrílico peinado sin rebabas, logrando un tacto prácticamente idéntico al cachemir a un tercio del coste y con la comodidad de poder lavarse en lavadora.",
        ],
      },
      {
        heading: "2. El Secreto Comercial: El Híbrido 50% Merino / 50% Acrílico",
        paragraphs: [
          "Para marcas que desean promocionar las propiedades prémium de la lana merino sin encarecer excesivamente la prenda, fabricamos con frecuencia hilados con mezcla 50/50.",
          "Esta combinación proporciona la transpirabilidad y el prestigio de la lana natural, reforzados por la memoria elástica y la resistencia al lavado del acrílico. Con un coste FOB aproximado de $4.80 a $6.50, es la opción con mayor margen comercial para marcas europeas y americanas.",
        ],
      },
      {
        heading: "3. Elección de Galgas: 3GG, 5GG y 7GG",
        paragraphs: [
          "Tejemos ambos hilados en nuestras máquinas computarizadas Shima Seiki en tres densidades principales:",
          "• Galga 7GG (Punto Fino): Tejido compacto y ligero. Perfecto para gorros urbanos ajustados y uso bajo chaquetas.",
          "• Galga 5GG (Punto Medio Acanalado): La clásica textura acanalada de pescador. Gran elasticidad y doblado marcado.",
          "• Galga 3GG (Punto Grueso): Estilo rústico de invierno pesado y montaña.",
        ],
      },
      {
        heading: "4. Personalización de Logotipos sobre Tejido de Punto",
        paragraphs: [
          "Al ser prendas elásticas, bordar grandes logotipos rígidos puede desfigurar la prenda. Recomendamos:",
          "• Etiquetas Tejidas (Woven Labels): El método más fiable. Dobladas en el borde del puño, permiten que el tejido estire con total libertad.",
          "• Parches de Cuero Genuino o Vegano: Aportan un valor percibido de más de $15 en tienda, armonizando a la perfección con la lana merino.",
          "• Bordado 3D Directo: Aconsejable sobre galga 7GG tupida, aplicando una película base elástica para que la puntada no se hunda.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué material es más aconsejable para el primer lanzamiento de una marca?",
        a: "Si su precio de venta al público rondará entre $20 y $35, el acrílico suave es la alternativa más rentable: mínimo de 200 unidades, cero quejas por picor y fácil lavado. Si se orienta a un público alpino o de alta gama por encima de $45, elija lana merino.",
      },
      {
        q: "¿La lana merino pica en la frente?",
        a: "La lana tradicional gruesa pica porque las puntas rígidas no se doblan. Nuestra fábrica utiliza exclusivamente lana merino extrafina de menos de 20.5 micras, cuyas fibras se flexionan suavemente al tacto sin causar irritación en más del 98% de los usuarios.",
      },
      {
        q: "¿Cuál es el pedido mínimo para teñir colores a medida?",
        a: "Mantenemos más de 60 colores acrílicos y 25 tonos merino en stock con pedido mínimo de 200 unidades. Para teñir hilo en cuba según su código Pantone oficial, el mínimo es de 500 piezas por tono.",
      },
      {
        q: "¿Se puede incorporar forro de satén a los gorros de lana?",
        a: "Por supuesto. Confeccionamos gorros con exterior de lana merino o acrílico e interior de satén seda. Esta combinación previene el encrespamiento del cabello y elimina cualquier contacto directo con el punto exterior.",
      },
      {
        q: "¿Cómo varían los precios unitarios para 500 piezas?",
        a: "Para un gorro clásico 5GG con etiqueta tejida en 500 unidades: 100% Acrílico ronda los $3.40 FOB; la mezcla 50/50 Merino-Acrílico ronda los $5.20 FOB; y 100% Lana Merino ronda los $7.50 - $8.20 FOB según el gramaje final.",
      },
    ],
  },
};

export default function MerinoVsAcrylicPage() {
  const lang = useLang();
  const c = CONTENT[lang as "en" | "es"] || CONTENT.en;

  return (
    <ComparisonShell
      crumb={c.hero.crumb}
      badge={c.hero.badge}
      title={c.hero.title}
      accent={c.hero.accent}
      subtitle={c.hero.subtitle}
      quickAnswerLabel={c.hero.quickAnswerLabel}
      quickAnswer={c.hero.quickAnswer}
      category="Beanies"
      faqSchema={{
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }}
    >
      <ComparisonTable
        caption={c.table.caption}
        columns={c.table.columns}
        rows={c.table.rows}
      />

      <section className="my-16 space-y-12 max-w-4xl mx-auto">
        {c.sections.map((sec, i) => (
          <article key={i} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p, j) => (
              <p
                key={j}
                className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal"
              >
                {p}
              </p>
            ))}
          </article>
        ))}
      </section>

      <ComparisonFaq
        title={lang === "es" ? "Preguntas Frecuentes sobre Hilos y Tejidos" : "Frequently Asked Questions"}
        faqs={c.faqs}
      />

      {/* Internal link bridge back to custom beanies landing page */}
      <div className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          {lang === "es" ? "Producción Directa de Fábrica" : "Direct Factory Production"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-black mt-4 mb-3">
          {lang === "es"
            ? "¿Listo para Fabricar su Colección de Gorros de Punto?"
            : "Ready to Engineer Your Custom Knit Beanie Collection?"}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {lang === "es"
            ? "Muestras físicas en 7 días, galgas 3GG/5GG/7GG, forros de satén y bordados 3D. Pedido mínimo 200 unidades."
            : "From 100% soft acrylic to certified extra-fine Merino wool blends. 7-day samples, Shima Seiki computerized knitting, and 200 pcs MOQ."}
        </p>
        <Link
          href={`/${lang}/custom-beanies-manufacturer`}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-black py-3.5 px-8 rounded-2xl text-sm transition shadow-lg shadow-emerald-500/20"
        >
          <span>
            {lang === "es"
              ? "Ver Especificaciones de Gorros de Invierno"
              : "Explore Custom Beanies Manufacturing"}
          </span>
          <span>→</span>
        </Link>
      </div>
    </ComparisonShell>
  );
}
