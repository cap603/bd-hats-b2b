"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Metadata } from "next";
import { HATS, Product } from "../../lib/products";
import { 
  MessageCircle, ArrowLeft, ShieldCheck, Zap, Globe, Cpu, 
  CheckCircle2, ChevronDown, ChevronUp, Image as ImageIcon, 
  Settings, HelpCircle, Package, Truck
} from "lucide-react";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const hat = HATS.find(h => String(h.id) === String(params.id));
  if (!hat) return { title: "Product Not Found | BD Hats" };
  
  return {
    title: `${hat.name} | Custom Wholesale | BD Hats Factory`,
    description: `${hat.desc} Price: ${hat.price} FOB. MOQ ${hat.moq}pcs. Custom ${hat.specs.material} material with ${hat.specs.logo}. Factory direct from Baoding Junyang.`,
    openGraph: {
      title: `${hat.name} | BD Hats Factory`,
      description: `Custom wholesale ${hat.name}. ${hat.price} FOB · MOQ ${hat.moq}pcs · Free 3D Mockup`,
      images: [hat.img],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${hat.name} | BD Hats`,
      description: `Factory direct ${hat.name}. ${hat.price} FOB.`,
      images: [hat.img],
    },
  };
}

export default function ProductDetail() {
  const { id } = useParams();
  const hat = HATS.find(h => String(h.id) === String(id));
  const [activeTab, setActiveTab] = useState("specs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!hat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-black font-bold underline">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hi Baoding Junyang! I'm interested in the "${hat.name}" (Product ID: ${hat.id}). Can you provide a detailed quote and information about custom mockups?`);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": hat.name,
    "description": hat.fullDesc,
    "image": hat.img,
    "sku": String(hat.id),
    "mpn": String(hat.id),
    "brand": {
      "@type": "Brand",
      "name": "Baoding Junyang"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Baoding Junyang Hat Manufacturing Co., Ltd."
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": hat.price.split("-")[0].replace("$", "").trim(),
      "highPrice": hat.price.split("-")[1]?.replace("$", "").trim() || hat.price.split("-")[0].replace("$", "").trim(),
      "priceCurrency": "USD",
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "material": hat.specs.material,
    "category": hat.category || "Baseball Caps"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://b2b.bdjunyang.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": hat.category || "Products",
        "item": "https://b2b.bdjunyang.com/#catalog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": hat.name,
        "item": `https://b2b.bdjunyang.com/product/${hat.id}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-black font-bold hover:text-gray-600 transition">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">Back to Catalog</span>
        </Link>
        <img 
          src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
          alt="JUNYANG" 
          className="h-8 w-auto"
        />
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 transition"
        >
          <MessageCircle size={16} /> WhatsApp Quote
        </button>
      </nav>

      <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Images & Quality Badges */}
          <div className="space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl relative group">
              <img src={hat.img} alt={hat.name} className="w-full h-auto object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-6 left-6 flex gap-2">
                 <span className="bg-black/80 backdrop-blur text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full">Top Seller</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { icon: ShieldCheck, label: "AQL 2.5", sub: "QC Standard" },
                 { icon: Zap, label: "15 Days", sub: "Production" },
                 { icon: Package, label: "200 Pcs", sub: "MOQ" },
                 { icon: Truck, label: "Global", sub: "Express Air" }
               ].map((item, i) => (
                 <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                    <item.icon className="text-black mb-2" size={24} />
                    <span className="text-xs font-black text-black leading-none mb-1">{item.label}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.sub}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Meta & Tabs */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="text-yellow-600 text-xs font-black uppercase tracking-widest mb-2 block">{hat.category || "Premium Headwear"}</span>
              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">{hat.name}</h1>
              <div className="flex items-baseline gap-3 mb-6">
                 <span className="text-3xl font-black text-black">{hat.price}</span>
                 <span className="text-gray-400 font-bold">/ Unit (FOB)</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{hat.fullDesc}</p>
            </div>

            {/* Tab Controls */}
            <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
              {[
                { id: "specs", label: "Specifications", icon: Cpu },
                { id: "custom", label: "Customization", icon: Settings },
                { id: "faq", label: "Product FAQ", icon: HelpCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${
                    activeTab === tab.id ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content: Specifications */}
            {activeTab === "specs" && (
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {Object.entries(hat.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500 font-medium capitalize">{key}</span>
                      <span className="text-black font-bold text-right">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">MOQ</span>
                    <span className="text-black font-bold">{hat.moq} Pcs</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: Customization */}
            {activeTab === "custom" && (
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-in fade-in duration-500">
                <h4 className="font-black text-black mb-6 uppercase tracking-wider">{hat.customization?.title || "OEM/ODM Capabilities"}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {(hat.customization?.options || [
                    "Full color custom logo embroidery (3D/Flat/Chenille)",
                    "Internal custom woven labels and care tags",
                    "Custom printed seam tape with your brand name",
                    "Custom hangtags, stickers, and box packaging",
                    "Bespoke fabrics and Pantone-matched materials"
                  ]).map((opt, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                      <span className="text-sm font-bold text-gray-800">{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content: FAQ */}
            {activeTab === "faq" && (
              <div className="space-y-3 animate-in fade-in duration-500">
                {(hat.faqs || [
                  { q: "Can I get a sample before bulk production?", a: "Yes, we produce a physical sample for your final approval. Lead time is 7 days." },
                  { q: "Is the 3D digital mockup free?", a: "Yes, our design team provides a professional 3D mockup within 12 hours of receiving your logo." },
                  { q: "Do you ship worldwide?", a: "We ship to over 50 countries via DHL/FedEx/UPS with door-to-door delivery in 5-8 business days." }
                ]).map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-black text-black text-sm uppercase tracking-tight">{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl transition shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} /> Get Factory Quote
              </button>
              <div className="grid grid-cols-2 gap-4">
                 <Link href="/#inquiry" className="bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition flex items-center justify-center text-sm uppercase tracking-widest">
                   Free 3D Mockup
                 </Link>
                 <Link href="/#inquiry" className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-4 rounded-xl transition flex items-center justify-center text-sm uppercase tracking-widest">
                   Order Sample
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Compliance & Trust Bar */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted Global Manufacturing Standards</p>
           <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
              <span className="font-black text-2xl italic">REACH</span>
              <span className="font-black text-2xl italic">ISO 9001</span>
              <div className="flex items-center gap-2 border-2 border-black px-4 py-1.5 rounded-lg">
                 <span className="font-black text-2xl italic">CE</span>
              </div>
              <span className="font-black text-2xl italic">SGS VERIFIED</span>
              <span className="font-black text-2xl italic">RoHS</span>
           </div>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="bg-black py-16 text-center">
         <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
           <img 
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
              alt="JUNYANG" 
              className="h-12 w-auto mb-8 opacity-50"
            />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              © 2026 Baoding Junyang Hat Manufacturing Co., Ltd.
            </p>
         </div>
      </footer>
    </main>
  );
}
