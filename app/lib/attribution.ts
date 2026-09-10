// Lightweight first-party attribution helper.
//
// Why this exists: the site has no backend and the analytics event pipeline
// (gtag) is inactive until a GA4 ID is configured. To avoid a total blind spot
// on conversions, every WhatsApp hand-off now carries its own origin metadata
// inside the message body. The sales team sees the channel directly in the
// WhatsApp thread — no third-party analytics required.

export type Attribution = {
  path: string;
  page: string;
  channel: string;
  lang: string;
  time: string;
};

const CHANNEL_MAP: Array<[RegExp, string]> = [
  [/chatgpt\.com|openai\.com|oaiusercontent/i, "ChatGPT"],
  [/perplexity\.ai/i, "Perplexity"],
  [/gemini\.google|bard\.google/i, "Gemini"],
  [/claude\.ai|anthropic\.com/i, "Claude"],
  [/copilot\.microsoft/i, "Copilot"],
  [/google\./i, "Google Search"],
  [/bing\.com/i, "Bing"],
  [/yahoo\./i, "Yahoo"],
  [/duckduckgo\./i, "DuckDuckGo"],
  [/alibaba\.com|alicdn\.com|1688\.com/i, "Alibaba"],
  [/linkedin\./i, "LinkedIn"],
  [/facebook\.|fb\.com|fb\.me/i, "Facebook"],
  [/instagram\./i, "Instagram"],
  [/pinterest\./i, "Pinterest"],
  [/youtube\./i, "YouTube"],
  [/tiktok\./i, "TikTok"],
  [/twitter\.com|x\.com/i, "X / Twitter"],
  [/reddit\./i, "Reddit"],
  [/whatsapp\.|wa\.me/i, "WhatsApp"],
  [/mail\.google|outlook\./i, "Email"],
];

function pageLabel(pathname: string): string {
  const p = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  if (!p || p === "" || p === "/") return "Home";
  return p.replace(/^\//, "");
}

export function getAttribution(): Attribution {
  const fallback: Attribution = {
    path: "/",
    page: "Home",
    channel: "Direct (no referrer)",
    lang: "en",
    time: "",
  };

  if (typeof window === "undefined") return fallback;

  const path = window.location.pathname || "/";
  const ref = document.referrer || "";
  let channel = "Direct (no referrer)";

  if (ref) {
    let refHost = "";
    try {
      refHost = new URL(ref).hostname;
    } catch {
      refHost = ref;
    }

    if (refHost && window.location.hostname && refHost.includes(window.location.hostname)) {
      channel = "Internal navigation";
    } else {
      const hit = CHANNEL_MAP.find(([re]) => re.test(refHost) || re.test(ref));
      channel = hit ? hit[1] : refHost || "Unknown referrer";
    }
  }

  const langMatch = path.match(/^\/([a-z]{2})(?:\/|$)/);
  const lang = langMatch ? langMatch[1] : "en";

  let time = "";
  try {
    time =
      new Date().toLocaleString("en-GB", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }) + " (UTC+8)";
  } catch {
    time = new Date().toISOString();
  }

  return { path, page: pageLabel(path), channel, lang, time };
}

/** Multi-line block appended to full inquiry messages (form submissions). */
export function attributionLines(): string[] {
  const a = getAttribution();
  return [
    "--- Inquiry source (auto-tagged) ---",
    `Page: ${a.path}`,
    `Channel: ${a.channel}`,
    `Language: ${a.lang}`,
    `Time: ${a.time}`,
  ];
}

/** One-line tag appended to quick-chat WhatsApp buttons. */
export function attributionTag(): string {
  const a = getAttribution();
  return `[via website ${a.page} · ${a.channel}]`;
}
