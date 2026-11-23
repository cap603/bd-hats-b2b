"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useT, useLang } from "../../../lib/i18n";
import { HATS, Product } from "../../../lib/products";
import { priceLabel, priceRange, hasNumericPrice } from "../../../lib/price";
import { 
  MessageCircle, ArrowLeft, ShieldCheck, Zap, Globe, Cpu, 
  CheckCircle2, ChevronDown, ChevronUp, Image as ImageIcon, 
  Settings, HelpCircle, Package, Truck, FileDown, Sparkles
} from "lucide-react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher";
import { ShippingCalculator } from "../../../components/ShippingCalculator";
import { InquiryForm } from "../../../components/InquiryForm";
import { trackWhatsAppClick } from "../../../lib/tracking";
import { CATEGORY_LANDING, CATEGORY_COMPARISONS, labelFor } from "../../../lib/product-links";

function getProductSku(id: string): string {
  const map: Record<string, string> = {
    "two-tone-3d-embroidery-a-frame-cap": "JY-101",
    "custom-3d-embroidered-5-panel-gorras": "JY-102",
    "structured-multi-color-baseball-cap": "JY-103",
    "ladies-plain-blank-cotton-sports-cap": "JY-104",
    "personalised-two-tone-a-frame-cap": "JY-105",
    "breathable-custom-embroidered-6-panel": "JY-106",
    "vintage-acid-wash-6-panel-dad-hat": "JY-201",
    "custom-foam-front-5-panel-trucker-hat": "JY-112",
    "cotton-front-5-panel-mesh-trucker-cap": "JY-113",
    "curved-brim-6-panel-mesh-trucker-cap": "JY-114",
    "vintage-flat-brim-snapback-cap": "JY-301",
    "waterproof-nylon-large-brim-bucket-hat": "JY-401",
    "outdoor-performance-5-panel-cap": "JY-501",
    "custom-embroidery-knitted-beanie": "JY-601",
    "retro-washed-knitted-beanie": "JY-602",
    "silk-lined-pompom-knitted-beanie": "JY-603",
    "pompom-fur-ball-knitted-beanie": "JY-604",
    "multi-colour-satin-lined-winter-beanie": "JY-605",
  };
  return map[id] || "JY-CAP";
}

