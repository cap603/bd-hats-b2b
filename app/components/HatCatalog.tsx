"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useT, useLang } from "../lib/i18n";
import { ArrowRight, ArrowUpDown } from "lucide-react";
import { HATS } from "../lib/products";

const CATEGORY_KEYS = [
  "filterAll",
  "filterBaseballCaps",
  "filterVintage",
  "filterSports",
  "filterTruckerHats",
  "filterSnapbacks",
  "filterBucketHats",
  "filterBeanies",
] as const;

const CATEGORY_MAP: Record<string, string> = {
  "All": "filterAll",
  "Baseball Caps": "filterBaseballCaps",
  "Vintage Series": "filterVintage",
  "Sports & Active": "filterSports",
  "Trucker Hats": "filterTruckerHats",
  "Snapback Caps": "filterSnapbacks",
  "Bucket Hats": "filterBucketHats",
  "Beanies": "filterBeanies",
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
  const lang = useLang();
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

  const CATEGORIES = ["All", "Baseball Caps", "Vintage Series", "Sports & Active", "Trucker Hats", "Snapback Caps", "Bucket Hats", "Beanies"];

  return (
    <div>
      {/* Category Filter Bar (Luxopack Dark Gold Pills) */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 font-black"
                : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {t(CATEGORY_MAP[cat])}
            {cat !== "All" && (
              <span className="ml-1.5 text-[10px] opacity-75">
                ({HATS.filter(h => h.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Secondary Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-1">{t("panelLabel")}:</span>
          {PANEL_TYPES.map((panel) => (
            <button
              key={panel}
              onClick={() => setActivePanel(panel)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                activePanel === panel
                  ? "bg-white text-black font-bold"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
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
            className="text-xs font-bold text-gray-300 bg-[#141822] border border-white/15 rounded-xl px-3.5 py-2 outline-none focus:border-yellow-400 transition cursor-pointer appearance-none pr-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#141822] text-gray-200">
                {t(opt.key)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid — 4 per row, fluidly adapting to page width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {filteredHats.map((hat) => (
          <Link
            href={`/${lang}/product/${hat.id}`}
            key={hat.id}
            className="group flex flex-col justify-between bg-[#141822] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Card Image Area with gentle inner padding matching Luxopack */}
            <div className="p-3 bg-[#0d1017]">
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-900">
                <img
                  src={hat.img}
                  alt={`${hat.name} Wholesale Manufacturer`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="640"
                  height="640"
                />
                {hat.badge && (
                  <span className={`absolute top-2.5 left-2.5 text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-lg ${
                    hat.badge === "bestseller"
                      ? "bg-yellow-400 text-black"
                      : hat.badge === "trending"
                      ? "bg-orange-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}>
                    {hat.badge === "bestseller" ? t("badgeBestSeller") : hat.badge === "trending" ? t("badgeTrending") : t("badgeNew")}
                  </span>
                )}
              </div>
            </div>

            {/* Card Content (Luxopack Typography & Specs) */}
            <div className="p-5 flex flex-col flex-grow justify-between text-left">
              <div>
                {/* Category Pill with decorative glyph */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest truncate">
                    ✦ {hat.category || "CUSTOM CAP"}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    {hat.specs.panels}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-1 leading-snug">
                  {hat.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2rem]">
                  {hat.desc}
                </p>

                {/* Spec Grid (3 columns matching Luxopack: MOQ | MATERIAL | STRUCTURE) */}
                <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-white/10 text-left">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">MOQ</span>
                    <span className="text-xs font-semibold text-gray-200">{hat.moq} pcs</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-0.5 truncate">FABRIC</span>
                    <span className="text-xs font-semibold text-gray-200 truncate block" title={hat.specs.material}>
                      {hat.specs.material.replace(/Twilling|Twill/i, "Twill").split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">PROFILE</span>
                    <span className="text-xs font-semibold text-gray-200 truncate block">{hat.specs.panels}</span>
                  </div>
                </div>
              </div>

              {/* Luxopack-style Action Button */}
              <div className="pt-1">
                <div className="w-full py-2.5 px-4 rounded-xl border border-white/20 text-white font-semibold text-xs md:text-sm text-center group-hover:border-yellow-400 group-hover:text-yellow-400 group-hover:bg-yellow-400/5 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>→ View Details</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Showing counter / Empty state */}
      <div className="text-center mt-12">
        {filteredHats.length === 0 ? (
          <p className="text-gray-400 text-sm">
            {t("noResults")}{" "}
            <button
              onClick={() => { setActiveCategory("All"); setActivePanel("All"); setSortBy("default"); }}
              className="text-yellow-400 font-bold underline ml-1"
            >
              {t("resetFilters")}
            </button>
          </p>
        ) : (
          <p className="text-gray-500 text-xs font-medium">
            {t("showing", { shown: filteredHats.length, total: HATS.length })}
          </p>
        )}
      </div>
    </div>
  );
}
