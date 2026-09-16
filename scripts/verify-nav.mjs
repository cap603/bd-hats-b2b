// Verify the Compare dropdown is present (and crawlable) across ALL page types.
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
  ["product page (expect: no dropdown)", "/en/product/custom-3d-embroidered-5-panel-gorras"],
];

console.log("Waiting 120s for deployment...");
await sleep(120000);

let withMenu = 0;
let total = 0;

for (const [name, path] of PAGES) {
  const html = await fetch(`${BASE}${path}`).then((r) => r.text());
  const hasPanel = html.includes("Headwear comparisons");
  const unique = new Set((html.match(/\/compare\/[a-z0-9-]+/g) || []));
  const expectMenu = !name.includes("product page");
  if (expectMenu) total++;
  const ok = expectMenu ? hasPanel && unique.size >= 5 : true;
  if (expectMenu && ok) withMenu++;
  console.log(
    `${ok ? "OK  " : "FAIL"} ${name.padEnd(34)} dropdown=${hasPanel ? "y" : "n"} uniqueCompareLinks=${unique.size}`
  );
}

console.log(`\npages with Compare dropdown: ${withMenu}/${total}`);
