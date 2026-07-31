"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SECTIONS = [
  {
    id: "fabrics",
    title: "Hat Fabrics & Materials: Complete Comparison",
    intro: "The fabric you choose determines your cap's look, feel, durability, and cost. Here is a detailed comparison of every material we stock — each available in 30+ Pantone-matched colors.",
    items: [
      {
        name: "Cotton Twill (108×56 — Our Standard)",
        desc: "The industry workhorse. Heavy-weight, tightly woven cotton with a diagonal rib pattern. Durable, breathable, and holds embroidery exceptionally well. This is what 80% of our brand partners choose for baseball caps and snapbacks. Available in brushed (softer, vintage feel) and unbrushed (crisp, structured) finishes.",
        best: "Best for: Baseball caps, snapbacks, dad hats, corporate uniforms"
      },
      {
        name: "Brushed Cotton / Garment-Washed Cotton",
        desc: "Pre-washed cotton twill with a soft, broken-in feel — like your favorite vintage cap. The brushing process raises the surface fibers for a suede-like texture. Ideal for lifestyle and streetwear brands wanting a premium 'worn-in' aesthetic right out of the box.",
        best: "Best for: Dad hats, vintage collections, lifestyle brands"
      },
      {
        name: "Canvas / Duck Canvas",
        desc: "Heavy-duty, plain-weave fabric with a rugged, workwear aesthetic. More textured than twill and extremely durable. Popular for outdoor, workwear, and utility-style caps. Takes embroidery well but has a more casual, raw appearance.",
        best: "Best for: Workwear brands, outdoor gear, rugged lifestyle"
      },
      {
        name: "Polyester / Performance Mesh",
        desc: "Lightweight, moisture-wicking, and quick-drying. Used primarily for sports and athletic caps. The open mesh back panels provide maximum ventilation. Holds screen printing and heat-transfer logos better than embroidery. Available in solid and two-tone mesh combinations.",
        best: "Best for: Sports teams, running caps, golf caps, trucker hats"
      },
      {
        name: "Nylon (Water-Resistant)",
        desc: "Ultra-lightweight and water-resistant. Ideal for outdoor performance and hiking caps. Nylon caps are packable and maintain their shape even after being folded. Takes reflective printing and laser-cut details exceptionally well.",
        best: "Best for: Outdoor/adventure brands, running caps, travel gear"
      },
      {
        name: "Wool / Wool-Blend",
        desc: "Premium, warm fabric with natural temperature regulation. Used primarily for winter caps, beanies, and heritage-style flat caps. Wool-blend baseball caps are a niche premium category popular with golf and heritage menswear brands.",
        best: "Best for: Winter beanies, golf caps, heritage menswear"
      },
      {
        name: "Denim / Chambray",
        desc: "Casual, fashion-forward fabric with a distinctive blue-jean aesthetic. Available in light to dark washes and can be distressed for vintage effects. Pairs well with leather patches and subtle embroidery.",
        best: "Best for: Fashion/streetwear brands, denim collections"
      }
    ]
  },
  {
    id: "closures",
    title: "Back Closure Types Explained",
    intro: "The closure determines how your customer adjusts the fit. Each type sends a different brand signal — from sporty snapback to premium leather strap.",
    items: [
      {
        name: "Plastic Snapback",
        desc: "The most popular closure worldwide. Seven or eight adjustable positions with a firm click mechanism. Affordable, universal fit, and available in color-matched or contrast options. Standard on 90% of baseball caps.",
        best: "One-size-fits-most, sporty look, cost-effective"
      },
      {
        name: "Metal Buckle / Slide Buckle",
        desc: "Premium metal hardware with a sleek, adjustable slide mechanism. Brass, nickel, or gunmetal finishes available. Adds a higher-end feel compared to plastic snapbacks. Popular for dad hats and premium lifestyle caps.",
        best: "Premium feel, vintage aesthetic, unlimited adjustment"
      },
      {
        name: "Velcro / Hook-and-Loop",
        desc: "Fast, one-handed adjustment. Popular for trucker hats and promotional caps. Clean, minimalist look with no visible hardware. Available in matching or contrast colors.",
        best: "Quick adjustment, clean look, budget-friendly"
      },
      {
        name: "Fabric Strap with Metal Slide",
        desc: "A fabric strap (cotton or nylon) with a small metal D-ring or slide adjuster. Provides a tailored fit and pairs well with unstructured and women's caps. Soft, comfortable, and minimal.",
        best: "Tailored fit, lightweight feel, feminine profile"
      },
      {
        name: "Leather Strap with Brass Buckle",
        desc: "Genuine or faux leather strap with antique brass buckle. The most premium closure option. Adds substantial perceived value. Popular for golf caps, premium dad hats, and heritage collections.",
        best: "Luxury feel, heritage aesthetic, high perceived value"
      },
      {
        name: "Fitted / No Closure",
        desc: "No adjustment mechanism — the cap is sized to a specific head circumference. Creates the cleanest look with no back hardware. Standard for professional sports leagues. Available in sizes S/M, M/L, L/XL.",
        best: "Professional look, no hardware, exact sizing required"
      }
    ]
  },
  {
    id: "panels",
    title: "Panel Construction: 5-Panel vs 6-Panel",
    intro: "The number of panels determines your cap's silhouette, embroidery canvas size, and overall style. This is a fundamental design decision.",
    items: [
      {
        name: "5-Panel Construction",
        desc: "No center front seam — provides a clean, uninterrupted front canvas ideal for large logo embroidery. The A-frame or camper silhouette is trendy in streetwear and outdoor markets. Typically has a slightly lower profile.",
        best: "Large logo canvas, streetwear, outdoor/camper style"
      },
      {
        name: "6-Panel Construction",
        desc: "The classic baseball cap construction with a center front seam. More structured and traditional. The center seam adds visual detail and structure. Universal appeal across corporate, sports, and casual markets.",
        best: "Traditional baseball cap, corporate, sports, universal appeal"
      },
      {
        name: "A-Frame / High-Profile",
        desc: "An elevated 5-panel design with a taller, more squared-off front crown. Creates maximum visual impact for bold branding. Very popular in Australian and US streetwear scenes.",
        best: "Bold branding, high visibility, streetwear"
      }
    ]
  }
];

