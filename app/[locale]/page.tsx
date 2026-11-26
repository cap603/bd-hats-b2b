"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useT, useLang } from "../lib/i18n";
import { attributionTag } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { NavGuideMenu } from "../components/NavGuideMenu";
import { NavProductsMenu } from "../components/NavProductsMenu";
import { MobileNav } from "../components/MobileNav";
import { HatCatalog } from "../components/HatCatalog";
import { InquiryForm } from "../components/InquiryForm";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { MobileStickyBar } from "../components/MobileStickyBar";
import { MessageCircle, ShieldCheck, Globe, Cpu, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, CheckCircle2, Facebook, Linkedin, FileDown, Sparkles, Package } from "lucide-react";

// Program card copy lives in messages/*.json under home.programs ("0".."11");
// only the link targets are language-neutral and stay in code.
const PROGRAM_HREFS = [
  "/custom-5-panel-caps-manufacturer",
  "/oem-hat-manufacturer",
  "/custom-beanies-manufacturer",
  "/custom-dad-hats-manufacturer",
  "/wholesale-snapbacks",
  "/custom-trucker-hats",
  "/wholesale-blank-caps-supplier",
  "/private-label-hat-manufacturer",
  "/corporate-custom-hats-supplier",
  "/custom-bucket-hats-manufacturer",
  "/bulk-custom-hats-manufacturer",
  "/pricing",
];

const SECTOR_HREFS = [
  "/custom-5-panel-caps-manufacturer",
  "/corporate-custom-hats-supplier",
  "/custom-golf-performance-hats",
  "/bulk-custom-hats-manufacturer",
];

const HEADWEAR_LINKS = [
  "/wholesale-snapbacks",
  "/custom-trucker-hats",
  "/custom-dad-hats-manufacturer",
  "/custom-5-panel-caps-manufacturer",
  "/custom-beanies-manufacturer",
  "/custom-bucket-hats-manufacturer",
  "/bulk-custom-hats-manufacturer",
];

const GUIDE_LINKS = [
  "/custom-hat-tech-pack-template",
  "/custom-hat-cost-index-2026",
  "/top-hat-manufacturers-in-china",
  "/compare/5-panel-vs-6-panel-caps",
  "/compare/flat-embroidery-vs-3d-puff",
  "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
  "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
];

