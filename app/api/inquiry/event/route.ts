import { NextRequest, NextResponse } from "next/server";
import { formatCountry } from "../../../lib/country";
import { sendWebhookNotification } from "../../../lib/notify";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

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
      const markdown = `### 🟢 【独立站 WhatsApp 询盘意向】
> 海外买手刚在网站点击了 WhatsApp 沟通按钮！

- **买手国家**：**${countryText}**
- **点击页面**：\`${page}\`
- **触发模块**：${label ? `${label} (${button})` : button}
- **引流渠道**：${channel}
- **发生时间**：${timeStr}
- **跟进提示**：请销售员留意 WhatsApp (+86 159 3393 0830) 是否有来自该国家的新客户接入并打招呼！`;

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
