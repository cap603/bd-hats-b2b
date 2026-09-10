"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { useLang } from "../lib/i18n";

/**
 * Shared shell for buyer-intent landing pages.
 * Keeps header/hero/footer consistent and — importantly — renders the full
 * landing-page link network in the footer so every page cross-links the others.
 */
export const LANDING_LINKS = [
  { href: "/oem-hat-manufacturer", label: "OEM Hat Manufacturing" },
  { href: "/private-label-hat-manufacturer", label: "Private Label Hats" },
  { href: "/wholesale-snapbacks", label: "Wholesale Snapbacks" },
  { href: "/custom-trucker-hats", label: "Custom Trucker Hats" },
  { href: "/custom-dad-hats-manufacturer", label: "Custom Dad Hats" },
  { href: "/custom-5-panel-caps-manufacturer", label: "Custom 5-Panel Caps" },
  { href: "/wholesale-blank-caps-supplier", label: "Wholesale Blank Caps" },
  { href: "/guide", label: "B2B Buyer's Guide" },
];

export function ProductLinks({
  items,
}: {
  items: { href: string; name: string; img: string; note?: string }[];
}) {
  const lang = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <Link
          key={p.href}
          href={`/${lang}${p.href}`}
          className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition"
        >
          <div className="aspect-square bg-gray-50 overflow-hidden">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h3 className="font-black text-black text-sm leading-snug mb-1">{p.name}</h3>
            {p.note && <p className="text-xs text-gray-500">{p.note}</p>}
            <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 mt-3">
              View details <ArrowRight size={12} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function LandingShell({
  crumb,
  badge,
  title,
  accent,
  subtitle,
  pills,
  children,
}: {
  crumb: string;
  badge: string;
  title: string;
  accent: string;
  subtitle: string;
  pills: string[];
  children: React.ReactNode;
}) {
  const lang = useLang();

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"
              alt="JUNYANG"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href={`/${lang}/#catalog`} className="hover:text-black transition">Products</Link>
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link
            href={`/${lang}/#inquiry`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm"
          >
            Get Quote
          </Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: crumb }]} />

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">
            {badge}
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {title} <span className="text-yellow-400">{accent}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {pills.map((p) => (
              <span
                key={p}
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {children}

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Get Your Factory Quote Today
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Send your specs and artwork — pricing and lead time within 12 hours. Physical samples in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${lang}/#inquiry`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition"
            >
              Request Factory Quote <ArrowRight size={20} />
            </Link>
            <Link
              href={`/${lang}/#catalog`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20"
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"
              alt="JUNYANG"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Capabilities</h4>
              <ul className="space-y-2 text-sm">
                {LANDING_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={`/${lang}${l.href}`} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>WhatsApp: +86 15933930830</li>
                <li>Email: admin@bdjunyang.com</li>
                <li>Office: Baoding, Hebei, China</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
