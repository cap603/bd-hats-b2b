// Round-2 fixes: remove remaining self-certification claims and absolute QC wording.
// Each replacement is asserted to occur exactly once; any miss aborts with exit 1.
import fs from "fs";

const root = "E:/accio work/帽子独立站/bdjunyang.com/website";

const edits = {
  "app/lib/resources-data.ts": [
    [`"58.0 cm across 100% of carton lots"`, `"Consistent 58.0 cm across carton lots"`],
    [`"Identical Barudan DST stitch file execution", "Zero variation"`, `"Identical Barudan DST stitch file execution", "Minimal variation"`],
    [`"100% piece-by-piece metal detector scan", "Zero metal fragments"`, `"Continuous tunnel metal detector scan on bulk lots", "No metal fragments"`],
    [`tableTitle: "Audited Sourcing Partner vs Opaque Trading Agent"`, `tableTitle: "Vetted Sourcing Partner vs Opaque Trading Agent"`],
    [`"Audited Sourcing Partner (Baoding Junyang)"`, `"Vetted Sourcing Partner (Baoding Junyang)"`],
    [`"Piece-by-piece inspection + tunnel metal detection"`, `"Multi-stage quality checks + tunnel metal detection"`],
    [`We require BSCI-level social compliance and ISO 9001:2015 quality management from every partner facility in our network, guaranteeing ethical labor standards and consistent procedural oversight.`, `Our partner facilities are selected and reviewed by our sourcing team across quality systems, capacity and social compliance, and third-party audits or inspections can be arranged per order for your target market.`],
    [`testing equipment for piece-by-piece checks or lot sampling`, `testing equipment for detailed checks or lot sampling`],
    [`"58.0 cm en el 100% de los lotes"`, `"58.0 cm constante en todos los lotes"`],
    [`"Ejecución idéntica del archivo DST Barudan", "Cero variación"`, `"Ejecución idéntica del archivo DST Barudan", "Variación mínima"`],
    [`"Inspección 100% pieza por pieza", "Cero fragmentos metálicos"`, `"Escaneo continuo por túnel detector de metales", "Sin fragmentos metálicos"`],
    [`tableTitle: "Socio de Sourcing Auditado vs Intermediario Opaco"`, `tableTitle: "Socio de Sourcing Seleccionado vs Intermediario Opaco"`],
    [`"Socio de Sourcing Auditado (Baoding Junyang)"`, `"Socio de Sourcing Seleccionado (Baoding Junyang)"`],
    [`"Inspección pieza por pieza + detector de metales"`, `"Controles de calidad por etapas + detector de metales"`],
    [`Exigimos a todas las fábricas colaboradoras de nuestra red auditorías sociales BSCI y sistemas de gestión de calidad ISO 9001:2015, garantizando condiciones laborales éticas y trazabilidad en cada lote.`, `Las fábricas colaboradoras de nuestra red son seleccionadas y revisadas por nuestro equipo de sourcing en sistemas de calidad, capacidad y responsabilidad social, y las auditorías e inspecciones de terceros se gestionan por pedido para tu mercado.`],
    [`con mesas de inspección dedicadas para revisión pieza por pieza o muestreo por lotes.`, `con mesas de inspección dedicadas para revisiones detalladas o muestreo por lotes.`],
    [`"Certificado para 30+ lavados domésticos suaves"`, `"Diseñado para 30+ lavados domésticos suaves"`],
  ],
  "app/[locale]/custom-hat-cost-index-2026/page.tsx": [
    [`and piece-by-piece final quality inspection.`, `and multi-stage final quality inspection.`],
    [`{lang === "es" ? "Control de Calidad Propio Pieza a Pieza" : "In-House Piece-by-Piece QC"}`, `{lang === "es" ? "Control de Calidad Interno Pre-envío" : "In-House Pre-Shipment QC"}`],
  ],
  "app/[locale]/wholesale-snapbacks/page.tsx": [
    [`Bulk is checked piece by piece rather than sampled, because`, `Bulk is checked carton by carton against the approved sample, because`],
  ],
  "messages/es.json": [
    [`fábricas asociadas verificadas`, `fábricas asociadas seleccionadas`],
  ],
  "messages/pt.json": [
    [`fábricas parceiras verificadas`, `fábricas parceiras selecionadas`],
  ],
};

let failed = false;
for (const [rel, reps] of Object.entries(edits)) {
  const p = root + "/" + rel;
  let t = fs.readFileSync(p, "utf8");
  for (const [a, b] of reps) {
    const n = t.split(a).length - 1;
    if (n !== 1) {
      console.log(`FAIL ${rel} count=${n} :: ${a.slice(0, 90)}`);
      failed = true;
      continue;
    }
    t = t.split(a).join(b);
  }
  fs.writeFileSync(p, t);
  console.log(`ok ${rel} (${reps.length} replacements)`);
}
process.exit(failed ? 1 : 0);
