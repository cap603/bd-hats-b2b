"use client";

import Link from "next/link";
import { Package, Truck, ShieldCheck, ArrowRight, MessageCircle, CheckCircle2, Box } from "lucide-react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { useLang } from "../../../lib/i18n";
import { NavCompareMenu } from "../../../components/NavCompareMenu";
import { NavProductsMenu } from "../../../components/NavProductsMenu";
import { MobileNav } from "../../../components/MobileNav";
import { ShippingCalculator } from "../../../components/ShippingCalculator";
import { trackWhatsAppClick } from "../../../lib/tracking";

const WHATSAPP_NUMBER = "8615933930830";

export default function CartonCalculatorPage() {
  const lang = useLang();
  const isEs = lang === "es";

  const handleWhatsApp = () => {
    trackWhatsAppClick({
      button: "carton_calc_page_hero",
      label: "Carton Calculator Page Hero CTA",
    });
    const greeting = isEs
      ? "¡Hola BD Hats! He utilizado su Calculadora de Embalaje y CBM. Quisiera confirmar especificaciones de embalaje y solicitar cotización FOB China en 2 horas."
      : "Hi BD Hats, I used your carton calculator. Please confirm export packing specifications and quote FOB China within 2 hours.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(greeting)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
              BD HATS
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 rounded">
              Baoding Junyang
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <NavProductsMenu />
            <NavCompareMenu />
            <Link href={`/${lang}/pricing`} className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition">
              {isEs ? "Precios y Costes" : "Pricing & MOQ"}
            </Link>
            <Link href={`/${lang}/custom-hat-tech-pack-template`} className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition">
              {isEs ? "Plantillas Tech Pack" : "Tech Pack Templates"}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition shadow-xs cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>{isEs ? "WhatsApp Fábrica" : "WhatsApp Factory"}</span>
            </button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <Breadcrumb items={[
          { label: isEs ? "Inicio" : "Home", href: `/${lang}` },
          { label: isEs ? "Herramientas B2B" : "B2B Tools", href: `/${lang}#tools` },
          { label: isEs ? "Calculadora de Embalaje y CBM" : "Export Carton & CBM Calculator" },
        ]} />

        {/* Hero Title */}
        <div className="mt-4 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 mb-3">
            <Box size={14} />
            <span>{isEs ? "Estándar de Embalaje Industrial B2B" : "Standard Export Packaging Specification"}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {isEs
              ? "Calculadora B2B de Embalaje, Peso Bruto y Volumen CBM"
              : "B2B Export Carton, Gross Weight & Freight CBM Calculator"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            {isEs
              ? "Planifique la logística de importación de gorras personalizadas con precisión de fábrica. Calcule cajas máster (60×45×40cm), peso bruto y volumen cúbico para envíos aéreos o marítimos FCL/LCL."
              : "Plan your international custom headwear logistics with factory precision. Estimate master export cartons (60×45×40cm), gross weight, and cubic metric volume (CBM) for Air Express, Air Cargo, or Ocean Container freight."}
          </p>
        </div>

        {/* Embedded Calculator */}
        <ShippingCalculator />

        {/* Industrial Engineering & Container Specifications */}
        <div className="mt-12 space-y-8">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <Package size={20} className="text-blue-600" />
              <span>{isEs ? "Especificaciones Estándar de Cajas de Exportación" : "Standard Export Master Carton Specifications"}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Dimensiones Máster" : "Master Carton Dimensions"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  60 × 45 × 40 cm
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "0.108 CBM por caja (Corrugado 5 capas reforzado)" : "0.108 CBM / carton (Double-wall 5-ply export)"}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Capacidad Gorras (Estructuradas y Sin Estructura)" : "Cap Capacity (Structured & Unstructured)"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  100 {isEs ? "uds / caja" : "pcs / carton"}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "4 cajas interiores individuales × 25 uds (~12.0 kg)" : "4 inner boxes × 25 pcs (~12.0 kg gross weight)"}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Capacidad Gorros de Lana (Beanies)" : "Knit Beanie Capacity"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  200 {isEs ? "uds / caja" : "pcs / carton"}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "Bolsas de 10 uds en caja máster (~14.0 kg)" : "10 pcs polybag master packs (~14.0 kg gross weight)"}
                </span>
              </div>
            </div>

            {/* Container Load Table */}
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">
              {isEs ? "Capacidad Estimada por Contenedor Marítimo FCL" : "Ocean Freight FCL Container Load Estimation"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">{isEs ? "Tipo de Contenedor" : "Container Type"}</th>
                    <th className="p-3">{isEs ? "Volumen Útil" : "Usable Volume"}</th>
                    <th className="p-3">{isEs ? "Cajas Estimadas" : "Cartons (60×45×40cm)"}</th>
                    <th className="p-3">{isEs ? "Capacidad en Gorras" : "Total Caps (100 pcs/ctn)"}</th>
                    <th className="p-3">{isEs ? "Tiempo de Tránsito" : "Estimated Transit"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-900">20GP Container</td>
                    <td className="p-3">~28 CBM</td>
                    <td className="p-3 font-semibold">~260 – 280 Cartons</td>
                    <td className="p-3 font-black text-emerald-600">~26,000 – 28,000 Pcs</td>
                    <td className="p-3">22 – 30 Days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-900">40HQ High-Cube</td>
                    <td className="p-3">~68 CBM</td>
                    <td className="p-3 font-semibold">~630 – 680 Cartons</td>
                    <td className="p-3 font-black text-emerald-600">~63,000 – 68,000 Pcs</td>
                    <td className="p-3">25 – 35 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-white border-t border-slate-200/80 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. Direct Factory B2B Export Solutions.</p>
        <p className="mt-1 text-[11px] text-slate-400">Written quotations delivered within 2 hours · admin@bdjunyang.com</p>
      </footer>
    </div>
  );
}
