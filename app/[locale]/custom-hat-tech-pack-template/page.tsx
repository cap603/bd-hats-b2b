"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Download,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Ruler,
  Eye,
  Check,
} from "lucide-react";
import { useLang } from "../../lib/i18n";
import { trackWhatsAppClick } from "../../lib/tracking";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { Breadcrumb } from "../../components/Breadcrumb";

const WHATSAPP_NUMBER = "8615933930830";

const CONTENT = {
  en: {
    hero: {
      badge: "Free B2B Design Asset · AI / PDF / EPS Vector Flats · Direct Factory Specs",
      title: "Custom Hat Tech Pack Template",
      accent: "& Factory Sourcing Guide",
      subtitle:
        "Download production-ready vector flat templates for 6-panel baseball caps, 5-panel campers, mesh truckers, and knit beanies. Complete with dimension callouts, stitch allowances, embroidery scale limits, and our free 2-hour engineering feasibility review.",
      quickStats: [
        { label: "Vector Silhouettes", value: "4 Core Styles" },
        { label: "File Formats", value: "AI · PDF · EPS" },
        { label: "Crown & Visor Cotes", value: "Exact 1:1 Scale" },
        { label: "Factory Review", value: "Free in 2 Hours" },
      ],
    },
    anatomyTitle: "1. The 6 Essential Elements of a Production-Ready Cap Tech Pack",
    anatomyIntro:
      "A complete tech pack prevents costly sample revisions and guarantees your custom hats match your design vision on the very first round. Here is what our pattern engineers require:",
    elements: [
      {
        num: "01",
        name: "Orthographic Flat Sketches",
        desc: "2D line drawings showing front, profile side, rear closure, top bird's-eye view, and undervisor.",
        detail: "Vector black-and-white lines with clearly marked panel stitching and contrast eyelet locations.",
      },
      {
        num: "02",
        name: "Bill of Materials (BOM) & Color Codes",
        desc: "Exact fabric compositions and standardized textile color callouts for each individual component.",
        detail: "Specify Pantone TCX / TPX / PMS codes. Name fabric: 100% chino twill, 8W corduroy, or DWR nylon.",
      },
      {
        num: "03",
        name: "Critical Dimensional Measurements",
        desc: "Accurate centimeter/inch measurements for crown height, front arc, visor curve, and circumference.",
        detail: "Standard adult sizing: 58cm circumference, 16.5cm - 17.5cm crown apex, 7.0cm visor projection.",
      },
      {
        num: "04",
        name: "Branding & Embroidery Callouts",
        desc: "Exact placement coordinates, technique specification, and maximum stitch density parameters.",
        detail: "Differentiate flat direct vs 3D puff embroidery, woven clamp labels, debossed leather, or silicone badges.",
      },
      {
        num: "05",
        name: "Closure & Hardware Specifications",
        desc: "Defines the rear adjustment system, hardware finishes, and matching strap details.",
        detail: "Choose between 7-hole plastic snapback, self-fabric strap with antique brass tri-glide, or vegan leather.",
      },
      {
        num: "06",
        name: "Internal Labeling & Finishing",
        desc: "Artwork and dimensions for the internal components that define retail-grade headwear.",
        detail: "Includes custom woven sweatband label, 6-line branded seam tape (taping), and cardboard price hangtag.",
      },
    ],
    templatesTitle: "2. Download Production-Ready Vector Templates (AI / PDF / EPS)",
    templatesIntro:
      "All templates are built to true 1:1 scale with pre-set seam lines, center alignment guides, and printable spec sheets. Choose your silhouette below:",
    templates: [
      {
        id: "6-panel",
        name: "Classic 6-Panel Dad Hat / Baseball Cap",
        badge: "Most Popular · Streetwear Standard",
        specs: "58cm circumference · 16.5cm low/mid-profile crown · 7.0cm pre-curved visor · Buckle strapback",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Lifestyle streetwear, sports merch, vintage enzyme-washed collections",
      },
      {
        id: "5-panel",
        name: "5-Panel A-Frame & Camper Cap",
        badge: "Seamless Front · Bold Graphics",
        specs: "58cm circumference · 17.0cm high-profile structured crown · Flat / curved brim · Snapback closure",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Large oversized 3D puff front embroidery, printed graphic patches, outdoor camper styles",
      },
      {
        id: "trucker",
        name: "Classic 5-Panel Mesh Trucker Cap",
        badge: "Breathable Foam / Poly Mesh",
        specs: "58cm circumference · High-profile foam/cotton front · Breathable mesh back · Plastic snap",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Summer drops, beverage / brewery merchandise, motorsport and promo campaigns",
      },
      {
        id: "beanie",
        name: "Cuffed Knit Beanie (5GG / 7GG Rib)",
        badge: "Winter Warmth · Knitwear",
        specs: "21cm width × 22cm height with 7cm foldover cuff · 100% acrylic or merino wool blend",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Foldover damask woven clamp labels, front flat embroidery, jacquard knit patterns",
      },
    ],
    limitsTitle: "3. Factory Embroidery & Decoration Engineering Limits",
    limitsIntro:
      "To ensure your artwork stitches cleanly without thread fraying or fabric puckering, follow our Japanese Barudan machine tolerances:",
    limits: [
      { technique: "Front Panel 3D Puff Embroidery", maxDim: "13.0cm W × 5.5cm H", minLine: "3.0mm (0.12 in)", note: "Requires EVA foam underlay. Fine details under 3mm must be converted to flat stitch." },
      { technique: "Front Panel Flat Direct Embroidery", maxDim: "14.0cm W × 6.0cm H", minLine: "1.0mm (0.04 in)", note: "Ideal for detailed typography and crests up to 15,000 stitches." },
      { technique: "Side Panel Direct Embroidery", maxDim: "6.5cm W × 2.5cm H", minLine: "0.8mm (0.03 in)", note: "Placed 1.5cm above bottom sweatband seam to avoid needle deflection." },
      { technique: "Rear Arch Text / Logo Embroidery", maxDim: "9.0cm W × 2.0cm H", minLine: "0.8mm (0.03 in)", note: "Curved text positioned 1.0cm above the keyhole closure opening." },
      { technique: "Embossed Leather / Suede Patch", maxDim: "8.0cm W × 5.0cm H", minLine: "0.5mm stroke", note: "Perimeter satin or running stitch requires 2.5mm margin around artwork." },
      { technique: "Custom Woven Sweatband Label", maxDim: "4.5cm W × 2.5cm H", minLine: "High-density damask", note: "Folded or flat centered at rear sweatband or front left." },
    ],
    mistakesTitle: "4. Four Critical Tech Pack Mistakes That Delay Sampling",
    mistakes: [
      {
        title: "Exceeding Vertical Crown Curve Limits",
        desc: "Designing artwork taller than 6.0cm on curved front panels causes embroidery hoops to distort near the apex seam. Keep primary logos within 5.0cm - 5.5cm height for natural eye-level balance.",
      },
      {
        title: "Submitting RGB Digital Hex Codes",
        desc: "Screens display RGB light, but dye houses and thread mills operate strictly on physical Pantone (PMS) matching systems. Always specify Pantone Cotton (TCX/TPX) for fabrics and Pantone Coated (C) for inks.",
      },
      {
        title: "Omitting Internal Labeling Artwork",
        desc: "Forgetting to include sweatband label, seam tape, and hangtag vector files until sample approval causes an extra 7-day delay. Include all branding files in your initial tech pack submission.",
      },
      {
        title: "Not Specifying Buckram Interlining",
        desc: "Not clarifying whether you want a soft, floppy unstructured dad hat or a rigid, upright structured crown. We use premium fused buckram for structured caps and soft washed canvas for unstructured styles.",
      },
    ],
    reviewTitle: "5. Free 2-Hour Factory Tech Pack Review Service",
    reviewSubtitle: "Don't have a finished tech pack? Send us your sketch, logo, or reference photos.",
    reviewSteps: [
      { step: "Step 1", title: "Submit Your Materials", desc: "Send your vector logo (.AI, .EPS, .PDF) or high-res PNG along with your target cap silhouette." },
      { step: "Step 2", title: "Engineering Feasibility Check", desc: "Our pattern digitizers review stitchability, minimum line weights, fabric compatibility, and placement proportions." },
      { step: "Step 3", title: "Production Mockup & FOB Quote", desc: "Within 2 hours, receive a production-grade visual mockup and transparent FOB pricing ($3.20 - $7.80, MOQ 200)." },
    ],
    faqs: [
      {
        q: "What vector file formats do you provide in the download package?",
        a: "Our free package includes Adobe Illustrator (.AI with editable vector layers), print-ready Vector PDF with dimension callout guides, and generic EPS files compatible with CorelDraw, Affinity Designer, and Photoshop.",
      },
      {
        q: "Can you manufacture custom hats if I only have a logo and no tech pack?",
        a: "Yes! Over 60% of our streetwear and startup clients come to us with just a high-resolution logo and reference photos. Our in-house digitizing team will prepare the full production tech pack for you free of charge upon project confirmation.",
      },
      {
        q: "What is your factory Minimum Order Quantity (MOQ) for custom hats?",
        a: "Our strict factory-direct MOQ is 200 pieces per style/colorway. This guarantees optimal fabric yield from standard textile bolts and amortizes setup time on our automated Japanese Barudan embroidery machines.",
      },
      {
        q: "How fast can you deliver physical pre-production samples from a tech pack?",
        a: "Once your tech pack is approved, physical pre-production samples are completed within 7 business days. We provide comprehensive high-resolution photos and video proofing, followed by express DHL courier delivery.",
      },
      {
        q: "Can I customize internal seam tape and sweatband care labels?",
        a: "Absolutely. Full private label customization includes branded woven or satin sweatband labels, 6-line custom repeating printed seam tape, personalized cardboard hangtags, and individual moisture-proof barcode polybags.",
      },
    ],
  },
  es: {
    hero: {
      badge: "Recurso B2B Gratuito · Archivos Vectoriales AI / PDF / EPS · Especificaciones Directas de Fábrica",
      title: "Plantilla Tech Pack para Gorras",
      accent: "y Guía de Fabricación B2B",
      subtitle:
        "Descarga plantillas técnicas vectoriales 2D listas para producción: gorras de 6 paneles, 5 paneles camper, gorras trucker de malla y gorros beanie. Incluye cotas exactas, tolerancias de costura, límites de bordado y revisión técnica gratuita en 2 horas.",
      quickStats: [
        { label: "Siluetas Vectoriales", value: "4 Diseños Clave" },
        { label: "Formatos Disponibles", value: "AI · PDF · EPS" },
        { label: "Cotas de Corona y Visera", value: "Escala Real 1:1" },
        { label: "Revisión Técnica", value: "Gratis en 2 Horas" },
      ],
    },
    anatomyTitle: "1. Los 6 Elementos Esenciales de una Ficha Técnica (Tech Pack) de Gorras",
    anatomyIntro:
      "Un tech pack completo evita errores de muestreo y asegura que tus gorras coincidan exactamente con tu visión de diseño desde la primera muestra física. Esto es lo que nuestros ingenieros requieren:",
    elements: [
      {
        num: "01",
        name: "Planos Vectoriales Planos (Orthographic)",
        desc: "Vistas técnicas 2D: frontal, lateral, trasera (cierre), superior cenital y bajo visera.",
        detail: "Trazos limpios con ubicación exacta de ojales, costuras y curvatura.",
      },
      {
        num: "02",
        name: "Lista de Materiales (BOM) y Códigos Pantone",
        desc: "Composición exacta de telas y códigos de color textiles estandarizados.",
        detail: "Especifica códigos Pantone TCX / TPX. Define tela: sarga chino, pana 8W o nailon DWR.",
      },
      {
        num: "03",
        name: "Medidas y Cotas Dimensionales Críticas",
        desc: "Cotas precisas en cm: altura de corona, curvatura de visera y perímetro cefálico.",
        detail: "Talla adulta estándar: 58cm de contorno, 16.5cm - 17.5cm de corona, 7.0cm de visera.",
      },
      {
        num: "04",
        name: "Especificaciones de Bordado y Logotipos",
        desc: "Coordenadas de colocación, técnica de bordado y límites de densidad de puntada.",
        detail: "Diferencia bordado plano vs 3D puff en relieve, parches de cuero o etiquetas tejidas.",
      },
      {
        num: "05",
        name: "Sistema de Cierre y Herrajes",
        desc: "Define el cierre trasero, acabados metálicos y detalles de correa.",
        detail: "Elige entre snapback plástico de 7 agujeros, correa de tela con hebilla de latón o cuero.",
      },
      {
        num: "06",
        name: "Etiquetado Interno y Acabados Retail",
        desc: "Archivos de diseño para los componentes internos de calidad retail.",
        detail: "Incluye etiqueta tejida en badana interior, cintas de costura personalizadas y colgante exterior.",
      },
    ],
    templatesTitle: "2. Descarga Plantillas Vectoriales Listas para Producción (AI / PDF / EPS)",
    templatesIntro:
      "Todas las plantillas están dibujadas a escala 1:1 con guías de alineación central y hojas de especificaciones imprimibles. Elige tu silueta:",
    templates: [
      {
        id: "6-panel",
        name: "Gorra Clásica de 6 Paneles / Dad Hat / Béisbol",
        badge: "Más Vendida · Estándar Streetwear",
        specs: "58cm contorno · Corona baja/media 16.5cm · Visera curva 7.0cm · Cierre hebilla metálica",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Streetwear lifestyle, merchandising deportivo, colecciones vintage con lavado enzimático",
      },
      {
        id: "5-panel",
        name: "Gorra de 5 Paneles A-Frame y Camper",
        badge: "Frontal Sin Costura · Gráficos Grandes",
        specs: "58cm contorno · Corona alta estructurada 17.0cm · Visera plana/curva · Snapback",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Bordados 3D puff de gran tamaño, parches impresos y estilo outdoor camper",
      },
      {
        id: "trucker",
        name: "Gorra Trucker Clásica con Rejilla",
        badge: "Frente de Espuma / Rejilla Transpirable",
        specs: "58cm contorno · Corona alta de espuma/algodón · Espalda de malla transpirable · Snapback",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Lanzamientos de verano, merchandising para cervecerías, eventos y outdoor",
      },
      {
        id: "beanie",
        name: "Gorro de Punto con Dobladillo (Beanie)",
        badge: "Invierno · Punto Acrílico / Lana",
        specs: "21cm ancho × 22cm alto con dobladillo de 7cm · 100% acrílico o mezcla de lana merino",
        formats: "Adobe Illustrator (.AI) + Vector PDF + EPS",
        bestFor: "Etiquetas tejidas en dobladillo, bordado frontal plano y patrones jacquard",
      },
    ],
    limitsTitle: "3. Tolerancias Técnicas de Bordado y Decoración de Fábrica",
    limitsIntro:
      "Para garantizar un bordado limpio sin fruncir la tela, sigue las tolerancias de nuestras máquinas japonesas Barudan:",
    limits: [
      { technique: "Bordado Frontal 3D Puff (Relieve)", maxDim: "13.0cm Ancho × 5.5cm Alto", minLine: "3.0mm (0.12 in)", note: "Requiere base de espuma EVA. Detalles menores a 3mm deben pasar a bordado plano." },
      { technique: "Bordado Frontal Plano Directo", maxDim: "14.0cm Ancho × 6.0cm Alto", minLine: "1.0mm (0.04 in)", note: "Ideal para letras finas y escudos con hasta 15.000 puntadas." },
      { technique: "Bordado Lateral Directo", maxDim: "6.5cm Ancho × 2.5cm Alto", minLine: "0.8mm (0.03 in)", note: "Colocado a 1.5cm sobre la costura inferior de la badana para evitar desvíos." },
      { technique: "Bordado Trasero en Arco (Arriba del Cierre)", maxDim: "9.0cm Ancho × 2.0cm Alto", minLine: "0.8mm (0.03 in)", note: "Texto curvado posicionado a 1.0cm sobre la apertura del cierre trasero." },
      { technique: "Parche de Cuero PU o Natural Grabado", maxDim: "8.0cm Ancho × 5.0cm Alto", minLine: "0.5mm trazo", note: "Costura perimetral requiere 2.5mm de margen alrededor del diseño." },
      { technique: "Etiqueta Tejida Interior de Badana", maxDim: "4.5cm Ancho × 2.5cm Alto", minLine: "Damasco alta densidad", note: "Doblada o plana, cosida en la badana interior trasera o lateral." },
    ],
    mistakesTitle: "4. Cuatro Errores Comunes que Retrasan las Muestras Físicas",
    mistakes: [
      {
        title: "Superar el Límite de Altura en la Curvatura de la Corona",
        desc: "Diseños de más de 6.0cm de alto en paneles curvos sufren distorsión en la costura superior. Mantén el logo entre 5.0cm y 5.5cm para un balance visual perfecto.",
      },
      {
        title: "Enviar Códigos Hexadecimales RGB de Pantalla",
        desc: "Las pantallas usan RGB, pero las hilanderías y tintorerías trabajan con Pantone textil (TCX/TPX). Especifica siempre códigos Pantone oficiales para colores exactos.",
      },
      {
        title: "Olvidar los Diseños de Etiquetado Interior",
        desc: "Olvidar las etiquetas interiores hasta la aprobación de la muestra añade 7 días extra de retraso. Incluye todos los archivos de marca desde el primer envío.",
      },
      {
        title: "No Especificar la Estructura de la Entretela (Buckram)",
        desc: "No aclarar si deseas una gorra dad hat suave y desestructurada o una corona rígida estructurada. Usamos entretela de alta calidad para gorras rígidas.",
      },
    ],
    reviewTitle: "5. Servicio Gratuito de Revisión Técnica de Fábrica en 2 Horas",
    reviewSubtitle: "¿Aún no tienes un tech pack completo? Envíanos tu logotipo, boceto o fotos de referencia.",
    reviewSteps: [
      { step: "Paso 1", title: "Envía tus Archivos", desc: "Envía tu logo vectorial (.AI, .EPS, .PDF) o PNG de alta resolución junto con la silueta de gorra deseada." },
      { step: "Paso 2", title: "Evaluación Técnica de Fabricación", desc: "Nuestros patronistas evalúan bordabilidad, grosores mínimos, compatibilidad de tela y proporciones." },
      { step: "Paso 3", title: "Maqueta Visual y Cotización FOB", desc: "En 2 horas recibirás una maqueta técnica lista para producción y precios FOB transparentes ($3.20 - $7.80, MOQ 200)." },
    ],
    faqs: [
      {
        q: "¿Qué formatos vectoriales incluye el paquete descargable?",
        a: "Nuestro paquete gratuito incluye Adobe Illustrator (.AI con capas vectoriales editables), PDF vectorial listo para imprimir con cotas de medida, y archivos EPS compatibles con CorelDraw, Affinity Designer y Photoshop.",
      },
      {
        q: "¿Pueden fabricar gorras si solo tengo un logotipo y no tengo tech pack?",
        a: "¡Sí! Más del 60% de nuestros clientes de marcas emergentes nos contactan solo con un logotipo en alta resolución y fotos de referencia. Nuestro equipo técnico confeccionará el tech pack completo sin costo al confirmar el pedido.",
      },
      {
        q: "¿Cuál es la Cantidad Mínima de Pedido (MOQ) de fábrica?",
        a: "Nuestro MOQ estricto directo de fábrica es de 200 unidades por modelo/color. Esto garantiza un aprovechamiento óptimo de la tela y amortiza los tiempos de preparación de nuestras máquinas Barudan.",
      },
      {
        q: "¿Cuánto tardan en enviar muestras físicas basadas en el tech pack?",
        a: "Una vez aprobada la ficha técnica, las muestras de preproducción se completan en 7 días laborables. Enviamos fotos y vídeos de alta resolución antes del envío urgente por DHL.",
      },
      {
        q: "¿Es posible personalizar las cintas interiores de costura y la badana?",
        a: "Totalmente. La personalización de marca privada incluye etiquetas tejidas o de satén en la badana, cintas interiores estampadas con tu logotipo, colgantes de cartón y bolsas individuales con código de barras.",
      },
    ],
  },
};

