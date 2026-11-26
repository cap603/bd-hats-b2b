"use client";

import { ArrowRight, Facebook, Linkedin, ShieldCheck, Factory, Award, Users } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useLang } from "../../lib/i18n";
import { NavCompareMenu } from "../../components/NavCompareMenu";
import { NavProductsMenu } from "../../components/NavProductsMenu";

/**
 * About page copy lives here (en/es) instead of the shared messages JSON so the
 * two retire/redirect locales never render raw keys. de/fr 301 to /en and
 * ja/pt/it inner pages 301 as well — only en and es are live, so those are the
 * only two variants maintained.
 */
const CONTENT = {
  en: {
    nav: { advantages: "Advantages", factory: "Sourcing & Quality", about: "About", inquiry: "Inquiry", getQuote: "Get Quote" },
    crumbHome: "Home",
    crumbAbout: "About Sourcing & Quality",
    heroKicker: "Baoding Junyang Import and Export Trade Co., Ltd. · Est. 2014",
    heroTitlePre: "The Sourcing & Quality Partner Behind",
    heroTitleAccent: "300+ Brands",
    heroSub:
      "Baoding Junyang Import and Export Trade Co., Ltd. (BD Hats / 保定骏阳进出口贸易有限公司) — bridging global streetwear labels, sports brands and corporate buyers with vetted headwear makers in China's premium hat belt since 2014.",
    missionTitle: "Our Mission",
    missionBody:
      "To make premium custom headwear sourcing transparent, reliable and accessible. We act as your single point of responsibility — vetting partner factories, managing sampling, running pre-shipment QC, and handling export documentation so you get direct supply pricing without operational risk.",
    journeyLabel: "Our Journey",
    journeyTitle: "From Regional Sourcing to Global Supply Chain",
    timeline: [
      { year: "2014", title: "Founded in Baoding", desc: "Established in Baoding, Hebei — China's headwear manufacturing heartland — focusing on custom headwear sourcing and export coordination." },
      { year: "2016", title: "First Export Container", desc: "Shipped our first full container to a US streetwear brand. Established dedicated partner factory lines and standardized sampling protocols." },
      { year: "2018", title: "International Standards", desc: "Established standardized QA workflows with multi-stage inspection checkpoints and documented production records." },
      { year: "2020", title: "Supply Chain Network Scaling", desc: "Expanded vetted partner network across specialized production hubs in northern China, covering baseball caps, truckers, beanies and performance activewear." },
      { year: "2022", title: "Global B2B Expansion", desc: "Expanded OEM/ODM project management capabilities, delivering over 1,000 custom designs to global apparel brands with 2h quote turnaround." },
      { year: "2026", title: "300+ Global Brands", desc: "Now trusted by 300+ brands across 50+ countries. North America accounts for 70% of shipments with pre-shipment QC on every order." },
    ],
    capabilitiesLabel: "Sourcing & QC Network",
    capabilitiesTitle: "How Our Supply Network Operates",
    capabilitiesIntro:
      "We match your technical package to the optimal specialized production line, with our in-house QC team inspecting every milestone on-site.",
    capabilities: [
      { title: "Precision Multi-Head Embroidery Lines", desc: "High-speed multi-head computerized embroidery lines handling flat embroidery, high-density 3D puff with EVA underlay, and detailed crests." },
      { title: "Specialized Sewing & Assembly Lines", desc: "Vetted partner lines dedicated by product line — structured 6-panels, vintage enzyme-washed dad hats, breathable truckers, and knit beanies." },
      { title: "Scalable Container Volume", desc: "Flexible capacity scaling from 200-piece starter batches to full 20GP/40HQ container shipments, with optimized carton packing." },
      { title: "Centralized QC & Export Hub", desc: "Independent in-house quality control team conducting pre-shipment inspection, packing verification, and export documentation in Baoding." },
    ],
    complianceLabel: "Compliance & Standards",
    complianceTitle: "Standards We Enforce",
    complianceIntro:
      "All production runs follow documented quality workflows. Third-party testing and inspection can be arranged per order, with reports traveling with your shipment.",
    compliance: [
      { title: "Material Safety Screening", desc: "Raw fabrics, threads and trims are screened for hazardous substances, and chemical-safety test reports can be arranged per order for your target market." },
      { title: "Vetted Partner Factory Network", desc: "Partner manufacturing facilities are selected and reviewed by our sourcing team across quality systems, capacity and social compliance." },
      { title: "Per-Order Testing & Inspection", desc: "Colorfastness, azo-free dye confirmation and other material tests coordinated with accredited third-party laboratories on request." },
    ],
    transpLabel: "Quality Control Protocol",
    transpTitle: "Transparency & Traceability at Every Step",
    transpIntro:
      "We believe buyers deserve complete transparency. You receive direct video and photo milestone updates throughout production.",
    transp: [
      { title: "Milestone photo & video updates at 4 checkpoints", body: "Every order runs against a confirmed schedule. We provide photo and video verification at: ① Fabric cutting and color lot consistency; ② First-panel embroidery precision and density sign-off; ③ Assembly, seam alignment and sweatband attachment; ④ Final ironing, quality inspection and export carton packing." },
      { title: "Pre-shipment quality inspection", body: "Our in-house QC inspectors check caps for embroidery alignment, stitch density, crown shape retention, dimensional tolerances and cleanliness before cartons are sealed. Inspection records are archived per batch." },
      { title: "Testing documentation travels with the shipment", body: "Material test reports (colorfastness, azo-free dyes and other safety tests) are coordinated with accredited third-party labs so your customs clearance and brand compliance teams have the documentation they need before container arrival." },
      { title: "Commercial terms you can rely on", body: "Written itemized FOB quotes delivered within 2 hours. Physical pre-production samples in 7 days (fee 100% credited toward bulk orders ≥500 pcs). Bulk delivery in 15–20 days. Payment via Alibaba Trade Assurance or direct T/T business escrow with full NDA protection." },
    ],
    teamLabel: "Our Core Team",
    teamTitle: "Meet Your Project Team",
    teamSub: "Every order is managed by dedicated specialists — from tech pack engineering to container loading.",
    team: [
      { role: "Senior Headwear Consultant", name: "Eileen & Sourcing Team", desc: "Your dedicated B2B specialist — fluent in English, ready to provide line-by-line itemized quotes within 2 hours.", emoji: "💼" },
      { role: "Head of Technical Design", name: "Engineering Team", desc: "Specializes in embroidery digitizing, seam allowance tolerances, and 2D/3D tech pack feasibility review.", emoji: "🎨" },
      { role: "QC Director", name: "In-House QC Team", desc: "Oversees pre-shipment inspection on-site at partner facilities before final carton sealing.", emoji: "🔍" },
      { role: "Supply Chain Manager", name: "Logistics Team", desc: "Manages partner line scheduling, booking 20GP/40HQ containers, air express dispatch, and customs export filings.", emoji: "🧵" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Are you a factory or a trading company?", a: "We are Baoding Junyang Import and Export Trade Co., Ltd. — a specialized headwear sourcing and quality partner. Rather than limiting you to one workshop's machine availability, we manage vetted partner production lines across Baoding's premium hat belt while controlling tech packs, in-house QC, and single-point contract liability." },
      { q: "What is your minimum order quantity (MOQ)?", a: "200 pieces per style and colorway for baseball caps, truckers, dad hats, 5-panels, beanies and bucket hats. Multi-color drops are supported with tiered volume pricing. Container-scale programs start from 1,000+ pieces." },
      { q: "How fast can you make a physical sample?", a: "Pre-production samples are completed in 7 days after tech pack and spec sign-off. The sample fee is 100% credited back to your invoice on bulk orders of 500+ pieces." },
      { q: "How long does bulk production take?", a: "Standard bulk lead time is 15–20 days after sample approval. We confirm a binding schedule with your written quote and provide milestone photo/video proof at each production stage." },
      { q: "Which markets do you export to?", a: "North America (about 70% of shipments), Western Europe (about 25%), and Australia/global markets. Third-party testing and inspection can be arranged per order to support your target market's compliance requirements." },
    ],
    ctaTitle: "Ready to Start Your Custom Hat Project?",
    ctaSub: "Get an itemized B2B quote and production timeline within 2 hours.",
    ctaButton: "Request Written Quote",
    footerAbout:
      "Baoding Junyang Import and Export Trade Co., Ltd. — quality-first headwear sourcing & export partner since 2014.",
    footerNav: "Navigation",
    footerHome: "Home",
    footerAboutLink: "About",
    footerProducts: "Products",
    footerQuote: "Request Quote",
    footerContact: "Contact",
    footerOffice: "Office: Baoding, Hebei, China",
    copyright: "© 2026 Baoding Junyang Import and Export Trade Co., Ltd. All rights reserved.",
  },
  es: {
    nav: { advantages: "Ventajas", factory: "Abastecimiento y Calidad", about: "Nosotros", inquiry: "Consultas", getQuote: "Cotizar" },
    crumbHome: "Inicio",
    crumbAbout: "Sobre Nosotros",
    heroKicker: "Baoding Junyang Import and Export Trade Co., Ltd. · Est. 2014",
    heroTitlePre: "El socio de abastecimiento y calidad detrás de",
    heroTitleAccent: "más de 300 marcas",
    heroSub:
      "Baoding Junyang Import and Export Trade Co., Ltd. (BD Hats / 保定骏阳进出口贸易有限公司): conectamos marcas globales de streetwear, equipos deportivos y compradores corporativos con fabricantes seleccionados en el cinturón de headwear de China desde 2014.",
    missionTitle: "Nuestra Misión",
    missionBody:
      "Hacer que el abastecimiento de gorras de alta gama sea transparente, confiable y accesible. Operamos como un único punto de responsabilidad: seleccionamos fábricas asociadas, gestionamos muestras, aplicamos controles de calidad antes del envío y tramitamos la exportación directa sin intermediarios ocultos.",
    journeyLabel: "Nuestro Recorrido",
    journeyTitle: "Del Abastecimiento Regional a la Cadena Global",
    timeline: [
      { year: "2014", title: "Fundada en Baoding", desc: "Establecida en Baoding, Hebei — centro neurálgico de fabricación de gorras en China — enfocada en el abastecimiento y exportación de headwear personalizado." },
      { year: "2016", title: "Primer Contenedor de Exportación", desc: "Despacho del primer contenedor completo para una marca de streetwear en EE. UU. Implementación de líneas asociadas dedicadas y control de muestras." },
      { year: "2018", title: "Estándares Internacionales", desc: "Adopción de flujos de control de calidad con puntos de inspección por etapas y registros de producción documentados." },
      { year: "2020", title: "Escala de Red de Suministro", desc: "Ampliación de la red de fabricantes especializados en el norte de China para cubrir gorras de béisbol, truckers, beanies y performance." },
      { year: "2022", title: "Expansión B2B Global", desc: "Ampliación de capacidades de gestión de proyectos OEM/ODM, entregando más de 1.000 diseños personalizados con cotizaciones desglosadas en 2 horas." },
      { year: "2026", title: "Más de 300 Marcas Globales", desc: "Hoy atendemos a más de 300 marcas en más de 50 países. Norteamérica representa el 70% de nuestros despachos con control de calidad antes del envío en cada pedido." },
    ],
    capabilitiesLabel: "Red de Abastecimiento y Control de Calidad",
    capabilitiesTitle: "Cómo Opera Nuestra Red Productiva",
    capabilitiesIntro:
      "Asignamos tus especificaciones técnicas a la línea de fabricación especializada óptima, con nuestro equipo propio de control de calidad inspeccionando cada hito en el sitio.",
    capabilities: [
      { title: "Líneas de Bordado Multicabezal de Precisión", desc: "Bordado computarizado de alta velocidad: bordado plano, 3D puff de alta densidad con base EVA y emblemas complejos." },
      { title: "Líneas de Costura y Confección Especializadas", desc: "Líneas asociadas dedicadas por categoría: 6 paneles estructuradas, dad hats vintage lavados, truckers transpirables y beanies de punto." },
      { title: "Capacidad Escalable por Contenedor", desc: "Escalamiento flexible desde lotes de inicio de 200 piezas hasta despachos en contenedores completos 20GP/40HQ." },
      { title: "Centro de Control de Calidad y Exportación", desc: "Equipo propio de inspección pre-envío, verificación de embalaje y gestión de documentación aduanera en Baoding." },
    ],
    complianceLabel: "Cumplimiento y Estándares",
    complianceTitle: "Estándares que Hacemos Cumplir",
    complianceIntro:
      "Toda la producción sigue flujos de calidad documentados. Las pruebas e inspecciones de terceros se gestionan por pedido, y los informes acompañan cada despacho.",
    compliance: [
      { title: "Selección de Materiales Seguros", desc: "Tejidos, hilos y fornituras se revisan por sustancias peligrosas, y los informes de seguridad química se gestionan por pedido según tu mercado." },
      { title: "Red de Fábricas Asociadas Seleccionadas", desc: "Las instalaciones asociadas son seleccionadas y revisadas por nuestro equipo de sourcing en sistemas de calidad, capacidad y responsabilidad social." },
      { title: "Pruebas e Inspección por Pedido", desc: "Solidez del color, ausencia de colorantes azoicos y otros ensayos de materiales gestionados con laboratorios acreditados bajo solicitud." },
    ],
    transpLabel: "Protocolo de Control de Calidad",
    transpTitle: "Transparencia y Trazabilidad en Cada Etapa",
    transpIntro:
      "Los compradores merecen total transparencia. Recibirás actualizaciones multimedia directas en vídeo y fotografía durante toda la producción.",
    transp: [
      { title: "Informes multimedia en 4 puntos de control", body: "Cada pedido sigue un cronograma confirmado. Proporcionamos verificación en: ① Corte de tela y consistencia del tono; ② Aprobación del primer bordado y densidad de puntadas; ③ Confección, alineación de costuras y colocación de badana; ④ Planchado final, inspección de calidad y embalaje de exportación." },
      { title: "Inspección de calidad antes del envío", body: "Nuestros inspectores revisan las gorras por alineación de bordado, densidad de puntadas, retención de forma de la corona y acabados antes de sellar las cajas. Los registros de inspección se archivan por lote." },
      { title: "Documentación de pruebas junto con la carga", body: "Los informes de pruebas de materiales (solidez del color, ausencia de colorantes azoicos y otros ensayos de seguridad) se gestionan con laboratorios acreditados para facilitar el despacho aduanero." },
      { title: "Términos comerciales confiables", body: "Cotizaciones FOB desglosadas por escrito en menos de 2 horas. Muestras físicas previas en 7 días (reembolso del 100% en pedidos ≥500 uds). Producción en 15–20 días. Pago vía Alibaba Trade Assurance o T/T con protección NDA completa." },
    ],
    teamLabel: "Equipo de Proyecto",
    teamTitle: "Conoce a tu Equipo Dedicado",
    teamSub: "Cada pedido está gestionado por especialistas dedicados, desde la ingeniería del tech pack hasta la carga del contenedor.",
    team: [
      { role: "Consultora Senior de Headwear", name: "Eileen y Equipo Comercial", desc: "Tu especialista B2B dedicada: atención en inglés fluido y cotizaciones desglosadas en menos de 2 horas.", emoji: "💼" },
      { role: "Jefe de Diseño Técnico", name: "Equipo de Ingeniería", desc: "Especialistas en digitalización de bordado, tolerancias de costura y revisión de viabilidad técnica 2D/3D.", emoji: "🎨" },
      { role: "Director de QC", name: "Equipo Propio de Control de Calidad", desc: "Supervisa la inspección física pre-envío en las líneas de confección antes del sellado final.", emoji: "🔍" },
      { role: "Gerente de Cadena de Suministro", name: "Equipo de Logística", desc: "Gestiona la programación de líneas, reserva de contenedores 20GP/40HQ, envíos aéreos y trámites de exportación.", emoji: "🧵" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Son una fábrica o una empresa comercial?", a: "Somos Baoding Junyang Import and Export Trade Co., Ltd., un socio especializado en abastecimiento y control de calidad de headwear. En lugar de limitarte a la disponibilidad de máquinas de un solo taller, gestionamos líneas de producción seleccionadas en el cinturón de Baoding, asumiendo la responsabilidad contractual, la revisión técnica y la inspección de calidad pre-envío." },
      { q: "¿Cuál es la cantidad mínima de pedido (MOQ)?", a: "200 unidades por modelo y color para gorras de béisbol, truckers, dad hats, 5-panel, beanies y bucket hats. Respaldamos lanzamientos multicolores con precios escalonados por volumen. Pedidos por contenedor desde 1.000+ piezas." },
      { q: "¿En cuánto tiempo producen una muestra física?", a: "Las muestras previas están listas en 7 días tras la confirmación técnica. El costo de la muestra se abona 100% a tu factura en pedidos finales de 500+ piezas." },
      { q: "¿Cuánto tarda la producción a granel?", a: "El plazo estándar es de 15–20 días tras la aprobación de la muestra. Confirmamos cronograma vinculante con tu cotización escrita y compartimos bitácora multimedia en cada etapa." },
      { q: "¿A qué mercados exportan?", a: "Norteamérica (70% de nuestros envíos), Europa occidental (25%) y mercados globales. Las pruebas e inspecciones de terceros se gestionan por pedido para cubrir los requisitos de cumplimiento de tu mercado." },
    ],
    ctaTitle: "¿Listo para Comenzar tu Proyecto de Gorras Personalizadas?",
    ctaSub: "Obtén una cotización B2B desglosada y cronograma de producción en menos de 2 horas.",
    ctaButton: "Solicitar Cotización por Escrito",
    footerAbout:
      "Baoding Junyang Import and Export Trade Co., Ltd. — socio de abastecimiento y calidad de headwear desde 2014.",
    footerNav: "Navegación",
    footerHome: "Inicio",
    footerAboutLink: "Nosotros",
    footerProducts: "Productos",
    footerQuote: "Solicitar Cotización",
    footerContact: "Contacto",
    footerOffice: "Oficina: Baoding, Hebei, China",
    copyright: "© 2026 Baoding Junyang Import and Export Trade Co., Ltd. Todos los derechos reservados.",
  },
};

export default function AboutPage() {
  const lang = useLang();
  const c = CONTENT[lang === "es" ? "es" : "en"];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href={`/${lang}`} className="flex items-center gap-4">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none whitespace-nowrap">Headwear Sourcing & Quality Partner</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href={`/${lang}/#advantages`} className="hover:text-black transition">{c.nav.advantages}</a>
            <a href={`/${lang}/#factory`} className="hover:text-black transition">{c.nav.factory}</a>
            <NavProductsMenu />
            <a href={`/${lang}/about`} className="text-black border-b-2 border-black pb-1">{c.nav.about}</a>
            <NavCompareMenu />
            <a href={`/${lang}/#inquiry`} className="hover:text-black transition">{c.nav.inquiry}</a>
          </nav>
          <a
            href={`/${lang}/#inquiry`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-full text-xs md:text-sm transition"
          >
            {c.nav.getQuote}
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: c.crumbHome, href: "/" },
        { label: c.crumbAbout }
      ]} />

      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-yellow-400 font-extrabold tracking-widest uppercase text-xs md:text-sm">{c.heroKicker}</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mt-6 mb-6 tracking-tight leading-tight">
            {c.heroTitlePre} <span className="text-yellow-400">{c.heroTitleAccent}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {c.heroSub}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">{c.missionTitle}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {c.missionBody}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.journeyLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2">{c.journeyTitle}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-px" />
            <div className="space-y-16">
              {c.timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-3 h-3 bg-black rounded-full border-4 border-gray-50 z-10" />
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="text-4xl md:text-5xl font-black text-black tracking-tight">{item.year}</span>
                  </div>
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

      {/* Factory Capabilities */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.capabilitiesLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{c.capabilitiesTitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">{c.capabilitiesIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.capabilities.map((cap, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-4">
                  {i === 0 ? <Award size={22} /> : i === 1 ? <Users size={22} /> : i === 2 ? <Factory size={22} /> : <ShieldCheck size={22} />}
                </div>
                <h3 className="font-bold text-lg text-black mb-2">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.complianceLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{c.complianceTitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">{c.complianceIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.compliance.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <ShieldCheck className="text-green-600 w-8 h-8 mb-4" />
                <h3 className="font-bold text-base text-black mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Traceability */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.transpLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{c.transpTitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">{c.transpIntro}</p>
          </div>
          <div className="space-y-8">
            {c.transp.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-base text-black mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.teamLabel}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-4">{c.teamTitle}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
              {c.teamSub}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.team.map((member, i) => (
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

      {/* FAQ */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 text-center">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
                <h3 className="font-bold text-base md:text-lg text-black mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{c.ctaTitle}</h2>
          <p className="text-gray-400 text-lg mb-8">{c.ctaSub}</p>
          <a
            href={`/${lang}/#inquiry`}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition"
          >
            {c.ctaButton} <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="max-w-sm">
            <img
              src="/images/brand/junyang-logo.webp"
              alt="JUNYANG Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm mt-3 leading-relaxed">
              {c.footerAbout}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">{c.footerNav}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={`/${lang}`} className="hover:text-white">{c.footerHome}</a></li>
                <li><a href={`/${lang}/about`} className="hover:text-white">{c.footerAboutLink}</a></li>
                <li><a href={`/${lang}/#catalog`} className="hover:text-white">{c.footerProducts}</a></li>
                <li><a href={`/${lang}/#inquiry`} className="hover:text-white">{c.footerQuote}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">{c.footerContact}</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">WhatsApp: +86 15933930830</li>
                <li className="text-gray-400">Email: admin@bdjunyang.com</li>
                <li className="text-gray-400">{c.footerOffice}</li>
              </ul>
              <div className="mt-4 pt-3 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/p/Baoding-Junyang-Import-And-Export-Trade-Co-Ltd-100079978783412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 text-gray-400 flex items-center justify-center transition border border-white/10"
                  aria-label="Facebook Page"
                  title="Follow us on Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/146738106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-blue-300 text-gray-400 flex items-center justify-center transition border border-white/10"
                  aria-label="LinkedIn Company Page"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest font-bold">
          <p>{c.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
