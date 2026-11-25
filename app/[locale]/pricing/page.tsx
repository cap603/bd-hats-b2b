"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { MobileNav } from "../../components/MobileNav";
import { trackWhatsAppClick } from "../../lib/tracking";

const TIERS = [
  {
    name: "Tier 1: Starter Batch",
    range: "200 – 499 pcs",
    basePrice: "$6.50 – $8.00",
    premiumPrice: "$8.00 – $10.50",
    leadTime: "10 – 12 Days",
    badge: "MOQ Entry",
    desc: "Ideal for streetwear brand launches, retail test batches, and boutique private-label runs.",
    features: [
      "Minimum order of 200 pcs per style/color",
      "Free embroidery digitizing & mockups",
      "Sample fee fully credited against bulk order",
      "Standard individual polybag & 5-ply export carton",
      "Standard air express / air freight ready"
    ]
  },
  {
    name: "Tier 2: Standard Wholesale",
    range: "500 – 1,999 pcs",
    basePrice: "$5.20 – $6.50",
    premiumPrice: "$6.50 – $8.00",
    leadTime: "14 – 16 Days",
    badge: "Most Popular",
    featured: true,
    desc: "The sweet spot for established apparel brands, corporate merchandise, and seasonal restocking.",
    features: [
      "Custom woven sweatband labels & care tags",
      "Free pre-production physical counter-sample",
      "Fast-track cutting & embroidery line scheduling",
      "Pantone color matching on stock twill fabrics",
      "Flexible split-shipment options"
    ]
  },
  {
    name: "Tier 3: Volume Program",
    range: "2,000 – 9,999 pcs",
    basePrice: "$4.20 – $5.00",
    premiumPrice: "$5.00 – $6.20",
    leadTime: "18 – 22 Days",
    badge: "High Efficiency",
    desc: "Engineered for regional distributors, promotional uniform buyers, and chain store replenishment.",
    features: [
      "Custom fabric weaving & bespoke fabric dyeing",
      "Dedicated QC video report during production",
      "FOB Tianjin / Qingdao ocean cargo optimization",
      "Custom branded retail hangtags & barcoding",
      "Strict pre-shipment audit inspection report"
    ]
  },
  {
    name: "Tier 4: Container Bulk Scale",
    range: "10,000+ pcs",
    basePrice: "$3.50 – $4.00",
    premiumPrice: "$4.00 – $4.80",
    leadTime: "25 – 30 Days",
    badge: "Factory Direct Floor",
    desc: "Direct-to-factory container load production for multinational brands and international procurement groups.",
    features: [
      "Direct factory floor price from $3.50/pc FOB",
      "Dedicated multi-head Barudan line allocation",
      "20GP (35,000+ pcs) & 40HQ (85,000+ pcs) container packing",
      "Letter of Credit (L/C) & milestone payment support",
      "Annual supply agreement & buffer stock reservation"
    ]
  }
];

const FAQS = [
  {
    q: "How much does a custom baseball cap cost when ordering wholesale?",
    a: "Prices range from $3.50 to $7.00 per cap FOB depending on material, embroidery complexity, decoration locations, and order quantity. Entry-level cotton twill caps start at $3.50. Premium 3D puff embroidered caps range from $3.50 to $7.00. Contact us for a detailed quote based on your specific requirements."
  },
  {
    q: "What is the Minimum Order Quantity (MOQ) for custom caps?",
    a: "Our standard MOQ is 200 pieces per style and color. For example, 1 style in 2 colors = 400 pieces total. For first-time brand partners, we can sometimes accommodate smaller test orders — contact us to discuss your needs."
  },
  {
    q: "How much does shipping cost for custom hats from China?",
    a: "Shipping costs depend on weight, volume, destination, and speed. Air express (DHL/FedEx/UPS) for samples costs approximately $30-60 for 2-5 caps. Bulk sea freight for 1,000+ caps typically costs $400-800 to the US West Coast. We provide exact shipping quotes once your order details are confirmed."
  },
  {
    q: "What is the difference between FOB and CIF pricing?",
    a: "FOB (Free On Board) means you pay for goods + China export charges, and you arrange international shipping. CIF (Cost, Insurance, Freight) includes shipping and insurance to your destination port. FOB is more cost-effective if you have a freight forwarder. CIF is simpler for first-time importers."
  },
  {
    q: "Do you offer volume discounts for large orders?",
    a: "Yes. Volume discounts apply at 500 pcs, 1,000 pcs, 5,000 pcs and 10,000+ pcs tiers. Higher quantities also reduce the per-unit shipping cost. For orders over 10,000 pcs, we offer additional customization flexibility and dedicated production line allocation."
  },
  {
    q: "How much does a custom sample cost?",
    a: "A physical pre-production sample typically costs $50-100 including courier shipping, depending on complexity. This fee is fully credited against your bulk order of 500+ pieces."
  },
  {
    q: "What is the production lead time for custom hats?",
    a: "Sample production: 7 days. Bulk production: 15-20 days depending on quantity and complexity. Rush orders can be accommodated for an additional fee. We send weekly production photos and videos so you can track progress."
  },
  {
    q: "How long does shipping take from China?",
    a: "Air express (DHL/FedEx/UPS): 5-8 days door-to-door. Air freight: 7-12 days airport-to-airport. Sea freight: 25-35 days port-to-port. We recommend air express for samples and first orders, and sea freight for bulk reorders to minimize cost."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept T/T bank transfer (30% deposit, 70% before shipment), secure international commercial escrow (credit card, online wire), Western Union for samples, and L/C at sight for orders over $50,000. All payments provide verified buyer protection and secure transaction processing."
  },
  {
    q: "Are there any hidden costs or surcharges?",
    a: "No hidden costs. Our quotes include: cap cost, embroidery/screen printing setup, internal labels, hang tags, standard polybag packaging, and export cartons. Optional extras (custom boxes, individual polybags, special hang tags) are quoted separately and clearly itemized."
  }
];

