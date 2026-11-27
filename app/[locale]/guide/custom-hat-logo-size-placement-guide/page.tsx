"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Ruler,
  FileText,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  Download,
} from "lucide-react";
import { useLang } from "../../../lib/i18n";
import { trackWhatsAppClick } from "../../../lib/tracking";
import { NavProductsMenu } from "../../../components/NavProductsMenu";
import { NavCompareMenu } from "../../../components/NavCompareMenu";
import { Breadcrumb } from "../../../components/Breadcrumb";

const WHATSAPP_NUMBER = "8615933930830";

const CONTENT = {
  en: {
    hero: {
      badge: "2026 Production Standards · Factory Embroidery & Decal Sizing Specs",
      title: "Hat Logo Size & Placement Guide",
      accent: "for Custom Headwear",
      subtitle:
        "Standardized plain cap logo front size limits, embroidery dimensions, side panel placements, and vector decal tolerances across structured snapbacks, dad hats, trucker caps, and knit beanies.",
      quickStats: [
        { label: "Front Crown Max Width", value: "4.50 Inches (11.4 cm)" },
        { label: "Front Crown Max Height", value: "2.25 - 2.50 Inches" },
        { label: "Side Panel Embroidery", value: "2.50\" W × 1.25\" H" },
        { label: "Seam Clearance Limit", value: "0.50\" from Visor" },
      ],
    },
    tableTitle: "1. Master Hat Logo Sizing & Placement Matrix by Cap Silhouette",
    tableIntro:
      "Logo proportions vary according to crown buckram structure and panel geometry. Use this factory-verified dimension chart before preparing your vector artwork:",
    tableColumns: [
      "Cap Style",
      "Front Panel Max Size",
      "Side Panel Max Size",
      "Back Arch / Strap Size",
      "Best Decoration Technique",
      "Buckram Structure",
    ],
    tableRows: [
      {
        style: "Structured 6-Panel & Snapback",
        front: "4.50\" W × 2.50\" H (11.4 × 6.3 cm)",
        side: "2.50\" W × 1.25\" H (6.3 × 3.2 cm)",
        back: "3.50\" W × 0.75\" H (8.9 × 1.9 cm)",
        technique: "3D Puff Embroidery / Merrowed Patch",
        structure: "Hard buckram structured front",
      },
      {
        style: "Unstructured 6-Panel Dad Hat",
        front: "4.00\" W × 2.00\" H (10.1 × 5.1 cm)",
        side: "2.25\" W × 1.00\" H (5.7 × 2.5 cm)",
        back: "3.00\" W × 0.60\" H (7.6 × 1.5 cm)",
        technique: "Flat Embroidery / Micro Woven Label",
        structure: "Soft crown without buckram",
      },
      {
        style: "5-Panel Foam & Mesh Trucker Cap",
        front: "4.75\" W × 2.65\" H (12.0 × 6.7 cm)",
        side: "Mesh: Print/Woven Tag (2.0\" × 1.0\")",
        back: "Snapback tag (1.5\" × 0.75\")",
        technique: "Sublimation / Silicone Heat Transfer / Patch",
        structure: "Seamless continuous foam front",
      },
      {
        style: "5-Panel Camper / Streetwear Camp Cap",
        front: "3.50\" W × 1.75\" H (8.9 × 4.4 cm)",
        side: "Eyelet panel: 2.0\" W × 1.0\" H",
        back: "Nylon strap woven label",
        technique: "Flat Embroidery / Embossed Rubber Patch",
        structure: "Low-profile rectangular front",
      },
      {
        style: "Cuffed Knit Beanie",
        front: "3.75\" W × 2.00\" H (9.5 × 5.1 cm)",
        side: "Foldover clip label (1.0\" × 1.0\")",
        back: "Matching rear cuff embroidery",
        technique: "Flat Tight Tatami / Heat-pressed Felt",
        structure: "1×1 or 2×2 rib knit foldover cuff",
      },
    ],
    placementTitle: "2. Hat Logo Placement Rules: Avoiding Seams & Needle Deflection",
    placementIntro:
      "When sizing your hat decal or embroidery artwork, keep these mechanical constraints in mind to prevent puckering and registration errors:",
    rules: [
      {
        num: "01",
        title: "The 0.5-Inch Visor Clearance Boundary",
        desc: "Always maintain at least 0.50 inches (12.7 mm) of clearance between the lowest edge of your logo and the bottom visor seam. Stitching closer than 0.5\" forces the industrial sewing foot into the thick visor tape, causing thread breaks and needle deflection.",
      },
      {
        num: "02",
        title: "Center Seam Traversal on 6-Panel Caps",
        desc: "On 6-panel caps with a vertical center seam, avoid small text or fine geometric lines directly across the seam. While modern Barudan embroidery handles seams cleanly, flat embroidery with letters under 6mm can distort across the joining ridge.",
      },
      {
        num: "03",
        title: "Side Panel Curved Elevation Offset",
        desc: "Side panel placements sit approximately 0.5\" to 0.75\" above the bottom sweatband hem and centered between front and rear seams. Keep side logos under 2.5\" wide to prevent the artwork from bending over the wearer's ear curve.",
      },
      {
        num: "04",
        title: "Rear Arch & Closure Strap Specifications",
        desc: "Back embroidery arches smoothly over the keyhole opening (standard curve radius: 3.5\" to 4.0\"). Maximum text height is typically restricted to 0.75\" to ensure comfort when the cap is adjusted.",
      },
    ],
    limitsTitle: "3. Minimum Line Weights: Flat Embroidery vs 3D Puff vs Decals",
    limitsIntro:
      "How small can your artwork details be? Review factory minimum tolerances before sending vector art:",
    limits: [
      {
        label: "Flat Embroidery",
        stroke: "≥ 1.0 mm (0.04\")",
        textHeight: "≥ 5.0 mm (0.20\")",
        note: "Best for intricate corporate wordmarks, serif details, and multi-color crests.",
      },
      {
        label: "3D Puff (Raised Foam)",
        stroke: "≥ 3.0 mm (0.12\")",
        textHeight: "≥ 10.0 mm (0.40\")",
        note: "Requires wide satin stitches to envelop the high-density EVA foam cleanly.",
      },
      {
        label: "Silicone Heat Transfer Decal",
        stroke: "≥ 0.5 mm (0.02\")",
        textHeight: "≥ 3.0 mm (0.12\")",
        note: "Delivers razor-sharp definition for high-detail tech packs and gradient artwork.",
      },
      {
        label: "Merrowed Edge Woven Patch",
        stroke: "≥ 0.3 mm (0.01\")",
        textHeight: "≥ 2.5 mm (0.10\")",
        note: "Highest resolution for fine line micro-lettering; sewn on with border merrow.",
      },
    ],
    faqs: [
      {
        q: "What is the standard plain cap logo front size for baseball hats?",
        a: "The industry standard front logo size for structured 6-panel baseball caps and snapbacks is 4.0 to 4.5 inches wide by 2.0 to 2.25 inches high. For unstructured dad hats, the sweet spot is slightly smaller: 3.5 to 4.0 inches wide by 1.75 to 2.0 inches high to prevent aesthetic sagging on the soft crown.",
      },
      {
        q: "What is the maximum embroidery size for hats without distortion?",
        a: "On a standard adult cap, the physical maximum embroidery field across an industrial cap hoop is 5.0 inches wide by 2.5 inches high. Pushing past 4.5 inches wide begins wrapping into the curvature of the side panels, which can distort straight horizontal typography.",
      },
      {
        q: "What is the best logo placement on the side of a hat?",
        a: "Side logos should be placed on either the left or right temple panel, centered horizontally between the front crown seam and the rear panel seam, positioned 0.5 to 0.75 inches above the bottom sweatband seam. Standard dimensions are 2.0 to 2.5 inches wide by 1.0 to 1.25 inches high.",
      },
      {
        q: "Can hat decals or heat transfers be larger than embroidered logos?",
        a: "Yes. On seamless 5-panel trucker caps and campers without a front center seam, printed silicone decals and sublimation patches can extend up to 4.75 inches wide by 2.65 inches high because there is no vertical fabric ridge to interrupt the transfer press.",
      },
      {
        q: "How does Baoding Junyang assist with logo resizing and digitizing?",
        a: "When you send your vector file (.AI, .EPS, or .PDF), our in-house pattern engineers evaluate your design at 1:1 factory scale. We automatically optimize stroke thicknesses for Barudan multi-head embroidery and provide free digital proof renderings within 2 hours.",
      },
    ],
  },
  es: {
    hero: {
      badge: "Normas de Producción 2026 · Especificaciones de Bordado y Medidas de Logo",
      title: "Guía de Tamaños y Ubicación de Logos",
      accent: "en Gorras Personalizadas",
      subtitle:
        "Límites estándar de tamaño para el frente de gorras lisas, dimensiones de bordado, ubicaciones en paneles laterales y tolerancias para transfers en gorras snapback, dad hats, truckers y beanies.",
      quickStats: [
        { label: "Ancho Máximo Frontal", value: "4.50 Pulgadas (11.4 cm)" },
        { label: "Alto Máximo Frontal", value: "2.25 - 2.50 Pulgadas" },
        { label: "Bordado Lateral", value: "2.50\" Ancho × 1.25\" Alto" },
        { label: "Margen de Costura", value: "0.50\" desde la Visera" },
      ],
    },
    tableTitle: "1. Matriz Maestra de Medidas y Ubicación de Logos por Tipo de Gorra",
    tableIntro:
      "Las proporciones del logo cambian según la estructura de la entretela y la geometría de los paneles. Consulta esta tabla validada en fábrica antes de preparar tus vectores:",
    tableColumns: [
      "Modelo de Gorra",
      "Tamaño Máximo Frontal",
      "Tamaño Máximo Lateral",
      "Arco Trasero / Cierre",
      "Técnica Recomendada",
      "Estructura de Entretela",
    ],
    tableRows: [
      {
        style: "Gorras 6 Paneles y Snapback Estructuradas",
        front: "4.50\" Ancho × 2.50\" Alto (11.4 × 6.3 cm)",
        side: "2.50\" Ancho × 1.25\" Alto (6.3 × 3.2 cm)",
        back: "3.50\" Ancho × 0.75\" Alto (8.9 × 1.9 cm)",
        technique: "Bordado 3D Puff / Parche Merrow",
        structure: "Frontal rígido con entretela gruesa",
      },
      {
        style: "Dad Hat Desestructurada (6 Paneles)",
        front: "4.00\" Ancho × 2.00\" Alto (10.1 × 5.1 cm)",
        side: "2.25\" Ancho × 1.00\" Alto (5.7 × 2.5 cm)",
        back: "3.00\" Ancho × 0.60\" Alto (7.6 × 1.5 cm)",
        technique: "Bordado Plano / Etiqueta Tejida",
        structure: "Corona suave sin entretela",
      },
      {
        style: "Gorra Trucker de Espuma y Malla (5 Paneles)",
        front: "4.75\" Ancho × 2.65\" Alto (12.0 × 6.7 cm)",
        side: "Malla: Etiqueta lateral (2.0\" × 1.0\")",
        back: "Etiqueta en cierre (1.5\" × 0.75\")",
        technique: "Sublimación / Transfer de Silicona / Parche",
        structure: "Frontal continuo de espuma sin costura central",
      },
      {
        style: "Gorra 5 Paneles Camper / Streetwear",
        front: "3.50\" Ancho × 1.75\" Alto (8.9 × 4.4 cm)",
        side: "Panel lateral: 2.0\" Ancho × 1.0\" Alto",
        back: "Cinta de nailon con etiqueta",
        technique: "Bordado Plano / Parche de Goma",
        structure: "Perfil bajo con panel frontal rectangular",
      },
      {
        style: "Gorro de Punto Beanie con Vuelta",
        front: "3.75\" Ancho × 2.00\" Alto (9.5 × 5.1 cm)",
        side: "Etiqueta tipo clip (1.0\" × 1.0\")",
        back: "Bordado trasero en la vuelta",
        technique: "Bordado Tatami Denso / Fieltro Prensado",
        structure: "Punto canalé 1×1 o 2×2 en vuelta doblada",
      },
    ],
    placementTitle: "2. Reglas de Ubicación de Logos: Cómo Evitar Costuras y Rotura de Aguja",
    placementIntro:
      "Al calcular el tamaño de tu diseño o transfer para gorras, respeta estas limitaciones mecánicas para evitar arrugas y desalineaciones:",
    rules: [
      {
        num: "01",
        title: "Margen de Seguridad de 0.5 Pulgadas con la Visera",
        desc: "Deja siempre al menos 0.50 pulgadas (12.7 mm) de espacio libre entre el borde inferior del logo y la costura de unión con la visera. Coser más abajo fuerza el prensatelas contra la cinta gruesa y causa roturas de aguja.",
      },
      {
        num: "02",
        title: "Paso por la Costura Central en Gorras de 6 Paneles",
        desc: "En gorras con costura vertical delantera, evita textos pequeños o líneas finas que crucen justo el centro. Aunque nuestras Barudan bordan costuras limpias, letras de menos de 6mm pueden distorsionarse en el lomo.",
      },
      {
        num: "03",
        title: "Ubicación Curvada en Paneles Laterales",
        desc: "Los logos laterales se sitúan entre 0.5\" y 0.75\" por encima del dobladillo de la badana, centrados entre las costuras frontales y traseras. Limita el ancho a 2.5\" para que no se doble sobre la curva de la oreja.",
      },
      {
        num: "04",
        title: "Arco Trasero y Especificaciones de Cierre",
        desc: "El bordado posterior se curva sobre la abertura del cierre (radio estándar: 3.5\" a 4.0\"). La altura máxima recomendada es de 0.75\" para que no moleste al ajustar la gorra.",
      },
    ],
    limitsTitle: "3. Grosor Mínimo de Línea: Bordado Plano vs 3D Puff vs Transfers",
    limitsIntro:
      "¿Hasta qué punto pueden ser finos los detalles de tu diseño? Tolerancias de fábrica:",
    limits: [
      {
        label: "Bordado Plano",
        stroke: "≥ 1.0 mm (0.04\")",
        textHeight: "≥ 5.0 mm (0.20\")",
        note: "Ideal para tipografías corporativas nítidas y escudos multicolor con letras pequeñas.",
      },
      {
        label: "Bordado 3D Puff (Relieve)",
        stroke: "≥ 3.0 mm (0.12\")",
        textHeight: "≥ 10.0 mm (0.40\")",
        note: "Requiere puntadas de satén anchas para envolver limpiamente la espuma EVA de alta densidad.",
      },
      {
        label: "Transfer Térmico de Silicona / Decal",
        stroke: "≥ 0.5 mm (0.02\")",
        textHeight: "≥ 3.0 mm (0.12\")",
        note: "Máxima precisión para fichas técnicas complejas, degradados y microletras.",
      },
      {
        label: "Parche Tejido con Borde Merrow",
        stroke: "≥ 0.3 mm (0.01\")",
        textHeight: "≥ 2.5 mm (0.10\")",
        note: "Resolución ultra fina para detalles milimétricos; se cose con ribete exterior.",
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el tamaño estándar para el logo frontal de una gorra de béisbol lisa?",
        a: "El estándar de la industria para gorras estructuradas y snapbacks es de 4.0 a 4.5 pulgadas de ancho por 2.0 a 2.25 pulgadas de alto. Para dad hats desestructuradas, el tamaño ideal es ligeramente menor: 3.5 a 4.0 pulgadas de ancho por 1.75 a 2.0 pulgadas de alto para evitar que la tela blanda ceda.",
      },
      {
        q: "¿Cuál es el tamaño máximo de bordado en gorras sin que se distorsione?",
        a: "En una gorra estándar para adulto, el campo físico máximo en bastidor de gorra es de 5.0 pulgadas de ancho por 2.5 pulgadas de alto. Superar las 4.5 pulgadas de ancho empieza a curvar el diseño hacia los laterales, lo que puede deformar textos horizontales rectos.",
      },
      {
        q: "¿Cuál es la mejor posición para un logo lateral en una gorra?",
        a: "Los logos laterales deben colocarse en el panel izquierdo o derecho de la sien, centrados entre las costuras delantera y trasera, y entre 0.5 y 0.75 pulgadas por encima de la costura de la badana. Las medidas recomendadas son de 2.0 a 2.5 pulgadas de ancho por 1.0 a 1.25 pulgadas de alto.",
      },
      {
        q: "¿Pueden ser los transfers o parches más grandes que los bordados directos?",
        a: "Sí. En gorras trucker de 5 paneles sin costura frontal, los parches termosellados y transfers de silicona pueden alcanzar hasta 4.75 pulgadas de ancho por 2.65 pulgadas de alto gracias a la superficie lisa de la espuma continua.",
      },
      {
        q: "¿Cómo ayuda Baoding Junyang a ajustar y digitalizar el logo?",
        a: "Al enviarnos tu archivo vectorial (.AI, .EPS o .PDF), nuestros ingenieros de patronaje evalúan el diseño a escala real 1:1, optimizan los trazos para máquinas Barudan y te entregan una maqueta digital con cotas en menos de 2 horas sin coste.",
      },
    ],
  },
};

