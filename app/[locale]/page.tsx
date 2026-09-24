"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useT, useLang } from "../lib/i18n";
import { attributionTag } from "../lib/attribution";
import { NavCompareMenu } from "../components/NavCompareMenu";
import { NavProductsMenu } from "../components/NavProductsMenu";
import { MobileNav } from "../components/MobileNav";
import { HatCatalog } from "../components/HatCatalog";
import { InquiryForm } from "../components/InquiryForm";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

const MANUFACTURING_PROGRAMS = [
  {
    href: "/custom-5-panel-caps-manufacturer",
    title: "Custom 5-Panel Caps",
    desc: "Streetwear & camper profiles, lightweight cotton-nylon blends, flat brim and brass closures.",
    tag: "High Demand",
  },
  {
    href: "/oem-hat-manufacturer",
    title: "OEM Hat Manufacturing",
    desc: "Complete custom headwear contract manufacturing. Full tech pack digitizing and brand scaling.",
    tag: "Full Service",
  },
  {
    href: "/custom-beanies-manufacturer",
    title: "Custom Knit Beanies",
    desc: "Ribbed knit, cuffed beanies, jacquard and genuine leather patch applications for winter programs.",
    tag: "Seasonal",
  },
  {
    href: "/custom-dad-hats-manufacturer",
    title: "Custom Dad Hats",
    desc: "Vintage unstructured 6-panel caps, heavy enzyme wash, curved visor, antique slide buckles.",
    tag: "Lifestyle",
  },
  {
    href: "/wholesale-snapbacks",
    title: "Wholesale Snapback Hats",
    desc: "Classic high-crown flat brim caps, buckram structured front with 3D high-density puff embroidery.",
    tag: "Streetwear",
  },
  {
    href: "/custom-trucker-hats",
    title: "Custom Trucker Hats",
    desc: "Breathable poly-mesh backs, foam or heavy cotton twill fronts, customized for promotional runs.",
    tag: "Promo & Outdoor",
  },
  {
    href: "/wholesale-blank-caps-supplier",
    title: "Wholesale Blank Caps",
    desc: "Immediate warehouse inventory ready for domestic printers and embroidery shops.",
    tag: "Fast Dispatch",
  },
  {
    href: "/private-label-hat-manufacturer",
    title: "Private Label Headwear",
    desc: "Dedicated branding package: custom woven labels, printed seam tape, bespoke hangtags and boxes.",
    tag: "Brand Turnkey",
  },
  {
    href: "/corporate-custom-hats-supplier",
    title: "Corporate Uniform Headwear",
    desc: "Durable, high-repeat corporate identity programs and company uniform cap bulk orders.",
    tag: "Uniforms",
  },
  {
    href: "/custom-bucket-hats-manufacturer",
    title: "Custom Bucket Hats",
    desc: "Wide-brim festival and outdoor bucket hats, UPF 50+ sun protection, chin cords and reversible builds.",
    tag: "Outdoor",
  },
  {
    href: "/bulk-custom-hats-manufacturer",
    title: "Container Bulk Production",
    desc: "20GP and 40HQ container load manufacturing for international distributors and importers.",
    tag: "10,000+ Scale",
  },
  {
    href: "/pricing",
    title: "Tiered Wholesale Pricing",
    desc: "Transparent FOB price breaks from $3.50/pc floor rate, MOQ 200pcs, and cost breakdowns.",
    tag: "Transparent Rates",
  },
];

