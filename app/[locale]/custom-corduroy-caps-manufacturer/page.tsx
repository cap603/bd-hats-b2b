"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";
import { Layers, ShieldCheck, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

const CONTENT = {
  en: {
    hero: {
      crumb: "Custom Corduroy Caps",
      badge: "⚡ Autumn/Winter Vintage Drops · 8W / 14W / 21W Wale Corduroy",
      title: "Custom",
      accent: "Corduroy Caps Manufacturer",
      subtitle:
        "Premium wide-wale, standard and baby-corduroy caps tailored for lifestyle streetwear, outdoor brands and private labels. Factory-direct MOQ 200 pcs with fast 7-day samples.",
      pills: [
        "MOQ 200 Pcs",
        "From $4.50 FOB",
        "8W / 14W / 21W Wale Options",
        "7-Day Samples",
        "Antique Brass Hardware",
        "Custom Leather Straps",
      ],
    },
    featuresTitle: "Why Brands Choose Our Factory for Custom Corduroy Caps",
    featuresIntro:
      "Corduroy requires specialized fabric stabilization and cutting techniques to prevent rib distortion and thread sinking. Here is how our factory engineers every corduroy order:",
    features: [
      {
        title: "8-Wale, 14-Wale & 21-Wale Fabric Arsenal",
        desc: "We stock premium 100% cotton and cotton-blend corduroy in three distinct wales: heavy 8-wale for chunky retro winter caps, versatile 14-wale for standard vintage dad hats, and ultra-fine 21-wale (baby cord) for lightweight minimalist designs.",
      },
      {
        title: "Underlay Embroidery Stabilization (Zero Thread Sink)",
        desc: "Stitching on corduroy ribs often causes embroidery threads to sink into the fabric valleys. Our digitizing engineers apply dense tatami underlay and water-soluble topping films to guarantee sharp 3D puff and flat embroidery with clean edges.",
      },
      {
        title: "Vintage Enzyme Wash & Pigment Dyeing",
        desc: "Achieve authentic 90s streetwear aesthetics with in-house garment enzyme washing and pigment dyeing. We soften the hand feel and create subtle high-low fading along the corduroy ridges without compromising tensile strength.",
      },
      {
        title: "Unstructured & Semi-Structured Profiles",
        desc: "Choose between relaxed, unstructured 6-panel dad hat silhouettes that drape naturally, retro 5-panel camper camp caps, or high-profile A-frame structured caps reinforced with anti-collapse buckram.",
      },
      {
        title: "Premium Metal & Leather Closure Systems",
        desc: "Pair your corduroy caps with genuine or vegan leather backstraps, antique brass slide buckles, engraved metal grommets, or matching self-fabric closures with tuck-in pockets.",
      },
      {
        title: "Small-Batch Flexibility & Tiered Factory Pricing",
        desc: "MOQ starts at 200 pieces per colorway — ideal for boutique drops and independent streetwear labels. FOB tiered pricing runs from $4.50 to $6.80, with full sample fee credit applied to bulk orders.",
      },
    ],
    compareTitle: "Corduroy vs Other Autumn/Winter Silhouette Options",
    compareCols: ["Material & Style", "Crown Profile", "Texture & Handfeel", "Best For"],
    compare: [
      {
        style: "Corduroy 6-Panel (Unstructured)",
        shape: "Soft, relaxed dad hat crown",
        brim: "Curved with self-fabric",
        fit: "Streetwear, skate, lifestyle autumn/winter drops",
      },
      {
        style: "Heavy Acid-Washed Cotton (6-Panel)",
        shape: "Unstructured low-profile",
        brim: "Pre-curved with raw distress",
        fit: "Vintage, music merchandise, casual apparel",
      },
      {
        style: "Wool Blend Snapback (Structured)",
        shape: "Tall, rigid front crown",
        brim: "Flat stiff brim",
        fit: "Hype streetwear, athletic & sports teams",
      },
      {
        style: "Corduroy 5-Panel Camper",
        shape: "Low square crown, side panels",
        brim: "Flat flexible visor",
        fit: "Outdoor lifestyle, cycling, indie lifestyle brands",
      },
    ],
    compareNote:
      "Need custom fabric swatches? Contact our engineering team on WhatsApp to receive physical corduroy color cards and wale sample cuts.",
    pricingTitle: "Corduroy Caps Production Specifications & MOQ",
    stats: [
      { value: "$4.50 – $6.80", label: "Per unit, FOB China" },
      { value: "200 Pcs", label: "MOQ per style / colorway" },
      { value: "7 / 15-20 Days", label: "Sample / bulk lead time" },
      { value: "50+ Shades", label: "Stock corduroy colors or custom dye" },
    ],
    faqs: [
      {
        q: "What is the difference between 8-wale, 14-wale, and 21-wale corduroy?",
        a: "'Wale' refers to the number of ridges per inch of fabric. 8-wale has wide, prominent ridges for a heavy retro winter look; 14-wale is the classic medium rib used by top skate and streetwear brands; 21-wale is ultra-fine 'baby cord' with a velvety, smooth micro-texture suitable for year-round wear.",
      },
      {
        q: "How do you prevent embroidery from sinking into corduroy ribs?",
        a: "We use a specialized dense grid underlay stitch combined with a heat-dissolving stabilizer film during high-speed Tajima embroidery. This creates a solid foundation, ensuring your logo sits crisp and elevated on top of the textured ridges.",
      },
      {
        q: "Can you produce custom colors matching our Pantone reference?",
        a: "Yes. While we maintain 50+ ready-to-cut stock corduroy shades for rapid 15-day delivery, we can laboratory-dye custom corduroy yardage to exact Pantone TPX/TCX color codes for orders starting at 500 pieces.",
      },
      {
        q: "What closure options work best with corduroy caps?",
        a: "Our most popular combination for corduroy is a brown or black genuine leather strap with an antique brass slide buckle. We also offer matching corduroy self-fabric straps, matte black metal snapbacks, and embossed metal grommets.",
      },
    ],
  },
  es: {
    hero: {
      crumb: "Gorras de Pana",
      badge: "⚡ Colecciones de Invierno · Pana de 8, 14 y 21 Cordones",
      title: "Fabricante de",
      accent: "Gorras de Pana Personalizadas",
      subtitle:
        "Gorras de pana gruesa, clásica y micropana confeccionadas para marcas de moda urbana, streetwear y marcas privadas. Directo de fábrica, pedido mínimo 200 piezas y muestras en 7 días.",
      pills: [
        "MOQ 200 piezas",
        "Desde $4.50 FOB",
        "Opciones 8W / 14W / 21W",
        "Muestras en 7 días",
        "Herrajes de latón envejecido",
        "Correas de cuero personalizadas",
      ],
    },
    featuresTitle: "Por qué las Marcas Eligen Nuestra Fábrica para Gorras de Pana",
    featuresIntro:
      "La pana requiere técnicas especiales de corte y estabilización para evitar la deformación de las nervaduras. Así fabricamos cada pedido en nuestra planta:",
    features: [
      {
        title: "Variedad de Pana: 8, 14 y 21 Cordones (Wales)",
        desc: "Disponemos de pana 100% algodón en tres acabados: 8 cordones para un estilo retro invernal grueso, 14 cordones para gorras urbanas clásicas y 21 cordones (micropana suave) para acabados minimalistas de alta gama.",
      },
      {
        title: "Bordado de Alta Precisión sin Hundimiento",
        desc: "Para evitar que los hilos del bordado se pierdan entre las ranuras de la pana, aplicamos un entramado base denso y láminas estabilizadoras solubles, garantizando bordados 3D y planos de máxima nitidez.",
      },
      {
        title: "Lavados Enzimáticos y Teñido Vintage",
        desc: "Logre una auténtica estética retro de los 90 mediante lavado enzimático y teñido por pigmentos, aportando un tacto ultrasuave y sutiles desgastes sin debilitar la estructura del tejido.",
      },
      {
        title: "Perfiles Desestructurados y Semiestructurados",
        desc: "Elija entre siluetas suaves tipo 'Dad Hat' desestructuradas que se adaptan naturalmente a la cabeza, modelos campestres de 5 paneles o gorras A-frame con refuerzo interior indeformable.",
      },
      {
        title: "Herrajes Metálicos y Cierres de Cuero Genuino",
        desc: "Combine sus gorras de pana con correas traseras de cuero marrón o negro, hebillas correderas de latón envejecido, ojales grabados con láser o cierres en la misma tela con bolsillo oculto.",
      },
      {
        title: "Flexibilidad para Marcas Emergentes y Precios de Fábrica",
        desc: "El pedido mínimo comienza en 200 unidades por colorway. Precios escalonados FOB de $4.50 a $6.80, con abono del costo de muestra al formalizar el pedido de producción en volumen.",
      },
    ],
    compareTitle: "Comparativa de Pana frente a Otros Tejidos de Temporada",
    compareCols: ["Material y Modelo", "Perfil de Corona", "Textura y Acabado", "Ideal Para"],
    compare: [
      {
        style: "Gorra de Pana 6 Paneles (Suave)",
        shape: "Corona relajada desestructurada",
        brim: "Curva en la misma pana",
        fit: "Moda urbana, streetwear y colecciones de otoño/invierno",
      },
      {
        style: "Algodón Lavado Ácido Pesado",
        shape: "Perfil bajo desestructurado",
        brim: "Precurvada con ligero desgaste",
        fit: "Estilo retro vintage y merchandising musical",
      },
      {
        style: "Snapback Mezcla Lana (Estructurada)",
        shape: "Corona alta y rígida",
        brim: "Visera plana rígida",
        fit: "Hypebeast, marcas de skate y equipos deportivos",
      },
      {
        style: "Camper 5 Paneles de Pana",
        shape: "Corona cuadrada y baja",
        brim: "Visera plana flexible",
        fit: "Marcas outdoor, ciclismo urbano y estilo de vida",
      },
    ],
    compareNote:
      "¿Necesita muestras físicas de tejido? Escríbanos por WhatsApp para enviarle muestrarios de colores y cortes de pana de 8, 14 y 21 cordones.",
    pricingTitle: "Especificaciones Técnicas, Precios y Plazos de Entrega",
    stats: [
      { value: "$4.50 – $6.80", label: "Por unidad, FOB China" },
      { value: "200 Pzas", label: "Pedido mínimo por estilo/color" },
      { value: "7 / 15-20 Días", label: "Muestra / Producción en serie" },
      { value: "50+ Tonos", label: "Colores en stock o teñido personalizado" },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre la pana de 8, 14 y 21 cordones?",
        a: "El número de cordones indica cuántas nervaduras hay por pulgada. La pana de 8 cordones es gruesa y muy marcada para prendas invernales; la de 14 cordones es la clásica estándar utilizada en streetwear; la de 21 cordones es micropana aterciopelada muy fina y elegante.",
      },
      {
        q: "¿Cómo logran que el bordado no se deforme sobre la pana?",
        a: "Aplicamos una puntada base de compensación densa (tatami) y una lámina hidrodisoluble superior que compacta temporalmente las nervaduras, permitiendo que el bordado plano o 3D repose con bordes perfectamente definidos.",
      },
      {
        q: "¿Pueden fabricar colores personalizados según nuestra referencia Pantone?",
        a: "Sí. Además de contar con más de 50 tonos de pana en stock para entrega rápida, podemos teñir metros en cuba según su código Pantone oficial a partir de 500 piezas.",
      },
      {
        q: "¿Qué tipo de cierre es el más recomendado para gorras de pana?",
        a: "La combinación favorita de marcas premium es la correa de cuero genuino con hebilla de latón bronce envejecido. También ofrecemos cierre de la misma tela o broches snapback de alta calidad.",
      },
    ],
  },
};

