"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useT } from "../lib/i18n";
import { MessageCircle, ArrowRight, ArrowUpDown } from "lucide-react";
import { HATS } from "../lib/products";

const CATEGORY_KEYS = ["filterAll", "filterBaseballCaps", "filterVintage", "filterSports"] as const;
const CATEGORY_MAP: Record<string, string> = {
  "All": "filterAll",
  "Baseball Caps": "filterBaseballCaps",
  "Vintage Series": "filterVintage",
  "Sports & Active": "filterSports",
};
const PANEL_TYPES = ["All", "5-Panel", "6-Panel"];
const SORT_OPTIONS = [
  { value: "default", key: "sortDefault" },
  { value: "price-asc", key: "sortPriceAsc" },
  { value: "price-desc", key: "sortPriceDesc" },
] as const;

type SortBy = (typeof SORT_OPTIONS)[number]["value"];

function getMinPrice(priceStr: string): number {
  const first = priceStr.split("-")[0].replace("$", "").trim();
  return parseFloat(first) || 0;
}

export function HatCatalog() {
  const t = useT("catalog");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePanel, setActivePanel] = useState("All");
  const [sortBy, setSortBy] = useState<SortBy>("default");

  const filteredHats = useMemo(() => {
    let result = activeCategory === "All"
      ? [...HATS]
      : HATS.filter(h => h.category === activeCategory);

    if (activePanel !== "All") {
      result = result.filter(h => h.specs.panels.includes(activePanel));
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => getMinPrice(a.price) - getMinPrice(b.price));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => getMinPrice(b.price) - getMinPrice(a.price));
    }

    return result;
  }, [activeCategory, activePanel, sortBy]);

  const handleWhatsAppClick = (e: React.MouseEvent, hatName: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", { event_category: "engagement", event_label: `product-${hatName}` });
    }
    const text = encodeURIComponent(`Hi Baoding Junyang! I'm interested in the "${hatName}". Can I get a quote & free 3D mockup?`);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  const CATEGORIES = ["All", "Baseball Caps", "Vintage Series", "Sports & Active"];

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
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
            {t(CATEGORY_MAP[cat])}
            {cat !== "All" && (
              <span className="ml-1.5 text-[10px] opacity-60">
                ({HATS.filter(h => h.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Secondary Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">{t("panelLabel")}</span>
          {PANEL_TYPES.map((panel) => (
            <button
              key={panel}
              onClick={() => setActivePanel(panel)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                activePanel === panel
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {panel === "All" ? t("panelAll") : panel}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ArrowUpDown size={14} className="text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-black transition cursor-pointer appearance-none pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 8px center",
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{t(opt.key)}</option>
            ))}
          </select>
        </div>
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
                width="640"
                height="640"
              />
              <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                {hat.category && (
                  <span className="bg-black/70 backdrop-blur text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wide">
                    {hat.category}
                  </span>
                )}
                <span className="bg-white/80 backdrop-blur text-gray-700 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wide">
                  {hat.specs.panels}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  {t("viewDetails")} <ArrowRight size={16} />
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t("moq", { count: hat.moq })}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600">{t("factoryDirect")}</span>
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
                    <MessageCircle size={14} /> {t("quote")}
                  </button>
                  <div className="bg-black text-white py-2.5 px-3 font-semibold text-xs rounded-lg group-hover:bg-yellow-600 transition flex items-center justify-center">
                    {t("details")}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        {filteredHats.length === 0 ? (
          <p className="text-gray-400 text-sm">
            {t("noResults")}{" "}
            <button
              onClick={() => { setActiveCategory("All"); setActivePanel("All"); setSortBy("default"); }}
              className="text-black font-bold underline"
            >
              {t("resetFilters")}
            </button>
          </p>
        ) : (
          <p className="text-gray-400 text-xs font-medium">
            {t("showing", { shown: filteredHats.length, total: HATS.length })}
          </p>
        )}
      </div>
    </div>
  );
}
