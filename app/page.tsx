import { HatCatalog } from "./components/HatCatalog";
import { InquiryForm } from "./components/InquiryForm";
const FAQS = [
  { q: "What is your Minimum Order Quantity (MOQ) for custom hats?", a: "Our standard MOQ for fully customized hats with embroidery is 100 pieces per style/color. We also support smaller trial orders for white-label samples." },
  { q: "Do you provide OEM and ODM manufacturing services?", a: "Yes, we are a full-service OEM/ODM hat factory. We can manufacture hats based on your tech packs, design files, or physically replicate physical samples." },
  { q: "What custom embroidery options do you offer?", a: "We offer 3D puff embroidery, flat embroidery, woven patches, leather patches, and screen printing to match your brand's unique aesthetic." },
  { q: "How long does production and shipping take?", a: "Sample production typically takes 7-10 days. Bulk manufacturing takes 20-25 days depending on complexity, followed by air or sea shipping (usually 5-12 days via air)." }
];
export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } }))
  };
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-yellow-400 font-semibold tracking-widest uppercase text-sm">Professional Hat Manufacturer</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 tracking-tight">Premium Custom Hats Wholesale & OEM Factory</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Your trusted global manufacturing partner for high-quality custom embroidery caps, trucker hats, and beanies. Low MOQ, factory-direct pricing.</p>
          <div className="flex justify-center gap-4">
            <a href="#inquiry" className="bg-white text-black px-8 py-3 font-semibold rounded-full hover:bg-gray-200 transition">Get Free Quote</a>
            <a href="#catalog" className="border border-white text-white px-8 py-3 font-semibold rounded-full hover:bg-white/10 transition">View Catalog</a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl font-bold text-black">Low MOQ</p><p className="text-sm text-gray-500">100 Pcs to Start</p></div>
          <div><p className="text-3xl font-bold text-black">OEM/ODM</p><p className="text-sm text-gray-500">Full Customization</p></div>
          <div><p className="text-3xl font-bold text-black">3D Embroidery</p><p className="text-sm text-gray-500">Premium Quality</p></div>
          <div><p className="text-3xl font-bold text-black">Global Shipping</p><p className="text-sm text-gray-500">Fast Delivery</p></div>
        </div>
      </section>
      <section id="catalog" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our B2B Custom Hat Collection</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Discover our popular customizable headwear styles. Available for custom embroidery, custom labeling, and bulk production.</p>
        </div>
        <HatCatalog />
      </section>
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-8">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-black">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="inquiry" className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Request Wholesale Pricing & Samples</h2>
          <p className="text-gray-600 text-center mb-12">Submit your customization requirements and our hat specialists will reply within 12 hours with pricing and digital mockups.</p>
          <InquiryForm />
        </div>
      </section>
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 text-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-white font-bold mb-2">BD Hats Manufacturing Co., Ltd.</p>
          <p className="text-sm mb-6">Premium Headwear OEM/ODM Factory Supplier</p>
          <p className="text-xs">© 2026 BD HATS. All rights reserved. Registered under bdjunyang.com.</p>
        </div>
      </footer>
    </main>
  );
}
