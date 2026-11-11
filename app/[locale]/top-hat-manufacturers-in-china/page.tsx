"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  HelpCircle,
  MapPin,
  Building2,
  Check,
  Award,
  Globe,
  FileText,
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
      badge: "2026 Global Sourcing Intelligence · China Headwear Industry Benchmark",
      title: "Top Custom Hat Manufacturers in China",
      accent: "& 2026 Sourcing Guide",
      subtitle:
        "An objective evaluation of China's primary headwear manufacturing clusters, tier-1 factory capabilities, minimum order quantities (MOQ 200+), FOB cost structures ($3.20 - $7.80), and quality control standards for international apparel brands.",
      quickStats: [
        { label: "Core Manufacturing Belts", value: "3 Major Hubs" },
        { label: "Direct FOB Cost Range", value: "$3.20 - $7.80" },
        { label: "Agile Factory MOQ", value: "200 Pcs / Style" },
        { label: "Sampling Turnaround", value: "7 Business Days" },
      ],
    },
    clustersTitle: "1. The 3 Primary Headwear Manufacturing Clusters in China",
    clustersIntro:
      "China produces over 65% of global headwear. However, manufacturing capabilities, pricing, and minimum order requirements vary dramatically by geographical province. Understanding these regional dynamics is crucial for optimizing your supply chain:",
    clusters: [
      {
        id: "hebei",
        name: "Hebei Province (Baoding / Baigou Cluster)",
        role: "The Specialized Embroidery & Agile B2B Customization Powerhouse",
        desc: "Located in Northern China, the Baoding industrial belt is world-renowned for dedicated headwear specialization. Factories here feature dense concentrations of multi-head Barudan and Tajima automated embroidery machinery, extensive cotton twill and corduroy fabric stocks, and agile minimum order requirements (MOQ 200).",
        advantages: [
          "Optimal price-to-quality ratio: 15% - 25% lower overhead than Southern coastal hubs",
          "Unrivaled 3D puff embroidery and high-density tatami stitch capabilities",
          "Low entry MOQ (200 pcs) perfectly tailored for boutique streetwear drops and emerging DTC brands",
          "Full in-house supply chain: fabric weaving, dyeing, laser cutting, and steam shaping",
        ],
        idealFor: "Streetwear labels, outdoor lifestyle brands, sports clubs, and mid-volume corporate programs.",
        representative: "Baoding Junyang Hat Manufacturing Co., Ltd. (BD Hats)",
      },
      {
        id: "guangdong",
        name: "Guangdong Province (Dongguan / Shenzhen / Guangzhou)",
        role: "The High-End Technical & Multinational Retail Contract Hub",
        desc: "Southern China's Greater Bay Area houses legacy export factories with extensive experience servicing Fortune 500 athletic giants (Nike, Adidas, New Era tier-1 partners). These facilities specialize in bonded seamless tape, ultrasonic welding, and complex multi-material technical golf caps.",
        advantages: [
          "State-of-the-art technical bonding, laser perforation, and DWR waterproof finishes",
          "Extensive compliance infrastructure for global retail audit standards (BSCI, Sedex, WRAP)",
          "Proximity to Hong Kong and Shenzhen container export ports",
        ],
        idealFor: "Large retail corporations, international athletic federations, and high-volume orders (MOQ 1,000+ pcs).",
        representative: "Tier-1 OEM contract manufacturing groups",
      },
      {
        id: "zhejiang",
        name: "Zhejiang Province (Yiwu / Ningbo / Taizhou)",
        role: "The Rapid Promotional & Mass Low-Cost Production Center",
        desc: "The Yiwu and Ningbo manufacturing ecosystem is engineered for maximum throughput and ultra-low pricing. It is ideal for standardized promotional giveaways, political campaigns, and mass wholesale blanks where unit cost overrides artisanal craftsmanship.",
        advantages: [
          "Lowest baseline unit pricing for simple 5-panel foam trucker and cotton caps",
          "Massive ready-to-ship blank inventory for quick local screen-printing",
          "High container loading efficiency for massive volume contracts",
        ],
        idealFor: "Event merchandise, promotional giveaways, supermarket distributors, and price-sensitive procurement.",
        representative: "Mass promotional export suppliers",
      },
    ],
    matrixTitle: "2. Comparative Sourcing Matrix: Top China Hat Manufacturers (2026)",
    matrixIntro:
      "Benchmark key operational criteria across China's leading headwear suppliers to select the right partner for your brand's growth stage:",
    matrix: [
      {
        factory: "Baoding Junyang Hat Manufacturing (BD Hats)",
        region: "Baoding, Hebei",
        specialty: "High-density 3D puff embroidery, vintage dad hats, corduroy, beanies",
        moq: "200 pcs",
        fob: "$3.20 - $7.80",
        sampling: "7 Days",
        cert: "SGS, ISO 9001, CE",
        bestFor: "Streetwear labels, boutique DTC brands, agile custom programs",
      },
      {
        factory: "Dongguan Legacy Export Manufacturers",
        region: "Dongguan, Guangdong",
        specialty: "Technical golf hats, laser ventilation, seamless bonded athletic caps",
        moq: "1,000 pcs",
        fob: "$5.50 - $11.00",
        sampling: "14 Days",
        cert: "BSCI, WRAP, Sedex",
        bestFor: "Large retail chains, multinational athletic apparel corporations",
      },
      {
        factory: "Crayheadwear / Partner Networks",
        region: "Guangdong / Zhejiang",
        specialty: "Online trade aggregator, mixed headwear styles, promotional caps",
        moq: "300 pcs",
        fob: "$4.00 - $8.50",
        sampling: "10-12 Days",
        cert: "Third-party audit",
        bestFor: "Online B2B buyers seeking trading company convenience",
      },
      {
        factory: "Yiwu Promotional Headwear Mills",
        region: "Yiwu, Zhejiang",
        specialty: "Low-cost foam truckers, basic polyester promo caps, plain blanks",
        moq: "500 - 2,000 pcs",
        fob: "$1.80 - $3.50",
        sampling: "7 Days",
        cert: "Standard factory license",
        bestFor: "Corporate giveaways, election campaigns, budget promo events",
      },
      {
        factory: "Qingdao Sports Cap Manufacturing Hub",
        region: "Qingdao, Shandong",
        specialty: "Pro-style fitted baseball caps, licensed sports replica headwear",
        moq: "500 pcs",
        fob: "$4.50 - $9.00",
        sampling: "10-14 Days",
        cert: "ISO 9001, BSCI",
        bestFor: "Sports leagues, teamwear distributors, fitted cap enthusiasts",
      },
    ],
    checklistTitle: "3. How to Vet a Chinese Custom Hat Factory (6-Step Sourcing SOP)",
    checklistIntro:
      "Avoid unreliable middlemen and quality discrepancies by following our 6-step factory verification protocol:",
    steps: [
      {
        num: "01",
        title: "Verify Factory Machinery (Barudan / Tajima Equipment)",
        desc: "Ask for live video footage of the embroidery workshop. Tier-1 headwear factories operate precision Barudan or Tajima multi-head automated machines. Domestic lower-tier machines frequently suffer from tension drops, resulting in uneven 3D puff stitching and loose thread tails.",
      },
      {
        num: "02",
        title: "Test Engineering Feasibility & Tech Pack Turnaround",
        desc: "Send a mock tech pack or vector logo with fine lettering (< 3mm) and 3D puff callouts. A professional factory will immediately flag line-weight limitations and provide practical digitizing solutions within 2 to 4 hours rather than blindly saying 'yes' to everything.",
      },
      {
        num: "03",
        title: "Demand Pre-Production Physical Samples with Video Proofs",
        desc: "Never approve bulk production based solely on 3D digital mockups. Insist on physical pre-production sample sign-off (standard turnaround is 7 business days). Inspect crown height symmetry, sweatband tension, and visor curve balance.",
      },
      {
        num: "04",
        title: "Require Written AQL 2.5 Quality Control Inspection",
        desc: "Ensure your commercial contract explicitly specifies AQL (Acceptable Quality Limit) 2.5 standard for critical and major defects, covering seam alignment, color consistency, and needle hole integrity before packing.",
      },
      {
        num: "05",
        title: "Confirm In-House Manufacturing vs Trading Intermediary",
        desc: "Trading companies add 20% - 40% margin and introduce communication latency. Confirm whether you are speaking directly to factory engineers who manage pattern cutting, embroidery, and final steam shaping under one roof.",
      },
      {
        num: "06",
        title: "Establish Transparent FOB / DDP Logistics Milestones",
        desc: "Request clear itemized FOB pricing separating unit manufacturing, custom private-label trim packages (woven labels, custom seam tape, hangtags), and international express/sea freight estimates.",
      },
    ],
    junyangTitle: "4. Why Baoding Junyang (BD Hats) is the Preferred Partner for Agile Brands",
    junyangDesc:
      "Founded in 2014, Baoding Junyang Hat Manufacturing Co., Ltd. bridges the gap between high-overhead multinational factories and low-end promotional mills. We offer enterprise-grade craftsmanship with startup-friendly agility:",
    highlights: [
      { label: "100+ Barudan Heads", detail: "Automated multi-head embroidery lines ensuring micro-millimeter stitch precision across 3D puff, flat, and tatami textures." },
      { label: "Strict MOQ 200 Pcs", detail: "Boutique drop volume flexibility, enabling fashion streetwear and lifestyle brands to test new colorways without excessive inventory risk." },
      { label: "Transparent FOB Pricing", detail: "Real factory floor pricing ($3.20 - $7.80) with full Bill of Materials (BOM) cost breakdowns." },
      { label: "7-Day Sample Turnaround", detail: "Rapid prototyping supported by in-house pattern digitizers, custom laser cutters, and over 50 stock fabric colors." },
      { label: "Complete Private Labeling", detail: "Turnkey internal branding: custom woven sweatband labels, 6-line printed seam tape, embossed leather patches, and retail barcode packaging." },
      { label: "International Compliance", detail: "SGS verified facility, CE certified, ISO 9001 quality management, adhering to EU REACH and US CPSIA textile safety standards." },
    ],
    faqs: [
      {
        q: "How do I choose between a factory in Hebei and a factory in Guangdong?",
        a: "If your brand requires agile order runs (200 - 1,000 units), superior 3D puff embroidery, classic cotton/corduroy styles, and competitive FOB pricing ($3.20 - $5.50), Hebei (Baoding Junyang) offers the optimal balance. If you require seamless ultrasonic bonding and have large order volumes (1,000+ units with budgets over $7.00/unit), Guangdong factories are well suited.",
      },
      {
        q: "What is the real starting cost for 200 custom embroidered hats from China?",
        a: "For 200 high-quality custom structured cotton twill or dad hats with 3D front embroidery and custom woven sweatband labels, total factory production cost typically ranges from $700 to $960 USD ($3.50 - $4.80 per unit) FOB China, excluding international courier delivery.",
      },
      {
        q: "How can I verify if a supplier is a real factory or just a trading company?",
        a: "Request an unannounced live video walkthrough of the factory floor during business hours, check whether their business license matches their export documentation, inspect whether they operate automated embroidery machines (e.g. Barudan/Tajima), and review third-party audit reports (SGS/TÜV/ISO).",
      },
      {
        q: "Can Chinese hat factories produce custom hats from just a logo without a tech pack?",
        a: "Yes. Professional factories like Baoding Junyang have dedicated in-house digitizers who will generate full 2D production tech packs, calculate dimensional tolerances, and provide visual 3D proofs free of charge upon project confirmation.",
      },
      {
        q: "How long does production and shipping take from China to the US or Europe?",
        a: "Pre-production samples take 7 business days. Once approved, bulk manufacturing for 200 - 1,000 units takes 15 - 20 business days. Air express delivery (DHL/FedEx) takes 5 - 8 days, while sea freight door-to-door takes 25 - 35 days.",
      },
    ],
  },
  es: {
    hero: {
      badge: "Inteligencia de Aprovisionamiento 2026 · Benchmark de la Industria de Gorras en China",
      title: "Top Fabricantes de Gorras en China",
      accent: "y Guía de Sourcing 2026",
      subtitle:
        "Evaluación objetiva de los principales clústeres industriales de fabricación de gorras en China, capacidades técnicas de fábricas Tier-1, cantidades mínimas (MOQ 200+), estructuras de costes FOB ($3.20 - $7.80) y estándares de control de calidad para marcas internacionales.",
      quickStats: [
        { label: "Polos Industriales", value: "3 Clústeres Clave" },
        { label: "Coste FOB Directo", value: "$3.20 - $7.80" },
        { label: "MOQ Ágil de Fábrica", value: "200 Uds / Modelo" },
        { label: "Tiempo de Muestreo", value: "7 Días Laborables" },
      ],
    },
    clustersTitle: "1. Los 3 Principales Polos Industriales de Gorras en China",
    clustersIntro:
      "China fabrica más del 65% de las gorras a nivel mundial. Sin embargo, las capacidades técnicas, precios y pedidos mínimos varían drásticamente por provincia. Conocer estas dinámicas es vital para optimizar tu cadena de suministro:",
    clusters: [
      {
        id: "hebei",
        name: "Provincia de Hebei (Clúster Baoding / Baigou)",
        role: "El Polo de Bordado Especializado y Personalización B2B Ágil",
        desc: "Ubicado en el norte de China, el cinturón industrial de Baoding es famoso por su especialización en gorras. Cuenta con una alta concentración de maquinaria automática japonesa Barudan y Tajima, grandes existencias de sarga y pana, y pedidos mínimos accesibles (MOQ 200).",
        advantages: [
          "Excelente relación calidad-precio: costes 15%-25% menores que en las zonas costeras del sur",
          "Liderazgo en bordado 3D en relieve (puff) y puntadas tatami de alta densidad",
          "MOQ de entrada bajo (200 uds), ideal para marcas de streetwear emergentes y colecciones boutique",
          "Cadena de suministro integrada: tejido, tintorería, corte láser y hormado a vapor",
        ],
        idealFor: "Marcas de streetwear, moda outdoor, clubes deportivos y programas corporativos medianos.",
        representative: "Baoding Junyang Hat Manufacturing Co., Ltd. (BD Hats)",
      },
      {
        id: "guangdong",
        name: "Provincia de Guangdong (Dongguan / Shenzhen / Guangzhou)",
        role: "El Centro de Gorras Técnicas y Grandes Contratos Multinacionales",
        desc: "El área de la Bahía de Guangdong alberga fábricas tradicionales de exportación con experiencia con grandes marcas deportivas multinacionales. Destacan en termosellado sin costuras y gorras técnicas de golf de alta complejidad.",
        advantages: [
          "Tecnología puntera en termosellado, perforación láser y acabados impermeables DWR",
          "Auditorías internacionales consolidadas (BSCI, Sedex, WRAP)",
          "Proximidad a puertos marítimos internacionales de Shenzhen y Hong Kong",
        ],
        idealFor: "Grandes corporaciones de retail, ligas deportivas y pedidos de gran volumen (MOQ 1.000+ uds).",
        representative: "Grandes grupos OEM de exportación",
      },
      {
        id: "zhejiang",
        name: "Provincia de Zhejiang (Yiwu / Ningbo / Taizhou)",
        role: "El Centro de Producción Masiva y Bajo Coste Promocional",
        desc: "El ecosistema de Yiwu y Ningbo está diseñado para un volumen masivo y precios ultra bajos. Es ideal para gorras promocionales de regalo, campañas masivas y gorras lisas donde el precio prima sobre el detalle artesanal.",
        advantages: [
          "Precios unitarios más bajos para gorras trucker básicas y sarga sencilla",
          "Grandes stocks de gorras lisas para estampación rápida local",
          "Máxima eficiencia en carga de contenedores para compras por volumen",
        ],
        idealFor: "Eventos masivos, campañas promocionales, supermercados y compras enfocadas en coste.",
        representative: "Proveedores de exportación promocional masiva",
      },
    ],
    matrixTitle: "2. Matriz Comparativa: Principales Fabricantes de Gorras en China (2026)",
    matrixIntro:
      "Compara los criterios operativos clave de los principales proveedores para elegir el socio adecuado para tu marca:",
    matrix: [
      {
        factory: "Baoding Junyang Hat Manufacturing (BD Hats)",
        region: "Baoding, Hebei",
        specialty: "Bordado 3D puff de alta densidad, dad hats vintage, pana, beanies",
        moq: "200 uds",
        fob: "$3.20 - $7.80",
        sampling: "7 Días",
        cert: "SGS, ISO 9001, CE",
        bestFor: "Marcas streetwear, firmas DTC boutique, pedidos personalizados ágiles",
      },
      {
        factory: "Fabricantes Tradicionales de Dongguan",
        region: "Dongguan, Guangdong",
        specialty: "Gorras técnicas de golf, perforación láser, termosellado deportivo",
        moq: "1.000 uds",
        fob: "$5.50 - $11.00",
        sampling: "14 Días",
        cert: "BSCI, WRAP, Sedex",
        bestFor: "Cadenas de retail masivas, corporaciones deportivas multinacionales",
      },
      {
        factory: "Crayheadwear / Redes de Trading",
        region: "Guangdong / Zhejiang",
        specialty: "Agregador comercial online, estilos mixtos de gorras",
        moq: "300 uds",
        fob: "$4.00 - $8.50",
        sampling: "10-12 Días",
        cert: "Auditoría de terceros",
        bestFor: "Compradores online que buscan comodidad de trading company",
      },
      {
        factory: "Fábricas Promocionales de Yiwu",
        region: "Yiwu, Zhejiang",
        specialty: "Truckers de espuma económicas, gorras de poliéster para eventos",
        moq: "500 - 2.000 uds",
        fob: "$1.80 - $3.50",
        sampling: "7 Días",
        cert: "Licencia estándar",
        bestFor: "Regalos corporativos masivos, eventos y campañas presupuestarias",
      },
      {
        factory: "Polo de Gorras Deportivas de Qingdao",
        region: "Qingdao, Shandong",
        specialty: "Gorras cerradas fitted estilo pro, réplicas de equipos deportivos",
        moq: "500 uds",
        fob: "$4.50 - $9.00",
        sampling: "10-14 Días",
        cert: "ISO 9001, BSCI",
        bestFor: "Ligas deportivas, distribuidores de equipamiento, gorras fitted",
      },
    ],
    checklistTitle: "3. Protocolo de Auditoría para Evaluar una Fábrica en China",
    checklistIntro:
      "Evita intermediarios informales y discrepancias de calidad siguiendo nuestro protocolo de verificación de 6 pasos:",
    steps: [
      {
        num: "01",
        title: "Verifica la Maquinaria (Barudan o Tajima Japonesas)",
        desc: "Solicita un vídeo en directo de la sala de bordado. Las fábricas Tier-1 utilizan maquinaria automática japonesa Barudan o Tajima, garantizando un bordado 3D puff uniforme y sin puntadas sueltas.",
      },
      {
        num: "02",
        title: "Comprueba la Viabilidad Técnica de tu Ficha (Tech Pack)",
        desc: "Envía un diseño con letras finas (< 3mm). Una fábrica seria detectará límites técnicos de inmediato y te propondrá soluciones de digitalización en 2-4 horas en lugar de prometer imposibles.",
      },
      {
        num: "03",
        title: "Exige Muestras Físicas de Preproducción con Vídeo",
        desc: "Nunca apruebes una producción completa basada solo en fotos digitales 3D. Exige una muestra física terminada en 7 días laborables para evaluar corona, badana y visera.",
      },
      {
        num: "04",
        title: "Especifica Estándares AQL 2.5 por Escrito",
        desc: "Asegúrate de que el contrato comercial estipule el estándar AQL 2.5 para defectos mayores antes del empaquetado final.",
      },
      {
        num: "05",
        title: "Confirma Fabricación Directa vs Intermediario de Trading",
        desc: "Los intermediarios añaden entre un 20% y un 40% de sobrecoste y ralentizan las correcciones técnicas. Habla directamente con ingenieros de planta.",
      },
      {
        num: "06",
        title: "Fija Precios FOB Transparentes y Opciones Logísticas",
        desc: "Solicita presupuestos FOB desglosados separando la confección, el pack de etiquetas personalizadas y los costes de transporte aéreo o marítimo.",
      },
    ],
    junyangTitle: "4. Por Qué Baoding Junyang (BD Hats) es la Fábrica Elegida por Marcas Ágiles",
    junyangDesc:
      "Fundada en 2014, Baoding Junyang Hat Manufacturing Co., Ltd. combina la precisión de una gran fábrica con la flexibilidad que necesitan las marcas en crecimiento:",
    highlights: [
      { label: "Más de 100 Cabezales Barudan", detail: "Líneas automáticas japonesas para bordados planos, 3D puff y texturas tatami milimétricas." },
      { label: "MOQ Estricto de 200 Uds", detail: "Flexibilidad para lanzar colecciones limitadas de streetwear sin asumir riesgos de inventario masivo." },
      { label: "Precios FOB Claros de Fábrica", detail: "Precios directos de fábrica ($3.20 - $7.80) con desglose transparente de materiales y confección." },
      { label: "Muestras Físicas en 7 Días", detail: "Digitalización técnica in-house y corte láser con más de 50 colores de tela en stock permanente." },
      { label: "Personalización Integral de Marca", detail: "Etiquetas tejidas en badana, cintas interiores estampadas, parches de cuero y bolsas retail." },
      { label: "Certificación Internacional", detail: "Fábrica verificada por SGS, certificada CE e ISO 9001, cumpliendo con la normativa textil europea REACH y estadounidense CPSIA." },
    ],
    faqs: [
      {
        q: "¿Cómo elijo entre una fábrica en Hebei y una en Guangdong?",
        a: "Si buscas pedidos ágiles (200 - 1.000 unidades), bordado 3D de máxima calidad, tejidos clásicos de algodón/pana y precios FOB muy competitivos ($3.20 - $5.50), Hebei (Baoding Junyang) es la mejor opción. Si buscas termosellados sin costuras de alta complejidad para 1.000+ unidades y presupuestos superiores a $7.00/ud, las fábricas de Guangdong son las adecuadas.",
      },
      {
        q: "¿Cuál es el coste real para fabricar 200 gorras personalizadas en China?",
        a: "Para 200 gorras de algodón twill estructuradas con bordado 3D frontal y etiquetas tejidas en badana, el coste total de producción suele rondar entre $700 y $960 USD ($3.50 - $4.80 por gorra) FOB China, excluyendo el envío internacional.",
      },
      {
        q: "¿Cómo saber si un proveedor es una fábrica real o un intermediario?",
        a: "Solicita una videollamada sorpresa por la planta en horario laboral, verifica su licencia comercial y certificaciones (SGS/ISO), y comprueba si disponen de maquinaria propia de bordado (Barudan/Tajima).",
      },
      {
        q: "¿Pueden fabricar gorras a partir de un logotipo sin tener ficha técnica?",
        a: "Sí. Fábricas profesionales como Baoding Junyang cuentan con patronistas internos que crearán la ficha técnica 2D completa y maquetas 3D sin coste adicional al confirmar el proyecto.",
      },
      {
        q: "¿Cuánto tarda la fabricación y el envío desde China a Europa o América?",
        a: "Las muestras tardan 7 días laborables. Una vez aprobadas, la producción de 200 - 1.000 unidades tarda entre 15 y 20 días laborables. El envío aéreo exprés tarda 5 - 8 días y el marítimo puerta a puerta entre 25 y 35 días.",
      },
    ],
  },
};

