"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Mail, Facebook, Linkedin } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { useLang } from "../lib/i18n";
import { COMPARISON_LINKS } from "../lib/comparison-links";
import { NavCompareMenu } from "./NavCompareMenu";
import { NavProductsMenu } from "./NavProductsMenu";
import { MobileNav } from "./MobileNav";
import { MobileStickyBar } from "./MobileStickyBar";
import { trackWhatsAppClick } from "../lib/tracking";

interface Faq {
  q: string;
  a: string;
}

// Shared "Factory at a Glance" block rendered on every category landing page.
// Kept as a module-level constant (not messages JSON) so it ships in the JS
// bundle instead of being serialized into every page's RSC flight payload.
// Paragraph-style on purpose: less markup overhead per text char, which keeps
// the Semrush text/HTML ratio of the thin category pages above the 0.10 floor.
export const FACTORY_FACTS = {
  en: {
    title: "Sourcing & Quality at a Glance",
    intro:
      "Every program on this page is coordinated and quality-controlled by Baoding Junyang in Baoding, Hebei. The facts below are the ones professional buyers verify first — and each can be documented on request before you commit an order.",
    paragraphs: [
      "Our vetted partner manufacturing network is verified by SGS, and audit summaries plus production records are shared with buyers on request. We coordinate factory visits across cutting, embroidery, sewing, QC and export packing — and we provide live video walkthroughs so you can inspect the actual lines producing your caps.",
      "All embroidery runs on high-speed multi-head computerized machines with custom digitized punch files, maintaining strict stitch density and color matching under single-point quality management. Dedicated partner lines provide scalable capacity for volume container orders without delaying seasonal repeat drops.",
      "All materials and finished headwear meet international safety requirements. Where your retailer requires documentation, we coordinate third-party testing for REACH SVHC, OEKO-TEX Standard 100 and GRS TC per order, with test reports traveling with the shipment before customs clearance.",
      "Quality control is piece-by-piece rather than statistical: every cap is individually inspected for embroidery alignment, stitch density, seam integrity, measurements and finish before packing. Milestone photos and videos are shared at fabric cutting, embroidery, assembly and packing, and the sample fee is fully refunded against bulk orders of 500+ pieces.",
      "Commercial terms are straightforward: MOQ 200 pieces per style and color with multi-color programs split evenly without surcharges, written itemized FOB quotations within 2 working hours, physical samples in 7 days, bulk production in 15–20 days against a dated schedule, and EXW, FOB or CIF shipping with full export documentation. Payment runs through Alibaba Trade Assurance or direct T/T business accounts.",
      "Communication runs in English or Spanish with a single dedicated project specialist from initial quotation through customs delivery. Every order receives a written comparison sheet before sampling that details each technical specification, eliminating ambiguity.",
    ],
  },
  es: {
    title: "Abastecimiento y Calidad de un Vistazo",
    intro:
      "Todos los programas de esta página están coordinados y controlados por Baoding Junyang en Baoding, Hebei. Los siguientes datos son los que los compradores profesionales verifican primero, y cada uno puede documentarse bajo solicitud.",
    paragraphs: [
      "Nuestra red de fabricantes asociados está verificada por SGS, y los resúmenes de auditoría y registros de producción se comparten con los compradores bajo solicitud. Coordinamos visitas a las líneas de corte, bordado, costura, control de calidad y empaque, además de ofrecer recorridos en video en directo.",
      "Todo el bordado se realiza en líneas computarizadas multicabezal de alta precisión, garantizando consistencia de puntada y calibración de color bajo una gestión de calidad unificada. Nuestras líneas asociadas ofrecen capacidad escalable para pedidos por contenedor.",
      "Todos los materiales cumplen con normativas internacionales de seguridad química y textil. Gestionamos pruebas de terceros bajo REACH SVHC, OEKO-TEX Standard 100 y certificados GRS (TC) por pedido, viajando los informes técnicos junto con la mercancía.",
      "El control de calidad es pieza por pieza y no estadístico: cada gorra se inspecciona individualmente por alineación de bordado, densidad de puntadas, integridad de costuras, medidas y acabados. Se comparten fotos y vídeo en corte, bordado, confección y embalaje, reembolsando la muestra al 100% en pedidos ≥500 piezas.",
      "Condiciones comerciales directas: MOQ de 200 piezas por estilo y color, cotización FOB formal y desglosada por escrito en menos de 2 horas hábiles, muestras físicas en 7 días, producción en 15–20 días y documentación aduanera completa. Pagos protegidos mediante Alibaba Trade Assurance o T/T corporativo.",
      "Comunicación fluida en inglés o español con un responsable dedicado de proyecto desde la cotización hasta la entrega final, eliminando intermediarios y ambigüedades técnicas.",
    ],
  },
};

