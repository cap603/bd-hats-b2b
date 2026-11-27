"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Clock,
  FileText,
  Sparkles,
  Calendar,
  CheckCircle2,
  Tag,
  MessageCircle,
} from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { RESOURCES } from "../../lib/resources-data";
import { NavProductsMenu } from "../../components/NavProductsMenu";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { trackWhatsAppClick } from "../../lib/tracking";

const WHATSAPP_NUMBER = "8615933930830";

export default function BlogHubPage() {
  const lang = useLang() === "es" ? "es" : "en";
  const articles = Object.values(RESOURCES[lang] || RESOURCES.en);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(articles.map((a) => a.category))),
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const meta = {
    badge: lang === "es" ? "Blog Técnico B2B · Datos 2026" : "Technical Blog · 2026 Edition",
    title: lang === "es" ? "Artículos Técnicos y Guías de Fabricación" : "Headwear Sourcing & Engineering Journal",
    subtitle:
      lang === "es"
        ? "Especificaciones directas de fábrica, protocolos de muestreo, guías de aranceles y normativas comerciales para compradores internacionales de gorras."
        : "Direct factory insights, technical headwear specs, FOB pricing benchmarks, customs clearance guides, and quality control SOPs for global apparel brands.",
    readArticle: lang === "es" ? "Leer artículo completo" : "Read Technical Article",
    publishedBy: lang === "es" ? "Por el Equipo Técnico de Baoding Junyang" : "By Baoding Junyang Engineering Team",
  };

  const handleWhatsAppClick = (btnName: string, label: string) => {
    trackWhatsAppClick({ button: btnName, label });
  };

  const whatsappText =
    lang === "es"
      ? "¡Hola Baoding Junyang! He visitado vuestro blog técnico de fabricación de gorras y me gustaría consultar viabilidad de producción."
      : "Hi Baoding Junyang! I was reading your technical hat manufacturing blog and would like to discuss a custom cap production project.";

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Schema Markup for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: meta.title,
            description: meta.subtitle,
            publisher: {
              "@type": "Organization",
              name: "Baoding Junyang Import and Export Trade Co., Ltd.",
              url: "https://bdjunyang.com",
              logo: {
                "@type": "ImageObject",
                url: "https://bdjunyang.com/images/brand/junyang-logo.png",
              },
            },
            blogPost: articles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.published,
              dateModified: a.updated,
              url: `https://bdjunyang.com/${lang}/blog/${a.slug}`,
            })),
          }),
        }}
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
              About Us
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
              onClick={() => handleWhatsAppClick("header_blog_whatsapp", "Blog Header WhatsApp")}
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
          { label: "Blog" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white pt-16 pb-20 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles size={13} className="text-yellow-400" />
            <span>{meta.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            {meta.title}
          </h1>

          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {meta.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 md:px-8 border-b border-gray-100 bg-gray-50/70">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-gray-500 mr-2 flex items-center gap-1">
            <Tag size={12} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="bg-white border border-gray-200 hover:border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="bg-yellow-400/20 text-yellow-900 font-extrabold uppercase text-[10px] px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {art.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {art.published}
                      </span>
                    </div>
                  </div>

                  <Link href={`/${lang}/blog/${art.slug}`}>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-yellow-600 transition leading-snug mb-3">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.subtitle || art.metaDesc}
                  </p>

                  {/* Highlights Bullet */}
                  {art.takeaways && art.takeaways.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                      <span className="text-[10px] font-black uppercase text-gray-500 block mb-2">
                        {art.takeawaysTitle || "Key Takeaways"}:
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {art.takeaways.slice(0, 2).map((tk, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{tk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">
                    {meta.publishedBy}
                  </span>
                  <Link
                    href={`/${lang}/blog/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-black group-hover:text-yellow-600 transition"
                  >
                    <span>{meta.readArticle}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Newsletter CTA */}
      <section className="py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-4">
            B2B Sourcing Advisory
          </span>
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Have a Specific Headwear Engineering Question?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Our Baoding-based pattern makers and international trade specialists review tech packs, calculate fabric yields, and verify embroidery tolerances within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${lang}/#inquiry`}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 px-8 rounded-full text-xs transition"
            >
              Submit RFQ
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("bottom_blog_whatsapp", "Blog Bottom WhatsApp")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full text-xs transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Chat with Sourcing Engineer</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