export default function LogoSizeGuidePage() {
  const lang = useLang();
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en;

  const handleOpenInquiryModal = (intent: string = "logo_size_guide_inquiry") => {
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
      ? "¡Hola Baoding Junyang! He revisado la guía de tamaños de logo en gorras y me gustaría consultar la viabilidad de bordado para mi logotipo."
      : "Hi Baoding Junyang! I reviewed your hat logo sizing guide and would like to check embroidery feasibility and size limits for our logo.";

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Schema Markup for Article and FAQ */}
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
              name: "Baoding Junyang Import and Export Trade Co., Ltd.",
              url: "https://bdjunyang.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Baoding Junyang Import and Export Trade Co., Ltd.",
              logo: {
                "@type": "ImageObject",
                url: "https://bdjunyang.com/images/brand/junyang-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://bdjunyang.com/${lang}/guide/custom-hat-logo-size-placement-guide`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: c.tableTitle,
            description: c.tableIntro,
            itemListElement: c.tableRows.map((row, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: row.style,
              description: `Front: ${row.front}, Side: ${row.side}, Back: ${row.back}, Technique: ${row.technique}`,
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
            <Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-black transition">
              Tech Pack Guide
            </Link>
            <NavProductsMenu />
            <Link href={`/${lang}/materials`} className="hover:text-black transition">
              Materials
            </Link>
            <NavCompareMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenInquiryModal("logo_guide_header_quote")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <FileText size={13} />
              <span>Free Artwork Check</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_logo_guide_whatsapp", "Logo Guide Header WhatsApp")}
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
          { label: "Guide", href: `/${lang}/guide` },
          { label: "Hat Logo Size & Placement Guide" },
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href={`/${lang}/custom-hat-tech-pack-template`}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 px-8 rounded-2xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
            >
              <Download size={16} />
              <span>Download Vector Tech Pack (.AI/.PDF)</span>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("hero_logo_guide_whatsapp", "Logo Guide Hero WhatsApp")}
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-2xl text-sm transition flex items-center justify-center gap-2 border border-gray-700"
            >
              <MessageCircle size={16} />
              <span>Ask Embroidery Engineer (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            {c.hero.quickStats.map((st, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">{st.label}</span>
                <span className="block text-base sm:text-lg font-black text-white mt-1">{st.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Master Sizing Matrix */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Dimension Standards</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.tableTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.tableIntro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  {c.tableColumns.map((col, idx) => (
                    <th key={idx} className="py-4 px-4 md:px-6">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {c.tableRows.map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-yellow-50/60 font-medium" : "hover:bg-gray-50/60 transition"}>
                    <td className="py-4 px-4 md:px-6 font-bold text-gray-900">{row.style}</td>
                    <td className="py-4 px-4 md:px-6 font-mono font-bold text-gray-900 whitespace-nowrap">{row.front}</td>
                    <td className="py-4 px-4 md:px-6 font-mono text-gray-700 whitespace-nowrap">{row.side}</td>
                    <td className="py-4 px-4 md:px-6 font-mono text-gray-700 whitespace-nowrap">{row.back}</td>
                    <td className="py-4 px-4 md:px-6 text-emerald-700 font-semibold">{row.technique}</td>
                    <td className="py-4 px-4 md:px-6 text-gray-500 text-xs">{row.structure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: 4 Core Placement Rules */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Machinery Tolerances</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.placementTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.placementIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.rules.map((st, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black font-black flex items-center justify-center shrink-0 text-sm">
                  {st.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{st.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stroke & Detail Limits */}
      <section className="py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
              Technical Precision Limits
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">
              {c.limitsTitle}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {c.limitsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {c.limits.map((item, i) => (
              <div key={i} className="bg-gray-800/80 rounded-2xl p-6 border border-gray-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-yellow-400 text-base font-black mb-3">{item.label}</h3>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Min Stroke Width:</span>
                      <span className="font-mono font-bold text-sm text-white">{item.stroke}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Min Text Height:</span>
                      <span className="font-mono font-bold text-sm text-white">{item.textHeight}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs border-t border-gray-700/60 pt-3">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Need a Vector Check for Your Logo?</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-xl">
                Send your vector logo (.AI, .EPS, or .PDF). Our Baoding-based digitizers will check stroke weights and confirm the maximum feasible scale within 2 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("bottom_logo_guide_whatsapp", "Logo Guide Bottom WhatsApp")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Engineer</span>
              </a>
              <button
                onClick={() => handleOpenInquiryModal("logo_guide_bottom_form")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText size={16} />
                <span>Upload Logo for Review</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 text-xs font-black uppercase tracking-widest mb-2">
              <HelpCircle size={16} />
              <span>Sizing & Placement FAQs</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
              Frequently Asked Questions About Cap Logo Sizing
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
    </main>
  );
}
