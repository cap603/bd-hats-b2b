import { NextRequest, NextResponse } from "next/server";
import { formatCountry } from "../../lib/country";
import { sendWebhookNotification } from "../../lib/notify";

export const runtime = "nodejs";

interface InquiryPayload {
  name: string;
  email: string;
  message: string;
  phone?: string;
  attribution?: string[];
  locale?: string;
  url?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: InquiryPayload = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const phone = String(body.phone || "").trim();
    const attribution = Array.isArray(body.attribution) ? body.attribution : [];
    const locale = String(body.locale || "en").trim();
    const url = String(body.url || "").trim();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const inquiryId = `INQ-${Date.now().toString(36).toUpperCase()}`;

    const inquiryRecord = {
      id: inquiryId,
      timestamp,
      name,
      email,
      phone,
      message,
      attribution,
      locale,
      url,
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
    };

    // 1. Structured Server-side Audit Log (Persists in Vercel Function Logs)
    console.log("==========================================");
    console.log(`[NEW B2B INQUIRY] ID: ${inquiryId}`);
    console.log(`Client: ${name} <${email}>`);
    if (phone) console.log(`Phone/WhatsApp: ${phone}`);
    console.log(`Time: ${timestamp}`);
    console.log(`Locale: ${locale} | Origin URL: ${url}`);
    console.log(`Requirements: \n${message}`);
    if (attribution.length > 0) {
      console.log(`Attribution:\n${attribution.join("\n")}`);
    }
    console.log("==========================================");

    // 2. Email Notification Pipeline (Resend API)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.INQUIRY_RECIPIENT || "3779980382@qq.com";

    // Extract buyer geography from edge headers
    const countryCode =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      "";
    const city = req.headers.get("x-vercel-ip-city") || "";
    const countryText = formatCountry(countryCode) + (city ? ` · ${city}` : "");

    const timeStr =
      new Date().toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }) + " (北京时间)";

    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <div style="background-color: #0f172a; padding: 16px 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 18px;">New B2B Inquiry — BD Junyang Hats</h2>
              <span style="color: #94a3b8; font-size: 12px;">ID: ${inquiryId} • ${timestamp}</span>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;"><strong>Client Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Client Email:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Phone / WhatsApp:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${phone}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Country / Region:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 13px;">${countryText}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Language:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 13px;">${locale.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Page URL:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 13px;">${url || "/"}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-bottom: 20px;">
              <h4 style="margin: 0 0 10px 0; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Custom Requirements</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
            </div>

            ${attribution.length > 0 ? `
            <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 15px;">
              <h5 style="margin: 0 0 6px 0; font-size: 11px; color: #94a3b8; text-transform: uppercase;">Traffic & Attribution</h5>
              <p style="margin: 0; font-size: 11px; color: #64748b; line-height: 1.4;">${attribution.join("<br>")}</p>
            </div>
            ` : ""}

            <div style="text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              Baoding Junyang Hat Manufacturing Co., Ltd. • Automated Lead Dispatcher
            </div>
          </div>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "BD Junyang Inquiries <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `[New Inquiry] ${name} (${countryCode || "Overseas"}) — B2B Custom Hats Requirements (${inquiryId})`,
            html: emailHtml,
          }),
        });
        console.log(`[RESEND EMAIL SENT] Dispatched to ${recipientEmail}`);
      } catch (err) {
        console.error("[RESEND EMAIL ERROR]", err);
      }
    }

    // 3. Webhook Integration Pipeline (DingTalk / Feishu / WeCom)
    const dingMarkdown = `### 📩 【收到网站邮箱新询盘】
> 客户已正式提交定制需求表单！

- **客户姓名**：**${name}**
- **客户邮箱**：[${email}](mailto:${email})
- **电话/WhatsApp**：${phone || "未提供"}
- **买手国家**：**${countryText}**
- **来源页面**：\`${url || "/"}\`
- **语言版本**：${locale.toUpperCase()}
- **询盘编号**：\`${inquiryId}\`
- **提交时间**：${timeStr}
- **定制需求**：
> ${message.replace(/\n/g, "\n> ")}
${attribution.length > 0 ? `\n- **引流渠道**：\n${attribution.map((a) => `  • ${a}`).join("\n")}` : ""}`;

    await sendWebhookNotification({
      title: "【收到网站邮箱新询盘】",
      markdown: dingMarkdown,
    });

    // 4. Supabase Storage Pipeline (Optional Database Backup)
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
          method: "POST",
          headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
          },
          body: JSON.stringify({
            id: inquiryId,
            name,
            email,
            phone,
            message,
            locale,
            attribution: attribution.join("\n"),
            created_at: timestamp,
          }),
        });
        console.log(`[SUPABASE BACKUP] Saved to inquiries table`);
      } catch (err) {
        console.error("[SUPABASE ERROR]", err);
      }
    }

    return NextResponse.json({
      ok: true,
      inquiryId,
      message: "Inquiry successfully recorded and dispatched to sales team",
    });
  } catch (error) {
    console.error("[INQUIRY HANDLER ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
