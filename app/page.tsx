"use client";

import { useState, useEffect } from "react";
import { HatCatalog } from "./components/HatCatalog";
import { InquiryForm } from "./components/InquiryForm";
import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play, ChevronLeft, ChevronRight } from "lucide-react";

const BANNERS = [
  {
    image: "https://sc02.alicdn.com/kf/A08f3026e946b4a238d225173ff266ad8N.png",
    title: "World-Class Hat Manufacturing",
    sub: "100+ Japanese embroidery machines. 200+ skilled artisans. Factory-direct wholesale from China.",
    cta: "Get Factory Pricing",
    link: "whatsapp"
  },
  {
    image: "https://sc02.alicdn.com/kf/Ab257aa93655344cdb3405b61cb0622bfS.png",
    title: "One-Stop Premium Customization",
    sub: "Unlimited options: Premium fabrics, custom colors, 3D puff embroidery, and tailored hat profiles.",
    cta: "Start Customizing",
    link: "#inquiry"
  },
  {
    image: "https://sc02.alicdn.com/kf/Af4c92eab3b8f4bd68fcb467865c9d3512.png",
    title: "Your Vision, Any Style",
    sub: "From 5-Panel & 6-Panel caps to Truckers, Dad Hats, Beanies, and Bucket Hats. All custom built.",
    cta: "Request Samples",
    link: "#inquiry"
  }
];

