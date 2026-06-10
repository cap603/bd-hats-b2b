import { HatCatalog } from "./components/HatCatalog";
import { InquiryForm } from "./components/InquiryForm";
import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play } from "lucide-react";

const FAQS = [
  {
    q: "What is your Minimum Order Quantity (MOQ) for custom baseball caps?",
    a: "Our standard MOQ is 100 pieces per style/color. We also accommodate smaller test orders for initial brand startups and custom embroidery trials."
  },
  {
    q: "Can I get a sample before bulk production?",
    a: "Yes, absolutely! We provide physical pre-production samples. We can also provide free 3D digital mockups within 12 hours once you submit your artwork."
  },
  {
    q: "Do you manufacture hats based on custom designs (OEM/ODM)?",
    a: "Yes. Baoding Junyang is a full-service OEM/ODM manufacturer. We can construct caps from your sketches, spec sheets, or reverse-engineer physical original samples."
  },
  {
    q: "What is your standard production lead time?",
    a: "Our sample production takes 7 days. Bulk mass production takes 15-20 days depending on the quantity and complexity. Global shipping via air takes 5-8 days."
  }
];

export default function Home() {
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

  const handleWhatsAppMain = () => {
    const text = encodeURIComponent("Hi Baoding Junyang! I would like to get a catalog and free mockup for custom baseball caps.");
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={handleWhatsAppMain}
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
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-black">SlUNYANG HEADWEAR</span>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none">Baoding Junyang Import & Export</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#advantages" className="hover:text-black transition">Advantages</a>
            <a href="#factory" className="hover:text-black transition">Our Factory</a>
            <a href="#catalog" className="hover:text-black transition">Baseball Caps</a>
            <a href="#inquiry" className="hover:text-black transition">Inquiry</a>
          </nav>
          <button 
            onClick={handleWhatsAppMain}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm flex items-center gap-2 transition"
          >
            <MessageCircle size={16} /> WhatsApp Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm border-b-2 border-yellow-400 pb-1">
            Factory-Direct Baseball Cap Manufacturer in China
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold mt-6 mb-8 tracking-tight leading-tight text-white">
            Custom Premium Baseball Caps with Your Logo
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            High-end 5-Panel & 6-Panel caps. Premium fabrics (heavy cotton twill, organic cotton, corduroy). Standard-setting 3D embroidery & custom branding elements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={handleWhatsAppMain}
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2 text-base shadow-lg shadow-green-500/25"
            >
              <MessageCircle size={20} /> Get Factory Pricing
            </button>
            <a 
              href="#inquiry" 
              className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-base"
            >
              Request Free Samples
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">12+ Years</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Experience (Est. 2014)</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">100 Pcs</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Low MOQ to Start</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">100+</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Japanese Embroidery Machines</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-black text-black mb-1">24 Hour</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Free 3D Mockup Output</p>
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
                onClick={handleWhatsAppMain}
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <Play size={16} /> Request Factory Video Tour
              </button>
            </div>
            {/* Visual Factory Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-gray-900 shadow-2xl group cursor-pointer" onClick={handleWhatsAppMain}>
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-16 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-black">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-24 bg-white px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Request Factory Quote</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">Send us your cap requirements (styles, logos, quantities). Our B2B hat specialists will deliver your quote and design mockup within 12 hours.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-16 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <span className="text-xl font-black tracking-tighter text-white">SlUNYANG HEADWEAR</span>
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Import And Export Trade Co., Ltd. is a premium custom hat manufacturer specializing in OEM/ODM embroidery baseball caps, beanies, and trucker hats since 2014.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#advantages" className="hover:text-white">Advantages</a></li>
                <li><a href="#factory" className="hover:text-white">Our Factory</a></li>
                <li><a href="#catalog" className="hover:text-white">Baseball Caps</a></li>
                <li><a href="#inquiry" className="hover:text-white">Request Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">WhatsApp: +86 15933930830</li>
                <li className="text-gray-400">Email: sales@bdjunyang.com</li>
                <li className="text-gray-400">Office: Baoding, Hebei, China</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Baoding Junyang Import And Export Trade Co., Ltd. All rights reserved.</p>
          <p>Powered by Accio & Vercel. Global B2B Headwear Solutions.</p>
        </div>
      </footer>
    </main>
  );
}
