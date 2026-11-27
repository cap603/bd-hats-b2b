"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { FACTORY_FACTS, DEFAULT_FAQS } from "../../components/LandingShell";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../lib/comparison-links";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";

const CONTENT = {
  en: {
    hero: {
      badge: "OEM · ODM · Private Label",
      h1Pre: "Your OEM ",
      h1Highlight: "Hat Sourcing Partner",
      h1Post: " in China",
      subtitle: "From sketch to shipped — a full-service sourcing partner behind 300+ brands in 50+ countries since 2014. Samples in 7 days, written quote in 2h.",
      pills: ["Scalable B2B Volume", "Multi-Head Embroidery", "OEM / ODM Service", "Est. 2014"]
    },
    capabilitiesTitle: "Production & Sourcing Capabilities",
    capabilities: [
      { title: "Production Capacity", desc: "Coordinating selected partner factory lines with precision multi-head embroidery and in-house QC teams. Scalable capacity for volume container orders — with dedicated production lines for snapbacks, 5-panel caps, trucker hats and beanies." },
      { title: "Quality & Compliance Support", desc: "Third-party material testing and inspection can be arranged per order for the international market. Our quality workflow is documented at each production stage." },
      { title: "OEM / ODM Service", desc: "Send us sketches, spec sheets, or a reference product and our in-house design team turns it into production-ready files. We handle embroidery digitizing, color matching, and engineering for your exact cap style." },
      { title: "Sample & Approval Process", desc: "Physical pre-production samples in 7 days. Sample fees range $50-100 including courier and are fully credited against your bulk order — so sampling a new style is low-risk for first-time partners." },
      { title: "Quality Control", desc: "Every production stage is documented with photo and video updates: raw material check, embroidery precision, stitching integrity, a final check before packing, and a packing audit before shipment." },
      { title: "Global Shipping", desc: "We ship to 50+ countries via DHL, FedEx, and UPS (5-8 days air express) or sea freight (25-35 days). FOB or CIF terms available. Over 300 brands in North America, Europe, and Australia produce with us." }
    ],
    stepsTitle: "How OEM Works With Us",
    steps: [
      { n: "01", t: "Send Your Brief", d: "Styles, quantities, artwork — or just an idea. We confirm specs within 2 hours." },
      { n: "02", t: "Get Your Quote", d: "A detailed quotation with pricing, MOQ, and lead time. No hidden costs." },
      { n: "03", t: "Approve the Sample", d: "Physical pre-production sample in 7 days for your final approval." },
      { n: "04", t: "Bulk Production", d: "15-20 days production with weekly photo/video progress updates and final QC." }
    ],
    ctaTitle: "Build Your Brand With Our Sourcing Team",
    ctaDesc: "Tell us about your project — get a quote within 2 hours and a sample in 7 days.",
    ctaPrimary: "Request Written Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "OEM · ODM · Marca privada",
      h1Pre: "Su ",
      h1Highlight: "socio de abastecimiento de gorras OEM",
      h1Post: " en China",
      subtitle: "Del boceto al envío — un socio integral detrás de más de 300 marcas en más de 50 países desde 2014. Muestras en 7 días y cotización en 2h.",
      pills: ["Capacidad Escalable", "Bordado Multicabezal", "Servicio OEM / ODM", "Desde 2014"]
    },
    capabilitiesTitle: "Capacidades de abastecimiento",
    capabilities: [
      { title: "Capacidad de producción", desc: "Líneas de fabricación asociadas seleccionadas con bordado computarizado multicabezal y equipo propio de control de calidad. Capacidad escalable para pedidos por contenedor con líneas dedicadas para snapbacks, 5 paneles, truckers y beanies." },
      { title: "Calidad y cumplimiento", desc: "Las pruebas e inspecciones de materiales de terceros se gestionan por pedido para el mercado internacional. Nuestro sistema de calidad se documenta en cada etapa de producción." },
      { title: "Servicio OEM / ODM", desc: "Envíenos bocetos, fichas técnicas o un producto de referencia y nuestro equipo de diseño interno lo convierte en archivos listos para producción. Nos encargamos del digitalizado del bordado, la igualación de colores y la ingeniería de su estilo exacto de gorra." },
      { title: "Proceso de muestra y aprobación", desc: "Muestras físicas de preproducción en 7 días. Las tarifas de muestra van de $50-100, incluyen el mensajero y se acreditan por completo contra su pedido en masa, por lo que probar un nuevo estilo es de bajo riesgo para socios nuevos." },
      { title: "Control de calidad", desc: "Cada etapa de producción se documenta con fotos y videos: verificación de materia prima, precisión del bordado, integridad de las costuras, revisión final antes del empaque y auditoría de empaque antes del envío." },
      { title: "Envíos globales", desc: "Enviamos a más de 50 países por DHL, FedEx y UPS (5-8 días en express aéreo) o por flete marítimo (25-35 días). Términos FOB o CIF disponibles. Más de 300 marcas en Norteamérica, Europa y Australia producen con nosotros." }
    ],
    stepsTitle: "Cómo funciona el OEM con nosotros",
    steps: [
      { n: "01", t: "Envíe su brief", d: "Estilos, cantidades, diseños o solo una idea. Confirmamos las especificaciones en 2 horas." },
      { n: "02", t: "Reciba su cotización", d: "Una cotización detallada con precios, MOQ y tiempo de entrega. Sin costos ocultos." },
      { n: "03", t: "Apruebe la muestra", d: "Muestra física de preproducción en 7 días para su aprobación final." },
      { n: "04", t: "Producción en masa", d: "15-20 días de producción con actualizaciones semanales en foto/video y QC final." }
    ],
    ctaTitle: "Construya su Marca con Nuestro Equipo",
    ctaDesc: "Cuéntenos sobre su proyecto — reciba una cotización en 2 horas y una muestra en 7 días.",
    ctaPrimary: "Solicite cotización por escrito",
    ctaSecondary: "Ver catálogo completo"
  }
};

