"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Clock, FileText } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { RESOURCES } from "../../lib/resources-data";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { NavCompareMenu } from "../../components/NavCompareMenu";

export default function ResourcesHubPage() {
  const lang = useLang() === "es" ? "es" : "en";
  const articles = Object.values(RESOURCES[lang]);

  const meta = {
    badge: lang === "es" ? "Centro de Recursos B2B" : "Factory Knowledge Hub",
    title: lang === "es" ? "Guías Técnicas y Recursos de Fabricación" : "Headwear Engineering & Sourcing Hub",
    subtitle:
      lang === "es"
        ? "Especificaciones directas de fábrica, protocolos de muestreo, guías de aranceles y normativas comerciales para compradores internacionales."
        : "Direct factory specifications, sampling protocols, US tariff classifications, and safe sourcing frameworks for global apparel brands.",
    readGuide: lang === "es" ? "Leer guía técnica" : "Read Technical Guide",
    publishedBy: lang === "es" ? "Publicado por el Equipo de Fábrica Baoding Junyang" : "Published by Baoding Junyang Factory Engineering Team",
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black tracking-tighter text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition">
            Get Quote
          </Link>
        </div>
      </header>

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: lang === "es" ? "Recursos de Fábrica" : "Engineering Resources" },
        ]}
      />

      <section className="bg-black text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">
            {meta.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tight leading-tight">
            {meta.title}
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {meta.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs hover:shadow-md hover:border-black transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                    <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-gray-950 mb-3 tracking-tight leading-snug">
                    <Link href={`/${lang}/resources/${art.slug}`} className="hover:text-blue-600 transition">
                      {art.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    {art.updated}
                  </span>
                  <Link
                    href={`/${lang}/resources/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-black hover:text-blue-600 transition"
                  >
                    <span>{meta.readGuide}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Import and Export Trade Co., Ltd. — 12-year custom hat sourcing and quality partner in Baoding, China.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Engineering Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white">Cost Index 2026</Link></li>
                <li><Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-white">Vector Tech Pack</Link></li>
                <li><Link href={`/${lang}/pricing`} className="hover:text-white">Factory Pricing</Link></li>
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
          <p>© 2026 Baoding Junyang Import and Export Trade Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
