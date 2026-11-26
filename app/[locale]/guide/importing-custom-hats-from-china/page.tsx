"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Ship,
  Plane,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Clock,
  ArrowRight,
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
      badge: "2026 Customs & Logistics Sourcing Intelligence · Direct Factory Export",
      title: "Importing Custom Hats from China",
      accent: "& B2B Logistics Guide",
      subtitle:
        "Everything international apparel brands and wholesalers must know when sourcing hats from China: US & EU tariffs, HS Code 6505.00 regulations, ocean vs air transit times, FOB vs DDP trade terms, and customs clearance protocols.",
      quickStats: [
        { label: "Harmonized Code (Headwear)", value: "HS 6505.00" },
        { label: "Air Express Transit", value: "5 - 7 Business Days" },
        { label: "Ocean Freight (US West)", value: "14 - 18 Port Days" },
        { label: "DDP Door-to-Door", value: "Customs & Taxes Cleared" },
      ],
    },
    tariffTitle: "1. Headwear Harmonized System (HS) Codes & Duty Structure",
    tariffIntro:
      "Accurate HS classification prevents costly customs delays and tariff penalties when clearing china caps and headwear through international borders:",
    tariffs: [
      {
        code: "HS 6505.00.30",
        category: "Cotton & Polyester Baseball Caps",
        desc: "Structured snapbacks, dad hats, 5-panel campers, and mesh truckers made of woven cotton twill, canvas, or polyester blends.",
        usDuty: "Approx. 7.5% - 8.5% general tariff (plus Section 301 tariffs if applicable)",
      },
      {
        code: "HS 6505.00.60",
        category: "Knit Beanies & Cold-Weather Caps",
        desc: "Acrylic, cotton, or wool circular knit beanies, rib-cuffed watch caps, and jacquard winter pom pom hats.",
        usDuty: "Approx. 6.8% - 8.0% duty rate depending on raw yarn content and fiber blend",
      },
      {
        code: "HS 6502.00.00",
        category: "Braided & Straw Sun Hats",
        desc: "Paper braid, raffia, seagrass, or synthetic straw summer sun hats, panama hats, and wide-brim lifesaver hats.",
        usDuty: "Duty rates fluctuate between 4.0% and 7.2% based on weave density and sweatband trim",
      },
    ],
    logisticsTitle: "2. Shipping Modes & Transit Times: China to North America & Europe",
    logisticsIntro:
      "Select the right logistics method based on your delivery timeline, inventory urgency, and order volume:",
    logisticsMatrix: [
      {
        mode: "Air Express (DHL / FedEx / UPS)",
        bestFor: "Pre-production samples & urgent drops (< 300 pcs)",
        transit: "5 - 7 Business Days",
        costPerCap: "$2.20 - $3.80 / pc",
        customs: "Automated electronic clearance by courier broker",
      },
      {
        mode: "Air Cargo DDP (Door-to-Door)",
        bestFor: "Medium batch streetwear drops (300 - 1,000 pcs)",
        transit: "9 - 12 Business Days",
        costPerCap: "$1.40 - $2.20 / pc",
        customs: "All import duties and harbor taxes pre-cleared",
      },
      {
        mode: "Ocean Freight FCL / LCL (FOB)",
        bestFor: "High-volume corporate contracts (1,000+ pcs)",
        transit: "14 - 18 Days (US West) / 28 - 35 Days (US East / EU)",
        costPerCap: "$0.30 - $0.75 / pc",
        customs: "Handled by buyer's designated licensed customs broker",
      },
      {
        mode: "Ocean DDP (Matson Fast Vessel)",
        bestFor: "Optimal balance of low freight cost and guaranteed date",
        transit: "18 - 22 Days Door-to-Door",
        costPerCap: "$0.55 - $0.95 / pc",
        customs: "Full port drayage, customs clearance, and UPS final leg",
      },
    ],
    termsTitle: "3. Trade Terms Comparison: FOB vs CIF vs DDP Explained",
    termsIntro:
      "Avoid hidden port surcharges and demurrage fees by choosing the right Incoterm with your factory:",
    terms: [
      {
        term: "DDP (Delivered Duty Paid)",
        label: "Most Popular for DTC & Growth Brands",
        desc: "The factory manages manufacturing, Chinese export customs, international sea/air freight, destination customs clearance, and all import duties. Your order arrives directly at your office or warehouse with zero paperwork surprises.",
        recommended: true,
      },
      {
        term: "FOB (Free On Board)",
        label: "Standard for Established Importers",
        desc: "Baoding Junyang delivers the cargo to the designated Chinese departure port (Tianjin, Qingdao, or Shenzhen) and clears export customs. You nominate your own freight forwarder who coordinates ocean transit, marine insurance, and domestic delivery.",
        recommended: false,
      },
      {
        term: "EXW (Ex Works)",
        label: "Factory Floor Handover Only",
        desc: "You take legal responsibility from our Baoding factory gate. Not recommended unless you have an established domestic consolidation agent in China coordinating mixed-category containers.",
        recommended: false,
      },
    ],
    faqs: [
      {
        q: "What documentation is required to clear custom hats from China through customs?",
        a: "A commercial shipment requires three core documents: 1) Commercial Invoice stating product descriptions, unit values, and country of origin; 2) Detailed Packing List detailing carton dimensions, gross/net weights, and quantities per box; 3) Bill of Lading (B/L) for ocean freight or Air Waybill (AWB) for air shipments.",
      },
      {
        q: "Do custom embroidered hats from China require Country of Origin labels?",
        a: "Yes. US Customs (CBP) and EU trade authorities strictly require permanent Country of Origin marking on all imported textiles. At Baoding Junyang, we sew a discreet woven 'Made in China' label into the interior sweatband seam alongside your custom brand tag.",
      },
      {
        q: "How does Baoding Junyang ship hats to US and European buyers?",
        a: "We offer both FOB China port shipments (via Tianjin Port or Qingdao Port for northern proximity) and turnkey DDP door-to-door express delivery. Most of our North American clients prefer DDP air or DDP sea, where customs duties and taxes are prepaid.",
      },
      {
        q: "What packaging is used to prevent caps from crushing during international transit?",
        a: "We pack hats in heavy-duty 5-ply double-wall corrugated master export cartons. Structured baseball caps and truckers are packed in bundles of 25 with inner polybags and cardboard crown inserts to preserve visor curves and front buckram shape during ocean voyages.",
      },
    ],
  },
  es: {
    hero: {
      badge: "Inteligencia Aduanera y Logística 2026 · Exportación Directa de Fábrica",
      title: "Cómo Importar Gorras de China",
      accent: "y Guía Logística B2B",
      subtitle:
        "Todo lo que las marcas internacionales y mayoristas deben saber al comprar gorras en China: aranceles aduaneros, código HS 6505.00, tiempos de transporte aéreo y marítimo, términos FOB vs DDP y trámites de importación.",
      quickStats: [
        { label: "Código Arancelario (Gorras)", value: "HS 6505.00" },
        { label: "Envío Exprés Aéreo", value: "5 - 7 Días Laborables" },
        { label: "Tránsito Marítimo", value: "18 - 25 Días a Puerto" },
        { label: "Entrega DDP Puerta a Puerta", value: "Impuestos y Aduana Incluidos" },
      ],
    },
    tariffTitle: "1. Códigos del Sistema Armonizado (HS) y Aranceles de Gorras",
    tariffIntro:
      "Una clasificación arancelaria precisa evita retrasos aduaneros y costes imprevistos al importar gorras de China:",
    tariffs: [
      {
        code: "HS 6505.00.30",
        category: "Gorras de Béisbol de Algodón y Poliéster",
        desc: "Gorras snapback, dad hats, 5 paneles y gorras trucker de sarga de algodón, lona o mezclas de poliéster.",
        usDuty: "Arancel estándar aproximado del 7.5% - 8.5% según el país de destino",
      },
      {
        code: "HS 6505.00.60",
        category: "Gorros de Punto Beanie para Invierno",
        desc: "Gorros de acrílico, algodón o lana con vuelta acanalada y gorros de jacquard con pompón.",
        usDuty: "Arancel del 6.8% al 8.0% según la composición exacta de la fibra",
      },
      {
        code: "HS 6502.00.00",
        category: "Sombreros de Paja y Fibras Trenzadas",
        desc: "Sombreros de paja de papel trenzado, rafia o materiales sintéticos para playa o protección solar.",
        usDuty: "Aranceles variables entre el 4.0% y el 7.2% según el tipo de trenzado",
      },
    ],
    logisticsTitle: "2. Métodos de Envío y Tiempos de Tránsito desde China",
    logisticsIntro:
      "Elige el método de transporte ideal según el volumen de tu pedido y la urgencia de entrega:",
    logisticsMatrix: [
      {
        mode: "Aéreo Exprés (DHL / FedEx / UPS)",
        bestFor: "Muestras de preproducción y pedidos urgentes (< 300 uds)",
        transit: "5 - 7 Días Laborables",
        costPerCap: "$2.20 - $3.80 / ud",
        customs: "Despacho electrónico rápido por mensajería",
      },
      {
        mode: "Aéreo Carga DDP (Puerta a Puerta)",
        bestFor: "Pedidos medianos de colecciones streetwear (300 - 1.000 uds)",
        transit: "9 - 12 Días Laborables",
        costPerCap: "$1.40 - $2.20 / ud",
        customs: "Aranceles e impuestos de importación liquidados",
      },
      {
        mode: "Marítimo FCL / LCL (FOB)",
        bestFor: "Grandes pedidos corporativos y compras por contenedor (1.000+ uds)",
        transit: "18 - 25 Días (América) / 28 - 35 Días (Europa)",
        costPerCap: "$0.30 - $0.75 / ud",
        customs: "Gestionado por el agente de aduanas del cliente",
      },
      {
        mode: "Marítimo DDP Barco Rápido",
        bestFor: "Equilibrio óptimo entre bajo coste y fecha garantizada",
        transit: "20 - 25 Días Puerta a Puerta",
        costPerCap: "$0.55 - $0.95 / ud",
        customs: "Despacho completo en puerto y entrega final por camión",
      },
    ],
    termsTitle: "3. Términos Comerciales Internacionales: FOB vs CIF vs DDP",
    termsIntro:
      "Evita sobrecostes portuarios eligiendo el Incoterm más conveniente con tu fabricante:",
    terms: [
      {
        term: "DDP (Delivered Duty Paid - Entrega con Derechos Pagados)",
        label: "La Opción Más Cómoda para Marcas en Crecimiento",
        desc: "La fábrica gestiona la producción, el despacho de exportación en China, el flete internacional, el despacho aduanero en destino y paga los aranceles. Tu pedido llega directamente a tu almacén sin trámites burocráticos.",
        recommended: true,
      },
      {
        term: "FOB (Free On Board - Franco a Bordo)",
        label: "Estándar para Importadores Experimentados",
        desc: "Baoding Junyang entrega la mercancía en el puerto de salida chino (Tianjin o Qingdao) y realiza el despacho de exportación. Tú contratas a tu propio transitorio para el flete marítimo y la aduana local.",
        recommended: false,
      },
      {
        term: "EXW (Ex Works - En Fábrica)",
        label: "Entrega Directa en Planta",
        desc: "Asumes la responsabilidad desde las puertas de nuestra fábrica en Baoding. Solo recomendable si consolidas contenedores mixtos en China con tu propio agente.",
        recommended: false,
      },
    ],
    faqs: [
      {
        q: "¿Qué documentos se necesitan para importar gorras personalizadas desde China?",
        a: "Un envío comercial requiere tres documentos clave: 1) Factura Comercial con descripción detallada y valor unitario; 2) Lista de Empaque (Packing List) con peso y medidas de las cajas; 3) Conocimiento de Embarque marítimo (B/L) o carta de porte aéreo (AWB).",
      },
      {
        q: "¿Las gorras personalizadas necesitan etiqueta de País de Origen obligatoria?",
        a: "Sí. Las normativas aduaneras internacionales exigen que las prendas lleven marcado permanente de origen. En Baoding Junyang cosemos una etiqueta discreta 'Made in China' en la badana interior junto a la etiqueta de tu marca.",
      },
      {
        q: "¿Cómo envía Baoding Junyang los pedidos a clientes de Europa y América?",
        a: "Ofrecemos tanto envíos FOB en puertos chinos (Tianjin o Qingdao) como envíos integrales DDP puerta a puerta donde todos los aranceles están prepagados.",
      },
      {
        q: "¿Cómo se empaquetan las gorras para que no se deformen en el transporte?",
        a: "Utilizamos cajas de cartón corrugado de exportación de doble canal (5 capas). Las gorras estructuradas y truckers van empaquetadas en paquetes de 25 unidades con soportes interiores de cartón para proteger la visera y la corona.",
      },
    ],
  },
};

