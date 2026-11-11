"use client";

import { useState } from "react";
import { useLang } from "../lib/i18n";
import { Package, Truck, ShieldCheck, CheckCircle2, MessageCircle, Sparkles, Zap } from "lucide-react";
import { trackWhatsAppClick } from "../lib/tracking";

interface ShippingCalculatorProps {
  defaultCapType?: "structured" | "unstructured" | "beanie";
  productName?: string;
  sku?: string;
}

const DICT: Record<string, {
  badge: string;
  title: string;
  subtitle: string;
  selectType: string;
  types: {
    structured: { label: string; desc: string };
    unstructured: { label: string; desc: string };
    beanie: { label: string; desc: string };
  };
  orderQty: string;
  customPcs: string;
  resultsTitle: string;
  cartonsLabel: string;
  cartonsDesc: string;
  cbmLabel: string;
  cbmDesc: string;
  weightLabel: string;
  weightDesc: string;
  shippingModeLabel: string;
  recommended: string;
  airExpress: string;
  airCargo: string;
  oceanFreight: string;
  guaranteeBadge: string;
  guaranteeTitle: string;
  guaranteeDesc: string;
  guaranteePoints: string[];
  ctaBtn: string;
}> = {
  en: {
    badge: "B2B Logistics & Packaging Tool",
    title: "Export Packing & Landed CBM Calculator",
    subtitle: "Estimate exact carton counts, gross weight, and freight volume (CBM) for your custom headwear order.",
    selectType: "1. Select Cap Construction",
    types: {
      structured: { label: "Structured Caps", desc: "Snapbacks, Baseball, Trucker (100 pcs/ctn)" },
      unstructured: { label: "Unstructured / Bucket", desc: "Dad Hats, Campers, Buckets (150 pcs/ctn)" },
      beanie: { label: "Knit Beanies", desc: "Ribbed, Cuffed, Satin-Lined (200 pcs/ctn)" }
    },
    orderQty: "2. Order Quantity (Pcs)",
    customPcs: "Custom pcs",
    resultsTitle: "Logistics Specification Breakdown",
    cartonsLabel: "Export Cartons",
    cartonsDesc: "Double-wall 5-ply export corrugated (60×45×40cm)",
    cbmLabel: "Total Volume",
    cbmDesc: "Standard maritime / air freight metric volume",
    weightLabel: "Gross Weight",
    weightDesc: "Including polybags, inner boxes & master carton",
    shippingModeLabel: "Optimal Logistics Recommendation",
    recommended: "BEST FIT",
    airExpress: "Air Express (DHL / FedEx / UPS) · 4-7 Days Door-to-Door",
    airCargo: "Air Freight Cargo / Sea DDP Fast Line · 10-18 Days",
    oceanFreight: "Ocean LCL / FCL Container · 25-35 Days (Lowest Landed Cost)",
    guaranteeBadge: "Zero Risk Sourcing",
    guaranteeTitle: "100% Refundable Sampling Guarantee",
    guaranteeDesc: "Test factory quality with zero dead investment. Your initial sample development fee is 100% credited back onto your bulk invoice upon order confirmation.",
    guaranteePoints: [
      "7-Day rapid sample dispatch via DHL/FedEx",
      "Full digital stitch-out video proof before physical shipping",
      "Sample fee 100% reimbursed on bulk production (MOQ ≥ 200 pcs)"
    ],
    ctaBtn: "Get Landed Quote with this Packing Spec"
  },
  es: {
    badge: "Herramienta Logística B2B",
    title: "Calculadora de Embalaje y Volumen CBM",
    subtitle: "Calcule el número exacto de cajas, peso bruto y volumen marítimo (CBM) para su pedido de gorras personalizadas.",
    selectType: "1. Seleccione el Tipo de Gorra",
    types: {
      structured: { label: "Gorras Estructuradas", desc: "Snapbacks, Béisbol, Camionero (100 pzs/caja)" },
      unstructured: { label: "Sin Estructura / Bucket", desc: "Dad Hats, Gorros Pescador (150 pzs/caja)" },
      beanie: { label: "Gorros de Lana (Beanies)", desc: "Tejidos, con Vuelta, Forro Satén (200 pzs/caja)" }
    },
    orderQty: "2. Cantidad de Pedido (Piezas)",
    customPcs: "Cantidad personalizada",
    resultsTitle: "Desglose de Especificaciones Logísticas",
    cartonsLabel: "Cajas de Exportación",
    cartonsDesc: "Cartón corrugado de 5 capas reforzado (60×45×40cm)",
    cbmLabel: "Volumen Total (CBM)",
    cbmDesc: "Volumen métrico estándar para flete marítimo/aéreo",
    weightLabel: "Peso Bruto Estimado",
    weightDesc: "Incluyendo bolsas interiores y caja máster",
    shippingModeLabel: "Recomendación Logística Óptima",
    recommended: "RECOMENDADO",
    airExpress: "Aéreo Express (DHL / FedEx / UPS) · 4-7 Días Puerta a Puerta",
    airCargo: "Carga Aérea / Línea Rápida Marítima DDP · 10-18 Días",
    oceanFreight: "Transporte Marítimo LCL / FCL · 25-35 Días (Menor Coste)",
    guaranteeBadge: "Compra Sin Riesgo",
    guaranteeTitle: "Garantía de Muestra 100% Reembolsable",
    guaranteeDesc: "Pruebe la calidad de fábrica sin riesgo. El coste de desarrollo de muestra se reembolsa al 100% en la factura de producción al confirmar el pedido.",
    guaranteePoints: [
      "Envío de muestras rápido en 7 días vía DHL/FedEx",
      "Vídeo HD y prueba digital de bordado antes del envío",
      "Coste de muestra 100% deducido en producción (MOQ ≥ 200 pzs)"
    ],
    ctaBtn: "Solicitar Cotización con esta Especificación"
  },
  de: {
    badge: "B2B-Logistik-Tool",
    title: "Verpackungs- & CBM-Frachtrechner",
    subtitle: "Ermitteln Sie die genaue Kartonanzahl, das Bruttogewicht und das CBM-Volumen für Ihre Headwear-Bestellung.",
    selectType: "1. Kappen-Konstruktion wählen",
    types: {
      structured: { label: "Strukturierte Kappen", desc: "Snapbacks, Baseball, Trucker (100 Stk./Karton)" },
      unstructured: { label: "Unstrukturierte / Bucket", desc: "Dad Hats, Fischerhüte (150 Stk./Karton)" },
      beanie: { label: "Strickmützen (Beanies)", desc: "Gerippt, mit Umschlag (200 Stk./Karton)" }
    },
    orderQty: "2. Bestellmenge (Stück)",
    customPcs: "Eigene Stückzahl",
    resultsTitle: "Logistische Spezifikationsübersicht",
    cartonsLabel: "Exportkartons",
    cartonsDesc: "5-lagiger verstärkter Exportwellkarton (60×45×40cm)",
    cbmLabel: "Gesamtvolumen (CBM)",
    cbmDesc: "Standard-Frachtvolumen für See- und Luftfracht",
    weightLabel: "Bruttogewicht",
    weightDesc: "Inklusive Innenbeutel und Export-Umverpackung",
    shippingModeLabel: "Empfohlener Versandweg",
    recommended: "OPTIMAL",
    airExpress: "Luftfracht-Express (DHL / FedEx / UPS) · 4-7 Tage Haus-zu-Haus",
    airCargo: "Luftfracht Cargo / Seefracht DDP Express · 10-18 Tage",
    oceanFreight: "Seefracht LCL / FCL · 25-35 Tage (Günstigste Frachtkosten)",
    guaranteeBadge: "Risikofreie Beschaffung",
    guaranteeTitle: "100% Erstattbare Muster-Garantie",
    guaranteeDesc: "Testen Sie unsere Fabrikqualität ohne Risiko. Die Mustererstellungsgebühr wird bei Großauftragsbestätigung zu 100% auf die Rechnung gutgeschrieben.",
    guaranteePoints: [
      "7 Tage Musterschnellfertigung & Versand via DHL/FedEx",
      "HD-Stickvideonachweis vor physischem Versand",
      "100% Mustervergütung bei Großserie (MOQ ≥ 200 Stück)"
    ],
    ctaBtn: "Angebot mit diesen Verpackungsdaten anfordern"
  },
  fr: {
    badge: "Outil Logistique B2B",
    title: "Calculateur de Colisage & Volume CBM",
    subtitle: "Estimez le nombre exact de cartons, le poids brut et le volume maritime (CBM) pour votre commande.",
    selectType: "1. Type de Construction",
    types: {
      structured: { label: "Casquettes Structurées", desc: "Snapbacks, Baseball, Trucker (100 pcs/carton)" },
      unstructured: { label: "Non Structurées / Bobs", desc: "Dad Hats, Bob Hats (150 pcs/carton)" },
      beanie: { label: "Bonnets en Tricot", desc: "Côtelés, à Revers, Doublés (200 pcs/carton)" }
    },
    orderQty: "2. Quantité Commandée (Pièces)",
    customPcs: "Quantité sur mesure",
    resultsTitle: "Détail des Spécifications Logistiques",
    cartonsLabel: "Cartons Export",
    cartonsDesc: "Carton ondulé renforcé 5 plis (60×45×40cm)",
    cbmLabel: "Volume Total (CBM)",
    cbmDesc: "Volume métrique standard pour fret maritime/aérien",
    weightLabel: "Poids Brut Estimé",
    weightDesc: "Sachets individuels et carton d'expédition inclus",
    shippingModeLabel: "Mode d'Expédition Recommandé",
    recommended: "IDÉAL",
    airExpress: "Express Aérien (DHL / FedEx / UPS) · 4-7 Jours Porte-à-Porte",
    airCargo: "Fret Aérien / Ligne Rapide Maritime DDP · 10-18 Jours",
    oceanFreight: "Fret Maritime LCL / FCL · 25-35 Jours (Coût le plus bas)",
    guaranteeBadge: "Sourcing Sans Risque",
    guaranteeTitle: "Garantie Échantillon 100% Remboursable",
    guaranteeDesc: "Testez notre qualité industrielle sans risque. Les frais de développement d'échantillon sont déduits à 100% sur votre facture de production finale.",
    guaranteePoints: [
      "Production d'échantillon express en 7 jours via DHL/FedEx",
      "Validation vidéo HD de broderie avant expédition physique",
      "Frais d'échantillon déduits à 100% en production (MOQ ≥ 200 pcs)"
    ],
    ctaBtn: "Obtenir un Devis avec ces Spécifications"
  },
  pt: {
    badge: "Ferramenta Logística B2B",
    title: "Calculadora de Embalagem e Volume CBM",
    subtitle: "Calcule a contagem exata de caixas, peso bruto e volume de frete (CBM) para o seu pedido de bonés.",
    selectType: "1. Selecione a Estrutura do Boné",
    types: {
      structured: { label: "Bonés Estruturados", desc: "Snapbacks, Beisebol, Trucker (100 pcs/cx)" },
      unstructured: { label: "Sem Estrutura / Bucket", desc: "Dad Hats, Chapéus Bucket (150 pcs/cx)" },
      beanie: { label: "Gorros de Tricô (Beanies)", desc: "Com Dobra, Forro de Cetim (200 pcs/cx)" }
    },
    orderQty: "2. Quantidade do Pedido (Peças)",
    customPcs: "Qtd personalizada",
    resultsTitle: "Resumo das Especificações Logísticas",
    cartonsLabel: "Caixas de Exportação",
    cartonsDesc: "Papelão ondulado reforçado de 5 camadas (60×45×40cm)",
    cbmLabel: "Volume Total (CBM)",
    cbmDesc: "Volume métrico padrão para transporte marítimo/aéreo",
    weightLabel: "Peso Bruto Estimado",
    weightDesc: "Incluindo embalagens internas e caixa máster",
    shippingModeLabel: "Recomendação Logística Ideal",
    recommended: "MELHOR OPÇÃO",
    airExpress: "Aéreo Expresso (DHL / FedEx / UPS) · 4-7 Dias Porta a Porta",
    airCargo: "Carga Aérea / Linha Rápida Marítima DDP · 10-18 Dias",
    oceanFreight: "Transporte Marítimo LCL / FCL · 25-35 Dias (Menor Custo)",
    guaranteeBadge: "Compra Sem Risco",
    guaranteeTitle: "Garantia de Amostra 100% Reembolsável",
    guaranteeDesc: "Teste a qualidade de fábrica sem riscos. O valor da amostra é 100% creditado na sua fatura de produção em massa ao confirmar o pedido.",
    guaranteePoints: [
      "Envio rápido de amostras em 7 dias via DHL/FedEx",
      "Vídeo em alta definição antes do envio físico",
      "Valor da amostra 100% abatido na produção (MOQ ≥ 200 pcs)"
    ],
    ctaBtn: "Solicitar Cotação com estas Especificações"
  },
  it: {
    badge: "Strumento Logistico B2B",
    title: "Calcolatore di Imballaggio e Volume CBM",
    subtitle: "Stima il numero esatto di colli, il peso lordo e il volume CBM per il tuo ordine di cappelli personalizzati.",
    selectType: "1. Seleziona la Struttura del Cappello",
    types: {
      structured: { label: "Cappelli Strutturati", desc: "Snapback, Baseball, Trucker (100 pz/scatola)" },
      unstructured: { label: "Destrutturati / Bucket", desc: "Dad Hat, Cappelli da Pescatore (150 pz/scatola)" },
      beanie: { label: "Berretti in Maglia (Beanie)", desc: "A Coste, con Risvolto (200 pz/scatola)" }
    },
    orderQty: "2. Quantità d'Ordine (Pezzi)",
    customPcs: "Quantità personalizzata",
    resultsTitle: "Dettaglio Specifiche di Spedizione",
    cartonsLabel: "Scatole da Esportazione",
    cartonsDesc: "Cartone ondulato rinforzato a 5 strati (60×45×40cm)",
    cbmLabel: "Volume Totale (CBM)",
    cbmDesc: "Volume metrico standard per spedizioni marittime/aeree",
    weightLabel: "Peso Lordo Stimato",
    weightDesc: "Inclusi sacchetti protettivi e scatola master",
    shippingModeLabel: "Modalità di Spedizione Consigliata",
    recommended: "CONSIGLIATO",
    airExpress: "Aereo Espresso (DHL / FedEx / UPS) · 4-7 Giorni Porta a Porta",
    airCargo: "Cargo Aereo / Marittimo Veloce DDP · 10-18 Giorni",
    oceanFreight: "Spedizione Marittima LCL / FCL · 25-35 Giorni (Miglior Costo)",
    guaranteeBadge: "Acquisto a Rischio Zero",
    guaranteeTitle: "Garanzia Campione Rimborsabile al 100%",
    guaranteeDesc: "Verifica la qualità industriale senza rischi. Il costo del campione ti viene rimborsato al 100% nella fattura finale di produzione.",
    guaranteePoints: [
      "Spedizione del campione in soli 7 giorni con corriere DHL/FedEx",
      "Video prova di ricamo ad alta definizione prima della spedizione",
      "Costo del campione detratto al 100% sull'ordine (MOQ ≥ 200 pz)"
    ],
    ctaBtn: "Richiedi Preventivo con queste Specifiche"
  },
  ja: {
    badge: "B2B 輸出梱包・容積計算ツール",
    title: "輸出カートン数 ＆ CBM容積シミュレーター",
    subtitle: "オリジナルキャップの注文数量に応じた正確な箱数、総重量、海上・航空CBM容積を即時計算します。",
    selectType: "1. キャップの構造を選択",
    types: {
      structured: { label: "立体構造キャップ", desc: "スナップバック、野球帽、トラッカー（100個/箱）" },
      unstructured: { label: "無芯・バケットハット", desc: "ダッドハット、サファリハット（150個/箱）" },
      beanie: { label: "ニット帽（ビーニー）", desc: "リブ編み、折り返し、サテン裏地（200個/箱）" }
    },
    orderQty: "2. 発注数量（個）",
    customPcs: "数量を入力",
    resultsTitle: "輸出物流仕様の内訳",
    cartonsLabel: "外装カートン数",
    cartonsDesc: "強化5層二重波形輸出専用ダンボール（60×45×40cm）",
    cbmLabel: "総容積（CBM）",
    cbmDesc: "海上・航空貨物標準計算容積（m³）",
    weightLabel: "推定総総重量",
    weightDesc: "個別OPP袋・内箱・外装ダンボール重量を含む",
    shippingModeLabel: "最適な国際物流ルート推奨",
    recommended: "推奨ルート",
    airExpress: "国際航空エクスプレス (DHL / FedEx / UPS) · ドアツードア 4-7営業日",
    airCargo: "航空カーゴ便 / 高速海上DDP便 · 10-18営業日",
    oceanFreight: "海上コンテナ混載 (LCL) / 専属 (FCL) · 25-35日（最も安価）",
    guaranteeBadge: "リスクゼロ発注保証",
    guaranteeTitle: "サンプル代金100%返還・充当保証",
    guaranteeDesc: "工場直販の確かな品質を安心してお試しいただけます。本生産発注時（MOQ 200個以上）、初回試作にかかったサンプル製作費を全額一括値引きいたします。",
    guaranteePoints: [
      "7営業日での超高速サンプル出荷（DHL / FedEx 直送）",
      "発送前に工場内高精度刺繍のHD動画確認を実施",
      "本生産確定時にサンプル代金を100%全額相殺返還"
    ],
    ctaBtn: "この梱包仕様で概算見積を依頼する"
  }
};

