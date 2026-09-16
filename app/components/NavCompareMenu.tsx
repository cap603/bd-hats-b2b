"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "../lib/i18n";
import { COMPARISON_LINKS } from "../lib/comparison-links";

/**
 * Top-navigation dropdown that groups the comparison pages.
 *
 * Why a dropdown rather than five flat links: the comparison titles are long
 * ("Cotton Twill vs Brushed Cotton vs Canvas"), so flat links would push the
 * rest of the nav out of shape. The links themselves stay real <a> elements in
 * the initial HTML, so crawlers still follow them and SEO value is preserved —
 * only the visual presentation is collapsed.
 *
 * Opens on hover (desktop) and on click (touch/keyboard, where hover is absent).
 */
export function NavCompareMenu({ label = "Compare" }: { label?: string }) {
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
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-96 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
        } transition`}
      >
        <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2">
          <p className="px-4 pt-2 pb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
            Headwear comparisons
          </p>
          {COMPARISON_LINKS.map((l) => (
            <Link
              key={l.href}
              href={`/${lang}${l.href}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
