// One-off sanitization: remove certification displays (OEKO-TEX/REACH/GRS/ISO/BSCI/SGS/BV)
// and soften absolute "piece-by-piece / 100%" QC claims across messages/*.json.
// Run: node scripts/sanitize-certs-qc-20261126.mjs
import fs from "node:fs";
import path from "node:path";

const MSG_DIR = path.join(process.cwd(), "messages");

const V = {
  en: {
    "home.stats.sgs": "Pre-Shipment Quality Check",
    "home.compliance.title": "Factory-Direct Sourcing",
    "home.compliance.certified": "MOQ 200+ Pcs",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Custom Designs",
    "home.compliance.c": "Private Label",
    "home.factory.qcStandardDesc": "Multi-stage quality checks before shipment.",
    "home.trust.sgsSupplier": "Vetted Partner Factory Network",
    "home.trust.certifications": "Third-Party Testing & Inspection Available on Request",
    "home.trust.qcStandard": "Pre-Shipment Quality Inspection",
    "home.qc.qcPassed": "Pre-Shipment QC",
    "home.faq.a2": "We are a headwear sourcing and quality partner — openly a trading company. We match your spec to vetted partner factories, manage sampling and production, and run pre-shipment quality inspections. One contract, one point of contact, one QC standard.",
    "home.inquiry.commitments.1.title": "Pre-Shipment QC",
    "home.inquiry.commitments.1.desc": "Our own inspection team checks caps before shipment: embroidery alignment, stitching, measurements and finish. Third-party inspection can be arranged per order.",
    "home.sectors.1.desc": "Heavy-duty structured 6-panel twill caps, high colorfastness, reflective piping, and pre-shipment QC inspection.",
    "home.milestone.desc": "Full production transparency: ① Fabric roll cutting & color check ② Live embroidery inspection video ③ 4-needle sweatband assembly ④ Final quality inspection & export carton packing.",
    "product.trustBar": "Trusted B2B Sourcing Partner",
    "meta.aboutDesc": "Baoding Junyang Import and Export Trade Co., Ltd. — 12 years of hat sourcing and export experience, vetted partner factories, and pre-shipment QC since 2014.",
    "popup.note": "Direct sourcing · Multi-stage QC · Pre-shipment inspection",
  },
  es: {
    "home.stats.sgs": "Control de Calidad Pre-envío",
    "home.compliance.title": "Abastecimiento Directo de Fábrica",
    "home.compliance.certified": "MOQ 200+ uds",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Diseños a Medida",
    "home.compliance.c": "Marca Privada",
    "home.factory.qcStandardDesc": "Controles de calidad por etapas antes del envío.",
    "home.trust.sgsSupplier": "Red de Fábricas Asociadas Seleccionadas",
    "home.trust.certifications": "Pruebas e Inspección de Terceros bajo Solicitud",
    "home.trust.qcStandard": "Inspección de Calidad antes del Envío",
    "home.qc.qcPassed": "QC Pre-envío",
    "home.faq.a2": "Somos un socio de sourcing y control de calidad, abiertamente una empresa comercial. Emparejamos tu proyecto con fábricas asociadas seleccionadas, gestionamos muestras y producción, y realizamos inspecciones de calidad antes del envío. Un solo contrato, un solo interlocutor y un estándar de calidad.",
    "home.inquiry.commitments.1.title": "Control de Calidad Pre-envío",
    "home.inquiry.commitments.1.desc": "Nuestro propio equipo de inspección verifica las gorras antes del envío: bordado, costura, medidas y acabado. Inspección de terceros disponible por pedido.",
    "home.sectors.1.desc": "Gorras 6 paneles de sarga pesada y estructuradas, alta solidez del color, ribetes reflectantes e inspección de calidad antes del envío.",
    "home.milestone.desc": "Seguimiento transparente en cada fase: ① Muestra de tela y corte ② Video en vivo del bordado ③ Confección de badana ④ Inspección final de calidad y empaque.",
    "product.trustBar": "Socio de Abastecimiento B2B de Confianza",
    "meta.homeDesc": "Gorras personalizadas de calidad media a alta con control de calidad desde 2014. Bordado personalizado, MOQ 200uds, muestras en 7 días, cotización en 2h. Baoding, China.",
    "meta.aboutDesc": "Baoding Junyang Import and Export Trade Co., Ltd. — 12 años conectando marcas globales con fabricantes de headwear y control de calidad pre-envío desde 2014.",
    "popup.note": "Abastecimiento directo · Control de calidad por etapas · Inspección pre-envío",
    "home.banners.0.sub": "Gestionado por Baoding Junyang con fábricas asociadas seleccionadas en China. Confección de calidad media a alta. MOQ 200 uds · Muestra en 7 días · Producción 15–20 días · Cotización escrita en 2h.",
  },
  de: {
    "home.stats.sgs": "Qualitätskontrolle vor dem Versand",
    "home.compliance.title": "Sourcing Direkt ab Werk",
    "home.compliance.certified": "MOQ 200+ Stk.",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Individuelle Designs",
    "home.compliance.c": "Private Label",
    "home.trust.sgsSupplier": "Ausgewähltes Partnerfabrik-Netzwerk",
    "home.trust.certifications": "Dritte-Partei-Prüfungen & Inspektion auf Anfrage",
    "home.trust.qcStandard": "Qualitätsprüfung vor dem Versand",
    "home.qc.qcPassed": "QC vor dem Versand",
    "home.faq.a2": "Wir sind ein spezialisierter Sourcing- und Qualitätspartner für Kopfbedeckungen — offen gesagt ein Handelsunternehmen. Wir stimmen Ihr Projekt mit ausgewählten Partnerfabriken ab, steuern Muster und Fertigung und führen Qualitätsprüfungen vor dem Versand durch. Ein Vertrag, ein Ansprechpartner, ein Qualitätsstandard.",
    "home.inquiry.commitments.1.title": "Qualitätskontrolle vor dem Versand",
    "home.inquiry.commitments.1.desc": "Unser eigenes Prüfteam kontrolliert Kappen vor dem Versand: Stickpräzision, Nähte, Maße und Finish. Drittanbieter-Inspektionen möglich.",
    "home.sectors.1.desc": "Heavy-duty structured 6-panel twill caps, high colorfastness, reflective piping, and pre-shipment QC inspection.",
    "home.milestone.desc": "Full production transparency: ① Fabric roll cutting & color check ② Live embroidery inspection video ③ 4-needle sweatband assembly ④ Final quality inspection & export carton packing.",
    "product.trustBar": "Verlässlicher B2B-Sourcing-Partner",
    "meta.homeDesc": "Hochwertige individuelle Kappen direkt ab Fabrik. OEM/ODM seit 2014. Individuelle Stickerei, MOQ 200 Stk., 7-Tage-Muster. Ihr Sourcing-Partner in Baoding, China.",
    "meta.aboutDesc": "Von der 15-Personen-Werkstatt zum Sourcing-Partner für über 300 Marken weltweit. Erfahren Sie mehr über Baoding Junyang seit 2014.",
    "popup.note": "Direkt ab Werk · Mehrstufige Qualitätskontrolle · Prüfung vor Versand",
    "home.banners.0.sub": "Koordiniert von Baoding Junyang über ausgewählte Partnerfabriken in China. Fokus auf mittlere bis gehobene Qualität. MOQ 200 Stk. · Muster in 7 Tagen · Serie in 15–20 Tagen · Angebot in 2 Std.",
  },
  fr: {
    "home.stats.sgs": "Contrôle Qualité avant Expédition",
    "home.compliance.title": "Sourcing Direct Usine",
    "home.compliance.certified": "MOQ 200+ pcs",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Designs Sur-Mesure",
    "home.compliance.c": "Marque Privée",
    "home.trust.sgsSupplier": "Réseau d'Usines Partenaires Sélectionnées",
    "home.trust.certifications": "Tests et Inspections de Tierces Parties sur Demande",
    "home.trust.qcStandard": "Inspection de Qualité avant Expédition",
    "home.qc.qcPassed": "CQ avant expédition",
    "home.faq.a2": "Nous sommes un partenaire de sourcing et de contrôle qualité — en toute transparence, une société commerciale. Nous sélectionnons des usines partenaires selon vos spécifications, gérons l'échantillonnage et la production, et réalisons des inspections qualité avant expédition. Un seul contrat, un seul interlocuteur, un niveau de qualité constant.",
    "home.inquiry.commitments.1.title": "Contrôle Qualité avant Expédition",
    "home.inquiry.commitments.1.desc": "Notre propre équipe d'inspection contrôle les casquettes avant expédition : broderie, coutures, mesures et finitions. Inspection tierce partie disponible.",
    "home.sectors.1.desc": "Heavy-duty structured 6-panel twill caps, high colorfastness, reflective piping, and pre-shipment QC inspection.",
    "home.milestone.desc": "Full production transparency: ① Fabric roll cutting & color check ② Live embroidery inspection video ③ 4-needle sweatband assembly ④ Final quality inspection & export carton packing.",
    "product.trustBar": "Partenaire de Sourcing B2B de Confiance",
    "meta.homeDesc": "Casquettes personnalisées de qualité supérieure direct usine. OEM/ODM depuis 2014. Broderie sur-mesure, MOQ 200 pcs, échantillons en 7 jours. Votre partenaire sourcing à Baoding, Chine.",
    "meta.aboutDesc": "D'un atelier de 15 artisans à un partenaire de sourcing servant plus de 300 marques mondiales. Découvrez l'histoire de Baoding Junyang depuis 2014.",
    "popup.note": "Sourcing direct · Contrôle qualité multi-étapes · Inspection avant expédition",
    "home.banners.0.sub": "Coordonné par Baoding Junyang via des usines partenaires sélectionnées en Chine. Confections de moyenne à haute qualité. MOQ 200 pcs · Échantillon en 7 jours · Production 15–20 jours · Devis en 2h.",
  },
  it: {
    "home.stats.sgs": "Controllo di Qualità Pre-spedizione",
    "home.compliance.title": "Sourcing Diretto dalla Fabbrica",
    "home.compliance.certified": "MOQ 200+ pz",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Design su Misura",
    "home.compliance.c": "Private Label",
    "home.trust.sgsSupplier": "Rete di Fabbriche Partner Selezionate",
    "home.trust.certifications": "Test e Ispezioni di Terze Parti su Richiesta",
    "home.trust.qcStandard": "Ispezione di Qualità pre-Spedizione",
    "home.qc.qcPassed": "QC pre-spedizione",
    "home.faq.a2": "Siamo un partner di sourcing e controllo qualità — apertamente una società commerciale. Selezioniamo fabbriche partner in base alle vostre specifiche, gestiamo campionatura e produzione ed effettuiamo ispezioni di qualità prima della spedizione. Un solo contratto, un unico interlocutore, uno standard di qualità.",
    "home.inquiry.commitments.1.title": "Controllo di Qualità Pre-spedizione",
    "home.inquiry.commitments.1.desc": "Il nostro team di ispezione verifica i cappellini prima della spedizione: ricami, cuciture, misure e finiture. Ispezioni terze parti su richiesta.",
    "home.sectors.1.desc": "Cappellini 6 pannelli in sergé pesante strutturati, alta solidità cromatica, piping riflettente e ispezione di qualità prima della spedizione.",
    "home.milestone.desc": "Monitoraggio trasparente in ogni fase: ① Campionatura e taglio del tessuto ② Video di ispezione ricamo in diretta ③ Montaggio della fascia ④ Ispezione finale di qualità e imballaggio.",
    "product.trustBar": "Partner di Sourcing B2B Affidabile",
    "meta.homeDesc": "Cappellini personalizzati di qualità medio-alta con controllo di qualità dal 2014. Ricamo su misura, MOQ 200 pz, campioni in 7 giorni, preventivo in 2h.",
    "meta.aboutDesc": "Baoding Junyang Import and Export Trade Co., Ltd. — 12 anni di esperienza in sourcing ed export di cappellini, fabbriche partner selezionate e controllo di qualità pre-spedizione dal 2014.",
    "popup.note": "Sourcing diretto · Controllo qualità multi-fase · Ispezione pre-spedizione",
    "home.banners.0.sub": "Coordinato da Baoding Junyang tramite fabbriche partner selezionate in Cina. Confezioni di qualità medio-alta. MOQ 200 pz · Campione in 7 giorni · Produzione 15–20 giorni · Preventivo in 2h.",
  },
  ja: {
    "home.stats.sgs": "出荷前品質チェック",
    "home.compliance.title": "ファクトリーダイレクト調達",
    "home.compliance.certified": "MOQ 200個～",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "カスタムデザイン",
    "home.compliance.c": "プライベートラベル",
    "home.trust.certifications": "第三者機関の検査・検品を手配可能",
    "home.trust.qcStandard": "出荷前品質検査",
    "home.qc.qcPassed": "出荷前QC",
    "home.faq.a2": "当社は帽子の調達および品質管理パートナーであり、透明性のある貿易会社です。お客様の仕様に合わせて厳選された提携工場を選定し、サンプル製作・量産管理を行い、出荷前に品質検査を実施します。単一窓口・単一契約・統一された品質基準で安心の取引をお届けします。",
    "home.inquiry.commitments.1.title": "出荷前品質検査",
    "home.inquiry.commitments.1.desc": "自社検品チームが刺繍のズレ、縫製、寸法、仕上がりを出荷前にチェックします。第三者機関による検品も手配可能です。",
    "home.sectors.1.desc": "耐久性の高い構造6パネル・ツイルキャップ、高い色牢度、反射パイピング、出荷前のQC検査。",
    "home.milestone.desc": "全工程を透明に共有：① 生地ロール裁断と色味確認 ② 刺繍検品のライブ動画 ③ 4本針スウェットバンド組立 ④ 最終品質検査と輸出梱包。",
    "product.trustBar": "信頼のB2B調達パートナー",
    "meta.homeDesc": "高品質な特注帽子を中国保定から直接調達。2014年創業のOEM/ODM調達パートナー。オリジナル刺繍、MOQ 200個、サンプル作製7日間、出荷前品質検査。",
    "meta.aboutDesc": "保定駿陽進出口貿易有限公司（Baoding Junyang）— 2014年創業、厳選された提携工場ネットワークと出荷前品質検査で世界300以上のブランドを支える調達パートナー。",
    "popup.note": "直接調達 · 多段階品質管理 · 出荷前検査",
    "home.banners.0.sub": "厳選された提携工場ネットワークと精密多頭刺繍機。専任QCチームによる出荷前検査。中国保定の帽子B2B直接調達。",
  },
  pt: {
    "home.stats.sgs": "Controle de Qualidade Pré-envio",
    "home.compliance.title": "Sourcing Direto da Fábrica",
    "home.compliance.certified": "MOQ 200+ pçs",
    "home.compliance.a": "OEM / ODM",
    "home.compliance.b": "Designs Personalizados",
    "home.compliance.c": "Marca Própria",
    "home.trust.sgsSupplier": "Rede de Fábricas Parceiras Selecionadas",
    "home.trust.certifications": "Testes e Inspeção de Terceiros sob Pedido",
    "home.trust.qcStandard": "Inspeção de Qualidade pré-Envio",
    "home.qc.qcPassed": "QC pré-envio",
    "home.faq.a2": "Somos um parceiro de sourcing e controle de qualidade — abertamente uma trading. Selecionamos fábricas parceiras conforme seu projeto, gerenciamos amostras e produção e realizamos inspeções de qualidade antes do envio. Um contrato, um ponto de contato, um padrão de qualidade.",
    "home.inquiry.commitments.1.title": "Controle de Qualidade Pré-envio",
    "home.inquiry.commitments.1.desc": "Nossa própria equipe de controle de qualidade verifica os bonés antes do envio: bordado, costura, medidas e acabamento. Inspeção de terceiros disponível.",
    "home.sectors.1.desc": "Bonés 6 painéis em sarja pesada e estruturados, alta solidez de cor, galões refletivos e inspeção de qualidade antes do envio.",
    "home.milestone.desc": "Transparência total em cada fase: ① Corte do tecido e verificação de cor ② Vídeo ao vivo da inspeção de bordado ③ Montagem da faixa ④ Inspeção final de qualidade e embalagem.",
    "product.trustBar": "Parceiro de Sourcing B2B de Confiança",
    "meta.homeDesc": "Bonés personalizados de média a alta qualidade com controle de qualidade desde 2014. Bordado sob medida, MOQ 200 pçs, amostras em 7 dias, orçamento em 2h.",
    "meta.aboutDesc": "Baoding Junyang Import and Export Trade Co., Ltd. — 12 anos de experiência em sourcing e exportação de bonés, fábricas parceiras selecionadas e controle de qualidade pré-envio desde 2014.",
    "popup.note": "Sourcing direto · Controle de qualidade em etapas · Inspeção pré-envio",
    "home.banners.0.sub": "Gerenciado pela Baoding Junyang junto a fábricas parceiras selecionadas na China. Construções de média a alta qualidade. MOQ 200 pcs · Amostra em 7 dias · Produção 15–20 dias · Orçamento em 2h.",
  },
};

