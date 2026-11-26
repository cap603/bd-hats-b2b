// 2026-11-26 Round 3 — 用户 5 项修改：
// 1) 主要市场改全球  2) factory CTA 改立即联系(WhatsApp)  3) 去掉 Pre-Shipment Quality Inspection 徽章
// 4) 产品区标题去 Baseball 限定  5) 删除 JY-120 产品(保留 20 款)
// 每条替换必须在目标文件中恰好出现 1 次，否则报错退出。
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve("E:/accio work/帽子独立站/bdjunyang.com/website");
let failures = 0;

function replaceOnce(file, pairs, label) {
  const fp = path.join(ROOT, file);
  let src = readFileSync(fp, "utf8");
  for (const [oldS, newS] of pairs) {
    const n = src.split(oldS).length - 1;
    if (n !== 1) {
      console.error(`FAIL [${label}] ${file}: expected 1, found ${n} -> ${oldS.slice(0, 90)}`);
      failures++;
      continue;
    }
    src = src.replace(oldS, newS);
  }
  writeFileSync(fp, src);
  console.log(`OK [${label}] ${file} (${pairs.length} replacements)`);
}

/* ---------- 1+2+4) 7 语种 JSON：市场/CTA/标题 ---------- */
replaceOnce("messages/en.json", [
  ['"markets": "Main Markets",', '"markets": "Global Markets",'],
  ['"na": "NORTH AMERICA (70%)",', '"na": "NORTH AMERICA · EUROPE",'],
  ['"eu": "WESTERN EUROPE (25%)",', '"eu": "ASIA · MIDDLE EAST · OCEANIA",'],
  ['"market": "70% North America"', '"market": "Worldwide Shipping"'],
  ["headwear programs in North America and Europe.\",", "headwear programs worldwide.\","],
  ['"videoCta": "Request Production Video Updates",', '"videoCta": "Contact Us Now on WhatsApp",'],
  ['"heading": "Our Baseball Cap Series",', '"heading": "Our Premium Hat Collection",'],
  ["pre-developed high-converting base caps or send", "pre-developed best-selling hat styles or send"],
  ['"products": "Baseball Caps",', '"products": "Headwear",'],
], "json-en");

replaceOnce("messages/es.json", [
  ['"markets": "Mercados Principales",', '"markets": "Mercados Globales",'],
  ['"na": "NORTEAMÉRICA (70%)",', '"na": "NORTAMÉRICA · EUROPA",'],
  ['"eu": "EUROPA OCCIDENTAL (25%)",', '"eu": "ASIA · ORIENTE MEDIO · OCÉANO",'],
  ['"market": "70% Norteamérica"', '"market": "Envío a Todo el Mundo"'],
  ["corporativas y lifestyle en Norteamérica y Europa.\",", "corporativas y lifestyle en todo el mundo.\","],
  ['"videoCta": "Solicitar Actualizaciones de Video",', '"videoCta": "Contáctanos Ahora por WhatsApp",'],
  ['"heading": "Nuestra Serie de Gorras de Béisbol",', '"heading": "Nuestra Colección Premium de Gorras",'],
  ['"products": "Gorras de Béisbol",', '"products": "Gorras y Gorros",'],
], "json-es");

replaceOnce("messages/de.json", [
  ['"markets": "Hauptmärkte",', '"markets": "Globale Märkte",'],
  ['"na": "NORDAMERIKA (70 %)",', '"na": "NORDAMERIKA · EUROPA",'],
  ['"eu": "WESTEUROPA (25 %)",', '"eu": "ASIEN · NAHER OSTEN · OZEANIEN",'],
  ['"market": "70 % Nordamerika, 25 % Westeuropa"', '"market": "Weltweiter Versand"'],
  ["Kappenprogrammen in Nordamerika und Europa.\",", "Kappenprogrammen weltweit.\","],
  ['"videoCta": "Video-Updates anfordern",', '"videoCta": "Jetzt per WhatsApp kontaktieren",'],
  ['"products": "Baseballkappen",', '"products": "Kopfbedeckungen",'],
], "json-de");

