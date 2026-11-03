import { NextRequest, NextResponse } from "next/server";
import { formatCountry } from "../../../lib/country";
import { sendWebhookNotification } from "../../../lib/notify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    try {
      const text = await req.text();
      if (text) {
        body = JSON.parse(text);
      }
    } catch {
      body = {};
    }

    const type = String(body.type || "whatsapp_click");
    const page = String(body.page || "/");
    const button = String(body.button || "general");
    const label = String(body.label || "");
    const referrer = String(body.referrer || "");

    // Extract buyer geography from Vercel / Cloudflare edge headers
    const countryCode =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      "";
    const city = req.headers.get("x-vercel-ip-city") || "";
    const countryText = formatCountry(countryCode) + (city ? ` · ${city}` : "");

    const timeStr = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) + " (北京时间)";

    // Identify acquisition channel
    let channel = "直接访问 / 暗流量 (Direct)";
    if (referrer) {
      if (/google\./i.test(referrer)) channel = "🔍 Google 自然搜索 (Organic)";
      else if (/chatgpt\.com|openai\.com/i.test(referrer)) channel = "🤖 ChatGPT 问答推荐";
      else if (/doubao\.com/i.test(referrer)) channel = "🤖 豆包 AI 推荐";
      else if (/bing\.com/i.test(referrer)) channel = "🔍 Bing 必应搜索";
      else if (/linkedin\./i.test(referrer)) channel = "💼 LinkedIn 领英";
      else if (/instagram\.|facebook\.|fb\.com/i.test(referrer)) channel = "📱 社媒 (Meta/Insta)";
      else if (/alibaba\.com|1688\.com/i.test(referrer)) channel = "🏭 阿里巴巴/1688";
      else channel = `🌐 外部引荐 (${referrer.slice(0, 45)})`;
    }

    if (type === "whatsapp_click") {
      const isSpanishLead =
        page.startsWith("/es") ||
        ["MX", "CO", "CL", "ES", "AR", "PE", "EC", "GT", "VE", "PA", "CR", "DO", "UY", "PY", "BO", "SV", "HN", "NI", "PR"].includes(
          countryCode.toUpperCase()
        );

      const isGermanLead =
        page.startsWith("/de") ||
        ["DE", "AT", "CH", "LI"].includes(countryCode.toUpperCase());

      const isFrenchLead =
        page.startsWith("/fr") ||
        ["FR", "BE", "LU", "MC"].includes(countryCode.toUpperCase());

      const isPortugueseLead =
        page.startsWith("/pt") ||
        ["BR", "PT", "AO", "MZ"].includes(countryCode.toUpperCase());

      const isItalianLead =
        page.startsWith("/it") ||
        ["IT", "SM", "VA"].includes(countryCode.toUpperCase());

      const isJapaneseLead =
        page.startsWith("/ja") ||
        ["JP"].includes(countryCode.toUpperCase());

      const markdown = `### 🟢 【独立站 WhatsApp 询盘意向】
> 海外买手刚在网站点击了 WhatsApp 沟通按钮！

- **买手国家**：**${countryText}**
${isSpanishLead ? `- **客群属性**：🇪🇸 **【西语拉美潜在客户 / Lead en Español】**\n` : ""}${isGermanLead ? `- **客群属性**：🇩🇪 **【德语区潜在买手 / Lead auf Deutsch】**\n` : ""}${isFrenchLead ? `- **客群属性**：🇫🇷 **【法语区潜在买手 / Lead en Français】**\n` : ""}${isPortugueseLead ? `- **客群属性**：🇵🇹 **【葡语区潜在买手 / Lead em Português】**\n` : ""}${isItalianLead ? `- **客群属性**：🇮🇹 **【意大利语潜在买手 / Lead in Italiano】**\n` : ""}${isJapaneseLead ? `- **客群属性**：🇯🇵 **【日本市场潜在买手 / 日本語リード】**\n` : ""}- **点击页面**：\`${page}\`
- **触发模块**：${label ? `${label} (${button})` : button}
- **引流渠道**：${channel}
- **发生时间**：${timeStr}
- **跟进提示**：${
        isSpanishLead
          ? "💡 潜在西语买手！请留意 WhatsApp (+86 159 3393 0830) 并优先使用西班牙语打招呼跟进！"
          : isGermanLead
          ? "💡 潜在德语区买手！请留意 WhatsApp (+86 159 3393 0830)，买手注重严谨品质，建议准备好德语/英语规格书！"
          : isFrenchLead
          ? "💡 潜在法语区买手！请留意 WhatsApp (+86 159 3393 0830)，建议首轮以礼貌法语或英语打招呼！"
          : isPortugueseLead
          ? "💡 潜在葡语买手（巴西/葡萄牙）！请留意 WhatsApp (+86 159 3393 0830)，建议使用葡萄牙语或英语跟进！"
          : isItalianLead
          ? "💡 潜在意大利买手！请留意 WhatsApp (+86 159 3393 0830)，客户重视设计与做工细节！"
          : isJapaneseLead
          ? "💡 潜在日本买手！请留意 WhatsApp (+86 159 3393 0830)，日本客户注重针距精度与严谨沟通，建议礼貌回复！"
          : "请销售员留意 WhatsApp (+86 159 3393 0830) 是否有来自该国家的新客户接入并打招呼！"
      }`;

      console.log(`[WHATSAPP CLICK EVENT] Country: ${countryCode} | Page: ${page} | Button: ${button}`);
      await sendWebhookNotification({
        title: "【独立站 WhatsApp 询盘意向】",
        markdown,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[INQUIRY EVENT ERROR]", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
