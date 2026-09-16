"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../components/ComparisonShell";

const CONTENT = {
  en: {
    hero: {
      badge: "Wholesale Snapbacks · Factory Direct",
      h1Pre: "Wholesale ",
      h1Highlight: "Snapback Hats",
      h1Post: " — Custom, From the Factory",
      subtitle: "Flat brims, 3D puff embroidery, and buckram-structured fronts — snapbacks built for streetwear and sports brands, shipped direct from our SGS-verified factory.",
      pills: ["From $3.50 FOB", "MOQ 200 Pcs", "15-Day Production", "AQL 2.5 QC"]
    },
    features: [
      {
        title: "Snapback Styles We Manufacture",
        desc: "Flat-brim, curved-brim, high-profile, low-profile and mid-profile snapbacks — all in 6-panel or 5-panel construction. Our snapback range covers streetwear, sports, corporate and workwear programs, with over 30 stocked fabric colors and full Pantone color matching."
      },
      {
        title: "Logo & Embroidery Options",
        desc: "Snapbacks are the #1 canvas for bold branding. We offer high-density 3D puff embroidery, flat embroidery, chenille patches, and combination techniques. Front panel, side panels, and back embroidery all supported — with a professional digitizing service included in your order."
      },
      {
        title: "Structured Front Panels",
        desc: "A true snapback keeps its shape. We build the front two panels with heavy-duty buckram lining so your logo area stays crisp and elevated, order after order. Premium snapback hardware (plastic, metal button, or color-matched) completes the look."
      },
      {
        title: "Pricing & MOQ",
        desc: "Wholesale snapbacks start at $3.50 FOB for standard cotton twill and range up to $7.00 for premium 3D puff programs. Standard MOQ is 200 pieces per style and color — with volume discounts at 500, 1,000 and 5,000+ tiers. Samples are produced in 7 days."
      }
    ],
    modelsTitle: "Popular Snapback Models",
    ctaTitle: "Start Your Snapback Line Today",
    ctaDesc: "Send us your requirements — get a factory quote within 12 hours and a physical sample in 7 days.",
    ctaPrimary: "Request Factory Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "Snapbacks al por mayor · Directo de fábrica",
      h1Pre: "",
      h1Highlight: "Snapbacks al por mayor",
      h1Post: " — personalizados, directo de fábrica",
      subtitle: "Viseras planas, bordado 3D puff y frentes estructurados con buckram — snapbacks hechos para marcas de streetwear y deportivas, enviados directo de nuestra fábrica verificada por SGS.",
      pills: ["Desde $3.50 FOB", "MOQ 200 pzs", "Producción en 15 días", "Control de calidad AQL 2.5"]
    },
    features: [
      {
        title: "Estilos de snapback que fabricamos",
        desc: "Snapbacks de visera plana, visera curva, perfil alto, perfil bajo y perfil medio, todos en construcción de 6 o 5 paneles. Nuestra gama de snapbacks cubre programas de streetwear, deportes, corporativos y ropa de trabajo, con más de 30 colores de tela en stock e igualación completa de colores Pantone."
      },
      {
        title: "Opciones de logo y bordado",
        desc: "Los snapbacks son el lienzo número 1 para el branding audaz. Ofrecemos bordado 3D puff de alta densidad, bordado plano, parches de chenille y técnicas combinadas. Bordado en panel frontal, paneles laterales y parte trasera, con un servicio profesional de digitalizado incluido en su pedido."
      },
      {
        title: "Paneles frontales estructurados",
        desc: "Un verdadero snapback mantiene su forma. Construimos los dos paneles frontales con forro de buckram de alta resistencia para que el área de su logo se mantenga nítida y elevada, pedido tras pedido. Los herrajes premium del snapback (plástico, botón metálico o igualado al color) completan el acabado."
      },
      {
        title: "Precios y MOQ",
        desc: "Los snapbacks al por mayor comienzan en $3.50 FOB para sarga de algodón estándar y llegan hasta $7.00 para programas premium de bordado 3D puff. El MOQ estándar es de 200 piezas por estilo y color, con descuentos por volumen en niveles de 500, 1,000 y 5,000+. Las muestras se producen en 7 días."
      }
    ],
    modelsTitle: "Modelos de snapback populares",
    ctaTitle: "Inicie su línea de snapbacks hoy",
    ctaDesc: "Envíenos sus requisitos — reciba una cotización de fábrica en 12 horas y una muestra física en 7 días.",
    ctaPrimary: "Solicite cotización de fábrica",
    ctaSecondary: "Ver catálogo completo"
  }
};

const RELATED = [
  { href: "/product/structured-multi-color-baseball-cap", name: "Structured Multi-Color Baseball Cap", img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png" },
  { href: "/product/personalised-two-tone-a-frame-cap", name: "Personalised Two-Tone A-Frame Cap", img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg" },
  { href: "/product/custom-3d-embroidered-5-panel-gorras", name: "Custom 3D Embroidered 5 Panel Gorras", img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png" }
];

export default function SnapbacksPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wholesale Snapback Hats from Factory — Custom Snapback Manufacturer",
    "description": "Factory-direct wholesale snapbacks: styles, 3D puff embroidery, buckram structure, pricing and MOQ. SGS verified snapback manufacturer in China.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "datePublished": "2026-08-25",
    "dateModified": "2026-08-25",
    "mainEntityOfPage": "https://bdjunyang.com/wholesale-snapbacks"
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
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wholesale Snapback Hats" }]} />

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
        <div className="max-w-3xl mx-auto space-y-8">
          {c.features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="font-black text-xl text-black mb-3">{f.title}</h2>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-black tracking-tight mb-10">{c.modelsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED.map((p) => (
              <Link key={p.href} href={p.href} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" width="480" height="480" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm text-black group-hover:text-yellow-600 transition">{p.name}</p>
                </div>
              </Link>
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
