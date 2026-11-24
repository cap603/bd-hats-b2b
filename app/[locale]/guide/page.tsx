"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";

const SECTIONS_DATA = {
  en: [
    {
      id: "factory-selection",
      title: "1. How to Vet a Custom Hat Factory in China: 10-Point Checklist",
      content:
        "Selecting the right manufacturing partner is the single most critical decision in your custom headwear project. Intermediaries and trading agents often markup costs by 30–50% while obscuring production delays. A genuine manufacturer operates dedicated cutting, embroidery, and assembly lines. At Baoding Junyang, our specialized facility in Baoding, Hebei houses 100+ precision Japanese Barudan multi-head embroidery machines, supported by 200+ seasoned tailors producing over 5 million caps annually.",
      tips: [
        "Demand verifiable third-party facility audits: look for SGS, BSCI, or ISO 9001:2015 inspection reports",
        "Request real-time live video calls from the factory floor showing active Barudan embroidery lines",
        "Verify machine infrastructure: high-density 3D puff embroidery requires industrial multi-head machinery (e.g., Barudan / Tajima), not domestic single-needle setups",
        "Require in-house needle detection (metal detector conveyor) to ensure zero broken needle fragments in finished goods",
        "Confirm raw material compliance: ensure fabrics meet REACH, RoHS, OEKO-TEX standard 100, and CPSIA safety limits",
        "Check manufacturer operational longevity: 12+ years of continuous operation demonstrates fiscal stability and supply chain resilience"
      ]
    },
    {
      id: "sample-approval",
      title: "2. The Pre-Production Sample Approval Protocol",
      content:
        "Never commit to bulk mass production without holding a physical pre-production sample (PPS) in your hands. Digital mockups hide crucial structural nuances, such as crown profile height, visor curvature, and stitch column density. Our structured sampling protocol delivers an exact physical sample in 7 business days, allowing complete tactile and dimensional verification before bulk fabric cutting begins.",
      tips: [
        "Step 1 — Vector Artwork Review: submit 1:1 scale AI or PDF files with Pantone TCX / PMS color callouts",
        "Step 2 — Embroidery Digitizing & Strike-off: our engineers generate DST stitch files and run initial test stitch-outs",
        "Step 3 — 7-Day Physical Prototype: we build the complete cap including buckram front, sweatband, and custom closure",
        "Step 4 — High-Resolution Media Proof: we send 4K macro photos and 360-degree video inspection before air courier dispatch",
        "Step 5 — Physical Sign-Off: review crown symmetry, visor curve, closure tension, and embroidery loft in person",
        "Sample fee policy: prototype samples are available for 1–5 pieces; 100% of the sample cost is credited back on bulk orders of 500+ pieces"
      ]
    },
    {
      id: "embroidery-types",
      title: "3. Embroidery Techniques & Branding Constraints",
      content:
        "Your branding execution defines the perceived retail value of your custom headwear. High-density 3D puff embroidery uses high-grade EVA foam underneath dense satin stitches for a raised 3D effect — ideal for bold streetwear wordmarks. Flat direct embroidery delivers crisp, legible lettering down to 4mm for intricate corporate emblems. For complex artwork with gradients or fine serifs, woven or sublimated patches provide photographic detail.",
      tips: [
        "3D Puff Embroidery: requires minimum 5mm stroke width and cannot resolve fine text under 6mm tall",
        "Flat Embroidery: best for intricate crests, small secondary logos, side panel embroidery, and rear arch lettering",
        "Mesh Back Panels: cannot receive direct needle embroidery; must use woven or embroidered patches sewn onto mesh",
        "Front Panel Seam: avoid placing delicate logos across the front center seam of 5-panel or 6-panel caps without stitch reinforcement",
        "Thread selection: use high-sheen 100% polyester embroidery thread with colorfastness rating ≥4.5 against UV and sweat"
      ]
    },
    {
      id: "moq-pricing",
      title: "4. Understanding Wholesale MOQs & Tiered FOB Economics",
      content:
        "Factory Minimum Order Quantities (MOQs) exist to balance computer embroidery machine setup times, fabric mill dyeing minimums, and manual assembly line balancing. Our standard production MOQ is 200 pieces per style and colorway. This allows automated embroidery lines to run cost-effectively while offering emerging brands direct access to factory-floor FOB rates ($3.50 – $7.00/pc).",
      tips: [
        "Why 200 pcs: sets up 100-head Barudan machines efficiently without excessive setup waste",
        "Trial Orders: prototype and promotional micro-runs of 1–5 pieces available via dedicated sample room lines",
        "Volume Discount Curves: significant price breaks occur at 500 pcs (sample refund threshold), 1,000 pcs, and 5,000+ container scales",
        "Color Splits: multiple colorways possible under the same embroidery tooling if thread colors remain constant",
        "Transparent Itemized Quotes: our quotations break down base fabric, embroidery stitch count, trims, and master export carton packaging"
      ]
    },
    {
      id: "compliance-safesourcing",
      title: "5. International Trade Compliance & Safe Sourcing Protocols",
      content:
        "International procurement carries real compliance and financial risks. When importing headwear into the United States and European Union, buyers must adhere to strict customs classifications and FTC textile labeling guidelines. Furthermore, overseas escrow safeguards like Alibaba Trade Assurance protect your capital against quality deviations and shipping delays.",
      tips: [
        "US Customs Classification: baseball caps and headwear generally classify under HTS code 6505.00",
        "FTC Labeling Requirements: caps must carry permanent inner care labels declaring exact fiber content (e.g. 100% Cotton) and Country of Origin (Made in China)",
        "Payment Protection: for first-time buyers, we fully support Alibaba Trade Assurance with 100% payment escrow held until bill of lading release",
        "Pre-Shipment Inspection: independent third-party QC (SGS, Intertek, QIMA) welcomed before final balance payment",
        "Logistics Balance: express air delivery takes 5–8 days for urgent launches; sea freight takes 25–35 days for container cost optimization"
      ]
    }
  ],
  es: [
    {
      id: "factory-selection",
      title: "1. Cómo Evaluar una Fábrica de Gorras en China: 10 Verificaciones Clave",
      content:
        "Elegir el socio de fabricación adecuado es la decisión más crítica en su proyecto de gorras personalizadas. Los intermediarios y agentes suelen encarecer los costes un 30–50% y ocultar retrasos. Un fabricante auténtico opera sus propias líneas de corte, bordado y confección. En Baoding Junyang, nuestras instalaciones en Baoding, Hebei cuentan con más de 100 máquinas japonesas Barudan y más de 200 sastres especializados que producen más de 5 millones de gorras al año.",
      tips: [
        "Exija auditorías independientes: verifique informes de inspección SGS, BSCI o ISO 9001:2015",
        "Solicite videollamadas en vivo desde la planta de producción para comprobar las máquinas Barudan en funcionamiento",
        "Verifique la infraestructura de maquinaria: el bordado 3D puff requiere maquinaria industrial multicabezal, no máquinas domésticas",
        "Exija detección de agujas interna (detector de metales continuo) para garantizar cero restos metálicos en el producto final",
        "Confirme el cumplimiento de materias primas: telas conforme a REACH, RoHS, OEKO-TEX Standard 100 y límites CPSIA",
        "Compruebe la trayectoria: más de 12 años de fabricación ininterrumpida demuestran solidez financiera y fiabilidad de suministro"
      ]
    },
    {
      id: "sample-approval",
      title: "2. Protocolo de Aprobación de Muestra Pre-Producción",
      content:
        "Nunca autorice la producción en masa sin tener una muestra física previa en sus manos. Los diseños digitales no reflejan la altura de copa, la curva de la visera ni la densidad real de puntada. Nuestro protocolo entrega una muestra física en 7 días laborables para validar tacto y dimensiones antes de iniciar el corte de tela en volumen.",
      tips: [
        "Paso 1 — Revisión Vectorial: envíe archivos AI o PDF a escala 1:1 con referencias de color Pantone TCX o PMS",
        "Paso 2 — Digitalizado y Prueba de Bordado: generamos archivos DST y realizamos pruebas de puntada en tejido real",
        "Paso 3 — Prototipo Físico en 7 Días: confeccionamos la gorra completa con entretela frontal, badana y cierre",
        "Paso 4 — Muestra Multimedia 4K: enviamos fotografías macro y vídeo 360 grados antes del despacho por mensajería",
        "Paso 5 — Validación Física: compruebe simetría de copa, curvatura de visera, ajuste del cierre y relieve del bordado",
        "Política de muestras: disponibles de 1 a 5 piezas; el 100% del coste de muestra se reintegra en pedidos de 500+ piezas"
      ]
    },
    {
      id: "embroidery-types",
      title: "3. Técnicas de Bordado y Límites de Diseño",
      content:
        "La ejecución del bordado define el valor percibido de sus gorras. El bordado 3D puff de alta densidad utiliza espuma EVA bajo puntadas satén tupidas para un efecto en relieve, ideal para marcas de streetwear. El bordado plano ofrece trazos nítidos hasta 4mm para emblemas corporativos complejos. Para degradados o detalles fotográficos, los parches tejidos o sublimados son la solución recomendada.",
      tips: [
        "Bordado 3D Puff: requiere un ancho de trazo mínimo de 5mm y no admite texto inferior a 6mm de altura",
        "Bordado Plano: idóneo para escudos detallados, logotipos laterales secundarios y texto en arco trasero",
        "Malla Trasera: no admite bordado directo con aguja; se deben utilizar parches tejidos o bordados cosidos a la malla",
        "Costura Central Frontal: evite colocar logotipos finos sobre la costura central en gorras de 5 o 6 paneles sin refuerzo previo",
        "Calidad de hilo: utilizamos hilo 100% poliéster de alto brillo con solidez de color ≥4.5 frente a UV y sudor"
      ]
    },
    {
      id: "moq-pricing",
      title: "4. Comprensión de MOQs al por Mayor y Precios Escalonados FOB",
      content:
        "Los pedidos mínimos de fábrica (MOQ) existen para amortizar la preparación de máquinas de bordado, los tintes de tejido y el equilibrado de líneas de confección. Nuestro MOQ estándar es de 200 piezas por estilo y combinación de color. Esto permite operar con eficiencia industrial y ofrecer precios directos de fábrica ($3.50 – $7.00 FOB).",
      tips: [
        "Por qué 200 piezas: permite programar cabezales Barudan eficientemente sin mermas desproporcionadas",
        "Series de Prueba: prototipos y pedidos de prueba de 1 a 5 piezas disponibles a través de nuestra sala de muestras",
        "Escalones de Descuento: reducciones significativas de precio a partir de 500 pzs (reintegro de muestra), 1.000 pzs y escala contenedor 5.000+ pzs",
        "Variantes de Color: es posible producir varios colores bajo el mismo utillaje si se mantienen los colores de hilo",
        "Presupuestos Desglosados: cotizaciones con detalle de tejido base, número de puntadas, fornituras y embalaje de exportación"
      ]
    },
    {
      id: "compliance-safesourcing",
      title: "5. Cumplimiento de Comercio Internacional y Compra Segura",
      content:
        "La importación internacional exige rigor documental. Al importar gorras a Estados Unidos y la Unión Europea, los compradores deben cumplir con las clasificaciones arancelarias y las normas de etiquetado textil de la FTC. Asimismo, mecanismos de depósito como Alibaba Trade Assurance protegen su capital frente a discrepancias de calidad o plazos.",
      tips: [
        "Clasificación Arancelaria EEUU: las gorras y artículos de sombrerería clasifican bajo el código HTS 6505.00",
        "Normativa de Etiquetado FTC: las gorras deben incluir etiqueta interna permanente con composición de fibra (ej. 100% Cotton) y país de origen (Made in China)",
        "Garantía Comercial: para compradores noveles, admitimos Alibaba Trade Assurance con depósito en custodia hasta la emisión del conocimiento de embarque",
        "Inspección Previa al Embarque: aceptamos inspecciones de terceros independientes (SGS, Intertek, QIMA) antes del abono del saldo final",
        "Estrategia Logística: flete aéreo urgente en 5–8 días para lanzamientos; flete marítimo en 25–35 días para optimización de costes en contenedor"
      ]
    }
  ]
};

