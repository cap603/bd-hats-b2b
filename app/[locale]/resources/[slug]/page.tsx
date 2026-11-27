"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileText, Download } from "lucide-react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RESOURCES } from "../../../lib/resources-data";
import { NavProductsMenu } from "../../../components/NavProductsMenu";
import { NavCompareMenu } from "../../../components/NavCompareMenu";

export default function ResourceArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  const lang = locale === "es" ? "es" : "en";
  const article = RESOURCES[lang]?.[slug];

  if (!article) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    author: { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    publisher: {
      "@type": "Organization",
      name: "Baoding Junyang Import and Export Trade Co., Ltd.",
      logo: { "@type": "ImageObject", url: "/images/brand/junyang-logo.webp" },
    },
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: `https://bdjunyang.com/${lang}/resources/${article.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <Link href={`/${lang}/resources`} className="hover:text-black text-blue-600 transition">Resources</Link>
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
          { label: lang === "es" ? "Recursos" : "Resources", href: "/resources" },
          { label: article.category },
        ]}
      />

      <article className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex flex-wrap items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {article.heroBadge}
              </span>
              <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                <Clock size={13} />
                {article.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>
            <div className="text-xs text-gray-400 font-semibold mt-6 pt-4 border-t border-gray-100">
              {lang === "es" ? "Actualizado el" : "Updated on"} {article.updated} · {lang === "es" ? "Por el Equipo Baoding Junyang" : "By the Baoding Junyang Team"}
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-yellow-50/70 border border-yellow-200 rounded-3xl p-6 md:p-8 mb-12">
            <h2 className="text-sm font-black uppercase tracking-wider text-yellow-800 mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-yellow-600" />
              {article.takeawaysTitle}
            </h2>
            <ul className="space-y-3">
              {article.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-800 leading-relaxed font-medium">
                  <CheckCircle2 size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specification / Comparison Table */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-950 tracking-tight mb-4">
              {article.tableTitle}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {article.tableHead.map((th, i) => (
                      <th
                        key={i}
                        className="text-left font-bold text-black px-4 py-3.5 border-b border-gray-200"
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {article.tableRows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-4 py-3.5 align-top ${cIdx === 0 ? "font-semibold text-black" : "text-gray-700"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Body Sections */}
          <div className="space-y-12 mb-16">
            {article.sections.map((sec, sIdx) => (
              <section key={sIdx} className="border-t border-gray-100 pt-8 first:border-0 first:pt-0">
                <h2 className="text-2xl md:text-3xl font-black text-gray-950 tracking-tight mb-5">
                  {sec.heading}
                </h2>
                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                  {sec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10 mb-16">
            <h2 className="text-2xl font-black text-gray-950 tracking-tight mb-6">
              {lang === "es" ? "Preguntas Frecuentes Relacionadas" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {article.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-base font-bold text-gray-950 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Factory Guides & Interlinks */}
          <div className="border-t border-gray-200 pt-12 mb-16">
            <h2 className="text-xl font-black text-gray-950 mb-6 uppercase tracking-wider text-xs">
              {lang === "es" ? "Herramientas y Guías Relacionadas" : "Related Engineering Guides"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {article.interlinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={`/${lang}${link.href}`}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-black hover:bg-white hover:shadow-xs transition block"
                >
                  <h3 className="font-bold text-gray-950 text-sm mb-1.5 flex items-center justify-between">
                    <span>{link.label}</span>
                    <ArrowRight size={13} className="text-gray-400 shrink-0" />
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
              {lang === "es" ? "Contacto Directo" : "Direct Inquiry"}
            </span>
            <h2 className="text-2xl md:text-3xl font-black mt-2 mb-4 tracking-tight">
              {lang === "es" ? "¿Listo para cotizar su programa de gorras?" : "Ready to Engineer Your Custom Hat Program?"}
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              {lang === "es"
                ? "Envíe su diseño vectorial para una revisión técnica gratuita y presupuesto detallado FOB en 2 horas."
                : "Submit your vector artwork or tech pack for free engineer digitizing review and an itemized FOB quote within 2 hours."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${lang}/#inquiry`}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-sm transition"
              >
                {lang === "es" ? "Solicitar Cotización FOB" : "Request FOB Quote"}
              </Link>
              <Link
                href={`/${lang}/custom-hat-tech-pack-template`}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full text-sm transition"
              >
                {lang === "es" ? "Descargar Tech Pack" : "Download Tech Pack"}
              </Link>
            </div>
          </div>
        </div>
      </article>

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
                <li><Link href={`/${lang}/resources`} className="hover:text-white">All Resources</Link></li>
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-white">Cost Index 2026</Link></li>
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
