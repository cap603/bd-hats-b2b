"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useT, useLang } from "../lib/i18n";
import { PRODUCT_CATEGORIES } from "../lib/product-categories";
import { HATS } from "../lib/products";

/**
 * Top-navigation "Products" dropdown — first item in the nav bar.
 *
 * Clean, compact category menu linking directly to category landing pages
 * or catalog anchors, with style counts.
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
        className={`absolute left-0 top-full pt-3 z-50 w-64 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
        } transition`}
      >
        <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2">
          <p className="px-3 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
            {t("categories")}
          </p>

          <div className="space-y-0.5">
            {PRODUCT_CATEGORIES.map((cat) => {
              const products = HATS.filter((h) =>
                (cat.categories as readonly string[]).includes(h.category ?? "")
              );

              return (
                <Link
                  key={cat.href}
                  href={`/${lang}${cat.href}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition group/item"
                >
                  <span className="text-sm font-bold text-gray-800 group-hover/item:text-black">
                    {cat.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                    {t("stylesCount", { count: products.length })}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-gray-100 mt-2 pt-2 px-3 pb-1">
            <Link
              href={`/${lang}/#catalog`}
              onClick={() => setOpen(false)}
              className="block text-xs font-bold text-gray-500 hover:text-black transition py-1"
            >
              {t("viewAllProducts")} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
