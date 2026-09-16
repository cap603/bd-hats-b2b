// Verify the comparison cluster is reachable from every landing page.
const BASE = "https://bdjunyang.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LANDING = [
  "oem-hat-manufacturer",
  "wholesale-snapbacks",
  "custom-trucker-hats",
  "custom-dad-hats-manufacturer",
  "wholesale-blank-caps-supplier",
  "private-label-hat-manufacturer",
  "custom-5-panel-caps-manufacturer",
  "corporate-custom-hats-supplier",
  "bulk-custom-hats-manufacturer",
  "custom-beanies-manufacturer",
  "custom-bucket-hats-manufacturer",
];

console.log("Waiting 120s for deployment...");
await sleep(120000);

let complete = 0;
for (const slug of LANDING) {
  const html = await fetch(`${BASE}/en/${slug}`).then((r) => r.text());
  const n = (html.match(/\/en\/compare\//g) || []).length;
  const ok = n >= 5;
  if (ok) complete++;
  console.log(`${ok ? "OK  " : "MISS"} ${slug} -> ${n} comparison links`);
}

const home = await fetch(`${BASE}/en`).then((r) => r.text());
const homeLinks = (home.match(/\/en\/compare\//g) || []).length;
console.log(`\nhomepage -> ${homeLinks} comparison links`);
console.log(`landing pages fully linked: ${complete}/${LANDING.length}`);

const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
console.log(`sitemap URLs: ${(sm.match(/<loc>/g) || []).length}`);
