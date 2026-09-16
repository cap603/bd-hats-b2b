"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { COMPARISON_LINKS } from "../../lib/comparison-links";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";

const CONTENT = {
  en: {
    hero: {
      badge: "Mesh Back Caps · Wholesale",
      h1Pre: "Custom ",
      h1Highlight: "Trucker Hats",
      h1Post: ", Wholesale from the Factory",
      subtitle: "Foam fronts, breathable mesh backs, and your logo done right — custom trucker hats for promo, beverage, and outdoor brands, made in our factory.",
      pills: ["From $3.50 FOB", "MOQ 200 Pcs", "15-20 Day Production", "SGS Verified"]
    },
    sections: [
      {
        title: "What Makes a Trucker Hat",
        desc: "A trucker hat pairs a structured foam front panel with breathable mesh back panels — giving it that classic, instantly recognizable silhouette. Originally a promotional giveaway for farmers and truckers, it is now a staple for beverage brands, outdoor gear labels, and streetwear drops. The foam front creates a slightly puffed, casual crown that sits lighter than a rigid baseball cap."
      },
      {
        title: "Customization Options",
        desc: "The foam front panel is perfect for embroidery, and the mesh back takes screen printing cleanly. We offer flat embroidery, 3D puff embroidery, woven patches, and printed logos — placed on the front, side panels, or back. Add a custom under-visor print, internal sweatband label, or a contrast-colored brim to make your trucker stand out on the shelf."
      },
      {
        title: "Materials & Colors",
        desc: "Choose between solid polyester mesh, two-tone mesh, or performance mesh back panels, paired with 100% cotton twill or nylon foam fronts. We stock over 30 colors and match any Pantone reference. Mesh density options range from standard ventilation to ultra-breathable performance mesh for sports programs."
      },
      {
        title: "Pricing & Lead Time",
        desc: "Custom trucker hats start from $3.50 FOB for basic two-tone programs and range up to $7.00 for premium 3D puff + patch combinations. Standard MOQ is 200 pieces per style and color, with discounts from 500 pcs. Sample production takes 7 days; bulk production 15-20 days."
      }
    ],
    rangeTitle: "Browse Our Cap Range",
    ctaTitle: "Launch Your Trucker Program",
    ctaDesc: "Send us your artwork — get a factory quote within 12 hours and a physical sample in 7 days.",
    ctaPrimary: "Request Factory Quote",
    ctaSecondary: "Browse Full Catalog"
  },
  es: {
    hero: {
      badge: "Gorras con malla atrás · Al por mayor",
      h1Pre: "",
      h1Highlight: "Gorras trucker personalizadas",
      h1Post: ", al por mayor directo de fábrica",
      subtitle: "Frentes de espuma, espaldas de malla transpirable y su logo bien hecho — gorras trucker personalizadas para marcas de promocionales, bebidas y actividades al aire libre, fabricadas en nuestra fábrica.",
      pills: ["Desde $3.50 FOB", "MOQ 200 pzs", "Producción en 15-20 días", "Verificado por SGS"]
    },
    sections: [
      {
        title: "Qué hace única a una gorra trucker",
        desc: "Una gorra trucker combina un panel frontal estructurado de espuma con paneles traseros de malla transpirable, lo que le da esa silueta clásica e inconfundible. Originalmente un regalo promocional para agricultores y camioneros, hoy es un básico para marcas de bebidas, etiquetas de equipo para actividades al aire libre y lanzamientos de streetwear. El frente de espuma crea una corona sin estructura, ligeramente abultada e informal, que se siente más ligera que una gorra de béisbol rígida."
      },
      {
        title: "Opciones de personalización",
        desc: "El panel frontal de espuma es perfecto para el bordado, y la parte trasera de malla recibe limpiamente la serigrafía. Ofrecemos bordado plano, bordado 3D puff, parches tejidos y logos impresos, colocados en el frente, los paneles laterales o la parte trasera. Agregue una impresión personalizada debajo de la visera, una etiqueta interna para la banda del sudor o una visera en color de contraste para que su trucker destaque en el estante."
      },
      {
        title: "Materiales y colores",
        desc: "Elija entre malla de poliéster sólida, malla bicolor o paneles traseros de malla de alto rendimiento, combinados con frentes de espuma de sarga 100% algodón o nailon. Tenemos más de 30 colores en stock e igualamos cualquier referencia Pantone. Las opciones de densidad de malla van desde la ventilación estándar hasta la malla de alto rendimiento ultratranspirable para programas deportivos."
      },
      {
        title: "Precios y plazo de entrega",
        desc: "Las gorras trucker personalizadas comienzan en $3.50 FOB para programas bicolor básicos y llegan hasta $7.00 para combinaciones premium de bordado 3D puff + parche. El MOQ estándar es de 200 piezas por estilo y color, con descuentos desde 500 pzs. La producción de muestras toma 7 días; la producción en masa, 15-20 días."
      }
    ],
    rangeTitle: "Explore nuestra gama de gorras",
    ctaTitle: "Lance su programa de gorras trucker",
    ctaDesc: "Envíenos su diseño — reciba una cotización de fábrica en 12 horas y una muestra física en 7 días.",
    ctaPrimary: "Solicite cotización de fábrica",
    ctaSecondary: "Ver catálogo completo"
  }
};

const RELATED = [
  { href: "/product/breathable-custom-embroidered-6-panel", name: "Breathable Custom Embroidered 6 Panel", img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png" },
  { href: "/product/outdoor-performance-5-panel-cap", name: "Outdoor Performance 5 Panel Cap", img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg" },
  { href: "/product/ladies-plain-blank-cotton-sports-cap", name: "Ladies Plain Blank Cotton Sports Cap", img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png" }
];

export default function TruckerPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Custom Trucker Hats Wholesale — Mesh Back Caps Factory Direct",
    "description": "Wholesale custom trucker hats: foam front, mesh back, embroidery and printing options, materials, pricing and MOQ from a Chinese factory.",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "datePublished": "2026-08-25",
    "dateModified": "2026-08-25",
    "mainEntityOfPage": "https://bdjunyang.com/custom-trucker-hats"
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
            <NavProductsMenu />
            <Link href={`/${lang}/about`} className="hover:text-black transition">About</Link>
            <Link href={`/${lang}/guide`} className="hover:text-black transition">Guide</Link>
            <NavCompareMenu />
            <Link href={`/${lang}/#inquiry`} className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href={`/${lang}/#inquiry`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Trucker Hats" }]} />

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
          {c.sections.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="font-black text-xl text-black mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-black tracking-tight mb-10">{c.rangeTitle}</h2>
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
