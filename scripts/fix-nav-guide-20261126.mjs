// Round 4 nav consolidation (2026-11-26):
// 1. messages/*.json — add nav.guideMenu label (7 locales), inserted right
//    after nav.guide (disambiguated from the same-named key elsewhere via the
//    following nav.materials line).
// 2. app/[locale]/page.tsx — replace Sourcing & Quality + Quality Control +
//    Compare nav entries with <NavGuideMenu />; remove the header WhatsApp
//    button; remove the #factory and #qc homepage sections; drop the now
//    unused Play/Zap icon imports and isPlaying state.
// 3. app/[locale]/about/page.tsx — add id="quality-control" anchor to the
//    Quality Control Protocol section; nav uses <NavGuideMenu /> instead of
//    the dead /#factory anchor + NavCompareMenu.
// Every replacement asserts exactly one occurrence; any mismatch aborts
// before writing that file.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
// Works both from scripts/ (canonical) and when copied to the website root
// for sandbox execution.
const root = existsSync(path.join(here, "messages")) ? here : path.resolve(here, "..");

function read(rel) {
  return readFileSync(path.join(root, rel), "utf8");
}
function write(rel, content) {
  writeFileSync(path.join(root, rel), content);
  console.log("updated", rel);
}
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// EOL-tolerant exact replacement; asserts exactly one occurrence.
function replaceOnce(content, oldStr, newStr, label) {
  const re = new RegExp(escapeRe(oldStr).split("\n").join("\\r?\\n"), "g");
  const matches = content.match(re);
  const count = matches ? matches.length : 0;
  if (count !== 1) throw new Error(`assert failed (${label}): expected 1, found ${count}`);
  return content.replace(re, () => newStr);
}
// Remove from startRe through the first endRe after it (inclusive) + one
// trailing newline; asserts the start marker occurs exactly once.
function removeBlock(content, startRe, endRe, label) {
  const flags = startRe.flags.includes("g") ? startRe.flags : startRe.flags + "g";
  const all = content.match(new RegExp(startRe.source, flags));
  if (!all || all.length !== 1) throw new Error(`assert failed (${label}): start marker count ${all ? all.length : 0}`);
  const startMatch = startRe.exec(content);
  const from = startMatch.index;
  const rest = content.slice(from + startMatch[0].length);
  const endMatch = endRe.exec(rest);
  if (!endMatch) throw new Error(`assert failed (${label}): end marker not found`);
  let to = from + startMatch[0].length + endMatch.index + endMatch[0].length;
  const after = content.slice(to, to + 2);
  to += after.startsWith("\r\n") ? 2 : after.startsWith("\n") ? 1 : 0;
  return content.slice(0, from) + content.slice(to);
}
// Drop lines matching pred; asserts exactly one such line.
function dropLines(content, pred, label) {
  const lines = content.split(/\r?\n/);
  const hit = lines.filter(pred).length;
  if (hit !== 1) throw new Error(`assert failed (${label}): expected 1, found ${hit}`);
  const eol = content.includes("\r\n") ? "\r\n" : "\n";
  return lines.filter((l) => !pred(l)).join(eol);
}

