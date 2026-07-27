"use client";

import { ArrowRight } from "lucide-react";

const TIMELINE = [
  { year: "2014", title: "Founded in Baoding", desc: "Started with 15 tailors and 5 embroidery machines in a small workshop, specializing in custom baseball caps for local sportswear brands." },
  { year: "2016", title: "First Export Order", desc: "Shipped our first container to a US streetwear brand. Expanded to 50 staff and invested in Japanese Barudan embroidery machines." },
  { year: "2018", title: "SGS & CE Certified", desc: "Achieved SGS factory verification and CE product certification. Entered European market with REACH & RoHS compliance." },
  { year: "2020", title: "50,000sqm Facility", desc: "Moved to a modern 50,000sqm factory. Installed 100+ Barudan machines. Reached 5M+ caps annual capacity." },
  { year: "2022", title: "Alibaba Gold Supplier", desc: "Earned Alibaba Gold Supplier status. Launched 3D digital mockup service, delivering 1,000+ designs to global brands." },
  { year: "2026", title: "300+ Global Brands", desc: "Now serving 300+ brands across 50+ countries. North America accounts for 70% of our production." }
];

const TEAM = [
  { role: "Sales Director", name: "Sales Team", desc: "Your dedicated B2B specialist — fluent in English, ready to quote within 12 hours. Handles all inquiries from initial contact to final delivery.", emoji: "💼" },
  { role: "Head of Design", name: "Design Team", desc: "Specializes in 3D embroidery digitizing and mockup rendering. Turns sketches, logos, or just an idea into a production-ready design file.", emoji: "🎨" },
  { role: "QC Manager", name: "QC Team", desc: "Leads our 5-stage AQL 2.5 inspection protocol. Every single cap is piece-by-piece checked before leaving the factory floor.", emoji: "🔍" },
  { role: "Production Manager", name: "Production Team", desc: "Oversees 200+ tailors and 100+ Japanese embroidery machines. Ensures on-time delivery without compromising quality.", emoji: "🧵" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <img
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"
              alt="JUNYANG Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">Baoding Junyang Hat Factory</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="/#advantages" className="hover:text-black transition">Advantages</a>
            <a href="/#factory" className="hover:text-black transition">Our Factory</a>
            <a href="/#catalog" className="hover:text-black transition">Products</a>
            <a href="/about" className="text-black border-b-2 border-black pb-1">About</a>
            <a href="/#inquiry" className="hover:text-black transition">Inquiry</a>
          </nav>
          <a
            href="/#inquiry"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition"
          >
            Get Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">Est. 2014 · Baoding, China</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            The Hat Factory Behind <span className="text-yellow-400">300+ Brands</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From a 15-person workshop to a 50,000sqm facility with 200+ tailors and 100+ Japanese embroidery machines. This is our story.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To make premium custom headwear accessible to brands of all sizes. We believe every streetwear startup, sports team, and corporate brand deserves factory-direct quality without the middleman markup. That's why we keep our MOQ at 200 pieces — so you can test, launch, and scale without risk.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2">From Workshop to Global Factory</h2>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-px" />

            <div className="space-y-16">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-3 h-3 bg-black rounded-full border-4 border-gray-50 z-10" />

                  {/* Year */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="text-4xl md:text-5xl font-black text-black tracking-tight">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">Meet the People Behind Your Caps</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">Our Core Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
              Every order is personally overseen by dedicated specialists — from design to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm border border-gray-100">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-black mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-600 mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Start Your Custom Hat Project?</h2>
          <p className="text-gray-400 text-lg mb-8">Get a free 3D mockup and factory quote within 12 hours.</p>
          <a
            href="/#inquiry"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition"
          >
            Request Factory Quote <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img
              src="https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"
              alt="JUNYANG Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">
              Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory specializing in OEM/ODM since 2014.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/#catalog" className="hover:text-white">Products</a></li>
                <li><a href="/#inquiry" className="hover:text-white">Request Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">WhatsApp: +86 15933930830</li>
                <li className="text-gray-400">Email: admin@bdjunyang.com</li>
                <li className="text-gray-400">Office: Baoding, Hebei, China</li>
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