export default function GuidePage() {
  const lang = useLang();
  const sections = SECTIONS_DATA[lang === "es" ? "es" : "en"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline":
      lang === "es"
        ? "Guía Completa B2B de Fabricación de Gorras Personalizadas"
        : "Complete B2B Guide to Custom Hat Manufacturing",
    "description":
      lang === "es"
        ? "Guía para compradores B2B que compran gorras en China: evaluación de fábricas, técnicas de bordado, negociación de MOQ y control de calidad."
        : "Expert guide for B2B buyers sourcing custom caps from China. Covers factory verification, embroidery techniques, MOQ negotiation, and QC protocols.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd.", "logo": { "@type": "ImageObject", "url": "/images/brand/junyang-logo.webp" } },
    "datePublished": "2026-07-27",
    "dateModified": "2026-11-24",
    "mainEntityOfPage": `https://bdjunyang.com/${lang}/guide`
  };

  // BreadcrumbList is emitted exactly once by the <Breadcrumb /> component
  // below (locale-aware, canonical-consistent). The hardcoded block that used
  // to live here duplicated it and pointed at /guide instead of /{lang}/guide.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the real factory MOQ for custom hats in China?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Baoding Junyang, our standard production MOQ is 200 pieces per style/colorway. This threshold allows automated computer embroidery lines to run cost-effectively while giving emerging streetwear and apparel brands accessible factory-direct FOB pricing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does custom hat sampling and mass production take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-production physical samples take exactly 7 business days, including 3D digitizing and custom embroidery stitch-out. Bulk mass production takes 15 to 20 days depending on total order volume and custom trims. Express air shipping takes 5-8 days to North America and Western Europe."
        }
      },
      {
        "@type": "Question",
        "name": "How do you protect international buyers against manufacturing defects or fraud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate a 50,000 sqm SGS-audited facility with ISO 9001:2015 certification. We provide live video and photo updates at each stage (cutting, embroidery, sewing, steam ironing). For first-time buyers, we fully support Alibaba Trade Assurance and escrow terms for secure cross-border payment protection."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical FOB price range for custom baseball caps and truckers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct factory FOB prices generally range from $3.50 to $7.00 per unit, depending on fabric (heavy cotton twill, organic canvas, nylon ripstop, or vintage corduroy), panel construction, and embroidery complexity (flat vs 3D puff embroidery)."
        }
      },
      {
        "@type": "Question",
        "name": "What closure options are available for custom wholesale caps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 7-hole plastic snapbacks, matching fabric straps with antique brass slide buckles, genuine leather straps with embossed metal buckles, nylon webbing with quick-release clips, and elastic stretch-fit bands."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle complete private label packaging and custom inner trims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our private label turnkey service includes custom branded interior seam tape, woven or satin sweatband care labels, laser-engraved hardware, custom paper hang tags with retail barcodes, and individually sealed poly bags."
        }
      }
    ]
  };

  const FAQS = [
    {
      q: "What is the real factory MOQ for custom hats in China?",
      a: "Our standard production MOQ is 200 pieces per style/colorway. This threshold allows automated computer embroidery lines to run cost-effectively while giving emerging streetwear and apparel brands accessible factory-direct FOB pricing."
    },
    {
      q: "How long does custom hat sampling and mass production take?",
      a: "Pre-production physical samples take exactly 7 business days, including 3D digitizing and custom embroidery stitch-out. Bulk mass production takes 15 to 20 days depending on total order volume and custom trims. Express air shipping takes 5-8 days to North America and Western Europe."
    },
    {
      q: "How do you protect international buyers against manufacturing defects or fraud?",
      a: "We operate a 50,000 sqm SGS-audited facility with ISO 9001:2015 certification. We provide live video and photo updates at each stage (cutting, embroidery, sewing, steam ironing). For first-time buyers, we fully support Alibaba Trade Assurance and escrow terms for secure cross-border payment protection."
    },
    {
      q: "What is the typical FOB price range for custom baseball caps and truckers?",
      a: "Direct factory FOB prices generally range from $3.50 to $7.00 per unit, depending on fabric (heavy cotton twill, organic canvas, nylon ripstop, or vintage corduroy), panel construction, and embroidery complexity (flat vs 3D puff embroidery)."
    },
    {
      q: "What closure options are available for custom wholesale caps?",
      a: "We offer 7-hole plastic snapbacks, matching fabric straps with antique brass slide buckles, genuine leather straps with embossed metal buckles, nylon webbing with quick-release clips, and elastic stretch-fit bands."
    },
    {
      q: "Can you handle complete private label packaging and custom inner trims?",
      a: "Yes. Our private label turnkey service includes custom branded interior seam tape, woven or satin sweatband care labels, laser-engraved hardware, custom paper hang tags with retail barcodes, and individually sealed poly bags."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG Logo" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black tracking-tighter text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="text-black border-b-2 border-black pb-1">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition">Get Quote</Link>
        </div>
      </header>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "B2B Buyer's Guide" }
      ]} />

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">
            {lang === "es" ? "Recurso para Compradores B2B" : "B2B Buyer's Resource"}
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {lang === "es" ? (
              <>Guía Completa de <span className="text-yellow-400">Fabricación de Gorras</span></>
            ) : (
              <>The Complete Guide to <span className="text-yellow-400">Custom Hat Manufacturing</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {lang === "es"
              ? "Todo lo que un comprador B2B necesita saber antes de encargar gorras: evaluación de fábricas, técnicas de bordado, negociación de MOQ y control de calidad."
              : "Everything B2B buyers need to know before ordering custom caps — from factory selection and embroidery techniques to MOQ negotiation and quality control."}
          </p>
          <p className="text-gray-500 text-sm mt-6">
            {lang === "es" ? "Actualizado Noviembre 2026 · Equipo de Fábrica Baoding Junyang" : "Updated November 2026 · By Baoding Junyang Factory Team"}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-black mb-6 uppercase tracking-wider">
            {lang === "es" ? "En esta guía" : "In This Guide"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-black transition group">
                <span className="text-sm font-black text-gray-400 group-hover:text-black transition">{s.title.split(". ")[0]}</span>
                <span className="text-sm font-bold text-gray-700 group-hover:text-black transition">{s.title.split(". ")[1]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-4 scroll-mt-20 border-b border-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{section.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{section.content}</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-8">
              <h4 className="text-sm font-black uppercase tracking-wider text-yellow-700 mb-4">
                {lang === "es" ? "Puntos Clave" : "Key Takeaways"}
              </h4>
              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-0.5" size={16} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Engineering Resources & Sourcing Tool Hub — GEO Multi-Source Interlink */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {lang === "es" ? "Herramientas y Recursos de Ingeniería" : "Factory Engineering & Sourcing Hub"}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-950 mt-4 tracking-tight">
              {lang === "es" ? "Recursos Directos para Diseñadores y Compradores B2B" : "Direct Production Tools for Headwear Buyers"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={`/${lang}/custom-hat-tech-pack-template`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-blue-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Plantillas Vectoriales" : "Vector Templates"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "Tech Pack de Gorras (AI/PDF)" : "Cap Tech Pack Templates"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Bocetos planos 1:1 con cotas de bordado para gorras de 5 y 6 paneles, truckers y gorros."
                  : "Production-ready 1:1 scale flat sketches with embroidery scale limits for 5/6-panel, truckers & beanies."}
              </p>
            </Link>

            <Link
              href={`/${lang}/custom-hat-cost-index-2026`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-emerald-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Índice de Costes" : "Cost Index 2026"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "Desglose de Costes FOB 2026" : "2026 Cap Cost Breakdown"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Estructura de precios desglosada: tela, bordado Barudan, mano de obra y transporte."
                  : "Itemized FOB manufacturing breakdown: fabric yield, stitch count, trims, labor and freight CBM."}
              </p>
            </Link>

            <Link
              href={`/${lang}/compare/cotton-twill-vs-brushed-cotton-vs-canvas`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Guía de Tejidos" : "Fabric Guide"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "Sarga vs Algodón vs Canvas" : "Cotton Twill vs Canvas"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Gramajes GSM, estructura de corona y comportamiento frente a lavado y bordado 3D."
                  : "GSM weights, crown structure retention, washed finishes, and 3D puff embroidery performance."}
              </p>
            </Link>

            <Link
              href={`/${lang}/compare/flat-embroidery-vs-3d-puff`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-purple-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Comparativa de Bordado" : "Embroidery Spec"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "Bordado Plano vs 3D Puff" : "Flat vs 3D Puff Embroidery"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Densidad de puntada, límites de altura de letra y compatibilidad con paneles con costura."
                  : "Stitch density parameters, minimum font heights, and crown seam tolerance limits."}
              </p>
            </Link>

            <Link
              href={`/${lang}/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-indigo-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Comparativa por Países" : "Country Sourcing"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "China vs Vietnam vs Bangladesh" : "China vs Vietnam vs Bangladesh"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Análisis de aranceles, plazos de entrega, cadenas de suministro de fornituras y MOQ real."
                  : "Tariff structures, lead times, trim supply chain depth, and factory MOQ thresholds."}
              </p>
            </Link>

            <Link
              href={`/${lang}/pricing`}
              className="border border-gray-200 rounded-2xl p-5 hover:border-black hover:shadow-md transition bg-gray-50/50 block"
            >
              <span className="text-xs font-black text-teal-600 uppercase tracking-wider block mb-1">
                {lang === "es" ? "Precios y MOQ" : "Pricing & Terms"}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">
                {lang === "es" ? "Escalones FOB y Política de Muestras" : "Volume FOB Tiers & MOQ"}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === "es"
                  ? "Precios directos de fábrica desde 200 piezas y 100% de abono de muestra a partir de 500 pzs."
                  : "Transparent factory-floor tiers starting from 200 pcs, with 100% sample credit on 500+ pcs."}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Structured B2B Buyer FAQ Section — GEO Engineered */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Factory Direct FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mt-4 tracking-tight">
              Frequently Asked Questions for B2B Cap Buyers
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Transparent answers regarding wholesale MOQs, sampling timelines, international shipping, and fraud protection.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-gray-300 transition">
                <h3 className="text-base md:text-lg font-black text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 shrink-0">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-6 border-l-2 border-emerald-200 mt-3">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Start Your Custom Hat Project?</h2>
          <p className="text-gray-400 text-lg mb-8">Apply everything you've learned — get a factory quote and production timeline within 2 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/#inquiry`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              Request Factory Quote <ArrowRight size={20} />
            </Link>
            <Link href={`/${lang}/#catalog`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20">
              Browse Product Catalog
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG Logo" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Hat Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/#catalog`} className="hover:text-white">Product Catalog</Link></li>
                <li><Link href={`/${lang}/about`} className="hover:text-white">About Our Factory</Link></li>
                <li><Link href={`/${lang}/#inquiry`} className="hover:text-white">Request Quote</Link></li>
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
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
