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
    nav: { advantages: "Advantages", factory: "Our Factory", about: "About", inquiry: "Inquiry", getQuote: "Get Quote" },
    crumbHome: "Home",
    crumbAbout: "About Our Factory",
    heroKicker: "Baoding Junyang Hat Manufacturing Co., Ltd. · Est. 2014",
    heroTitlePre: "The Hat Factory Behind",
    heroTitleAccent: "300+ Brands",
    heroSub:
      "Baoding Junyang Hat Manufacturing Co., Ltd. (BD Hats / 保定俊阳制帽) — from a 15-person workshop to a 50,000sqm facility with 200+ tailors and 100+ precision Barudan embroidery machines. This is our factory story.",
    missionTitle: "Our Mission",
    missionBody:
      "To make premium custom headwear accessible to brands of all sizes. We believe every streetwear startup, sports team, and corporate brand deserves factory-direct quality without the middleman markup. That's why we keep our MOQ at 200 pieces — so you can test, launch, and scale without risk.",
    journeyLabel: "Our Journey",
    journeyTitle: "From Workshop to Global Factory",
    timeline: [
      { year: "2014", title: "Founded in Baoding", desc: "Started with 15 tailors and 5 embroidery machines in a small workshop, specializing in custom baseball caps for local sportswear brands." },
      { year: "2016", title: "First Export Order", desc: "Shipped our first container to a US streetwear brand. Expanded to 50 staff and invested in automated Barudan embroidery machines." },
      { year: "2018", title: "SGS & CE Certified", desc: "Achieved SGS factory verification and CE product certification. Entered European market with REACH & RoHS compliance." },
      { year: "2020", title: "50,000sqm Facility", desc: "Moved to a modern 50,000sqm factory. Installed 100+ Barudan machines. Reached 5M+ caps annual capacity." },
      { year: "2022", title: "Global Export Expansion", desc: "Awarded top-tier international trade honors and expanded our OEM/ODM design capabilities, delivering 1,000+ custom designs to global brands." },
      { year: "2026", title: "300+ Global Brands", desc: "Now serving 300+ brands across 50+ countries. North America accounts for 70% of our production." },
    ],
    capabilitiesLabel: "Factory Capabilities",
    capabilitiesTitle: "What the Factory Runs On",
    capabilitiesIntro:
      "Every number below is what our floor looks like today — the same capacity your order is produced on, whether you order 200 pieces or 20,000.",
    capabilities: [
      { title: "100+ Barudan Embroidery Machines", desc: "Japanese Barudan high-speed flatbed and cap machines run around the clock, handling flat embroidery, 3D puff with foam underlay, and dense high-thread-count logos without outsourcing." },
      { title: "200+ Skilled Tailors", desc: "A full in-house sewing floor covers cutting, panel assembly, visor moulding, sweatband installation and final stitching — no piece is subcontracted." },
      { title: "5M+ Caps Annual Capacity", desc: "Sustained output across baseball caps, snapbacks, trucker hats, dad hats, beanies and bucket hats, with container-load scheduling for bulk importers." },
      { title: "50,000 sqm Facility", desc: "Cutting, embroidery, sewing, washing (enzyme/acid vintage finishes), QC and export packing under one roof in Baoding, Hebei." },
    ],
    complianceLabel: "Compliance & Verification",
    complianceTitle: "Certifications We Stand Behind",
    complianceIntro:
      "Finished products carry CE certification. For orders requiring it, we submit batches for third-party testing to REACH, RoHS, OEKO-TEX and GRS standards — test reports follow the shipment so your customs and compliance teams can verify.",
    compliance: [
      { title: "CE Certified Products", desc: "Finished headwear is CE certified for the European market, with documentation available per order." },
      { title: "SGS Verified Factory", desc: "Our facility is SGS verified — audited on production capability, quality systems and trade conduct." },
      { title: "Per-Order Testing", desc: "REACH, RoHS, OEKO-TEX Standard 100 and GRS testing arranged per order when your market or retailer requires it." },
    ],
    transpLabel: "How Production Actually Runs",
    transpTitle: "Transparency & Traceability on the Floor",
    transpIntro:
      "Most factory claims are marketing. These are the operating practices we hold every order to, and the ones buyers can verify during a sample review or a factory visit.",
    transp: [
      { title: "Milestone reporting at every stage", body: "Every order runs against a dated schedule, and we share photos and video at four checkpoints: fabric cutting, where color lot consistency and pattern alignment are confirmed; embroidery, where stitch density and logo placement are checked on the first panels before the run continues; assembly, where seam alignment, sweatband installation and closure fitting are verified; and packing, where the final count is checked against the packing list before cartons are sealed." },
      { title: "Piece-by-piece inspection, not statistical sampling", body: "Every cap is individually inspected for embroidery alignment, stitch density, stitching integrity, measurements and finish before it reaches the packing line. Production records are archived per order, so any single unit can be traced back to its sewing line, its embroidery machine and its QC station — which is what makes an audit, or a claim on arrival, resolvable in hours instead of weeks." },
      { title: "Compliance documentation travels with the goods", body: "Finished products carry CE certification for the European market, and where your retailer or market requires more, REACH, RoHS, OEKO-TEX Standard 100 and GRS testing is arranged per order with third-party laboratories. The test reports ship with the cargo, so your customs and compliance teams verify before clearance instead of after — and the facility itself is SGS verified, with audit summaries available to buyers on request." },
      { title: "Commercial terms you can hold us to", body: "Written itemized FOB quotations within 2 working hours, physical pre-production samples in 7 days with the fee fully refunded against bulk orders of 500 pieces or more, bulk production in 15–20 days, and payment through Alibaba Trade Assurance or T/T via verified business accounts. NDA is available before you share artwork, and your digitizing files and sewing patterns are produced for your order only — never reused or resold." },
    ],
    teamLabel: "Meet the People Behind Your Caps",
    teamTitle: "Our Core Team",
    teamSub: "Every order is personally overseen by dedicated specialists — from design to delivery.",
    team: [
      { role: "Senior Headwear Consultant", name: "Eileen & Sales Team", desc: "Your dedicated B2B specialist — fluent in English, ready to quote within 2 hours. Handles all inquiries from tech pack review to final delivery.", emoji: "💼" },
      { role: "Head of Design", name: "Design Team", desc: "Specializes in 3D embroidery digitizing and production-ready design files. Turns sketches, logos, or just an idea into a manufacturable design.", emoji: "🎨" },
      { role: "QC Manager", name: "QC Team", desc: "Leads our in-house QC team. Caps are checked at each production stage before leaving the factory floor.", emoji: "🔍" },
      { role: "Production Manager", name: "Production Team", desc: "Oversees 200+ tailors and 100+ automated embroidery machines. Ensures on-time delivery without compromising quality.", emoji: "🧵" },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is your minimum order quantity (MOQ)?", a: "200 pieces per style and color for most constructions — 5-panel, 6-panel, trucker, dad hat, beanie and bucket hat. Multi-color orders are split across colorways, each counted from the 200-pc base. Container bulk programs start at 1,000+ pieces with tiered FOB pricing." },
      { q: "How fast can you make a physical sample?", a: "Production samples are ready in about 7 days after artwork and spec confirmation. The sample fee is fully refunded against your bulk order once it reaches 500 pieces." },
      { q: "How long does bulk production take?", a: "Standard bulk lead time is 15–20 days after sample approval, depending on quantity and decoration complexity. We confirm a dated production schedule with your written quote, and milestone photos are shared during production." },
      { q: "Do you support OEM and ODM programs?", a: "Yes. OEM means we build to your tech pack, brand standards and private-label package (custom woven labels, seam tape, hangtags, retail packaging). ODM means our design team develops the style with you from a sketch or reference cap. Both are covered by NDA on request." },
      { q: "Which markets do you export to?", a: "North America (about 70% of production) and Western Europe (about 25%), plus Australia and growing markets. Products are CE certified, with REACH, RoHS, OEKO-TEX and GRS testing available per order." },
    ],
    ctaTitle: "Ready to Start Your Custom Hat Project?",
    ctaSub: "Get a factory quote and production timeline within 2 hours.",
    ctaButton: "Request Factory Quote",
    footerAbout:
      "Baoding Junyang Hat Manufacturing Co., Ltd. — premium custom hat factory specializing in OEM/ODM since 2014.",
    footerNav: "Navigation",
    footerHome: "Home",
    footerAboutLink: "About",
    footerProducts: "Products",
    footerQuote: "Request Quote",
    footerContact: "Contact",
    footerOffice: "Office: Baoding, Hebei, China",
    copyright: "© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. All rights reserved.",
  },
  es: {
    nav: { advantages: "Ventajas", factory: "Nuestra Fábrica", about: "Nosotros", inquiry: "Consultas", getQuote: "Cotizar" },
    crumbHome: "Inicio",
    crumbAbout: "Nuestra Fábrica",
    heroKicker: "Baoding Junyang Hat Manufacturing Co., Ltd. · Est. 2014",
    heroTitlePre: "La fábrica de gorras detrás de",
    heroTitleAccent: "más de 300 marcas",
    heroSub:
      "Baoding Junyang Hat Manufacturing Co., Ltd. (BD Hats / 保定俊阳制帽): de un taller de 15 personas a una planta de 50.000 m² con más de 200 sastres y 100 máquinas de bordado de precisión Barudan. Esta es la historia de nuestra fábrica.",
    missionTitle: "Nuestra Misión",
    missionBody:
      "Hacer que el headwear personalizado de alta gama sea accesible para marcas de todos los tamaños. Creemos que cada startup de streetwear, equipo deportivo y marca corporativa merece calidad directa de fábrica sin el recargo de intermediarios. Por eso mantenemos nuestro MOQ en 200 unidades: para que puedas probar, lanzar y escalar sin riesgo.",
    journeyLabel: "Nuestro Recorrido",
    journeyTitle: "Del Taller a la Fábrica Global",
    timeline: [
      { year: "2014", title: "Fundada en Baoding", desc: "Empezamos con 15 sastres y 5 máquinas de bordado en un pequeño taller, especializado en gorras de béisbol personalizadas para marcas locales de deporte." },
      { year: "2016", title: "Primer Pedido de Exportación", desc: "Enviamos nuestro primer contenedor a una marca de streetwear de EE. UU. Crecimos a 50 empleados e invertimos en máquinas de bordado Barudan automatizadas." },
      { year: "2018", title: "Certificadas SGS y CE", desc: "Alcanzamos la verificación de fábrica SGS y la certificación de producto CE. Entramos al mercado europeo con cumplimiento REACH y RoHS." },
      { year: "2020", title: "Planta de 50.000 m²", desc: "Nos mudamos a una moderna planta de 50.000 m². Instalamos más de 100 máquinas Barudan y alcanzamos una capacidad anual de 5M+ gorras." },
      { year: "2022", title: "Expansión Global", desc: "Reconocimientos de primer nivel en comercio internacional y expansión de nuestras capacidades de diseño OEM/ODM, con más de 1.000 diseños personalizados para marcas globales." },
      { year: "2026", title: "Más de 300 Marcas Globales", desc: "Hoy servimos a más de 300 marcas en más de 50 países. Norteamérica representa el 70% de nuestra producción." },
    ],
    capabilitiesLabel: "Capacidades de la Fábrica",
    capabilitiesTitle: "En Qué Funciona Nuestra Fábrica",
    capabilitiesIntro:
      "Cada cifra de abajo es la realidad actual de nuestra planta: la misma capacidad con la que se produce tu pedido, ya sea de 200 o de 20.000 unidades.",
    capabilities: [
      { title: "100+ Máquinas de Bordado Barudan", desc: "Máquinas planas y para gorras Barudan de alta velocidad (Japón) operan las 24 horas: bordado plano, 3D puff con base de espuma y logos de alta densidad, todo sin externalizar." },
      { title: "200+ Sastres Especializados", desc: "Una planta de costura completa en casa cubre corte, ensamble de paneles, moldeo de viseras, instalación de badanas y puntada final: ninguna pieza se subcontrata." },
      { title: "5M+ Gorras al Año", desc: "Producción sostenida de gorras de béisbol, snapbacks, truckers, dad hats, gorros de punto y bucket hats, con programación por contenedor para importadores mayoristas." },
      { title: "50.000 m² de Planta", desc: "Corte, bordado, costura, lavados (acabados vintage enzyme/acid), control de calidad y embalaje de exportación bajo un mismo techo en Baoding, Hebei." },
    ],
    complianceLabel: "Cumplimiento y Verificación",
    complianceTitle: "Certificaciones que Respaldamos",
    complianceIntro:
      "Los productos terminados cuentan con certificación CE. Para pedidos que lo requieran, enviamos lotes a pruebas de terceros según REACH, RoHS, OEKO-TEX y GRS: los informes viajan con el envío para que tu equipo de cumplimiento lo verifique.",
    compliance: [
      { title: "Productos Certificados CE", desc: "El headwear terminado está certificado CE para el mercado europeo, con documentación disponible por pedido." },
      { title: "Fábrica Verificada por SGS", desc: "Nuestra planta está verificada por SGS: auditada en capacidad productiva, sistemas de calidad y conducta comercial." },
      { title: "Pruebas por Pedido", desc: "Pruebas REACH, RoHS, OEKO-TEX Standard 100 y GRS gestionadas por pedido cuando tu mercado o retailer lo exige." },
    ],
    transpLabel: "Cómo Funciona la Producción",
    transpTitle: "Transparencia y Trazabilidad en la Planta",
    transpIntro:
      "La mayoría de los claims de fábrica son marketing. Estas son las prácticas que aplicamos a cada pedido y que cualquier comprador puede verificar durante la revisión de muestra o una visita a la planta.",
    transp: [
      { title: "Informes por hitos en cada etapa", body: "Cada pedido sigue un calendario con fechas y compartimos fotos y vídeo en cuatro puntos: corte de tela, donde se confirma la consistencia del lote de color y la alineación de patrones; bordado, donde se revisan densidad de puntadas y colocación del logo en los primeros paneles antes de continuar; ensamble, donde se verifica la alineación de costuras, la instalación de la badana y el ajuste del cierre; y embalaje, donde el conteo final se coteja contra la lista de embalaje antes de sellar las cajas." },
      { title: "Inspección pieza por pieza, no muestreo estadístico", body: "Cada gorra se inspecciona de forma individual por alineación del bordado, densidad de puntadas, integridad de costuras, medidas y acabado antes de llegar a la línea de embalaje. Los registros de producción se archivan por pedido, de modo que cualquier unidad se rastrea hasta su línea de costura, su máquina de bordado y su estación de QC: así una auditoría, o una reclamación en la llegada, se resuelve en horas y no en semanas." },
      { title: "La documentación de cumplimiento viaja con la mercancía", body: "Los productos terminados cuentan con certificación CE para el mercado europeo, y cuando tu retailer o mercado exige más, las pruebas REACH, RoHS, OEKO-TEX Standard 100 y GRS se gestionan por pedido con laboratorios de terceros. Los informes viajan con la carga para que tus equipos de aduana y cumplimiento verifiquen antes del despacho, y la planta está verificada por SGS, con resúmenes de auditoría disponibles bajo solicitud." },
      { title: "Condiciones comerciales en las que puedes hacernos cumplir", body: "Cotizaciones FOB escritas y desglosadas en menos de 2 horas hábiles, muestras preproductivas físicas en 7 días con el costo descontado íntegro en pedidos masivos de 500 unidades o más, producción masiva en 15–20 días, y pago mediante Alibaba Trade Assurance o T/T a través de cuentas empresarias verificadas. El NDA está disponible antes de compartir el arte, y los archivos de digitalización y patrones de costura se producen solo para tu pedido: nunca se reutilizan ni se revenden." },
    ],
    teamLabel: "Las Personas Detrás de tus Gorras",
    teamTitle: "Nuestro Equipo Central",
    teamSub: "Cada pedido está supervisado personalmente por especialistas dedicados, del diseño a la entrega.",
    team: [
      { role: "Consultora Senior de Headwear", name: "Eileen y Equipo de Ventas", desc: "Tu especialista B2B dedicada: habla inglés fluido y cotiza en menos de 2 horas. Atención completa, de la revisión del tech pack a la entrega final.", emoji: "💼" },
      { role: "Jefa de Diseño", name: "Equipo de Diseño", desc: "Especialistas en digitalización de bordado 3D y archivos listos para producción. Convierten bocetos, logos o una simple idea en un diseño manufacturable.", emoji: "🎨" },
      { role: "Gerente de QC", name: "Equipo de QC", desc: "Dirige nuestro equipo interno de control de calidad. Cada gorra se revisa en cada etapa productiva antes de salir de la planta.", emoji: "🔍" },
      { role: "Gerente de Producción", name: "Equipo de Producción", desc: "Supervisa a 200+ sastres y 100+ máquinas de bordado automatizadas. Garantiza entregas a tiempo sin comprometer la calidad.", emoji: "🧵" },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Cuál es tu cantidad mínima de pedido (MOQ)?", a: "200 unidades por estilo y color para la mayoría de las construcciones: 5 paneles, 6 paneles, trucker, dad hat, gorros de punto y bucket hat. Los pedidos multicolor se reparten entre combinaciones, cada una desde la base de 200 uds. Los programas a granel por contenedor inician en 1.000+ piezas con precios FOB por volumen." },
      { q: "¿Qué tan rápido producen una muestra física?", a: "Las muestras de producción están listas en unos 7 días después de confirmar diseño y especificaciones. El costo de la muestra se descuenta íntegro de tu pedido masivo una vez que alcanzas las 500 unidades." },
      { q: "¿Cuánto tarda la producción masiva?", a: "El plazo estándar es de 15–20 días después de aprobar la muestra, según cantidad y complejidad del decoración. Confirmamos un calendario de producción con fechas junto con tu cotización escrita, y compartimos fotos de avance durante la producción." },
      { q: "¿Apoyan programas OEM y ODM?", a: "Sí. OEM significa que producimos según tu tech pack, estándares de marca y paquete private label (etiquetas tejidas personalizadas, cinta de costura, hangtags, empaque retail). ODM significa que nuestro equipo de diseño desarrolla el estilo contigo a partir de un boceto o gorra de referencia. Ambos pueden cubrirse por NDA si lo solicitas." },
      { q: "¿A qué mercados exportan?", a: "Norteamérica (alrededor del 70% de nuestra producción) y Europa occidental (unos 25%), más Australia y mercados en crecimiento. Los productos están certificados CE, con pruebas REACH, RoHS, OEKO-TEX y GRS disponibles por pedido." },
    ],
    ctaTitle: "¿Listo para Empezar tu Proyecto de Gorras Personalizadas?",
    ctaSub: "Recibe cotización de fábrica y calendario de producción en menos de 2 horas.",
    ctaButton: "Solicitar Cotización de Fábrica",
    footerAbout:
      "Baoding Junyang Hat Manufacturing Co., Ltd. — fábrica premium de gorras personalizadas especializada en OEM/ODM desde 2014.",
    footerNav: "Navegación",
    footerHome: "Inicio",
    footerAboutLink: "Nosotros",
    footerProducts: "Productos",
    footerQuote: "Solicitar Cotización",
    footerContact: "Contacto",
    footerOffice: "Oficina: Baoding, Hebei, China",
    copyright: "© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. Todos los derechos reservados.",
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
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none whitespace-nowrap">Supply Chain & Manufacturing Partner</span>
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