// Paragraph-style guide kept as a module-level constant so it ships in the JS
// bundle rather than the RSC flight payload (lighter HTML per text char).
const PRICING_GUIDE = {
  en: [
    "The tiers above reflect real factory FOB bands for structured custom caps in 2026, and they exist because unit cost genuinely falls as quantity rises: fabric is cut with less waste, embroidery setups are amortized over more heads, and packing labor per unit drops. Within each tier the spread between the base and premium column is driven by construction — fabric weight and type, decoration technique and stitch count, closure and hardware — not by negotiation. When you send us your spec, we place it in the right column and itemize every layer, so the number you see is explainable line by line rather than a rounded figure.",
    "A common mistake is comparing a tier-1 quote from one factory against a tier-3 quote from another and assuming the difference is efficiency. It usually is not: it is construction. A $4.20 cap and a $6.50 cap can look identical in a photo yet differ in twill count, stitch density, buckram quality and hardware. Our quotes list the bill of materials — fabric count, decoration, closure, packing — so you can compare like with like. If a competitor's price sits far below the band for the same construction, the difference will show up in your product, not in the invoice.",
    "Decoration is the biggest lever inside any tier. Flat embroidery on a simple logo keeps you at the base of the column; high-density 3D puff with foam underlay, laser-cut details, multiple colorways of thread or combined techniques (embroidery plus leather patch, plus foil) move you up. If your margin is tight, the most effective moves are usually reducing stitch count slightly, choosing a single-color thread scheme, or standardizing on our stock 108*56 twill instead of a bespoke weave — each of these saves real money without visibly degrading the finished cap.",
    "Beyond the unit price, three costs decide your landed economics: sampling, freight and duties. Our sampling fee is fully credited against the bulk order at 500 pieces or more, so for most programs it is a non-event. Freight is where planning pays off: ocean containers charge by CBM, and a 40HQ carries roughly double a 20GP at less than double the cost, which is why the container-scale floor exists at all. Air express at 5–8 days is worth its premium for samples and urgent replenishment only. Duties depend on your market, and the commercial invoice, packing list and certificates of origin we provide are exactly what your customs broker needs to classify the shipment correctly the first time.",
    "Payment structure affects your risk more than your price. First orders through Alibaba Trade Assurance carry platform payment protection on top of our own QC commitment: funds are held until you confirm the shipment matches the order. Established programs can move to T/T through verified business accounts, with milestone-based schedules if you prefer. We never request transfers to personal accounts, and we never ask for full payment before sampling — a factory confident in its production line does not need to.",
    "If your program is seasonal or recurring, the pricing conversation changes: repeat buyers hold their digitizing files and colorways on record, skip the sampling stage on reorders, and gain earlier access to container-scale pricing as the quarter's capacity is planned. Tell us your expected volumes per season and your launch dates, and we will show you where your program sits across the tiers — including whether splitting a large order into scheduled productions makes more economic sense than one container.",
  ],
  es: [
    "Las tarifas anteriores reflejan bandas FOB reales de fábrica para gorras personalizadas estructuradas en 2026, y existen porque el coste unitario baja de verdad al subir la cantidad: la tela se corta con menos desperdicio, el ajuste de bordado se amortiza sobre más unidades y la mano de obra de embalaje por pieza desciende. Dentro de cada tarifa, la diferencia entre la columna base y la premium la marca la construcción —peso y tipo de tela, técnica de decoración y número de puntadas, cierre y herrajes—, no la negociación. Cuando nos envías tu especificación, la ubicamos en la columna correcta y desglosamos cada capa, para que el número que ves sea explicable línea por línea y no una cifra redondeada.",
    "Un error habitual es comparar una cotización de tarifa 1 de una fábrica contra una de tarifa 3 de otra y asumir que la diferencia es eficiencia. Normalmente no lo es: es construcción. Una gorra de $4,20 y una de $6,50 pueden parecer idénticas en una foto y diferir en conteo de sarga, densidad de puntadas, calidad de cartulina y herrajes. Nuestras cotizaciones listan el listado de materiales —conteo de tela, decoración, cierre, embalaje— para que compares igual con igual. Si el precio de un competidor está muy por debajo de la banda para la misma construcción, la diferencia aparecerá en tu producto, no en la factura.",
    "La decoración es la palanca más grande dentro de cualquier tarifa. El bordado plano sobre un logo sencillo te mantiene en la base de la columna; el 3D puff de alta densidad con base de espuma, los detalles de corte láser, los múltiples colores de hilo o las técnicas combinadas (bordado más parche de cuero, más foil) te suben. Si tu margen es ajustado, los movimientos más eficaces suelen ser reducir ligeramente el número de puntadas, elegir un esquema de hilo de un color o estandarizar nuestra sarga 108*56 de stock en lugar de un tejido a medida: cada uno ahorra dinero real sin degradar visiblemente la gorra terminada.",
    "Más allá del precio unitario, tres costes deciden tu economía de llegada: muestra, flete y derechos. Nuestro costo de muestra se descuenta íntegro del pedido masivo a partir de 500 unidades, así que para la mayoría de los programas no es un gasto neto. El flete es donde conviene planificar: los contenedores marítimos se cobran por CBM, y un 40HQ carga aproximadamente el doble que un 20GP por menos del doble del coste, que es la razón de ser del piso a escala de contenedor. El exprés aéreo de 5–8 días solo justifica su premium para muestras y repones urgentes. Los derechos dependen de tu mercado, y la factura comercial, la lista de embalaje y los certificados de origen que proporcionamos son exactamente lo que tu agente de aduana necesita para clasificar el envío correctamente a la primera.",
    "La estructura de pago afecta más a tu riesgo que a tu precio. Los primeros pedidos a través de Alibaba Trade Assurance suman protección de pago de la plataforma sobre nuestro propio compromiso de QC: los fondos quedan retenidos hasta que confirmas que el envío coincide con el pedido. Los programas consolidados pueden pasar a T/T mediante cuentas empresarias verificadas, con calendarios por hitos si lo prefieres. Nunca solicitamos transferencias a cuentas personales y nunca pedimos el pago completo antes de la muestra: una fábrica segura de su línea de producción no lo necesita.",
    "Si tu programa es estacional o recurrente, la conversación de precio cambia: los compradores con repeticiones mantienen sus archivos de digitalización y colores en registro, saltan la etapa de muestra en los reaprovisionamientos y acceden antes a precios de contenedor cuando se planifica la capacidad del trimestre. Cuéntanos tus volúmenes esperados por temporada y tus fechas de lanzamiento, y te mostraremos en qué punto de las tarifas se ubica tu programa, incluyendo si dividir un pedido grande en producciones programadas tiene más sentido económico que un solo contenedor.",
  ],
};

