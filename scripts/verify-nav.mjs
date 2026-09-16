// Verify both nav dropdowns (Products + Compare) across ALL page types.
const BASE = "https://bdjunyang.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PAGES = [
  ["homepage", "/en"],
  ["about", "/en/about"],
  ["guide", "/en/guide"],
  ["materials", "/en/materials"],
  ["pricing", "/en/pricing"],
  ["landing legacy (oem)", "/en/oem-hat-manufacturer"],
  ["landing legacy (snapbacks)", "/en/wholesale-snapbacks"],
  ["landing legacy (trucker)", "/en/custom-trucker-hats"],
  ["landing new", "/en/corporate-custom-hats-supplier"],
  ["comparison", "/en/compare/flat-embroidery-vs-3d-puff"],
  ["es landing", "/es/custom-dad-hats-manufacturer"],
];

const CATS = ["Baseball Cap", "Trucker Hat", "Snapback Cap", "Beanie", "Bucket Hat"];
const CMP_LINKS = [
  "/compare/5-panel-vs-6-panel-caps",
  "/compare/flat-embroidery-vs-3d-puff",
  "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
  "/compare/snapback-vs-strapback-vs-buckle",
  "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
];

console.log("Waiting 120s for deployment...");
await sleep(120000);

let pass = 0;
for (const [name, path] of PAGES) {
  const html = await fetch(`${BASE}${path}`).then((r) => r.text());
  const hasProductsPanel = html.includes("Cap categories");
  const catsFound = CATS.filter((c) => html.includes(c)).length;
  const hasComparePanel = html.includes("Headwear comparisons");
  const cmpFound = CMP_LINKS.filter((l) => html.includes(l)).length;

  const ok = hasProductsPanel && catsFound === 5 && hasComparePanel && cmpFound === 5;
  if (ok) pass++;
  console.log(
    `${ok ? "OK  " : "FAIL"} ${name.padEnd(28)} products=${hasProductsPanel ? "y" : "n"}/${catsFound}of5  compare=${hasComparePanel ? "y" : "n"}/${cmpFound}of5`
  );
}

// Homepage: Products must be the FIRST nav item
const home = await fetch(`${BASE}/en`).then((r) => r.text());
const navStart = home.indexOf("hidden md:flex items-center gap-8");
const nav = home.slice(navStart, navStart + 1200);
const productsPos = nav.indexOf("Cap categories");
const advantagesPos = nav.indexOf("Advantages");
console.log(
  `\nhomepage nav order: Products@${productsPos} vs Advantages@${advantagesPos} → ${
    productsPos > -1 && productsPos < advantagesPos ? "Products IS FIRST ✅" : "order wrong ❌"
  }`
);
console.log(`pages fully OK: ${pass}/${PAGES.length}`);
