"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SECTIONS = [
  {
    id: "factory-selection",
    title: "1. How to Choose a Reliable Custom Hat Factory",
    content: "Selecting the right manufacturing partner is the single most important decision in your custom hat project. Look for third-party verification such as SGS, Bureau Veritas, or TÜV. At Baoding Junyang, we focus exclusively on headwear with 100+ Japanese Barudan embroidery machines and 200+ cap specialists.",
    tips: [
      "Always request a factory video tour before placing large orders",
      "Verify SGS/ISO certifications independently",
      "Check how long the factory has been on Alibaba (12+ years is a strong signal)",
      "Test communication quality: send a detailed inquiry and measure response time"
    ]
  },
  {
    id: "embroidery-types",
    title: "2. Embroidery Techniques: 3D Puff vs Flat vs Chenille",
    content: "Your logo application is the most visible element of your custom cap. 3D Puff Embroidery uses foam underneath the thread for a raised effect — best for bold logos and streetwear brands. Flat Embroidery is the classic technique producing the cleanest details for corporate logos and intricate artwork. Chenille creates a fuzzy, textured retro letterman-jacket aesthetic popular for collegiate and vintage brands.",
    tips: [
      "3D Puff: best for bold logos, not suitable for text under 6mm",
      "Flat embroidery: most versatile — works for corporate to streetwear",
      "Always request a stitch-out sample on your actual cap fabric",
      "High stitch count = more detail but higher cost"
    ]
  },
  {
    id: "moq-shipping",
    title: "3. Understanding MOQ, Pricing, and Shipping",
    content: "Our standard MOQ is 200 pieces per style and color. Custom cap pricing depends on fabric material, embroidery complexity, decoration locations, and order volume. Prices typically range from $0.98 to $4.00 per cap FOB. Air express delivers in 5-8 days for samples, while sea freight takes 25-35 days for bulk orders.",
    tips: [
      "MOQ of 200 pcs is industry standard for factories with proper QC",
      "Always get a detailed quotation that breaks down per-unit cost and estimated shipping",
      "For first orders, consider air freight to test the market before sea freight"
    ]
  },
  {
    id: "quality-control",
    title: "4. Quality Control: What to Inspect Before Shipment",
    content: "Professional quality control prevents expensive mistakes. We follow a 5-stage AQL 2.5 inspection protocol: raw material verification, embroidery precision check, stitching integrity audit, final piece-by-piece QC, and packing and label audit. For large orders over $10,000, consider hiring an independent inspection company like SGS or Intertek.",
    tips: [
      "AQL 2.5 means up to 7 minor defects acceptable in a batch of 200",
      "Always request pre-shipment photos and videos",
      "For first-time orders, consider third-party inspection for peace of mind"
    ]
  }
];

export default function GuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete B2B Guide to Custom Hat Manufacturing",
    "description": "Expert guide for B2B buyers sourcing custom caps from China. Covers factory verification, embroidery techniques, MOQ negotiation, and QC protocols.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd.", "logo": { "@type": "ImageObject", "url": "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" } },
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
          <Link href="/#inquiry" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition">Get Quote</Link>
        </div>
      </header>

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">B2B Buyer's Resource</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            The Complete Guide to <span className="text-yellow-400">Custom Hat Manufacturing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything B2B buyers need to know before ordering custom caps — from factory selection and embroidery techniques to MOQ negotiation and quality control.
          </p>
          <p className="text-gray-500 text-sm mt-6">Published July 2026 · By Baoding Junyang Factory Team</p>
        </div>
      </section>

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

      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-4 scroll-mt-20 border-b border-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{section.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{section.content}</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-8">
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