const FAQS = [
  {
    q: "What is your Minimum Order Quantity (MOQ) for custom baseball caps?",
    a: "Our standard MOQ is 200 pieces per style/color. We also accommodate smaller test orders for initial brand startups and custom embroidery trials."
  },
  {
    q: "Can I get a sample before bulk production?",
    a: "Yes, absolutely! We provide physical pre-production samples. We can also provide free 3D digital mockups within 12 hours once you submit your artwork."
  },
  {
    q: "Do you manufacture hats based on custom designs (OEM/ODM)?",
    a: "Yes. Baoding Junyang is a full-service OEM/ODM factory. We can construct caps from your sketches, spec sheets, or reverse-engineer physical original samples."
  },
  {
    q: "What is your standard production lead time?",
    a: "Our sample production takes 7 days. Bulk mass production takes 15-20 days depending on the quantity and complexity. Global shipping via air takes 5-8 days."
  }
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

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
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">Baoding Junyang Hat Factory</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#advantages" className="hover:text-black transition">Advantages</a>
            <a href="#factory" className="hover:text-black transition">Our Factory</a>
            <a href="#qc" className="hover:text-black transition">Quality Control</a>
            <a href="#catalog" className="hover:text-black transition">Baseball Caps</a>
            <a href="#inquiry" className="hover:text-black transition">Inquiry</a>
          </nav>
          <button 
            onClick={() => handleWhatsApp("header")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm flex items-center gap-2 transition"
          >
            <MessageCircle size={16} /> WhatsApp Quote
          </button>
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
                Direct-to-Factory B2B Solutions
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
           <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">MOQ 200 Pcs</span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">7-Day Samples</span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">70% North America</span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-full">Free 3D Mockup</span>
        </div>
      </section>

      {/* Free 3D Mockup CTA Section */}
      <section className="bg-amber-500 py-12 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to See Your Brand on Our Caps?
            </h2>
            <p className="text-white font-bold mt-2 text-lg">
              Get a professional 3D digital mockup within 24 hours — Free of charge.
            </p>
          </div>
          <a 
            href="#inquiry" 
            className="bg-black text-white font-bold px-10 py-5 rounded-full hover:bg-gray-900 transition flex items-center gap-3 text-lg shadow-xl shadow-black/20"
          >
            <Cpu size={24} /> Start Free 3D Design
          </a>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">20+ Years</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Production Experience</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">200 Pcs</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">MOQ Starting from 200 Pcs</p>
          </div>
          <div className="p-4 flex flex-col items-center justify-center">
            <img src="https://sc02.alicdn.com/kf/S550f2425a6104c99a815a513ca0c5e7fG.png" alt="SGS Verified" className="h-12 w-auto mb-2 opacity-80" />
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">SGS Verified Factory</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">24 Hour</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Free 3D Mockup Output</p>
          </div>
        </div>
      </section>

      {/* Global Markets & Compliance */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition duration-500">
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-3">Compliance Standards</span>
              <div className="flex items-center gap-8">
                 <span className="font-black text-xl italic text-gray-400">REACH</span>
                 <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transform -rotate-2">
                    <span className="font-black text-2xl italic">CE</span>
                    <span className="text-[8px] font-bold uppercase leading-tight">Certified<br/>Product</span>
                 </div>
                 <span className="font-black text-xl italic text-gray-400">RoHS</span>
              </div>
           </div>
           <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-3">Main Markets</span>
              <div className="flex gap-8">
                 <span className="font-bold text-sm tracking-tight">NORTH AMERICA (70%)</span>
                 <span className="font-bold text-sm tracking-tight">WESTERN EUROPE (25%)</span>
              </div>
           </div>
        </div>
      </section>

      {/* Inside Our Factory / live update section */}
      <section id="factory" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Unmatched Quality Control</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-6">See Your Cap Being Made — Live.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Unlike general agents, Baoding Junyang runs its own specialized production lines. We employ over 200 skilled tailors and run 100+ state-of-the-art Japanese Barudan embroidery machines.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <strong>Our Transparency Policy:</strong> We send you direct photos and video updates (fabric cutting, embroidery precision, sewing structure, final ironing) throughout your production. You are virtually inside the factory floor.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">AQL 2.5 Standard</h4>
                    <p className="text-xs text-gray-500">Rigid piece-by-piece inspection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">7-Day Samples</h4>
                    <p className="text-xs text-gray-500">Fast physical prototype delivery.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleWhatsApp("factory-section")}
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <Play size={16} /> Request Factory Video Tour
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
                  <img 
                    src="https://images.unsplash.com/photo-1556011504-f58c4033b93f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Baoding Junyang Hat Factory Floor" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white text-black h-16 w-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play size={24} className="ml-1 text-black" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl">
                    <p className="font-bold text-base">Watch Production Reel (2026)</p>
                    <p className="text-xs text-gray-300">Japanese embroidery machines & professional hand-sewing.</p>
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
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">Trusted by Global Brands</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">Why Brands Choose BD Hats</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light mb-16">
            We are the factory behind hundreds of streetwear, corporate, and lifestyle brands worldwide.
          </p>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🏭",
                stat: "300+",
                label: "Brands Served Worldwide",
                desc: "From US streetwear startups to European corporate uniform programs."
              },
              {
                icon: "🧢",
                stat: "5M+",
                label: "Caps Produced Annually",
                desc: "Industrial-scale capacity with consistent premium quality."
              },
              {
                icon: "⭐",
                stat: "98%",
                label: "Client Retention Rate",
                desc: "Our quality and service bring brands back season after season."
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
              <span className="text-sm font-bold">SGS Verified Supplier</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">Alibaba Gold Supplier</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">CE · REACH · RoHS Certified</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-full">
              <span className="text-sm font-bold">AQL 2.5 Quality Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">Premium Hat Categories</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">Our Baseball Cap Series</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">Choose from our pre-developed high-converting base caps or send your own technical package for full customization.</p>
        </div>
        <HatCatalog />
      </section>

      {/* Process / How It Works */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Step-by-step custom build</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2">How We Work with Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">01</span>
              <h3 className="text-lg font-bold mb-3 mt-4">Select Style & Fabric</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Choose structured or unstructured frames, and specify fabrics from heavy cotton to canvas or velvet.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">02</span>
              <h3 className="text-lg font-bold mb-3 mt-4">Get Free 3D Mockup</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Submit your high-resolution logos. Our designers will deliver a 3D digital mockup within 24 hours.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">03</span>
              <h3 className="text-lg font-bold mb-3 mt-4">Sample Approval</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We produce a physical sample and send you detailed videos/photos for final adjustment approval.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative">
              <span className="absolute -top-6 left-8 text-5xl font-black text-gray-800">04</span>
              <h3 className="text-lg font-bold mb-3 mt-4">Bulk & Quality Updates</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We manufacture bulk orders and send regular progress media updates. 100% inspected before shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QC Protocol Section */}
      <section id="qc" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Rigid Quality Assurance</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-8">Our 5-Stage Strict QC Protocol</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">01</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Raw Material Verification</h4>
                    <p className="text-gray-600 text-sm mt-1">Every roll of heavy cotton twill, organic canvas, and embroidery thread is checked for color consistency and tensile strength before cutting.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">02</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Embroidery Precision Check</h4>
                    <p className="text-gray-600 text-sm mt-1">Real-time monitoring of 3D puff embroidery height and stitch density. We immediately reject any piece with frayed edges or misaligned logos.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">03</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Stitching Integrity Audit</h4>
                    <p className="text-gray-600 text-sm mt-1">Focus on crown structure and seam tape. We ensure internal sweatbands are aligned to within 1mm for maximum comfort and durability.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">04</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Final Piece-by-Piece QC</h4>
                    <p className="text-gray-600 text-sm mt-1">Every single cap undergoes a final manual inspection, thread trimming, and high-pressure steam ironing before reaching the packing line.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-10 w-10 shrink-0 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">05</div>
                  <div>
                    <h4 className="font-bold text-lg text-black">Export Packing & Label Audit</h4>
                    <p className="text-gray-600 text-sm mt-1">Final count verification against the packing list and shipping label audit to ensure 100% accuracy in international logistics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Control Inspection" 
                  className="w-full h-auto"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur shadow-lg p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Status</span>
                  </div>
                  <p className="text-black font-bold text-sm">AQL 2.5 Passed</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Common Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about our factory custom process.</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-black uppercase">Request Factory Quote</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">Send us your cap requirements (styles, logos, quantities). Our B2B hat specialists will deliver your quote and design mockup within 12 hours.</p>
          </div>
          <InquiryForm />
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
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. is a premium custom hat factory specializing in OEM/ODM embroidery baseball caps, beanies, and trucker hats since 2014.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#advantages" className="hover:text-white">Advantages</a></li>
                <li><a href="#factory" className="hover:text-white">Our Factory</a></li>
                <li><a href="#catalog" className="hover:text-white">Products</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="#inquiry" className="hover:text-white">Request Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">WhatsApp: +86 15933930830</li>
                <li className="text-gray-400">Email: admin@bdjunyang.com</li>
                <li className="text-gray-400">Office: Baoding, Hebei, China</li>
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

