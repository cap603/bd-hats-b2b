/**
 * Unified Webhook Notifier supporting DingTalk (钉钉), Feishu (飞书), and WeCom (企业微信)
 */

export async function sendWebhookNotification(params: {
  title: string;
  markdown: string;
  webhookUrl?: string;
}): Promise<boolean> {
  const url =
    params.webhookUrl ||
    process.env.INQUIRY_WEBHOOK_URL ||
    "https://oapi.dingtalk.com/robot/send?access_token=916fc22033b853ee1e8981b79da002e230d228107143f17e230489b148f3aeb4";

  if (!url) return false;

  try {
    let payload: any;

    if (url.includes("dingtalk.com")) {
      // 钉钉机器人格式 (必须确保文本含有安全关键词，如“询盘”)
      let text = params.markdown;
      if (!text.includes("询盘")) {
        text = `【询盘提醒】\n\n${text}`;
      }
      payload = {
        msgtype: "markdown",
        markdown: {
          title: params.title,
          text: text,
        },
      };
    } else if (url.includes("feishu.cn") || url.includes("larksuite.com")) {
      // 飞书机器人格式
      payload = {
        msg_type: "interactive",
        card: {
          header: {
            title: { tag: "plain_text", content: params.title },
            template: "blue",
          },
          elements: [
            {
              tag: "markdown",
              content: params.markdown,
            },
          ],
        },
      };
    } else if (url.includes("weixin.qq.com")) {
      // 企业微信机器人格式
      payload = {
        msgtype: "markdown",
        markdown: {
          content: params.markdown,
        },
      };
    } else {
      // 通用 Webhook 格式
      payload = {
        title: params.title,
        text: params.markdown,
      };
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (data.errcode && data.errcode !== 0) {
      console.error("[WEBHOOK ERROR RESPONSE]", data);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[WEBHOOK SEND FAILED]", err);
    return false;
  }
}
