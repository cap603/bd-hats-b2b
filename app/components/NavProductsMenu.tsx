"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useT, useLang } from "../lib/i18n";
import { PRODUCT_CATEGORIES, PRODUCTS_PER_NAV_CATEGORY } from "../lib/product-categories";
import { HATS } from "../lib/products";

/**
 * Top-navigation "Products" dropdown — first item in the nav bar.
 *
 * Two levels: each category row links to its category landing page (the page
 * that actually ranks for "custom trucker hats" style queries), and the caps in
 * that category are listed underneath so a buyer can reach a specific product
 * in one click without scrolling down to the catalog.
 *
 * Products are derived from products.ts, so adding a cap never means editing
 * this file — it simply appears under its category.
 *
 * Links stay real <a> elements in the initial HTML (only visually collapsed),
 * so crawlers follow them and SEO value is preserved.
 *
 * Opens on hover (desktop) and on click (touch / keyboard).
 */
export function NavProductsMenu({ label = "Products" }: { label?: string }) {
  const lang = useLang();
  const t = useT("nav");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 hover:text-black transition cursor-pointer"
      >
        {label}
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* pt-3 keeps the hover bridge so the panel does not close in the gap */}
      <div
        className={`absolute left-0 top-full pt-3 z-50 w-[24rem] ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
        } transition`}
      >
        <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 max-h-[70vh] overflow-y-auto">
          <p className="px-4 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
            {t("categories")}
          </p>

          {PRODUCT_CATEGORIES.map((cat) => {
            const products = HATS.filter((h) =>
              (cat.categories as readonly string[]).includes(h.category ?? "")
            );
            const shown = products.slice(0, PRODUCTS_PER_NAV_CATEGORY);
            const hiddenCount = products.length - shown.length;

            return (
              <div key={cat.href} className="border-b border-gray-50 last:border-b-0">
                <Link
                  href={`/${lang}${cat.href}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 px-4 pt-3 pb-1 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-bold text-gray-900 group-hover/item:text-black">
                    {cat.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap">
                    {t("stylesCount", { count: products.length })}
                  </span>
                </Link>

                <div className="pb-2">
                  {shown.map((p) => (
                    <Link
                      key={p.id}
                      href={`/${lang}/product/${p.id}`}
                      onClick={() => setOpen(false)}
                      className="block pl-6 pr-4 py-1.5 rounded-lg text-xs text-gray-500 hover:text-black hover:bg-gray-50 transition truncate"
                    >
                      {p.name}
                    </Link>
                  ))}
                  {hiddenCount > 0 && (
                    <Link
                      href={`/${lang}${cat.href}`}
                      onClick={() => setOpen(false)}
                      className="block pl-6 pr-4 py-1.5 text-xs font-bold text-gray-500 hover:text-black transition"
                    >
                      {t("viewAllCount", { count: products.length })}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

          <div className="border-t border-gray-100 mt-1 pt-2 px-4 pb-1">
            <Link
              href={`/${lang}/#catalog`}
              onClick={() => setOpen(false)}
              className="text-xs font-bold text-gray-500 hover:text-black transition"
            >
              {t("viewAllProducts")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
