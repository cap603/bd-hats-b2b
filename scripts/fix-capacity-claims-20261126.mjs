// Remove unverifiable capacity numbers (5M+/yr, 100+ machines, 200-person team)
// and soften "our machines" ownership wording on partner-network basis.
// Each replacement is asserted to occur exactly once; any miss aborts with exit 1.
import fs from "fs";

const root = "E:/accio work/帽子独立站/bdjunyang.com/website";

const edits = {
  "app/[locale]/bulk-custom-hats-manufacturer/layout.tsx": [
    [`"Producción de gorras personalizadas en gran volumen: 5M+ unidades al año, más de 100 máquinas de bordado, descuentos desde 500uds hasta 10.000+. FOB o CIF."`, `"Producción de gorras personalizadas en gran volumen con líneas asociadas dedicadas y descuentos desde 500 uds hasta 10.000+. FOB o CIF."`],
    [`"Large-volume custom hat production: 5M+ caps per year, 100+ embroidery machines, volume pricing from 500 to 10,000+ pcs. FOB or CIF terms."`, `"Large-volume custom hat production with dedicated partner lines and volume pricing from 500 to 10,000+ pcs. FOB or CIF terms."`],
    [`"Capacidad industrial de 5M+ gorras al año con control de calidad interno y escalones de precio por volumen."`, `"Capacidad industrial con control de calidad pre-envío y escalones de precio por volumen."`],
    [`"Industrial capacity of 5M+ caps per year with in-house quality control and tiered volume pricing."`, `"Industrial-scale capacity with pre-shipment quality control and tiered volume pricing."`],
  ],
  "app/[locale]/bulk-custom-hats-manufacturer/page.tsx": [
    [`"Producción de gorras a escala industrial: 5 millones de unidades al año, más de 100 máquinas de bordado y líneas dedicadas, con precios escalonados que premian el volumen."`, `"Producción de gorras a escala industrial con líneas asociadas dedicadas y precios escalonados que premian el volumen."`],
    [`pills: ["5M+ gorras al año", "Más de 100 máquinas", "QC interno", "FOB o CIF"],`, `pills: ["MOQ 200+ uds", "Precios por Volumen", "Control de Calidad Pre-envío", "FOB o CIF"],`],
    [`"Large-volume custom hat production: 5M+ caps per year, 100+ embroidery machines, volume tier pricing from 500 to 10,000+ pcs, in-house QC, FOB or CIF."`, `"Large-volume custom hat production with dedicated partner lines, volume tier pricing from 500 to 10,000+ pcs, pre-shipment QC, FOB or CIF."`],
  ],
  "app/[locale]/compare/5-panel-vs-6-panel-caps/page.tsx": [
    [`note: "Baoding Junyang has manufactured custom caps since 2014, running 100+ precision Barudan embroidery machines and a 200-person production team.",`, `note: "Baoding Junyang has been sourcing custom caps since 2014 through a dedicated partner network in Hebei, with precision Barudan embroidery lines and in-house quality control.",`],
    [`note: "Baoding Junyang fabrica gorras personalizadas desde 2014, con más de 100 máquinas de bordado japonesas Barudan y un equipo de producción de 200 personas.",`, `note: "Baoding Junyang abastece gorras personalizadas desde 2014 a través de su red de fabricación asociada en Hebei, con líneas de bordado japonesas Barudan y control de calidad interno.",`],
  ],
  "app/[locale]/top-hat-manufacturers-in-china/page.tsx": [
    [`{ label: "100+ Barudan Heads",`, `{ label: "Multi-Head Barudan Lines",`],
    [`{ label: "Más de 100 Cabezales Barudan",`, `{ label: "Líneas Barudan Multicabezal",`],
  ],
  "app/[locale]/compare/flat-embroidery-vs-3d-puff/page.tsx": [
    [`Both decorations run on our Barudan multi-head machines,`, `Both decorations run on Barudan multi-head machines,`],
    [`Ambas decoraciones se bordan en nuestras máquinas automáticas Barudan,`, `Ambas decoraciones se bordan en máquinas automáticas Barudan multicabezal,`],
  ],
  "app/[locale]/compare/merino-wool-vs-acrylic-beanies/page.tsx": [
    [`can be knitted on our computerized Shima Seiki`, `can be knitted on computerized Shima Seiki`],
    [`Tejemos ambos hilados en nuestras máquinas computarizadas Shima Seiki`, `Se tejen ambos hilados en máquinas computarizadas Shima Seiki`],
  ],
  "app/[locale]/custom-hat-tech-pack-template/page.tsx": [
    [`amortizes setup time on our automated precision embroidery machines.`, `amortizes setup time on automated precision embroidery lines.`],
    [`sigue las tolerancias de nuestras máquinas de bordado computarizado de precisión:`, `sigue las tolerancias de las líneas de bordado computarizado de precisión:`],
    [`amortiza los tiempos de preparación de nuestras máquinas de bordado de precisión.`, `amortiza los tiempos de preparación de las líneas de bordado de precisión.`],
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