replaceOnce("messages/fr.json", [
  ['"markets": "Marchés Principaux",', '"markets": "Marchés Mondiaux",'],
  ['"na": "AMÉRIQUE DU NORD (70 %)",', '"na": "AMÉRIQUE DU NORD · EUROPE",'],
  ['"eu": "EUROPE DE L\'OUEST (25 %)",', '"eu": "ASIE · MOYEN-ORIENT · OCÉANIE",'],
  ["70 % Amérique du Nord, 25 % Europe de l'Ouest", "Livraison Mondiale"],
  ["lifestyle en Amérique du Nord et en Europe.\",", "lifestyle à travers le monde.\","],
  ['"videoCta": "Demander un Suivi Vidéo",', '"videoCta": "Contactez-nous sur WhatsApp",'],
  ['"products": "Casquettes de Baseball",', '"products": "Chapeaux & Casquettes",'],
], "json-fr");

replaceOnce("messages/it.json", [
  ['"markets": "Mercati Principali",', '"markets": "Mercati Globali",'],
  ['"na": "NORD AMERICA (70%)",', '"na": "NORD AMERICA · EUROPA",'],
  ['"eu": "EUROPA OCCIDENTALE (25%)",', '"eu": "ASIA · MEDIO ORIENTE · OCEANIA",'],
  ['"market": "70% Nord America, 25% Europa Occidentale"', '"market": "Spedizione in Tutto il Mondo"'],
  ["lifestyle in Nord America ed Europa.\",", "lifestyle in tutto il mondo.\","],
  ['"videoCta": "Richiedi Aggiornamenti Video",', '"videoCta": "Contattaci Ora su WhatsApp",'],
  ['"products": "Cappellini da Baseball",', '"products": "Cappelli",'],
], "json-it");

replaceOnce("messages/ja.json", [
  ['"markets": "主な輸出市場",', '"markets": "グローバル輸出市場",'],
  ['"na": "北米市場（70%）",', '"na": "北米 · 欧州",'],
  ['"eu": "西欧市場（25%）",', '"eu": "アジア · 中東 · オセアニア",'],
  ['"market": "北米70%・西欧25%への輸出実績"', '"market": "全世界への輸出実績"'],
  ["私たちは北米や欧州のストリートウェア", "私たちは世界中のストリートウェア"],
  ['"videoCta": "工程確認動画をリクエスト",', '"videoCta": "WhatsAppですぐ相談",'],
  ['"heading": "ベースボールキャップシリーズ",', '"heading": "プレミアム帽子コレクション",'],
], "json-ja");

replaceOnce("messages/pt.json", [
  ['"markets": "Mercados Principais",', '"markets": "Mercados Globais",'],
  ['"na": "AMÉRICA DO NORTE (70%)",', '"na": "AMÉRICA DO NORTE · EUROPA",'],
  ['"eu": "EUROPA OCIDENTAL (25%)",', '"eu": "ÁSIA · ORIENTE MÉDIO · OCEANIA",'],
  ['"market": "70% América do Norte, 25% Europa Ocidental"', '"market": "Envio para Todo o Mundo"'],
  ["lifestyle na América do Norte e Europa.\",", "lifestyle em todo o mundo.\","],
  ['"videoCta": "Solicitar Acompanhamento em Vídeo",', '"videoCta": "Fale Conosco Agora no WhatsApp",'],
  ['"products": "Bonés de Beisebol",', '"products": "Chapéus & Bonés",'],
], "json-pt");

/* ---------- 2) factory CTA 图标 Play -> MessageCircle ---------- */
replaceOnce("app/[locale]/page.tsx", [
  ['<Play size={14} className="sm:w-4 sm:h-4" /> {t("factory.videoCta")}', '<MessageCircle size={14} className="sm:w-4 sm:h-4" /> {t("factory.videoCta")}'],
], "cta-icon");

/* ---------- 1) FAQ / 文案中的市场占比 ---------- */
replaceOnce("app/components/LandingShell.tsx", [
  ["Around 70% of our output ships to North America and 25% to Western Europe, with the remainder across Oceania and the Middle East.", "We ship worldwide — our buyers span North America, Europe, Asia Pacific, the Middle East and Oceania."],
  ["Alrededor del 70% de nuestra producción viaja a Norteamérica y el 25% a Europa occidental, con el resto hacia Oceanía y Oriente Medio.", "Enviamos a todo el mundo: nuestros compradores están en Norteamérica, Europa, Asia-Pacífico, Oriente Medio y Oceanía."],
], "landing-faq");

