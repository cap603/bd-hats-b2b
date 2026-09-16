"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "../lib/i18n";
import { PRODUCT_CATEGORIES } from "../lib/product-categories";

/**
 * Top-navigation "Products" dropdown — first item in the nav bar.
 *
 * Lists the headwear categories buyers actually search for. Categories are
 * defined once in app/lib/product-categories.ts; adding an entry there is all
 * that is needed to surface a new product line in the menu.
 *
 * Links stay real <a> elements in the initial HTML (only visually collapsed),
 * so crawlers follow them and SEO value is preserved.
 *
 * Opens on hover (desktop) and on click (touch / keyboard).
 */
export function NavProductsMenu({ label = "Products" }: { label?: string }) {
  const lang = useLang();
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
        className={`absolute left-0 top-full pt-3 z-50 w-[22rem] ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
        } transition`}
      >
        <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2">
          <p className="px-4 pt-2 pb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
            Cap categories
          </p>
          {PRODUCT_CATEGORIES.map((cat) => {
            // "#catalog" stays an on-page anchor; "/slug" becomes a real route.
            const href = cat.href.startsWith("#") ? `/${lang}${cat.href}` : `/${lang}${cat.href}`;
            return (
              <Link
                key={cat.href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition group/item"
              >
                <span className="block text-sm font-bold text-gray-900 group-hover/item:text-black">
                  {cat.label}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">{cat.desc}</span>
              </Link>
            );
          })}
          <div className="border-t border-gray-100 mt-1 pt-2 px-4 pb-1">
            <Link
              href={`/${lang}/#catalog`}
              onClick={() => setOpen(false)}
              className="text-xs font-bold text-gray-500 hover:text-black transition"
            >
              View all products →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
