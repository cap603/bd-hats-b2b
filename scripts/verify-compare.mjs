// One-off verification for the comparison-page deployment.
const BASE = "https://bdjunyang.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SLUGS = [
  "5-panel-vs-6-panel-caps",
  "flat-embroidery-vs-3d-puff",
  "cotton-twill-vs-brushed-cotton-vs-canvas",
  "snapback-vs-strapback-vs-buckle",
  "china-vs-vietnam-vs-bangladesh-hat-sourcing",
];

console.log("Waiting 120s for Vercel deployment...");
await sleep(120000);

let ok = 0;
let fail = 0;
for (const slug of SLUGS) {
  for (const lang of ["en", "es"]) {
    const url = `${BASE}/${lang}/compare/${slug}`;
    try {
      const res = await fetch(url);
      const status = res.status;
      const html = await res.text();
      const hasFaq = html.includes("FAQPage");
      const hasArticle = html.includes('"@type":"Article"');
      const hasTable = html.includes("<table");
      const pass = status === 200 && hasFaq && hasArticle && hasTable;
      if (pass) ok++;
      else fail++;
      console.log(
        `${pass ? "PASS" : "FAIL"} ${status} ${url}  faq=${hasFaq} article=${hasArticle} table=${hasTable}`
      );
    } catch (e) {
      fail++;
      console.log(`ERROR ${url} — ${e.message}`);
    }
  }
}

const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
const locCount = (sm.match(/<loc>/g) || []).length;
const compareCount = (sm.match(/\/compare\//g) || []).length;

console.log(`\n--- summary ---`);
console.log(`comparison pages: ${ok} pass / ${fail} fail (of 10)`);
console.log(`sitemap URLs: ${locCount}  (compare entries: ${compareCount})`);

// Homepage footer should link to the comparison cluster
const home = await fetch(`${BASE}/en`).then((r) => r.text());
const footerCompareLinks = (home.match(/\/en\/compare\//g) || []).length;
console.log(`homepage compare links: ${footerCompareLinks}`);

const landing = await fetch(`${BASE}/en/oem-hat-manufacturer`).then((r) => r.text());
const landingCompareLinks = (landing.match(/\/en\/compare\//g) || []).length;
console.log(`landing page compare links: ${landingCompareLinks}`);
