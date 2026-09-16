// Verify the Compare dropdown is present (and crawlable) across page types.
const BASE = "https://bdjunyang.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PAGES = [
  ["homepage", "/en"],
  ["landing (oem)", "/en/oem-hat-manufacturer"],
  ["landing (new)", "/en/corporate-custom-hats-supplier"],
  ["comparison", "/en/compare/5-panel-vs-6-panel-caps"],
  ["es homepage", "/es"],
];

console.log("Waiting 120s for deployment...");
await sleep(120000);

for (const [name, path] of PAGES) {
  const html = await fetch(`${BASE}${path}`).then((r) => r.text());
  const hasPanel = html.includes("Headwear comparisons");
  const links = (html.match(/\/compare\//g) || []).length;
  const unique = new Set((html.match(/\/compare\/[a-z0-9-]+/g) || []));
  const ok = hasPanel && unique.size >= 5;
  console.log(
    `${ok ? "OK  " : "FAIL"} ${name.padEnd(16)} panel=${hasPanel} uniqueCompareLinks=${unique.size} (total refs ${links})`
  );
}
