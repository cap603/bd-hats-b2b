"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useT, useLang } from "../lib/i18n";
import { MessageCircle, ArrowRight, ArrowUpDown } from "lucide-react";
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

function getProductSku(id: string, index: number): string {
  const map: Record<string, string> = {
    "two-tone-3d-embroidery-a-frame-cap": "JY-101",
    "custom-3d-embroidered-5-panel-gorras": "JY-102",
    "structured-multi-color-baseball-cap": "JY-103",
    "ladies-plain-blank-cotton-sports-cap": "JY-104",
    "personalised-two-tone-a-frame-cap": "JY-105",
    "breathable-custom-embroidered-6-panel": "JY-106",
    "vintage-acid-wash-6-panel-dad-hat": "JY-201",
    "custom-foam-front-5-panel-trucker-hat": "JY-112",
    "cotton-front-5-panel-mesh-trucker-cap": "JY-113",
    "curved-brim-6-panel-mesh-trucker-cap": "JY-114",
    "vintage-flat-brim-snapback-cap": "JY-301",
    "waterproof-nylon-large-brim-bucket-hat": "JY-401",
    "outdoor-performance-5-panel-cap": "JY-501",
    "custom-embroidery-knitted-beanie": "JY-601",
    "retro-washed-knitted-beanie": "JY-602",
    "silk-lined-pompom-knitted-beanie": "JY-603",
    "pompom-fur-ball-knitted-beanie": "JY-604",
    "multi-colour-satin-lined-winter-beanie": "JY-605",
  };
  return map[id] || `JY-${100 + index}`;
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

  const handleWhatsAppClick = (e: React.MouseEvent, hatName: string, sku: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: `catalog-${sku}`,
      });
    }
    const text = encodeURIComponent(
      `Hi Baoding Junyang! I would like to get a wholesale quote and spec sheet for [${sku}] ${hatName}. MOQ 200pcs.`
    );
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  const CATEGORIES = ["All", "Baseball Caps", "Vintage Series", "Sports & Active", "Trucker Hats", "Snapback Caps", "Bucket Hats", "Beanies"];

  return (
    <div>
      {/* Category Filter Bar (Modern B2B Clean Pills — Horizontal Swipe on Mobile) */}
      <div className="flex items-center sm:justify-center gap-2 md:gap-2.5 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-2 px-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
              activeCategory === cat
                ? "bg-slate-900 text-white shadow-md font-black"
                : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 shadow-xs"
            }`}
          >
            {t(CATEGORY_MAP[cat])}
            {cat !== "All" && (
              <span className={`ml-1.5 text-[10px] font-semibold ${activeCategory === cat ? "text-slate-300" : "text-slate-400"}`}>
                ({HATS.filter((h) => h.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Secondary Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-slate-200">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1 shrink-0">
            {t("panelLabel")}:
          </span>
          {PANEL_TYPES.map((panel) => (
            <button
              key={panel}
              onClick={() => setActivePanel(panel)}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                activePanel === panel
                  ? "bg-slate-800 text-white font-bold"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {panel === "All" ? t("panelAll") : panel}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <ArrowUpDown size={14} className="text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none focus:border-slate-500 transition cursor-pointer appearance-none pr-7 shadow-xs"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 8px center",
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-slate-800">
                {t(opt.key)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid — Mobile 2-column, Desktop 4-column fluid layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-7">
        {filteredHats.map((hat, idx) => {
          const sku = getProductSku(hat.id, idx);
          return (
            <div
              key={hat.id}
              className="group flex flex-col justify-between bg-white border border-slate-200 hover:border-slate-400 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area on neutral light technical backdrop */}
              <div className="relative aspect-square bg-slate-50 p-2 sm:p-4 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <Link href={`/${lang}/product/${hat.id}`} className="block w-full h-full">
                  <img
                    src={hat.img}
                    alt={`${hat.name} Wholesale Manufacturer`}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    loading="lazy"
                    width="640"
                    height="640"
                  />
                </Link>

                {/* SKU Badge & Product Badge */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5">
                  <span className="bg-slate-900 text-white text-[9px] sm:text-[10px] font-black tracking-wider px-1.5 sm:px-2 py-0.5 rounded shadow-xs">
                    {sku}
                  </span>
                  {hat.badge && (
                    <span
                      className={`text-[8px] sm:text-[9px] font-black uppercase px-1.5 sm:px-2 py-0.5 rounded shadow-xs hidden xs:inline-block ${
                        hat.badge === "bestseller"
                          ? "bg-amber-400 text-slate-950 font-black"
                          : hat.badge === "trending"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {hat.badge === "bestseller"
                        ? t("badgeBestSeller")
                        : hat.badge === "trending"
                        ? t("badgeTrending")
                        : t("badgeNew")}
                    </span>
                  )}
                </div>

                {/* MOQ Tag */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <span className="bg-white/95 backdrop-blur border border-slate-200 text-slate-700 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded shadow-xs">
                    MOQ {hat.moq}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Area */}
              <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Category & Panels Header */}
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 sm:mb-1">
                    <span className="truncate max-w-[90px]">{hat.category || "HEADWEAR"}</span>
                    <span>{hat.specs.panels}</span>
                  </div>

                  {/* Product Name */}
                  <Link href={`/${lang}/product/${hat.id}`}>
                    <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug mb-0.5 sm:mb-1">
                      {hat.name}
                    </h3>
                  </Link>

                  {/* Fabric Description */}
                  <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1 mb-2 sm:mb-3.5">
                    {hat.specs.material} · {hat.specs.style}
                  </p>

                  {/* 3-Column Industrial Technical Spec Matrix */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 py-1.5 sm:py-2 px-1.5 sm:px-2.5 mb-2.5 sm:mb-4 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 text-left">
                    <div>
                      <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        FLOOR
                      </span>
                      <span className="text-[10px] sm:text-xs font-black text-emerald-600 truncate block">
                        $3.50
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        PROFILE
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 truncate block">
                        {hat.specs.panels}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        CUSTOM
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-800 truncate block">
                        48+ Col
                      </span>
                    </div>
                  </div>
                </div>

                {/* B2B Action Buttons */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                  <button
                    onClick={(e) => handleWhatsAppClick(e, hat.name, sku)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-2 sm:py-2.5 px-1.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    <MessageCircle size={12} className="shrink-0" />
                    <span>Quote</span>
                  </button>
                  <Link
                    href={`/${lang}/product/${hat.id}`}
                    className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2 sm:py-2.5 px-1.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition flex items-center justify-center gap-1 text-center"
                  >
                    <span>Specs</span>
                    <ArrowRight size={12} className="shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Showing counter / Empty state */}
      <div className="text-center mt-12">
        {filteredHats.length === 0 ? (
          <p className="text-slate-500 text-sm">
            {t("noResults")}{" "}
            <button
              onClick={() => { setActiveCategory("All"); setActivePanel("All"); setSortBy("default"); }}
              className="text-slate-900 font-bold underline ml-1 cursor-pointer"
            >
              {t("resetFilters")}
            </button>
          </p>
        ) : (
          <p className="text-slate-500 text-xs font-medium">
            {t("showing", { shown: filteredHats.length, total: HATS.length })}
          </p>
        )}
      </div>
    </div>
  );
}