export default function ImportingGuidePage() {
  const lang = useLang();
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en;

  const handleOpenInquiryModal = (intent: string = "importing_guide_inquiry") => {
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
      ? "¡Hola Baoding Junyang! He leído la guía de importación de gorras desde China y me gustaría consultar presupuesto FOB y opciones de envío DDP."
      : "Hi Baoding Junyang! I read your importing custom hats from China guide and would like to check FOB and DDP shipping options for our order.";

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
              "@id": `https://bdjunyang.com/${lang}/guide/importing-custom-hats-from-china`,
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
              onClick={() => handleOpenInquiryModal("import_guide_header_quote")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <FileText size={13} />
              <span>Get DDP Freight Quote</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_import_guide_whatsapp", "Import Guide Header WhatsApp")}
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
          { label: "Importing Custom Hats from China" },
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
            <button
              onClick={() => handleOpenInquiryModal("import_hero_calculator")}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 px-8 rounded-2xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
            >
              <DollarSign size={16} />
              <span>Calculate Custom DDP Landed Cost</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("hero_import_guide_whatsapp", "Import Guide Hero WhatsApp")}
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-2xl text-sm transition flex items-center justify-center gap-2 border border-gray-700"
            >
              <MessageCircle size={16} />
              <span>Consult Logistics Specialist</span>
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

      {/* Section 1: HS Code Breakdown */}
      <section className="py-20 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Tariff Classifications</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.tariffTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.tariffIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.tariffs.map((tf, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-yellow-400/20 text-yellow-800 font-mono font-bold text-xs px-3 py-1 rounded-full mb-3">
                    {tf.code}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{tf.category}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{tf.desc}</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Duty Rate Reference:</span>
                  <span className="text-xs font-semibold text-emerald-700">{tf.usDuty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Logistics Matrix */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Freight Modes & Times</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {c.logisticsTitle}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {c.logisticsIntro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-4 md:px-6">Shipping Mode</th>
                  <th className="py-4 px-4 md:px-6">Best For</th>
                  <th className="py-4 px-4 md:px-6">Transit Duration</th>
                  <th className="py-4 px-4 md:px-6">Estimated Cost / Cap</th>
                  <th className="py-4 px-4 md:px-6">Customs Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {c.logisticsMatrix.map((row, i) => (
                  <tr key={i} className={i === 3 ? "bg-yellow-50/60 font-medium" : "hover:bg-gray-50/60 transition"}>
                    <td className="py-4 px-4 md:px-6 font-bold text-gray-900">{row.mode}</td>
                    <td className="py-4 px-4 md:px-6 text-gray-600 text-xs">{row.bestFor}</td>
                    <td className="py-4 px-4 md:px-6 font-mono font-bold text-gray-900 whitespace-nowrap">{row.transit}</td>
                    <td className="py-4 px-4 md:px-6 font-mono font-bold text-emerald-700 whitespace-nowrap">{row.costPerCap}</td>
                    <td className="py-4 px-4 md:px-6 text-xs text-gray-500">{row.customs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Trade Terms (FOB vs DDP) */}
      <section className="py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
              Commercial Incoterms
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">
              {c.termsTitle}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {c.termsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {c.terms.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border flex flex-col justify-between ${
                  item.recommended ? "bg-gray-800 border-yellow-400 ring-2 ring-yellow-400/20" : "bg-gray-800/60 border-gray-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-black text-lg text-white">{item.term}</span>
                    {item.recommended && (
                      <span className="bg-yellow-400 text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-yellow-400 mb-2">{item.label}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Need an Itemized DDP Freight Quote?</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-xl">
                Tell us your target quantity and destination postal code. Our export team provides transparent door-to-door freight quotes with all customs duties included.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("bottom_import_guide_whatsapp", "Import Guide Bottom WhatsApp")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Logistics</span>
              </a>
              <button
                onClick={() => handleOpenInquiryModal("import_bottom_quote_form")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 px-6 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText size={16} />
                <span>Request DDP Landed Quote</span>
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
              <span>Importing FAQs</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
              Frequently Asked Questions About Importing Hats
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