const ADD_OK = new Set(["home.compliance.a", "home.compliance.b", "home.compliance.c"]);

function setPath(obj, dotted, value) {
  const parts = dotted.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] === undefined || cur[p] === null) return false;
    cur = cur[p];
  }
  const last = parts[parts.length - 1];
  if (cur[last] === undefined && !ADD_OK.has(dotted)) return false;
  cur[last] = value;
  return true;
}

for (const file of fs.readdirSync(MSG_DIR).filter((f) => f.endsWith(".json"))) {
  const lang = file.replace(".json", "");
  const values = V[lang];
  if (!values) {
    console.log(`skip ${file} (no values defined)`);
    continue;
  }
  const fp = path.join(MSG_DIR, file);
  const raw = fs.readFileSync(fp, "utf8");
  const json = JSON.parse(raw);
  const changes = [];
  for (const [dotted, value] of Object.entries(values)) {
    const before = dotted.split(".").reduce((o, p) => o?.[p], json);
    if (before === value) continue;
    if (setPath(json, dotted, value)) changes.push([dotted, before, value]);
    else console.log(`MISS ${file} ${dotted}`);
  }
  // detect indent (default 2)
  const m = raw.match(/^\s{2,}"[^"]+"/m);
  const indent = m ? m[0].length - m[0].indexOf('"') : 2;
  fs.writeFileSync(fp, JSON.stringify(json, null, indent) + "\n", "utf8");
  console.log(`== ${file}: ${changes.length} changes`);
  for (const [k] of changes) console.log(`   ${k}`);
}
