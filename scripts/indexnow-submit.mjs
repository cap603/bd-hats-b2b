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

const res = await fetch(SITEMAP);
if (!res.ok) {
  console.error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const xml = await res.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urls.length === 0) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}
console.log(`Found ${urls.length} URLs in sitemap.`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
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