export function ShippingCalculator({
  defaultCapType = "structured",
  productName = "Custom Caps",
  sku = "JY-CAP"
}: ShippingCalculatorProps) {
  const lang = useLang();
  const d = DICT[lang] || DICT.en;

  const [capType, setCapType] = useState<"structured" | "unstructured" | "beanie">(defaultCapType);
  const [qty, setQty] = useState<number>(200);

  // Logistics engineering factors
  const capacityMap = {
    structured: 100,
    unstructured: 150,
    beanie: 200
  };

  const weightPerCartonMap = {
    structured: 11.0, // kg per carton (including buckram, packaging, master box)
    unstructured: 13.0,
    beanie: 14.0
  };

  const cartonCapacity = capacityMap[capType];
  const cartonCount = Math.max(1, Math.ceil(qty / cartonCapacity));
  const cbm = (cartonCount * 0.108).toFixed(2); // 0.60m * 0.45m * 0.40m = 0.108 CBM
  const grossWeight = (cartonCount * weightPerCartonMap[capType]).toFixed(1);

  let shippingMode = d.airCargo;
  let modeBadge = "10-18 Days";
  if (qty < 300) {
    shippingMode = d.airExpress;
    modeBadge = "4-7 Days";
  } else if (qty >= 1500) {
    shippingMode = d.oceanFreight;
    modeBadge = "25-35 Days";
  }

  const handleQuoteClick = () => {
    trackWhatsAppClick({
      button: "shipping_calculator_quote",
      label: `Calc: [${sku}] ${productName} - Qty: ${qty} (${cartonCount} ctns, ${cbm} CBM)`
    });

    const msg = encodeURIComponent(
      `Hi Baoding Junyang team, I am reviewing ${productName} (SKU: ${sku}).\n` +
      `Estimated Order: ${qty} pcs (${capType} style).\n` +
      `Packaging: ${cartonCount} cartons (${cbm} CBM, ~${grossWeight} kg).\n` +
      `Please provide an FOB / Door-to-Door shipping quote.`
    );
    window.open(`https://wa.me/8618931290562?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl relative overflow-hidden my-8">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-blue-500/20 text-blue-400">
          <Truck size={16} />
        </span>
        <span className="text-xs font-black uppercase tracking-widest text-blue-400">
          {d.badge}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
        {d.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mb-8">
        {d.subtitle}
      </p>

      {/* Step 1: Cap Type Selection */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          {d.selectType}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["structured", "unstructured", "beanie"] as const).map((type) => {
            const active = capType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setCapType(type)}
                className={`text-left p-3.5 rounded-2xl border transition text-sm cursor-pointer ${
                  active
                    ? "bg-blue-600/20 border-blue-500 text-white shadow-sm shadow-blue-500/20"
                    : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600"
                }`}
              >
                <div className="font-bold flex items-center justify-between mb-1">
                  <span>{d.types[type].label}</span>
                  {active && <CheckCircle2 size={16} className="text-blue-400 shrink-0" />}
                </div>
                <div className="text-[11px] text-slate-400">{d.types[type].desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Quantity Controls */}
      <div className="mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          {d.orderQty}
        </label>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {[100, 200, 500, 1000, 2500, 5000].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setQty(val)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                qty === val
                  ? "bg-white text-slate-900 shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60"
              }`}
            >
              {val.toLocaleString()} pcs
            </button>
          ))}
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700/60 rounded-xl px-3 py-1.5 ml-auto">
            <span className="text-[11px] text-slate-400 font-bold">{d.customPcs}:</span>
            <input
              type="number"
              min="50"
              max="50000"
              step="50"
              value={qty}
              onChange={(e) => setQty(Math.max(50, parseInt(e.target.value) || 50))}
              className="bg-transparent text-white font-black text-sm w-20 text-right focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Live Calculated Metrics Breakdown */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <Package size={14} className="text-blue-400" />
          {d.resultsTitle}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* Cartons */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              {d.cartonsLabel}
            </div>
            <div className="text-2xl font-black text-white mb-1">
              {cartonCount}{" "}
              <span className="text-xs font-medium text-slate-400">Cartons</span>
            </div>
            <div className="text-[10px] text-slate-500 leading-tight">
              {d.cartonsDesc}
            </div>
          </div>

          {/* Volume CBM */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              {d.cbmLabel}
            </div>
            <div className="text-2xl font-black text-blue-400 mb-1">
              {cbm}{" "}
              <span className="text-xs font-medium text-slate-400">m³ (CBM)</span>
            </div>
            <div className="text-[10px] text-slate-500 leading-tight">
              {d.cbmDesc}
            </div>
          </div>

          {/* Gross Weight */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              {d.weightLabel}
            </div>
            <div className="text-2xl font-black text-emerald-400 mb-1">
              {grossWeight}{" "}
              <span className="text-xs font-medium text-slate-400">KG</span>
            </div>
            <div className="text-[10px] text-slate-500 leading-tight">
              {d.weightDesc}
            </div>
          </div>
        </div>

        {/* Shipping Mode Recommendation Bar */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider shrink-0">
              {d.recommended}
            </span>
            <span className="text-xs font-bold text-slate-200">
              {shippingMode}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-400 shrink-0">
            Transit: <strong className="text-white">{modeBadge}</strong>
          </span>
        </div>
      </div>

      {/* 100% Refundable Sampling Guarantee Banner */}
      <div className="bg-gradient-to-r from-emerald-950/50 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={18} className="text-emerald-400" />
          <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
            {d.guaranteeBadge}
          </span>
        </div>
        <h4 className="text-sm sm:text-base font-bold text-white mb-1">
          {d.guaranteeTitle}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          {d.guaranteeDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {d.guaranteePoints.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <button
        onClick={handleQuoteClick}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition shadow-lg shadow-blue-500/20 text-sm md:text-base cursor-pointer"
      >
        <MessageCircle size={18} />
        <span>{d.ctaBtn}</span>
      </button>
    </div>
  );
}
