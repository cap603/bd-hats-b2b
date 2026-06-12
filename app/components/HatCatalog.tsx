import { ShoppingBag, MessageCircle, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

const HATS = [
  { 
    id: 1, 
    name: "Two-Tone 3D Embroidery A-Frame Cap", 
    desc: "Structured 5-panel design with high-density 3D embroidery. Contrast visor and crown for a striking street aesthetic. Durable and comfortable. Featuring high-build embroidery.",
    price: "Factory Price: $2.90 - $3.90 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png" 
  },
  { 
    id: 2, 
    name: "Gold Edition 3D Script 5-Panel", 
    desc: "Luxury gold script embroidery on premium cream cotton. Part of our exclusive high-profile designer series. Perfect for premium fashion drops.",
    price: "Factory Price: $2.80 - $3.90 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/Hfcc96f3c12f44b44b219dd0f120e1a6dy.png" 
  },
  { 
    id: 3, 
    name: "Vintage Washed Cotton Dad Hat Series", 
    desc: "100% garment-washed cotton with customized 3D embroidery logos. Antique brass buckle closure for a classic premium feel. Authentic vintage look.",
    price: "Factory Price: $3.20 - $4.50 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/H47594c6deca245f0829415dd9ab0201cb.jpg" 
  },
  { 
    id: 4, 
    name: "Custom Fashion Mesh Trucker Hat", 
    desc: "Premium foam front with high-breathability mesh back. Features custom script embroidery and multi-color racing stripes on the side for an active look.",
    price: "Factory Price: $1.90 - $2.90 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/H90c2155da629468fa925eb0464b06457e.jpg" 
  },
  { 
    id: 5, 
    name: "Outdoor Tech Wing Series Cap", 
    desc: "Vibrant royal blue cotton with 3D puff embroidery and iconic wing side patch. Designed for energetic lifestyle and high-end activewear brands.",
    price: "Factory Price: $2.80 - $3.90 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/He08acde3cf354ef99014af1a5b4f5c2bf.png" 
  },
  { 
    id: 6, 
    name: "Premium Multi-Tone 5-Panel (BQM1546)", 
    desc: "A-frame high-profile crown with premium cotton twill. Featuring outline embroidery and multi-tone visors. The industry standard for custom caps.",
    price: "Factory Price: $2.80 - $3.90 (MOQ: 50)", 
    img: "https://sc01.alicdn.com/kf/H1edd649a1887488f91f1ed75174dce806.png" 
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
