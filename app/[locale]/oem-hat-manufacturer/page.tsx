"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../lib/comparison-links";
import { NavCompareMenu } from "../../components/NavCompareMenu";

const CONTENT = {
  en: {
    hero: {
      badge: "OEM · ODM · Private Label",
      h1Pre: "Your OEM ",
      h1Highlight: "Hat Manufacturer",
      h1Post: " in China",
      subtitle: "From sketch to shipped — a full-service factory behind 300+ brands in 50+ countries since 2014. SGS verified, AQL 2.5 QC, samples in 7 days.",
      pills: ["5M+ Caps / Year", "100+ Embroidery Machines", "SGS · CE · REACH", "Est. 2014"]
    },
    capabilitiesTitle: "Factory Capabilities",
    capabilities: [
      { title: "Production Capacity", desc: "50,000 sqm factory floor, 200+ skilled tailors and 100+ Japanese Barudan embroidery machines. Annual output exceeds 5 million caps — with dedicated production lines for snapbacks, 5-panel caps, trucker hats and beanies." },
      { title: "Certifications & Compliance", desc: "SGS factory verification, CE product certification, and full REACH and RoHS compliance for the European market. Our quality system follows a 5-stage AQL 2.5 inspection protocol on every order." },
      { title: "OEM / ODM Service", desc: "Send us sketches, spec sheets, or a reference product and our in-house design team turns it into production-ready files. We handle embroidery digitizing, color matching, and engineering for your exact cap style." },
      { title: "Sample & Approval Process", desc: "Physical pre-production samples in 7 days. Sample fees range $50-100 including courier and are fully credited against your bulk order — so sampling a new style is low-risk for first-time partners." },
      { title: "Quality Control", desc: "Every production stage is documented with photo and video updates: raw material check, embroidery precision, stitching integrity, final piece-by-piece inspection, and packing audit before shipment." },
      { title: "Global Shipping", desc: "We ship to 50+ countries via DHL, FedEx, and UPS (5-8 days air express) or sea freight (25-35 days). FOB or CIF terms available. Over 300 brands in North America, Europe, and Australia produce with us." }
    ],
    stepsTitle: "How OEM Works With Us",
    steps: [
      { n: "01", t: "Send Your Brief", d: "Styles, quantities, artwork — or just an idea. We confirm specs within 12 hours." },
      { n: "02", t: "Get Your Quote", d: "A detailed quotation with pricing, MOQ, and lead time. No hidden costs." },
      { n: "03", t: "Approve the Sample", d: "Physical pre-production sample in 7 days for your final approval." },
      { n: "04", t: "Bulk Production", d: "15-20 days production with weekly photo/video progress updates and final QC." }
    ],
    ctaTitle: "Build Your Brand on Our Factory",
    ctaDesc: "Tell us about your project — get a quote within 12 hours and a sample in 7 days.",
    ctaPrimary: "Request Factory Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "OEM · ODM · Marca privada",
      h1Pre: "Su ",
      h1Highlight: "fabricante de gorras OEM",
      h1Post: " en China",
      subtitle: "Del boceto al envío — una fábrica integral detrás de más de 300 marcas en más de 50 países desde 2014. Verificados por SGS, control de calidad AQL 2.5, muestras en 7 días.",
      pills: ["5M+ gorras al año", "100+ máquinas de bordado", "SGS · CE · REACH", "Desde 2014"]
    },
    capabilitiesTitle: "Capacidades de la fábrica",
    capabilities: [
      { title: "Capacidad de producción", desc: "50,000 m² de planta, más de 200 costureros especializados y más de 100 máquinas de bordado japonesas Barudan. La producción anual supera los 5 millones de gorras, con líneas de producción dedicadas para snapbacks, gorras de 5 paneles, gorras trucker y beanies." },
      { title: "Certificaciones y cumplimiento", desc: "Verificación de fábrica por SGS, certificación de producto CE y pleno cumplimiento de REACH y RoHS para el mercado europeo. Nuestro sistema de calidad sigue un protocolo de inspección de 5 etapas con AQL 2.5 en cada pedido." },
      { title: "Servicio OEM / ODM", desc: "Envíenos bocetos, fichas técnicas o un producto de referencia y nuestro equipo de diseño interno lo convierte en archivos listos para producción. Nos encargamos del digitalizado del bordado, la igualación de colores y la ingeniería de su estilo exacto de gorra." },
      { title: "Proceso de muestra y aprobación", desc: "Muestras físicas de preproducción en 7 días. Las tarifas de muestra van de $50-100, incluyen el mensajero y se acreditan por completo contra su pedido en masa, por lo que probar un nuevo estilo es de bajo riesgo para socios nuevos." },
      { title: "Control de calidad", desc: "Cada etapa de producción se documenta con fotos y videos: verificación de materia prima, precisión del bordado, integridad de las costuras, inspección final pieza por pieza y auditoría de empaque antes del envío." },
      { title: "Envíos globales", desc: "Enviamos a más de 50 países por DHL, FedEx y UPS (5-8 días en express aéreo) o por flete marítimo (25-35 días). Términos FOB o CIF disponibles. Más de 300 marcas en Norteamérica, Europa y Australia producen con nosotros." }
    ],
    stepsTitle: "Cómo funciona el OEM con nosotros",
    steps: [
      { n: "01", t: "Envíe su brief", d: "Estilos, cantidades, diseños o solo una idea. Confirmamos las especificaciones en 12 horas." },
      { n: "02", t: "Reciba su cotización", d: "Una cotización detallada con precios, cantidad mínima de pedido (MOQ) y plazo de entrega. Sin costos ocultos." },
      { n: "03", t: "Apruebe la muestra", d: "Muestra física de preproducción en 7 días para su aprobación final." },
      { n: "04", t: "Producción en masa", d: "Producción de 15-20 días con avances semanales en fotos y videos y control de calidad final." }
    ],
    ctaTitle: "Construya su marca sobre nuestra fábrica",
    ctaDesc: "Cuéntenos sobre su proyecto — reciba una cotización en 12 horas y una muestra en 7 días.",
    ctaPrimary: "Solicite cotización de fábrica",
    ctaSecondary: "Ver catálogo completo"
  }
};

export default function OemPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "OEM Hat Manufacturer in China — Private Label Hat Factory Since 2014",
    "description": "Full-service OEM/ODM hat manufacturer: 50,000sqm factory, 100+ embroidery machines, SGS/CE/REACH certified, AQL 2.5 QC, samples in 7 days. Serving 300+ brands worldwide.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
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
            <img src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href={`/${lang}/#catalog`} className="hover:text-black transition">Products</Link>
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

      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" alt="JUNYANG" className="h-16 w-auto object-contain mb-4" />
            <p className="text-sm mt-3 leading-relaxed">Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory since 2014.</p>
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
          <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
