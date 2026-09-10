"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";

const FEATURES = [
  {
    title: "One Unbroken Front Panel",
    desc: "A 5-panel cap has no centre seam across the front, which gives a single flat canvas for your logo. There is no seam tape cutting through artwork, so large 3D puff logos stay perfectly symmetrical — the main reason streetwear brands choose 5-panels over 6-panels.",
  },
  {
    title: "A-Frame & Camper Profiles",
    desc: "We build both the A-frame (mid to high profile, flat brim) and the camper / runner style (lower profile, shorter brim). Profile height, brim length and crown depth are all adjustable to your reference sample.",
  },
  {
    title: "The Ideal 3D Puff Canvas",
    desc: "High-density foam underlay plus a seam-free panel means embroidery can reach 4-6 mm of relief without distortion. We digitise your logo specifically for the curve of the front panel, not as a flat transfer.",
  },
  {
    title: "Fabric Options",
    desc: "108*56 heavy cotton twill, brushed cotton, ripstop nylon, corduroy, canvas and cotton-nylon blends. Contrast crowns, contrast visors and piping are all standard options. Over 50 colors held in stock.",
  },
  {
    title: "Closures & Hardware",
    desc: "Plastic snapback, metal snapback, self-fabric strap with brass slide, plastic buckle, or elastic flexfit. Eyelets can be embroidered, laser-cut or metal-riveted depending on the look you want.",
  },
  {
    title: "Low MOQ for a Structured Cap",
    desc: "MOQ is 200 pieces per style and color — the same as our 6-panels and dad hats. That lets you run several colorways in one order instead of committing your whole budget to a single SKU.",
  },
];

const COMPARE = [
  { aspect: "Front panel", five: "Single panel, no centre seam", six: "Two front panels with centre seam" },
  { aspect: "Logo canvas", five: "Widest — ideal for large 3D puff", six: "Split by seam, better for narrow logos" },
  { aspect: "Shape", five: "Flatter, more angular A-frame", six: "Rounder, taller traditional crown" },
  { aspect: "Typical use", five: "Streetwear, camp caps, branded drops", six: "Sports, corporate, classic retail" },
  { aspect: "MOQ", five: "200 pcs", six: "200 pcs" },
];

export default function FivePanelPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom 5-Panel Caps Manufacturer — Wholesale 5 Panel Hats",
    description:
      "Custom 5-panel caps from the factory: A-frame and camper styles, seamless front panel for 3D puff embroidery, 30+ colors, MOQ 200pcs, samples in 7 days.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-5-panel-caps-manufacturer",
  };

  return (
    <LandingShell
      crumb="Custom 5-Panel Caps"
      badge="5-Panel · A-Frame · Camper"
      title="Custom"
      accent="5-Panel Caps"
      subtitle="Seam-free front panels built for oversized 3D puff logos — A-frame and camper profiles, made to your reference cap."
      pills={["MOQ 200 Pcs", "From $3.50 FOB", "Seam-Free Front", "50+ Colors"]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">
            Built Around the Front Panel
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Every design decision on a 5-panel serves one goal: giving your logo the biggest, cleanest surface
            possible. Here is how we build it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-black text-lg text-black mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            5-Panel or 6-Panel?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-black w-1/4">Aspect</th>
                  <th className="text-left p-4 font-black">5-Panel</th>
                  <th className="text-left p-4 font-black">6-Panel</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((c) => (
                  <tr key={c.aspect} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{c.aspect}</td>
                    <td className="p-4 text-gray-600">{c.five}</td>
                    <td className="p-4 text-gray-600">{c.six}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Still deciding? Send us your logo file — we will tell you honestly which construction will reproduce it
            better, and quote both so you can compare.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Pricing &amp; Production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">$3.50 – $7.00</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Per unit, FOB</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">7 / 15-20 Days</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Sample / bulk</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">AQL 2.5</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">5-Stage QC protocol</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            A plain 5-panel in cotton twill sits at the low end of the range. Adding heavy 3D puff embroidery, contrast
            panels, custom lining and retail packaging moves it toward the top. Digitising, thread colour matching and
            one round of sample revisions are included.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            5-Panel Styles From Our Catalog
          </h2>
          <ProductLinks
            items={[
              {
                href: "/product/custom-3d-embroidered-5-panel-gorras",
                name: "Custom 3D Embroidered 5 Panel Gorras",
                img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
                note: "Best seller, 108*56 cotton twill",
              },
              {
                href: "/product/outdoor-performance-5-panel-cap",
                name: "Outdoor Performance 5 Panel Cap",
                img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
                note: "Lightweight, moisture-wicking",
              },
              {
                href: "/product/two-tone-3d-embroidery-a-frame-cap",
                name: "Two-Tone 3D Embroidery A-Frame Cap",
                img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
                note: "Contrast visor, structured A-frame",
              },
            ]}
          />
        </div>
      </section>
    </LandingShell>
  );
}