export default function OemPage() {
  const lang = useLang();
  const locale = lang === "es" ? "es" : "en";
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "OEM Headwear Sourcing Partner in China — Private Label Custom Caps Since 2014",
    "description": "Full-service OEM/ODM headwear sourcing partner: vetted partner network, multi-head embroidery, pre-shipment QC, samples in 7 days. Serving 300+ brands worldwide.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Import and Export Trade Co., Ltd." },
    "datePublished": "2026-08-25",
    "dateModified": "2026-08-25",
    "mainEntityOfPage": "https://bdjunyang.com/oem-hat-manufacturer"
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-4">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "OEM Hat Manufacturer" }]} />

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">{c.hero.badge}</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {c.hero.h1Pre}<span className="text-yellow-400">{c.hero.h1Highlight}</span>{c.hero.h1Post}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {c.hero.pills.map((p, i) => (
              <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">{c.capabilitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.capabilities.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-black text-lg text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 text-center">{c.stepsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {c.steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <p className="text-3xl font-black text-yellow-500 mb-3">{s.n}</p>
                <h3 className="font-black text-black mb-2">{s.t}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{c.ctaTitle}</h2>
          <p className="text-gray-400 text-lg mb-8">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/#inquiry`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              {c.ctaPrimary} <ArrowRight size={20} />
            </Link>
            <Link href={`/${lang}/#catalog`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Factory at a Glance — shared verifiable factory data */}
      <section className="py-12 sm:py-16">
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

      {/* FAQ */}
      <section className="py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 mb-6">
            {lang === "es" ? "Preguntas Frecuentes sobre Fabricación" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-3">
            {DEFAULT_FAQS[locale].map((f) => (
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
                mainEntity: DEFAULT_FAQS[locale].map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="/images/brand/junyang-logo.webp" alt="JUNYANG" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Import and Export Trade Co., Ltd. — headwear sourcing and quality partner since 2014.</p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${lang}/guide`} className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href={`/${lang}/wholesale-snapbacks`} className="hover:text-white">Wholesale Snapbacks</Link></li>
                <li><Link href={`/${lang}/custom-trucker-hats`} className="hover:text-white">Custom Trucker Hats</Link></li>
                <li><Link href={`/${lang}/oem-hat-manufacturer`} className="hover:text-white">OEM Hat Manufacturing</Link></li>
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
