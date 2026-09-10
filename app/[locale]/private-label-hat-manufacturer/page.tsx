"use client";

import { LandingShell, ProductLinks } from "../../components/LandingShell";

const BRANDING = [
  {
    title: "Woven & Printed Labels",
    desc: "Your brand name woven into the inner seam tape or printed on the sweatband — the single most important anti-resale marker for private label. We produce the labels in-house to your artwork and sew them during assembly, not after.",
  },
  {
    title: "Care & Content Labels",
    desc: "Fabric composition, washing instructions, origin marking and your company details. We format them to US, EU and Australian retail requirements so your caps clear customs without re-labelling.",
  },
  {
    title: "Hang Tags & Price Tickets",
    desc: "Custom card stock, spot UV, matte or kraft finishes, plus string, plastic barb or loop attachment. Standard retail size is 50 x 90 mm — larger tags and folded booklets are also available.",
  },
  {
    title: "Packaging & Poly Bags",
    desc: "Individual poly bags with or without suffocation warnings, header cards, sticker closure, or fully recyclable paper bags for EU markets. Custom printed retail boxes on orders above 1,000 pieces.",
  },
  {
    title: "Barcode & FNSKU Support",
    desc: "We print and apply UPC, EAN or Amazon FNSKU labels at the factory, so your shipment arrives scan-ready for retail or FBA. Just send the label file and the mapping list.",
  },
  {
    title: "Under-Visor & Inner Prints",
    desc: "Custom under-visor prints, inner crown lining prints and size tags help a private label cap feel genuinely own-brand. Small details, high perceived value at retail.",
  },
];

const MODELS = [
  {
    model: "Private label",
    design: "You own the design and brand",
    factory: "We build your existing specs",
    moq: "200 pcs",
    best: "Retail brands scaling a proven style",
  },
  {
    model: "OEM",
    design: "You supply sketches or a reference cap",
    factory: "We engineer the pattern and sample it",
    moq: "200 pcs",
    best: "Brands with a defined look but no factory files",
  },
  {
    model: "ODM",
    design: "You pick from our developed styles",
    factory: "We brand and adjust it for you",
    moq: "200 pcs",
    best: "First-time sellers testing the market",
  },
];

const CALL_ORDER_STEPS = [
  { n: "01", t: "Send your brand kit", d: "Logo files (AI/PDF), label artwork, packaging references and target quantity. We reply with questions and a quote within 12 hours." },
  { n: "02", t: "Approve the branded sample", d: "In 7 days you receive a physical cap with your label, hang tag and packaging applied — the whole brand experience, not just the cap." },
  { n: "03", t: "Production with photo updates", d: "15-20 days of bulk production. We send weekly photos of embroidery, label sewing and packing so you can approve remotely." },
  { n: "04", t: "Retail-ready shipment", d: "Barcodes applied, cartons labelled per size and color, packing list issued. Air express 5-8 days or sea freight 25-35 days." },
];

export default function PrivateLabelPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Private Label Hat Manufacturer — Custom Branded Caps China",
    description:
      "Private label hat manufacturing: woven labels, care labels, hang tags, retail packaging and barcode application. MOQ 200pcs, samples in 7 days, SGS verified factory.",
    author: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    publisher: { "@type": "Organization", name: "Baoding Junyang Hat Manufacturing Co., Ltd." },
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://bdjunyang.com/private-label-hat-manufacturer",
  };

  return (
    <LandingShell
      crumb="Private Label Hats"
      badge="Private Label · Your Brand Only"
      title="Private"
      accent="Label Hat Manufacturing"
      subtitle="Your brand on the label, the sweatband, the hang tag and the box — with no trace of ours. Full private label service from 200 pieces."
      pills={["MOQ 200 Pcs", "Your Labels & Tags", "Barcode Ready", "7-Day Samples"]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-center">
            The Nine Branding Points We Control
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            A private label cap is judged on details a customer only notices when they are missing. These are the
            elements we produce and apply at the factory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRANDING.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-black text-lg text-black mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Private Label vs OEM vs ODM
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-black">Model</th>
                  <th className="text-left p-4 font-black">Who designs</th>
                  <th className="text-left p-4 font-black">What we do</th>
                  <th className="text-left p-4 font-black">Best for</th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr key={m.model} className="border-t border-gray-100">
                    <td className="p-4 font-bold text-black">{m.model}</td>
                    <td className="p-4 text-gray-600">{m.design}</td>
                    <td className="p-4 text-gray-600">{m.factory}</td>
                    <td className="p-4 text-gray-600">{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            All three run at the same MOQ of 200 pieces per style and color, so you can start with ODM, then move to
            private label once a style proves itself.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            From Brand Kit to Retail Shelf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CALL_ORDER_STEPS.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                <p className="text-3xl font-black text-yellow-500 mb-3">{s.n}</p>
                <h3 className="font-black text-black mb-2">{s.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">$3.50 – $7.00</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Per unit, FOB</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">200 Pcs</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Per style / color</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-3xl font-black text-black mb-1">No Tooling Fee</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">On labels &amp; tags</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-center">
            Styles Most Often Private Labelled
          </h2>
          <ProductLinks
            items={[
              {
                href: "/product/custom-3d-embroidered-5-panel-gorras",
                name: "Custom 3D Embroidered 5 Panel Gorras",
                img: "https://s.alicdn.com/@sc04/kf/H29fdeb6f4619484b9c599ddf5b497ecfl/Factory-Price-100-cotton-5-Panel-Gorras.png",
                note: "Our most requested private label base",
              },
              {
                href: "/product/breathable-custom-embroidered-6-panel",
                name: "Breathable Custom Embroidered 6 Panel",
                img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
                note: "Sports and activewear programs",
              },
              {
                href: "/product/two-tone-3d-embroidery-a-frame-cap",
                name: "Two-Tone 3D Embroidery A-Frame Cap",
                img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
                note: "Streetwear private label",
              },
            ]}
          />
        </div>
      </section>
    </LandingShell>
  );
}
