"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";

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
    a: "A physical pre-production sample typically costs $50-100 including courier shipping, depending on complexity. This fee is fully credited against your bulk order."
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
    a: "We accept T/T bank transfer (30% deposit, 70% before shipment), Alibaba Trade Assurance (credit card, online payment), Western Union for samples, and L/C for orders over $50,000. Trade Assurance provides buyer protection and secure transaction processing."
  },
  {
    q: "Are there any hidden costs or surcharges?",
    a: "No hidden costs. Our quotes include: cap cost, embroidery/screen printing setup, internal labels, hang tags, standard polybag packaging, and export cartons. Optional extras (custom boxes, individual polybags, special hang tags) are quoted separately and clearly itemized."
  }
];

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
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
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
                    `Hi Baoding Junyang! I would like to get a quote for ${tier.name} (${tier.range}). MOQ 200pcs.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  "Hi Baoding Junyang! I would like to submit our tech pack for a custom tiered quote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm whitespace-nowrap transition"
              >
                Inquire on WhatsApp
              </a>
            </div>
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
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/materials`} className="hover:text-white">Materials & Fabrics Guide</Link></li>
                <li><Link href={`/${lang}/pricing`} className="hover:text-white">Pricing & Shipping</Link></li>
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