// Generic B2B FAQs used when a category page does not supply its own.
export const DEFAULT_FAQS: Record<"en" | "es", Faq[]> = {
  en: [
    { q: "What is the MOQ for custom caps?", a: "Our minimum order quantity is 200 pieces per style and colour. Multi-colour programs split evenly across colourways without surcharges, and blank-cap programs for returning buyers can start even lower." },
    { q: "How long does sampling take?", a: "Physical pre-production samples are produced in 7 days, with photos and video at every milestone. The sample fee is fully refunded against the bulk order once it reaches 500 pieces." },
    { q: "Do you support OEM and ODM orders?", a: "Yes. For OEM you supply the tech pack or a reference cap and we manufacture to spec. For ODM our team develops the construction, digitizing and bill of materials with you from a sketch or mood board, and you approve every stage before bulk." },
    { q: "What payment methods do you accept?", a: "Alibaba Trade Assurance orders carry platform payment protection and are our recommended route for first-time buyers. T/T through verified business accounts is available for established programs. We never request transfers to personal accounts." },
    { q: "How is quality controlled?", a: "Every piece passes individual inspection for embroidery alignment, stitch density, stitching integrity, measurements and finish. Milestone photos and video are shared at cutting, embroidery, assembly and packing, and production records are kept for audit traceability." },
    { q: "Which markets do you ship to?", a: "Around 70% of our output ships to North America and 25% to Western Europe, with the remainder across Oceania and the Middle East. All programs comply with REACH SVHC, OEKO-TEX Standard 100 and GRS specifications on request." },
  ],
  es: [
    { q: "¿Cuál es el MOQ para gorras personalizadas?", a: "Nuestra cantidad mínima de pedido es de 200 piezas por estilo y color. Los programas multicolor se reparten equitativamente entre colores sin recargos, y los programas de gorras en blanco para compradores habituales pueden comenzar aún más abajo." },
    { q: "¿Cuánto tarda la muestra?", a: "Las muestras preproductivas físicas se producen en 7 días, con fotos y vídeo en cada hito. El costo de la muestra se descuenta íntegro del pedido masivo una vez que alcanza las 500 unidades." },
    { q: "¿Aceptan pedidos OEM y ODM?", a: "Sí. Para OEM tú suministras el tech pack o una gorra de referencia y fabricamos según la especificación. Para ODM nuestro equipo desarrolla la construcción, la digitalización y el listado de materiales contigo a partir de un boceto o mood board, y apruebas cada etapa antes del pedido masivo." },
    { q: "¿Qué métodos de pago aceptan?", a: "Los pedidos con Alibaba Trade Assurance cuentan con protección de pago de la plataforma y son nuestra vía recomendada para compradores primerizos. El T/T mediante cuentas empresarias verificadas está disponible para programas consolidados. Nunca solicitamos transferencias a cuentas personales." },
    { q: "¿Cómo controlan la calidad?", a: "Cada pieza pasa una inspección individual de alineación del bordado, densidad de puntadas, integridad de costuras, medidas y acabado. Se comparten fotos y vídeo en el corte, el bordado, el ensamble y el embalaje, y se conservan registros de producción para trazabilidad en auditorías." },
    { q: "¿A qué mercados envían?", a: "Alrededor del 70% de nuestra producción viaja a Norteamérica y el 25% a Europa occidental, con el resto hacia Oceanía y Oriente Medio. Todos los programas cumplen con normativas REACH SVHC, OEKO-TEX Standard 100 y GRS bajo solicitud." },
  ],
};

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
  const locale = lang === "es" ? "es" : "en";

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
            {pills.map((p) =>
              p.includes("FOB") ? (
                <Link
                  key={p}
                  href={`/${lang}/pricing`}
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 hover:border-white/40 transition-colors"
                  aria-label={`${p} — view pricing details`}
                >
                  {p}
                </Link>
              ) : (
                <span
                  key={p}
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-full"
                >
                  {p}
                </span>
              )
            )}
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

        {/* Shared factory-facts block — verifiable factory data for every category */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10">
            <h2 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 mb-3">
              {FACTORY_FACTS[locale].title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {FACTORY_FACTS[locale].intro}
            </p>
            <div className="space-y-4">
              {FACTORY_FACTS[locale].paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

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
                      decoding="async"
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
        {(faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS[locale]).length > 0 && (
          <section className="py-10 sm:py-14 border-t border-slate-100">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 mb-6">
                {faqTitle || (lang === "es" ? "Preguntas Frecuentes sobre Fabricación" : "Frequently Asked Questions")}
              </h2>
              <div className="space-y-3">
                {(faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS[locale]).map((f) => (
                  <div key={f.q} className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                    <h3 className="font-bold text-sm text-slate-900 mb-1">{f.q}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: (faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS[locale]).map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                  }),
                }}
              />
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
              ? "Envíenos sus especificaciones y diseño — cotización y plazos en menos de 2 horas. Muestras físicas en 7 días."
              : "Send your specs and artwork — pricing and lead time within 2 hours. Physical samples in 7 days."}
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
              Baoding Junyang Import and Export Trade Co., Ltd. — headwear sourcing and quality partner since 2014.
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
                <li>{lang === "es" ? "Oficina: Baoding, Hebei, China" : "Office: Baoding, Hebei, China"}</li>
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
          <p>{lang === "es" ? "© 2026 Baoding Junyang Import and Export Trade Co., Ltd. Todos los derechos reservados." : "© 2026 Baoding Junyang Import and Export Trade Co., Ltd. All rights reserved."}</p>
        </div>
      </footer>
      <MobileStickyBar pageName={`Landing: ${title}`} />
    </main>
  );
}

export function ProductLinks({
  items,
}: {
  items: { href: string; name: string; img: string; note?: string }[];
}) {
  const lang = useLang();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((p) => (
        <Link
          key={p.href}
          href={`/${lang}${p.href}`}
          className="group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-lg bg-slate-50 overflow-hidden shrink-0">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-xs text-slate-900 group-hover:text-slate-600">
              {p.name}
            </h3>
            {p.note && <p className="text-[10px] text-slate-500 mt-0.5">{p.note}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}
