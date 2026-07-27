"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "B2B Custom Hat Manufacturing Guide | How to Source Wholesale Caps from China",
    description: "Complete guide for B2B buyers: how to choose a custom hat factory, embroidery types explained, MOQ negotiation, quality control standards, and shipping logistics. Expert advice from a 12-year factory.",
    openGraph: {
      title: "Custom Hat Factory Guide for B2B Buyers | BD Hats",
      description: "Everything you need to know before ordering custom caps from China — factory selection, embroidery types, QC, and shipping.",
      type: "article",
    },
  };
}

const SECTIONS = [
  {
    id: "factory-selection",
    title: "1. How to Choose a Reliable Custom Hat Factory",
    content: `Selecting the right manufacturing partner is the single most important decision in your custom hat project. A good factory saves you money, avoids quality issues, and delivers on time. Here are the key factors to evaluate:

    **Factory Verification:** Look for third-party verification such as SGS, Bureau Veritas, or TÜV. These certifications confirm that the factory physically exists, has the claimed production capacity, and maintains quality systems. Ask for the verification report number and cross-check it on the certifier's website.

    **Specialization:** Does the factory specialize in headwear, or is it a general garment factory that "also makes hats"? Specialized hat factories have dedicated embroidery machines, skilled cap sewers, and established raw material supply chains. At Baoding Junyang, we focus exclusively on headwear — 100+ Japanese Barudan embroidery machines and 200+ cap specialists.

    **Communication & Responsiveness:** Your factory contact should respond within 4 hours during business hours and provide clear answers in fluent English. A slow or vague response at the inquiry stage almost always predicts problems during production.

    **Transparency:** The best factories offer live production updates — photos of your fabric being cut, videos of embroidery in progress, and final QC inspection reports before shipping. If a factory is reluctant to share these, consider it a red flag.`,

    tips: [
      "Always request a factory video tour before placing large orders",
      "Verify SGS/ISO certifications independently — don't rely on the factory's word",
      "Check how long the factory has been on Alibaba (12+ years is a strong signal)",
      "Test communication quality: send a detailed inquiry and measure response time and thoroughness"
    ]
  },
  {
    id: "embroidery-types",
    title: "2. Embroidery Techniques: 3D Puff vs Flat vs Chenille",
    content: `Your logo application is the most visible element of your custom cap. Choosing the right embroidery technique directly impacts your brand perception.

    **3D Puff Embroidery (Raised / High-Density):** Foam is placed underneath the embroidery thread, creating a raised, three-dimensional effect. This is the most popular technique for streetwear and sports brands because it makes logos pop. Best for bold, simple designs with thick lines. Not suitable for very fine text or intricate details — the foam can distort small elements.

    **Flat Embroidery (Traditional / Standard):** The classic technique where thread is stitched directly onto the fabric without any raising material. Produces the cleanest, sharpest details and works for virtually any design complexity. Best for corporate logos, intricate artwork, and fine text. Can achieve photorealistic detail with high stitch counts.

    **Chenille / Felt Appliqué (Textured / Vintage):** A fuzzy, textured yarn creates a retro letterman-jacket aesthetic. Extremely popular for collegiate, vintage, and lifestyle brands. Works best for simple text and bold shapes. The thickness limits fine detail.

    **Combination Techniques:** Many premium designs use flat embroidery for fine text details combined with 3D puff for the main logo element. This creates visual hierarchy and brand sophistication.

    **Choosing the Right Thread:** Standard polyester thread is durable and colorfast. Metallic threads add premium shimmer but are more delicate. Glow-in-the-dark and reflective threads are available for specialty activewear applications.`,

    tips: [
      "3D Puff: best for bold logos, not suitable for text under 6mm height",
      "Flat embroidery: the most versatile — works for everything from corporate to streetwear",
      "Always request a stitch-out sample on your actual cap fabric before bulk production",
      "High stitch count = more detail but higher cost; discuss the sweet spot with your factory"
    ]
  },
  {
    id: "moq-shipping",
    title: "3. Understanding MOQ, Pricing, and Shipping",
    content: `**Minimum Order Quantity (MOQ):** Our standard MOQ is 200 pieces per style and color. For example, if you want 3 cap styles in 2 colors each, your minimum order would be 1,200 pieces total (200 × 3 × 2). Many factories advertise very low MOQs (10-50 pieces) but these often carry significant per-unit price premiums that make them uneconomical for resale.

    **How Pricing Works:** Custom cap pricing depends on: (1) fabric material and weight, (2) embroidery complexity and stitch count, (3) number of decoration locations (front, side, back), (4) internal label and packaging requirements, and (5) total order volume. Prices typically range from $0.98 to $4.00 per cap FOB for standard custom orders.

    **FOB vs CIF Pricing:** FOB (Free On Board) means you pay for the goods plus local China charges, and you arrange international shipping. CIF (Cost, Insurance, Freight) includes shipping to your destination port. For first-time buyers with small volumes, CIF is simpler. For experienced importers with their own freight forwarders, FOB is more cost-effective.

    **Shipping Options:** Air express (DHL/FedEx/UPS) delivers in 5-8 days and is best for samples and small orders. Air freight is faster than sea but more expensive — suitable for medium orders. Sea freight is the most economical for bulk orders but takes 25-35 days.`,

    tips: [
      "MOQ of 200 pcs is industry standard for factories with proper QC — lower MOQs often mean higher per-unit costs",
      "Always get a detailed quotation that breaks down per-unit cost, mold/setup fees, and estimated shipping",
      "For first orders, consider air freight for speed and to test the market before committing to sea freight volumes"
    ]
  },
  {
    id: "quality-control",
    title: "4. Quality Control: What to Inspect Before Shipment",
    content: `Professional quality control prevents expensive mistakes. At Baoding Junyang, we follow a 5-stage AQL 2.5 inspection protocol that you should expect from any professional factory:

    **Stage 1 — Raw Material Verification:** Fabric color consistency, tensile strength testing, and embroidery thread quality checks before any cutting begins.

    **Stage 2 — Embroidery Precision:** Checking stitch density, 3D puff height uniformity, and logo placement accuracy. Misaligned logos are the #1 defect in custom caps.

    **Stage 3 — Stitching Integrity:** Inspecting crown seam strength, sweatband alignment (within 1mm tolerance), and visor attachment durability.

    **Stage 4 — Final Inspection:** Every single cap undergoes manual inspection — thread trimming, steam ironing, and visual quality check before packing.

    **Stage 5 — Packing & Label Audit:** Final count verification, shipping label accuracy check, and packaging integrity inspection.

    **Third-Party Inspection:** For large orders ($10,000+), consider hiring an independent inspection company (SGS, Intertek, Bureau Veritas) to inspect your goods before shipment. This typically costs $300-500 and provides an unbiased quality report.`,

    tips: [
      "AQL 2.5 means: in a batch of 200 pieces, up to 7 minor defects are acceptable, 0 critical defects",
      "Always request pre-shipment photos and videos — a professional factory will provide these proactively",
      "For first-time orders, consider third-party inspection for peace of mind"
    ]
  }
];

