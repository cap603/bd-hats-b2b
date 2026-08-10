"use client";

import { useState, useEffect } from "react";
import { useT } from "../lib/i18n";
import { HatCatalog } from "../components/HatCatalog";
import { InquiryForm } from "../components/InquiryForm";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const t = useT("home");
  const n = useT("nav");
  const ft = useT("footer");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  const BANNERS = [
    {
      image: "https://sc02.alicdn.com/kf/A08f3026e946b4a238d225173ff266ad8N.png",
      title: t("banners.0.title"),
      sub: t("banners.0.sub"),
      cta: t("banners.0.cta"),
      link: "whatsapp"
    },
    {
      image: "https://sc02.alicdn.com/kf/Ab257aa93655344cdb3405b61cb0622bfS.png",
      title: t("banners.1.title"),
      sub: t("banners.1.sub"),
      cta: t("banners.1.cta"),
      link: "#inquiry?intent=bulk"
    },
    {
      image: "https://sc02.alicdn.com/kf/Af4c92eab3b8f4bd68fcb467865c9d3512.png",
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
    "image": "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png",
    "url": "https://b2b.bdjunyang.com",
    "telephone": "+86-15933930830",
    "email": "admin@bdjunyang.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Baoding", "addressRegion": "Hebei", "addressCountry": "CN" },
    "priceRange": "$$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://b2b.bdjunyang.com" }]
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
    const defaultText = "Hi Baoding Junyang! I would like to get a catalog and free mockup for custom baseball caps.";
    const text = encodeURIComponent(customText || defaultText);
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

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => handleWhatsApp("floating-widget")}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition duration-300 text-sm md:text-base animate-bounce"
        >
          <MessageCircle size={20} /> Chat with a Specialist
        </button>
      </div>

      {/* Trust Banner / Top Bar */}
      <div className="bg-black text-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase">
        China's Leading Premium Baseball Cap Manufacturer • Est. 2014
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
              alt="JUNYANG Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">{t("subtitle")}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#advantages" className="hover:text-black transition">{n("advantages")}</a>
            <a href="#factory" className="hover:text-black transition">{n("factory")}</a>
            <a href="#qc" className="hover:text-black transition">{n("qualityControl")}</a>
            <a href="#catalog" className="hover:text-black transition">{n("products")}</a>
            <a href="#inquiry" className="hover:text-black transition">{n("inquiry")}</a>
          </nav>
          <button 
            onClick={() => handleWhatsApp("header")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm flex items-center gap-2 transition"
          >
            <MessageCircle size={16} /> {n("whatsappQuote")}
          </button>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section (Carousel) */}
      <section className="relative h-[500px] md:h-[700px] bg-gray-950 text-white overflow-hidden">
        {BANNERS.map((banner, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={banner.image} 
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm border-b-2 border-yellow-400 pb-1 mb-6">
                {t(`banners.${currentBanner}.label`)}
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight max-w-5xl">
                {banner.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl font-light leading-relaxed">
                {banner.sub}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
                <button 
                  onClick={banner.link === 'whatsapp' ? () => handleWhatsApp("hero-banner") : () => window.location.hash = banner.link}
                  className="bg-green-500 text-white font-bold px-10 py-5 rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2 text-lg shadow-lg"
                >
                  {banner.link === 'whatsapp' && <MessageCircle size={24} />} {banner.cta}
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
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">{t("pills.mockup")}</span>
        </div>
      </section>

      {/* Free 3D Mockup CTA Section */}
      <section className="bg-amber-500 py-12 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
              {t("mockupCta.heading")}
            </h2>
            <p className="text-white font-bold mt-2 text-lg">
              {t("mockupCta.sub")}
            </p>
          </div>
          <a 
            href="#inquiry?intent=mockup" 
            className="bg-black text-white font-bold px-10 py-5 rounded-full hover:bg-gray-900 transition flex items-center gap-3 text-lg shadow-xl shadow-black/20"
          >
            <Cpu size={24} /> {t("mockupCta.button")}
          </a>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">{t("stats.years")}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.yearsLabel")}</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">{t("stats.moq")}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.moqLabel")}</p>
          </div>
          <div className="p-4 flex flex-col items-center justify-center">
            <img src="https://sc02.alicdn.com/kf/S550f2425a6104c99a815a513ca0c5e7fG.png" alt="SGS Verified" className="h-12 w-auto mb-2 opacity-80" />
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.sgs")}</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">{t("stats.mockup")}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.mockupLabel")}</p>
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
                    <h4 className="font-bold text-black">{t("factory.aql")}</h4>
                    <p className="text-xs text-gray-500">{t("factory.aqlDesc")}</p>
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
                     src="https://images.unsplash.com/photo-1556011504-f58c4033b93f?auto=format&fit=crop&q=80&w=1200" 
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
              <img src="https://sc02.alicdn.com/kf/S550f2425a6104c99a815a513ca0c5e7fG.png" alt="SGS" className="h-8 w-auto" />
              <span className="text-sm font-bold">{t("trust.sgsSupplier")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.goldSupplier")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.certifications")}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">{t("trust.aqlStandard")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("catalog.label")}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{t("catalog.heading")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">{t("catalog.sub")}</p>
        </div>
        <HatCatalog />
      </section>

      {/* Process / How It Works */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">{t("process.label")}</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2">{t("process.heading")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">01</span>
              <h3 className="text-lg font-bold mb-3 mt-4">{t("process.step1Title")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t("process.step1Desc")}</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">02</span>
              <h3 className="text-lg font-bold mb-3 mt-4">{t("process.step2Title")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t("process.step2Desc")}</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">03</span>
              <h3 className="text-lg font-bold mb-3 mt-4">{t("process.step3Title")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t("process.step3Desc")}</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">04</span>
              <h3 className="text-lg font-bold mb-3 mt-4">{t("process.step4Title")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t("process.step4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QC Protocol Section */}
      <section id="qc" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("qc.label")}</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-8">{t("qc.heading")}</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">01</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{t("qc.step1Title")}</h4>
                    <p className="text-gray-600 text-sm mt-1">{t("qc.step1Desc")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">02</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{t("qc.step2Title")}</h4>
                    <p className="text-gray-600 text-sm mt-1">{t("qc.step2Desc")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">03</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{t("qc.step3Title")}</h4>
                    <p className="text-gray-600 text-sm mt-1">{t("qc.step3Desc")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">04</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{t("qc.step4Title")}</h4>
                    <p className="text-gray-600 text-sm mt-1">{t("qc.step4Desc")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">05</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{t("qc.step5Title")}</h4>
                    <p className="text-gray-600 text-sm mt-1">{t("qc.step5Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 {/* TODO: Replace with real QC inspection photo from your factory floor */}
                 <img 
                   src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" 
                   alt="Quality Control Inspection" 
                   className="w-full h-auto"
                 />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur shadow-lg p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t("qc.liveStatus")}</span>
                  </div>
                  <p className="text-black font-bold text-sm">{t("qc.aqlPassed")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{t("faq.heading")}</h2>
            <p className="text-gray-500 text-lg">{t("faq.sub")}</p>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-3 flex gap-3">
                  <span className="text-yellow-500 font-black">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex gap-3">
                  <span className="text-gray-400 font-black">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2rem] p-8 md:p-16 shadow-inner border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-black uppercase">{t("inquiry.heading")}</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">{t("inquiry.sub")}</p>
          </div>

          {/* Trust label above form */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-green-500" /> {t("inquiry.trustLabel")}
            </span>
          </div>

          <InquiryForm />

          {/* Client testimonials below form */}
          <div className="mt-14">
            <h3 className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
              {t("inquiry.testimonialTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-3" aria-hidden="true">
                    {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4 italic">
                    &ldquo;{t(`inquiry.testimonials.${i}.quote`)}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-black text-black">{t(`inquiry.testimonials.${i}.name`)}</p>
                    <p className="text-xs font-bold text-gray-400">{t(`inquiry.testimonials.${i}.role`)}</p>
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
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
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
                <li><a href="/about" className="hover:text-white">{ft("aboutLink")}</a></li>
                <li><a href="/guide" className="hover:text-white">{ft("guideLink")}</a></li>
                <li><a href="/materials" className="hover:text-white">{ft("materialsLink")}</a></li>
                <li><a href="/pricing" className="hover:text-white">{ft("pricingLink")}</a></li>
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