// Sourcing knowledge section rendered above the inquiry block. Kept as a
// module-level constant (like the category pages' CONTENT objects) instead of
// the messages JSON: it then ships in the JS bundle rather than being
// serialized into every page's RSC flight payload, which keeps the HTML light.
const SOURCING_GUIDE = {
  en: {
    badge: "B2B Sourcing Knowledge",
    title: "Custom Hat Manufacturing: Materials, Compliance & Ordering",
    intro:
      "Most failed hat orders come from unclear specifications, not from bad factories. This section summarises how we manufacture, which materials we work with, how compliance is handled, and what a smooth order looks like from tech pack to container — so you can compare us against other suppliers on facts.",
    materialsTitle: "Materials We Manufacture With",
    materials: [
      { name: "108*56 Heavy Cotton Twill", desc: "Our best-selling cap fabric: a dense diagonal weave that holds structure, keeps its crown shape after washing, and takes high-density 3D puff embroidery cleanly. The default choice for streetwear 5-panel and structured 6-panel programs." },
      { name: "Brushed Cotton", desc: "Softer hand-feel with a subtle matte surface; the popular choice for vintage dad hats and lifestyle caps. Pre-shrunk options are available for enzyme-washed and acid-washed finishes." },
      { name: "Canvas & Duck Cloth", desc: "Heavyweight woven cotton for workwear and heritage styles that must survive daily abuse. Pairs well with metal eyelets, riveted hardware and tonal embroidery on corporate and outdoor programs." },
      { name: "Corduroy", desc: "6-wale and 8-wale corduroy for autumn/winter collections. Our partner factories control yarn dyeing so the wales stay even across a full container run, and colour fastness is tested before bulk cutting." },
      { name: "Ripstop Nylon (DWR Finish)", desc: "Lightweight, tear-resistant nylon with a durable water-repellent finish for golf, hiking and performance lines. Laser-perforated airflow panels and moisture-wicking CoolMax sweatbands are standard options." },
      { name: "Polar Fleece & Knit Yarns", desc: "Beanie and winter-line fabrics: mid-weight polar fleece, fine-gauge rib knit with cuffed construction, and acrylic-wool blend yarns for premium cold-weather programs." },
    ],
    complianceTitle: "Compliance & Certification",
    complianceBody:
      "Where your market or retailer requires compliance documentation, we arrange third-party material testing per order — test reports travel with the shipment so your compliance team can verify before customs clearance. Production records are kept for every order so quality issues can be traced back to the sewing line.",
    checklistTitle: "How an Order Runs",
    checklist: [
      { title: "Specs & Artwork", desc: "Send your logo (vector preferred), a reference cap or a full tech pack. Our team reviews feasibility and replies with a written FOB quote within 2 hours." },
      { title: "Sampling — 7 Days", desc: "We produce a physical pre-production sample for your approval. The sample fee is fully refunded against the bulk order once it reaches 500 pieces." },
      { title: "Bulk Production — 15–20 Days", desc: "After sample sign-off, production starts against a dated schedule. Milestone photos and video updates are shared at fabric cutting, embroidery, assembly and packing." },
      { title: "QC & Export Packing", desc: "Caps are inspected before packing: embroidery alignment, stitching integrity, measurements and finish. Export cartons are packed to 100 pcs with humidity protection." },
      { title: "Shipping & Documents", desc: "EXW, FOB or CIF terms. Commercial invoice, packing list and certificates of origin are provided; Alibaba Trade Assurance orders are supported for payment security." },
    ],
    faqTitle: "Sourcing Questions Buyers Ask Us",
    faqs: [
      { q: "Can you match a reference cap I already have?", a: "Yes. Send photos or ship us the reference cap and we reverse-engineer the construction: panel count, profile height, brim curve, fabric weight and closure type. You approve a written comparison sheet before we start sampling." },
      { q: "What file formats do you need for my logo?", a: "Vector files (AI, EPS, PDF, SVG) give the cleanest embroidery digitizing. High-resolution PNG or JPG works for simpler designs — our digitizers rebuild the artwork for stitching either way, including Tatami underlay and thread colour matching." },
      { q: "How do you protect my designs?", a: "An NDA is available on request before you share artwork. Digitizing files and sewing patterns are produced for your order only and are never reused or resold to other buyers." },
      { q: "What happens if quality is not right on arrival?", a: "Report it with photos within the inspection window and we make good the claim — replacement production or refund — and orders paid through Alibaba Trade Assurance carry platform payment protection on top of our own QC commitment." },
      { q: "Do you produce private-label packaging?", a: "Yes — custom woven neck labels, printed damask seam tape, branded hangtags, polybags and retail boxes are all produced with our production partners and packed with your order, so the unboxing matches your brand from the first unit." },
      { q: "Can you develop a style from scratch (ODM)?", a: "Yes. Send a sketch, a mood board or a reference cap and our design team develops the construction, digitizing and bill of materials with you. You approve every stage — comparison sheet, sample photos and the physical sample — before bulk." },
      { q: "How accurately can you match my brand colors?", a: "Thread colors are matched to Pantone references, and contrast panels, visors and piping are dyed to your spec. Colorfastness is tested before bulk cutting so the caps survive washing at your customers." },
      { q: "What shipping options do you offer?", a: "EXW, FOB or CIF. Air express runs 5–8 days for samples and urgent orders; sea freight runs 25–35 days for bulk containers. We provide commercial invoice, packing list and certificates of origin with every shipment." },
      { q: "Can I visit the factory?", a: "Our production runs through vetted partner factories, so we arrange live video tours of cutting, embroidery, sewing and packing for every order. For confirmed programs we can also coordinate on-site visits with the partner factory." },
    ],
    vetTitle: "How to Vet a Hat Manufacturer",
    vet: [
      { title: "Ask for factory verification reports", desc: "A real factory welcomes SGS or equivalent verification and shares it on request. Ask how the facility is audited and what the defect-rate policy is before you commit an order." },
      { title: "Confirm in-house embroidery capacity", desc: "Many suppliers outsource embroidery to local workshops. Confirm where your logo will actually be embroidered, and ask for live embroidery video of your logo during sampling." },
      { title: "Check the sample refund policy", desc: "Reputable suppliers refund the sample fee against bulk orders; ours is fully refunded once the order reaches 500 pieces." },
      { title: "Verify compliance testing options", desc: "EU and US retail often require REACH SVHC, OEKO-TEX Standard 100 or GRS. Ask whether the supplier arranges per-order third-party testing and ships the reports with the goods, not after." },
      { title: "Compare FOB bands, not just the lowest price", desc: "A quote far below the $3.50–$7.00 market band for structured caps usually means thinner fabric, fewer stitches or hidden surcharges. Ask for an itemized bill-of-materials quote." },
      { title: "Insist on a dated production schedule", desc: "Get sample and bulk dates in writing. A factory that shares milestone photos and video at cutting, embroidery and packing stands behind its schedule — and so do we." },
      { title: "Clarify MOQ and colorway rules", desc: "Confirm MOQ per style and per color. Multi-color programs should split sensibly across colorways without punitive surcharges — ours starts at 200 pcs per style/color." },
      { title: "Use secure payment channels", desc: "Prefer platforms with buyer protection such as Alibaba Trade Assurance, or escrow for larger programs. Wire transfers to personal accounts are a red flag — ours go through verified business channels." },
    ],
    glossaryTitle: "Factory Terms, Decoded",
    glossary: [
      { term: "FOB", def: "Free On Board — the price covers goods loaded onto the vessel at the Chinese port; ocean freight and insurance are yours." },
      { term: "MOQ", def: "Minimum order quantity. Ours is 200 pieces per style and color." },
      { term: "OEM", def: "You supply the design and specs; the factory manufactures to them under your brand." },
      { term: "ODM", def: "Original Design Manufacturing — the factory develops the style with you from a sketch or reference." },
      { term: "Tech pack", def: "The specification document: measurements, fabric, closure, decoration placement and construction detail." },
      { term: "Digitizing", def: "Converting your logo artwork into the stitch file the embroidery machine reads." },
      { term: "3D puff embroidery", def: "Raised, foam-backed stitching with a molded, high-relief finish — the streetwear standard." },
      { term: "Tatami underlay", def: "A dense base layer of stitching laid under the topstitch to protect fabric and sharpen edges." },
      { term: "108*56 cotton twill", def: "The classic cap fabric count: 108 warp ends and 56 weft picks per inch — dense, structured, durable." },
      { term: "Buckram", def: "Stiff interfacing pressed into the front panels to hold a structured crown shape." },
      { term: "Damask taping", def: "The woven inner seam tape — a premium spot for brand logos." },
      { term: "Eyelet", def: "The ventilation hole, finished as embroidered, laser-cut or metal-riveted." },
      { term: "Snapback", def: "Adjustable flat-brim closure with plastic or metal snaps; usually high-crown." },
      { term: "Strapback", def: "A fabric strap with a brass or plastic slide buckle — the dad hat standard." },
      { term: "Enzyme wash", def: "Enzyme-treated vintage finish that softens hand-feel and fades color evenly." },
      { term: "Acid wash", def: "A bleached, high-contrast vintage finish popular on dad hats." },
      { term: "DWR finish", def: "Durable water-repellent treatment for nylon performance caps — rain beads off instead of soaking in." },
      { term: "CBM", def: "Cubic metre — the volume unit ocean freight is charged by. Our cartons are 60×45×40cm." },
      { term: "20GP / 40HQ", def: "Standard and high-cube ocean containers — the usual bulk shipping units from Chinese ports." },
      { term: "NDA", def: "Non-disclosure agreement protecting your artwork; available on request before you share designs." },
    ],
    logisticsTitle: "Packaging & Freight",
    logisticsBody:
      "Every cap is individually polybagged, cartons are packed to 100 pieces (approx. 12kg gross, 60×45×40cm master carton) with humidity protection, and each container load is sealed and photographed before dispatch. Air express covers samples and urgent replenishment in 5–8 days; sea freight carries bulk programs in 25–35 days. Use the CBM calculator in the tools menu to estimate carton counts and freight volume for your order before you commit.",
    deepTitle: "Sourcing Deep Dive: How Professional Buyers Evaluate Hat Factories",
    deep: [
      { title: "Why specifications matter more than price", body: "Most failed hat orders are not caused by bad factories — they are caused by vague specifications. When a buyer sends only a logo and asks for the best price, every factory quotes against a different assumed construction: different fabric weight, panel count, brim stiffness and closure. The resulting caps are unpredictable, and comparing those quotes is meaningless because they describe different products. Professional buyers send a tech pack or at least a reference cap, a quantity split per colorway and a target FOB band. With that information a serious factory returns an itemized quotation you can genuinely compare line by line against other suppliers — fabric, stitch count, decoration, hardware and packing all broken out. If you are evaluating multiple factories, send everyone the exact same specification sheet and ask for itemized quotes; the comparison immediately reveals which suppliers understand construction and which are guessing." },
      { title: "How a factory FOB price is built", body: "A factory FOB price is built from five layers: fabric and trims, cutting and sewing labor, decoration (embroidery digitizing, thread, foam for 3D puff), quality control and export packing, plus the factory's overhead and margin. Fabric typically accounts for 20–30% of unit cost, decoration 15–25% depending on stitch count and technique, and labor 25–35%. Understanding this structure explains why the $3.50–$7.00 band exists for structured caps: below $3.50 a factory must cut corners somewhere — thinner twill, fewer stitches, no pre-shrinking, recycled hardware — and those corners show up in your product, not on the invoice. When we quote, we itemize the bill of materials so you can see exactly what each layer costs and choose where to invest: heavier fabric, denser embroidery or premium closures. Price shopping without this structure is how brands end up with caps that look nothing like the approved sample." },
      { title: "The real cost of an abnormally cheap quote", body: "When a quote lands 30–40% below the market band, do not celebrate — investigate. The discount is almost never the factory's margin; it is a promise that will be broken somewhere. Common patterns: the quoted fabric is 108*56 twill on paper but a thin 60*40 count in bulk production; embroidery digitizing is outsourced to the cheapest local workshop and stitches come out blurry; the buckram front is replaced with thin fusible interfacing that collapses after two washes; the QC stage is skipped entirely and defect rates reach 8–15%. Each of these savings transfers cost onto you: returns, complaints, dead stock and a damaged brand. A reliable factory will not win on price alone — we compete on construction honesty, milestone transparency and repeat-order economics. Ask any unusually cheap supplier to itemize their bill of materials and share factory verification reports; the answers tell you exactly where the discount came from." },
      { title: "Fabric: hand-feel, durability and price", body: "Fabric choice drives hand-feel, durability and price more than any other decision. Our best-seller, 108*56 heavy cotton twill, weaves 108 warp ends and 56 weft picks per inch into a dense diagonal structure that holds a structured crown, survives repeated washing and takes high-density 3D puff without distortion — the default for streetwear programs. Brushed cotton trades some structure for a soft, matte hand-feel and suits vintage dad hats; choose pre-shrunk versions for enzyme or acid wash finishes so dimensions stay stable. Canvas and duck cloth are the workwear choice: heavyweight, abrasion-resistant and built for metal eyelets and riveted hardware. Corduroy brings seasonal texture with even wales when yarn dyeing is controlled at the factory level. Ripstop nylon with DWR finish serves golf and performance lines — lightweight, tear-resistant and water-repellent. Tell us your retail price point and target market and we will recommend the fabric that protects both your margin and your reputation." },
      { title: "Embroidery techniques compared", body: "Embroidery is where cap quality either shows or disappears. Flat embroidery is the versatile default: clean, fast and cost-effective for most logos. High-density flat stitching with a Tatami underlay sharpens edges and protects the fabric on dense designs. 3D puff embroidery adds a foam-backed, molded relief that streetwear brands recognize instantly — it demands precise digitizing and machine tension control, which is why we only work with factories that run modern multi-head embroidery lines in-house rather than outsourcing. Laser-cut embroidery removes thread programmatically for crisp negative space, while leather patches, foil stamping, screen printing and heat transfers cover the non-embroidery programs. Digitizing quality matters as much as the machine: a poorly digitized logo fails on any equipment. Send vector artwork (AI, EPS, PDF, SVG) and ask for a digitizing proof before sampling — reputable factories show you the stitch plan, thread colors and underlay strategy in writing before a single needle moves." },
      { title: "Crown structure, buckram and profile", body: "Crown construction determines how a cap reads on a customer's head. Structured crowns press stiff buckram interfacing into the front panels, holding a defined dome that keeps its shape in the box and on the shelf — the standard for snapbacks and premium 6-panels. Unstructured crowns omit or reduce the buckram, collapsing softly for the vintage dad-hat look; the trade-off is a cap that must be shaped before wearing. Profile height is the other axis: low A-frame profiles dominate streetwear 5-panels, while classic baseball profiles sit rounder and taller. Brim geometry completes the picture — flat brims for snapbacks and campers, curved brims for dad hats, with curve depth adjustable per market preference. When you send a reference cap, we measure panel count, profile height, brim curve and fabric weight, then send a written comparison sheet before sampling, so there is zero ambiguity about what the same construction means." },
      { title: "Closures, sizing and fit across markets", body: "Closure choice affects fit, durability and price. Snapback closures with plastic or metal snaps suit high-crown flat-brim caps and allow easy resizing across head sizes — the streetwear standard. Strapback closures with brass or plastic slide buckles are the dad-hat default: adjustable, durable and inexpensive. Elasticated flexfit-style backs serve promotional and uniform programs where one size must fit most heads. For sizing across markets, head circumference norms differ: North American retail typically runs 54–62cm, European sizing follows its own scale, and East Asian heads tend slightly smaller on average, which affects how a one-size closure lands. Tell us your target markets and we will specify closure type, adjustment range and size labeling per market. Multi-size and multi-color runs are supported within the same MOQ of 200 pieces per style and color, split evenly across colorways without punitive surcharges." },
      { title: "Compliance: what each certificate actually covers", body: "Compliance language is where many suppliers overpromise, so let us be precise. Standard headwear in the US and EU is governed by chemical and safety standards rather than CE machinery directives. REACH restricts hazardous substances in textiles and accessories — relevant for dye packages and metal hardware. OEKO-TEX Standard 100 tests finished fabric against a broad list of harmful substances — the strongest consumer-safety signal for apparel. GRS verifies recycled-content claims across the supply chain with audit trails. None of these are automatic: REACH SVHC, OEKO-TEX and GRS testing is arranged per order with third-party laboratories, and test reports travel with the shipment so your compliance team can verify before customs clearance. Production records are kept for every order so quality issues can be traced back to the sewing line. Name your target market's requirements up front and we will map the exact testing your program needs." },
      { title: "Sampling: what a pre-production sample tells you", body: "A pre-production sample is the single most important quality lever in hat sourcing — and most buyers underuse it. A good physical sample lets you verify: embroidery alignment and stitch density against your artwork; crown structure and profile height against the spec; brim curve and stiffness; closure operation and adjustment range; sweatband fit and labeling; internal damask taping and stitch integrity; and how the cap survives a wash cycle. Our sampling process produces a physical sample in 7 days with photos and video at each milestone, plus a written comparison sheet listing every specification and how the sample meets it. Review the sample deliberately — measure it, wash it, wear it, compare it against your reference cap. Approving a sample quickly because a deadline is tight is how bulk defects get signed off. The sample fee is fully refunded against the bulk order once it reaches 500 pieces, so there is no financial reason to skip a proper sample review." },
      { title: "Bulk production milestones and QC", body: "After sample sign-off, bulk production runs 15–20 days against a dated schedule. We share milestone photos and video at four checkpoints: fabric cutting (color lot consistency and pattern alignment), embroidery (stitch quality and logo placement on the first panels), assembly (seam alignment, sweatband installation, closure fitting) and packing (final count against the packing list). Caps are inspected before packing: embroidery alignment, stitching integrity, measurements and finish. Production records are archived per order so any unit can be traced back to its sewing line and QC station. If a defect escapes to arrival, report it with photos within the inspection window and we make good the claim with replacement production or a refund; orders paid through Alibaba Trade Assurance additionally carry platform payment protection on top of our own QC commitment." },
      { title: "Packaging, CBM and freight planning", body: "Packaging and freight planning separates professional importers from first-time buyers. Every cap is individually polybagged; export cartons are packed to 100 pieces (approx. 12kg gross, 60×45×40cm master carton) with humidity protection, and each container load is sealed and photographed before dispatch. Ocean freight charges by CBM, so knowing your carton count lets you compare 20GP versus 40HQ economics precisely — a 40HQ carries roughly double a 20GP at less than double the freight cost, which is why container-scale pricing drops significantly. Air express covers samples and urgent replenishment in 5–8 days; sea freight carries bulk programs in 25–35 days. EXW, FOB and CIF terms are all supported with commercial invoice, packing list and certificates of origin. Use the CBM calculator in our tools menu to estimate carton counts and freight volume for your order before you commit quantities." },
      { title: "Payment security and long-term supplier relations", body: "Payment structure protects both sides of a B2B relationship. For first-time buyers we recommend Alibaba Trade Assurance: the platform holds funds in escrow until you confirm the shipment matches the order, adding payment protection on top of our QC commitment. Established programs can use T/T through verified business accounts — never personal accounts, which are the single clearest red flag in supplier vetting. Beyond payment, long-term supplier economics matter: factories with repeat programs reserve capacity each quarter, hold your digitizing files and colorways on record so reorders skip the sampling stage, and extend container-scale pricing earlier. Our sample refund policy at 500+ pieces, 2-hour written quoting and milestone transparency are designed for exactly this: turning a first order into a seasonal program. If you are building a headwear line for the long term, treat the factory relationship like the asset it is — and hold the factory to the same schedule honesty you would demand from any strategic supplier." },
    ],
  },
  es: {
    badge: "Conocimiento de Sourcing B2B",
    title: "Fabricación de Gorras Personalizadas: Materiales, Cumplimiento y Pedidos",
    intro:
      "La mayoría de los pedidos de gorras fallidos se deben a especificaciones poco claras, no a malas fábricas. Esta sección resume cómo fabricamos, con qué materiales trabajamos, cómo gestionamos el cumplimiento y cómo es un pedido fluido, del tech pack al contenedor: así puedes compararnos con otros proveedores con hechos.",
    materialsTitle: "Materiales con los que Fabricamos",
    materials: [
      { name: "Sarga de Algodón Pesada 108*56", desc: "Nuestra tela de gorras más vendida: un tejido sarga denso que mantiene la estructura, conserva la forma de la corona tras el lavado y acepta bordado 3D puff de alta densidad sin defectos. La opción predeterminada para programas streetwear de 5 paneles y 6 paneles estructurados." },
      { name: "Algodón Cepillado", desc: "Toque más suave con superficie mate sutil; la opción popular para dad hats vintage y gorras de estilo de vida. Disponibles opciones precoseídas para acabados lavados con enzima y ácido." },
      { name: "Lona y Dril", desc: "Algodón tejido pesado para ropa de trabajo y estilos heritage que deben soportar un uso diario exigente. Combina bien con ojales metálicos, remaches y bordado tonal en programas corporativos y outdoor." },
       { name: "Pana (Corduroy)", desc: "Pana de 6 y 8 surcos para colecciones de otoño/invierno. Nuestras fábricas asociadas controlan el teñido del hilo para que los surcos sean uniformes en todo un contenedor, y la solidez del color se prueba antes del corte masivo." },
      { name: "Nailon Ripstop (Acabado DWR)", desc: "Nailon ligero y resistente a la rotura con acabado repelente al agua duradero para líneas de golf, senderismo y alto rendimiento. Paneles perforados con láser para ventilación y badanas CoolMax que evacúan la humedad son opciones estándar." },
      { name: "Polar y Hilos de Punto", desc: "Telas de gorros de punto e invierno: polar de peso medio, punto de canalícula fina con vuelta, y hilos mezcla acrílico-lana para programas premium de frío." },
    ],
    complianceTitle: "Cumplimiento y Certificación",
    complianceBody:
       "Cuando tu mercado o retailer requiere documentación de cumplimiento, gestionamos pruebas de materiales de terceros por pedido: los informes viajan con el envío para que tu equipo de cumplimiento los verifique antes del despacho de aduana. Se conservan los registros de producción de cada pedido para trazar cualquier incidencia de calidad hasta la línea de costura.",
    checklistTitle: "Cómo Fluye un Pedido",
    checklist: [
      { title: "Especificaciones y Diseño", desc: "Envíanos tu logo (preferiblemente vectorial), una gorra de referencia o un tech pack completo. Nuestro equipo revisa la viabilidad y responde con una cotización FOB escrita en menos de 2 horas." },
      { title: "Muestra — 7 Días", desc: "Producimos una muestra física preproductiva para tu aprobación. El costo de la muestra se descuenta íntegro del pedido masivo una vez que alcanza las 500 unidades." },
      { title: "Producción Masiva — 15–20 Días", desc: "Tras aprobar la muestra, la producción arranca con un calendario con fechas. Compartimos fotos y videos de avance en el corte de tela, el bordado, el ensamble y el embalaje." },
      { title: "QC y Embalaje de Exportación", desc: "Las gorras se inspeccionan antes de embalar: alineación del bordado, integridad de costuras, medidas y acabado. Las cajas de exportación se embalan a 100 uds con protección contra humedad." },
      { title: "Envío y Documentación", desc: "Condiciones EXW, FOB o CIF. Se proporcionan factura comercial, lista de embalaje y certificados de origen; los pedidos con Alibaba Trade Assurance cuentan con protección de pago de la plataforma." },
    ],
    faqTitle: "Preguntas de Sourcing que nos Hacen",
    faqs: [
      { q: "¿Pueden reproducir una gorra de referencia que ya tengo?", a: "Sí. Envíanos fotos o remítanos la gorra de referencia y reconstruimos la construcción: número de paneles, altura del perfil, curvatura de la visera, peso de la tela y tipo de cierre. Apruebas una ficha comparativa por escrito antes de iniciar la muestra." },
      { q: "¿Qué formatos de archivo necesito para mi logo?", a: "Los archivos vectoriales (AI, EPS, PDF, SVG) dan la digitalización de bordado más limpia. Un PNG o JPG de alta resolución sirve para diseños más simples: nuestros digitalizadores reconstruyen el arte para puntada en cualquier caso, incluyendo base Tatami e igualación de color de hilo." },
      { q: "¿Cómo protegen mis diseños?", a: "Hay NDA disponible bajo solicitud antes de que compartas el arte. Los archivos de digitalización y los patrones de costura se producen solo para tu pedido y nunca se reutilizan ni se revenden a otros compradores." },
      { q: "¿Qué pasa si la calidad no es la correcta al recibir?", a: "Repórtalo con fotos dentro del período de inspección y solucionamos la reclamación: producción de reemplazo o reembolso. Además, los pedidos pagados con Alibaba Trade Assurance cuentan con protección de pago de la plataforma sobre nuestro propio compromiso de QC." },
      { q: "¿Producen embalaje private label?", a: "Sí: etiquetas de cuello tejidas personalizadas, cinta de costura damasco impresa, hangtags de marca, bolsas y cajas retail se producen con nuestros socios productivos y se embalan con tu pedido, para que la experiencia de apertura coincida con tu marca desde la primera unidad." },
      { q: "¿Pueden desarrollar un estilo desde cero (ODM)?", a: "Sí. Envía un boceto, un tablero de ideas o una gorra de referencia y nuestro equipo de diseño desarrolla la construcción, la digitalización y la lista de materiales contigo. Apruebas cada etapa —ficha comparativa, fotos de muestra y la muestra física— antes de la producción masiva." },
      { q: "¿Qué tan exacto es el ajuste de colores de mi marca?", a: "Los colores de hilo se ajustan a referencias Pantone, y los paneles, viseras y vivos de contraste se tiñen según tu especificación. La solidez del color se prueba antes del corte masivo para que las gorras resistan el lavado de tus clientes." },
      { q: "¿Qué opciones de envío ofrecen?", a: "EXW, FOB o CIF. El exprés aéreo cubre muestras y repones urgentes en 5–8 días; el fretado marítimo lleva los pedidos masivos en 25–35 días. Cada envío incluye factura comercial, lista de embalaje y certificados de origen." },
      { q: "¿Puedo visitar la fábrica?", a: "Nuestra producción se realiza en fábricas asociadas seleccionadas, por lo que organizamos recorridos en video en vivo de corte, bordado, costura y embalaje para cada pedido. Para programas confirmados también podemos coordinar visitas in situ con la fábrica asociada." },
    ],
    vetTitle: "Cómo Verificar a un Fabricante de Gorras",
    vet: [
      { title: "Pide los informes de verificación de la fábrica", desc: "Una fábrica real acepta la verificación SGS o equivalente y la comparte bajo solicitud. Pregunta cómo es auditada la planta y cuál es su política de tasa de defectos antes de comprometerte." },
      { title: "Confirma la capacidad de bordado interna", desc: "Muchos proveedores externalizan el bordado a talleres locales. Confirma dónde se bordará tu logo y pide video en vivo del bordado de tu logo durante la muestra." },
      { title: "Revisa la política de reembolso de muestra", desc: "Los proveedores serios descuentan el costo de la muestra del pedido masivo; el nuestro se descuenta íntegro al llegar a 500 unidades." },
      { title: "Verifica las opciones de pruebas de cumplimiento", desc: "El retail de EU y EE. UU. suele requerir REACH SVHC, OEKO-TEX Standard 100 o GRS. Pregunta si el proveedor gestiona pruebas de terceros por pedido y envía los informes con la mercancía, no después." },
      { title: "Compara rangos FOB, no solo el precio más bajo", desc: "Una cotización muy por debajo del rango de mercado de $3.50–$7.00 para gorras estructuradas suele significar tela más fina, menos puntadas o recargos ocultos. Pide una cotización con lista de materiales detallada." },
      { title: "Exige un calendario de producción con fechas", desc: "Consigue fechas de muestra y producción masiva por escrito. Una fábrica que comparte fotos y videos de avance en corte, bordado y embalaje respalda su calendario —y nosotros también." },
      { title: "Aclara el MOQ y las reglas de colores", desc: "Confirma el MOQ por estilo y por color. Los programas multicolor deberían repartirse sensatamente entre combinaciones sin recargos punitivos: el nuestro inicia en 200 uds por estilo/color." },
      { title: "Usa canales de pago seguros", desc: "Prefiere plataformas con protección al comprador como Alibaba Trade Assurance, o escrow para programas grandes. Las transferencias a cuentas personales son una bandera roja; las nuestras pasan por canales comerciales verificados." },
    ],
    glossaryTitle: "Términos de Fábrica Explicados",
    glossary: [
      { term: "FOB", def: "Free On Board — el precio cubre la mercancía embarcada en el puerto chino; flete marítimo y seguro corren por tu cuenta." },
      { term: "MOQ", def: "Cantidad mínima de pedido. La nuestra es 200 unidades por estilo y color." },
      { term: "OEM", def: "Tú provees el diseño y las especificaciones; la fábrica produce según ellos bajo tu marca." },
      { term: "ODM", def: "Diseño original manufacturado — la fábrica desarrolla el estilo contigo a partir de un boceto o referencia." },
      { term: "Tech pack", def: "El documento de especificaciones: medidas, tela, cierre, placement de decoración y detalle de construcción." },
      { term: "Digitalización", def: "Convertir el arte de tu logo en el archivo de puntadas que lee la máquina de bordado." },
      { term: "Bordado 3D puff", def: "Puntadas levantadas con base de espuma y acabado moldeado de alto relieve — el estándar streetwear." },
      { term: "Base Tatami", def: "Capa base densa de puntadas bajo la puntada superior para proteger la tela y afinar los bordes." },
      { term: "Sarga de algodón 108*56", def: "El conteo clásico de tela para gorras: 108 hilos de urdimbre y 56 de trama por pulgada — densa, estructurada y durable." },
      { term: "Bufete (buckram)", def: "Entrefuerza rígida prensada en los paneles frontales para mantener la forma de la corona." },
      { term: "Cinta damasco", def: "La cinta interior tejida de la costura central: un espacio premium para el logo de tu marca." },
      { term: "Ojal (eyelet)", def: "El orificio de ventilación, terminado bordado, cortado con láser o remachado en metal." },
      { term: "Snapback", def: "Cierre ajustable de virolas de plástico o metal, generalmente de corona alta." },
      { term: "Strapback", def: "Correa de tela con hebilla corredera de latón o plástico — el estándar de las dad hats." },
      { term: "Lavado con enzima", def: "Acabado vintage tratado con enzimas que suaviza el toque y desvanece el color de forma uniforme." },
      { term: "Lavado ácido", def: "Acabado vintage decolorado de alto contraste, popular en dad hats." },
      { term: "Acabado DWR", def: "Tratamiento repelente al agua duradero para gorras técnicas de nailon: el agua rebota en lugar de impregnar." },
      { term: "CBM", def: "Metro cúbico — la unidad de volumen por la que se cobra el flete marítimo. Nuestras cajas miden 60×45×40cm." },
      { term: "20GP / 40HQ", def: "Contenedores marítimos estándar y de altura cubica — las unidades habituales de envío masivo desde puertos chinos." },
      { term: "NDA", def: "Acuerdo de confidencialidad que protege tu arte; disponible bajo solicitud antes de compartir diseños." },
    ],
    logisticsTitle: "Embalaje y Flete",
    logisticsBody:
      "Cada gorra va embalada individualmente en bolsa polibolsa; las cajas se embalan a 100 unidades (aprox. 12kg brutos, caja maestra de 60×45×40cm) con protección contra humedad, y cada carga de contenedor se sella y fotografía antes del despacho. El exprés aéreo cubre muestras y repones urgentes en 5–8 días; el flete marítimo lleva los programas masivos en 25–35 días. Usa la calculadora CBM del menú de herramientas para estimar cajas y volumen de flete antes de comprometerte.",
    deepTitle: "Guía Profunda de Sourcing: Cómo Evalúan las Fábricas los Compradores Profesionales",
    deep: [
      { title: "Por qué las especificaciones importan más que el precio", body: "La mayoría de los pedidos de gorras fallidos no son culpa de malas fábricas, sino de especificaciones vagas. Cuando un comprador envía solo un logo y pide el mejor precio, cada fábrica cotiza contra una construcción supuesta diferente: peso de tela, número de paneles, rigidez de visera y cierre distintos. El resultado es impredecible y comparar esas cotizaciones es inútil porque describen productos distintos. Los compradores profesionales envían un tech pack o al menos una gorra de referencia, un reparto de cantidades por color y una banda FOB objetivo. Con esa información, una fábrica seria devuelve una cotización desglosada que puedes comparar línea por línea con otros proveedores: tela, puntos de bordado, decoración, herrajes y embalaje. Si estás evaluando varias fábricas, envía la misma ficha de especificaciones a todas y pide cotizaciones detalladas; la comparación revelará de inmediato quiénes entienden la construcción y quiénes adivinan." },
      { title: "Cómo se construye el precio FOB de fábrica", body: "El precio FOB de fábrica se construye en cinco capas: tela y fornituras, corte y costura, decoración (digitalización, hilo, espuma para 3D puff), control de calidad y embalaje de exportación, más los costes fijos y margen de la fábrica. La tela supone típicamente el 20–30% del coste unitario, la decoración el 15–25% según puntos y técnica, y la mano de obra el 25–35%. Entender esta estructura explica por qué existe la banda de $3.50–$7.00 para gorras estructuradas: por debajo de $3.50 la fábrica debe recortar en algún lado —sarga más fina, menos puntos, sin preencogido, herrajes reciclados— y esos recortes aparecen en tu producto, no en la factura. Al cotizar desglosamos el listado de materiales para que veas exactamente cuánto cuesta cada capa y elijas dónde invertir: tela más pesada, bordado más denso o cierres premium. Buscar precio sin esta estructura es cómo las marcas acaban con gorras que no se parecen a la muestra aprobada." },
      { title: "El coste real de una cotización anormalmente barata", body: "Cuando una cotización cae un 30–40% por debajo de la banda de mercado, no celebres: investiga. El descuento casi nunca es el margen de la fábrica; es una promesa que se romperá en algún lado. Patrones habituales: la tela cotizada es sarga 108*56 en papel pero un conteo fino 60*40 en producción masiva; la digitalización se subcontrata al taller más barato y los puntos salen borrosos; el frontal de cartulina se sustituye por un interfoliado fino que colapsa tras dos lavados; se salta el control de calidad y los defectos llegan al 8–15%. Cada uno de estos ahorros transfiere el coste a ti: devoluciones, quejas, stock muerto y marca dañada. Una fábrica fiable no gana solo por precio: competimos por honestidad constructiva, transparencia de hitos y economía de repeticiones. Pide a cualquier proveedor anormalmente barato que desglose su listado de materiales y comparta informes de verificación; las respuestas te dirán exactamente de dónde sale el descuento." },
      { title: "Tela: tacto, durabilidad y precio", body: "La elección de tela determina tacto, durabilidad y precio más que ninguna otra decisión. Nuestra más vendida, la sarga de algodón pesada 108*56, teje 108 hilos de urdida y 56 de trama por pulgada en una estructura diagonal densa que sostiene la corona estructurada, resiste lavados repetidos y acepta bordado 3D de alta densidad sin deformarse: la opción predeterminada para programas streetwear. El algodón cepillado cambia estructura por un tacto suave y mate, ideal para dad hats vintage; elige versiones precosidas para acabados de enzima o ácido para que las medidas se mantengan estables. Lona y dril son la opción de trabajo: pesados, resistentes a la abrasión y listos para ojales metálicos y remaches. La pana aporta textura estacional con surcos uniformes cuando el teñido de hilo se controla a nivel de fábrica. El nailon ripstop con acabado DWR sirve para golf y líneas de rendimiento: ligero, antidesgarre y repelente al agua. Dinos tu precio de venta y mercado objetivo y te recomendaremos la tela que protege tu margen y tu reputación." },
      { title: "Técnicas de bordado comparadas", body: "El bordado es donde la calidad de la gorra se muestra o desaparece. El bordado plano es el estándar versátil: limpio, rápido y económico para la mayoría de logos. El plano de alta densidad con base Tatami afila bordes y protege la tela en diseños densos. El 3D puff añade un relieve moldeado con base de espuma que las marcas streetwear reconocen al instante: exige digitalización precisa y control de tensión, por eso solo trabajamos con fábricas que operan líneas modernas de bordado multicabezal en casa en vez de subcontratar. El corte láser elimina hilo de forma programada para espacios en negativo nítidos, mientras que parches de cuero, estampado con foil, serigrafía y transfer térmico cubren los programas no bordados. La calidad de digitalización importa tanto como la máquina: un logo mal digitalizado falla en cualquier equipo. Envía arte vectorial (AI, EPS, PDF, SVG) y pide una prueba de digitalización antes de la muestra: las fábricas serias te muestran el plan de puntadas, colores de hilo y estrategia de base por escrito antes de mover una sola aguja." },
      { title: "Estructura de corona, cartulina y perfil", body: "La construcción de la corona determina cómo se lee la gorra en la cabeza del cliente. Las coronas estructuradas prensan cartulina rígida en los paneles frontales, manteniendo un domo definido que conserva su forma en la caja y en el estante: el estándar para snapbacks y 6 paneles premium. Las coronas no estructuradas omiten o reducen la cartulina y colapsan suavemente para el look vintage de dad hat; el precio es una gorra que hay que moldear antes de usar. La altura del perfil es el otro eje: perfiles bajos tipo A dominan los 5 paneles streetwear, mientras que los perfiles clásicos de béisbol son más redondeados y altos. La geometría de la visera completa el cuadro: viseras planas para snapbacks y campers, curvadas para dad hats, con profundidad ajustable por preferencia de mercado. Cuando envías una gorra de referencia, medimos paneles, altura de perfil, curvatura de visera y peso de tela, y enviamos una ficha comparativa por escrito antes de la muestra, para que no haya ambigüedad sobre qué significa la misma construcción." },
      { title: "Cierres, tallas y ajuste por mercado", body: "La elección del cierre afecta ajuste, durabilidad y precio. Los cierres snapback con snaps de plástico o metal convienen a coronas altas de visera plana y permiten reajustar fácilmente entre tallas: el estándar streetwear. Los cierres strapback con hebillas de latón o plástico son el estándar dad hat: ajustables, duraderos y económicos. Las traseras elásticas tipo flexfit sirven para programas promocionales y uniformes donde una talla debe ajustarse a la mayoría de cabezas. Para tallas entre mercados, las normas de circunferencia difieren: el retail norteamericano suele operar entre 54–62cm, el europeo sigue su propia escala, y en Asia Oriental las cabezas son ligeramente más pequeñas en promedio, lo que afecta cómo cae un cierre de talla única. Dinos tus mercados objetivo y especificaremos tipo de cierre, rango de ajuste y etiquetado de tallas por mercado. Los programas multicolor y multitalla se admiten dentro del mismo MOQ de 200 unidades por estilo y color, repartidos equitativamente sin recargos punitivos." },
      { title: "Cumplimiento: qué cubre realmente cada certificado", body: "El lenguaje de cumplimiento es donde muchos proveedores prometen de más, así que seamos precisos. Las gorras estándar en EE. UU. y la UE se rigen por normativas químicas y de seguridad más que por directivas de maquinaria CE. REACH restringe sustancias peligrosas en textiles y accesorios: relevante para paquetes de tintes y herrajes metálicos. OEKO-TEX Standard 100 prueba la tela terminada contra una lista amplia de sustancias nocivas: la señal más fuerte de seguridad para el consumidor en indumentaria. GRS verifica los alegatos de contenido reciclado a lo largo de la cadena con trazas de auditoría. Ninguno de estos es automático: las pruebas REACH SVHC, OEKO-TEX y GRS se gestionan por pedido con laboratorios de terceros, y los informes viajan con el envío para que tu equipo de cumplimiento los verifique antes del despacho de aduana. Se conservan registros de producción de cada pedido para trazar cualquier incidencia de calidad hasta la línea de costura. Indica los requisitos de tu mercado desde el inicio y mapearemos las pruebas exactas que tu programa necesita." },
      { title: "Muestreo: qué te dice una muestra preproductiva", body: "Una muestra preproductiva es la palanca de calidad más importante en el sourcing de gorras, y la mayoría de los compradores la subutilizan. Una buena muestra física te deja verificar: alineación del bordado y densidad de puntadas frente a tu arte; estructura de corona y altura de perfil frente a la especificación; curvatura y rigidez de la visera; funcionamiento y rango del cierre; ajuste y etiquetado de la badana; cinta damasco interna e integridad de costuras; y cómo sobrevive la gorra a un ciclo de lavado. Nuestro proceso produce una muestra física en 7 días con fotos y vídeo en cada hito, más una ficha comparativa por escrito que lista cada especificación y cómo la cumple la muestra. Revisa la muestra con deliberación: mídela, lavarla, úsala, compárala con tu gorra de referencia. Aprobar una muestra rápido porque aprieta la fecha es cómo se firman defectos en serie. El costo de la muestra se descuenta íntegro del pedido masivo una vez que alcanza 500 unidades, así que no hay razón financiera para saltarse una revisión seria." },
      { title: "Hitos de producción masiva y control de calidad", body: "Tras aprobar la muestra, la producción masiva corre 15–20 días contra un calendario con fechas. Compartimos fotos y vídeo en cuatro puntos de control: corte de tela (consistencia de lote de color y alineación de patrones), bordado (calidad de puntadas y colocación del logo en los primeros paneles), ensamble (alineación de costuras, instalación de badanas, ajuste del cierre) y embalaje (conteo final contra la lista de embalaje). Las gorras se inspeccionan antes de embalar: alineación del bordado, integridad de costuras, medidas y acabado. Los registros de producción se archivan por pedido para que cualquier unidad se trace hasta su línea de costura y estación de QC. Si un defecto llega hasta la recepción, repórtalo con fotos dentro del período de inspección y solucionamos la reclamación con producción de reemplazo o reembolso; los pedidos pagados con Alibaba Trade Assurance suman protección de pago de la plataforma sobre nuestro propio compromiso de QC." },
      { title: "Embalaje, CBM y planificación de flete", body: "El embalaje y la planificación de flete separan a los importadores profesionales de los compradores primerizos. Cada gorra va en polibolsa individual; las cajas de exportación se embalan a 100 unidades (aprox. 12kg brutos, caja maestra de 60×45×40cm) con protección contra humedad, y cada carga de contenedor se sella y fotografía antes del despacho. El flete marítimo se cobra por CBM, así que conocer tu número de cajas te deja comparar la economía 20GP frente a 40HQ con precisión: un 40HQ carga aproximadamente el doble que un 20GP por menos del doble del flete, por eso el precio a escala de contenedor baja significativamente. El exprés aéreo cubre muestras y repones urgentes en 5–8 días; el marítimo lleva los programas masivos en 25–35 días. Se admiten términos EXW, FOB y CIF con factura comercial, lista de embalaje y certificados de origen. Usa la calculadora CBM del menú de herramientas para estimar cajas y volumen antes de comprometer cantidades." },
      { title: "Seguridad de pago y relaciones a largo plazo", body: "La estructura de pago protege a ambos lados de una relación B2B. Para compradores primerizos recomendamos Alibaba Trade Assurance: la plataforma retiene los fondos en cuenta de custodia hasta que confirmas que el envío coincide con el pedido, sumando protección de pago sobre nuestro compromiso de QC. Los programas consolidados pueden usar T/T mediante cuentas empresarias verificadas: nunca cuentas personales, que son la señal de alerta más clara al evaluar proveedores. Más allá del pago, la economía del suministro a largo plazo importa: las fábricas con programas de repetición reservan capacidad cada trimestre, conservan tus archivos de digitalización y colores en registro para que los reaprovisionamientos salten la etapa de muestra, y extienden precios de contenedor antes. Nuestra política de reembolso de muestra desde 500 unidades, cotización por escrito en 2 horas y transparencia de hitos están diseñadas justo para esto: convertir un primer pedido en un programa estacional. Si estás construyendo una línea de gorras a largo plazo, trata la relación con la fábrica como el activo que es: y exige al fabricante la misma honestidad de calendario que exigirías a cualquier proveedor estratégico." },
    ],
  },
  pt: {
    badge: "Conhecimento de Sourcing B2B",
    title: "Fabricação de Bonés Personalizados: Materiais, Conformidade e Pedidos",
    intro:
      "A maioria dos pedidos de bonés que falham é culpa de especificações pouco claras, não de fábricas ruins. Esta seção resume como fabricamos, com quais materiais trabalhamos, como a conformidade é tratada e como funciona um pedido fluido, do tech pack ao contêiner — para você nos comparar a outros fornecedores com fatos.",
    materialsTitle: "Materiais com os quais Fabricamos",
    materials: [
      { name: "Sarja de Algodão Pesada 108*56", desc: "Nosso tecido de boné mais vendido: trama diagonal densa que mantém a estrutura, preserva a forma da coroa após a lavagem e aceita bordado 3D puff de alta densidade sem defeitos. A escolha padrão para programas streetwear de 5 painéis e 6 painéis estruturados." },
      { name: "Algodão Escovado", desc: "Toque mais suave com superfície fosca sutil; a opção popular para dad hats vintage e bonés de estilo de vida. Opções pré-encolhidas disponíveis para acabamentos lavados com enzima e ácido." },
      { name: "Lona e Drill", desc: "Algodão trançado pesado para workwear e estilos heritage que precisam suportar uso diário exigente. Combina bem com olhais metálicos, rebites e bordado tom sobre tom em programas corporativos e outdoor." },
       { name: "Pano Corda (Corduroy)", desc: "Corduroy de 6 e 8 cordões para coleções de outono/inverno. Nossas fábricas parceiras controlam a tinturaria do fio para os cordões ficarem uniformes em todo um contêiner, e a solidez de cor é testada antes do corte em massa." },
      { name: "Nylon Ripstop (Acabamento DWR)", desc: "Nylon leve e resistente ao rasgo com acabamento repelente à água durável para linhas de golfe, trilha e alto desempenho. Painéis perfurados a laser para ventilação e faixas CoolMax que conduzem a umidade são opções padrão." },
      { name: "Polar e Fios de Tricô", desc: "Tecidos de gorros de inverno: polar de peso médio, tricô canelado de agulha fina com babado, e fios mistos acrílico-lã para programas premium de frio." },
    ],
    complianceTitle: "Conformidade e Certificação",
    complianceBody:
      "Quando seu mercado ou varejista exige documentação de conformidade, organizamos testes de materiais de terceiros por pedido — os laudos viajam com a carga para que sua equipe de conformidade verifique antes do desembaraço aduaneiro. Os registros de produção de cada pedido são guardados para rastrear qualquer problema de qualidade até a linha de costura.",
    checklistTitle: "Como Funciona um Pedido",
    checklist: [
      { title: "Especificações e Arte", desc: "Envie seu logo (de preferência vetorial), um boné de referência ou um tech pack completo. Nossa equipe analisa a viabilidade e responde com cotação FOB escrita em até 2 horas." },
      { title: "Amostra — 7 Dias", desc: "Produzimos uma amostra física pré-produção para sua aprovação. O valor da amostra é abatido integralmente do pedido em massa quando ele atinge 500 peças." },
      { title: "Produção em Massa — 15–20 Dias", desc: "Após a aprovação da amostra, a produção começa com um cronograma datado. Fotos e vídeos de avanço são compartilhados no corte do tecido, no bordado, na montagem e na embalagem." },
      { title: "QC e Embalagem de Exportação", desc: "Os bonés são inspecionados antes da embalagem: alinhamento do bordado, integridade das costuras, medidas e acabamento. As caixas-master de exportação são embaladas com 100 un e proteção contra umidade." },
      { title: "Envio e Documentos", desc: "Condições EXW, FOB ou CIF. Fatura comercial, lista de embalagem e certificados de origem são fornecidos; pedidos com Alibaba Trade Assurance contam com proteção de pagamento da plataforma." },
    ],
    faqTitle: "Perguntas de Sourcing que Recebemos",
    faqs: [
      { q: "Vocês conseguem reproduzir um boné de referência que já tenho?", a: "Sim. Envie fotos ou nos encaminhe o boné de referência e reconstruímos a construção: número de painéis, altura do perfil, curvatura da aba, peso do tecido e tipo de fechamento. Você aprova uma ficha comparativa por escrito antes de iniciarmos a amostra." },
      { q: "Que formatos de arquivo preciso para minha logo?", a: "Arquivos vetoriais (AI, EPS, PDF, SVG) dão a digitalização de bordado mais limpa. PNG ou JPG de alta resolução funciona para designs mais simples — nossos digitalizadores reconstruem a arte para ponto em qualquer caso, incluindo base Tatami e igualação de cor de linha." },
      { q: "Como vocês protegem meus designs?", a: "Há NDA disponível sob solicitação antes de você compartilhar a arte. Os arquivos de digitalização e os padrões de costura são produzidos somente para o seu pedido e nunca são reutilizados ou revendidos a outros compradores." },
      { q: "O que acontece se a qualidade não for a certa na chegada?", a: "Informe com fotos dentro do período de inspeção e resolvemos a reclamação: produção de reposição ou reembolso. Além disso, pedidos pagos via Alibaba Trade Assurance contam com proteção de pagamento da plataforma além do nosso próprio compromisso de QC." },
      { q: "Vocês produzem embalagem private label?", a: "Sim — etiquetas de pescoço bordadas personalizadas, fita de costura damasco impressa, hangtags da marca, sacos e caixas retail são produzidos com nossos parceiros de produção e embalados com o seu pedido, para que a experiência de abertura combine com a sua marca desde a primeira unidade." },
      { q: "Vocês conseguem desenvolver um modelo do zero (ODM)?", a: "Sim. Envie um esboço, um mood board ou um boné de referência e a nossa equipe de design desenvolve a construção, a digitalização e a lista de materiais com você. Você aprova cada etapa — ficha comparativa, fotos da amostra e a amostra física — antes da produção em massa." },
      { q: "Quão preciso é o ajuste das cores da minha marca?", a: "As cores de linha são ajustadas a referências Pantone, e painéis, abas e galões de contraste são tingidos segundo a sua especificação. A solidez de cor é testada antes do corte em massa para que os bonés resistam à lavagem dos seus clientes." },
      { q: "Quais opções de envio vocês oferecem?", a: "EXW, FOB ou CIF. O expresso aéreo cobre amostras e reposições urgentes em 5–8 dias; o frete marítimo leva os pedidos em massa em 25–35 dias. Cada envio inclui fatura comercial, lista de embalagem e certificados de origem." },
      { q: "Posso visitar a fábrica?", a: "Nossa produção é realizada em fábricas parceiras selecionadas, por isso organizamos tours em vídeo ao vivo de corte, bordado, costura e embalagem para cada pedido. Para programas confirmados, também podemos coordenar visitas in loco com a fábrica parceira." },
    ],
    vetTitle: "Como Verificar um Fabricante de Bonés",
    vet: [
      { title: "Peça os relatórios de verificação da fábrica", desc: "Uma fábrica de verdade aceita a verificação SGS ou equivalente e a compartilha sob solicitação. Pergunte como a planta é auditada e qual é a política de taxa de defeitos antes de se comprometer." },
      { title: "Confirme a capacidade de bordado interna", desc: "Muitos fornecedores terceirizam o bordado para oficinas locais. Confirme onde o seu logo será bordado e peça vídeo ao vivo do bordado do seu logo durante a amostra." },
      { title: "Verifique a política de reembolso da amostra", desc: "Fornecedores sérios abatem o custo da amostra do pedido em massa; o nosso é abatido integralmente ao atingir 500 peças." },
      { title: "Verifique as opções de testes de conformidade", desc: "Varejo da UE e dos EUA frequentemente exige REACH SVHC, OEKO-TEX Standard 100 ou GRS. Pergunte se o fornecedor organiza testes de terceiros por pedido e envia os laudos com a mercadoria, e não depois." },
      { title: "Compare faixas FOB, não só o preço mais baixo", desc: "Uma cotação muito abaixo da faixa de mercado de $3.50–$7.00 para bonés estruturados geralmente significa tecido mais fino, menos pontos ou cobranças ocultas. Peça uma cotação com lista de materiais detalhada." },
      { title: "Exija um cronograma de produção datado", desc: "Consiga datas de amostra e produção em massa por escrito. Uma fábrica que compartilha fotos e vídeos de avanço no corte, no bordado e na embalagem sustenta o seu cronograma — e nós também." },
      { title: "Esclareça o MOQ e as regras de cores", desc: "Confirme o MOQ por modelo e por cor. Programas multicoloridos devem se distribuir sensatamente entre combinações sem taxas punitivas: o nosso começa em 200 peças por modelo/cor." },
      { title: "Use canais de pagamento seguros", desc: "Prefira plataformas com proteção ao comprador como Alibaba Trade Assurance, ou escrow para programas grandes. Transferências para contas pessoais são sinal de alerta; as nossas passam por canais comerciais verificados." },
    ],
    glossaryTitle: "Termos de Fábrica Explicados",
    glossary: [
      { term: "FOB", def: "Free On Board — o preço cobre a mercadoria embarcada no porto chinês; frete marítimo e seguro são por sua conta." },
      { term: "MOQ", def: "Quantidade mínima de pedido. A nossa é 200 peças por modelo e cor." },
      { term: "OEM", def: "Você fornece o design e as especificações; a fábrica produz segundo eles sob a sua marca." },
      { term: "ODM", def: "Design original desenvolvido pela fábrica — o modelo é desenvolvido com você a partir de um esboço ou referência." },
      { term: "Tech pack", def: "O documento de especificações: medidas, tecido, fechamento, posição da decoração e detalhe de construção." },
      { term: "Digitalização", def: "Converter a arte do seu logo no arquivo de pontos que a máquina de bordado lê." },
      { term: "Bordado 3D puff", def: "Pontos levantados com base de espuma e acabamento moldado de alto relevo — o padrão streetwear." },
      { term: "Base Tatami", def: "Camada base densa de pontos sob o ponto superior para proteger o tecido e afinar as bordas." },
      { term: "Sarja de algodão 108*56", def: "A contagem clássica de tecido para bonés: 108 fios de urdume e 56 de trama por polegada — denso, estruturado e durável." },
      { term: "Bufe (buckram)", def: "Entreforte rígido prensado nos painéis frontais para manter a forma da coroa." },
      { term: "Fita damasco", def: "A fita interna tecida da costura central: um espaço premium para o logo da sua marca." },
      { term: "Olhal (eyelet)", def: "O orifício de ventilação, terminado bordado, cortado a laser ou remachado em metal." },
      { term: "Snapback", def: "Fechamento ajustável com botões de plástico ou metal, geralmente de coroa alta." },
      { term: "Strapback", def: "Tira de tecido com fivela deslizante de latão ou plástico — o padrão dos dad hats." },
      { term: "Lavagem enzimática", def: "Acabamento vintage tratado com enzimas que suaviza o toque e desbota a cor de forma uniforme." },
      { term: "Lavagem ácida", def: "Acabamento vintage clareado de alto contraste, popular em dad hats." },
      { term: "Acabamento DWR", def: "Tratamento repelente à água durável para bonés técnicos de nylon: a água escorre em vez de impregnar." },
      { term: "CBM", def: "Metro cúbico — a unidade de volume pelo qual o frete marítimo é cobrado. Nossas caixas medem 60×45×40cm." },
      { term: "20GP / 40HQ", def: "Contêineres marítimos padrão e de altura cúbica — as unidades habituais de envio em massa dos portos chineses." },
      { term: "NDA", def: "Acordo de confidencialidade que protege a sua arte; disponível sob solicitação antes de compartilhar designs." },
    ],
    logisticsTitle: "Embalagem e Frete",
    logisticsBody:
      "Cada boné é embalado individualmente em saco plástico; as caixas são embaladas com 100 unidades (aprox. 12kg brutos, caixa-mãe de 60×45×40cm) com proteção contra umidade, e cada carga de contêiner é lacrada e fotografada antes do despacho. O expresso aéreo cobre amostras e reposições urgentes em 5–8 dias; o frete marítimo leva os programas em massa em 25–35 dias. Use a calculadora CBM no menu de ferramentas para estimar caixas e volume de frete antes de se comprometer.",
    deepTitle: "Guia Profundo de Sourcing: Como Compradores Profissionais Avaliam Fábricas de Bonés",
    deep: [
      { title: "Por que especificações importam mais do que preço", body: "A maioria dos pedidos de bonés frustrantes não é culpa de fábricas ruins — é culpa de especificações vagas. Quando o comprador envia apenas o logotipo e pede o melhor preço, cada fábrica cota contra uma construção suposta diferente: peso do tecido, número de painéis, rigidez da aba e fecho distintos. O resultado é imprevisível, e comparar esses orçamentos é inútil, porque eles descrevem produtos diferentes. Compradores profissionais enviam um tech pack ou pelo menos um boné de referência, uma divisão de quantidades por cor e uma faixa FOB alvo. Com essas informações, uma fábrica séria devolve um orçamento itemizado que você pode comparar de verdade linha por linha com outros fornecedores — tecido, pontos de bordado, decoração, ferragens e embalagem, tudo detalhado. Se você está avaliando várias fábricas, envie a mesma ficha técnica a todas e peça orçamentos detalhados; a comparação revelará imediatamente quem entende de construção e quem está chuteando." },
      { title: "Como é construído o preço FOB de fábrica", body: "O preço FOB de fábrica é construído em cinco camadas: tecido e aviamentos, corte e costura, decoração (digitalização, linha, espuma para 3D puff), controle de qualidade e embalagem de exportação, mais os custos fixos e a margem da fábrica. O tecido representa tipicamente 20–30% do custo unitário, a decoração 15–25% conforme pontos e técnica, e a mão de obra 25–35%. Entender essa estrutura explica por que a faixa de $3,50–$7,00 existe para bonés estruturados: abaixo de $3,50 a fábrica precisa cortar custos em algum lugar — sarja mais fina, menos pontos, sem pré-encolhimento, ferragens recicladas — e esses cortes aparecem no seu produto, não na nota fiscal. Ao cotar, detalhamos a lista de materiais para você ver exatamente quanto cada camada custa e escolher onde investir: tecido mais pesado, bordado mais denso ou fechos premium. Caçar preço sem essa estrutura é assim que marcas acabam com bonés que não parecem com a amostra aprovada." },
      { title: "O custo real de um orçamento anormalmente barato", body: "Quando um orçamento cai 30–40% abaixo da faixa de mercado, não comemore — investigue. O desconto quase nunca é a margem da fábrica; é uma promessa que será quebrada em algum lugar. Padrões comuns: o tecido cotado é sarja 108*56 no papel, mas um fio fino 60*40 na produção em massa; a digitalização é terceirizada ao ateliê mais barato e os pontos saem borrados; a frontal de entretela é substituída por um interforro fino que desmorona após duas lavagens; a etapa de QC é pulada por completo e os defeitos chegam a 8–15%. Cada uma dessas economias transfere o custo para você: devoluções, reclamações, estoque parado e marca desgastada. Uma fábrica confiável não vence só por preço — competimos por honestidade construtiva, transparência de marcos e economia de pedidos recorrentes. Peça a qualquer fornecedor anormalmente barato que detalhe a lista de materiais e compartilhe relatórios de verificação de fábrica; as respostas dirão exatamente de onde veio o desconto." },
      { title: "Tecido: toque, durabilidade e preço", body: "A escolha do tecido determina toque, durabilidade e preço mais do que qualquer outra decisão. Nosso mais vendido, a sarja de algodão pesada 108*56, tece 108 fios de urdume e 56 de trama por polegada em uma estrutura diagonal densa que sustenta a coroa estruturada, resiste a lavagens repetidas e aceita bordado 3D de alta densidade sem distorção — a opção padrão para programas streetwear. O algodão escovado troca estrutura por um toque suave e acabamento fosco, ideal para dad hats vintage; escolha versões pré-encolhidas para acabamentos com enzima ou ácido para que as medidas se mantenha estáveis. Lona e brim são a escolha para trabalho: pesados, resistentes à abrasão e prontos para ventilas metálicos e rebites. A sarja de corduroy traz textura sazonal com cordões uniformes quando a tingimento do fio é controlado a nível de fábrica. O nylon ripstop com acabamento DWR atende golf e linhas de desempenho: leve, resistente ao rasgo e repelente à água. Conte seu preço de varejo e mercado alvo e recomendaremos o tecido que protege sua margem e sua reputação." },
      { title: "Técnicas de bordado comparadas", body: "O bordado é onde a qualidade do boné aparece ou desaparece. O bordado plano é o padrão versátil: limpo, rápido e econômico para a maioria dos logotipos. O plano de alta densidade com base Tatami afia as bordas e protege o tecido em designs densos. O 3D puff adiciona um relevo moldado com base de espuma que marcas streetwear reconhecem instantaneamente — exige digitalização precisa e controle de tensão, por isso trabalhamos apenas com fábricas que operam linhas modernas de bordado multi-agulha internamente em vez de terceirizar. O corte a laser remove fios de forma programada para espaços negativos nítidos, enquanto patches de couro, estampagem a foil, serigrafia e transfer térmico cobrem os programas não bordados. A qualidade da digitalização importa tanto quanto a máquina: um logotipo mal digitalizado falha em qualquer equipamento. Envie arte vetorial (AI, EPS, PDF, SVG) e peça uma prova de digitalização antes da amostra — fábricas sérias mostram o plano de pontos, cores de linha e estratégia de base por escrito antes de mover uma única agulha." },
      { title: "Estrutura da coroa, entretela e perfil", body: "A construção da coroa determina como o boné é lido na cabeça do cliente. Coroas estruturadas prensam entretela rígida nos painéis frontais, mantendo um domo definido que conserva a forma na caixa e na prateleira — o padrão para snapbacks e 6 painéis premium. Coroas não estruturadas omitem ou reduzem a entretela, colapsando suavemente para o visual vintage de dad hat; o preço é um boné que precisa ser modelado antes de usar. A altura do perfil é o outro eixo: perfis baixos em A dominam os 5 painéis streetwear, enquanto perfis clássicos de beisebol são mais arredondados e altos. A geometria da aba completa o quadro: abas planas para snapbacks e campers, abas curvas para dad hats, com profundidade ajustável por preferência de mercado. Quando você envia um boné de referência, medimos painéis, altura do perfil, curvatura da aba e peso do tecido, e enviamos uma ficha comparativa por escrito antes da amostra, para que não haja ambiguidade sobre o que significa a mesma construção." },
      { title: "Fechos, tamanhos e ajuste por mercado", body: "A escolha do fecho afeta ajuste, durabilidade e preço. Fechos snapback com presilhas de plástico ou metal servem coroas altas de aba plana e permitem ajuste fácil entre tamanhos — o padrão streetwear. Fechos strapback com fivelas de latão ou plástico são o padrão dad hat: ajustáveis, duráveis e baratos. Costas elásticas estilo flexfit servem programas promocionais e uniformes onde um tamanho precisa servir a maioria das cabeças. Para tamanhos entre mercados, as normas de circunferência diferem: o varejo norte-americano geralmente opera entre 54–62cm, o europeu segue sua própria escala, e na Ásia Oriental as cabeças são ligeiramente menores em média, o que afeta como um fecho de tamanho único assenta. Conte seus mercados alvo e especificaremos tipo de fecho, faixa de ajuste e rotulagem de tamanhos por mercado. Programas multicolor e multitamanho são aceitos dentro do mesmo MOQ de 200 unidades por estilo e cor, divididos igualmente entre cores sem sobrecargas punitivas." },
      { title: "Conformidade: o que cada certificado realmente cobre", body: "A linguagem de conformidade é onde muitos fornecedores prometem demais, então sejamos precisos. Bonés padrão na UE e nos EUA são regidos por normas químicas e de segurança, não por diretivas de máquinas CE. REACH restringe substâncias perigosas em têxteis e acessórios — relevante para pacotes de corantes e ferragens metálicas. OEKO-TEX Standard 100 testa o tecido acabado contra uma lista ampla de substâncias nocivas — o sinal mais forte de segurança para o consumidor em vestuário. GRS verifica alegações de conteúdo reciclado ao longo da cadeia com trilhas de auditoria. Nenhum desses é automático: os testes REACH SVHC, OEKO-TEX e GRS são organizados por pedido com laboratórios de terceiros, e os relatórios viajam com o envio para que sua equipe de conformidade verifique antes do desembaraço aduaneiro. Registros de produção são guardados por pedido para que problemas de qualidade sejam rastreados até a linha de costura. Informe os requisitos do seu mercado desde o início e mapearemos exatamente os testes que seu programa precisa." },
      { title: "Amostragem: o que uma amostra pré-produção revela", body: "Uma amostra pré-produção é a alavanca de qualidade mais importante no sourcing de bonés — e a maioria dos compradores a subutiliza. Uma boa amostra física permite verificar: alinhamento do bordado e densidade de pontos frente à sua arte; estrutura da coroa e altura do perfil frente à especificação; curvatura e rigidez da aba; funcionamento e faixa do fecho; ajuste e rotulagem da bandana; fita damasco interna e integridade das costuras; e como o boné sobrevive a um ciclo de lavagem. Nosso processo produz uma amostra física em 7 dias com fotos e vídeo em cada marco, mais uma ficha comparativa por escrito listando cada especificação e como a amostra a atende. Revise a amostra com deliberatividade: meça, lave, use, compare com seu boné de referência. Aprovar uma amostra rápido porque o prazo aperta é assim que defeitos em série são assinados. A taxa da amostra é abatida por completo do pedido em massa quando ele atinge 500 unidades, então não há razão financeira para pular uma revisão séria." },
      { title: "Marcos da produção em massa e QC", body: "Após a aprovação da amostra, a produção em massa roda por 15–20 dias contra um cronograma com datas. Compartilhamos fotos e vídeos em quatro pontos de controle: corte do tecido (consistência de lote de cor e alinhamento de padrões), bordado (qualidade dos pontos e posicionamento do logotipo nos primeiros painéis), montagem (alinhamento de costuras, instalação da bandana, ajuste do fecho) e embalagem (contagem final contra a lista de embalagem). Os bonés são inspecionados antes da embalagem: alinhamento do bordado, integridade das costuras, medidas e acabamento. Registros de produção são arquivados por pedido para que qualquer unidade seja rastreada até sua linha de costura e estação de QC. Se um defeito escapar até a chegada, relate com fotos dentro do prazo de inspeção e resolvemos a reclamação com produção de reposição ou reembolso; pedidos pagos via Alibaba Trade Assurance somam proteção de pagamento da plataforma por cima do nosso próprio compromisso de QC." },
      { title: "Embalagem, CBM e planejamento de frete", body: "Embalagem e planejamento de frete separam importadores profissionais de compradores de primeira viagem. Cada boné vai em saco plástico individual; as caixas de exportação são embaladas com 100 unidades (aprox. 12kg brutos, caixa-mãe de 60×45×40cm) com proteção contra umidade, e cada carga de contêiner é lacrada e fotografada antes do despacho. O frete marítimo é cobrado por CBM, então conhecer sua quantidade de caixas permite comparar a economia 20GP versus 40HQ com precisão — um 40HQ carrega aproximadamente o dobro de um 20GP por menos do que o dobro do frete, por isso o preço em escala de contêiner cai significativamente. O expresso aéreo cobre amostras e reposições urgentes em 5–8 dias; o marítimo leva programas em massa em 25–35 dias. Condições EXW, FOB e CIF são suportadas com fatura comercial, lista de embalagem e certificados de origem. Use a calculadora CBM no menu de ferramentas para estimar caixas e volume antes de comprometer quantidades." },
      { title: "Segurança de pagamento e relações de longo prazo", body: "A estrutura de pagamento protege os dois lados de um relacionamento B2B. Para compradores de primeira viagem, recomendamos Alibaba Trade Assurance: a plataforma retém os fundos em custódia até você confirmar que o envio corresponde ao pedido, somando proteção de pagamento por cima do nosso compromisso de QC. Programas consolidados podem usar T/T por contas empresariais verificadas — nunca contas pessoais, que são o sinal de alerta mais claro na avaliação de fornecedores. Além do pagamento, a economia de fornecimento de longo prazo importa: fábricas com programas recorrentes reservam capacidade a cada trimestre, guardam seus arquivos de digitalização e cores em registro para que reposições pulem a etapa de amostra, e estendem preços de contêiner mais cedo. Nossa política de reembolso de amostra a partir de 500 unidades, orçamento por escrito em 2 horas e transparência de marcos foram desenhados exatamente para isso: transformar um primeiro pedido em um programa sazonal. Se você está construindo uma linha de bonés para o longo prazo, trate o relacionamento com a fábrica como o ativo que ele é — e exija da fábrica a mesma honestidade de cronograma que exigiria de qualquer fornecedor estratégico." },
    ],
  },
  it: {
    badge: "Conoscenze di Sourcing B2B",
    title: "Produzione di Cappellini Personalizzati: Materiali, Conformità e Ordini",
    intro:
      "La maggior parte degli ordini di cappellini falliti è causata da specifiche poco chiare, non da fabbriche scadenti. Questa sezione riassume come produciamo, con quali materiali lavoriamo, come gestiamo la conformità e come procede un ordine fluido, dal tech pack al container — così da confrontarci con gli altri fornitori su fatti concreti.",
    materialsTitle: "Materiali con cui Produciamo",
    materials: [
      { name: "Sergé di Cotone Pesante 108*56", desc: "Il nostro tessuto più venduto per cappellini: una trama diagonale densa che mantiene la struttura, conserva la forma della corona dopo il lavaggio e accoglie il ricamo 3D puff ad alta densità senza difetti. La scelta predefinita per i programmi streetwear a 5 pannelli e 6 pannelli strutturati." },
      { name: "Cotone Spazzolato", desc: "Tatto più morbido con superficie opaca discreta; la scelta popolare per dad hat vintage e cappellini lifestyle. Disponibili opzioni pre-accorcite per finiture lavate con enzimi e acido." },
      { name: "Tele e Drill", desc: "Cotone intrecciato pesante per workwear e stili heritage che devono resistere a un uso quotidiano intenso. Si abbina bene a occhielli metallici, rivetti e ricami tonali su programmi corporate e outdoor." },
       { name: "Panno Grezzo (Corduroy)", desc: "Corduroy a 6 e 8 coste per collezioni autunno/inverno. Le nostre fabbriche partner gestiscono la tintura del filato per mantenere le coste uniformi su un intero container, e la solidità del colore viene testata prima del taglio in serie." },
      { name: "Nylon Ripstop (Finitura DWR)", desc: "Nylon leggero e antistrappo con finitura idrorepellente durevole per linee da golf, trekking e alte prestazioni. Pannelli forati a laser per la ventilazione e visiere interne CoolMax che allontanano l'umidità sono opzioni standard." },
      { name: "Polar e Filati a Maglia", desc: "Tessuti per berretti e linee invernali: polar medio, maglia a costine fine con risvolto, e filati misti acrilico-lana per programmi premium invernali." },
    ],
    complianceTitle: "Conformità e Certificazione",
    complianceBody:
      "Quando il vostro mercato o retailer lo richiede, organizziamo test di terze parti sui materiali per ordine: le relazioni viaggiano con la spedizione affinché il vostro team di conformità le verifichi prima dello sdoganamento. I registri di produzione di ogni ordine sono conservati per tracciare qualsiasi problema di qualità fino alla linea di cucitura.",
    checklistTitle: "Come Procede un Ordine",
    checklist: [
      { title: "Specifiche e Grafica", desc: "Inviatoci il vostro logo (preferibilmente vettoriale), un cappellino di riferimento o un tech pack completo. Il nostro team valuta la fattibilità e risponde con un preventivo FOB scritto entro 2 ore." },
      { title: "Campione — 7 Giorni", desc: "Produciamo un campione fisico pre-produzione per la vostra approvazione. Il costo del campione viene rimborsato integralmente sull'ordine in serie una volta raggiunti i 500 pezzi." },
      { title: "Produzione in Serie — 15–20 Giorni", desc: "Dopo l'approvazione del campione, la produzione parte con un calendario datato. Foto e video di avanzamento sono condivisi al taglio del tessuto, al ricamo, al montaggio e all'imballaggio." },
      { title: "QC e Imballaggio per l'Esportazione", desc: "I cappellini vengono ispezionati prima dell'imballo: allineamento del ricamo, integrità delle cuciture, misure e finitura. Le casse di esportazione sono imballate a 100 pz con protezione dall'umidità." },
      { title: "Spedizione e Documenti", desc: "Termini EXW, FOB o CIF. Vengono forniti fattura commerciale, lista di imballaggio e certificati di origine; gli ordini con Alibaba Trade Assurance godono della protezione dei pagamenti della piattaforma." },
    ],
    faqTitle: "Domande di Sourcing che Riceviamo",
    faqs: [
      { q: "Riuscite a riprodurre un cappellino di riferimento che ho già?", a: "Sì. Inviatoci delle foto o mandateci il cappellino di riferimento e ricostruiamo la costruzione: numero di pannelli, altezza del profilo, curvatura della visiera, peso del tessuto e tipo di chiusura. Approvate una scheda comparativa scritta prima di avviare il campione." },
      { q: "Che formati di file mi servono per il mio logo?", a: "I file vettoriali (AI, EPS, PDF, SVG) danno la digitalizzazione del ricamo più pulita. Un PNG o JPG ad alta risoluzione va bene per design più semplici: i nostri digitalizzatori ricostruiscono il artwork per il punto in ogni caso, inclusa la base Tatami e l'ugualiazione del colore del filo." },
      { q: "Come proteggete i miei design?", a: "È disponibile un NDA su richiesta prima che condividiate l'artwork. I file di digitalizzazione e i cartamodelli sono prodotti solo per il vostro ordine e non vengono mai riutilizzati né rivenduti ad altri acquirenti." },
      { q: "Cosa succede se la qualità non è corretta all'arrivo?", a: "Segnalate con foto entro il periodo di ispezione e risolviamo il reclamo: produzione sostitutiva o rimborso. Inoltre, gli ordini pagati con Alibaba Trade Assurance hanno la protezione dei pagamenti della piattaforma oltre al nostro stesso impegno di QC." },
      { q: "Producete confezioni private label?", a: "Sì — etichette collo tessute personalizzate, nastro damasco interno stampato, hangtag di marca, buste e scatole retail sono prodotti con i nostri partner produttivi e confezionati con il vostro ordine, così l'esperienza di apertura è in linea con il vostro brand dalla prima unità." },
      { q: "Potete sviluppare un modello da zero (ODM)?", a: "Sì. Inviate uno schizzo, una mood board o un cappellino di riferimento e il nostro team di design sviluppa costruzione, digitalizzazione e lista materiali con voi. Approvate ogni fase — scheda comparativa, foto del campione e campione fisico — prima della produzione in serie." },
      { q: "Con quanta precisione riuscite a intonare i colori del mio brand?", a: "I colori del filo sono abbinati a riferimenti Pantone, e pannelli, visiere e piping a contrasto sono tinti secondo la vostra specifica. La solidità cromatica viene testata prima del taglio in serie, così i cappellini resistono ai lavaggi dei vostri clienti." },
      { q: "Che opzioni di spedizione offrite?", a: "EXW, FOB o CIF. L'expresso aereo copre campioni e riproposizioni urgenti in 5–8 giorni; il trasporto marittimo gestisce gli ordini in serie in 25–35 giorni. Ogni spedizione include fattura commerciale, lista di imballaggio e certificati di origine." },
      { q: "Posso visitare la fabbrica?", a: "La nostra produzione avviene in fabbriche partner selezionate, quindi organizziamo tour in video live di taglio, ricamo, cucitura e imballaggio per ogni ordine. Per i programmi confermati possiamo anche coordinare visite in sede con la fabbrica partner." },
    ],
    vetTitle: "Come Verificare un Produttore di Cappellini",
    vet: [
      { title: "Richiedete i rapporti di verifica della fabbrica", desc: "Una fabbrica vera accetta la verifica SGS o equivalente e la condivide su richiesta. Chiedete come lo stabilimento è auditato e qual è la politica sulla percentuale di difetti prima di impegnarvi." },
      { title: "Confermate la capacità di ricamo interna", desc: "Molti fornitori esternalizzano il ricamo a laboratori locali. Confermate dove il vostro logo sarà ricamato e chiedete video live del ricamo del vostro logo durante il campione." },
      { title: "Controllate la politica di rimborso del campione", desc: "I fornitori seri rimborsano il costo del campione sull'ordine in serie; il nostro è rimborsato integralmente raggiunti i 500 pezzi." },
      { title: "Verificate le opzioni di test di conformità", desc: "Il retail UE e USA richiede spesso REACH SVHC, OEKO-TEX Standard 100 o GRS. Chiedete se il fornitore organizza test di terze parti per ordine e spedisce i rapporti con la merce, non dopo." },
      { title: "Confrontate le fasce FOB, non solo il prezzo più basso", desc: "Un preventivo molto sotto la fascia di mercato di $3,50–$7,00 per cappellini strutturati di solito significa tessuto più sottile, meno punti o sovraccarichi nascosti. Richiedete un preventivo con lista materiali dettagliata." },
      { title: "Esigete un calendario di produzione con date", desc: "Ottenete date di campione e produzione in serie per iscritto. Una fabbrica che condivide foto e video di avanzamento al taglio, al ricamo e all'imballaggio sostiene il suo calendario — e così facciamo anche noi." },
      { title: "Chiarite MOQ e regole di colore", desc: "Confermate il MOQ per modello e per colore. I programmi multicolore dovrebbero ripartirsi in modo sensato tra le combinazioni senza sovraccarichi punitivi: il nostro parte da 200 pz per modello/colore." },
      { title: "Usate canali di pagamento sicuri", desc: "Preferite piattaforme con protezione per l'acquirente come Alibaba Trade Assurance, o escrow per i programmi grandi. I bonifici su conti personali sono un segnale d'allarme: i nostri passano per canali commerciali verificati." },
    ],
    glossaryTitle: "Termini di Fabbrica Spiegati",
    glossary: [
      { term: "FOB", def: "Free On Board — il prezzo copre la merce imbarcata nel porto cinese; nolo marittimo e assicurazione sono a vostro carico." },
      { term: "MOQ", def: "Quantità minima d'ordine. La nostra è 200 pezzi per modello e colore." },
      { term: "OEM", def: "Voi fornite design e specifiche; la fabbrica produce secondo quelle, sotto il vostro brand." },
      { term: "ODM", def: "Design originale sviluppato in fabbrica — il modello è sviluppato con voi a partire da uno schizzo o un riferimento." },
      { term: "Tech pack", def: "Il documento di specifica: misure, tessuto, chiusura, posizionamento decorazioni e dettaglio di costruzione." },
      { term: "Digitalizzazione", def: "Convertire l'artwork del vostro logo nel file di punti che la macchina da ricamo legge." },
      { term: "Ricamo 3D puff", def: "Punti rialzati con base in schiuma e finitura modellata ad alto rilievo — lo standard streetwear." },
      { term: "Base Tatami", def: "Layer base denso di punti sotto il punto superiore, per proteggere il tessuto e definire i bordi." },
      { term: "Sergé di cotone 108*56", def: "La conta classica di tessuto per cappellini: 108 fili di catena e 56 di trama per pollice — densa, strutturata e durevole." },
      { term: "Telaiera (buckram)", def: "Interafel rigido pressato nei pannelli frontali per mantenere la forma della corona." },
      { term: "Nastro damasco", def: "Il nastro interno tessuto della cucitura centrale: uno spazio premium per il logo del brand." },
      { term: "Occhiello (eyelet)", def: "Il foro di ventilazione, finito ricamato, tagliato al laser o rivetato in metallo." },
      { term: "Snapback", def: "Chiusura regolabile con bottoni a pressione in plastica o metallo, generalmente ad alta corona." },
      { term: "Strapback", def: "Fascia di tessuto con fibbia scorrevole in ottone o plastica — lo standard dei dad hat." },
      { term: "Lavaggio enzimatico", def: "Finitura vintage trattata con enzimi che ammorbidisce la mano e sbiadisce il colore in modo uniforme." },
      { term: "Lavaggio acido", def: "Finitura vintage sbiancata ad alto contrasto, popolare sui dad hat." },
      { term: "Finitura DWR", def: "Trattamento idrorepellente durevole per cappellini tecnici in nylon: l'acqua rimbalza invece di inzuppare." },
      { term: "CBM", def: "Metro cubo — l'unità di volume con cui si factura il nolo marittimo. Le nostre casse misurano 60×45×40cm." },
      { term: "20GP / 40HQ", def: "Container marittimi standard e ad altezza cubica — le unità di spedizione in serie abituali dai porti cinesi." },
      { term: "NDA", def: "Accordo di riservatezza che protegge il vostro artwork; disponibile su richiesta prima di condividere i design." },
    ],
    logisticsTitle: "Imballaggio e Trasporto",
    logisticsBody:
      "Ogni cappellino è confezionato singolarmente in busta di plastica; le casse sono imballate a 100 pezzi (circa 12kg lordi, cassa madre da 60×45×40cm) con protezione dall'umidità, e ogni carico container è sigillato e fotografato prima della spedizione. L'expresso aereo copre campioni e riproposizioni urgenti in 5–8 giorni; il trasporto marittimo gestisce i programmi in serie in 25–35 giorni. Usate la calcolatrice CBM nel menu strumenti per stimare casse e volume di trasporto prima di impegnarvi.",
    deepTitle: "Guida Profonda al Sourcing: Come gli Acquirenti Professionisti Valutano le Fabbriche di Cappellini",
    deep: [
      { title: "Perché le specifiche contano più del prezzo", body: "La maggior parte degli ordini di cappellini falliti non è causata da fabbriche scadenti, ma da specifiche vaghe. Quando un acquirente invia solo un logo e chiede il miglior prezzo, ogni fabbrica quota contro una costruzione presunta diversa: peso del tessuto, numero di pannelli, rigidità della visiera e chiusura differenti. Il risultato è imprevedibile e confrontare quei preventivi è inutile, perché descrivono prodotti diversi. Gli acquirenti professionisti inviano un tech pack o almeno un cappellino di riferimento, una ripartizione delle quantità per colore e una fascia FOB target. Con quelle informazioni una fabbrica seria restituisce un preventivo analitico che potete confrontare davvero riga per riga con altri fornitori: tessuto, punti di ricamo, decorazione, hardware e imballaggio, tutto dettagliato. State valutando più fabbriche? Inviate a tutte la stessa scheda tecnica e chiedete preventivi dettagliati: il confronto rivelerà subito chi capisce la costruzione e chi sta tirando a indovinare." },
      { title: "Come si costruisce un prezzo FOB di fabbrica", body: "Un prezzo FOB di fabbrica si costruisce in cinque livelli: tessuto e forniture, taglio e cucitura, decorazione (digitalizzazione, filo, schiuma per 3D puff), controllo qualità e imballo per l'esportazione, più i costi fissi e il margine della fabbrica. Il tessuto incide tipicamente per il 20–30% del costo unitario, la decorazione per il 15–25% a seconda di punti e tecnica, e la manodopera per il 25–35%. Comprendere questa struttura spiega perché esiste la fascia $3,50–$7,00 per i cappellini strutturati: sotto i $3,50 una fabbrica deve tagliare da qualche parte — twill più sottile, meno punti, nessun pre-restringimento, hardware riciclato — e quei tagli compaiono nel vostro prodotto, non nella fattura. Quando quotiamo, analizziamo il distinto base in modo che vediate esattamente quanto costa ogni livello e scegliate dove investire: tessuto più pesante, ricamo più denso o chiusure premium. Cacciare il prezzo senza questa struttura è così che i brand finiscono con cappellini che non somigliano al campione approvato." },
      { title: "Il costo reale di un preventivo anormalmente basso", body: "Quando un preventivo cade del 30–40% sotto la fascia di mercato, non festeggiate: investigate. Lo sconto quasi mai è il margine della fabbrica; è una promessa che verrà rotta da qualche parte. Pattern comuni: il tessuto quotato è twill 108*56 sulla carta ma un conteggio sottile 60*40 nella produzione in serie; la digitalizzazione è esternalizzata all'atelier più economico e i punti escono sfocati; il davanti in cartapesta viene sostituito da un interfodera sottile che collassa dopo due lavaggi; la fase di QC viene saltata del tutto e i difetti arrivano all'8–15%. Ognuno di questi risparmi trasferisce il costo su di voi: resi, reclami, magazzino fermo e marca danneggiata. Una fabbrica affidabile non vince solo sul prezzo: competiamo per onestà costruttiva, trasparenza delle milestone ed economia degli ordini ripetuti. Chiedete a qualsiasi fornitore anormalmente economico di dettagliare il distinto base e di condividere i report di verifica della fabbrica; le risposte vi diranno esattamente da dove nasce lo sconto." },
      { title: "Tessuto: mano, durata e prezzo", body: "La scelta del tessuto determina mano, durata e prezzo più di qualsiasi altra decisione. Il nostro best-seller, il pesante twill di cotone 108*56, tesse 108 fili di catena e 56 di trama per pollice in una struttura diagonale densa che sostiene la corona strutturata, resiste a lavaggi ripetuti e accetta ricami 3D ad alta densità senza distorcersi — la scelta di default per i programmi streetwear. Il cotone spazzolato scambia struttura per una mano morbida e opaca, ideale per dad hat vintage; scegliete versioni pre-restrinte per finiture a enzimi o acido perché le misure restino stabili. Telone e drill sono la scelta per il lavoro: pesanti, resistenti all'abrasione e pronti per occhielli metallici e rivetti. Il corduroy porta texture stagionale con coste regolari quando la tintura del filo è controllata a livello di fabbrica. Il nylon ripstop con finitura DWR serve golf e linee performance: leggero, anti-strappo e idrorepellente. Diteci prezzo di vendita al dettaglio e mercato target e vi consiglieremo il tessuto che protegge margine e reputazione." },
      { title: "Tecniche di ricamo confrontate", body: "Il ricamo è il punto in cui la qualità del cappellino emerge o sparisce. Il ricamo piatto è lo standard versatile: pulito, rapido ed economico per la maggior parte dei loghi. Il piatto ad alta densità con base Tatami affina i bordi e protegge il tessuto su disegni densi. Il 3D puff aggiunge un rilievo modellato con base in schiuma che i brand streetwear riconoscono istantaneamente — richiede digitalizzazione precisa e controllo della tensione, ed è per questo che lavoriamo solo con fabbriche che fanno girare linee moderne di ricamo mult testa in casa anziché esternalizzare. Il taglio laser rimuove il filo in modo programmato per spazi negativi netti, mentre patch in pelle, stampaggio a foil, serigrafia e transfer termico coprono i programmi non ricamati. La qualità della digitalizzazione conta quanto la macchina: un logo digitalizzato male fallisce su qualsiasi attrezzatura. Inviate artwork vettoriale (AI, EPS, PDF, SVG) e chiedete una prova di digitalizzazione prima del campione — le fabbriche serie vi mostrano piano di punti, colori filo e strategia di base per scritto prima che una singola cucitura si compia." },
      { title: "Struttura della corona, cartapesta e profilo", body: "La costruzione della corona determina come il cappellino si legge sulla testa del cliente. Le corone strutturate premono una cartapesta rigida sui pannelli frontali, mantenendo un domo definito che conserva la forma nella scatola e sullo scaffale — lo standard per snapback e 6 pannelli premium. Le corone non strutturate omettono o riducono la cartapesta, collassando dolcemente per il look vintage del dad hat; il compromesso è un cappellino da modellare prima dell'uso. L'altezza del profilo è l'altro asse: profili bassi a telaio A dominano i 5 pannelli streetwear, mentre i profili classici da baseball sono più tondi e alti. La geometria della visiera completa il quadro: visiere piatte per snapback e camper, visiere curve per dad hat, con profondità regolabile per mercato. Quando inviate un cappellino di riferimento, misuriamo pannelli, altezza del profilo, curvatura della visiera e peso del tessuto, poi inviamo una scheda comparativa per scritto prima del campionamento, in modo che non ci sia ambiguità su cosa significhi la stessa costruzione." },
      { title: "Chiusure, taglie e vestibilità per mercato", body: "La scelta della chiusura incide su vestibilità, durata e prezzo. Le chiusure snapback con snap in plastica o metallo si addicono a corone alte con visiera piatta e permettono una facile regolazione tra taglie — lo standard streetwear. Le chiusure strapback con fibbie in ottone o plastica sono lo standard del dad hat: regolabili, durevoli ed economiche. I retro elastici stile flexfit servono programmi promozionali e uniformi dove una taglia deve vestire la maggior parte delle teste. Per le taglie tra mercati, le norme di circonferenza differiscono: il retail nordamericano opera tipicamente tra 54–62cm, quello europeo segue la propria scala, e in Estremo Oriente le teste sono in media leggermente più piccole, il che incide su come una chiusura unica si posiziona. Diteci i mercati target e specificheremo tipo di chiusura, range di regolazione ed etichettatura delle taglie per mercato. Programmi multicolore e multi-taglia sono ammessi entro lo stesso MOQ di 200 pezzi per stile e colore, divisi equamente tra colori senza sovrapprezzi punitivi." },
      { title: "Conformità: cosa copre davvero ogni certificato", body: "Il linguaggio della conformità è dove molti fornitori promettono troppo, quindi siamo precisi. I cappellini standard nell'UE e negli USA sono regolati da normative chimiche e di sicurezza anziché da direttive macchine CE. REACH limita sostanze pericolose in tessili e accessori — rilevante per pacchi tintori e hardware metallico. OEKO-TEX Standard 100 testa il tessuto finito contro un'ampia lista di sostanze nocive — il segnale più forte di sicurezza per il consumatore nell'abbigliamento. GRS verifica le dichiarazioni di contenuto riciclato lungo la catena con tracce di audit. Nessuno di questi è automatico: le prove REACH SVHC, OEKO-TEX e GRS sono organizzate per ordine con laboratori di terze parti, e i report viaggiano con la spedizione perché il vostro team di conformità li verifichi prima dello sdoganamento. I registri di produzione sono conservati per ordine così i problemi di qualità possono essere tracciati fino alla linea di cucitura. Indicate i requisiti del vostro mercato fin da subito e mapperemo le prove esatte di cui il vostro programma ha bisogno." },
      { title: "Campionatura: cosa racconta un campione pre-produzione", body: "Un campione pre-produzione è la leva di qualità più importante nel sourcing di cappellini — e la maggior parte degli acquirenti la sottovaluta. Un buon campione fisico vi permette di verificare: allineamento del ricamo e densità di punti rispetto al vostro artwork; struttura della corona e altezza del profilo rispetto alla specifica; curvatura e rigidità della visiera; funzionamento e range della chiusura; vestibilità ed etichettatura della fettuccia interna; nastro damasco interno e integrità delle cuciture; e come il cappellino sopravvive a un ciclo di lavaggio. Il nostro processo produce un campione fisico in 7 giorni con foto e video a ogni milestone, più una scheda comparativa per scritto che elenca ogni specifica e come il campione la soddisfa. Esaminate il campione con deliberazione: misuratelo, lavatelo, indossatelo, confrontatelo col vostro cappellino di riferimento. Approvare un campione in fretta perché la scadenza stringe è così che si firmano difetti in serie. Il costo del campione è interamente riaccreditato sull'ordine in serie una volta raggiunti i 500 pezzi, quindi non c'è motivo economico per saltare una revisione seria." },
      { title: "Milestone della produzione in serie e QC", body: "Dopo l'approvazione del campione, la produzione in serie corre 15–20 giorni contro una programmazione datata. Condividiamo foto e video in quattro punti di controllo: taglio del tessuto (consistenza del lotto cromatico e allineamento dei motivi), ricamo (qualità dei punti e posizionamento del logo sui primi pannelli), assemblaggio (allineamento delle cuciture, installazione della fettuccia, montaggio della chiusura) e imballaggio (conto finale contro la lista di imballo). I cappellini vengono ispezionati prima dell'imballo: allineamento del ricamo, integrità delle cuciture, misure e finitura. I registri di produzione sono archiviati per ordine così qualsiasi pezzo può essere tracciato fino alla sua linea di cucitura e stazione di QC. Se un difetto arriva fino alla consegna, segnalatelo con foto entro la finestra di ispezione e sistemiamo il reclamo con produzione di sostituzione o rimborso; gli ordini pagati tramite Alibaba Trade Assurance godono inoltre della protezione pagamenti della piattaforma oltre il nostro impegno di QC." },
      { title: "Imballaggio, CBM e pianificazione del trasporto", body: "Imballaggio e pianificazione del trasporto separano gli importatori professionisti dagli acquirenti di prima volta. Ogni cappellino va in una busta di plastica individuale; le casse di export sono imballate a 100 pezzi (circa 12kg lordi, cassa madre da 60×45×40cm) con protezione dall'umidità, e ogni carico container è sigillato e fotografato prima della partenza. Il trasporto marittimo si paga a CBM, quindi conoscere il numero di casse vi permette di confrontare l'economia 20GP contro 40HQ con precisione — un 40HQ carica all'incirca il doppio di un 20GP a meno del doppio del trasporto, ed è per questo che il prezzo a scala container scende significativamente. L'expresso aereo copre campioni e riproposizioni urgenti in 5–8 giorni; il marittimo gestisce i programmi in serie in 25–35 giorni. Condizioni EXW, FOB e CIF sono supportate con fattura commerciale, lista di imballo e certificati di origine. Usate la calcolatrice CBM nel menu strumenti per stimare casse e volume prima di impegnare quantità." },
      { title: "Sicurezza dei pagamenti e relazioni di lungo periodo", body: "La struttura di pagamento protegge entrambi i lati di una relazione B2B. Per acquirenti alla prima esperienza consigliamo Alibaba Trade Assurance: la piattaforma trattiene i fondi in deposito cauzionale fino a quando confermate che la spedizione corrisponde all'ordine, aggiungendo protezione pagamenti sopra il nostro impegno di QC. I programmi consolidati possono usare T/T tramite conti aziendali verificati — mai conti personali, che sono il segnale d'allarme più chiaro nella valutazione dei fornitori. Oltre al pagamento, l'economia dell'approvvigionamento di lungo periodo conta: le fabbriche con programmi ricorrenti riservano capacità ogni trimestre, tengono i vostri file di digitalizzazione e i colori d'archivio così i riordini saltano la fase di campionamento, ed estendono prezzi container prima. La nostra politica di rimborso campione da 500 pezzi in su, il preventivo scritto in 2 ore e la trasparenza delle milestone sono progettate esattamente per questo: trasformare un primo ordine in un programma stagionale. Se state costruendo una linea di cappellini per il lungo periodo, trattate la relazione con la fabbrica come l'attivo che è — ed esigete dalla fabbrica la stessa onestà di programmazione che chiedereste a qualsiasi fornitore strategico." },
    ],
  },
  ja: {
    badge: "B2Bソーシング知識",
    title: "オリジナル帽子の製造：素材・コンプライアンス・発注の流れ",
    intro:
      "帽子の受注が失敗する原因の多くは、悪い工場ではなく曖昧な仕様です。このセクションでは、私たちの製造方法、取り扱い素材、コンプライアンスの運用、およびテックパックからコンテナ出荷までの円滑な受注の流れをまとめます。他のサプライヤーとの事実ベースの比較にご利用ください。",
    materialsTitle: "取り扱いのある素材",
    materials: [
      { name: "108*56 ヘビーコットントウィル", desc: "最も人気のキャップ生地。高密度の斜め織りで型崩れせず、洗濯後もクラウンの形状を保ち、高密度3Dパフ刺繍をきれいに向きます。ストリートウェアの5パネル・構造的な6パネルの定番素材です。" },
      { name: "ブラッシードコットン", desc: "繊細なマット表面で手触りの柔らかい素材。ビンテージダッドハットやライフスタイル系キャップに人気です。エンザイム洗い・酸洗い仕上げには事前縮小オプションをご用意しています。" },
      { name: "キャンバス・ダッククロス", desc: "毎日厳しい使用に耐えるワークウェア・ヘリテージスタイル向けの厚手コットン織物。メタルアイレット、リベット金具、トーンオントーン刺繍と相性が良く、法人制服・アウトドア案件で多く使われます。" },
       { name: "コーデュロイ", desc: "秋冬コレクション向けの6ウェール・8ウェールコーデュロイ。パートナー工場の糸染め管理により、コンテナ1本分でもウェール目のムラを防ぎ、本裁断前に色牢度を検査します。" },
      { name: "リップストップナイロン（DWR加工）", desc: "軽量で破れに強く、耐久撥水加工を施したナイロン。ゴルフ・ハイキング・パフォーマンス系に。レーザー穿孔ベンチレーションパネルと吸湿速乾CoolMaxスウェットバンドが標準オプションです。" },
      { name: "ポーラフリース・編み立て糸", desc: "ニットビーニー・冬季ラインの素材。ミッドウェイトのポーラフリース、折り返しリブ編み、およびプレミアム寒冷地向けプログラム用のアクリルウール混紡糸。" },
    ],
    complianceTitle: "コンプライアンスと認証",
    complianceBody:
      "ご社の市場や小売業者の要件に応じて、素材の第三者検査を案件ごとに手配します。検査報告書は荷物と同送され、通関前に貴社のコンプライアンスチームが確認できます。全案件の生産記録を保管しており、品質問題が縫製ラインまでトレース可能な状態です。",
    checklistTitle: "発注の流れ",
    checklist: [
      { title: "仕様と artwork ご提出", desc: "ロゴ（ベクター推奨）、参考キャップ、またはテックパックをご送付ください。実現可能性を確認のうえ、2時間以内に書面によるFOB見積書を返します。" },
      { title: "サンプル作成 — 7日", desc: "本生産前の実サンプルを作成しご承認いただきます。サンプル代金は500個以上の本生産時に全額値引されます。" },
      { title: "本生産 — 15〜20日", desc: "サンプル承認後に日付入りの生産スケジュールで着手。生地裁断、刺繍、縫製、梱包の各工程で写真・動画の進捗レポートをお送りします。" },
      { title: "QCと輸出梱包", desc: "梱包前に検査を実施：刺繍の位置ずれ、縫製強度、寸法、仕上げ。輸出カートンは100個入りで防湿保護を施します。" },
      { title: "出荷と書類", desc: "EXW・FOB・CIFの条件に対応。商業インボイス、パッキングリスト、原産国証明書を同行。Alibaba Trade Assurance経由の決済にはプラットフォームの支払保護が付きます。" },
    ],
    faqTitle: "買い手がよく聞くソーシングの質問",
    faqs: [
      { q: "手持ちの参考キャップを再現できますか？", a: "はい。写真または実物を送っていただければ、パネル数、プロファイル高さ、つばのカーブ、生地重量、金具タイプまで構造を逆算します。サンプル着手前に書面での比較表をご承認いただきます。" },
      { q: "ロゴにはどんなファイル形式が必要です？", a: "ベクターファイル（AI・EPS・PDF・SVG）が最もきれいな刺繍データ化が可能です。シンプルなデザインであれば高解像度PNG・JPGでも対応します。どちらの場合もTatami-underlayや糸色の合わせ込みを含む刺繍用データに再構築します。" },
      { q: "デザインはどのように保護されますか？", a: "artwork共有の前にNDAのご用意があります（要依頼）。刺繍データと縫製パターンはご依頼案件専用で作成し、他の買い手に再利用・転売することは一切ありません。" },
      { q: "到着時に品質に問題があった場合は？", a: "検査期間内に写真付きでご連絡いただければ、交換生産または返金で対応します。Alibaba Trade Assuranceで決済した案件には、当社のQCコミットメントに加えプラットフォームの支払保護も付きます。" },
      { q: "プライベートラベルの梱包も作成できますか？", a: "はい——オーダーメイドの織りネームラベル、プリントダマスク縫い代テープ、ブランドハングタグ、ポリ袋、小売箱まですべて生産パートナーと連携して作成し、ご注文とまとめて梱包します。最初の1個から開封時の印象が貴社ブランドに統一されます。" },
      { q: "ゼロからスタイルを開発できますか（ODM）？", a: "はい。スケッチ、ムードボード、または参考キャップをお送りいただければ、デザインチームが構造・刺繍データ化・材料リストを貴社と共同で開発します。比較表、サンプル写真、実サンプルと各工程を本生産の前にご承認いただきます。" },
      { q: "ブランドカラーの合わせはどれくらい正確ですか？", a: "糸色はPantone基準で合わせ、コントラストパネル・つば・パイピングは仕様通りに染色します。本裁断前に色牢度を試験するため、お客様でのお洗濯にも耐える仕上がりです。" },
      { q: "どのような輸送オプションがありますか？", a: "EXW・FOB・CIFに対応します。空輸エクスプレスはサンプルと緊急案件に5〜8日、海運は本生産ロットに25〜35日。すべての出荷に商業インボイス、パッキングリスト、原産国証明書を同梱します。" },
      { q: "工場を見学できますか？", a: "生産は審査済みのパートナー工場で行っているため、裁断・刺繍・縫製・梱包のライブ動画ツアーを案件ごとに手配しています。確定したプログラムについては、パートナー工場と対面訪問も調整可能です。" },
    ],
    vetTitle: "帽子メーカーの検証方法",
    vet: [
      { title: "工場の第三者検証報告書を求める", desc: "本物の工場はSGS同等の検証を歓迎し、要望があれば共有します。受注を約束する前に、施設がどのように監査されているか、不良率のポリシーを確認してください。" },
      { title: "刺繍の社内生産能力を確認する", desc: "多くのサプライヤーは刺繍を地元工房に外注しています。ロゴがどこで刺繍されるかを確認し、サンプル段階で貴社ロゴの刺繍中のライブ動画レポートを求めましょう。" },
      { title: "サンプル代金の返金ポリシーを確認する", desc: "信頼できるサプライヤーは本生産ロットに対してサンプル代金を返金します。当社は500個以上の受注で全額値引きます。" },
      { title: "コンプライアンス検査の選択肢を確認する", desc: "EU・米国の小売ではREACH SVHC・OEKO-TEX・GRSが求められる場合があります。メーカーが案件ごとに第三者検査を手配し、報告書を後日ではなく荷物と同送するか確認してください。" },
      { title: "最安値ではなくFOB価格帯を比較する", desc: "構造化キャップの市場帯$3.50–$7.00を大きく下回る見積もりは、薄い生地・少ないステッチ数・隠れた手数料を意味することが多いです。材料内訳付きの見積もりを求めましょう。" },
      { title: "日付入りの生産スケジュールを徹底する", desc: "サンプルと本生産の日付を書面で入手してください。裁断・刺繍・梱包の各工程で写真や動画の進捗を共有する工場は、そのスケジュールに責任を持っている——当社も同様です。" },
      { title: "MOQとカラー方式のルールを確認する", desc: "スタイルごと・カラーごとのMOQを確認してください。マルチカラー案件は罰則的手数料なしでカラー別に適切に分割すべきです——当社は1スタイル/カラー200個から対応します。" },
      { title: "安全な支払チャネルを使う", desc: "Alibaba Trade Assuranceのような買い手保護付きプラットフォーム、または大規模案件にはエスクロを推奨します。個人口座への送金は警戒サインです。当社は検証済みの事業チャネル経由のみです。" },
    ],
    glossaryTitle: "工場用語の解説",
    glossary: [
      { term: "FOB", def: "Free On Board——中国の港湾に積み込むまでの価格。海運送料と保険は買い手負担です。" },
      { term: "MOQ", def: "最小発注数量。当社は1スタイル・カラーごと200個です。" },
      { term: "OEM", def: "貴社がデザインと仕様を提供し、メーカーがそれに基づいて貴社ブランドで生産します。" },
      { term: "ODM", def: "Original Design Manufacturing——スケッチや参考品をもとにメーカーが共同でスタイルを開発します。" },
      { term: "Tech pack", def: "仕様書：寸法、生地、金具、装飾位置、構造の詳細。" },
      { term: "Digitizing", def: "ロゴのartworkを刺繍機が読むステッチファイルに変換する工程。" },
      { term: "3D puff embroidery", def: "発泡シートを裏打ちした浮き出すステッチで、鋳物のような高浮き彫り仕上げ——ストリートウェアの基準。" },
      { term: "Tatami underlay", def: "Tatami-underlay——表ステッチの下に張る高密度のベース層。生地を保護し、エッジを鋭く見せます。" },
      { term: "108*56 cotton twill", def: "キャップ生地の古典的な密度：1インチあたり経糸108本・緯糸56本——高密度で型を持ち、耐久性がある。" },
      { term: "Buckram", def: "フロントパネルに圧着する硬質インターフェイシングで、クラウンの構造的な形状を保ちます。" },
      { term: "Damask taping", def: "縫い目内側の織りテープ——ブランドロゴを載せるプレミアムな場所。" },
      { term: "Eyelet", def: "通気孔。刺繍仕上げ、レーザーカット、メタルリベットのいずれかに仕上げる。" },
      { term: "Snapback", def: "プラスチックまたはメタルのスナップで調節できるフラットつばの金具。通常ハイトクラウン。" },
      { term: "Strapback", def: "真鍮またはプラスチックのスライドバックル付き布ベルト——ダッドハットの定番。" },
      { term: "Enzyme wash", def: "エンザイム洗い——手触りを柔らかくし、色を均一にフェードさせるビンテージ仕上げ。" },
      { term: "Acid wash", def: "酸洗い——高いコントラストの漂白ビンテージ仕上げ。ダッドハットに人気です。" },
      { term: "DWR finish", def: "DWR加工——ナイロン製パフォーマンスキャップ用の耐久撥水加工。雨を染み込ませず弾きます。" },
      { term: "CBM", def: "立方メートル——海運送料の請求単位。当社のカートンは60×45×40cmです。" },
      { term: "20GP / 40HQ", def: "標準コンテナとハイキューブコンテナ——中国の港湾からの本生産輸送の通常単位。" },
      { term: "NDA", def: "秘密保持契約。デザインを共有する前に、要望があればご用意します。" },
    ],
    logisticsTitle: "梱包と輸送",
    logisticsBody:
      "全頭に個別のポリ袋を装着し、カートンは100個入り（総重量約12kg、マスタカートン60×45×40cm）で防湿保護を施します。各コンテナの荷積みは出発前に封緘・撮影を行います。空輸エクスプレスはサンプルと緊急補充に5〜8日、海運は本生産プログラムに25〜35日を要します。確定前にツールメニューのCBM計算機でカートン数と貨物容積を試算してください。",
    deepTitle: "ソーシング徹底解説：プロの買い手が帽子工場を評価する方法",
    deep: [
      { title: "価格より仕様が優先される理由", body: "帽子の受注が失敗する原因の多くは、悪い工場ではなく曖昧な仕様にあります。買い手がロゴだけを送って「一番安い見積もりを」と求めると、各工장은それぞれ異なる構造の想定で見積もりを返します。生地の厚さ、パネル数、つばの硬さ、留め具の種類が異なり、その結果比較可能なものではありません。プロの買い手はtech packもしくは参考キャップ、カラー別の数量内訳、目標FOB価格帯を伝えます。これらの情報があれば真面目な工場は見積の内訳（生地・ステッチ数・装飾・金具・梱包）を提示し、他社と項目単位で真正面から比較できます。複数社を比較中の場合は、全員に同一の仕様書を送り、内訳付き見積を求めましょう。どの業者が構造を理解していて、誰が当てているかが一目で分かります。" },
      { title: "工場FOB価格の構成", body: "工場のFOB価格は5層から成り立ちます。生地と副資材、裁断・縫製の人件費、装飾（刺繍データ化・糸・3Dパフの発泡材）、品質管理と輸出梱包、それに工場の固定費とマージンです。生地は通常1個あたりの原価の20〜30%、装飾はステッチ数や技術によって15〜25%、人件費は25〜35%を占めます。この構造を理解すれば、構造化キャップに$3.50–$7.00という価格帯が存在する理由が分かります。$3.50を下回る場合は、薄手ツイル、ステッチ数の削減、予縮小の省略、リサイクル金具など、どこかで手を抜かねばなりません。その手抜きは請求書ではなく商品に出ます。当社は見積時に材料内訳を提示するため、どの層にいくら掛かっているかを確認のうえ、厚手生地、高密度刺繍、高級留め具のいずれに投資するかご判断いただけます。構造を見ずに価格だけを比較することが、サンプルと異なる商品を受け取る原因になります。" },
      { title: "極端に安い見積もりの実成本", body: "市場帯より30〜40%安い見積もりを受けたら、喜ぶのではなく調査してください。その安さはほぼ工場のマージンではなく、どこかで破られる約束です。よくあるパターンを示します。見積上は108*56ツイルですが、本生産では薄い60*40が来る、刺繍データ化を最安の外部工房に任せてステッチがぼやける、フロントの芯地进行を薄い接着フィルムに置き換えて2回のお洗濯で型崩れする、品質管理工程を完全に省略して不良率が8〜15%に達する、などです。これらの「節約」はすべて返品、クレーム、死蔵在庫、ブランド毀損という形で買い手側に転嫁されます。信頼できる工場は価格だけで勝ちません。構造の誠実さ、工程の透明性、リピート案件の経済性で競争します。異様に安い業者に材料内訳と工場検証レポートの提示を求めてみてください。安さの正体がすぐ分かります。" },
      { title: "生地：手触り・耐久性・価格", body: "生地選びは、手触り・耐久性・価格のすべてを左右する最も重要な判断です。当社のベストセラーである108*56ヘビーコットンツイルは、1インチあたり経糸108本・緯糸56本を高密度の綾織で織り上げる生地です。型崩れしないクラウンを維持し、繰り返しの洗濯に耐え、高密度3Dパフ刺繍も歪みません。ストリートウェアの標準仕様です。ブラッシュドコットンは構造を犠牲にして柔らかいマットな手触りを重視し、ヴィンテージダッドハットに向きます。酵素洗い・酸洗いの仕上げには寸法が安定する予縮小済み生地をお選びください。キャンバス・ダッククロスは作業着向けで、厚手で擦れに強く、メタルアイレットやリベットに耐えます。コードロイは糸染めを社内で管理することで、均一の畝を持つ季節素材です。DWR仕上げのリップストップナイロンはゴルフ・パフォーマンス向けで、軽量・耐引き裂き・撥水します。小売価格と対象市場をお伝えいただければ、利益率と評判の両方を守る生地をご提案します。" },
      { title: "刺繍技術の比較", body: "刺繍は、キャップの品質が現れるか消えるかを分ける箇所です。フラット刺繍は最も汎用的で、仕上がりきれいで、迅速、コストパフォーマンスに優れます。高密度フラットにTatami-underlayを組み合わせれば、縁が鋭く上がり、高密度デザインでも生地を守れます。3Dパフ刺繍は発泡シートを裏打ちした立体ステッチで、鋳物のような高浮き彫り仕上げがストリートブランドに瞬時に認識されます。精密なデータ化と機械の張力制御を要するため、当社は最新のマルチヘッド刺繍ラインを社内で運用する工場とのみ取引しています。レーザーカット刺繍は糸をプログラムで除去し、くっきりとしたネガスペースを作り出します。レザーパッチ、箔押し、シルクスクリーン、熱転写は刺繍以外の装飾プログラムを網羅します。機械と同じくらいデータ化の品質が重要で、下手なデータはどんな機械でも失敗します。ベクターデータ（AI・EPS・PDF・SVG）をお送りいただき、サンプル前にデータ化証明を求めてください。真面目な工場は、最初の針を下ろす前にステッチ計画・糸色・Tatami-underlay戦略を書面で提示します。" },
      { title: "クラウン構造・芯地・プロファイル", body: "クラウンの構造は、キャップが顧客の頭にどう見えるかを決定します。構造化クラウンはフロントパネルに硬質の芯地进行を圧着し、箱の中でも棚の中でも形を保つ明確なドームを維持します。スナップバックとプレミアム6パネルの標準です。ノンストラクチャードクラウンは芯地进行を省略または減量し、ヴィンテージダッドハットのような柔らかく潰れたシルエットを作る代わり、着用前に形を整える必要があります。もう一つの軸がプロファイルの高さで、低いAフレーム型がストリート5パネルを占め、クラシックな野球型は丸みと高さがあります。つばの幾何学が図を완성さらすたら。スナップバック・キャンパーは平いつば、ダッドハットはカーブつばで、カーブの深さは市場の好みに合わせて調整可能です。参考キャップをお送りいただければ、パネル数・プロファイル高さ・つばのカーブ・生地重量を測定し、サンプル前に書面の比較表をお送りします。「同じ構造」の意味に曖昧さが残らないようにするためです。" },
      { title: "留め具・サイズ・フィット", body: "留め具の選択はフィット・耐久性・価格に影響します。プラスチックまたはメタルのスナップ付きスナップバックは、高クラウンの平いつば向けで、頭囲の調整が容易なストリートウェアの標準です。真鍮またはプラスチックの 슬라이ドバックル付きストラップバックはダッドハットの定番で、調整可能・耐久性があり・低価格です。弾力性のあるフレキシット風後部は、1サイズで多くの頭に合わせる必要があるプロモーション品・制服向けです。市場間のサイズ感には違いがあり、北米小売は通常54〜62cm、欧州は独自の尺度、東アジアは平均してやや小さい頭囲が多いため、1サイズ留め具のかけ感が変わります。対象市場をお伝えいただければ、留め具の型式・調整範囲・サイズ表示を市場別に指定します。マルチカラー・マルチサイズも、1スタイル・カラー200個のMOQ内で対応し、カラー別に均等分割できるため追加料金はかかりません。" },
      { title: "コンプライアンス：各証明が実際にカバーする範囲", body: "コンプライアンスの表現は、多くのサプライヤーが過剰約束する分野なので、正確に説明します。REACHはテキスタイル・アクセサリーの有害物質を制限し、染料・金具に関係します。OEKO-TEX Standard 100は完成生地を幅広い有害物質リストに対して検査し、アパレルの消費者安全で最も強力なシグナルです。GRSはサプライチェーン全体でリサイクル含有の証明を監査可能な形で検証します。これらはすべて自動ではありません。REACH SVHC・OEKO-TEX・GRSの検査は案件ごとに第三者検査機関を手配し、報告書は荷物と同送するため、通関の前に貴社のコンプライアンスチームが確認できます。各案件の生産記録を保存しており、品質問題を縫製ラインまで追跡可能な状態です。対象市場の要件を最初に教えていただければ、必要な検査を正確に洗い分けてご提案します。" },
      { title: "サンプル：本生産サンプルが教えてくれること", body: "本生産サンプルは帽子ソーシングで最も重要な品質レバーです。多くの買い手がその力を活かし切っていません。しっかりとした実サンプルがあれば確認できます。アートワークに対する刺繍の位置・ステッチ密度、仕様に対するクラウン構造・プロファイル高さ、つばのカーブ・硬さ、留め具の作動・調整範囲、スウェットバンドのフィット・表示、内部ダマスクテープ・縫製の健全性、洗濯サイクルを耐えられるかどうかです。当社のサンプル工程は7日で実サンプルを制作し、各工程の写真と動画、さらに全仕様項目とサンプルの適合状況を列記した書面比較表を添えます。サンプルには思い切って向き合ってください。測り、洗い、被り、参考キャップと比較してください。期限が迫っているからと早めに承認することが、本生産ロットでの不良を署名する行為になります。サンプル代金は本生産500個以上で全額値引されるため、しっかりしたサンプル確認を飛ばす経済的理由はありません。" },
      { title: "本生産のマイルストーンとQC", body: "サンプル承認後、本生産は日付入りのスケジュールに沿って15〜20日間進行します。4つの検査ポイントで写真と動画を共有します。生地裁断（染料ロットの均一性と柄合わせ）、刺繍（最初の数枚のパネルのステッチ品質とロゴ位置）、組立（縫い目の揃い・スウェットバンド装着・留め具取付）、梱包（パッキングリストに対する最終カウント）。梱包前に検査を実施します。刺繍の位置、縫製の一貫性、寸法、仕上げを確認します。生産記録は案件ごとに保存するため、いずれの個体も縫製ラインとQCステーションまで追跡可能です。到着時に不備が見つかった場合は、検査期間内に写真付きでご連絡いただければ、交換生産または返金で対応します。Alibaba Trade Assuranceで決済した案件には、当社のQCコミットメントに加えプラットフォームの支払保護が付きます。" },
      { title: "梱包・CBM・輸送計画", body: "梱包と輸送計画は、プロの輸入商と初回買い手を分けます。全頭に個別のポリ袋を装着し、輸出カートンは100個入り（総重量約12kg、マスタカートン60×45×40cm）で防湿保護を施します。各コンテナの荷積みは出発前に封緘・撮影します。海運はCBM（立方メートル）単位で請求されるため、カートン数を知っていれば20GPと40HQの経済性を正確に比較できます。40HQは20GPの約2倍を、運賃の2倍未満で輸送できるため、コンテナ規模では価格が大幅に下がります。空輸エクスプレスはサンプルと緊急補充に5〜8日、海運は本生産プログラムに25〜35日を要します。EXW・FOB・CIFのすべてに対応し、商業インボイス、パッキングリスト、原産国証明書を添えます。数量を確定する前に、ツールメニューのCBM計算機でカートン数と貨物容積を試算してください。" },
      { title: "支払の安全性と長期サプライヤー関係", body: "支払の構造はB2B関係の両側を守ります。初回のご取引にはAlibaba Trade Assuranceを推奨します。プラットフォームが貨物が注文と一致することを確認するまで資金をエスクローし、当社QCコミットメントの上に支払保護を付加します。継続案件では検証済みの事業口座経由のT/Tも可能です。个人账户への送金を求めることは一切なく、それはサプライヤー検証で最も明らかな警戒サインです。支払以外にも長期仕入れの経済性が重要です。リピート案件のある工場は四半期ごとに生産能力を確保し、データ化ファイルとカラーを記録しておくことで再発注時にサンプル工程を省略でき、早期にコンテナ規模価格を適用します。500個以上でのサンプル代全額値引、2時間以内の書面見積、工程の透明性は、初回注文を季節プログラムに変えるために設計されています。長期でヘッドウェアラインを育てるなら、工場との関係を資産として扱い、戦略的サプライヤーに求めるのと同じスケジュールの誠実さを求め続けてください。" },
      { title: "日本市場のサイズ感とフィット", body: "日本市場では頭囲の平均がやや小さく、1サイズの留め具がかかる位置が北米・欧州と異なる場合があります。当社では日本向け案件に合わせ、ストラップバックの調整範囲を狭めたり、スウェットバンドの内径を微調整したりする対応が可能です。サイズ表示も日本国内の慣行に合わせられます。参考キャップをお持ちの場合は実物をお送りいただくのが最も確かで、プロファイル高さ・つばのカーブ・生地重量を実測のうえ書面で比較表を提示します。日本のストリートブランドから企業ユニフォームまで、フィット感を重視されるほど、サンプル確認の工程を大切にしてください。サンプルは7日で制作でき、本生産500個以上でサンプル代は全額値引されます。" },
      { title: "日本小売のコンプライアンスと検査", body: "日本小売には家庭用品品質表示法に基づく表示や、特定の商品分類への適合が求められる場合があります。貴社が対象とする市場や小売チェーンの要件に応じて、REACH SVHC・OEKO-TEX Standard 100・GRSの第三者検査を案件ごとに手配します。検査報告書は荷物と同送されるため、通関や入荷検査の前に貴社チームが確認できます。各案件の生産記録を保存しており、品質問題の追跡が可能になります。日本向け案件で必要な規格・表示・検査がございましたら、手配の前にご明示ください。必要な検査項目を正確に洗い分けて、スケジュールに並行して進めます。" },
      { title: "季節小売に向けた生産スケジュール", body: "日本の小売は季節入替が厳格なため、逆算計画が成功の鍵です。当社との標準スケジュールは、サンプル7日、本生産15〜20日、海運25〜35日です。春夏物の場合は前年の秋冬にサンプル確認を完了させ、本生産を入替の120日前に終わらせる設計が安全です。秋冬物も同様に、サンプル・本生産・海運・通関・入庫の各区間を逆算し、貴社の入替日に基づじて当社に目標到着日をお伝えください。スケジュール上のリスクがある場合は早期に指摘します。空輸はサンプルと緊急補充に5〜8日を要するため、欠品対応の最終手段として機能します。長期取引では四半期ごとに生産能力を確保しており、季節プログラム向けの優先的な手配が可能です。" },
      { title: "日本語でのコミュニケーションと技術確認", body: "言語の壁が仕様ミスにつながることが多いため、当社では日本語でのやり取りに対応します。見積依頼・仕様確認・工程報告はいずれも日本語で行え、必要に応じて中国語・英語の技術者と直接繋ぎます。ご質問が細かくなるほど構造化された回答ができ、生地・刺繍・留め具・梱包の各工程で写真と動画を添えて報告します。NDAが必要な場合はアートワーク共有の前に手配可能で、データ化ファイルと縫製パターンはその案件専用として管理し、他の買い手に再利用・転売することは一切ありません。時差に対応した返信と、生産マイルストーンのご報告により、来場しなくても工程を可視化できます。" },
      { title: "色合わせとPantone対応", body: "色は、サンプル段階で初めて問題が表面化しやすい典型的な項目です。当社は刺繍糸をPantone色見本基準で合わせ、コントラストパネル・つば・パイピングは仕様通りに染色します。染色は小ロットの試験染色を経てから本裁断に進み、色牢度の試験も本生産の前に実施します。これにより、大量生産ロットでの色むらや、お客様のお客様のお洗濯による褪色という2大リスクを事前に排除します。マルチカラーの案件では、カラーごとの糸替え回数が増えるため生産時間が伸びる一方、同一スタイルの枠内で均等分割できるため追加料金はありません。色見本の写真をメールで添付しますので、本生産の着手前に書面で色を確認いただけます。" },
      { title: "通関書類と輸出手続き", body: "輸出書類は梱包仕様の一部であり、事後の手続きではありません。各出荷は、各スタイルの実際の構造と素材を明記した商業インボイス、カートンの寸法・総重量・個数入数を記載したパッキングリスト、対象市場が必要とする原産国証明書を添えて出発します。インボイスの品名は製品の実態と一致するため、ご到着地の税関での分類はスムーズに進みます。帽子の輸入において税関での滞留の最も多い原因は荷物の誤った品名表示ですが、正確な書類があれば完全に防げます。定期輸出入のお客様には、計算機のカートン寸法とCBM数値を記録ファイルとして保存されることをお勧めします。フォワーダー・倉庫・通関業者が同じ数値を参照するため、不一致——つまり遅延料・取扱い料の典型的な原因——がそもそも発生しません。" },
      { title: "不良発生時の対応フロー", body: "どの工場でも不良はゼロにはできません。大切なのは、発生後の対応の速さと透明性です。当社への報告方法はシンプルで、検収期間内に写真付きでご連絡いただくことです。報告を受けつけると、まず写真とパッキングリスト・生産記録を突き合わせて工程を特定します。刺繍のずれ・ステッチ密度不足・寸法ずれ・仕上げ不良のいずれに該当するかを分類のうえ、交換生産または返金のいずれかで対応します。Alibaba Trade Assuranceで決済した案件には、当社の対応に加えてプラットフォームの支払保護が重なるため、初回取引のお客様もリスクなくスタートできます。さらに、発生した不良は原因別・工程別に記録し、次回の同型案件で再発しないよう工程基準へ反映します。" },
      { title: "素材調達と環境対応", body: "生地・糸・金具の調達は、価格と品質の両面で工場選びの核心です。当社の主力生地である108*56ヘビーコットンツイルは、生地自体のロット管理から行い、染色はパートナー工場が管理することで、コンテナ単位の大ロットでも色と風合いを均一に保ちます。コードロイのように色むらが起きやすい素材については、パートナー工場の糸染色管理により畝の均一性を確保しています。環境・規制対応としては、REACH SVHC・OEKO-TEX Standard 100・GRSの第三者検査は案件ごとに手配し、報告書を荷物と同送します。GRSはリサイクル含有の主張をサプライチェーン全体で監査可能な形で検証するため、サステナビリティを軸にしたコレクションの開発にも対応できます。" },
      { title: "初回取引からリピートまでの流れ", body: "初回のお客様との取引フローは、意図的に透明に設計されています。第一步で仕様とartworkをご提出いただき、2時間以内に見積の内訳を書面で提示します。第二步で7日間の実サンプルを制作し、全仕様項目と適合状況を列記した書面比較表を添えます。第三步でサンプル承認後、日付入りのスケジュールで本生産15〜20日を進め、裁断・刺繍・組立・梱包の4工程で写真と動画をご報告します。第四步で輸出梱包・書類同封のうえ出荷します。この流れの各段階でお客様が確認・承認するポイントが明確なため、初回でも「想定と違う商品が届く」というリスクを構造的に排除できます。リピート案件ではデータ化ファイルとカラーを記録したまま保持するため、サンプル工程を省略し、四半期ごとの生産能力の確保と早期のコンテナ規模価格の適用が可能です。" },
      { title: "サンプルから本生産への品質維持", body: "サンプルが良くても本生産で品質が崩れる——これは帽子の仕入れで最も多い失望です。その原因のほとんどは、サンプルと本生産で生地ロット・糸・金具が黙って変わることです。当社では、承認いただいたサンプルの生地ロット・糸色・金具の仕訳を案件ごとに記録し、本生産はその記録に基づいて揃えます。生産記録は案件ごとに保存されるため、出荷前の検査でサンプル時の寸法・ステッチ密度・仕上げと照合できます。さらに、本生産の着手前には最初の数枚のパネルの刺繍写真をお送りし、サンプルと一致することを確認のうえ量産を続行します。量産途中で生地ロットが変わる場合は、変更前にご報告し、確認を取って進めます。" },
      { title: "季節小売の入替に合わせた逆算計画", body: "日本の小売は入替が厳格なため、逆算計画が成功の鍵です。標準スケジュールは、サンプル7日、本生産15〜20日、海運25〜35日で、合計で約60〜70日と見ていただけると安全です。春夏物の場合は、前年の秋冬にサンプル確認を完了させ、本生産を入替の120日前に終わらせる設計が理想です。秋冬物も同様に、サンプル・本生産・海運・通関・入庫の各区間を逆算し、貴社の入替日に基づいて当社に目標到着日をお伝えください。スケジュール上のリスクがある場合は早期に指摘し、必要に応じて空輸（5〜8日）を一部ロットに使う併用案もご提案します。長期取引では四半期ごとに生産能力を確保しており、季節プログラム向けの優先的な手配が可能です。" },
      { title: "長期取引の経済性と優先待遇", body: "帽子の工場選びで見落とされがちなのが、リピート案件の経済性です。初回のお客様と継続のお客様では、実際のコスト構造が違います。継続のお客様は、データ化ファイル・色見本・金具の仕訳が記録に残っているため、再発注時にサンプル工程を省略でき、その分の手間と時間を省けます。生産計画も四半期単位で共有できるため、生地・糸・金具の調達を前倒しでまとめ、為替や素材価格の変動に対する緩衝を確保できます。また、コンテナ規模の価格帯の適用も、生産計画が見えるお客様から優先されます。当社では500個以上でのサンプル代全額値引、2時間以内の書面見積、工程の透明性を標準としており、初回取引を季節プログラムに変えることを設計思想としています。" },
      { title: "生地ロット管理と色むらの防止", body: "大量生産で最も多い品質苦情は、個体間の色むらです。その原因のほとんどは生地ロットの違いにあります。同じ108*56ツイルであっても、染色ロットが違えば微妙な色差が生まれ、キャップのクラウン部分で顕在化します。当社では、同一案件の本生産に必要な生地を可能な限り同一ロットで揃えることを第一原則としています。ロットが揃わない場合は、裁断前に色差計で測定し、許容範囲を超えていれば工程を止めて再調達します。さらに、裁断前には全ロールの生地を無作為抽出で目視検査し、糸の粗细・織密度・色相を確認します。ご承認いただいたサンプルの生地ロール番号は案件記録として保存するため、リピート案件では前回と同一のロット特性が生産の基準になります。色むらは発生してから直すのではなく、生まれる前に止める——これが大量生産の品質管理の核心です。" },
      { title: "金具・留め具の品質差と選定", body: "金具は単価が安い分、品質差が最も大きい部材です。スナップバックのスナップ、ストラップバックのバックル、アイレット、メタルピン——いずれも安価な代替品が存在し、見積もりの段階では差が分かりません。違いが出るのは使用後です。低品質のスナップは数回の着脱で外周の樹脂が割れ、真鍮メッキの安いバックルは汗で下地の合金が腐食し、数ヶ月で白緑の跡が残ります。当社では金具も案件ごとに仕訳を記録し、承認サンプルと同じ仕様の品を本生産で必ず使用します。メッキの塩水噴霧試験や引張試験の基準を指定される場合には、それに基づいて選定します。金具の仕様が決まれば見積もりに明記し、後から黙って安い品に替えるようなことは一切行いません。" },
      { title: "検品基準と出荷前検査の詳細", body: "検査とは何に対して行われるのか——その基準を言葉で明確にすることは、多くの工場では難しいものです。当社における検品項目は具体的に次の通りです。第一に、刺繍の位置と密度。設計図面とのずれが許容範囲内かを確認します。第二に、縫製の一貫性。パネルの縫い目のずれ、スウェットバンドの取付位置、つばのカーブの左右差を測定します。第三に、寸法。頭囲・クラウン高さ・つばの長さを設計値と照合します。第四に、仕上げ。糸の始末、アイロン掛けの跡、金具の取付強度を確認します。この四項目を確認したうえで、パッキングリストとの最終カウントを行います。出荷前の品質検査を徹底することが、到着後のクレームを構造的に減らす理由です。" },
      { title: "為替・原材価格変動への備え", body: "見積もりから発注までに時間がかかる案件では、為替と素材価格の変動が実際の原価に影響します。当社の見積もりには有効期間を明記しており、期限を過ぎた場合には差額が生じた場合のみ再確認のご連絡を差し上げます。長期の季節プログラムでは、四半期ごとの生産計画を共有いただくことで、生地・糸・金具を前倒しで調達し、価格変動の緩衝を持つことができます。急な増産の依頼が重なった場合でも、計画内で確保済みの資材から生産に入るため、品質を犠牲にして調達先を変えることはしません。資材の品質を下げてコストを合わせた見積もりは、結果的に買い手の商品価値を毀損するため、当社では行いません。価格交渉の前に、まずは見積もりの前提条件——生地・刺繍・金具・梱包の内訳——を揃えていただくことが、双方にとって正確な比較になります。" },
    ],
  },
};

