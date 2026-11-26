"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang, useT } from "../lib/i18n";
import { COMPARISON_LINKS } from "../lib/comparison-links";

/**
 * Consolidated "Guide" dropdown.
 *
 * Merges the former top-level "Sourcing & Quality", "Quality Control" and
 * "Compare" entries into one menu so the header stays short. The first two
 * now lead to the About page — which houses the sourcing-network and
 * quality-control protocol content — because the homepage sections they used
 * to anchor to (#factory / #qc) were removed. The links stay real <a> elements
 * in the initial HTML so crawlers keep following them — only the visual
 * presentation is collapsed.
 *
 * Opens on hover (desktop) and on click (touch/keyboard, where hover is absent).
 */
export function NavGuideMenu() {
  const lang = useLang();
  const tNav = useT("nav");
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
        {tNav("guideMenu")}
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
          <Link
            href={`/${lang}/about`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
          >
            {tNav("factory")}
          </Link>
          <Link
            href={`/${lang}/about#quality-control`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
          >
            {tNav("qualityControl")}
          </Link>
          <p className="px-4 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
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