replaceOnce("app/[locale]/about/page.tsx", [
  ["North America accounts for 70% of shipments with pre-shipment QC on every order.", "We ship worldwide, with pre-shipment QC on every order."],
  ["North America (about 70% of shipments), Western Europe (about 25%), and Australia/global markets.", "We export worldwide — North America, Europe, Asia Pacific, the Middle East and Oceania."],
  ["Norteamérica representa el 70% de nuestros despachos con control de calidad antes del envío en cada pedido.", "Enviamos a todo el mundo con control de calidad antes del envío en cada pedido."],
  ["Norteamérica (70% de nuestros envíos), Europa occidental (25%) y mercados globales.", "Exportamos a todo el mundo: Norteamérica, Europa, Asia-Pacífico, Oriente Medio y Oceanía."],
], "about");

replaceOnce("app/[locale]/compare/cotton-twill-vs-brushed-cotton-vs-canvas/page.tsx", [
  ["with 70% of shipments sent to North America.", "shipping worldwide across North America, Europe, Asia Pacific and the Middle East."],
  ["el 70% de los envíos se destina a Norteamérica.", "envíos a todo el mundo: Norteamérica, Europa, Asia-Pacífico y Oriente Medio."],
], "compare-cotton");

replaceOnce("app/[locale]/compare/flat-embroidery-vs-3d-puff/page.tsx", [
  ["with 70% of shipments sent to North America.", "shipping worldwide across North America, Europe, Asia Pacific and the Middle East."],
  ["el 70% de los envíos se destina a Norteamérica.", "envíos a todo el mundo: Norteamérica, Europa, Asia-Pacífico y Oriente Medio."],
], "compare-flat");

replaceOnce("app/[locale]/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing/page.tsx", [
  ["70% of our output ships to North America and 25% to Western Europe", "we ship worldwide across North America, Europe, Asia Pacific and the Middle East"],
  ["el 70% de nuestra producción va a Norteamérica y el 25% a Europa Occidental", "enviamos a todo el mundo: Norteamérica, Europa, Asia-Pacífico y Oriente Medio"],
], "compare-china");

replaceOnce("app/lib/resources-data.ts", [
  ["As an experienced exporter with North America accounting for 70% of our shipments,", "As an experienced exporter shipping worldwide,"],
  ["Como exportador habitual que envía el 70% de su producción a Norteamérica,", "Como exportador habitual con envíos a todo el mundo,"],
], "resources");

/* ---------- 3) 删除 trust.qcStandard 徽章（按行） ---------- */
{
  const file = "app/[locale]/page.tsx";
  const fp = path.join(ROOT, file);
  const lines = readFileSync(fp, "utf8").split(/\r?\n/);
  const i = lines.findIndex((l) => l.includes('{t("trust.qcStandard")}'));
  if (i < 0 || !lines[i - 1].includes('<div className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6') || lines[i + 1].trim() !== "</div>") {
    console.error(`FAIL [pill] ${file}: structure not matched at line ${i + 1}`);
    failures++;
  } else {
    lines.splice(i - 1, 3);
    writeFileSync(fp, lines.join("\r\n"));
    console.log(`OK [pill] ${file}: removed trust.qcStandard pill (3 lines)`);
  }
}

/* ---------- 5) 删除 JY-120 产品（按行） ---------- */
{
  const file = "app/lib/products.ts";
  const fp = path.join(ROOT, file);
  const lines = readFileSync(fp, "utf8").split(/\r?\n/);
  const j = lines.findIndex((l) => l.includes('id: "polar-fleece-winter-5-panel-camp-cap"'));
  if (j < 0 || lines[j - 1].trim() !== "{") {
    console.error(`FAIL [product] ${file}: id line or opening brace not found (j=${j + 1})`);
    failures++;
  } else {
    // 找对象结束行：恰好 "  }" (2 空格 + })
    let k = -1;
    for (let m = j; m < lines.length; m++) {
      if (lines[m] === "  }") { k = m; break; }
    }
    if (k < 0 || lines[k + 1].trim() !== "];" || lines[j - 2].trim() !== "},") {
      console.error(`FAIL [product] ${file}: closing brace/separator not matched (k=${k + 1})`);
      failures++;
    } else {
      lines.splice(j - 1, k - (j - 1) + 1);       // 删除对象整块
      lines[j - 2] = lines[j - 2].replace(/,\s*$/, ""); // 去掉前一个对象的尾逗号
      writeFileSync(fp, lines.join("\r\n"));
      console.log(`OK [product] ${file}: removed polar-fleece-winter-5-panel-camp-cap (lines ${j}-${k + 1})`);
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} failure(s). Files partially written — review above.`);
  process.exit(1);
}
console.log("\nAll replacements applied.");