export default function TopManufacturersPage() {
  const lang = useLang();
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en;

  const handleOpenInquiryModal = (intent: string = "sourcing_inquiry") => {
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
      ? "¡Hola Baoding Junyang! He leído la guía de fabricantes de gorras en China 2026 y me gustaría consultar viabilidad y cotización FOB para nuestro programa de gorras (MOQ 200 uds)."
      : "Hi Baoding Junyang! I read your 2026 China Hat Manufacturers Guide and would like to discuss manufacturing feasibility and get an FOB quotation for our custom cap program (MOQ 200 pcs).";

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
              "@id": `https://bdjunyang.com/${lang}/top-hat-manufacturers-in-china`,
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
            <Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-black transition">
              Tech Pack Guide
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
              onClick={() => handleOpenInquiryModal("top_mfg_header_quote")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <FileText size={13} />
              <span>Request Factory Quote</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_top_mfg_whatsapp", "Top Mfg Header WhatsApp")}
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
          { label: "Top Hat Manufacturers in China" },
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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("hero_top_mfg_whatsapp", "Top Mfg Hero WhatsApp")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-base py-3.5 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle size={18} />
              <span>Connect with Factory Engineering (+86 159 3393 0830)</span>
            </a>
            <button
              onClick={() => handleOpenInquiryModal("top_mfg_hero_quote")}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-sm md:text-base py-3.5 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
            >
              <FileText size={18} />
              <span>Get Direct Factory Pricing (MOQ 200)</span>
            </button>
          </div>

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

      {/* Section 1: 3 Regional Clusters */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Geographic Supply Chain Analysis</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.clustersTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.clustersIntro}
            </p>
          </div>

          <div className="space-y-8">
            {c.clusters.map((cl) => (
              <div
                key={cl.id}
                className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200/90 shadow-xs hover:border-yellow-400 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-700 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900">{cl.name}</h3>
                      <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">{cl.role}</span>
                    </div>
                  </div>
                  <span className="bg-white border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full self-start md:self-auto">
                    {cl.representative}
                  </span>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">{cl.desc}</p>

                <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-3">Key Sourcing Advantages:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-gray-700">
                    {cl.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-600">
                  <strong className="text-gray-900">Optimal Application: </strong> {cl.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Comparison Matrix Table */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Objective Industry Benchmarks</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.matrixTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.matrixIntro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-4 md:px-6">Manufacturer / Hub</th>
                  <th className="py-4 px-4 md:px-6">Region</th>
                  <th className="py-4 px-4 md:px-6">Core Specialization</th>
                  <th className="py-4 px-4 md:px-6">MOQ</th>
                  <th className="py-4 px-4 md:px-6">FOB Range</th>
                  <th className="py-4 px-4 md:px-6">Lead Time</th>
                  <th className="py-4 px-4 md:px-6">Certifications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {c.matrix.map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-yellow-50/60 font-medium" : "hover:bg-gray-50/60 transition"}>
                    <td className="py-4 px-4 md:px-6 font-bold text-gray-900">
                      {row.factory}
                      {i === 0 && (
                        <span className="block mt-1 text-[10px] text-yellow-700 font-extrabold uppercase tracking-wider">
                          ⭐ Host Verified Facility
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-gray-600 whitespace-nowrap">{row.region}</td>
                    <td className="py-4 px-4 md:px-6 text-gray-700 text-xs max-w-xs">{row.specialty}</td>
                    <td className="py-4 px-4 md:px-6 font-mono font-bold text-gray-900 whitespace-nowrap">{row.moq}</td>
                    <td className="py-4 px-4 md:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">{row.fob}</td>
                    <td className="py-4 px-4 md:px-6 text-gray-600 whitespace-nowrap">{row.sampling}</td>
                    <td className="py-4 px-4 md:px-6 text-xs text-gray-500">{row.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: 6-Step Sourcing SOP Checklist */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Procurement Due Diligence</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.checklistTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.checklistIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.steps.map((st, i) => (
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

      {/* Section 4: Why Baoding Junyang Stands Out */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
              Direct Factory Advantage
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">
              {c.junyangTitle}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {c.junyangDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {c.highlights.map((hl, i) => (
              <div key={i} className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-2 text-yellow-400 text-base font-black mb-2">
                  <Award size={18} />
                  <span>{hl.label}</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">{hl.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/60 rounded-3xl p-8 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Ready to Benchmark Your Custom Cap Program?</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-xl">
                Send your tech pack or logo to our Baoding engineering center. Receive a production feasibility report and FOB quote within 2 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("bottom_card_whatsapp", "Top Mfg Bottom WhatsApp")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Engineer</span>
              </a>
              <button
                onClick={() => handleOpenInquiryModal("top_mfg_bottom_form")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText size={16} />
                <span>Submit Inquiry Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 text-xs font-black uppercase tracking-widest mb-2">
              <HelpCircle size={16} />
              <span>Sourcing Intelligence FAQs</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
              China Headwear Manufacturing FAQs
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
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Sourcing Guides</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href={`/${lang}/top-hat-manufacturers-in-china`} className="hover:text-white text-yellow-400 font-bold">Top China Manufacturers</Link></li>
                <li><Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white">2026 Hat Cost Index</Link></li>
                <li><Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-white">Vector Tech Pack Guide</Link></li>
                <li><Link href={`/${lang}/compare/merino-wool-vs-acrylic-beanies`} className="hover:text-white">Merino vs Acrylic</Link></li>
                <li><Link href={`/${lang}/materials`} className="hover:text-white">Materials & Fabrics</Link></li>
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