export default function ProductDetail() {
  const t = useT("product");
  const lang = useLang();
  const { id } = useParams();
  const hat = HATS.find(h => String(h.id) === String(id));
  const [activeTab, setActiveTab] = useState("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // True 404 for unknown/discontinued products (was a soft-404 returning 200 +
  // "Product Not Found", wasting crawl budget and confusing Google's indexer).
  if (!hat) {
    notFound();
  }

  const handleWhatsAppClick = () => {
    const sku = getProductSku(String(hat.id));
    trackWhatsAppClick({
      button: "pdp_sticky_bar",
      label: `Product: [${sku}] ${hat.name}`,
    });
    const isEs = lang === "es";
    const text = encodeURIComponent(
      isEs
        ? `¡Hola Baoding Junyang! Me gustaría solicitar cotización de fábrica y ficha técnica para [${sku}] "${hat.name}". MOQ ${hat.moq} uds.`
        : `Hi Baoding Junyang! I would like to get a wholesale quote and spec sheet for [${sku}] "${hat.name}". MOQ ${hat.moq}pcs.`
    );
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  const handleMockupWhatsApp = () => {
    const sku = getProductSku(String(hat.id));
    trackWhatsAppClick({
      button: "mockup_review_whatsapp",
      label: `3D Mockup Request: [${sku}] ${hat.name}`,
    });
    const isEs = lang === "es";
    const text = encodeURIComponent(
      isEs
        ? `¡Hola Baoding Junyang! Me gustaría solicitar una vista previa 3D y revisión técnica de bordado gratuita para mi logotipo en el modelo [${sku}] "${hat.name}".`
        : `Hi Baoding Junyang! I would like to request a free 2-hour 3D digital mockup and embroidery feasibility review for my logo on [${sku}] "${hat.name}".`
    );
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": hat.name,
    "description": hat.fullDesc,
    "image": `https://bdjunyang.com${hat.img}`,
    "sku": getProductSku(String(hat.id)),
    "mpn": getProductSku(String(hat.id)),
    "brand": {
      "@type": "Brand",
      "name": "BD Hats"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Baoding Junyang Hat Manufacturing Co., Ltd."
    },
    "offers": {
      "@type": "AggregateOffer",
      // Numeric prices are emitted only for products with a published FOB band.
      // Quote-on-request products omit them rather than advertising a number
      // the factory has not confirmed.
      "lowPrice": priceRange(hat.price)?.low,
      "highPrice": priceRange(hat.price)?.high,
      "priceCurrency": "USD",
      // offerCount removed (2026-11-23): "1" contradicted the low–high price
      // band and was a string. AggregateOffer permits omission; Google can
      // still build the product snippet from the band.
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": `https://bdjunyang.com/${lang}/product/${hat.id}`,
    },
    "seller": {
      "@type": "Organization",
      "name": "Baoding Junyang Hat Manufacturing Co., Ltd.",
      "url": "https://bdjunyang.com",
    },
    "material": hat.specs.material,
    "category": hat.category || "Baseball Caps"
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* BreadcrumbList is emitted by the <Breadcrumb /> component below, so the
          page declares it exactly once for the whole site. */}
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 text-black font-bold hover:text-gray-600 transition">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">{t("backToCatalog")}</span>
        </Link>
        <img 
          src="/images/brand/junyang-logo.webp" 
          alt="JUNYANG" 
          className="h-8 w-auto"
        />
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 transition"
        >
            <MessageCircle size={16} /> {t("whatsappQuote")}
        </button>
      </nav>

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: "Home", href: `/${lang}` },
        { label: hat.category || "Products", href: `/${lang}${CATEGORY_LANDING[hat.category || "Baseball Caps"] ?? "/#catalog"}` },
        { label: hat.name }
      ]} />

      <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Images & Quality Badges */}
          <div className="space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl relative group">
              <img src={hat.img} alt={hat.name} className="w-full h-auto object-cover group-hover:scale-105 transition duration-700" width="960" height="960" />
              <div className="absolute top-6 left-6 flex gap-2">
                 <span className="bg-black/80 backdrop-blur text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full">{t("topSeller")}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { icon: ShieldCheck, label: t("qc"), sub: t("qcSub") },
                 { icon: Zap, label: t("production"), sub: t("productionSub") },
                 { icon: Package, label: t("moq"), sub: t("moqSub") },
                 { icon: Truck, label: t("shipping"), sub: t("shippingSub") }
               ].map((item, i) => (
                 <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                    <item.icon className="text-black mb-2" size={24} />
                    <span className="text-xs font-black text-black leading-none mb-1">{item.label}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.sub}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Meta & Tabs */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="text-yellow-600 text-xs font-black uppercase tracking-widest mb-2 block">{hat.category || "Premium Headwear"}</span>
              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">{hat.name}</h1>
               <div className="flex items-baseline gap-3 mb-4">
                 <span className="text-3xl font-black text-black">{hat.price}</span>
                 {/* "/ Unit (FOB)" only reads correctly next to a numeric price.
                     Quote-on-request products show the MOQ instead. */}
                 <span className="text-gray-400 font-bold">
                   {hasNumericPrice(hat.price) ? t("unit") : `MOQ ${hat.moq} pcs`}
                 </span>
               </div>

              {/* Urgency strip — production slot availability */}
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2.5 mb-4 animate-pulse">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
                </span>
                <p className="text-xs font-bold text-yellow-800">{t("urgencyStrip")}</p>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{hat.fullDesc}</p>

              {/* Above-the-fold quick actions */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl transition shadow-lg shadow-green-500/20 text-base"
              >
                <MessageCircle size={20} /> {t("getQuote")}
              </button>
            </div>

            {/* Tab Controls */}
            <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
              {[
                { id: "specs", label: t("tabs.specs"), icon: Cpu },
                { id: "custom", label: t("tabs.custom"), icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${
                    activeTab === tab.id ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content: Specifications */}
            {activeTab === "specs" && (
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {Object.entries(hat.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500 font-medium capitalize">{key}</span>
                      <span className="text-black font-bold text-right">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">MOQ</span>
                    <span className="text-black font-bold">{hat.moq} Pcs / Style</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Export Packing</span>
                    <span className="text-black font-bold text-right">100 pcs/ctn (60×45×40cm, ~12kg)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Sweatband Craft</span>
                    <span className="text-black font-bold text-right">4-needle stitch with foam</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Production SLA</span>
                    <span className="text-black font-bold text-right">Sample 7d · Bulk 15–20d</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Sampling Policy</span>
                    <span className="text-emerald-600 font-bold text-right">100% Refundable on Bulk ≥500 pcs</span>
                  </div>
                </div>
              </div>
            )}

            {/* B2B Factory Engineering & Anti-Pitfall Advisory */}
            <div className="my-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={18} />
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  {lang === "es" ? "Criterios de Ingeniería B2B" : "Factory Engineering Advisory"}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2">
                {lang === "es" ? "Puntos Clave de Producción para Evitar Errores" : "Production Feasibility & Anti-Deformation Standards"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                {lang === "es"
                  ? "Recomendaciones directas del equipo de patronaje y bordado Barudan para optimizar calidad y reducir mermas."
                  : "Direct manufacturing guidelines from our Baoding Barudan embroidery and pattern-making floor."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {lang === "es" ? "Bordado 3D vs Costura Frontal" : "3D Puff vs Centre Seam"}
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {lang === "es"
                      ? "Para logotipos 3D grandes recomendamos perfiles de 5 paneles. La ausencia de costura central evita deformaciones y saltos de aguja."
                      : "For oversized 3D puff artwork, 5-panel silhouettes prevent needle deflection and distortion across the vertical centre seam."}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {lang === "es" ? "Lavado Vintage y Bordado" : "Vintage Enzyme Wash Sequence"}
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {lang === "es"
                      ? "En gorras desgastadas bordamos después del lavado para máxima nitidez, o antes para lograr un desgaste auténtico vintage según muestra firmada."
                      : "For distressed caps, embroidery can be executed pre-wash for authentic weathering or post-wash for sharp contrast per approved sign-off."}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {lang === "es" ? "Protección de Estructura Buckram" : "Rigid Buckram Crown Protection"}
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {lang === "es"
                      ? "Gorras estructuradas empacadas en 4 cajas interiores de 25 uds dentro de cartón máster de 5 capas (60×45×40cm) para evitar aplastamientos en flete marítimo."
                      : "Structured crowns are packed in 4 inner boxes (25 caps each) within 5-ply seaworthy master cartons (60×45×40cm) to prevent creasing in transit."}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {lang === "es" ? "Banda de Sudor de 4 Agujas" : "4-Needle Ergonomic Sweatband"}
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {lang === "es"
                      ? "Confección con espuma de celda cerrada y costura cuádruple de precisión para absorción de sudor duradera y confort sin roces."
                      : "Multi-needle stitch pitch with closed-cell anti-sweat foam ensures long-term comfort, shape retention, and zero stitch chafing."}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Content: Customization */}
            {activeTab === "custom" && (
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-in fade-in duration-500">
                <h4 className="font-black text-black mb-6 uppercase tracking-wider">{hat.customization?.title || "OEM/ODM Capabilities"}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {(hat.customization?.options || [
                    "Full color custom logo embroidery (3D/Flat/Chenille)",
                    "Internal custom woven labels and care tags",
                    "Custom printed seam tape with your brand name",
                    "Custom hangtags, stickers, and box packaging",
                    "Bespoke fabrics and Pantone-matched materials"
                  ]).map((opt, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                      <span className="text-sm font-bold text-gray-800">{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ moved out of the tab set — see the full-width section below.
                Inside a tab + accordion the answers never reached the initial
                HTML, so crawlers and AI retrieval could not read them. */}

            {/* Action Buttons */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl transition shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} /> {t("getQuote")}
              </button>
               <Link href={`/${lang}/#inquiry?intent=sample`} className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-4 rounded-xl transition flex items-center justify-center text-sm uppercase tracking-widest">
                  {t("orderSample")}
              </Link>
            </div>

            {/* B2B Brand Developer Tools — Zero-Cost Digital Lead Magnet */}
            <div className="mt-8 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">
                  <Sparkles size={13} />
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                  {t("devToolsBadge")}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight mb-1">
                {t("devToolsTitle")}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t("devToolsSub")}
              </p>

              <div className="space-y-3">
                {/* Tool 1: Blank Tech Pack Template */}
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <FileDown size={22} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-snug">
                        {t("techpackTitle")}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                        {t("techpackDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <Link
                      href={`/${lang}/custom-hat-tech-pack-template`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
                    >
                      <FileDown size={14} />
                      <span>{t("techpackBtn")}</span>
                    </Link>
                  </div>
                </div>

                {/* Tool 2: Free 2-Hour 3D Mockup & Feasibility Review */}
                <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <Zap size={22} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-snug">
                        {t("mockupTitle")}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                        {t("mockupDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <button
                      onClick={handleMockupWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm cursor-pointer"
                    >
                      <MessageCircle size={14} />
                      <span>{t("mockupBtn")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics & Export Packing CBM Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShippingCalculator
          defaultCapType={
            hat.category?.toLowerCase().includes("beanie")
              ? "beanie"
              : hat.category?.toLowerCase().includes("dad") || hat.category?.toLowerCase().includes("bucket")
              ? "unstructured"
              : "structured"
          }
          productName={hat.name}
          sku={getProductSku(String(hat.id))}
        />
      </section>

      {/* Pre-Production Sample QC Checklist (3 physical tests) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck size={18} />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
              {lang === "es" ? "Protocolo de Recepción de Muestra" : "Pre-Production Sample Acceptance Protocol"}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2">
            {lang === "es" ? "3 Pruebas Físicas para Aprobar su Muestra de Preproducción" : "3 Physical Tests to Sign Off Your Pre-Production Sample"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
            {lang === "es"
              ? "Cuando llegue la muestra a su oficina, realice estas tres pruebas antes de autorizar la producción en masa. Son los mismos puntos de control que aplica nuestro equipo de QC en planta."
              : "When the sample arrives at your office, run these three checks before authorising bulk. They mirror the checkpoints our in-house QC team applies on the factory floor."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full inline-block mb-2">TEST 01</div>
              <h4 className="font-black text-slate-900 mb-1">
                {lang === "es" ? "Compresión y Rebote de Corona" : "Crown Pinch & Spring-Back Test"}
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {lang === "es"
                  ? "Comprima la corona estructurada y suelte: el refuerzo buckram debe recuperar la forma al instante sin pliegues permanentes. Verifique la alineación de la costura frontal con el centro de la visera (tolerancia industrial ±1mm)."
                  : "Pinch the structured crown and release: the buckram backing should recover its shape immediately without permanent creases. Check front-seam to visor centreline alignment within the ±1mm industrial tolerance."}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full inline-block mb-2">TEST 02</div>
              <h4 className="font-black text-slate-900 mb-1">
                {lang === "es" ? "Sellado de Espuma 3D Puff" : "3D Puff Foam Sealing & Stitch Density"}
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {lang === "es"
                  ? "Bajo luz intensa y lupa, las puntadas satinadas de alta densidad deben encapsular por completo la espuma EVA: sin espuma blanca expuesta en bordes ni esquinas, y sin hilos sueltos."
                  : "Under strong light and magnification, the high-density satin stitches must fully encapsulate the EVA foam — no white foam visible at edges or corners, and no loose thread tails."}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full inline-block mb-2">TEST 03</div>
              <h4 className="font-black text-slate-900 mb-1">
                {lang === "es" ? "Badana Plana de 4 Agujas" : "4-Needle Sweatband Flatlock Check"}
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {lang === "es"
                  ? "Abra la badana interior: las 4 hileras de costura deben mantener paso uniforme, la espuma de celda cerrada sin arrugas ni bordes levantados, y sin rebabas de hilo en la zona de contacto con la frente."
                  : "Flip the inner sweatband: the 4 stitch rows must hold an even pitch, the closed-cell foam must lie flat without wrinkles or lifted edges, and there must be no thread burrs at the forehead contact zone."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric × Decoration Compatibility Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-blue-50 text-blue-600">
              <Cpu size={18} />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              {lang === "es" ? "Matriz de Compatibilidad Textil" : "Fabric × Decoration Compatibility Matrix"}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2">
            {lang === "es" ? "Qué Tejido Soporta Mejor su Logotipo" : "Which Fabric Carries Your Logo Best"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
            {lang === "es"
              ? "La elección del tejido fija el techo de calidad de la decoración. Estos cuatro grupos cubren la mayoría de los programas B2B de gorras."
              : "Fabric choice sets the quality ceiling for decoration. These four groups cover most B2B cap programs."}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-900 text-white text-left">
                  <th className="p-3 font-black rounded-tl-xl">{lang === "es" ? "Tejido" : "Fabric"}</th>
                  <th className="p-3 font-black">{lang === "es" ? "Decoración Óptima" : "Best Decoration"}</th>
                  <th className="p-3 font-black rounded-tr-xl">{lang === "es" ? "Nota de Ingeniería" : "Engineering Note"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/60">
                  <td className="p-3 font-bold text-slate-900">{lang === "es" ? "Sarga de Algodón Pesada (280gsm)" : "Heavyweight Chino Twill (280gsm)"}</td>
                  <td className="p-3 text-slate-700">{lang === "es" ? "Bordado plano y 3D puff" : "Flat embroidery & 3D puff"}</td>
                  <td className="p-3 text-slate-600">{lang === "es" ? "Tejido denso y estable: soporta alta densidad de puntadas sin distorsión de paneles." : "Dense, stable weave: supports high stitch density without panel distortion."}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">{lang === "es" ? "Pana Gruesa 8-Wale" : "8-Wale Corduroy"}</td>
                  <td className="p-3 text-slate-700">{lang === "es" ? "Bordado con base Tatami" : "Tatami-underlay embroidery"}</td>
                  <td className="p-3 text-slate-600">{lang === "es" ? "El pelo alto exige base Tatami de alta densidad para evitar que las letras se hundan entre los canalés." : "High pile requires a dense Tatami underlay so lettering does not sink into the wales."}</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="p-3 font-bold text-slate-900">{lang === "es" ? "Nailon Técnico DWR" : "DWR Performance Nylon"}</td>
                  <td className="p-3 text-slate-700">{lang === "es" ? "Micro-logo / silicona / perforación láser" : "Micro-logo / silicone / laser perforation"}</td>
                  <td className="p-3 text-slate-600">{lang === "es" ? "Los agujeros de aguja pueden filtrar agua: evitar bordados muy densos; preferir parches de silicona o ventilación láser." : "Needle holes can leak: avoid ultra-dense embroidery; prefer silicone patches or laser ventilation."}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">{lang === "es" ? "Mezcla Lana / Acrílico" : "Wool / Acrylic Blend"}</td>
                  <td className="p-3 text-slate-700">{lang === "es" ? "3D puff de gran formato" : "Oversized 3D puff lettering"}</td>
                  <td className="p-3 text-slate-600">{lang === "es" ? "Alta rigidez y gramaje: la mejor base para letras 3D elevadas en perfiles snapback de visera plana." : "Stiff, heavy hand: the best base for raised 3D lettering on flat-brim snapback profiles."}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOB Volume Pricing Tiers (factory-confirmed rates) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-amber-400/20 text-amber-400">
              <Package size={18} />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              {lang === "es" ? "Escalas de Precio FOB por Volumen" : "FOB Volume Pricing Tiers"}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black tracking-tight mb-2">
            {lang === "es" ? "Cómo el Volumen Reduce su Costo Unitario FOB" : "How Volume Reduces Your Unit FOB Cost"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            {lang === "es"
              ? "Digitalización, ajuste de máquinas y preparación son costos únicos que se amortizan entre todo el lote. A mayor volumen, menor costo unitario. El precio final se confirma en la cotización desglosada en 2 horas."
              : "Digitizing, machine setup and tooling are one-time costs amortised across the run. Larger runs spread them further, so the unit FOB price drops. Exact figures are confirmed in your itemised written quote within 2 hours."}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[640px]">
              <thead>
                <tr className="text-left border-b border-slate-700">
                  <th className="p-3 font-black text-amber-400">{lang === "es" ? "Volumen" : "Quantity"}</th>
                  <th className="p-3 font-black text-amber-400">{lang === "es" ? "Precio de Referencia (FOB China)" : "Reference Price (FOB China)"}</th>
                  <th className="p-3 font-black text-amber-400">{lang === "es" ? "Qué Incluye / Escenario" : "What It Covers / Use Case"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3 font-black text-white">200 Pcs</td>
                  <td className="p-3 font-bold text-amber-300">$5.20 – $6.80 FOB</td>
                  <td className="p-3 text-slate-300">{lang === "es" ? "Lote de prueba o test multicolor; amortiza digitalización y preparación de bordado." : "Starter / multi-colour test batch; amortises embroidery digitizing & setup."}</td>
                </tr>
                <tr className="bg-slate-800/60">
                  <td className="p-3 font-black text-white">500 Pcs</td>
                  <td className="p-3 font-bold text-amber-300">$4.20 – $5.20 FOB</td>
                  <td className="p-3 text-slate-300">{lang === "es" ? "100% de devolución del costo de muestra · etiquetas tejidas y de cuidado personalizadas gratis." : "100% sample fee credit · free custom woven brand & care labels."}</td>
                </tr>
                <tr>
                  <td className="p-3 font-black text-white">1,000 Pcs</td>
                  <td className="p-3 font-bold text-amber-300">$3.80 – $4.20 FOB</td>
                  <td className="p-3 text-slate-300">{lang === "es" ? "Corte por rollo completo y programación continua en líneas Barudan de 20 cabezales." : "Full-roll fabric cutting and continuous scheduling on 20-head Barudan lines."}</td>
                </tr>
                <tr className="bg-slate-800/60">
                  <td className="p-3 font-black text-white">5,000+ Pcs</td>
                  <td className="p-3 font-bold text-amber-300">{lang === "es" ? "Cotización dedicada" : "Dedicated Quote"}</td>
                  <td className="p-3 text-slate-300">{lang === "es" ? "Teñido Pantone a medida, tejido a medida y optimización de carga en contenedor completo." : "Custom Pantone mill dyeing, bespoke weaving and full-container load optimisation."}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-500 mt-4">
            {lang === "es"
              ? "*Precios de referencia FOB China para bordado frontal estándar; no incluyen flete internacional. El precio final por proyecto se confirma en la cotización desglosada en 2 horas."
              : "*Reference FOB China prices for standard front embroidery; international freight excluded. Final per-project pricing is confirmed in the itemised written quote within 2 hours."}
          </p>
        </div>
      </section>

      {/* In-Page Single-SKU RFQ Form */}
      <section id="product-rfq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10 scroll-mt-24">
        <div className="text-center mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full inline-block mb-2">
            {lang === "es" ? "Cotización en 2h · Revisión Directa de Fábrica" : "Written Quote in 2h · Direct Factory Review"}
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            {lang === "es" ? `Cotizar: ${hat.name}` : `Request a Quote for ${hat.name}`}
            <span className="text-sm font-bold text-slate-400 ml-2">(SKU: {getProductSku(String(hat.id))})</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            {lang === "es"
              ? "Eileen y el equipo de ingeniería comercial revisarán sus especificaciones y enviarán la cotización FOB desglosada en menos de 2 horas."
              : "Eileen and the sales engineering team will review your specs and send your itemised FOB quote within 2 hours."}
          </p>
        </div>
        <InquiryForm productName={hat.name} sku={getProductSku(String(hat.id))} />
      </section>

      {/* FAQ — full width and always in the DOM, with matching FAQPage JSON-LD.
          <details> keeps the accordion behaviour without needing JS state, so the
          answers are in the served HTML and eligible for rich results. */}
      {(() => {
        const engineeringFaqs = [
          { q: "5-panel or 6-panel for large 3D puff embroidery?", a: "The 5-panel front crown has no vertical centre seam, allowing large 3D puff artwork to sit completely flat. A 6-panel front seam runs under the logo and can distort high-density puff stitches. For oversized front embroidery, our engineers recommend 5-panel." },
          { q: "What packing protects a structured crown during international transit?", a: "We pack 25 caps per inner box and 4 inner boxes per master carton (100 caps total) in 5-ply double-wall export corrugated boxes (60×45×40cm, ~12kg gross weight). You can verify exact CBM and gross weight in our Carton Calculator." },
          { q: "Does order quantity change the unit FOB price?", a: "Yes. Setup, digitizing and tooling are one-time costs spread across the order run. Larger runs spread them further, so the unit FOB price is lower. Exact figures are confirmed in your itemised quotation." },
          { q: "What technical details are needed to provide an accurate quotation?", a: "Silhouette style, target quantity, fabric GSM, decoration type and stitch count, closure/hardware type, and destination country. With these we deliver an itemised written quotation within 2 hours." }
        ];
        const baseFaqs = hat.faqs || [
          { q: "Can I get a sample before bulk production?", a: "Yes, we produce a physical sample for your final approval. Lead time is 7 days with full HD video and photo proof before shipping." },
          { q: "Do you ship worldwide?", a: "We ship to over 50 countries via DHL/FedEx/UPS air express (4-7 days) and FCL/LCL ocean freight with door-to-door delivery." },
        ];
        const faqs = [...baseFaqs, ...engineeringFaqs.filter(ef => !baseFaqs.some(bf => bf.q === ef.q))];
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        };
        return (
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">
                {hat.name} — {t("faqHeading")}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl shadow-sm transition">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                      <span className="font-black text-black text-sm uppercase tracking-tight">{faq.q}</span>
                      <ChevronDown size={20} className="shrink-0 transition group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Where to go next — links up to the category landing page, sideways into
          the comparison cluster and across to the buying guides. */}
      {(() => {
        const category = hat.category || "Baseball Caps";
        const landing = CATEGORY_LANDING[category];
        const comparisons = (CATEGORY_COMPARISONS[category] ?? []).slice(0, 3);
        const supportPages = ["/pricing", "/materials", "/guide"];
        return (
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("moreInfo")}</span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-2">{t("moreInfoTitle")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {landing && (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{t("moreInfoCategory")}</h3>
                  <Link href={`/${lang}${landing}`} className="block bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-4 text-sm font-bold text-black transition">
                    {labelFor(landing, lang as "en" | "es")}
                  </Link>
                </div>
              )}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{t("moreInfoCompare")}</h3>
                <ul className="space-y-2">
                  {comparisons.map((href) => (
                    <li key={href}>
                      <Link href={`/${lang}${href}`} className="block bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-4 text-sm font-bold text-black transition">
                        {labelFor(href, lang as "en" | "es")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{t("moreInfoGuides")}</h3>
                <ul className="space-y-2">
                  {supportPages.map((href) => (
                    <li key={href}>
                      <Link href={`/${lang}${href}`} className="block bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-4 text-sm font-bold text-black transition">
                        {labelFor(href, lang as "en" | "es")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Related Products */}
      {(() => {
        // Same-category first, then top up from other categories — otherwise a
        // trucker hat page would recommend three unrelated baseball caps.
        const sameCategory = HATS.filter(h => h.id !== hat.id && h.category === hat.category);
        const otherCategories = HATS.filter(h => h.id !== hat.id && h.category !== hat.category);
        const related = [...sameCategory, ...otherCategories].slice(0, 3);
        if (related.length === 0) return null;
        return (
          <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("related")}</span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-2">{t("relatedTitle")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/${lang}/product/${r.id}`} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" width="480" height="480" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600">{r.category}</span>
                    <h3 className="font-bold text-sm text-black mt-1 mb-2 group-hover:text-yellow-600 transition line-clamp-2">{r.name}</h3>
                    <p className="text-xs font-black text-black">{priceLabel(r.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* Global Compliance & Trust Bar */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-10">{t("trustBar")}</p>
           <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
              <span className="font-black text-2xl italic">REACH</span>
              <span className="font-black text-2xl italic">ISO 9001</span>
              <div className="flex items-center gap-2 border-2 border-black px-4 py-1.5 rounded-lg">
                 <span className="font-black text-2xl italic">CE</span>
              </div>
              <span className="font-black text-2xl italic">SGS VERIFIED</span>
              <span className="font-black text-2xl italic">RoHS</span>
           </div>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="bg-black py-16 text-center">
         <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
           <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG" 
              className="h-12 w-auto mb-8 opacity-50"
            />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              © 2026 Baoding Junyang Hat Manufacturing Co., Ltd.
            </p>
         </div>
      </footer>

      {/* Mobile sticky inquiry bar — Upgraded with SKU, MOQ and Quick Quote */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black bg-slate-900 text-white px-1.5 py-0.5 rounded">
              {getProductSku(String(hat.id))}
            </span>
            <span className="text-xs font-black text-slate-900 truncate">
              {hat.name}
            </span>
          </div>
          <div className="text-[11px] text-slate-500 font-bold mt-0.5">
            <span className="text-emerald-600 font-black">
              {hat.price.includes("-") ? `From ${hat.price.split("-")[0].trim()}` : hat.price}
            </span> · MOQ {hat.moq}
          </div>
        </div>
        <button
          onClick={handleWhatsAppClick}
          className="shrink-0 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black px-4 py-2.5 rounded-xl transition text-xs shadow-md shadow-emerald-600/20 cursor-pointer"
        >
          <MessageCircle size={15} />
          <span>{t("getQuote")}</span>
        </button>
      </div>
      {/* Spacer so footer content is not covered by sticky bar on mobile */}
      <div className="h-20 lg:hidden" />
    </main>
  );
}