export default function Home() {
  const t = useT("home");
  const n = useT("nav");
  const ft = useT("footer");
  const lang = useLang();
  const [currentBanner, setCurrentBanner] = useState(0);

  const BANNERS = [
    {
      image: "/images/site/banner-2-customize-detail.webp",
      mobileImage: "/images/site/banner-2-customize-detail-mobile.webp",
      title: t("banners.0.title"),
      sub: t("banners.0.sub"),
      cta: t("banners.0.cta"),
      label: t("banners.0.label"),
      link: "whatsapp"
    },
    {
      image: "/images/site/banner-3-trusted-supplier.webp",
      mobileImage: "/images/site/banner-3-trusted-supplier-mobile.webp",
      title: t("banners.2.title"),
      sub: t("banners.2.sub"),
      cta: t("banners.2.cta"),
      label: t("banners.2.label"),
      link: "#inquiry?intent=bulk"
    }
  ];

  const FAQS = [
    { q: t("faq.q0"), a: t("faq.a0") },
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baoding Junyang Import & Export Trading Co., Ltd.",
    "description": "Headwear sourcing & quality partner — mid-to-high quality custom baseball caps, snapbacks, trucker hats, and beanies. 12+ years of sourcing and export experience.",
    "image": "/images/brand/junyang-logo.png",
    "url": "https://bdjunyang.com",
    "telephone": "+86-15933930830",
    "email": "admin@bdjunyang.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Baoding", "addressRegion": "Hebei", "addressCountry": "CN" },
    "priceRange": "$$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bdjunyang.com" }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // WhatsApp click tracking is handled once by trackWhatsAppClick (lib/tracking).
  // A duplicate local gtag call used to live here and double-counted every
  // homepage WhatsApp click in GA4 with a different parameter shape.
  const handleWhatsApp = (source: string, customText?: string) => {
    trackWhatsAppClick({
      button: "homepage_cta",
      label: `Home Section: ${source}`,
    });
    const isEs = lang === "es";
    const defaultText = isEs
      ? "¡Hola Baoding Junyang! Me gustaría solicitar el catálogo de fábrica y una cotización para gorras personalizadas (MOQ 200 uds)."
      : "Hi Baoding Junyang! I would like to get a catalog and quote for custom baseball caps.";
    const text = encodeURIComponent(`${customText || defaultText}\n\n${attributionTag()}`);
    window.open(`https://wa.me/8615933930830?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Trust Banner / Top Bar */}
      <div className="bg-black text-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span>{t("topBar")}</span>
        <span className="hidden sm:inline text-amber-400">•</span>
          <span className="text-amber-400 font-bold">
            {t("q4Schedule")}
          </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              width="48"
              height="48"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black tracking-tighter text-black">JUNYANG</span>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none whitespace-nowrap">{t("subtitle")}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <NavProductsMenu />
            <a href="#advantages" className="hover:text-black transition">{n("advantages")}</a>
            <Link href={`/${lang}/about`} className="hover:text-black transition">{n("about")}</Link>
            <NavGuideMenu />
            <Link href={`/${lang}/blog`} className="hover:text-black transition">Blog</Link>
            <a href="#inquiry" className="hover:text-black transition">{n("inquiry")}</a>
          </nav>
          {/* Action buttons (Desktop + Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section (Carousel — True Full-Bleed 2560x864 Panoramic Banners) */}
      <section className="relative w-full overflow-hidden bg-gray-950 flex items-center justify-center">
        <div className="relative w-full aspect-[2560/864] max-h-[660px] overflow-hidden">
          {BANNERS.map((banner, index) => (
            <div 
              key={index}
              onClick={banner.link === 'whatsapp' ? () => handleWhatsApp("hero-banner") : () => window.location.hash = banner.link}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <picture className="w-full h-full block">
                <source media="(max-width: 768px)" srcSet={banner.mobileImage} type="image/webp" />
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  width="2560"
                  height="864"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="w-full h-full object-cover"
                />
              </picture>
              {/* Screen Reader & SEO semantic preservation */}
              <div className="sr-only">
                {index === 0 ? (
                  <h1>{banner.title}</h1>
                ) : (
                  <h2>{banner.title}</h2>
                )}
                <p>{banner.sub}</p>
                <span>{banner.label}</span>
                <span>{banner.cta}</span>
              </div>
            </div>
          ))}

        {/* Carousel Controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevBanner(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition text-white shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextBanner(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition text-white shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

          {/* Carousel Indicators (Accessible touch area with sleek visual bar) */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1 sm:gap-2 items-center">
            {BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentBanner(index); }}
                className="p-3.5 -m-1.5 flex items-center justify-center cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`block h-2 transition-all duration-300 rounded-full ${index === currentBanner ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/60 hover:bg-white/90'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="advantages" className="bg-white py-6 sm:py-10 md:py-16 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center">
          <div className="p-1 sm:p-4">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-black mb-0.5 sm:mb-1">{t("stats.years")}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.yearsLabel")}</p>
          </div>
          <div className="p-1 sm:p-4">
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-black mb-0.5 sm:mb-1">{t("stats.moq")}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.moqLabel")}</p>
          </div>
          <div className="p-1 sm:p-4 flex flex-col items-center justify-center">
            <ShieldCheck size={28} strokeWidth={1.5} className="mb-1 text-gray-400 sm:w-10 sm:h-10" />
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">{t("stats.sgs")}</p>
          </div>
        </div>

        {/* B2B Procurement Assets & Decision Tools Grid */}
        <div className="max-w-6xl mx-auto mt-4 sm:mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Asset 1: Vector Tech Pack Templates */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between text-white">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <FileDown size={20} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  <span>{t("assets.badge1a")}</span>
                  <span>•</span>
                  <span>{t("assets.badge1b")}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1">
                  {t("assets.title1")}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t("assets.desc1")}
                </p>
              </div>
            </div>
            <Link
              href={`/${lang}/custom-hat-tech-pack-template`}
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition shadow-md whitespace-nowrap self-start"
            >
              <span>{t("assets.cta1")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Asset 2: Export Carton & CBM Calculator Tool */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between text-white">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Package size={20} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  <span>{t("assets.badge2a")}</span>
                  <span>•</span>
                  <span>{t("assets.badge2b")}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1">
                  {t("assets.title2")}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t("assets.desc2")}
                </p>
              </div>
            </div>
            <Link
              href={`/${lang}/tools/carton-calculator`}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-black text-xs px-4 py-2.5 rounded-xl transition shadow-md whitespace-nowrap self-start"
            >
              <span>{t("assets.cta2")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Markets & Compliance */}
      <section className="bg-gray-50 py-4 sm:py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 text-slate-700">
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2 sm:mb-3 text-slate-600">{t("compliance.title")}</span>
               <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
                  <span className="font-black text-lg sm:text-xl italic text-slate-700">{t("compliance.a")}</span>
                  <div className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transform -rotate-2">
                     <span className="font-black text-sm sm:text-base italic tracking-tight">{t("compliance.b")}</span>
                     <span className="text-[7px] sm:text-[8px] font-bold uppercase leading-tight">{t("compliance.certified")}</span>
                  </div>
                  <span className="font-black text-lg sm:text-xl italic text-slate-700">{t("compliance.c")}</span>
               </div>
           </div>
           <div className="h-6 sm:h-8 w-px bg-gray-300 hidden sm:block"></div>
           <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest mb-2 sm:mb-3 text-slate-600">{t("compliance.markets")}</span>
              <div className="flex gap-4 sm:gap-8">
                 <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">{t("compliance.na")}</span>
                 <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">{t("compliance.eu")}</span>
              </div>
           </div>
        </div>
      </section>


      {/* Trusted By / Social Proof Section */}
      <section className="py-8 sm:py-16 md:py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-gray-500">{t("trust.label")}</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mt-1 mb-2 sm:mb-4">{t("trust.heading")}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs sm:text-base md:text-lg font-light mb-4 sm:mb-12">
            {t("trust.sub")}
          </p>

          {/* Trust Indicators Grid — Ultra-compact 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 mb-4 sm:mb-12">
            {[
              {
                icon: "🏭",
                stat: t("trust.brands"),
                label: t("trust.brandsLabel"),
                desc: t("trust.brandsDesc")
              },
              {
                icon: "🧢",
                stat: t("trust.caps"),
                label: t("trust.capsLabel"),
                desc: t("trust.capsDesc")
              },
              {
                icon: "⭐",
                stat: t("trust.retention"),
                label: t("trust.retentionLabel"),
                desc: t("trust.retentionDesc")
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 md:p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="text-xl sm:text-4xl mb-1 sm:mb-4">{item.icon}</div>
                <p className="text-lg sm:text-3xl md:text-4xl font-black text-black mb-0.5 sm:mb-2">{item.stat}</p>
                <p className="font-bold text-gray-800 text-[10px] sm:text-sm md:text-base leading-tight mb-0.5 sm:mb-2">{item.label}</p>
                <p className="hidden sm:block text-gray-500 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications Row — Compact on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 py-3 sm:py-6 border-t border-gray-100">
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <ShieldCheck size={14} className="text-green-600 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.sgsSupplier")}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.goldSupplier")}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-3 border border-gray-200 rounded-full">
              <span className="text-[10px] sm:text-sm font-bold">{t("trust.certifications")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section — Modern B2B Industrial Wholesale Fluid 4-Column Grid */}
      <section id="catalog" className="py-8 sm:py-16 md:py-24 bg-slate-50/80 border-y border-slate-200/80 scroll-mt-20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full inline-block">
              {t("catalog.label")}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mt-1.5 sm:mt-3 mb-1.5 sm:mb-4">
              {t("catalog.heading")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-normal leading-relaxed">
              {t("catalog.sub")}
            </p>
          </div>
          <HatCatalog />
        </div>
      </section>

      {/* Sourcing Programs by Buyer Segment (Item 2) */}
      <section className="py-8 sm:py-14 md:py-18 px-4 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 sm:gap-3 mb-6 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full inline-block">
                {t("sectorsBadge")}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1.5 sm:mt-2">
                {t("sectorsTitle")}
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">
              {t("sectorsSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTOR_HREFS.map((href, i) => {
              const accents = [
                { badge: "text-purple-700 bg-purple-100/80", foot: "text-emerald-700" },
                { badge: "text-blue-700 bg-blue-100/80", foot: "text-blue-700" },
                { badge: "text-emerald-700 bg-emerald-100/80", foot: "text-emerald-700" },
                { badge: "text-amber-700 bg-amber-100/80", foot: "text-amber-800" },
              ][i];
              return (
                <div key={href} className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${accents.badge} px-2 py-0.5 rounded`}>
                        {t(`sectors.${i}.tag`)}
                      </span>
                      <span className="text-xs font-black text-slate-900">{t(`sectors.${i}.moq`)}</span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-1">
                      {t(`sectors.${i}.title`)}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {t(`sectors.${i}.desc`)}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className={`text-[11px] font-bold ${accents.foot}`}>{t(`sectors.${i}.foot`)}</span>
                    <Link href={`/${lang}${href}`} className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1">
                      <span>{t("explore")}</span> <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Manufacturing Programs — High-Density 4-Column Grid */}
      <section className="py-6 sm:py-12 md:py-16 px-4 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 sm:gap-3 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                {t("programsBadge")}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1 sm:mt-2">
                {t("programsTitle")}
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">
              {t("programsSub")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {PROGRAM_HREFS.map((href, idx) => (
              <Link
                key={idx}
                href={`/${lang}${href}`}
                className="group bg-white p-2.5 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-1.5 sm:px-2 py-0.5 rounded">
                      {t(`programs.${idx}.tag`)}
                    </span>
                    <ArrowRight size={12} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-0.5 sm:mb-1">
                    {t(`programs.${idx}.title`)}
                  </h3>
                  <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed line-clamp-2">
                    {t(`programs.${idx}.desc`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How It Works — Compact Horizontal Flow Ribbon */}
      <section className="py-6 sm:py-10 md:py-14 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-400">{t("process.label")}</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-0.5 sm:mt-1">{t("process.heading")}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {lang === "es" ? "Cotización Escrita en 2h" : "Written Quote in 2h"}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                {t("milestone.samplesBulk")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6">
            {[
              { num: "01", title: t("process.step1Title"), desc: t("process.step1Desc") },
              { num: "02", title: t("process.step2Title"), desc: t("process.step2Desc") },
              { num: "03", title: t("process.step3Title"), desc: t("process.step3Desc") },
              { num: "04", title: t("process.step4Title"), desc: t("process.step4Desc") },
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-800/80 border border-slate-700/70 p-2.5 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-black text-amber-400 font-mono tracking-wider">STEP {step.num}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Photo & Video Proof Bar (Item 3) */}
          <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                  <span>{t("milestone.title")}</span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    {t("milestone.updates")}
                  </span>
                </h4>
                <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                  {t("milestone.desc")}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleWhatsApp("process-milestone")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-xs whitespace-nowrap cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>{t("milestone.cta")}</span>
            </button>
          </div>
        </div>
      </section>


      {/* FAQ Section — Compact 2-Column Accordion */}
      <section className="py-6 sm:py-10 md:py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full inline-block">
                FAQ
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-1 sm:mt-2">
                {t("faq.heading")}
              </h2>
            </div>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md">{t("faq.sub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-2xs transition">
                <summary className="flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer list-none">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-black text-xs">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown size={14} className="text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180 sm:w-4 sm:h-4" />
                </summary>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-slate-100 flex gap-2">
                  <span className="text-slate-400 font-black shrink-0">A:</span>
                  <span>{faq.a}</span>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Knowledge Section — materials, compliance, ordering flow */}
      {(() => {
        const g = SOURCING_GUIDE[lang] || SOURCING_GUIDE.en;
        return (
          <section className="py-8 sm:py-14 md:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {g.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
                  {g.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">{g.intro}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.materialsTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {g.materials.map((m) => (
                    <div key={m.name} className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                      <h4 className="font-black text-sm text-slate-900 mb-1.5">{m.name}</h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">{g.complianceTitle}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{g.complianceBody}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">{g.logisticsTitle}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{g.logisticsBody}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.checklistTitle}</h3>
                <div className="space-y-3">
                  {g.checklist.map((step, i) => (
                    <div key={step.title} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-slate-900 text-white text-[11px] font-black flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-black text-sm text-slate-900 mb-0.5">{step.title}</h4>
                        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.vetTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {g.vet.map((v, i) => (
                    <div key={v.title} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                      <span className="shrink-0 w-6 h-6 rounded-lg bg-blue-600 text-white text-[10px] font-black flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-black text-sm text-slate-900 mb-0.5">{v.title}</h4>
                        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.glossaryTitle}</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {g.glossary.map((item) => (
                    <div key={item.term} className="flex items-baseline gap-2 border-b border-slate-100 pb-1.5">
                      <dt className="shrink-0 font-black text-xs text-slate-900">{item.term}</dt>
                      <dd className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{item.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.faqTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {g.faqs.map((f) => (
                    <div key={f.q} className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 sm:p-5">
                      <h4 className="font-bold text-sm text-slate-900 mb-1.5">{f.q}</h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {g.deep && (
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">{g.deepTitle}</h3>
                  <div className="space-y-5">
                    {g.deep.map((d) => (
                      <div key={d.title}>
                        <h4 className="font-bold text-sm text-slate-900 mb-1">{d.title}</h4>
                        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{d.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })()}

      {/* Inquiry Section — High-Efficiency Lead Box */}
      <section id="inquiry" className="py-6 sm:py-12 md:py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 border border-slate-200 shadow-xs">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              {t("inquiry.heading")}
            </h2>
            <p className="text-slate-500 text-[11px] sm:text-xs md:text-sm max-w-md mx-auto mt-1 leading-relaxed">
              {t("inquiry.sub")}
            </p>
          </div>

          {/* Trust label above form */}
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
            <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-600">
              <ShieldCheck size={14} className="text-emerald-600 sm:w-4 sm:h-4" /> {t("inquiry.trustLabel")}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 sm:px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={12} className="text-blue-600 sm:w-3.5 sm:h-3.5" />
              {lang === "es"
                ? "Soporte de Pago Seguro: Garantía Comercial Alibaba (Trade Assurance) / Escrow"
                : "Payment Protection: Alibaba Trade Assurance & Escrow Supported"}
            </span>
          </div>

          {/* Quick intent selector for zero-cost high-conversion hooks */}
          <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <a
              href="#inquiry?intent=techpack"
              className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/80 rounded-lg sm:rounded-xl transition text-left group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FileDown size={14} className="sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-black text-slate-900 group-hover:text-blue-600 transition flex items-center gap-1">
                    {t("intents.techpackTitle")}
                    <ArrowRight size={11} className="inline opacity-60" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                    {t("intents.techpackSub")}
                  </div>
              </div>
            </a>

            <a
              href="#inquiry?intent=mockup"
              className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 rounded-lg sm:rounded-xl transition text-left group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles size={14} className="sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-black text-slate-900 group-hover:text-emerald-700 transition flex items-center gap-1">
                    {t("intents.mockupTitle")}
                    <ArrowRight size={11} className="inline opacity-60" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                    {t("intents.mockupSub")}
                  </div>
              </div>
            </a>
          </div>

          <InquiryForm />

          {/* Service commitments below form — Compact 3-Column Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200/80">
            <h3 className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              {t("inquiry.testimonialTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-2 text-emerald-600">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-xs font-black text-slate-900 mb-1">
                      {t(`inquiry.commitments.${i}.title`)}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(`inquiry.commitments.${i}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 sm:py-12 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 items-start">
          {/* Col 1: Brand & Factory Profile */}
          <div className="space-y-4">
            <img 
              src="/images/brand/junyang-logo.webp" 
              alt="JUNYANG Logo" 
              width="56"
              height="56"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-gray-400 leading-relaxed">{ft("about")}</p>
            <div className="pt-3 border-t border-gray-900 text-[11px] text-gray-500 space-y-1">
              <p className="font-semibold text-gray-400">{t("factoryDirect")}</p>
              <p>{t("exporting")}</p>
            </div>
          </div>

          {/* Col 2: Custom Headwear Categories */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{t("headwearTitle")}</h4>
            <ul className="space-y-2 text-xs">
              {HEADWEAR_LINKS.map((href, i) => (
                <li key={href}><a href={`/${lang}${href}`} className="hover:text-white transition">{t(`headwear.${i}`)}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sourcing Guides & Comparisons */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{t("guidesTitle")}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={`/${lang}${GUIDE_LINKS[0]}`} className="text-yellow-400 hover:text-yellow-300 font-bold transition flex items-center gap-1">
                  <span>{t("guides.0")}</span>
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-1 py-0.2 rounded font-normal">{t("freeBadge")}</span>
                </a>
              </li>
              {GUIDE_LINKS.slice(1).map((href, i) => (
                <li key={href}><a href={`/${lang}${href}`} className="hover:text-white transition">{t(`guides.${i + 1}`)}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Factory Desk */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{ft("contact")}</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href={`https://wa.me/8615933930830?text=${encodeURIComponent(
                    lang === "es"
                      ? "¡Hola Baoding Junyang! Me gustaría solicitar información y cotización para fabricación de gorras personalizadas (MOQ 200 uds)."
                      : "Hi Baoding Junyang! I would like to inquire about custom hat manufacturing and get a quote (MOQ 200pcs)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      button: "footer_whatsapp_link",
                      label: "Homepage Footer Contact",
                    })
                  }
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span>WhatsApp: +86 159 3393 0830</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@bdjunyang.com" className="hover:text-white transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                  <span>{ft("email")}</span>
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0"></span>
                <span>{ft("office")}</span>
              </li>
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
                <Facebook size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/146738106/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 hover:text-blue-300 text-gray-400 flex items-center justify-center transition border border-white/10"
                aria-label="LinkedIn Company Page"
                title="Connect on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>

            <a
              href="#inquiry"
              className="mt-4 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-2 rounded-lg text-xs transition shadow-sm cursor-pointer"
            >
              <span>{ft("requestQuote")}</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] text-gray-500">
          <p>{ft("copyright")}</p>
          <div className="flex items-center gap-4 text-gray-500">
            <Link href={`/${lang}/privacy`} className="hover:text-gray-300 transition">
              {ft("privacy") || "Privacy Policy"}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-gray-300 transition">
              {ft("terms") || "Terms of Service"}
            </Link>
            <a href="#top" className="hover:text-gray-300 transition">
              {t("backToTop")}
            </a>
          </div>
        </div>
      </footer>
      <MobileStickyBar pageName="Homepage" />
    </main>
  );
}

