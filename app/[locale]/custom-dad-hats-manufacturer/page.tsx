"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";

const FEATURES = [
  {
    title: "Unstructured 6-Panel Construction",
    desc: "The defining trait of a dad hat is a soft, unstructured crown that collapses flat when not worn. We build ours with lightweight buckram-free front panels and a pre-curved visor, so the cap keeps a relaxed profile but still holds its shape on the shelf.",
  },
  {
    title: "Washed & Vintage Finishes",
    desc: "Acid wash, garment dye, enzyme wash, and stone wash are all done in-house. Each treatment level is sampled first — you choose how heavy the fading, fraying, and thread contrast should be before bulk production starts.",
  },
  {
    title: "Hardware & Closures",
    desc: "Antique brass slide buckles, self-fabric strapbacks, metal snapbacks, or plastic snaps. We match finishes (brass, nickel, gunmetal, matte black) to your brand palette and can laser-engrave your mark on the buckle.",
  },
  {
    title: "Decoration Options",
    desc: "Flat embroidery, vintage washed-thread embroidery, 3D puff, woven patches, leather patches, and leather back straps. Small left-side hit or full front panel artwork — our digitizing team handles logos as small as 8mm.",
  },
  {
    title: "Fabric Choices",
    desc: "100% cotton twill (108*56), washed heavy cotton, brushed cotton, cotton-canvas blends, corduroy, and cotton-linen. Over 50 colors are stocked for fast turnaround; Pantone TPX matching is available on any order.",
  },
  {
    title: "Small-Brand Friendly",
    desc: "MOQ is 200 pieces per style and color — low enough for first-season streetwear brands. Volume discounts start at 500, 1,000 and 5,000 pieces, and your sample fee is credited back against the bulk order.",
  },
];

const COMPARE = [
  { style: "Dad hat (unstructured)", shape: "Soft crown, collapses flat", brim: "Curved, slightly shorter", fit: "Lifestyle, retail, casual brands" },
  { style: "Snapback (structured)", shape: "Rigid tall crown", brim: "Flat or curved", fit: "Streetwear, sports, hype drops" },
  { style: "Trucker (foam + mesh)", shape: "Structured foam front", brim: "Curved", fit: "Promo, beverage, outdoor brands" },
  { style: "5-panel (A-frame)", shape: "Wide flat front panel", brim: "Flat", fit: "Bold logos, camp-style caps" },
];

export default function DadHatsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Dad Hats Manufacturer — Wholesale Unstructured Caps",
    description:
      "Factory-direct custom dad hats: unstructured 6-panel construction, acid wash and vintage finishes, leather patches. MOQ 200pcs, samples in 7 days.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/custom-dad-hats-manufacturer",
  };

  return (
    <LandingShell
      crumb="Custom Dad Hats"
      badge="Unstructured Caps · Factory Direct"
      title="Custom"
      accent="Dad Hats"
      subtitle="Soft unstructured crowns, washed finishes and clean branding — dad hats built for lifestyle and streetwear brands, straight from our factory."
      pills={["MOQ 200 Pcs", "From $3.50 FOB", "7-Day Samples", "50+ Stock Colors"]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">
            What We Build Into Every Dad Hat
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Dad hats live or die on their softness and finish. These are the six things buyers ask about most — and
            how we handle each one.
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
            Choosing the Right Silhouette
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-black">Style</th>
                  <th className="text-left p-4 font-black">Crown</th>
                  <th className="text-left p-4 font-black">Brim</th>
                  <th className="text-left p-4 font-black">Best for</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((c) => (
                  <tr key={c.style} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{c.style}</td>
                    <td className="p-4 text-gray-600">{c.shape}</td>
                    <td className="p-4 text-gray-600">{c.brim}</td>
                    <td className="p-4 text-gray-600">{c.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Not sure which one fits your line? Send us a reference cap or a photo — we will match the construction and
            quote it within 12 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Pricing, MOQ &amp; Lead Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">$3.50 – $7.00</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Per unit, FOB</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">200 Pcs</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">MOQ per style / color</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">7 / 15-20 Days</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Sample / bulk production</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            Final pricing depends on fabric, wash treatment, embroidery coverage and order quantity. Unwashed cotton
            dad hats sit at the low end; heavy acid wash with leather patch and custom packaging sit at the high end.
            Volume discounts apply from 500 pieces. Every quote is itemised with no hidden costs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Dad Hat Styles From Our Catalog
          </h2>
          <ProductLinks
            items={[
              {
                href: "/product/vintage-acid-wash-6-panel-dad-hat",
                name: "Vintage Acid Wash 6 Panel Dad Hat",
                img: "https://s.alicdn.com/@sc04/kf/Hf2141a42b2ed454ca54b221bf447618dD/Wholesale-Acid-Wash-Vintage-6-Panel-Unisex.jpg",
                note: "Unstructured, antique brass buckle",
              },
              {
                href: "/product/personalised-two-tone-a-frame-cap",
                name: "Personalised Two-Tone A-Frame Cap",
                img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
                note: "Contrast styling, cotton canvas",
              },
              {
                href: "/product/structured-multi-color-baseball-cap",
                name: "Structured Multi-Color Baseball Cap",
                img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
                note: "30+ colors, 3D puff ready",
              },
            ]}
          />
        </div>
      </section>
    </LandingShell>
  );
}
