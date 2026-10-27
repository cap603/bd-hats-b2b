"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { useLang } from "../lib/i18n";
import { COMPARISON_LINKS } from "../lib/comparison-links";
import { NavCompareMenu } from "./NavCompareMenu";
import { NavProductsMenu } from "./NavProductsMenu";
import { MobileNav } from "./MobileNav";
import { MobileStickyBar } from "./MobileStickyBar";
import { trackWhatsAppClick } from "../lib/tracking";

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
  { href: "/corporate-custom-hats-supplier", label: "Corporate Custom Hats" },
  { href: "/bulk-custom-hats-manufacturer", label: "Bulk Hat Production" },
  { href: "/custom-beanies-manufacturer", label: "Custom Beanies" },
  { href: "/custom-bucket-hats-manufacturer", label: "Custom Bucket Hats" },
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
  featuresTitle,
  featuresIntro,
  features,
  compareTitle,
  compareCols,
  compare,
  compareNote,
  pricingTitle,
  stats,
  faqs,
  faqTitle,
  productsTitle,
  productsIntro,
  products,
  children,
}: {
  crumb: string;
  badge: string;
  title: string;
  accent: string;
  subtitle: string;
  pills: string[];
  featuresTitle?: string;
  featuresIntro?: string;
  features?: { tag?: string; title: string; desc: string }[];
  compareTitle?: string;
  compareCols?: string[];
  compare?: { style: string; shape: string; brim: string; fit: string }[];
  compareNote?: string;
  pricingTitle?: string;
  stats?: { value: string; label: string }[];
  faqs?: { q: string; a: string }[];
  faqTitle?: string;
  productsTitle?: string;
  productsIntro?: string;
  products?: { href: string; name: string; tag?: string; badge?: string; price?: string; moq?: string; img: string; note?: string }[];
  children?: React.ReactNode;
}) {
  const lang = useLang();

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/${lang}/#inquiry`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full text-xs md:text-sm shadow-xs"
            >
              Get Quote
            </Link>
            <MobileNav />
          </div>
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

      {/* Production Specs / Stats Strip */}
      {stats && stats.length > 0 && (
        <section className="bg-slate-900 border-b border-slate-800 py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-3">
                <p className="text-2xl md:text-3xl font-black text-amber-400 mb-1">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Engineering Features */}
      {features && features.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            {featuresTitle && (
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-4">
                  {featuresTitle}
                </h2>
                {featuresIntro && (
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{featuresIntro}</p>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-gray-200 transition">
                  {f.tag && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white px-3 py-1 rounded-full mb-3">
                      {f.tag}
                    </span>
                  )}
                  <h3 className="font-black text-xl text-black mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specification Comparison Table */}
      {compare && compare.length > 0 && (
        <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            {compareTitle && (
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-10 text-center">
                {compareTitle}
              </h2>
            )}
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-bold">
                  <tr>
                    {(compareCols || ["Style", "Profile", "Visor", "Best For"]).map((col, i) => (
                      <th key={i} className="py-4 px-5">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {compare.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/80 transition">
                      <td className="py-4 px-5 font-bold text-black">{row.style}</td>
                      <td className="py-4 px-5 text-gray-600">{row.shape}</td>
                      <td className="py-4 px-5 text-gray-600">{row.brim}</td>
                      <td className="py-4 px-5 text-gray-600">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {compareNote && (
              <p className="text-xs text-gray-500 mt-4 text-center max-w-2xl mx-auto">{compareNote}</p>
            )}
          </div>
        </section>
      )}

      {children}

      {/* Complementary Products */}
      {products && products.length > 0 && (
        <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            {productsTitle && (
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3">
                  {productsTitle}
                </h2>
                {productsIntro && (
                  <p className="text-gray-600 text-sm md:text-base">{productsIntro}</p>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Link
                  key={i}
                  href={`/${lang}${p.href}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition"
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
                    {p.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 mb-1 block">
                        {p.badge}
                      </span>
                    )}
                    <h3 className="font-black text-black text-base mb-1">{p.name}</h3>
                    {p.tag && <p className="text-xs text-gray-500 mb-3">{p.tag}</p>}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-bold">
                      <span className="text-slate-900">{p.price}</span>
                      <span className="text-gray-500">{p.moq}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured FAQ Section with FAQPage JSON-LD */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              }),
            }}
          />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-10 text-center">
              {faqTitle || (lang === "es" ? "Preguntas Frecuentes sobre Fabricación" : "Frequently Asked Questions")}
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200/80 p-6 md:p-7">
                  <h3 className="font-bold text-base md:text-lg text-black mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            {lang === "es" ? "Solicite su Cotización de Fábrica Hoy" : "Get Your Factory Quote Today"}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {lang === "es"
              ? "Envíenos sus especificaciones y diseño — cotización y plazos en menos de 12 horas. Muestras físicas en 7 días."
              : "Send your specs and artwork — pricing and lead time within 12 hours. Physical samples in 7 days."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/8615933930830?text=${encodeURIComponent(
                lang === "es"
                  ? `¡Hola Baoding Junyang! Me gustaría solicitar cotización de fábrica para ${title} (${crumb}). MOQ 200 uds.`
                  : `Hi Baoding Junyang! I would like to get a factory quote for ${title} (${crumb}). MOQ 200pcs.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  button: "landing_bottom_cta",
                  label: `Landing: ${title} (${crumb})`,
                });
              }}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={22} />
              {lang === "es" ? "Cotizar por WhatsApp (Rápido)" : "Chat on WhatsApp (Fast Quote)"}
            </a>
            <Link
              href={`/${lang}/#inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20"
            >
              <Mail size={22} />
              {lang === "es" ? "Enviar Formulario de Especificaciones" : "Send Tech Pack & Specs"}
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
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
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Comparisons</h4>
              <ul className="space-y-2 text-sm">
                {COMPARISON_LINKS.map((l) => (
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
              <div className="mt-4 pt-3 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/p/Baoding-Junyang-Import-And-Export-Trade-Co-Ltd-100079978783412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 text-gray-400 flex items-center justify-center transition border border-white/10"
                  aria-label="Facebook Page"
                  title="Follow us on Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/146738106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-blue-300 text-gray-400 flex items-center justify-center transition border border-white/10"
                  aria-label="LinkedIn Company Page"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
      <MobileStickyBar pageName={`Landing: ${title}`} />
    </main>
  );
}