export default function GuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete B2B Guide to Custom Hat Manufacturing — Factory Selection, Embroidery, MOQ, and Quality Control",
    "description": "Expert guide for B2B buyers sourcing custom caps from China. Covers factory verification, embroidery techniques, MOQ negotiation, and QC protocols.",
    "author": {
      "@type": "Organization",
      "name": "Baoding Junyang Hat Manufacturing Co., Ltd."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Baoding Junyang Hat Manufacturing Co., Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"
      }
    },
    "datePublished": "2026-07-27",
    "dateModified": "2026-07-27",
    "mainEntityOfPage": "https://b2b.bdjunyang.com/guide"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://b2b.bdjunyang.com" },
      { "@type": "ListItem", "position": 2, "name": "B2B Custom Hat Manufacturing Guide", "item": "https://b2b.bdjunyang.com/guide" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" alt="JUNYANG Logo" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black tracking-tighter text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/#catalog" className="hover:text-black transition">Products</Link>
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/guide" className="text-black border-b-2 border-black pb-1">Guide</Link>
            <Link href="/#inquiry" className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href="/#inquiry" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition">
            Get Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">B2B Buyer's Resource</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            The Complete Guide to <span className="text-yellow-400">Custom Hat Manufacturing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything B2B buyers need to know before ordering custom caps — from factory selection and embroidery techniques to MOQ negotiation and quality control.
          </p>
          <p className="text-gray-500 text-sm mt-6">Published July 2026 · 12 min read · By Baoding Junyang Factory Team</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-black mb-6 uppercase tracking-wider">In This Guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-black transition group">
                <span className="text-sm font-black text-gray-400 group-hover:text-black transition">{s.title.split(". ")[0]}</span>
                <span className="text-sm font-bold text-gray-700 group-hover:text-black transition">{s.title.split(". ")[1]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-4 scroll-mt-20 border-b border-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{section.title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              {section.content.split("\n\n").map((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                  return <h3 key={i} className="text-lg font-black text-black mt-8 mb-3">{trimmed.replace(/\*\*/g, "")}</h3>;
                }
                // Handle bold text within paragraphs
                const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={i} className="mb-4">
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={j} className="text-black">{part.replace(/\*\*/g, "")}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>

            {/* Key Takeaways Box */}
            <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-8">
              <h4 className="text-sm font-black uppercase tracking-wider text-yellow-700 mb-4">Key Takeaways</h4>
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

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Start Your Custom Hat Project?</h2>
          <p className="text-gray-400 text-lg mb-8">Apply everything you've learned — get a free 3D mockup and factory quote within 12 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#inquiry" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              Request Factory Quote <ArrowRight size={20} />
            </Link>
            <Link href="/#catalog" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20">
              Browse Product Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" alt="JUNYANG Logo" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide" className="hover:text-white">B2B Hat Manufacturing Guide</Link></li>
                <li><Link href="/#catalog" className="hover:text-white">Product Catalog</Link></li>
                <li><Link href="/about" className="hover:text-white">About Our Factory</Link></li>
                <li><Link href="/#inquiry" className="hover:text-white">Request Quote</Link></li>
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
