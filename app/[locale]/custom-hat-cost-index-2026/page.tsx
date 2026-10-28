"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, ShieldCheck, CheckCircle2, TrendingDown, Clock, Layers, DollarSign, Award, ArrowRight } from "lucide-react";
import { useLang } from "../../lib/i18n";
import { trackWhatsAppClick } from "../../lib/tracking";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { MobileNav } from "../../components/MobileNav";
import { MobileStickyBar } from "../../components/MobileStickyBar";

const WHATSAPP_NUMBER = "8615933930830";

const CONTENT = {
  en: {
    hero: {
      badge: "2026 Headwear Sourcing Benchmarks · Direct Factory Data",
      title: "2026 Custom Hat Manufacturing",
      accent: "Cost Index & Sourcing Guide",
      subtitle: "Transparent factory-floor economics for global apparel brands, streetwear labels, and corporate buyers. Real FOB cost breakdowns across fabric tiers, Barudan embroidery techniques, order volumes (MOQ 200), and lead times.",
      quickSummaryTitle: "Executive Summary & Benchmark Takeaways",
      quickSummary: "In 2026, bulk custom hat manufacturing in China ranges between $3.20 and $7.80 per unit FOB for standard minimum orders of 200 pieces. Base cotton twill caps anchor the entry tier ($3.20 - $4.80), while textured 8-wale corduroy and laser-perforated performance golf hats sit in the upper tier ($4.50 - $7.80). Scaling order volume from 200 to 1,000 units reduces per-cap production costs by 22% to 28% due to fabric yield efficiency and setup amortization across automated Barudan embroidery lines."
    },
    stats: [
      { value: "$3.20 - $7.80", label: "FOB Factory Price Range" },
      { value: "200 Pcs", label: "Strict Minimum Order (MOQ)" },
      { value: "7 Days", label: "Pre-Production Sample Turnaround" },
      { value: "15-20 Days", label: "Bulk Manufacturing Window" }
    ],
    table1Title: "1. 2026 Headwear Category Pricing Benchmarks (FOB China)",
    table1Intro: "Estimated unit costs based on 200-piece baseline orders with standard front embroidery, custom woven sweatband label, and private-label hangtag.",
    categories: [
      { name: "Classic 6-Panel Cotton Twill Dad Hat", range: "$3.20 - $4.80", moq: "200 pcs", fabric: "100% Chino Cotton Twill", features: "Soft unstructured crown, brass buckle strapback, curved visor" },
      { name: "Heavyweight Cotton 5-Panel A-Frame Cap", range: "$3.80 - $5.60", moq: "200 pcs", fabric: "280gsm Heavy Cotton", features: "High structured crown, buckram backing, plastic snapback" },
      { name: "Classic 5-Panel Mesh Trucker Cap", range: "$3.50 - $5.20", moq: "200 pcs", fabric: "Cotton Front / Poly Mesh", features: "High-density nylon mesh, padded sweatband, snapback" },
      { name: "Vintage 8-Wale Corduroy Dad Hat", range: "$4.50 - $6.80", moq: "200 pcs", fabric: "100% Cotton 8-Wale Corduroy", features: "Heavy rib texture, Tatami anti-sink embroidery, brass tri-glide" },
      { name: "Laser-Perforated DWR Performance Golf Cap", range: "$5.20 - $7.80", moq: "200 pcs", fabric: "Waterproof Stretch Nylon", features: "Laser side ventilation, moisture-wicking sweatband, silicone closure" },
      { name: "Streetwear Flat-Brim Snapback Cap", range: "$3.90 - $5.80", moq: "200 pcs", fabric: "Acrylic / Wool Blend", features: "Rigid flat visor, green/grey undervisor, high-crown structure" },
      { name: "Outdoor DWR Nylon Wide-Brim Bucket Hat", range: "$4.20 - $6.50", moq: "200 pcs", fabric: "Lightweight Ripstop Nylon", features: "Adjustable chin drawcord, multi-row stitched brim, packable" },
      { name: "Knit Winter Beanie (Acrylic / Merino Blend)", range: "$3.80 - $7.50", moq: "200 pcs", fabric: "Acrylic / Wool Blend / Satin", features: "5GG / 7GG rib knit, double cuff, woven label or 3D embroidery" }
    ],
    table2Title: "2. Bill of Materials (BOM) Cost Breakdown",
    table2Intro: "Understanding where your production dollars go helps optimize tech packs without sacrificing garment-grade quality.",
    bom: [
      { component: "Shell Fabric & Lining", share: "35% - 42%", details: "Premium chino twill, heavyweight corduroy, technical DWR nylon, or merino-blend yarns." },
      { component: "Embroidery & Branding", share: "20% - 28%", details: "Digitizing fees, stitch density run time on Barudan machines, 3D puff foam, and thread spool consumption." },
      { component: "Hardware & Closures", share: "10% - 15%", details: "Antique brass metal buckles, 7-hole snapbacks, custom embossed metal eyelets, and nylon webbing straps." },
      { component: "Internal Sweatband & Taping", share: "8% - 12%", details: "Cotton/terrycloth sweatbands, custom branded seam tape, woven brand and care labels." },
      { component: "Labor, Cutting & Quality Control", share: "15% - 20%", details: "Precision pattern cutting, skilled panel assembly, visor molding, steam shaping, and AQL 2.5 final inspection." }
    ],
    table3Title: "3. Volume Discount & Economy of Scale Tiers",
    table3Intro: "How production run size directly impacts manufacturing costs at our Baoding facility.",
    tiers: [
      { qty: "200 Pcs (Base MOQ)", factor: "Baseline FOB ($1.00x)", benefit: "Ideal for boutique streetwear drops and seasonal testing with low inventory risk." },
      { qty: "500 Pcs", factor: "-12% to -18%", benefit: "Amortizes embroidery machine setup and pattern digitizing; optimal balance for core collections." },
      { qty: "1,000 Pcs", factor: "-20% to -28%", benefit: "Fabric bought in bulk mill rolls; continuous machine gang runs reduce labor cost per unit." },
      { qty: "5,000+ Pcs", factor: "-30% to -40%", benefit: "Dedicated manufacturing line allocation, custom fabric lab-dips included, high-efficiency container shipping." }
    ],
    brandingTitle: "4. Custom Branding & Technique Surcharges",
    branding: [
      { technique: "Flat Direct Embroidery", cost: "Included (up to 10k stitches)", note: "Clean, sharp lettering and logos across front or side panels." },
      { technique: "3D Puff Embroidery", cost: "+$0.35 - $0.65 / unit", note: "High-density EVA foam underlay for raised athletic lettering." },
      { technique: "Debossed PU / Genuine Leather Patch", cost: "+$0.50 - $0.90 / unit", note: "Laser cut with perimeter stitch for heritage and outdoor styling." },
      { technique: "High-Definition Damask Woven Label", cost: "+$0.15 - $0.30 / unit", note: "Foldover cuff clamp label for beanies or rear closure tag." },
      { technique: "Screen-Printed Branded Seam Tape", cost: "+$0.12 - $0.25 / unit", note: "Covers all 6 internal crown seams with recurring brand typography." },
      { technique: "Laser Cut Side Ventilation Panels", cost: "+$0.40 - $0.75 / unit", note: "Computer-controlled geometric air-flow holes for athletic caps." }
    ],
    faqs: [
      {
        q: "What is the true starting cost for 200 custom embroidered hats?",
        a: "For 200 standard structured cotton twill caps with custom 3D front embroidery and woven sweatband label, total production cost typically ranges from $700 to $960 USD ($3.50 - $4.80 per cap) FOB China, excluding international courier/sea shipping."
      },
      {
        q: "Why is the MOQ set strictly at 200 pieces?",
        a: "Our facility runs 100+ Japanese Barudan multi-head automated embroidery machines. A 200-piece production run ensures optimal fabric cutting yields from standard textile bolts and amortizes thread setup time without excessive overhead."
      },
      {
        q: "How much does physical pre-production sampling cost?",
        a: "Pre-production samples typically cost $50 - $80 USD depending on logo complexity, which includes full digitizing, fabric preparation, and photo/video proofing. Sample fees are 100% credited back toward your bulk invoice once the 200+ unit order is confirmed."
      },
      {
        q: "What payment terms and buyer protections are accepted?",
        a: "We accept T/T bank transfer (30% deposit upon order confirmation, 70% balance before shipping upon passing photo/video inspection), secure international escrow, and Western Union for rapid sample runs."
      }
    ]
  },
  es: {
    hero: {
      badge: "Métricas de Costos 2026 · Datos Reales Directos de Fábrica",
      title: "Índice de Costos de Fabricación de Gorras 2026",
      accent: "Guía de Precios al por Mayor",
      subtitle: "Economía de producción transparente para marcas de ropa urbana, corporativas y distribuidores internacionales. Desglose detallado de precios FOB por tipos de tejido, bordado Barudan, volúmenes (MOQ 200) y tiempos de entrega.",
      quickSummaryTitle: "Resumen Ejecutivo y Métricas Clave",
      quickSummary: "En 2026, la fabricación de gorras personalizadas al por mayor en China se sitúa entre $3.20 y $7.80 USD por unidad FOB para pedidos mínimos de 200 piezas. Las gorras básicas de sarga de algodón representan la escala de entrada ($3.20 - $4.80), mientras que el tejido de pana gruesa de 8 cordones y las gorras de golf con perforación láser se ubican en la escala superior ($4.50 - $7.80). Aumentar el volumen de 200 a 1,000 unidades reduce el costo por unidad entre un 22% y un 28% gracias a la optimización de corte y amortización en líneas de bordado Barudan."
    },
    stats: [
      { value: "$3.20 - $7.80", label: "Rango de Precios FOB" },
      { value: "200 Uds", label: "Cantidad Mínima Estricta (MOQ)" },
      { value: "7 Días", label: "Tiempo de Muestra Física" },
      { value: "15-20 Días", label: "Plazo de Producción en Masa" }
    ],
    table1Title: "1. Precios de Referencia por Categoría 2026 (FOB China)",
    table1Intro: "Costos unitarios estimados para pedidos base de 200 unidades con bordado frontal estándar, etiqueta de sudadera y etiqueta colgante de marca.",
    categories: [
      { name: "Gorra Dad Hat Clásica de 6 Paneles", range: "$3.20 - $4.80", moq: "200 uds", fabric: "100% Sarga de Algodón Chino", features: "Corona suave no estructurada, hebilla de latón, visera curva" },
      { name: "Gorra A-Frame de 5 Paneles Pesada", range: "$3.80 - $5.60", moq: "200 uds", fabric: "Algodón Pesado 280gsm", features: "Corona alta estructurada con entretela, cierre snapback" },
      { name: "Gorra Trucker Clásica con Malla", range: "$3.50 - $5.20", moq: "200 uds", fabric: "Frontal Algodón / Malla Poliéster", features: "Malla de nailon resistente, badana acolchada, snapback" },
      { name: "Gorra de Pana Gruesa Vintage de 8 Cordones", range: "$4.50 - $6.80", moq: "200 uds", fabric: "100% Algodón Pana 8-Wale", features: "Textura gruesa, bordado reforzado Tatami, hebilla metálica" },
      { name: "Gorra de Golf de Rendimiento DWR Láser", range: "$5.20 - $7.80", moq: "200 uds", fabric: "Nailon Elástico Impermeable", features: "Ventilación lateral perforada a láser, banda antisudor, cierre de silicona" },
      { name: "Gorra Snapback Urbana Visera Plana", range: "$3.90 - $5.80", moq: "200 uds", fabric: "Mezcla Acrílico / Lana", features: "Visera plana rígida, bajo visera en contraste, corona alta" },
      { name: "Gorro Pescador Bucket Hat DWR de Ala Ancha", range: "$4.20 - $6.50", moq: "200 uds", fabric: "Nailon Ripstop Ligero", features: "Cordón ajustable con tanca, costuras reforzadas en ala" },
      { name: "Gorro Beanie Tejido de Invierno (Lana / Acrílico)", range: "$3.80 - $7.50", moq: "200 uds", fabric: "Acrílico / Mezcla Lana / Satén", features: "Tejido acanalado 5GG/7GG, doble vuelta, parche o bordado" }
    ],
    table2Title: "2. Desglose de Costos de Materiales (BOM)",
    table2Intro: "Conocer la distribución exacta de costos permite optimizar su ficha técnica manteniendo la máxima calidad.",
    bom: [
      { component: "Tejido Principal y Forro", share: "35% - 42%", details: "Sarga de algodón peinado, pana gruesa, nailon técnico DWR o hilados con lana merino." },
      { component: "Bordado y Personalización", share: "20% - 28%", details: "Digitalización de puntadas, tiempo en máquinas Barudan, espuma 3D y consumo de hilo." },
      { component: "Herrajes y Cierres", share: "10% - 15%", details: "Hebillas de latón envejecido, cierres plásticos snapback de 7 orificios y correas de nailon." },
      { component: "Banda Antisudor y Cintas Internas", share: "8% - 12%", details: "Bandas de sudor acolchadas, cintas interiores personalizadas y etiquetas tejidas." },
      { component: "Mano de Obra y Control de Calidad", share: "15% - 20%", details: "Corte de patrones de precisión, ensamblaje de paneles, moldeado a vapor e inspección AQL 2.5." }
    ],
    table3Title: "3. Descuentos por Escala y Volumen de Producción",
    table3Intro: "Impacto del tamaño del lote en el costo unitario de fabricación en nuestra planta de Baoding.",
    tiers: [
      { qty: "200 Uds (MOQ Base)", factor: "FOB Base ($1.00x)", benefit: "Ideal para lanzamientos de colecciones cápsula y prueba de mercado con bajo inventario." },
      { qty: "500 Uds", factor: "-12% a -18%", benefit: "Amortiza la puesta a punto de bordado y corte; equilibrio óptimo para marcas consolidadas." },
      { qty: "1,000 Uds", factor: "-20% a -28%", benefit: "Compra de rollos textiles completos; producción continua y reducción del costo laboral unitario." },
      { qty: "5,000+ Uds", factor: "-30% a -40%", benefit: "Asignación de líneas dedicadas, tintura Pantone personalizada y envíos marítimos en contenedor." }
    ],
    brandingTitle: "4. Costos Adicionales de Técnicas de Marca",
    branding: [
      { technique: "Bordado Plano Directo", cost: "Incluido (hasta 10.000 puntadas)", note: "Letras y logotipos limpios en paneles frontales o laterales." },
      { technique: "Bordado 3D en Relieve (Puff)", cost: "+$0.35 - $0.65 / unidad", note: "Espuma EVA de alta densidad para dar volumen y relieve deportivo." },
      { technique: "Parche de Cuero Grabado con Láser", cost: "+$0.50 - $0.90 / unidad", note: "Corte láser y cosido perimetral para estética vintage y outdoor." },
      { technique: "Etiqueta Tejida Damasco de Alta Definición", cost: "+$0.15 - $0.30 / unidad", note: "Etiqueta plegada en el borde para gorros tejidos o ajuste trasero." },
      { technique: "Cinta Interior de Costura Impresa", cost: "+$0.12 - $0.25 / unidad", note: "Cubre las 6 costuras internas de la corona con tipografía de su marca." },
      { technique: "Ventilación Perforada con Láser", cost: "+$0.40 - $0.75 / unidad", note: "Orificios geométricos cortados por ordenador para gorras deportivas." }
    ],
    faqs: [
      {
        q: "¿Cuál es el costo real de fabricar 200 gorras personalizadas?",
        a: "Para 200 gorras estructuradas de sarga con bordado 3D frontal y etiqueta interior personalizada, el costo de producción oscila entre $700 y $960 USD ($3.50 - $4.80 por gorra) FOB China, sin incluir flete internacional."
      },
      {
        q: "¿Por qué el pedido mínimo está fijado en 200 unidades?",
        a: "Nuestra fábrica opera más de 100 máquinas japonesas Barudan. Un lote de 200 piezas optimiza el rendimiento del tejido en rollos estándar y amortiza el tiempo de calibración sin encarecer el producto."
      },
      {
        q: "¿Cuánto cuesta la muestra física de preproducción?",
        a: "El desarrollo de una muestra física ronda entre $50 y $80 USD según la complejidad, e incluye digitalización y fotos de aprobación. Este importe se descuenta al 100% de la factura del pedido masivo una vez confirmado."
      },
      {
        q: "¿Cuáles son las condiciones de pago aceptadas?",
        a: "Aceptamos transferencia bancaria T/T (30% de anticipo y 70% antes del embarque tras aprobación por foto/video), custodia comercial internacional segura y Western Union para muestras rápidas."
      }
    ]
  }
};

