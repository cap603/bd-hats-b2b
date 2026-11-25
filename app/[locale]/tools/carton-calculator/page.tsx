"use client";

import Link from "next/link";
import { Package, Truck, ShieldCheck, ArrowRight, MessageCircle, CheckCircle2, Box } from "lucide-react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { useLang } from "../../../lib/i18n";
import { NavCompareMenu } from "../../../components/NavCompareMenu";
import { NavProductsMenu } from "../../../components/NavProductsMenu";
import { MobileNav } from "../../../components/MobileNav";
import { ShippingCalculator } from "../../../components/ShippingCalculator";
import { trackWhatsAppClick } from "../../../lib/tracking";

const WHATSAPP_NUMBER = "8615933930830";

// Paragraph-style freight planning guide, kept as a module-level constant so it
// ships in the JS bundle rather than the RSC flight payload (lighter HTML per
// text char — this tool page is otherwise calculator markup with thin text).
const FREIGHT_GUIDE = {
  en: [
    "Carton planning starts with the numbers above because ocean freight is charged by volume, not by weight: a master carton of 60×45×40cm occupies 0.108 CBM whether it holds light trucker hats or heavy canvas caps. Our standard export carton carries 100 structured or unstructured caps in four inner boxes of 25 pieces, weighing around 12kg gross — light enough for single-person handling, dense enough that you are not paying freight on air. Knit beanies pack at 200 pieces per master carton in 10-piece polybags at about 14kg, which changes the CBM math for winter programs, so the calculator above handles both pack styles separately.",
    "With carton count in hand, the first decision is 20GP versus 40HQ. A 20GP uses roughly 28 CBM of usable volume and carries about 260–280 of our standard cartons — around 26,000–28,000 caps. A 40HQ offers about 68 CBM and carries 630–680 cartons, or 63,000–68,000 caps. The per-cap freight cost of a full 40HQ is typically less than half that of a 20GP, which is the single biggest lever on landed cost once you are above roughly 30,000 pieces per season. If your volume sits between the two, ask us about LCL (less-than-container-load) consolidation: you pay for the CBM you actually use, at a higher per-CBM rate than FCL but without committing to a full box.",
    "The second decision is sea versus air. Sea freight carries bulk programs in 25–35 days depending on the lane — transpacific to North America sits at the shorter end, transatlantic and Middle East lanes at the longer end. Air express moves samples and urgent replenishment in 5–8 days at a premium that only makes economic sense when a sell-out is at stake. A pattern that works for seasonal brands: ship the season's base volume by sea 6–8 weeks before the retail window, then hold a small air-freighted buffer for restocks once sell-through data exists. We schedule production backwards from your retail date, so tell us the window rather than just the quantity.",
    "The third decision is the Incoterm. EXW means you arrange pickup at our Baoding facility and carry every leg of the risk — rare for first-time importers. FOB means we deliver the cartons onto the vessel at the Chinese port, and you control ocean freight and insurance from there; it is the default for experienced importers because it keeps the freight budget in your hands. CIF adds ocean freight and insurance at our cost with your markup, useful when you want one consolidated number to compare against other suppliers. Whichever term you choose, the commercial invoice, packing list and certificates of origin travel with every shipment, which is exactly what your customs broker needs to clear the cargo the first time.",
    "Humidity and handling matter as much as volume. Caps are individually polybagged before cartoning, cartons include humidity protection, and each container load is sealed and photographed before dispatch so you can verify the seal number against the photos on arrival. Stack weight is engineered into the 5-ply double-wall carton: 12kg gross keeps re-handling safe at ports and warehouses. If your retail requires it, branded retail boxes, custom hangtags and barcode labeling are produced in-house and packed with the order, so the carton contents match your shelf plan unit for unit.",
    "Finally, use the calculator as a negotiation tool in both directions. Before you commit quantities, run your order through it: if the carton count lands near a container boundary, produce to the boundary — the per-unit freight saving usually outweighs the carrying cost of a few extra hundred caps. And when a forwarder quotes you freight, check it against CBM: ocean rates are published per CBM for LCL and per container for FCL, so any quote that does not reconcile with the volume numbers above deserves a second question. Send us your quantities and destination, and we will return a written FOB quotation within 2 working hours, with carton count, CBM and recommended container type itemized.",
    "Documentation is part of the packing spec, not an afterthought. Every shipment leaves with a commercial invoice stating the actual construction and material of each style, a packing list with carton dimensions, gross weight and piece count per carton, and certificates of origin where your market requires them. The invoiced descriptions match the product declarations, so classification at your port is straightforward — misdeclared cargo is the most common cause of customs delays for headwear imports, and it is entirely preventable with accurate paperwork. If you import regularly, keep the carton dimensions and CBM figures from the calculator on file: your forwarder, your warehouse and your customs broker will all reference the same numbers, and discrepancies — the usual source of demurrage and rehandling fees — simply do not arise.",
    "One last habit separates smooth importers from stressed ones: photograph your cartons at dispatch and at arrival. Each container load we ship is sealed and photographed before it leaves, and the seal number is recorded on the documents — if a carton is damaged, missing or wet at arrival, the photos and seal record turn a dispute into a simple checklist. The same discipline applies inside the carton: pieces are counted against the packing list before sealing, humidity protection is included, and carton corners are reinforced for container stacks. Run your numbers through the calculator, send us your quantities and destination, and you will have carton count, CBM, container recommendation and a written FOB quotation within 2 working hours — the complete logistics picture before you commit a single piece.",
  ],
  es: [
    "La planificación de cajas comienza con las cifras anteriores porque el flete marítimo se cobra por volumen y no por peso: una caja maestra de 60×45×40cm ocupa 0,108 CBM tanto si lleva gorras trucker ligeras como gorras de lona pesadas. Nuestra caja de exportación estándar transporta 100 gorras estructuradas o no en cuatro cajas interiores de 25 unidades, con unos 12kg brutos: lo bastante ligera para manipulación de una persona y lo bastante densa para no pagar flete por aire. Los gorros de punto se embalan a 200 unidades por caja maestra en polibolsas de 10, unos 14kg, lo que cambia la matemática CBM en programas de invierno; por eso la calculadora de arriba trata ambos formatos de embalaje por separado.",
    "Con el número de cajas en la mano, la primera decisión es 20GP frente a 40HQ. Un 20GP usa unos 28 CBM de volumen útil y carga unas 260–280 de nuestras cajas estándar, es decir unas 26.000–28.000 gorras. Un 40HQ ofrece unos 68 CBM y carga 630–680 cajas, o 63.000–68.000 gorras. El flete por gorra de un 40HQ completo suele ser menos de la mitad que el de un 20GP, y es la palanca más grande sobre el coste de llegada cuando superas unas 30.000 unidades por temporada. Si tu volumen queda entre ambos, pregúntanos por la consolidación LCL (menos que un contenedor completo): pagas los CBM que realmente usas, a un precio por CBM mayor que el FCL pero sin comprometerte con un contenedor entero.",
    "La segunda decisión es mar frente a aire. El flete marítimo lleva los programas masivos en 25–35 días según la ruta: el transpacífico hacia Norteamérica está en el extremo corto y las rutas atlánticas y de Oriente Medio en el largo. El exprés aéreo mueve muestras y repones urgentes en 5–8 días a un precio que solo tiene sentido económico cuando está en juego una venta agotada. Un patrón que funciona para marcas estacionales: embarcar el volumen base de la temporada por mar 6–8 semanas antes de la ventana retail, y mantener después un colchón pequeño por aire para reposiciones cuando ya exista datos de venta. Programamos la producción en orden inverso desde tu fecha retail, así que cuéntanos la ventana y no solo la cantidad.",
    "La tercera decisión es el Incoterm. EXW significa que tú organizas la recogida en nuestra planta de Baoding y cargas con el riesgo de todo el trayecto: raro para importadores primerizos. FOB significa que nosotros entregamos las cajas a bordo en el puerto chino y tú controlas flete marítimo y seguro desde ahí; es el estándar para importadores experimentados porque mantiene el presupuesto de flete en tus manos. CIF añade flete marítimo y seguro a nuestro coste con tu margen, útil cuando quieres una cifra única para comparar con otros proveedores. Sea cual sea el término, la factura comercial, la lista de embalaje y los certificados de origen viajan con cada envío, que es exactamente lo que tu agente de aduana necesita para despachar la carga a la primera.",
    "La humedad y la manipulación importan tanto como el volumen. Las gorras van en polibolsa individual antes del cartonaje, las cajas incluyen protección contra humedad, y cada carga de contenedor se sella y fotografía antes del despacho para que puedas cotejar el número de sello con las fotos en la llegada. El peso de apilado está diseñado dentro de la caja de 5 capas: 12kg brutos mantiene la re-manipulación segura en puertos y almacenes. Si tu retail lo exige, cajas retail de marca, etiquetas colgantes personalizadas y código de barras se producen en casa y se embalan con el pedido, de modo que el contenido de la caja coincide con tu plan de estante unidad por unidad.",
    "Por último, usa la calculadora como herramienta de negociación en ambas direcciones. Antes de comprometer cantidades, pasa tu pedido por ella: si el número de cajas cae cerca de un límite de contenedor, produce hasta ese límite, porque el ahorro de flete por unidad suele pesar más que el coste de mantener unas cientos de gorras extra. Y cuando un transitario te cotice flete, compáralo contra CBM: las tarifas marítimas se publican por CBM para LCL y por contenedor para FCL, así que cualquier cotización que no cuadre con las cifras de volumen de arriba merece una segunda pregunta. Envíanos tus cantidades y destino, y te devolveremos una cotización FOB escrita en menos de 2 horas hábiles, con número de cajas, CBM y tipo de contenedor recomendado desglosados.",
    "La documentación forma parte de la especificación de embalaje, no es un detalle posterior. Cada envío sale con una factura comercial que indica la construcción y el material reales de cada estilo, una lista de embalaje con dimensiones de caja, peso bruto y conteo de piezas por caja, y certificados de origen cuando tu mercado los exige. Las descripciones facturadas coinciden con las declaraciones de producto, así que la clasificación en tu puerto es sencilla: la carga mal declarada es la causa más común de retrasos aduaneros en importaciones de gorras, y es totalmente prevenible con papeles exactos. Si importas con regularidad, guarda las dimensiones de caja y las cifras de CBM de la calculadora en tu archivo: tu transitario, tu almacén y tu agente de aduana referenciarán los mismos números, y las discrepancias —la fuente habitual de recargos por demora y re-manipulación— simplemente no surgen.",
    "Un último hábito separa a los importadores serenos de los estresados: fotografiar las cajas en el despacho y en la llegada. Cada carga de contenedor que sale está sellada y fotografiada antes de salir, y el número de sello consta en los documentos: si una caja llega dañada, falta o mojada, las fotos y el registro del sello convierten un conflicto en una simple lista de verificación. La misma disciplina se aplica dentro de la caja: las unidades se cuentan contra la lista de embalaje antes de sellar, se incluye protección contra humedad y se refuerzan las esquinas para apilamientos de contenedor. Pasa tus números por la calculadora, envíanos tus cantidades y destino, y tendrás número de cajas, CBM, contenedor recomendado y una cotización FOB escrita en menos de 2 horas hábiles: el cuadro logístico completo antes de comprometer una sola unidad.",
  ],
};

