"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { HATS } from "../lib/products";

const CATEGORIES = ["All", "Baseball Caps", "Vintage Series", "Sports & Active", "Footwear"];

export function HatCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredHats = activeCategory === "All"
    ? HATS
    : HATS.filter(h => h.category === activeCategory);

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
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? "bg-black text-white shadow-lg"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 text-[10px] opacity-60">
                ({HATS.filter(h => h.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHats.map((hat) => (
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
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                {hat.category && (
                  <span className="bg-black/70 backdrop-blur text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wide">
                    {hat.category}
                  </span>
                )}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">MOQ: {hat.moq} Pcs</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600">Factory Direct</span>
                </div>
                <h3 className="text-base font-bold text-black mb-2 group-hover:text-yellow-600 transition line-clamp-2 leading-snug">{hat.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{hat.desc}</p>
              </div>
              <div>
                <p className="text-base font-black text-black mb-3">FOB {hat.price.split("-")[0]}</p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleWhatsAppClick(e, hat.name)}
                    className="flex-1 bg-green-500 text-white py-2.5 px-3 font-semibold text-xs rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={14} /> Quote
                  </button>
                  <div className="bg-black text-white py-2.5 px-3 font-semibold text-xs rounded-lg group-hover:bg-yellow-600 transition flex items-center justify-center">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show count / empty state */}
      <div className="text-center mt-8">
        {filteredHats.length === 0 ? (
          <p className="text-gray-400 text-sm">No products found in this category. <button onClick={() => setActiveCategory("All")} className="text-black font-bold underline">View all</button></p>
        ) : (
          <p className="text-gray-400 text-xs font-medium">
            Showing {filteredHats.length} of {HATS.length} products
          </p>
        )}
      </div>
    </div>
  );
}
