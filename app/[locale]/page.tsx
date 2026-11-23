"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useT, useLang } from "../lib/i18n";
import { attributionTag } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { NavCompareMenu } from "../components/NavCompareMenu";
import { NavProductsMenu } from "../components/NavProductsMenu";
import { MobileNav } from "../components/MobileNav";
import { HatCatalog } from "../components/HatCatalog";
import { InquiryForm } from "../components/InquiryForm";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { MobileStickyBar } from "../components/MobileStickyBar";
import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, CheckCircle2, Facebook, Linkedin, FileDown, Sparkles, Package } from "lucide-react";

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
    desc: "Wide-brim festival and outdoor bucket hats, sun shading fabrics, chin cords and reversible builds.",
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
    desc: "Transparent FOB volume tiers from $5.20/pc at MOQ 200; container-scale floor from $3.50/pc. Cost breakdowns included.",
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
      image: "/images/site/banner-1-premier-manufacturer.webp",
      mobileImage: "/images/site/banner-1-premier-manufacturer-mobile.webp",
      title: t("banners.0.title"),
      sub: t("banners.0.sub"),
      cta: t("banners.0.cta"),
      link: "whatsapp"
    },
    {
      image: "/images/site/banner-2-customize-detail.webp",
      mobileImage: "/images/site/banner-2-customize-detail-mobile.webp",
      title: t("banners.1.title"),
      sub: t("banners.1.sub"),
      cta: t("banners.1.cta"),
      link: "#inquiry?intent=bulk"
    },
    {
      image: "/images/site/banner-3-trusted-supplier.webp",
      mobileImage: "/images/site/banner-3-trusted-supplier-mobile.webp",
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

  // WhatsApp click tracking is handled once by trackWhatsAppClick (lib/tracking).
  // A duplicate local gtag call used to live here and double-counted every
  // homepage WhatsApp click in GA4 with a different parameter shape.
  const handleWhatsApp = (source: string, customText?: string) => {
    trackWhatsAppClick({
      button: "homepage_cta",
      label: `Home Section: ${source}`,
    });
    const isEs = lang === "es";
    const defaultText = isEs
      ? "¡Hola Baoding Junyang! Me gustaría solicitar el catálogo de fábrica y una cotización para gorras personalizadas (MOQ 200 uds)."
      : "Hi Baoding Junyang! I would like to get a catalog and quote for custom baseball caps.";
    const text = encodeURIComponent(`${customText || defaultText}\n\n${attributionTag()}`);
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
      <div className="bg-black text-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span>China's Leading Premium Baseball Cap Manufacturer • Est. 2014</span>
        <span className="hidden sm:inline text-amber-400">•</span>
        <span className="text-amber-400 font-bold">Active Q4 2026 Production Schedule</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              width="48"
              height="48"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none whitespace-nowrap">{t("subtitle")}</span>
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

      {/* Hero Section (Carousel — True Full-Bleed 2560x864 Panoramic Banners) */}
      <section className="relative w-full overflow-hidden bg-gray-950 flex items-center justify-center">
        <div className="relative w-full aspect-[2560/864] max-h-[660px] overflow-hidden">
          {BANNERS.map((banner, index) => (
            <div 
              key={index}
              onClick={banner.link === 'whatsapp' ? () => handleWhatsApp("hero-banner") : () => window.location.hash = banner.link}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <picture className="w-full h-full block">
                <source media="(max-width: 768px)" srcSet={banner.mobileImage} type="image/webp" />
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  width="2560"
                  height="864"
                  loading={index === 0 ? "eager" : "lazy"}
                  // @ts-expect-error React 18 fetchPriority support
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="w-full h-full object-cover"
                />
              </picture>
              {/* Screen Reader & SEO semantic preservation */}
              <div className="sr-only">
                {index === 0 ? (
                  <h1>{banner.title}</h1>
                ) : (
                  <h2>{banner.title}</h2>
                )}
                <p>{banner.sub}</p>
                <span>{t(`banners.${currentBanner}.label`)}</span>
                <span>{banner.cta}</span>
              </div>
            </div>
          ))}

        {/* Carousel Controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevBanner(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition text-white shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextBanner(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition text-white shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

          {/* Carousel Indicators (Accessible touch area with sleek visual bar) */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1 sm:gap-2 items-center">
            {BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentBanner(index); }}
                className="p-3.5 -m-1.5 flex items-center justify-center cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`block h-2 transition-all duration-300 rounded-full ${index === currentBanner ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/60 hover:bg-white/90'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-6 sm:py-10 md:py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center">
          <div className="p-1 sm:p-4">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-black mb-0.5 sm:mb-1">{t("stats.years")}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.yearsLabel")}</p>
          </div>
          <div className="p-1 sm:p-4">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-black mb-0.5 sm:mb-1">{t("stats.moq")}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.moqLabel")}</p>
          </div>
          <div className="p-1 sm:p-4 flex flex-col items-center justify-center">
            <ShieldCheck size={28} strokeWidth={1.5} className="mb-1 text-gray-400 sm:w-10 sm:h-10" />
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.sgs")}</p>
          </div>
        </div>

        {/* B2B Procurement Assets & Decision Tools Grid */}
        <div className="max-w-6xl mx-auto mt-4 sm:mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Asset 1: Vector Tech Pack Templates */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between text-white">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <FileDown size={20} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  <span>Free B2B Design Asset</span>
                  <span>•</span>
                  <span>AI / PDF / EPS Flats</span>
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1">
                  {lang === "es"
                    ? "Descarga Gratis: Plantillas Tech Pack Vectoriales (Escala 1:1)"
                    : "Download Free Cap Vector Tech Pack Templates (1:1 Scale)"}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === "es"
                    ? "Patrones listos para producción con cotas de fábrica para 5 paneles, 6 paneles, truckers y gorros con límites de bordado."
                    : "Production-ready flat sketches for 5-panel, 6-panel, truckers & beanies with factory embroidery scale limits."}
                </p>
              </div>
            </div>
            <Link
              href={`/${lang}/custom-hat-tech-pack-template`}
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition shadow-md whitespace-nowrap self-start"
            >
              <span>{lang === "es" ? "Descargar Plantillas Vectoriales" : "Get Vector Templates"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Asset 2: Export Carton & CBM Calculator Tool */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between text-white">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Package size={20} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  <span>Interactive Logistics Tool</span>
                  <span>•</span>
                  <span>60×45×40cm Spec</span>
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1">
                  {lang === "es"
                    ? "Calculadora B2B de Cajas de Exportación y CBM"
                    : "Export Carton Count & Freight CBM Calculator"}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === "es"
                    ? "Calcule número de cajas (100 uds/caja), peso bruto (~12kg) y volumen CBM para envíos aéreos y contenedores FCL (20GP/40HQ)."
                    : "Estimate master export cartons (100 pcs/ctn), gross weight (~12kg), and CBM volume for Air Cargo and FCL ocean containers."}
                </p>
              </div>
            </div>
            <Link
              href={`/${lang}/tools/carton-calculator`}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-black text-xs px-4 py-2.5 rounded-xl transition shadow-md whitespace-nowrap self-start"
            >
              <span>{lang === "es" ? "Abrir Calculadora CBM" : "Open Carton Calculator"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Markets & Compliance */}
      <section className="bg-gray-50 py-4 sm:py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 text-slate-700">
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2 sm:mb-3 text-slate-600">{t("compliance.title")}</span>
              <div className="flex items-center gap-4 sm:gap-8">
                 <span className="font-black text-lg sm:text-xl italic text-slate-700">REACH</span>
                 <div className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transform -rotate-2">
                    <span className="font-black text-xl sm:text-2xl italic">CE</span>
                    <span className="text-[7px] sm:text-[8px] font-bold uppercase leading-tight">{t("compliance.certified")}</span>
                 </div>
                 <span className="font-black text-lg sm:text-xl italic text-slate-700">RoHS</span>
              </div>
           </div>
           <div className="h-6 sm:h-8 w-px bg-gray-300 hidden sm:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2 sm:mb-3 text-slate-600">{t("compliance.markets")}</span>
              <div className="flex gap-4 sm:gap-8">
                 <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">{t("compliance.na")}</span>
                 <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">{t("compliance.eu")}</span>
              </div>
           </div>
        </div>
      </section>

      {/* Inside Our Factory / live update section */}
      <section id="factory" className="py-8 sm:py-16 md:py-24 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-gray-500">{t("factory.label")}</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mt-1 mb-2 sm:mb-6">{t("factory.heading")}</h2>
              <p className="text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-6">
                {t("factory.p1")}
              </p>
              <p className="hidden sm:block text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                <strong>{t("factory.p2Pre")}</strong> {t("factory.p2")}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-gray-200/60">
                  <ShieldCheck className="text-green-500 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <h3 className="font-bold text-black text-xs sm:text-sm md:text-base">{t("factory.qcStandard")}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 sm:line-clamp-none">{t("factory.qcStandardDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-gray-200/60">
                  <Zap className="text-green-500 shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <h3 className="font-bold text-black text-xs sm:text-sm md:text-base">{t("factory.samples")}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 sm:line-clamp-none">{t("factory.samplesDesc")}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleWhatsApp("factory-section")}
                className="bg-black hover:bg-gray-800 text-white font-bold py-2.5 sm:py-4 px-5 sm:px-8 rounded-full transition flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                <Play size={14} className="sm:w-4 sm:h-4" /> {t("factory.videoCta")}
              </button>
            </div>
            {/* Visual Factory Video Player */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-gray-900 shadow-xl group max-h-[260px] sm:max-h-none">
              {isPlaying ? (
                <video 
                  src="https://github.com/cap603/bd-hats-b2b/releases/download/v1.0.0/factory-video.mp4"
                  poster="/images/site/video-cap-production-cover.webp"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <picture className="w-full h-full block">
                    <source media="(max-width: 768px)" srcSet="/images/site/video-cap-production-cover-mobile.webp" type="image/webp" />
                    <img 
                      src="/images/site/video-cap-production-cover.webp" 
                      alt="Baoding Junyang Custom Hat Manufacturing Line" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
                      width="1024"
                      height="1024" 
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white text-black h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play size={20} className="ml-0.5 text-black sm:w-6 sm:h-6" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white bg-gradient-to-t from-black/80 to-transparent p-2.5 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="font-bold text-xs sm:text-base">{t("factory.videoTitle")}</p>
                    <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-1">{t("factory.videoSub")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Social Proof Section */}
      <section className="py-8 sm:py-16 md:py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-gray-500">{t("trust.label")}</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mt-1 mb-2 sm:mb-4">{t("trust.heading")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs sm:text-base md:text-lg font-light mb-4 sm:mb-12">
            {t("trust.sub")}
          </p>

          {/* Trust Indicators Grid — Ultra-compact 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 mb-4 sm:mb-12">
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
              <div key={i} className="bg-gray-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 md:p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="text-xl sm:text-4xl mb-1 sm:mb-4">{item.icon}</div>
                <p className="text-lg sm:text-3xl md:text-4xl font-black text-black mb-0.5 sm:mb-2">{item.stat}</p>
                <p className="font-bold text-gray-800 text-[10px] sm:text-sm md:text-base leading-tight mb-0.5 sm:mb-2">{item.label}</p>
                <p className="hidden sm:block text-gray-500 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications Row — Compact on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 py-3 sm:py-6 border-t border-gray-100">
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <ShieldCheck size={14} className="text-green-600 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.sgsSupplier")}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.goldSupplier")}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.certifications")}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.qcStandard")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section — Modern B2B Industrial Wholesale Fluid 4-Column Grid */}
      <section id="catalog" className="py-8 sm:py-16 md:py-24 bg-slate-50/80 border-y border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full inline-block">
              {t("catalog.label")}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mt-1.5 sm:mt-3 mb-1.5 sm:mb-4">
              {t("catalog.heading")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-normal leading-relaxed">
              {t("catalog.sub")}
            </p>
          </div>
          <HatCatalog />
        </div>
      </section>

      {/* Sourcing Programs by Buyer Segment (Item 2) */}
      <section className="py-8 sm:py-14 md:py-18 px-4 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 sm:gap-3 mb-6 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full inline-block">
                {lang === "es" ? "Segmentación por Perfil de Comprador" : "Buyer Sourcing Programs"}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1.5 sm:mt-2">
                {lang === "es" ? "Programas a Medida según tu Industria y Escala" : "Tailored Manufacturing Programs by Buyer Segment"}
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">
              {lang === "es"
                ? "Soluciones de producción directas de fábrica optimizadas para los requisitos específicos de cada sector."
                : "Engineered factory-direct supply programs matching the exact specifications and volume curves of global procurement sectors."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Sector 1: Streetwear & Apparel Brands */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded">
                    Fashion & Drops
                  </span>
                  <span className="text-xs font-black text-slate-900">MOQ 200</span>
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {lang === "es" ? "Marcas Streetwear & Diseñadores" : "Streetwear & Apparel Labels"}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {lang === "es"
                    ? "Perfiles 5-panel camper, gorras desgastadas enzyme wash, bordado 3D puff de alta densidad y etiquetas tejidas personalizadas."
                    : "5-panel campers, vintage enzyme-washed dad hats, high-density 3D puff embroidery, and custom branded damask inner taping."}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-emerald-700">100% Sample Refund ≥500</span>
                <Link href={`/${lang}/custom-5-panel-caps-manufacturer`} className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                  <span>Explore</span> <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sector 2: Corporate Uniforms & Identity */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded">
                    Uniform & Workwear
                  </span>
                  <span className="text-xs font-black text-slate-900">500 – 5,000+</span>
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {lang === "es" ? "Uniformes y Dotaciones Corporativas" : "Corporate & Uniform Programs"}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {lang === "es"
                    ? "Gorras clásicas estructuradas de 6 paneles, alta solidez del color, ribetes reflectantes e inspección rigurosa pieza por pieza."
                    : "Heavy-duty structured 6-panel twill caps, high colorfastness, reflective piping, and piece-by-piece pre-shipment QC inspection."}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-blue-700">Itemized BOM Quotes</span>
                <Link href={`/${lang}/corporate-custom-hats-supplier`} className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                  <span>Explore</span> <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sector 3: Golf, Outdoor & Athletic */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                    Performance Active
                  </span>
                  <span className="text-xs font-black text-slate-900">MOQ 200</span>
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {lang === "es" ? "Golf, Deportes y Outdoor Técnico" : "Golf & Performance Athletic"}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {lang === "es"
                    ? "Paneles perforados a láser, nailon impermeable DWR, badanas CoolMax transpirables y cierres de silicona prémium."
                    : "Laser-perforated airflow panels, lightweight DWR water-repellent nylon, moisture-wicking CoolMax sweatbands, and silicone closures."}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-emerald-700">CoolMax Tech Ready</span>
                <Link href={`/${lang}/custom-golf-performance-hats`} className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                  <span>Explore</span> <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sector 4: Container Bulk & Importers */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                    Container FCL Scale
                  </span>
                  <span className="text-xs font-black text-slate-900">10,000+ Pcs</span>
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1">
                  {lang === "es" ? "Distribuidores y Cargas Contenedor" : "Container Bulk & Distributors"}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {lang === "es"
                    ? "Gorras trucker de malla y snapbacks de visera plana. Optimización de cubicaje para contenedores 20GP/40HQ y precio suelo directo de fábrica."
                    : "High-volume mesh truckers and flat-brim snapbacks. 20GP & 40HQ container load optimization and factory floor FOB rates from $3.50."}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-amber-800">From $3.50 FOB</span>
                <Link href={`/${lang}/bulk-custom-hats-manufacturer`} className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                  <span>Explore</span> <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Manufacturing Programs — High-Density 4-Column Grid */}
      <section className="py-6 sm:py-12 md:py-16 px-4 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 sm:gap-3 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                OEM / ODM Lines
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1 sm:mt-2">
                Specialized B2B Production Programs
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">
              Direct-to-factory contract programs for brand founders, distributors, and bulk importers. MOQ 200 pcs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {MANUFACTURING_PROGRAMS.map((prog, idx) => (
              <Link
                key={idx}
                href={`/${lang}${prog.href}`}
                className="group bg-white p-2.5 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-1.5 sm:px-2 py-0.5 rounded">
                      {prog.tag}
                    </span>
                    <ArrowRight size={12} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-0.5 sm:mb-1">
                    {prog.title}
                  </h3>
                  <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                    {prog.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How It Works — Compact Horizontal Flow Ribbon */}
      <section className="py-6 sm:py-10 md:py-14 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-400">{t("process.label")}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-0.5 sm:mt-1">{t("process.heading")}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {lang === "es" ? "Cotización Escrita en 2h" : "Written Quote in 2h"}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Standard 7-Day Samples · 15-20 Days Bulk</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6">
            {[
              { num: "01", title: t("process.step1Title"), desc: t("process.step1Desc") },
              { num: "02", title: t("process.step2Title"), desc: t("process.step2Desc") },
              { num: "03", title: t("process.step3Title"), desc: t("process.step3Desc") },
              { num: "04", title: t("process.step4Title"), desc: t("process.step4Desc") },
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-800/80 border border-slate-700/70 p-2.5 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-black text-amber-400 font-mono tracking-wider">STEP {step.num}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Photo & Video Proof Bar (Item 3) */}
          <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                  <span>{lang === "es" ? "Bitácora Multimedia de Producción en Vivo" : "Milestone Photo & Video Proof Protocol"}</span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    {lang === "es" ? "Actualizaciones cada 2 días" : "Updates Every 2 Days"}
                  </span>
                </h4>
                <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                  {lang === "es"
                    ? "Seguimiento transparente en cada fase: ① Muestra de tela y corte ② Bordado en máquina Barudan ③ Confección de badana ④ Inspección pieza por pieza y empaque."
                    : "Full production transparency: ① Fabric roll cutting & color check ② Barudan embroidery live video ③ 4-needle sweatband assembly ④ Piece-by-piece final inspection & export carton packing."}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleWhatsApp("process-milestone")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-xs whitespace-nowrap cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>{lang === "es" ? "Consultar con Eileen" : "Inquire with Eileen"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* QC Protocol Section — High-Density 2-Column Balanced View */}
      <section id="qc" className="py-6 sm:py-12 md:py-16 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">
            {/* Left 7 cols: 5 QC Inspection Checkpoints in 2-col compact grid */}
            <div className="lg:col-span-7">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-2 sm:px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                {t("qc.label")}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-3 sm:mb-6">
                {t("qc.heading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: "01", title: t("qc.step1Title"), desc: t("qc.step1Desc") },
                  { num: "02", title: t("qc.step2Title"), desc: t("qc.step2Desc") },
                  { num: "03", title: t("qc.step3Title"), desc: t("qc.step3Desc") },
                  { num: "04", title: t("qc.step4Title"), desc: t("qc.step4Desc") },
                  { num: "05", title: t("qc.step5Title"), desc: t("qc.step5Desc") },
                ].map((qcItem, qIdx) => (
                  <div key={qIdx} className={`p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl border border-slate-200/80 bg-slate-50/60 ${qIdx === 4 ? "sm:col-span-2" : ""}`}>
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="h-4.5 w-4.5 sm:h-5 sm:w-5 rounded bg-slate-900 text-white flex items-center justify-center text-[9px] sm:text-[10px] font-black shrink-0">
                        {qcItem.num}
                      </span>
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">{qcItem.title}</h3>
                    </div>
                    <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed line-clamp-2 pl-6 sm:pl-7">{qcItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Compact Factory QC Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-slate-200 bg-slate-50">
                <img 
                  src="/images/site/af4c92eab3b8f4bd68fcb467865c9d3512.webp" 
                  alt="Quality Control Factory Floor" 
                  className="w-full h-36 sm:h-56 object-cover"
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
      <section className="py-6 sm:py-10 md:py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                FAQ
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1 sm:mt-2">
                {t("faq.heading")}
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">{t("faq.sub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-2xs transition">
                <summary className="flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer list-none">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-black text-xs">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown size={14} className="text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180 sm:w-4 sm:h-4" />
                </summary>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-slate-100 flex gap-2">
                  <span className="text-slate-400 font-black shrink-0">A:</span>
                  <span>{faq.a}</span>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section — High-Efficiency Lead Box */}
      <section id="inquiry" className="py-6 sm:py-12 md:py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 border border-slate-200 shadow-xs">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              {t("inquiry.heading")}
            </h2>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md mx-auto mt-1 leading-relaxed">
              {t("inquiry.sub")}
            </p>
          </div>

          {/* Trust label above form */}
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
            <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-600">
              <ShieldCheck size={14} className="text-emerald-600 sm:w-4 sm:h-4" /> {t("inquiry.trustLabel")}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 sm:px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={12} className="text-blue-600 sm:w-3.5 sm:h-3.5" />
              {lang === "es"
                ? "Soporte de Pago Seguro: Garantía Comercial Alibaba (Trade Assurance) / Escrow"
                : "Payment Protection: Alibaba Trade Assurance & Escrow Supported"}
            </span>
          </div>

          {/* Quick intent selector for zero-cost high-conversion hooks */}
          <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <a
              href="#inquiry?intent=techpack"
              className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/80 rounded-lg sm:rounded-xl transition text-left group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FileDown size={14} className="sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-black text-slate-900 group-hover:text-blue-600 transition flex items-center gap-1">
                  {lang === "es" ? "Descargar Ficha Técnica en Blanco (AI/PDF)" : "Download Blank Tech Pack (AI/PDF)"}
                  <ArrowRight size={11} className="inline opacity-60" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                  {lang === "es" ? "Plantillas vectoriales con cotas de costura" : "Vector 2D flat templates with seam specs"}
                </div>
              </div>
            </a>

            <a
              href="#inquiry?intent=mockup"
              className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 rounded-lg sm:rounded-xl transition text-left group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles size={14} className="sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-black text-slate-900 group-hover:text-emerald-700 transition flex items-center gap-1">
                  {lang === "es" ? "Maqueta 3D Digital Gratuita (24h)" : "Free 3D Digital Mockup (24h)"}
                  <ArrowRight size={11} className="inline opacity-60" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                  {lang === "es" ? "Envía tu logo, te devolvemos render 3D" : "Send your vector logo, get realistic render"}
                </div>
              </div>
            </a>
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
      <footer className="bg-black text-gray-500 py-6 sm:py-12 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 items-start">
          {/* Col 1: Brand & Factory Profile */}
          <div className="space-y-4">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              width="56"
              height="56"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-gray-400 leading-relaxed">{ft("about")}</p>
            <div className="pt-3 border-t border-gray-900 text-[11px] text-gray-500 space-y-1">
              <p className="font-semibold text-gray-400">Direct Super Factory · OEM/ODM</p>
              <p>Exporting to US, EU & AU since 2014</p>
            </div>
          </div>

          {/* Col 2: Custom Headwear Categories */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Custom Headwear</h4>
            <ul className="space-y-2 text-xs">
              <li><a href={`/${lang}/wholesale-snapbacks`} className="hover:text-white transition">Wholesale Snapbacks</a></li>
              <li><a href={`/${lang}/custom-trucker-hats`} className="hover:text-white transition">Custom Trucker Hats</a></li>
              <li><a href={`/${lang}/custom-dad-hats-manufacturer`} className="hover:text-white transition">Custom Dad Hats</a></li>
              <li><a href={`/${lang}/custom-5-panel-caps-manufacturer`} className="hover:text-white transition">Custom 5-Panel Caps</a></li>
              <li><a href={`/${lang}/custom-beanies-manufacturer`} className="hover:text-white transition">Custom Beanies</a></li>
              <li><a href={`/${lang}/custom-bucket-hats-manufacturer`} className="hover:text-white transition">Custom Bucket Hats</a></li>
              <li><a href={`/${lang}/bulk-custom-hats-manufacturer`} className="hover:text-white transition">Bulk & Corporate Orders</a></li>
            </ul>
          </div>

          {/* Col 3: Sourcing Guides & Comparisons */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">B2B Sourcing Guides</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={`/${lang}/custom-hat-tech-pack-template`} className="text-yellow-400 hover:text-yellow-300 font-bold transition flex items-center gap-1">
                  <span>Vector Tech Pack Guide</span>
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-1 py-0.2 rounded font-normal">Free AI/PDF</span>
                </a>
              </li>
              <li><a href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white transition">2026 Hat Cost Index</a></li>
              <li><a href={`/${lang}/top-hat-manufacturers-in-china`} className="hover:text-white transition">Top Hat Manufacturers</a></li>
              <li><a href={`/${lang}/compare/5-panel-vs-6-panel-caps`} className="hover:text-white transition">5-Panel vs 6-Panel Caps</a></li>
              <li><a href={`/${lang}/compare/flat-embroidery-vs-3d-puff`} className="hover:text-white transition">Flat vs 3D Puff Embroidery</a></li>
              <li><a href={`/${lang}/compare/cotton-twill-vs-brushed-cotton-vs-canvas`} className="hover:text-white transition">Cotton Twill vs Canvas</a></li>
              <li><a href={`/${lang}/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing`} className="hover:text-white transition">China vs Vietnam vs Bangladesh</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory Desk */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{ft("contact")}</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href={`https://wa.me/8615933930830?text=${encodeURIComponent(
                    lang === "es"
                      ? "¡Hola Baoding Junyang! Me gustaría solicitar información y cotización para fabricación de gorras personalizadas (MOQ 200 uds)."
                      : "Hi Baoding Junyang! I would like to inquire about custom hat manufacturing and get a quote (MOQ 200pcs)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      button: "footer_whatsapp_link",
                      label: "Homepage Footer Contact",
                    })
                  }
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span>WhatsApp: +86 159 3393 0830</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@bdjunyang.com" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                  <span>Email: admin@bdjunyang.com</span>
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                <span>Office: Baoding, Hebei, China</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Baoding-Junyang-Import-And-Export-Trade-Co-Ltd-100079978783412/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 text-gray-400 flex items-center justify-center transition border border-white/10"
                aria-label="Facebook Page"
                title="Follow us on Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/146738106/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-blue-300 text-gray-400 flex items-center justify-center transition border border-white/10"
                aria-label="LinkedIn Company Page"
                title="Connect on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>

            <a
              href="#inquiry"
              className="mt-4 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-2 rounded-lg text-xs transition shadow-sm cursor-pointer"
            >
              <span>{ft("requestQuote")}</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] text-gray-500">
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#top" className="hover:text-gray-300 transition">Back to Top ↑</a>
          </div>
        </div>
      </footer>
      <MobileStickyBar pageName="Homepage" />
    </main>
  );
}

