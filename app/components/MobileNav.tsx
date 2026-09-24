"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, MessageCircle, Layers, Tag, BookOpen, ShieldCheck, Factory, Info } from "lucide-react";
import { useLang, useT } from "../lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const CORE_CATEGORIES = [
  { href: "/custom-5-panel-caps-manufacturer", label: "5-Panel Caps", tag: "High Demand" },
  { href: "/custom-trucker-hats", label: "Trucker Hats", tag: "Promo & Mesh" },
  { href: "/wholesale-snapbacks", label: "Snapback Caps", tag: "Streetwear" },
  { href: "/custom-dad-hats-manufacturer", label: "Dad Hats", tag: "Washed Cotton" },
  { href: "/custom-beanies-manufacturer", label: "Knit Beanies", tag: "Winter" },
  { href: "/custom-bucket-hats-manufacturer", label: "Bucket Hats", tag: "Outdoor" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useLang();
  const tNav = useT("nav");
  const pathname = usePathname();

  // Close drawer on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Baoding Junyang! I'm browsing on mobile and would like to get a custom hat quote and catalog."
    );
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition active:scale-95 flex items-center justify-center cursor-pointer"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[70] transition-opacity duration-300"
        />
      )}

      {/* Slide-in Drawer from Right */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white z-[80] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-9 w-auto object-contain"
            />
            <div>
              <span className="block font-black text-slate-900 text-sm tracking-tight leading-none">
                JUNYANG
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                Super Factory
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {/* Quick WhatsApp Action Banner */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition cursor-pointer"
          >
            <MessageCircle size={18} />
            <span>Fast WhatsApp Quote</span>
          </button>

          {/* Product Categories */}
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              <Layers size={14} />
              <span>Headwear Lines</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {CORE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={`/${lang}${cat.href}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-bold text-xs group transition"
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-slate-700 font-semibold flex items-center gap-1">
                    {cat.tag} <ChevronRight size={12} />
                  </span>
                </Link>
              ))}
              <Link
                href={`/${lang}/#catalog`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-black text-xs transition mt-1"
              >
                <span>View Full 2026 Catalog →</span>
              </Link>
            </div>
          </div>

          {/* Core Business Links */}
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              <Tag size={14} />
              <span>Buyer Essentials</span>
            </div>
            <div className="space-y-1">
              <Link
                href={`/${lang}/pricing`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-bold text-xs transition"
              >
                <span className="flex items-center gap-2.5">
                  <Tag size={14} className="text-amber-600" />
                  <span>Wholesale Pricing & MOQ</span>
                </span>
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  $3.50 Floor
                </span>
              </Link>
              <Link
                href={`/${lang}/guide`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-bold text-xs transition"
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen size={14} className="text-blue-600" />
                  <span>B2B Buyer's Guide</span>
                </span>
                <ChevronRight size={14} className="text-slate-300" />
              </Link>
              <Link
                href={`/${lang}/about`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-bold text-xs transition"
              >
                <span className="flex items-center gap-2.5">
                  <Factory size={14} className="text-slate-600" />
                  <span>About Super Factory</span>
                </span>
                <ChevronRight size={14} className="text-slate-300" />
              </Link>
              <Link
                href={`/${lang}/compare/5-panel-vs-6-panel-caps`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-bold text-xs transition"
              >
                <span className="flex items-center gap-2.5">
                  <ShieldCheck size={14} className="text-purple-600" />
                  <span>Cap Comparison Hub</span>
                </span>
                <ChevronRight size={14} className="text-slate-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Language:</span>
            <LanguageSwitcher />
          </div>
          <div className="text-[10px] text-slate-400 text-center">
            Est. 2014 · 50,000㎡ Super Factory · MOQ 200pcs
          </div>
        </div>
      </div>
    </div>
  );
}