export default function PricingPage() {
  const lang = useLang();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Custom Hat Pricing, MOQ & Shipping Guide — Complete Wholesale Cost Breakdown",
    "description": "Transparent guide covering custom hat costs ($3.50-$7.00 FOB), MOQ requirements (200pcs), shipping methods and costs, FOB vs CIF, volume discounts, sample fees, and payment terms.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "datePublished": "2026-07-31",
    "dateModified": "2026-07-31",
    "mainEntityOfPage": "https://bdjunyang.com/pricing"
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <Link href={`/${lang}/pricing`} className="text-black border-b-2 border-black pb-1">Pricing</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/${lang}/#inquiry`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full text-xs md:text-sm shadow-xs"
            >
              Get Quote
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Pricing & Shipping" }
      ]} />

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">Transparent Pricing</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            Custom Hat <span className="text-yellow-400">Pricing, MOQ & Shipping</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Complete cost breakdown for wholesale custom caps — from factory pricing and volume discounts to shipping methods and payment terms. No hidden fees.
          </p>
        </div>
      </section>

      {/* Tiered Wholesale Pricing Matrix */}
      <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-600 font-bold uppercase tracking-wider text-xs md:text-sm">Factory-Direct Wholesale Matrix</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              Tiered Volume Pricing (FOB China)
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Transparent, factory-floor pricing structured by volume. Strict MOQ of 200 pcs per style/color, with floor rates reaching $3.50/pc for container-scale programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  tier.featured
                    ? "bg-white border-2 border-yellow-500 shadow-xl relative scale-105 z-10"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{tier.badge}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      <Zap size={12} className="text-yellow-600" /> {tier.leadTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900">{tier.name}</h3>
                  <div className="text-sm font-bold text-yellow-600 mt-1 mb-4">{tier.range}</div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Standard Twill / Flat:</div>
                    <div className="text-2xl font-black text-gray-900">{tier.basePrice}</div>
                    <div className="text-[11px] text-gray-500 mt-2 pt-2 border-t border-gray-200">
                      3D Puff / High-Spec: <span className="font-bold text-gray-700">{tier.premiumPrice}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed mb-6">{tier.desc}</p>

                  <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/8615933930830?text=${encodeURIComponent(
                    lang === "es"
                      ? `¡Hola Baoding Junyang! Me gustaría solicitar cotización para ${tier.name} (${tier.range}). MOQ 200 uds.`
                      : `Hi Baoding Junyang! I would like to get a quote for ${tier.name} (${tier.range}). MOQ 200pcs.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      button: "pricing_tier_button",
                      label: `Pricing Tier: ${tier.name}`,
                    })
                  }
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-2 ${
                    tier.featured
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black shadow-md shadow-yellow-500/20"
                      : "bg-gray-900 hover:bg-black text-white"
                  }`}
                >
                  Inquire on WhatsApp <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Value inclusions card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-base font-bold text-gray-900 mb-1">Standard All-Inclusive Price Promise</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Every quotation includes: 100% heavy cotton twill or classic twill-mesh, up to 2 embroidery/screen-print positions, custom sweatband care label, individual moisture-proof polybag, and 5-ply reinforced export seaworthy cartons. No hidden digitizing or setup surcharges.
                </p>
              </div>
              <a
                href={`https://wa.me/8615933930830?text=${encodeURIComponent(
                  lang === "es"
                    ? "¡Hola Baoding Junyang! Me gustaría enviar nuestro tech pack para una cotización personalizada por escalas (MOQ 200 uds)."
                    : "Hi Baoding Junyang! I would like to submit our tech pack for a custom tiered quote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    button: "pricing_tech_pack_button",
                    label: "Pricing Page All-Inclusive Promise Card",
                  })
                }
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm whitespace-nowrap transition"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Deep Guide Interlink: 2026 Cost Index */}
          <div className="mt-8 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-6 md:p-8 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Industry Benchmark Data</span>
              <h3 className="text-lg md:text-xl font-bold mt-1">2026 Custom Hat Manufacturing Cost Breakdown Index</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl">
                See exact line-item material, embroidery, labor and logistics cost models ($3.50 - $7.80 FOB) across 6 cap silhouettes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href={`/${lang}/tools/carton-calculator`}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-5 rounded-xl text-xs md:text-sm whitespace-nowrap transition border border-slate-700"
              >
                CBM Calculator
              </Link>
              <Link
                href={`/${lang}/custom-hat-cost-index-2026`}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl text-xs md:text-sm whitespace-nowrap transition flex items-center gap-2"
              >
                Explore Cost Index <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
            {lang === "es" ? "Cómo Funciona el Precio de Fábrica" : "How Factory Pricing Actually Works"}
          </h2>
          <div className="space-y-5">
            {PRICING_GUIDE[lang === "es" ? "es" : "en"].map((p, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={20} className="text-yellow-600" />
            <h2 className="text-lg font-black uppercase tracking-wider">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-500 text-sm mb-2">{FAQS.length} questions answered below</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="bg-gray-50 rounded-2xl border border-gray-100 group" open={i === 0}>
              <summary className="p-6 cursor-pointer list-none flex items-start justify-between">
                <h3 className="font-bold text-black pr-8">
                  <span className="text-yellow-600 font-black mr-2">Q{i + 1}:</span>
                  {faq.q}
                </h3>
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl mt-0.5 shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">Get Your Custom Quote — Free in 12 Hours</h2>
          <p className="text-gray-600 text-lg mb-8">Send us your cap requirements. Our sales team will provide a detailed quotation with exact pricing and shipping costs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/#inquiry`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-green-500/20">
              Request Factory Quote <ArrowRight size={20} />
            </Link>
            <Link href={`/${lang}/#catalog`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 rounded-full text-lg transition border-2 border-gray-200">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white text-yellow-400 font-semibold">2026 Hat Cost Index</Link></li>
                <li><Link href={`/${lang}/compare/merino-wool-vs-acrylic-beanies`} className="hover:text-white">Merino vs Acrylic Beanies</Link></li>
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/materials`} className="hover:text-white">Materials & Fabrics Guide</Link></li>
                <li><Link href={`/${lang}/about`} className="hover:text-white">About Our Factory</Link></li>
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
