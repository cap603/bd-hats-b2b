"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";

const CONTENT = {
  en: {
    hero: {
      crumb: "Performance Golf Hats",
      badge: "⚡ Tour-Grade Tech Caps · Golf & Active Performance",
      title: "Custom",
      accent: "Performance Golf Hats Manufacturer",
      subtitle:
        "Waterproof, featherlight, and laser-perforated performance caps engineered for golf clubs, athletic brands, and corporate tournament merchandise. Factory-direct MOQ 200 pcs.",
      pills: [
        "MOQ 200 Pcs",
        "From $5.20 FOB",
        "DWR Waterproof Coating",
        "Laser-Cut Perforation",
        "CoolMax Anti-Odor Sweatband",
        "Silicone & Welded TPU Logos",
      ],
    },
    featuresTitle: "Engineered for 18 Holes in Any Weather",
    featuresIntro:
      "Golf and performance headwear demands technical fabrics, water repellency, and precision breathability. Here is how our factory builds tour-grade active caps:",
    features: [
      {
        title: "DWR Hydrophobic Micro-Ripstop & 4-Way Stretch",
        desc: "We use lightweight (85-110 GSM) performance polyester and nylon with durable water repellent (DWR) coating. Water droplets bead up and slide off immediately, keeping the golfer dry during sudden rain while remaining ultra-breathable under intense sun.",
      },
      {
        title: "Laser-Cut Precision Micro-Ventilation",
        desc: "Precision cold laser cutting creates customized perforated patterns (hexagonal arrays, multi-line slots, or custom brand perforated shapes) on side and rear panels. Edges are heat-sealed during the laser stroke to ensure zero fraying over years of washing.",
      },
      {
        title: "3-Layer CoolMax Moisture-Wicking Sweatband",
        desc: "Our internal sweatbands feature a quick-dry terry interior, high-absorption foam core, and anti-microbial outer layer. They wick forehead perspiration 3x faster than traditional cotton sweatbands, preventing unsightly salt stains on the crown.",
      },
      {
        title: "Waterproof Welded TPU & Silicone Branding",
        desc: "Traditional embroidery threads can soak up moisture and weigh down performance caps. We offer high-frequency welded 3D TPU patches, matte liquid silicone heat-transfers, and water-resistant rubberized badges that stay vibrant in all weather conditions.",
      },
      {
        title: "Featherlight Uncrushable Visor Technology",
        desc: "Visors are built with specialized EVA memory foam or lightweight hydrophobic PE inserts that float in water and snap back into their original curve even after being packed tight into a golf travel bag.",
      },
      {
        title: "Performance Closure Systems",
        desc: "Fitted with low-profile snag-free micro-Velcro closures, custom embossed silicone snapbacks, or elastic bungee cords with rubberized cord-locks for single-handed on-the-course adjustment.",
      },
    ],
    compareTitle: "Performance Golf Caps vs Classic Headwear",
    compareCols: ["Feature", "Performance Golf Cap", "Standard Cotton Baseball Cap", "Foam Trucker Cap"],
    compare: [
      {
        style: "Fabric Weight & Feel",
        shape: "Ultra-light 85-110 GSM stretch nylon",
        brim: "Heavy 280 GSM cotton twill",
        fit: "Medium 180 GSM polyester foam",
      },
      {
        style: "Water & Weather Repellency",
        shape: "DWR finish (water beads & rolls off)",
        brim: "Soaks water and becomes heavy",
        fit: "Mesh breathes, front foam absorbs water",
      },
      {
        style: "Ventilation Technology",
        shape: "Laser-cut micro perforation arrays",
        brim: "Stitched thread eyelets",
        fit: "Open plastic mesh back",
      },
      {
        style: "Sweatband Performance",
        shape: "3-layer CoolMax anti-microbial",
        brim: "Single-layer cotton twill",
        fit: "Standard polyester terry",
      },
    ],
    compareNote:
      "Planning a corporate golf tournament or launching a performance activewear line? Inquire on WhatsApp for digital mockups and fabric swatch packs.",
    pricingTitle: "Performance Golf Hats Production Specs & Pricing",
    stats: [
      { value: "$5.20 – $7.80", label: "Per unit, FOB China" },
      { value: "200 Pcs", label: "MOQ per style / color" },
      { value: "7 / 15-20 Days", label: "Sample / bulk lead time" },
      { value: "DWR Finish", label: "Hydrophobic rain-shedding performance" },
    ],
    faqs: [
      {
        q: "What makes these caps specifically suitable for golf and athletic tournaments?",
        a: "They combine weather-resistant performance, DWR rain-shedding capability, featherlight weight (under 65 grams), and laser perforation for active cooling. They are designed to withstand 18 holes of sweat, rain, and intense outdoor sun while maintaining a crisp, professional aesthetic.",
      },
      {
        q: "What is the best logo method for technical waterproof hats?",
        a: "We highly recommend high-frequency welded 3D TPU patches or matte silicone heat-transfers. They are 100% waterproof, razor-sharp, and will never fray, peel, or absorb moisture like traditional embroidered thread can.",
      },
      {
        q: "Do you offer custom printed seam tape inside the crown?",
        a: "Yes. All our golf caps feature fully customized waterproof inner seam tape. You can print your brand logo, tagline, or event name repetitively along the seams at no additional setup charge on orders of 500+ pieces.",
      },
      {
        q: "Can the visor withstand being bent or crushed in a golf bag?",
        a: "Yes. We use flexible high-density EVA memory foam visors that return to their natural shape without permanent creasing, making them ideal for traveling golfers.",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras de Golf de Rendimiento",
      badge: "⚡ Gorras Técnicas de Alto Rendimiento · Golf y Deportes",
      title: "Fabricante de",
      accent: "Gorras de Golf de Alto Rendimiento",
      subtitle:
        "Gorras impermeables, ultraligeras y con perforación láser diseñadas para clubes de golf, marcas deportivas y eventos corporativos. Venta directa de fábrica con pedido mínimo de 200 piezas.",
      pills: [
        "MOQ 200 piezas",
        "Desde $5.20 FOB",
        "Tratamiento hidrófugo DWR",
        "Perforación por corte láser",
        "Banda absorbente CoolMax",
        "Logos en TPU soldado y silicona",
      ],
    },
    featuresTitle: "Diseñadas para Rendir en los 18 Hoyos Bajo Cualquier Clima",
    featuresIntro:
      "Las gorras de golf y alto rendimiento exigen tejidos técnicos, repelencia al agua y máxima ventilación. Así fabricamos cada modelo en nuestra factoría:",
    features: [
      {
        title: "Tejido Hidrófugo DWR y Elasticidad en 4 Direcciones",
        desc: "Utilizamos poliéster y nailon técnico ultraligero (85-110 g/m²) con recubrimiento DWR que repele el agua al instante. Las gotas de lluvia resbalan sin empapar la tela, manteniendo al jugador seco bajo la lluvia y fresco bajo el sol.",
      },
      {
        title: "Ventilación de Alta Precisión por Corte Láser",
        desc: "El láser frío genera patrones perforados a medida (matrices hexagonales, ranuras aerodinámicas o formas corporativas) en los paneles laterales y traseros. Los bordes se sellan térmicamente para garantizar cero deshilachado.",
      },
      {
        title: "Banda Interior CoolMax de 3 Capas Antiolor",
        desc: "Nuestra banda antitranspirante combina rizo de secado rápido, núcleo de espuma de alta absorción y capa exterior antibacteriana. Evacua el sudor 3 veces más rápido que el algodón, previniendo manchas de salitre en la corona.",
      },
      {
        title: "Logotipos en TPU Soldado y Silicona 3D Impermeable",
        desc: "Sustituimos el bordado tradicional por parches de TPU de alta frecuencia termosoldados o transfer de silicona líquida mate. Son totalmente impermeables, no absorben peso y lucen impecables bajo lluvia intensa.",
      },
      {
        title: "Visera Flotante con Memoria Indeformable",
        desc: "La visera incorpora un inserto de espuma EVA hidrófoba que flota en el agua y recupera su curvatura natural de forma inmediata incluso tras comprimirse dentro de la bolsa de palos de golf.",
      },
      {
        title: "Sistemas de Cierre Técnico de Perfil Bajo",
        desc: "Equipadas con micro-velcro de perfil bajo antienganche, broches snapback de silicona grabada o cordones elásticos con bloqueo de goma para ajuste con una sola mano en pleno campo.",
      },
    ],
    compareTitle: "Comparativa: Gorra de Golf Técnica frente a Gorras Convencionales",
    compareCols: ["Característica", "Gorra Golf de Rendimiento", "Gorra Clásica de Algodón", "Gorra Trucker Rejilla"],
    compare: [
      {
        style: "Peso del Tejido y Tacto",
        shape: "Nailon elástico ultraligero (85 g/m²)",
        brim: "Sarga de algodón pesada (280 g/m²)",
        fit: "Espuma de poliéster media (180 g/m²)",
      },
      {
        style: "Repelencia al Agua y Lluvia",
        shape: "Tratamiento DWR (el agua resbala)",
        brim: "Absorbe agua y se vuelve pesada",
        fit: "La rejilla respira, la espuma frontal se empapa",
      },
      {
        style: "Tecnología de Transpiración",
        shape: "Matrices de perforación láser",
        brim: "Ojales cosidos tradicionales",
        fit: "Malla plástica abierta",
      },
      {
        style: "Rendimiento de la Banda Interior",
        shape: "CoolMax de 3 capas antimicrobiana",
        brim: "Sarga de algodón simple",
        fit: "Rizo sintético estándar",
      },
    ],
    compareNote:
      "¿Organiza un torneo corporativo o lanza su propia línea deportiva? Escríbanos por WhatsApp para recibir simulaciones digitales y muestrarios de tejidos técnicos.",
    pricingTitle: "Especificaciones de Producción, Precios y Pedidos Mínimos",
    stats: [
      { value: "$5.20 – $7.80", label: "Por unidad, FOB China" },
      { value: "200 Pzas", label: "Pedido mínimo por estilo/color" },
      { value: "7 / 15-20 Días", label: "Muestra / Producción en serie" },
      { value: "Acabado DWR", label: "Tratamiento hidrófugo repelente al agua" },
    ],
    faqs: [
      {
        q: "¿Por qué estas gorras son especialmente aptas para torneos de golf y deportes?",
        a: "Combinan alta resistencia a la intemperie, repelencia al agua DWR, peso pluma inferior a 65 gramos y refrigeración activa por perforación láser. Soportan 18 hoyos de sudor, calor y lluvia manteniendo una presencia pulcra y elegante.",
      },
      {
        q: "¿Qué método de personalización de logotipo es el más adecuado?",
        a: "Recomendamos parches de TPU soldados por alta frecuencia o silicona mate termosellada. Son 100% estancos, no se desgastan, no absorben humedad y ofrecen un relieve contemporáneo de máxima categoría.",
      },
      {
        q: "¿Es posible personalizar la cinta de costuras interior con nuestra marca?",
        a: "Sí. Toda la cinta interior termosellada puede imprimirse con el logotipo de su marca, torneo o patrocinador de forma continua sin coste adicional a partir de 500 piezas.",
      },
      {
        q: "¿La visera recupera su forma si se aplasta en la maleta de viaje?",
        a: "Totalmente. Empleamos viseras de espuma viscoelástica EVA de alta densidad que recuperan su curvatura original sin dejar marcas ni pliegues permanentes.",
      },
    ],
  },
};

export default function GolfPerformancePage() {
  const lang = useLang();
  const c = CONTENT[lang as "en" | "es"] || CONTENT.en;

  const RELATED_PRODUCTS: ProductLinks[] = [
    {
      href: "/product/nylon-waterproof-performance-golf-cap",
      name: "Nylon Waterproof Performance Golf Cap",
      tag: "Top Performance Seller",
      badge: "DWR Waterproof",
      price: "$5.50 - $7.80",
      moq: "200 Pcs",
      img: "/images/products/nylon-waterproof-performance-golf-cap.webp",
    },
    {
      href: "/product/outdoor-performance-5-panel-cap",
      name: "Outdoor Performance 5-Panel Cap",
      tag: "Active Tech",
      badge: "5-Panel",
      price: "$5.20 - $7.50",
      moq: "200 Pcs",
      img: "/images/products/outdoor-performance-5-panel-cap.webp",
    },
    {
      href: "/product/breathable-custom-embroidered-6-panel",
      name: "Breathable Custom Embroidered 6-Panel",
      tag: "Athletic Classic",
      badge: "6-Panel",
      price: "$4.60 - $6.80",
      moq: "200 Pcs",
      img: "/images/products/breathable-custom-embroidered-6-panel.webp",
    },
    {
      href: "/product/nylon-large-brim-bucket-hat",
      name: "Nylon Large Brim Bucket Hat",
      tag: "Sun Protection",
      badge: "Bucket",
      price: "$4.50 - $6.80",
      moq: "200 Pcs",
      img: "/images/products/nylon-large-brim-bucket-hat.webp",
    },
  ];

  return (
    <LandingShell
      crumb={c.hero.crumb}
      badge={c.hero.badge}
      title={c.hero.title}
      accent={c.hero.accent}
      subtitle={c.hero.subtitle}
      pills={c.hero.pills}
      featuresTitle={c.featuresTitle}
      featuresIntro={c.featuresIntro}
      features={c.features}
      compareTitle={c.compareTitle}
      compareCols={c.compareCols}
      compare={c.compare}
      compareNote={c.compareNote}
      pricingTitle={c.pricingTitle}
      stats={c.stats}
      faqs={c.faqs}
      productsTitle={lang === "es" ? "Gorras Deportivas y Técnicas Relacionadas" : "Related Technical Performance Silhouettes"}
      productsIntro={
        lang === "es"
          ? "Explore otros modelos técnicos con protección UV e impermeabilidad para producción combinada."
          : "Pair tour-grade golf caps with outdoor waterproof campers and large-brim tournament hats."
      }
      products={RELATED_PRODUCTS}
    />
  );
}
