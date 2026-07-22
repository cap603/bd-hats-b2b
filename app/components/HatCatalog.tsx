import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { HATS } from "../lib/products";

export function HatCatalog() {
  const handleWhatsAppClick = (e: React.MouseEvent, hatName: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", { event_category: "engagement", event_label: `product-${hatName}` });
    }
    const text = encodeURIComponent(`Hi Baoding Junyang! I'm interested in the "${hatName}". Can I get a quote & free 3D mockup?`);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {HATS.map((hat) => (
        <Link 
          href={`/product/${hat.id}`}
          key={hat.id} 
          className="group flex flex-col justify-between border border-gray-100 bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div className="aspect-square bg-gray-50 relative overflow-hidden">
            <img 
              src={hat.img} 
              alt={`${hat.name} Wholesale Manufacturer`} 
              className="object-cover w-full h-full group-hover:scale-110 transition duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
               <span className="bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  View Details <ArrowRight size={16} />
               </span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">MOQ: {hat.moq} Pcs</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600">Factory Direct</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition">{hat.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{hat.desc}</p>
            </div>
            <div>
              <p className="text-lg font-black text-black mb-4">Starting at {hat.price.split('-')[0]}</p>
              <div className="flex gap-2">
                <button 
                  onClick={(e) => handleWhatsAppClick(e, hat.name)}
                  className="flex-1 bg-green-500 text-white py-3 px-4 font-semibold text-sm rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Quote
                </button>
                <div className="bg-black text-white py-3 px-4 font-semibold text-sm rounded-lg group-hover:bg-yellow-600 transition flex items-center justify-center">
                  Details
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
