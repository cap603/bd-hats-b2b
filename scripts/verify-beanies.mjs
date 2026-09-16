// Verify the two new beanie products are live and rendered correctly.
const BASE = "https://bdjunyang.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const IDS = ["custom-embroidery-knitted-beanie", "retro-washed-knitted-beanie"];

console.log("Waiting 120s for deployment...");
await sleep(120000);

for (const id of IDS) {
  for (const lang of ["en", "es"]) {
    const url = `${BASE}/${lang}/product/${id}`;
    const res = await fetch(url);
    const html = await res.text();
    const status = res.status;
    const hasQuote = html.includes("Contact for factory pricing");
    const hasMoq = html.includes("MOQ 200 pcs") || html.includes("MOQ 200 uds");
    const hasSchema = html.includes('"@type":"Product"');
    // A quote-on-request product must NOT advertise a numeric price in schema
    const badSchemaPrice = /"lowPrice"/.test(html);
    console.log(
      `${status === 200 ? "OK  " : "FAIL"} ${url}  quotePrice=${hasQuote} moq=${hasMoq} productSchema=${hasSchema} schemaPriceLeak=${badSchemaPrice}`
    );
  }
}

// Catalog: Beanies filter + both products present
const home = await fetch(`${BASE}/en`).then((r) => r.text());
console.log(`\nhomepage: Beanies filter label = ${home.includes("Beanies")}`);
console.log(`homepage: beanie product cards = ${IDS.filter((i) => home.includes(i)).length}/2`);

// Landing page should surface the new beanies
const beanieLanding = await fetch(`${BASE}/en/custom-beanies-manufacturer`).then((r) => r.text());
console.log(`beanie landing page: shows new products = ${IDS.filter((i) => beanieLanding.includes(i)).length}/2`);

// Sitemap should include the new product URLs
const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
const loc = (sm.match(/<loc>/g) || []).length;
const beanieUrls = IDS.filter((i) => sm.includes(i)).length;
console.log(`sitemap URLs: ${loc}  (beanie product entries: ${beanieUrls} of 2 expected)`);
