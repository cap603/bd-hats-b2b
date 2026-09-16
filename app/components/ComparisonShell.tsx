"use client";

import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { useLang } from "../lib/i18n";

/**
 * Shared shell for X-vs-Y comparison pages.
 *
 * Design notes (all deliberate, per the growth handbook §5.3 / §5.5):
 * - QuickAnswer renders a 40–60 word direct answer near the top: this is the
 *   block length AI Overviews and ChatGPT extract most often.
 * - ComparisonTable renders real <table> markup so the comparison is
 *   machine-extractable rather than styled div soup.
 * - ComparisonFaq emits FAQPage JSON-LD alongside the visible Q&A, so the
 *   same content is both human-readable and structured-data eligible.
 * - Every comparison page cross-links the whole comparison cluster.
 */

export const COMPARISON_LINKS = [
  { href: "/compare/5-panel-vs-6-panel-caps", label: "5-Panel vs 6-Panel Caps" },
  { href: "/compare/flat-embroidery-vs-3d-puff", label: "Flat vs 3D Puff Embroidery" },
  {
    href: "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    label: "Cotton Twill vs Brushed Cotton vs Canvas",
  },
  { href: "/compare/snapback-vs-strapback-vs-buckle", label: "Snapback vs Strapback vs Buckle" },
  {
    href: "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
    label: "China vs Vietnam vs Bangladesh",
  },
];

/** 40–60 word direct-answer block. Rendered high on the page on purpose. */
export function QuickAnswer({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto -mt-10 relative z-10 px-4">
      <div className="bg-white border-l-4 border-yellow-400 rounded-r-xl shadow-lg p-6 md:p-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <p className="mt-2 text-lg md:text-xl text-gray-900 leading-relaxed font-medium">
          {children}
        </p>
      </div>
    </div>
  );
}

export type Column = { key: string; label: string };

/** Real table markup — AI systems extract tables, not div grids. */
export function ComparisonTable({
  caption,
  columns,
  rows,
  note,
}: {
  caption: string;
  columns: Column[];
  rows: { label: string; values: (string | boolean)[] }[];
  note?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left text-xs font-bold uppercase tracking-widest text-gray-400 pb-3">
          {caption}
        </caption>
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left p-4 font-bold">{columns[0].label}</th>
            {columns.slice(1).map((col) => (
              <th key={col.key} className="text-left p-4 font-bold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-4 font-bold text-gray-900 border-b border-gray-100">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="p-4 text-gray-700 border-b border-gray-100 align-top">
                  {v === true ? (
                    <Check size={16} className="text-green-600" />
                  ) : v === false ? (
                    <Minus size={16} className="text-gray-300" />
                  ) : (
                    v
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="text-xs text-gray-500 mt-3">{note}</p>}
    </div>
  );
}

/** Visible FAQ + FAQPage JSON-LD generated from the same source array. */
export function ComparisonFaq({
  heading,
  items,
}: {
  heading: string;
  items: { q: string; a: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-8">{heading}</h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.q} className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonShell({
  crumb,
  badge,
  title,
  accent,
  subtitle,
  quickAnswerLabel,
  quickAnswer,
  crossLinksLabel = "More headwear comparisons",
  crossLinksTitle = "Related comparisons",
  ctaTitle,
  ctaText,
  ctaButton,
  children,
}: {
  crumb: string;
  badge: string;
  title: string;
  accent: string;
  subtitle: string;
  quickAnswerLabel: string;
  quickAnswer: string;
  crossLinksLabel?: string;
  crossLinksTitle?: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  children: React.ReactNode;
}) {
  const lang = useLang();
  const others = COMPARISON_LINKS;

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
            <Link href={`/${lang}/#catalog`} className="hover:text-black transition">
              Products
            </Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">
              Buyer&apos;s Guide
            </Link>
            <Link href={`/${lang}/compare/5-panel-vs-6-panel-caps`} className="hover:text-black transition">
              Comparisons
            </Link>
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">
              Inquiry
            </Link>
          </nav>
          <Link
            href={`/${lang}/#inquiry`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm"
          >
            {ctaButton}
          </Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: crumb }]} />

      <section className="bg-black text-white pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">
            {badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {title} <span className="text-yellow-400">{accent}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      <QuickAnswer label={quickAnswerLabel}>{quickAnswer}</QuickAnswer>

      {children}

      <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-black uppercase tracking-widest text-gray-400">
            {crossLinksLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-2 mb-8">
            {crossLinksTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className="group flex items-center justify-between gap-4 border border-gray-200 rounded-xl p-5 hover:border-black hover:bg-gray-50 transition"
              >
                <span className="font-bold text-gray-900 text-sm md:text-base">{link.label}</span>
                <ArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{ctaTitle}</h2>
          <p className="text-gray-300 text-lg mb-8">{ctaText}</p>
          <Link
            href={`/${lang}/#inquiry`}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition"
          >
            {ctaButton}
          </Link>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-white font-black mb-3">BD Hats · JUNYANG</p>
            <p className="leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. — custom hat factory since 2014. MOQ
              200 pcs · Samples in 7 days · SGS verified.
            </p>
          </div>
          <div>
            <p className="text-white font-bold mb-3">{crossLinksTitle}</p>
            <ul className="space-y-2">
              {others.map((link) => (
                <li key={link.href}>
                  <Link href={`/${lang}${link.href}`} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-3">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/8615933930830" className="hover:text-white">
                  WhatsApp: +86 15933930830
                </a>
              </li>
              <li>Email: admin@bdjunyang.com</li>
              <li>Baoding, Hebei, China</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs">
          © 2026 Baoding Junyang Hat Manufacturing Co., Ltd.
        </div>
      </footer>
    </main>
  );
}
