"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HATS } from "../../lib/products";
import { MessageCircle, ArrowLeft, ShieldCheck, Zap, Globe, Cpu, CheckCircle2 } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const hat = HATS.find(h => h.id === Number(id));

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

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-black font-bold hover:text-gray-600 transition">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">Back to Factory Catalog</span>
        </Link>
        <img 
          src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" 
          alt="JUNYANG" 
          className="h-8 w-auto"
        />
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"
        >
          <MessageCircle size={16} /> WhatsApp
        </button>
      </nav>

      <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Image */}
          <div className="space-y-6">
            <div className="rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl">
              <img src={hat.img} alt={hat.name} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <ShieldCheck className="text-black mb-2" size={32} />
                  <span className="text-xs font-black uppercase text-gray-400 mb-1">Quality Standard</span>
                  <span className="text-sm font-bold">AQL 2.5 Inspect</span>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <Zap className="text-black mb-2" size={32} />
                  <span className="text-xs font-black uppercase text-gray-400 mb-1">Production Time</span>
                  <span className="text-sm font-bold">15-20 Days Bulk</span>
               </div>
            </div>
          </div>

          {/* Right: Product Content */}
          <div className="flex flex-col h-full">
            <span className="bg-black text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest w-fit mb-4">
              Factory ID: JY-#{hat.id.toString().padStart(4, '0')}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
              {hat.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
               <span className="text-3xl font-black text-black">{hat.price}</span>
               <span className="text-gray-400 font-bold">/ Unit (Estimated)</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {hat.fullDesc}
            </p>

            {/* Tech Specs Table */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
               <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-black flex items-center gap-2">
                 <Cpu size={20} /> Technical Specifications
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Material</span>
                    <span className="text-black font-bold">{hat.specs.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Cap Profile</span>
                    <span className="text-black font-bold">{hat.specs.style}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Logo Application</span>
                    <span className="text-black font-bold">{hat.specs.logo}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Panels</span>
                    <span className="text-black font-bold">{hat.specs.panels}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Closure System</span>
                    <span className="text-black font-bold">{hat.specs.closure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Minimum Order (MOQ)</span>
                    <span className="text-black font-bold">{hat.moq} Pcs</span>
                  </div>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-auto space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl transition shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} /> Get Wholesale Quote
              </button>
              <div className="grid grid-cols-2 gap-4">
                 <Link href="/#inquiry" className="bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition flex items-center justify-center text-sm">
                   Free 3D Mockup
                 </Link>
                 <Link href="/#inquiry" className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-4 rounded-xl transition flex items-center justify-center text-sm">
                   Order Physical Sample
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-black mb-1">Factory Direct Guarantee</h4>
                <p className="text-sm text-gray-500">No middlemen. You communicate directly with our Baoding production team.</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-black mb-1">Global Shipping</h4>
                <p className="text-sm text-gray-500">Rapid air freight to US, Europe, and UAE within 5-8 business days.</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-black mb-1">Full IP Protection</h4>
                <p className="text-sm text-gray-500">Your designs and logos are safe with us. We sign NDA and protect your assets.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="bg-black py-12 text-center">
         <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
           © 2026 Baoding Junyang Hat Manufacturing Co., Ltd.
         </p>
      </footer>
    </main>
  );
}
