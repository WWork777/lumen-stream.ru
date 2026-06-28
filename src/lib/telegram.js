const DEFAULT_PROXY_URL = "https://tg-proxy.parsikovevgenij470.workers.dev";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export function buildContactMessage(lead) {
  const contact =
    lead.contactMethod === "telegram"
      ? `\n<b>Telegram:</b> ${escapeHtml(lead.telegramNick || "не указан")}`
      : lead.contactMethod === "vk"
        ? `\n<b>VK ID:</b> ${escapeHtml(lead.vkid || "не указан")}`
        : "";

  return `
<b>Новая заявка с сайта Типми</b>
<b>ID:</b> ${escapeHtml(lead.id)}
<b>Страница:</b> ${escapeHtml(lead.page || "не указана")}
<b>Имя:</b> ${escapeHtml(lead.name)}
<b>Город:</b> ${escapeHtml(lead.city)}
<b>Телефон:</b> ${escapeHtml(lead.phone)}
<b>Канал связи:</b> ${escapeHtml(lead.contactMethod || "не указан")}${contact}
`.trim();
}

export function buildQuizMessage(lead) {
  return `
<b>Новая заявка из квиза Типми</b>
<b>ID:</b> ${escapeHtml(lead.id)}
<b>Имя:</b> ${escapeHtml(lead.name)}
<b>Город:</b> ${escapeHtml(lead.city)}
<b>Опыт:</b> ${escapeHtml(lead.experience)}
<b>Формат:</b> ${escapeHtml(lead.location)}
<b>Часов в неделю:</b> ${escapeHtml(lead.hours)}
<b>Ожидаемый доход:</b> $${escapeHtml(lead.income)}
<b>Telegram:</b> ${escapeHtml(lead.telegram)}
`.trim();
}

export async function sendTelegramMessage(message) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const proxyUrl = (process.env.TELEGRAM_PROXY_URL || DEFAULT_PROXY_URL).replace(/\/+$/, "");

  if (!token || !chatId) {
    return {
      ok: false,
      error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured",
    };
  }

  try {
    const response = await fetch(`${proxyUrl}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || payload?.ok === false) {
      return {
        ok: false,
        error: payload?.description || `Telegram proxy error ${response.status}`,
      };
    }

    return { ok: true, payload };
  } catch (error) {
    return {
      ok: false,
      error: error?.message || "Telegram proxy request failed",
    };
  }
}
