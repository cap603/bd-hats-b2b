import { ShoppingBag, MessageCircle, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

const HATS = [
  { 
    id: 1, 
    name: "Classic 6-Panel Structured Cap", 
    desc: "Our best-selling profile. Structured heavy cotton twill with durable buckram backing. Perfect for high-end streetwear and premium corporate branding.",
    price: "Factory Price: $1.20 - $2.50", 
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "Unstructured Vintage Dad Hat", 
    desc: "100% garment-washed cotton for a soft, worn-in feel. Low-profile, unstructured crown with an adjustable antique brass buckle closure.",
    price: "Factory Price: $0.95 - $1.80", 
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf027?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "Premium 3D Puff Embroidery Cap", 
    desc: "Make your logo stand out. Heavyweight acrylic-wool blend with high-build 3D puff embroidery. Outstanding durability and luxury touch.",
    price: "Factory Price: $1.50 - $2.90", 
    img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Flat-Brim Streetwear Snapback", 
    desc: "The timeless urban icon. Structured 6-panel with a stiff flat visor, green undervisor, and classic adjustable plastic snapback closure.",
    price: "Factory Price: $1.30 - $2.60", 
    img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "Classic Mesh Trucker Hat", 
    desc: "Premium polyester foam front with high-density polyester mesh back. Highly breathable, perfect for summer promotional giveaways and outdoor brands.",
    price: "Factory Price: $0.85 - $1.60", 
    img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "Private Label Customization Finishes", 
    desc: "Go beyond the shell. Customize inside seam tapes with printed brand logos, add woven tags on sweatbands, or laser-engrave metal buckles.",
    price: "Factory Custom Service", 
    img: "https://images.unsplash.com/photo-1556011504-f58c4033b93f?auto=format&fit=crop&q=80&w=800" 
  },
];

export function HatCatalog() {
  const handleWhatsAppClick = (hatName: string) => {
    const text = encodeURIComponent(`Hi Baoding Junyang! I would like to get a quote and free mockup for the "${hatName}".`);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {HATS.map((hat) => (
        <div key={hat.id} className="group flex flex-col justify-between border border-gray-100 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="aspect-square bg-gray-50 relative overflow-hidden">
            <img 
              src={hat.img} 
              alt={`${hat.name} Wholesale Manufacturer`} 
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500" 
            />
          </div>
          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">{hat.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{hat.desc}</p>
            </div>
            <div>
              <p className="text-lg font-bold text-black mb-4">{hat.price}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleWhatsAppClick(hat.name)}
                  className="flex-1 bg-green-500 text-white py-3 px-4 font-semibold text-sm rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> WhatsApp Quote
                </button>
                <a 
                  href="#inquiry" 
                  className="bg-black text-white py-3 px-4 font-semibold text-sm rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