export default function CustomHatCostIndexPage() {
  const lang = useLang();
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en;

  const handleWhatsApp = (sectionName: string) => {
    trackWhatsAppClick({
      button: "cost_index_cta",
      label: `Cost Index 2026: ${sectionName}`,
    });
    const isEs = lang === "es";
    const text = encodeURIComponent(
      isEs
        ? "¡Hola Baoding Junyang! He revisado el Índice de Costos de Fabricación 2026 y me gustaría solicitar una cotización formal para nuestro pedido (MOQ 200 uds)."
        : "Hi Baoding Junyang! I reviewed your 2026 Hat Manufacturing Cost Index and would like to request an official factory quote for our production run (MOQ 200pcs)."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
          </Link>
          <NavProductsMenu />
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleWhatsApp("Top Header")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition shadow-sm"
            >
              <MessageCircle size={15} />
              <span>{lang === "es" ? "WhatsApp Directo" : "WhatsApp Factory"}</span>
            </button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 border-b border-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
            {c.hero.badge}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            {c.hero.title} <span className="text-amber-400">{c.hero.accent}</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            {c.hero.subtitle}
          </p>

          {/* Quick Summary / Answer Block for AEO / AI Quotes */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 text-left max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-amber-400" size={20} />
              <h2 className="text-amber-400 font-black text-sm uppercase tracking-wider">
                {c.hero.quickSummaryTitle}
              </h2>
            </div>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              {c.hero.quickSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {c.stats.map((s, i) => (
            <div key={i} className="p-2">
              <p className="text-2xl md:text-3xl font-black text-amber-400 mb-1">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Factory Verification Banner */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/site/factory-barudan-embroidery-line.jpg"
                  alt="Barudan Automated Multi-Head Embroidery Line"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-black mb-1">
                  {lang === "es" ? "Líneas de Bordado Barudan" : "Automated Barudan Lines"}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === "es" ? "Más de 100 cabezales japoneses de alta precisión con registro milimétrico." : "100+ Japanese high-precision embroidery heads for 3D puff and Tatami flat stitching."}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/site/factory-cap-stitching-sewing.jpg"
                  alt="Precision Visor and Crown Assembly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-black mb-1">
                  {lang === "es" ? "Costura y Ensamblaje de Paneles" : "Skilled Crown Assembly"}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === "es" ? "Costura de 6 paneles y fijación de visera con acabado industrial impecable." : "Handcrafted panel alignment and curved visor stitching by 200+ seasoned artisans."}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/site/factory-assembly-workshop-hall.png"
                  alt="50,000 sqm Manufacturing Workshop Floor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-black mb-1">
                  {lang === "es" ? "Planta de 50.000㎡ y Control AQL" : "50,000㎡ Facility & AQL 2.5"}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === "es" ? "Inspección de preembarque, planchado a vapor y empaque en cajas reforzadas." : "Dedicated staging bays, steam shaping machines, and final pre-shipment inspection."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Category Pricing Matrix */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3">
              {c.table1Title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.table1Intro}
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-5">{lang === "es" ? "Modelo / Silueta" : "Headwear Style"}</th>
                  <th className="py-4 px-5">{lang === "es" ? "Rango FOB (MOQ 200)" : "FOB Range (MOQ 200)"}</th>
                  <th className="py-4 px-5">{lang === "es" ? "Tejido Principal" : "Primary Material"}</th>
                  <th className="py-4 px-5">{lang === "es" ? "Características Clave" : "Specifications"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {c.categories.map((cat, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition">
                    <td className="py-4 px-5 font-bold text-black">{cat.name}</td>
                    <td className="py-4 px-5 font-black text-emerald-600 whitespace-nowrap">{cat.range}</td>
                    <td className="py-4 px-5 text-gray-600 text-xs">{cat.fabric}</td>
                    <td className="py-4 px-5 text-gray-600 text-xs">{cat.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Bill of Materials Breakdown */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3">
              {c.table2Title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.table2Intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.bom.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                <span className="text-2xl font-black text-slate-900 mb-2 block">{b.share}</span>
                <h3 className="font-bold text-base text-black mb-2">{b.component}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{b.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Volume Discount Tiers */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3">
              {c.table3Title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.table3Intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.tiers.map((t, i) => (
              <div key={i} className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full mb-4">
                    {t.qty}
                  </span>
                  <p className="text-2xl font-black text-amber-400 mb-2">{t.factor}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{t.benefit}</p>
                </div>
                <button
                  onClick={() => handleWhatsApp(`Tier: ${t.qty}`)}
                  className="w-full text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
                >
                  {lang === "es" ? "Cotizar Volumen" : "Inquire Tier"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Branding Adders Table */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3">
              {c.brandingTitle}
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-5">{lang === "es" ? "Técnica de Marca" : "Branding Technique"}</th>
                  <th className="py-4 px-5">{lang === "es" ? "Sobrecosto Unitario" : "Factory Adder (FOB)"}</th>
                  <th className="py-4 px-5">{lang === "es" ? "Recomendación de Aplicación" : "Application & Best For"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {c.branding.map((brand, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition">
                    <td className="py-4 px-5 font-bold text-black">{brand.technique}</td>
                    <td className="py-4 px-5 font-bold text-emerald-600 whitespace-nowrap">{brand.cost}</td>
                    <td className="py-4 px-5 text-gray-600 text-xs">{brand.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-10 text-center">
            {lang === "es" ? "Preguntas Frecuentes sobre Costos y Producción" : "Frequently Asked Questions About Hat Costs"}
          </h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200/80 p-6 md:p-7">
                <h3 className="font-bold text-base md:text-lg text-black mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-4 bg-slate-950 text-white text-center border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            {lang === "es" ? "¿Listo para Cotizar su Colección?" : "Ready to Cost Your Collection?"}
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
            {lang === "es"
              ? "Envíenos su diseño o tech pack y reciba una cotización formal FOB con desglose detallado en menos de 12 horas."
              : "Submit your tech pack or artwork for a comprehensive factory quotation with exact BOM breakdowns within 12 hours."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleWhatsApp("Bottom CTA")}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle size={20} />
              <span>{lang === "es" ? "Consultar por WhatsApp (Rápido)" : "Chat on WhatsApp (Fast Quote)"}</span>
            </button>
            <Link
              href={`/${lang}/#inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-base transition border border-white/20"
            >
              <Mail size={20} />
              <span>{lang === "es" ? "Enviar Formulario de Especificaciones" : "Send Tech Pack & Specs"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 px-4 border-t border-gray-900 text-center text-xs">
        <p className="font-bold text-gray-400 mb-2">Baoding Junyang Hat Manufacturing Co., Ltd.</p>
        <p>© 2026 BD Hats. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar pageName="Custom Hat Cost Index 2026" />
    </main>
  );
}