export default function CartonCalculatorPage() {
  const lang = useLang();
  const isEs = lang === "es";

  const handleWhatsApp = () => {
    trackWhatsAppClick({
      button: "carton_calc_page_hero",
      label: "Carton Calculator Page Hero CTA",
    });
    const greeting = isEs
      ? "¡Hola BD Hats! He utilizado su Calculadora de Embalaje y CBM. Quisiera confirmar especificaciones de embalaje y solicitar cotización FOB China en 2 horas."
      : "Hi BD Hats, I used your carton calculator. Please confirm export packing specifications and quote FOB China within 2 hours.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(greeting)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
              BD HATS
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 rounded">
              Baoding Junyang
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <NavProductsMenu />
            <NavCompareMenu />
            <Link href={`/${lang}/pricing`} className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition">
              {isEs ? "Precios y Costes" : "Pricing & MOQ"}
            </Link>
            <Link href={`/${lang}/custom-hat-tech-pack-template`} className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition">
              {isEs ? "Plantillas Tech Pack" : "Tech Pack Templates"}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition shadow-xs cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>{isEs ? "WhatsApp Fábrica" : "WhatsApp Factory"}</span>
            </button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <Breadcrumb items={[
          { label: isEs ? "Inicio" : "Home", href: `/${lang}` },
          { label: isEs ? "Herramientas B2B" : "B2B Tools", href: `/${lang}#tools` },
          { label: isEs ? "Calculadora de Embalaje y CBM" : "Export Carton & CBM Calculator" },
        ]} />

        {/* Hero Title */}
        <div className="mt-4 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 mb-3">
            <Box size={14} />
            <span>{isEs ? "Estándar de Embalaje Industrial B2B" : "Standard Export Packaging Specification"}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {isEs
              ? "Calculadora B2B de Embalaje, Peso Bruto y Volumen CBM"
              : "B2B Export Carton, Gross Weight & Freight CBM Calculator"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            {isEs
              ? "Planifique la logística de importación de gorras personalizadas con precisión de fábrica. Calcule cajas máster (60×45×40cm), peso bruto y volumen cúbico para envíos aéreos o marítimos FCL/LCL."
              : "Plan your international custom headwear logistics with factory precision. Estimate master export cartons (60×45×40cm), gross weight, and cubic metric volume (CBM) for Air Express, Air Cargo, or Ocean Container freight."}
          </p>
        </div>

        {/* Embedded Calculator */}
        <ShippingCalculator />

        {/* Industrial Engineering & Container Specifications */}
        <div className="mt-12 space-y-8">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <Package size={20} className="text-blue-600" />
              <span>{isEs ? "Especificaciones Estándar de Cajas de Exportación" : "Standard Export Master Carton Specifications"}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Dimensiones Máster" : "Master Carton Dimensions"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  60 × 45 × 40 cm
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "0.108 CBM por caja (Corrugado 5 capas reforzado)" : "0.108 CBM / carton (Double-wall 5-ply export)"}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Capacidad Gorras (Estructuradas y Sin Estructura)" : "Cap Capacity (Structured & Unstructured)"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  100 {isEs ? "uds / caja" : "pcs / carton"}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "4 cajas interiores individuales × 25 uds (~12.0 kg)" : "4 inner boxes × 25 pcs (~12.0 kg gross weight)"}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {isEs ? "Capacidad Gorros de Lana (Beanies)" : "Knit Beanie Capacity"}
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 block">
                  200 {isEs ? "uds / caja" : "pcs / carton"}
                </span>
                <span className="text-[11px] text-slate-500">
                  {isEs ? "Bolsas de 10 uds en caja máster (~14.0 kg)" : "10 pcs polybag master packs (~14.0 kg gross weight)"}
                </span>
              </div>
            </div>

            {/* Container Load Table */}
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">
              {isEs ? "Capacidad Estimada por Contenedor Marítimo FCL" : "Ocean Freight FCL Container Load Estimation"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">{isEs ? "Tipo de Contenedor" : "Container Type"}</th>
                    <th className="p-3">{isEs ? "Volumen Útil" : "Usable Volume"}</th>
                    <th className="p-3">{isEs ? "Cajas Estimadas" : "Cartons (60×45×40cm)"}</th>
                    <th className="p-3">{isEs ? "Capacidad en Gorras" : "Total Caps (100 pcs/ctn)"}</th>
                    <th className="p-3">{isEs ? "Tiempo de Tránsito" : "Estimated Transit"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-900">20GP Container</td>
                    <td className="p-3">~28 CBM</td>
                    <td className="p-3 font-semibold">~260 – 280 Cartons</td>
                    <td className="p-3 font-black text-emerald-600">~26,000 – 28,000 Pcs</td>
                    <td className="p-3">22 – 30 Days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-900">40HQ High-Cube</td>
                    <td className="p-3">~68 CBM</td>
                    <td className="p-3 font-semibold">~630 – 680 Cartons</td>
                    <td className="p-3 font-black text-emerald-600">~63,000 – 68,000 Pcs</td>
                    <td className="p-3">25 – 35 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Freight Planning Guide */}
        <div className="mt-12 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-5 flex items-center gap-2">
            <Truck size={20} className="text-blue-600" />
            <span>{isEs ? "Guía de Planificación de Flete" : "Freight Planning Guide"}</span>
          </h2>
          <div className="space-y-4">
            {FREIGHT_GUIDE[isEs ? "es" : "en"].map((p, i) => (
              <p key={i} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-white border-t border-slate-200/80 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Baoding Junyang Hat Manufacturing Co., Ltd. Direct Factory B2B Export Solutions.</p>
        <p className="mt-1 text-[11px] text-slate-400">Written quotations delivered within 2 hours · admin@bdjunyang.com</p>
      </footer>
    </div>
  );
}