export default function Home() {
  const t = useT("home");
  const n = useT("nav");
  const ft = useT("footer");
  const lang = useLang();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  const BANNERS = [
    {
      image: "/images/site/img-34a1ae33.webp",
      title: t("banners.0.title"),
      sub: t("banners.0.sub"),
      cta: t("banners.0.cta"),
      link: "whatsapp"
    },
    {
      image: "/images/site/ab257aa93655344cdb3405b61cb0622bfs.webp",
      title: t("banners.1.title"),
      sub: t("banners.1.sub"),
      cta: t("banners.1.cta"),
      link: "#inquiry?intent=bulk"
    },
    {
      image: "/images/site/af4c92eab3b8f4bd68fcb467865c9d3512.webp",
      title: t("banners.2.title"),
      sub: t("banners.2.sub"),
      cta: t("banners.2.cta"),
      link: "#inquiry?intent=sample"
    }
  ];

  const FAQS = [
    { q: t("faq.q0"), a: t("faq.a0") },
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baoding Junyang Hat Manufacturing Co., Ltd.",
    "description": "Premium custom hat factory — OEM/ODM baseball caps, snapbacks, trucker hats, and beanies. SGS verified, 12+ years experience.",
    "image": "/images/brand/junyang-logo.png",
    "url": "https://bdjunyang.com",
    "telephone": "+86-15933930830",
    "email": "admin@bdjunyang.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Baoding", "addressRegion": "Hebei", "addressCountry": "CN" },
    "priceRange": "$$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bdjunyang.com" }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const trackWhatsApp = (source: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", { event_category: "engagement", event_label: source });
    }
  };

  const handleWhatsApp = (source: string, customText?: string) => {
    const defaultText = "Hi Baoding Junyang! I would like to get a catalog and quote for custom baseball caps.";
    const text = encodeURIComponent(`${customText || defaultText}\n\n${attributionTag()}`);
    trackWhatsApp(source);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Trust Banner / Top Bar */}
      <div className="bg-black text-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase">
        China's Leading Premium Baseball Cap Manufacturer • Est. 2014
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">{t("subtitle")}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <a href="#advantages" className="hover:text-black transition">{n("advantages")}</a>
            <a href="#factory" className="hover:text-black transition">{n("factory")}</a>
            <a href="#qc" className="hover:text-black transition">{n("qualityControl")}</a>
            <NavCompareMenu />
            <a href="#inquiry" className="hover:text-black transition">{n("inquiry")}</a>
          </nav>
          {/* Action buttons (Desktop + Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => handleWhatsApp("header")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full text-xs md:text-sm flex items-center gap-1.5 sm:gap-2 transition shadow-xs cursor-pointer"
            >
              <MessageCircle size={15} /> <span className="hidden sm:inline">{n("whatsappQuote")}</span><span className="sm:hidden">Quote</span>
            </button>
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section (Carousel — Optimized for Mobile Viewport) */}
      <section className="relative min-h-[460px] sm:h-[540px] md:h-[680px] bg-gray-950 text-white overflow-hidden flex items-center">
        {BANNERS.map((banner, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-black/55 z-10"></div>
            <img 
              src={banner.image} 
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm border-b-2 border-yellow-400 pb-0.5 mb-3 sm:mb-6">
                {t(`banners.${currentBanner}.label`)}
              </span>
              {index === 0 ? (
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-6 tracking-tight leading-tight max-w-5xl">
                  {banner.title}
                </h1>
              ) : (
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-6 tracking-tight leading-tight max-w-5xl">
                  {banner.title}
                </h2>
              )}
              <p className="text-xs sm:text-base md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                {banner.sub}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
                <button 
                  onClick={banner.link === 'whatsapp' ? () => handleWhatsApp("hero-banner") : () => window.location.hash = banner.link}
                  className="bg-emerald-500 text-white font-black px-6 sm:px-10 py-3 sm:py-4.5 rounded-full hover:bg-emerald-600 transition flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-xl shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  {banner.link === 'whatsapp' && <MessageCircle size={20} />} {banner.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button 
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white"
        >
          <ChevronRight size={32} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${index === currentBanner ? 'w-8 bg-yellow-400' : 'w-3 bg-white/30'}`}
            ></button>
          ))}
        </div>

        {/* Hero Data Pills */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3 flex-wrap justify-center px-4">
           <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">{t("pills.moq")}</span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">{t("pills.samples")}</span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">{t("pills.market")}</span>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">{t("stats.years")}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.yearsLabel")}</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">{t("stats.moq")}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.moqLabel")}</p>
          </div>
          <div className="p-4 flex flex-col items-center justify-center">
            {/* The SGS badge image 404s on production, so show an icon + label
                rather than a broken <img>. Drop the real badge into
                public/images/brand/sgs-badge.png to use the actual artwork. */}
            <ShieldCheck size={40} strokeWidth={1.5} className="mb-2 text-gray-400" />
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.sgs")}</p>
          </div>
        </div>
      </section>

      {/* Global Markets & Compliance */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition duration-500">
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-3">{t("compliance.title")}</span>
              <div className="flex items-center gap-8">
                 <span className="font-black text-xl italic text-gray-400">REACH</span>
                 <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transform -rotate-2">
                    <span className="font-black text-2xl italic">CE</span>
                    <span className="text-[8px] font-bold uppercase leading-tight">{t("compliance.certified")}</span>
                 </div>
                 <span className="font-black text-xl italic text-gray-400">RoHS</span>
              </div>
           </div>
           <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-3">{t("compliance.markets")}</span>
              <div className="flex gap-8">
                 <span className="font-bold text-sm tracking-tight">{t("compliance.na")}</span>
                 <span className="font-bold text-sm tracking-tight">{t("compliance.eu")}</span>
              </div>
           </div>
        </div>
      </section>

      {/* Inside Our Factory / live update section */}
      <section id="factory" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("factory.label")}</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-6">{t("factory.heading")}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t("factory.p1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <strong>{t("factory.p2Pre")}</strong> {t("factory.p2")}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">{t("factory.qcStandard")}</h4>
                    <p className="text-xs text-gray-500">{t("factory.qcStandardDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">{t("factory.samples")}</h4>
                    <p className="text-xs text-gray-500">{t("factory.samplesDesc")}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleWhatsApp("factory-section")}
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <Play size={16} /> {t("factory.videoCta")}
              </button>
            </div>
            {/* Visual Factory Video Player */}
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-gray-900 shadow-2xl group">
              {isPlaying ? (
                <video 
                  src="https://github.com/cap603/bd-hats-b2b/releases/download/v1.0.0/factory-video.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                   {/* TODO: Replace with real factory floor photo — e.g. production line or embroidery machine close-up */}
                   <img 
                     src="/images/site/img-34a1ae33.webp" 
                     alt="Baoding Junyang Hat Factory Floor" 
                     className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
                     width="1200"
                     height="800" 
                   />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white text-black h-16 w-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play size={24} className="ml-1 text-black" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl">
                    <p className="font-bold text-base">{t("factory.videoTitle")}</p>
                    <p className="text-xs text-gray-300">{t("factory.videoSub")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Social Proof Section */}
      <section className="py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("trust.label")}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{t("trust.heading")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light mb-16">
            {t("trust.sub")}
          </p>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🏭",
                stat: t("trust.brands"),
                label: t("trust.brandsLabel"),
                desc: t("trust.brandsDesc")
              },
              {
                icon: "🧢",
                stat: t("trust.caps"),
                label: t("trust.capsLabel"),
                desc: t("trust.capsDesc")
              },
              {
                icon: "⭐",
                stat: t("trust.retention"),
                label: t("trust.retentionLabel"),
                desc: t("trust.retentionDesc")
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-4xl font-black text-black mb-2">{item.stat}</p>
                <p className="font-bold text-gray-800 mb-2">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-gray-100">
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <ShieldCheck size={18} className="text-green-600" />
              <span className="text-sm font-bold">{t("trust.sgsSupplier")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.goldSupplier")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.certifications")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.qcStandard")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section — Modern B2B Industrial Wholesale Fluid 4-Column Grid */}
      <section id="catalog" className="py-24 bg-slate-50/80 border-y border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full inline-block">
              {t("catalog.label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-3 mb-4">
              {t("catalog.heading")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
              {t("catalog.sub")}
            </p>
          </div>
          <HatCatalog />
        </div>
      </section>

      {/* B2B Manufacturing Programs — High-Density 4-Column Grid */}
      <section className="py-12 sm:py-16 px-4 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                OEM / ODM Lines
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-2">
                Specialized B2B Production Programs
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              Direct-to-factory contract programs for brand founders, distributors, and bulk importers. MOQ 200 pcs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {MANUFACTURING_PROGRAMS.map((prog, idx) => (
              <Link
                key={idx}
                href={`/${lang}${prog.href}`}
                className="group bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                      {prog.tag}
                    </span>
                    <ArrowRight size={13} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                    {prog.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                    {prog.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How It Works — Compact Horizontal Flow Ribbon */}
      <section className="py-10 sm:py-14 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-400">{t("process.label")}</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1">{t("process.heading")}</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">Standard 7-Day Samples · 15-20 Days Bulk Delivery</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { num: "01", title: t("process.step1Title"), desc: t("process.step1Desc") },
              { num: "02", title: t("process.step2Title"), desc: t("process.step2Desc") },
              { num: "03", title: t("process.step3Title"), desc: t("process.step3Desc") },
              { num: "04", title: t("process.step4Title"), desc: t("process.step4Desc") },
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-800/80 border border-slate-700/70 p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-amber-400 font-mono tracking-wider">STEP {step.num}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Protocol Section — High-Density 2-Column Balanced View */}
      <section id="qc" className="py-12 sm:py-16 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: 5 QC Inspection Checkpoints in 2-col compact grid */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                {t("qc.label")}
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">
                {t("qc.heading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { num: "01", title: t("qc.step1Title"), desc: t("qc.step1Desc") },
                  { num: "02", title: t("qc.step2Title"), desc: t("qc.step2Desc") },
                  { num: "03", title: t("qc.step3Title"), desc: t("qc.step3Desc") },
                  { num: "04", title: t("qc.step4Title"), desc: t("qc.step4Desc") },
                  { num: "05", title: t("qc.step5Title"), desc: t("qc.step5Desc") },
                ].map((qcItem, qIdx) => (
                  <div key={qIdx} className={`p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 ${qIdx === 4 ? "sm:col-span-2" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-5 w-5 rounded-md bg-slate-900 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                        {qcItem.num}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">{qcItem.title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 pl-7">{qcItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Compact Factory QC Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                <img 
                  src="/images/site/af4c92eab3b8f4bd68fcb467865c9d3512.webp" 
                  alt="Quality Control Factory Floor" 
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">{t("qc.liveStatus")}</span>
                      <p className="text-slate-900 font-bold text-xs">{t("qc.qcPassed")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 font-black text-xs">
                    <span>CE</span>
                    <span>•</span>
                    <span>SGS</span>
                    <span>•</span>
                    <span>RoHS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — Compact 2-Column Accordion */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-2">
                {t("faq.heading")}
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">{t("faq.sub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs transition">
                <summary className="flex items-center justify-between gap-3 cursor-pointer list-none">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-black text-xs">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown size={16} className="text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-slate-600 text-xs leading-relaxed pt-3 mt-3 border-t border-slate-100 flex gap-2">
                  <span className="text-slate-400 font-black shrink-0">A:</span>
                  <span>{faq.a}</span>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section — High-Efficiency Lead Box */}
      <section id="inquiry" className="py-12 sm:py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-5 sm:p-10 border border-slate-200 shadow-xs">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              {t("inquiry.heading")}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mt-1 leading-relaxed">
              {t("inquiry.sub")}
            </p>
          </div>

          {/* Trust label above form */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
              <ShieldCheck size={16} className="text-emerald-600" /> {t("inquiry.trustLabel")}
            </span>
          </div>

          <InquiryForm />

          {/* Client testimonials below form — Compact 3-Column Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200/80">
            <h3 className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              {t("inquiry.testimonialTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex gap-0.5 text-amber-400 text-xs mb-2" aria-hidden="true">
                      {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 italic line-clamp-3">
                      &ldquo;{t(`inquiry.testimonials.${i}.quote`)}&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-black text-slate-900">{t(`inquiry.testimonials.${i}.name`)}</p>
                    <p className="text-[10px] font-bold text-slate-400">{t(`inquiry.testimonials.${i}.role`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-16 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">{ft("about")}</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">{ft("navigation")}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#advantages" className="hover:text-white">{n("advantages")}</a></li>
                <li><a href="#factory" className="hover:text-white">{n("factory")}</a></li>
                <li><a href="#catalog" className="hover:text-white">{ft("products")}</a></li>
            <li><a href={`/${lang}/about`} className="hover:text-white">{ft("aboutLink")}</a></li>
            <li><a href={`/${lang}/guide`} className="hover:text-white">{ft("guideLink")}</a></li>
            <li><a href={`/${lang}/wholesale-snapbacks`} className="hover:text-white">Wholesale Snapbacks</a></li>
            <li><a href={`/${lang}/custom-trucker-hats`} className="hover:text-white">Custom Trucker Hats</a></li>
            <li><a href={`/${lang}/oem-hat-manufacturer`} className="hover:text-white">OEM Hat Manufacturing</a></li>
            <li><a href={`/${lang}/private-label-hat-manufacturer`} className="hover:text-white">Private Label Hats</a></li>
            <li><a href={`/${lang}/custom-dad-hats-manufacturer`} className="hover:text-white">Custom Dad Hats</a></li>
            <li><a href={`/${lang}/custom-5-panel-caps-manufacturer`} className="hover:text-white">Custom 5-Panel Caps</a></li>
            <li><a href={`/${lang}/wholesale-blank-caps-supplier`} className="hover:text-white">Wholesale Blank Caps</a></li>
            <li><a href={`/${lang}/corporate-custom-hats-supplier`} className="hover:text-white">Corporate Custom Hats</a></li>
            <li><a href={`/${lang}/bulk-custom-hats-manufacturer`} className="hover:text-white">Bulk Hat Production</a></li>
            <li><a href={`/${lang}/custom-beanies-manufacturer`} className="hover:text-white">Custom Beanies</a></li>
            <li><a href={`/${lang}/custom-bucket-hats-manufacturer`} className="hover:text-white">Custom Bucket Hats</a></li>
            <li><a href={`/${lang}/compare/5-panel-vs-6-panel-caps`} className="hover:text-white">5-Panel vs 6-Panel Caps</a></li>
            <li><a href={`/${lang}/compare/flat-embroidery-vs-3d-puff`} className="hover:text-white">Flat vs 3D Puff Embroidery</a></li>
            <li><a href={`/${lang}/compare/cotton-twill-vs-brushed-cotton-vs-canvas`} className="hover:text-white">Twill vs Brushed Cotton vs Canvas</a></li>
            <li><a href={`/${lang}/compare/snapback-vs-strapback-vs-buckle`} className="hover:text-white">Snapback vs Strapback vs Buckle</a></li>
            <li><a href={`/${lang}/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing`} className="hover:text-white">China vs Vietnam vs Bangladesh</a></li>
                <li><a href="#inquiry" className="hover:text-white">{ft("requestQuote")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">{ft("contact")}</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">{ft("whatsapp")}</li>
                <li className="text-gray-400">{ft("email")}</li>
                <li className="text-gray-400">{ft("office")}</li>
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

