import { NextRequest, NextResponse } from "next/server";
import { formatCountry } from "../../lib/country";
import { sendWebhookNotification } from "../../lib/notify";
import nodemailer from "nodemailer";

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

    // 2. Email Notification Pipeline (SMTP Direct + Resend API Fallback)
    const recipientEmail = process.env.INQUIRY_RECIPIENT || "admin@bdjunyang.com";

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

    const emailSubject = `[New Inquiry] ${name} (${countryText || "Overseas"}) — B2B Custom Hats Requirements (${inquiryId})`;
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 18px 24px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 700;">收到网站新定制询盘 (B2B Lead)</h2>
          <span style="color: #94a3b8; font-size: 12px; display: inline-block; margin-top: 4px;">编号: ${inquiryId} • ${timeStr}</span>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 140px; border-bottom: 1px solid #f1f5f9;"><strong>客户姓名 (Name):</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><strong>客户邮箱 (Email):</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a>
              <span style="color: #64748b; font-size: 12px; margin-left: 8px;">(可直接在邮件中点击“回复”联系买家)</span>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><strong>电话 / WhatsApp:</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${phone}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><strong>买家国家 (Region):</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9;">${countryText}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><strong>访问语种 (Locale):</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 13px; border-bottom: 1px solid #f1f5f9;">${locale.toUpperCase()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><strong>来源网页 (URL):</strong></td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 13px; border-bottom: 1px solid #f1f5f9;"><a href="${url || "/"}" style="color: #64748b; text-decoration: none;">${url || "/"}</a></td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 10px 0; font-size: 12px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">客户定制需求 (Custom Requirements)</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
        </div>

        ${attribution.length > 0 ? `
        <div style="border-top: 1px solid #f1f5f9; padding-top: 12px; margin-top: 15px;">
          <h5 style="margin: 0 0 6px 0; font-size: 11px; color: #94a3b8; text-transform: uppercase;">引流渠道与归因 (Traffic Attribution)</h5>
          <p style="margin: 0; font-size: 11px; color: #64748b; line-height: 1.4;">${attribution.join("<br>")}</p>
        </div>
        ` : ""}

        <div style="text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Baoding Junyang Import and Export Trade Co., Ltd. • 官方询盘自动分发系统
        </div>
      </div>
    `;

    // 2.1 Attempt SMTP dispatch if configured (e.g. 263 企业邮箱 smtp.263.net)
    let emailSent = false;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    if (smtpPass) {
      try {
        const smtpPort = Number(process.env.SMTP_PORT) || 465;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.263.net",
          port: smtpPort,
          secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465,
          auth: {
            user: process.env.SMTP_USER || "admin@bdjunyang.com",
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${process.env.SMTP_FROM_NAME || "BD Junyang Inquiries"}" <${process.env.SMTP_USER || "admin@bdjunyang.com"}>`,
          to: recipientEmail,
          replyTo: `"${name}" <${email}>`,
          subject: emailSubject,
          html: emailHtml,
        });

        emailSent = true;
        console.log(`[SMTP EMAIL SENT] Successfully delivered to ${recipientEmail} via SMTP`);
      } catch (err) {
        console.error("[SMTP EMAIL ERROR]", err);
      }
    }

    // 2.2 Attempt Resend API fallback if SMTP not configured or failed
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        const defaultFrom = process.env.RESEND_FROM || "BD Junyang Inquiries <onboarding@resend.dev>";
        let res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: defaultFrom,
            to: [recipientEmail],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        // Fallback retry with onboarding@resend.dev if custom from fails
        if (!res.ok && defaultFrom !== "onboarding@resend.dev") {
          const firstErr = await res.json().catch(() => ({}));
          console.warn("[RESEND PRIMARY ATTEMPT FAILED, RETRYING WITH ONBOARDING]", firstErr);
          res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "BD Junyang Inquiries <onboarding@resend.dev>",
              to: [recipientEmail],
              reply_to: email,
              subject: emailSubject,
              html: emailHtml,
            }),
          });
        }

        if (res.ok) {
          emailSent = true;
          console.log(`[RESEND EMAIL SENT] Dispatched to ${recipientEmail}`);
        } else {
          const errorData = await res.json().catch(() => ({}));
          console.error("[RESEND API ERROR RESPONSE]", errorData);
        }
      } catch (err) {
        console.error("[RESEND EMAIL ERROR]", err);
      }
    }

    if (!emailSent && !smtpPass && !resendApiKey) {
      console.warn("[EMAIL NOT CONFIGURED] Neither SMTP_PASSWORD nor RESEND_API_KEY is configured. Only Webhook dispatched.");
    }

    // 3. Webhook Integration Pipeline (DingTalk / Feishu / WeCom)
    const isSpanishLead =
      locale === "es" ||
      url.includes("/es/") ||
      url.endsWith("/es") ||
      ["MX", "CO", "CL", "ES", "AR", "PE", "EC", "GT", "VE", "PA", "CR", "DO", "UY", "PY", "BO", "SV", "HN", "NI", "PR"].includes(
        countryCode.toUpperCase()
      );

    const isGermanLead =
      locale === "de" ||
      url.includes("/de/") ||
      url.endsWith("/de") ||
      ["DE", "AT", "CH", "LI"].includes(countryCode.toUpperCase());

    const isFrenchLead =
      locale === "fr" ||
      url.includes("/fr/") ||
      url.endsWith("/fr") ||
      ["FR", "BE", "LU", "MC"].includes(countryCode.toUpperCase());

    const isPortugueseLead =
      locale === "pt" ||
      url.includes("/pt/") ||
      url.endsWith("/pt") ||
      ["BR", "PT", "AO", "MZ"].includes(countryCode.toUpperCase());

    const isItalianLead =
      locale === "it" ||
      url.includes("/it/") ||
      url.endsWith("/it") ||
      ["IT", "SM", "VA"].includes(countryCode.toUpperCase());

    const isJapaneseLead =
      locale === "ja" ||
      url.includes("/ja/") ||
      url.endsWith("/ja") ||
      ["JP"].includes(countryCode.toUpperCase());

    const dingMarkdown = `### 📩 【收到网站邮箱新询盘】
> 客户已正式提交定制需求表单！

- **客户姓名**：**${name}**
- **客户邮箱**：[${email}](mailto:${email})
- **电话/WhatsApp**：${phone || "未提供"}
- **买手国家**：**${countryText}**
${isSpanishLead ? `- **客群属性**：🇪🇸 **【西语拉美潜在客户 / Lead en Español】**\n` : ""}${isGermanLead ? `- **客群属性**：🇩🇪 **【德语区潜在买手 / Lead auf Deutsch】**\n` : ""}${isFrenchLead ? `- **客群属性**：🇫🇷 **【法语区潜在买手 / Lead en Français】**\n` : ""}${isPortugueseLead ? `- **客群属性**：🇵🇹 **【葡语区潜在买手 / Lead em Português】**\n` : ""}${isItalianLead ? `- **客群属性**：🇮🇹 **【意大利语潜在买手 / Lead in Italiano】**\n` : ""}${isJapaneseLead ? `- **客群属性**：🇯🇵 **【日本市场潜在买手 / 日本語リード】**\n` : ""}- **来源页面**：\`${url || "/"}\`
- **语言版本**：${locale.toUpperCase()}
- **询盘编号**：\`${inquiryId}\`
- **提交时间**：${timeStr}
${isSpanishLead ? `- **跟进提示**：💡 客户来自西语市场，请业务员优先使用西班牙语跟进！\n` : ""}${isGermanLead ? `- **跟进提示**：💡 客户来自欧洲德语区，对品质与验厂认证敏感，建议附带德语/英语规格书！\n` : ""}${isFrenchLead ? `- **跟进提示**：💡 客户来自法语区市场，建议首轮以法语或礼貌英文跟进！\n` : ""}${isPortugueseLead ? `- **跟进提示**：💡 客户来自葡语区（巴西/葡萄牙），建议使用葡萄牙语或英语跟进！\n` : ""}${isItalianLead ? `- **跟进提示**：💡 客户来自意大利时尚/运动市场，重视款式设计与做工细节！\n` : ""}${isJapaneseLead ? `- **跟进提示**：💡 日本买手极其注重做工精细度、针距与交期稳定，建议回复格外严谨礼貌！\n` : ""}- **定制需求**：
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
