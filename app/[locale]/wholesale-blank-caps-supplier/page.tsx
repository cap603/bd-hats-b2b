"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";

const FEATURES = [
  {
    title: "No-Logo Pricing, Factory Direct",
    desc: "Blank caps skip embroidery, patches and label costs — which is why they are the cheapest way into a cap program. You buy the shell from us and decorate locally, or we decorate for you later. Pricing starts at $3.50 per unit FOB.",
  },
  {
    title: "50+ Stock Colors",
    desc: "Black, navy, white, khaki, olive, burgundy, forest, royal and more — all held in 100% cotton twill 108*56. Stock colors ship fastest. Custom Pantone TPX colors are also available with a small dyeing MOQ.",
  },
  {
    title: "Neutral or Branded Inner Labels",
    desc: "Blank caps usually need a tamper-proof inner label so your buyers never see another brand. We supply neutral grey labels as standard, or print your own brand name on the sweatband at no extra tooling cost.",
  },
  {
    title: "Structures & Panels",
    desc: "5-panel, 6-panel, structured and unstructured, low-profile and high-profile — plus trucker foam fronts, beanies and bucket hats. Every shell is available blank so you can build one consistent line across styles.",
  },
  {
    title: "Closures",
    desc: "Plastic snapback, metal snapback, self-fabric strap with brass slide, velcro, or elastic flexfit bands. Mixed closures on the same order are fine — we keep them as separate SKUs for your inventory.",
  },
  {
    title: "Decoration-Ready Quality",
    desc: "Blank does not mean cheap. All caps pass the same 5-stage AQL 2.5 inspection: fabric check, panel symmetricity, stitching integrity, thread trimming and packing audit. Flat brims stay flat after shipping.",
  },
];

const SPECS = [
  { k: "Fabric", v: "100% cotton twill 108*56 · brushed cotton · canvas" },
  { k: "Panels", v: "5-panel · 6-panel · unstructured · trucker" },
  { k: "Colors", v: "50+ stock colors · Pantone TPX matching on request" },
  { k: "Closure", v: "Plastic / metal snapback · strapback · velcro · elastic" },
  { k: "MOQ", v: "200 pcs per style / color" },
  { k: "Pricing", v: "$3.50 – $7.00 per unit FOB" },
  { k: "Lead time", v: "Samples 7 days · bulk 15-20 days" },
  { k: "Packing", v: "25 pcs / polybag / inner box · export cartons" },
];

export default function BlankCapsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wholesale Blank Caps Supplier — Plain Hat Manufacturer China",
    description:
      "Bulk blank caps direct from the factory: 50+ stock colors, 100% cotton twill, no-logo pricing from $3.50 FOB, MOQ 200pcs, 7-day samples.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/wholesale-blank-caps-supplier",
  };

  return (
    <LandingShell
      crumb="Wholesale Blank Caps"
      badge="Blank Shells · Ready to Decorate"
      title="Wholesale"
      accent="Blank Caps"
      subtitle="Plain, undecorated caps in 50+ stock colors — the lowest-cost way to start a hat line. Ship blank or let us decorate later."
      pills={["From $3.50 FOB", "MOQ 200 Pcs", "50+ Stock Colors", "7-Day Samples"]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">
            Why Buy Blank Caps From the Factory
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Dealers, decorators and private-label brands buy blanks for one reason: the shell is cheap, and the
            decoration happens on your side. Here is what we control for you.
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Blank Cap Specification Sheet
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {SPECS.map((s, i) => (
                  <tr key={s.k} className={i % 2 ? "bg-gray-50/60" : ""}>
                    <th className="text-left p-4 font-black text-black w-1/3 align-top">{s.k}</th>
                    <td className="p-4 text-gray-600">{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Buying for screen printing? Ask for a flat-brim 6-panel in 100% cotton — print holds better on cotton twill
            than on polyester-mesh truckers.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            How Blank Orders Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">01</p>
              <h3 className="font-black text-black mb-2">Pick shells &amp; colors</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tell us the styles and colors — or order a color card with physical fabric swatches before committing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">02</p>
              <h3 className="font-black text-black mb-2">Confirm the sample</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We send one blank sample per style in 7 days so you can test decoration, fit and shrinkage first.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-black text-yellow-500 mb-3">03</p>
              <h3 className="font-black text-black mb-2">Bulk &amp; ship</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                15-20 days production, then air express (5-8 days) or sea freight. Packing list and QC photos before
                dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Blank &amp; Ready-to-Decorate Styles
          </h2>
          <ProductLinks
            items={[
              {
                href: "/product/ladies-plain-blank-cotton-sports-cap",
                name: "Ladies Plain Blank Cotton Sports Cap",
                img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
                note: "Feminine fit, fine cotton twill",
              },
              {
                href: "/product/structured-multi-color-baseball-cap",
                name: "Structured Multi-Color Baseball Cap",
                img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
                note: "High-profile, 30+ colors",
              },
              {
                href: "/product/breathable-custom-embroidered-6-panel",
                name: "Breathable Custom Embroidered 6 Panel",
                img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
                note: "Ventilated sports profile",
              },
            ]}
          />
        </div>
      </section>
    </LandingShell>
  );
}
