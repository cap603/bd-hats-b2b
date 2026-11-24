// IndexNow submitter for bdjunyang.com
// Notifies Bing / Yandex / Seznam etc. that URLs changed or are new.
// Run: node scripts/indexnow-submit.mjs
//
// IndexNow is the fastest public route into the Bing index — and ChatGPT's web
// retrieval depends heavily on Bing, so this is the AI-search channel without
// needing a verified Bing Webmaster account.

const HOST = "bdjunyang.com";
const KEY = "b855288ac13d47c99a41e37e1f6887ff";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;

// /sitemap.xml is a sitemap *index* pointing at per-locale shards
// (sitemap-en.xml, sitemap-es.xml). Resolve it: fetch the index, then each
// child shard, and merge every <loc> into a single URL list.
async function fetchXml(url) {
  const r = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!r.ok) {
    console.error(`Failed to fetch ${url}: ${r.status} ${r.statusText}`);
    process.exit(1);
  }
  return r.text();
}
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const indexXml = await fetchXml(SITEMAP);
const urls = [];
if (/<sitemap>/.test(indexXml)) {
  for (const child of locs(indexXml)) {
    console.log(`Fetching shard ${child}`);
    urls.push(...locs(await fetchXml(child)));
  }
} else {
  urls.push(...locs(indexXml));
}
// De-duplicate while preserving order.
const unique = [...new Set(urls)];

if (unique.length === 0) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}
console.log(`Found ${unique.length} URLs across sitemap shards.`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: unique,
};

const submit = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`IndexNow response: ${submit.status} ${submit.statusText}`);
console.log(
  submit.status === 200 || submit.status === 202
    ? "✅ Accepted — URLs submitted to IndexNow (Bing/Yandex)."
    : "⚠️ Not accepted — check status code above."
);

if (submit.status >= 400) {
  const body = await submit.text().catch(() => "");
  if (body) console.log("Response body:", body.slice(0, 500));
}
