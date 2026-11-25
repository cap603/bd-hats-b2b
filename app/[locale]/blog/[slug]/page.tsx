"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  FileText,
  Calendar,
  Layers,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RESOURCES } from "../../../lib/resources-data";
import { NavProductsMenu } from "../../../components/NavProductsMenu";
import { NavCompareMenu } from "../../../components/NavCompareMenu";
import { trackWhatsAppClick } from "../../../lib/tracking";

const WHATSAPP_NUMBER = "8615933930830";

export default function BlogArticlePage({
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
    author: {
      "@type": "Organization",
      name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://bdjunyang.com/images/brand/junyang-logo.png",
      },
    },
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: `https://bdjunyang.com/${lang}/blog/${article.slug}`,
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

  const handleWhatsAppClick = (btnName: string, label: string) => {
    trackWhatsAppClick({ button: btnName, label });
  };

  const whatsappText =
    lang === "es"
      ? `¡Hola Baoding Junyang! He leído vuestro artículo de blog "${article.title}" y me gustaría consultar viabilidad de fabricación.`
      : `Hi Baoding Junyang! I just read your blog article "${article.title}" and would like to ask some questions regarding custom cap production.`;

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[7.5px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                B2B Hat Engineering & Manufacturing
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Link href={`/${lang}/custom-hat-cost-index-2026`} className="hover:text-black transition">
              2026 Cost Index
            </Link>
            <Link href={`/${lang}/custom-hat-tech-pack-template`} className="hover:text-black transition">
              Tech Pack Guide
            </Link>
            <NavProductsMenu />
            <Link href={`/${lang}/materials`} className="hover:text-black transition">
              Materials
            </Link>
            <NavCompareMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">
              About Factory
            </Link>
            <Link href={`/${lang}/blog`} className="text-black border-b-2 border-black pb-0.5">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("header_blog_article_whatsapp", "Blog Article WhatsApp")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full text-xs transition flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: `/${lang}` },
          { label: "Blog", href: `/${lang}/blog` },
          { label: article.title },
        ]}
      />

      {/* Hero Article Header */}
      <article className="pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="bg-yellow-400/20 text-yellow-900 font-extrabold uppercase text-[10px] px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Clock size={13} /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar size={13} /> {article.published}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
            {article.subtitle}
          </p>
        </header>

        {/* Takeaways Card */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-yellow-50/60 border border-yellow-200/80 rounded-3xl p-6 sm:p-8 mb-12">
            <h2 className="text-sm font-black text-yellow-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-yellow-700" />
              <span>{article.takeawaysTitle || "Key Executive Takeaways"}</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
              {article.takeaways.map((tk, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Comparison / Metric Table */}
        {article.tableRows && article.tableRows.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
              <Layers size={18} className="text-yellow-600" />
              <span>{article.tableTitle}</span>
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-900 text-white font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    {article.tableHead.map((th, i) => (
                      <th key={i} className="py-3.5 px-4 sm:px-6">{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {article.tableRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-3.5 px-4 sm:px-6 ${
                            j === 0 ? "font-bold text-gray-900" : "text-gray-700"
                          }`}
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
        )}

        {/* Content Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-sm sm:text-base mb-16">
          {article.sections.map((sec, i) => (
            <section key={i} className="border-t border-gray-100 pt-8 first:border-t-0 first:pt-0">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-4">
                {sec.heading}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {sec.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* FAQ Accordion */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="border-t border-gray-200 pt-12 mb-16">
            <div className="flex items-center gap-2 text-yellow-600 text-xs font-black uppercase tracking-widest mb-3">
              <HelpCircle size={16} />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl font-black text-gray-950 mb-6">
              Factory Q&A on This Topic
            </h3>
            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 group" open={idx === 0}>
                  <summary className="font-bold text-gray-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Relevant Inner Links */}
        {article.interlinks && article.interlinks.length > 0 && (
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 mb-16">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-4">
              Related Sourcing Guides & Decision Tools:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {article.interlinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${lang}${link.href}`}
                  className="bg-white p-4 rounded-2xl border border-gray-200 hover:border-black transition flex flex-col justify-between"
                >
                  <span className="font-bold text-xs text-gray-900 mb-1">{link.label}</span>
                  <span className="text-[11px] text-gray-500 line-clamp-2">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-3">
            Ready to Put These Specifications into Production?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed">
            Send your vector artwork or tech pack. Baoding Junyang’s sample room delivers physical pre-production samples in 7 business days with 100% credit on bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/${lang}/#inquiry`}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 px-8 rounded-full text-xs transition"
            >
              Request Factory FOB Quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("article_bottom_whatsapp", "Article Bottom WhatsApp")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full text-xs transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