export default function MaterialsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Custom Hat Materials, Fabrics, Closures & Panel Construction",
    "description": "Expert comparison of hat fabrics (cotton twill, canvas, polyester, wool, nylon, denim), back closure types (snapback, buckle, velcro, fitted, leather strap), and panel construction (5-panel vs 6-panel).",
    "author": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "publisher": { "@type": "Organization", "name": "Baoding Junyang Hat Manufacturing Co., Ltd." },
    "datePublished": "2026-07-31",
    "dateModified": "2026-07-31",
    "mainEntityOfPage": "https://b2b.bdjunyang.com/materials"
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png" alt="JUNYANG" className="h-12 w-auto object-contain" />
            <span className="hidden lg:block text-xl font-black text-black">JUNYANG</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/#catalog" className="hover:text-black transition">Products</Link>
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/guide" className="hover:text-black transition">Guide</Link>
            <Link href="/materials" className="text-black border-b-2 border-black pb-1">Materials</Link>
            <Link href="/#inquiry" className="hover:text-black transition">Inquiry</Link>
          </nav>
          <Link href="/#inquiry" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm">Get Quote</Link>
        </div>
      </header>

      <section className="bg-black text-white py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">Production Knowledge</span>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            Hat Materials, Fabrics & <span className="text-yellow-400">Custom Options</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cotton twill, canvas, polyester, nylon, wool — plus snapback vs buckle vs fitted closures. Make informed decisions for your custom cap order.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-black mb-6 uppercase tracking-wider">On This Page</h2>
          <div className="flex flex-wrap gap-3">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="bg-white px-5 py-3 rounded-xl border border-gray-200 hover:border-black transition text-sm font-bold text-gray-700 hover:text-black">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-4 scroll-mt-20 border-b border-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">{section.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">{section.intro}</p>

            <div className="space-y-6">
              {section.items.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h3 className="font-black text-lg text-black mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full">{item.best}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Choose Your Materials?</h2>
          <p className="text-gray-400 text-lg mb-8">Tell us your fabric and closure preferences — get a free 3D mockup with your exact specifications.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#inquiry" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              Request Factory Quote <ArrowRight size={20} />
            </Link>
            <Link href="/#catalog" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition border border-white/20">
              Browse Products
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
                <li><Link href="/guide" className="hover:text-white">B2B Manufacturing Guide</Link></li>
                <li><Link href="/materials" className="hover:text-white">Materials & Fabrics Guide</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing & Shipping</Link></li>
                <li><Link href="/about" className="hover:text-white">About Our Factory</Link></li>
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