export default function CorduroyCapsPage() {
  const lang = useLang();
  const c = CONTENT[lang as "en" | "es"] || CONTENT.en;

  const RELATED_PRODUCTS = [
    {
      href: "/product/vintage-acid-wash-6-panel-dad-hat",
      name: "Vintage Acid Wash 6-Panel Dad Hat",
      tag: "Top Vintage Seller",
      badge: "6-Panel Soft",
      price: "$4.80 - $7.20",
      moq: "200 Pcs",
      img: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
    },
    {
      href: "/product/custom-3d-embroidered-5-panel-gorras",
      name: "Custom 3D Embroidered 5-Panel Cap",
      tag: "Streetwear Canvas",
      badge: "5-Panel",
      price: "$4.20 - $6.20",
      moq: "200 Pcs",
      img: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
    },
    {
      href: "/product/two-tone-3d-embroidery-a-frame-cap",
      name: "Two-Tone 3D Embroidery A-Frame Cap",
      tag: "Structured Profile",
      badge: "A-Frame",
      price: "$4.50 - $6.50",
      moq: "200 Pcs",
      img: "/images/products/two-tone-3d-embroidery-a-frame-cap.webp",
    },
    {
      href: "/product/retro-washed-knitted-beanie",
      name: "Retro Washed Knitted Beanie",
      tag: "Winter Companion",
      badge: "Knitwear",
      price: "$4.20 - $5.80",
      moq: "200 Pcs",
      img: "/images/products/retro-washed-knitted-beanie.webp",
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
      productsTitle={lang === "es" ? "Siluetas y Modelos Complementarios" : "Complementary Factory Silhouettes"}
      productsIntro={
        lang === "es"
          ? "Explore nuestras gorras vintage y modelos urbanos disponibles para producción simultánea."
          : "Mix and match silhouettes within your bulk order. Shared dyeing and hardware options available."
      }
      products={RELATED_PRODUCTS}
    />
  );
}