/* ---------------- 1. messages: nav.guideMenu ---------------- */
const GUIDE_MENU = {
  en: "Guide",
  es: "Guía",
  de: "Leitfaden",
  fr: "Guide",
  it: "Guida",
  ja: "ガイド",
  pt: "Guia",
};
const NAV_GUIDE = {
  en: "B2B Buyer's Guide",
  es: "Guía para Compradores",
  de: "B2B-Einkaufsführer",
  fr: "Guide d'Achat B2B",
  it: "Guida all'Acquisto B2B",
  ja: "B2B調達ガイド",
  pt: "Guia de Compra B2B",
};
for (const [loc, menuLabel] of Object.entries(GUIDE_MENU)) {
  const rel = `messages/${loc}.json`;
  let c = read(rel);
  if (c.includes('"guideMenu"')) {
    // Idempotent re-run: verify the existing value, skip insertion.
    if (!c.includes(`"guideMenu": ${JSON.stringify(menuLabel)}`)) throw new Error(`guideMenu wrong value in ${loc}`);
    console.log("skip (already done)", `messages/${loc}.json`);
    continue;
  }
  // "guide"+"materials" pairs also exist in the breadcrumb namespace, so only
  // the FIRST pair (nav block) is touched; assert it precedes "breadcrumb".
  const pattern = `"guide": ${JSON.stringify(NAV_GUIDE[loc])},(\r?\n)([ \t]*)"materials":`;
  const re = new RegExp(pattern);
  const m = re.exec(c);
  if (!m) throw new Error(`assert failed (${loc}): nav.guide+materials pair not found`);
  const breadcrumbIdx = c.indexOf('"breadcrumb"');
  if (breadcrumbIdx === -1 || m.index > breadcrumbIdx) throw new Error(`assert failed (${loc}): first guide+materials pair is not in the nav block`);
  c = c.replace(re, (_m, eol, indent) => {
    return `"guide": ${JSON.stringify(NAV_GUIDE[loc])},${eol}${indent}"guideMenu": ${JSON.stringify(menuLabel)},${eol}${indent}"materials":`;
  });
  JSON.parse(c); // validity check
  write(rel, c);
}

/* ---------------- 2. homepage page.tsx ---------------- */
const pageRel = "app/[locale]/page.tsx";
let page = read(pageRel);

page = replaceOnce(
  page,
  'import { NavCompareMenu } from "../components/NavCompareMenu";',
  'import { NavGuideMenu } from "../components/NavGuideMenu";',
  "page import swap"
);
page = replaceOnce(
  page,
  'import { MessageCircle, ShieldCheck, Zap, Globe, Cpu, Play, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, CheckCircle2, Facebook, Linkedin, FileDown, Sparkles, Package } from "lucide-react";',
  'import { MessageCircle, ShieldCheck, Globe, Cpu, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, CheckCircle2, Facebook, Linkedin, FileDown, Sparkles, Package } from "lucide-react";',
  "page lucide imports"
);
page = dropLines(page, (l) => l.trim() === "const [isPlaying, setIsPlaying] = useState(false);", "page isPlaying state");

page = replaceOnce(
  page,
  '            <a href="#factory" className="hover:text-black transition">{n("factory")}</a>\n            <a href="#qc" className="hover:text-black transition">{n("qualityControl")}</a>\n            <NavCompareMenu />',
  '            <NavGuideMenu />',
  "page nav consolidation"
);

page = removeBlock(
  page,
  /(^[ \t]*<button[ \t]*\r?\n[^\n]*handleWhatsApp\("header")/m,
  /<\/button>/,
  "page header whatsapp button"
);
page = removeBlock(
  page,
  /(^[ \t]*\{[^\n]*Inside Our Factory[^\n]*\*\/})/m,
  /<\/section>/,
  "page factory section"
);
page = removeBlock(
  page,
  /(^[ \t]*\{[^\n]*QC Protocol Section[^\n]*\*\/})/m,
  /<\/section>/,
  "page qc section"
);
write(pageRel, page);

/* ---------------- 3. about page ---------------- */
const aboutRel = "app/[locale]/about/page.tsx";
let about = read(aboutRel);

about = replaceOnce(
  about,
  'import { NavCompareMenu } from "../../components/NavCompareMenu";',
  'import { NavGuideMenu } from "../../components/NavGuideMenu";',
  "about import swap"
);
about = dropLines(about, (l) => l.includes('/#factory'), "about #factory nav link");
about = replaceOnce(
  about,
  '            <NavCompareMenu />',
  '            <NavGuideMenu />',
  "about nav menu"
);
about = replaceOnce(
  about,
  '      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">\n        <div className="max-w-4xl mx-auto">\n          <div className="text-center mb-12">\n            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.transpLabel}</span>',
  '      <section id="quality-control" className="py-24 px-4 bg-gray-50 border-y border-gray-100 scroll-mt-20">\n        <div className="max-w-4xl mx-auto">\n          <div className="text-center mb-12">\n            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{c.transpLabel}</span>',
  "about quality-control anchor"
);
write(aboutRel, about);

console.log("done");