export default function TechPackPage() {
  const lang = useLang();
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleOpenInquiryModal = (intent: string = "techpack") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-inquiry-modal", {
          detail: { intent },
        })
      );
    }
  };

  const handleWhatsAppClick = (btnName: string, label: string) => {
    trackWhatsAppClick({ button: btnName, label });
  };

  const whatsappText =
    lang === "es"
      ? "¡Hola Baoding Junyang! Me gustaría descargar el paquete vectorial Tech Pack de gorras (AI/PDF) y solicitar una revisión técnica gratuita de nuestro diseño (MOQ 200)."
      : "Hi Baoding Junyang! I would like to download the free Hat Tech Pack Vector Templates (AI/PDF) and get a free 2-hour engineering review for our custom cap program.";

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.hero.title + " " + c.hero.accent,
            description: c.hero.subtitle,
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
                url: "https://bdjunyang.com/images/brand/junyang-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://bdjunyang.com/${lang}/custom-hat-tech-pack-template`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[7.5px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                B2B Hat Engineering & Manufacturing
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-black transition">
              2026 Cost Index
            </Link>
            <NavProductsMenu />
            <Link href={`/${lang}/materials`} className="hover:text-black transition">
              Materials
            </Link>
            <NavCompareMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">
              About Factory
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenInquiryModal("techpack")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <Download size={13} />
              <span>Get Vector Pack</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_techpack_whatsapp", "TechPack Header WhatsApp")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: `/${lang}` },
          { label: "Resources", href: `/${lang}/guide` },
          { label: "Custom Hat Tech Pack Template" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white pt-16 pb-20 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles size={13} className="text-yellow-400" />
            <span>{c.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            {c.hero.title} <span className="text-yellow-400">{c.hero.accent}</span>
          </h1>

          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {c.hero.subtitle}
          </p>

          {/* Quick CTA cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => handleOpenInquiryModal("techpack")}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm md:text-base py-3.5 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
            >
              <Download size={18} />
              <span>Download Blank Vector Pack (AI / PDF)</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("hero_review_whatsapp", "TechPack Hero 2-Hour Review")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base py-3.5 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle size={18} />
              <span>Submit Design for 2-Hour Factory Review</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-800">
            {c.hero.quickStats.map((stat, i) => (
              <div key={i} className="bg-gray-900/60 rounded-xl p-4 border border-gray-800 text-center">
                <div className="text-lg md:text-2xl font-black text-yellow-400 tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Anatomy of a Cap Tech Pack */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Standardized Headwear Engineering</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.anatomyTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.anatomyIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.elements.map((el, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-yellow-500/80 mb-3 tracking-tighter">{el.num}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{el.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">{el.desc}</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-gray-100 text-[11px] text-gray-500 leading-normal">
                  <strong className="text-gray-900">Factory Requirement: </strong>
                  {el.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Silhouette Vector Cards */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Free Vector Downloads</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.templatesTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.templatesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.templates.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-yellow-400 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {tpl.badge}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400">1:1 Flat Template</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-3">{tpl.name}</h3>

                  {/* Blueprint Graphic Mockup Wireframe */}
                  <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-6 text-white mb-6 border border-gray-800 relative overflow-hidden">
                    <div className="absolute right-3 top-3 text-[10px] text-yellow-400 font-mono tracking-widest">
                      SCALE 1:1 · VECTOR BLUEPRINT
                    </div>
                    <div className="h-32 flex items-center justify-center">
                      <svg width="220" height="110" viewBox="0 0 220 110" className="text-yellow-400 stroke-current fill-none">
                        {tpl.id === "6-panel" && (
                          <g strokeWidth="1.5">
                            <path d="M 40 85 C 45 35, 80 20, 110 20 C 140 20, 175 35, 180 85 Z" />
                            <path d="M 110 20 L 110 85" strokeDasharray="3,3" />
                            <path d="M 75 25 C 78 50, 80 70, 82 85" strokeDasharray="3,3" />
                            <path d="M 145 25 C 142 50, 140 70, 138 85" strokeDasharray="3,3" />
                            <path d="M 30 85 Q 110 105 190 85 Q 110 95 30 85" fill="rgba(250, 204, 21, 0.15)" />
                            <circle cx="110" cy="20" r="3" fill="#FACC15" />
                          </g>
                        )}
                        {tpl.id === "5-panel" && (
                          <g strokeWidth="1.5">
                            <path d="M 45 85 L 60 30 L 160 30 L 175 85 Z" />
                            <path d="M 60 30 L 160 30" />
                            <path d="M 25 85 L 195 85 L 180 102 L 40 102 Z" fill="rgba(250, 204, 21, 0.15)" />
                            <circle cx="75" cy="55" r="2" fill="#FACC15" />
                            <circle cx="145" cy="55" r="2" fill="#FACC15" />
                          </g>
                        )}
                        {tpl.id === "trucker" && (
                          <g strokeWidth="1.5">
                            <path d="M 40 85 C 45 25, 75 18, 110 18 C 145 18, 175 25, 180 85 Z" />
                            <path d="M 70 85 C 70 45, 90 25, 110 18" strokeDasharray="2,2" />
                            <path d="M 150 85 C 150 45, 130 25, 110 18" strokeDasharray="2,2" />
                            <path d="M 30 85 Q 110 108 190 85" fill="rgba(250, 204, 21, 0.15)" />
                            <circle cx="110" cy="18" r="3" fill="#FACC15" />
                            <text x="110" y="60" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="monospace">FOAM FRONT / MESH BACK</text>
                          </g>
                        )}
                        {tpl.id === "beanie" && (
                          <g strokeWidth="1.5">
                            <path d="M 60 95 C 60 35, 75 15, 110 15 C 145 15, 160 35, 160 95 Z" />
                            <rect x="55" y="70" width="110" height="28" rx="2" fill="rgba(250, 204, 21, 0.15)" />
                            <rect x="145" y="76" width="12" height="16" fill="#FACC15" stroke="none" />
                            <text x="110" y="87" textAnchor="middle" fill="#FACC15" fontSize="8" fontFamily="monospace">7CM FOLD CUFF</text>
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 mb-6">
                    <div>
                      <strong className="text-gray-900">Standard Specs: </strong> {tpl.specs}
                    </div>
                    <div>
                      <strong className="text-gray-900">Best Application: </strong> {tpl.bestFor}
                    </div>
                    <div>
                      <strong className="text-gray-900">Included Vector Files: </strong> {tpl.formats}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleOpenInquiryModal(`techpack_${tpl.id}`)}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Download size={14} />
                    <span>Download Vector Template</span>
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      lang === "es"
                        ? `Hola Baoding Junyang! Me gustaría solicitar la plantilla técnica para ${tpl.name} y cotización para 200 uds.`
                        : `Hi Baoding Junyang! Please send me the vector template for ${tpl.name} and quote for 200 pcs.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick("tpl_card_whatsapp", `Tpl Card: ${tpl.name}`)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Engineering Limits Table */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Precision Guidelines</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.limitsTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.limitsIntro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4 md:px-6">Branding Technique</th>
                  <th className="py-3.5 px-4 md:px-6">Max Recommended Area</th>
                  <th className="py-3.5 px-4 md:px-6">Minimum Line Thickness</th>
                  <th className="py-3.5 px-4 md:px-6">Factory Engineering Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {c.limits.map((lim, i) => (
                  <tr key={i} className="hover:bg-yellow-50/50 transition">
                    <td className="py-4 px-4 md:px-6 font-bold text-gray-900">{lim.technique}</td>
                    <td className="py-4 px-4 md:px-6 font-mono text-emerald-700 font-bold whitespace-nowrap">{lim.maxDim}</td>
                    <td className="py-4 px-4 md:px-6 font-mono text-gray-700 whitespace-nowrap">{lim.minLine}</td>
                    <td className="py-4 px-4 md:px-6 text-gray-600 text-xs">{lim.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: 4 Critical Mistakes */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-red-600">Avoid Costly Sampling Delays</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.mistakesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.mistakes.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-black">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: 2-Hour Review Service Banner */}
      <section className="py-20 px-4 md:px-8 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-4">
            Zero-Cost Brand Acceleration
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{c.reviewTitle}</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">{c.reviewSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {c.reviewSteps.map((s, i) => (
              <div key={i} className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800">
                <div className="text-yellow-400 text-xs font-mono font-bold mb-2 uppercase">{s.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                lang === "es"
                  ? "¡Hola Baoding Junyang! Tengo un boceto/logo y me gustaría solicitar la revisión técnica gratuita de 2 horas para gorras personalizadas (MOQ 200)."
                  : "Hi Baoding Junyang! I have a sketch/logo and would like to request the free 2-hour engineering review for custom caps (MOQ 200)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("cta_banner_whatsapp", "TechPack Banner WhatsApp")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-8 rounded-full text-base transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp (+86 159 3393 0830)</span>
            </a>
            <button
              onClick={() => handleOpenInquiryModal("techpack_review")}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-base transition border border-white/20 flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              <span>Submit via Factory Form</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 text-xs font-black uppercase tracking-widest mb-2">
              <HelpCircle size={16} />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
              Tech Pack & Factory Sourcing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {c.faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-200 group" open={i === 0}>
                <summary className="p-6 cursor-pointer list-none flex items-start justify-between">
                  <h3 className="font-bold text-gray-900 pr-8 text-sm md:text-base">
                    <span className="text-yellow-600 font-black mr-2">Q{i + 1}:</span>
                    {faq.q}
                  </h3>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl mt-0.5 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-14 w-auto object-contain mb-4" />
            <p className="text-xs md:text-sm leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. — 12-year direct custom hat factory specializing in high-density embroidery, private label caps, and B2B volume headwear.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Engineering Guides</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-white text-yellow-400 font-bold">Vector Tech Pack Guide</Link></li>
                <li><Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white">2026 Hat Cost Index</Link></li>
                <li><Link href={`/${lang}/compare/merino-wool-vs-acrylic-beanies`} className="hover:text-white">Merino vs Acrylic</Link></li>
                <li><Link href={`/${lang}/materials`} className="hover:text-white">Materials & Fabrics</Link></li>
                <li><Link href={`/${lang}/pricing`} className="hover:text-white">Factory Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Factory Contact</h4>
              <ul className="space-y-2 text-xs">
                <li>WhatsApp: +86 159 3393 0830</li>
                <li>Email: admin@bdjunyang.com</li>
                <li>Facility: Baoding, Hebei, China</li>
                <li>MOQ: 200 Pcs per style</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          © {new Date().getFullYear()} Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
