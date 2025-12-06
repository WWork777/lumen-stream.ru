import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, city, phone, telegramNick, contactMethod, vkid, page } = body;

  const message = `
<b>Заявка с сайта: lumen-stream.ru</b>
<b>Страница:</b> ${page}
<b>Имя:</b> ${name}
<b>Город:</b> ${city}
<b>Телефон:</b> ${phone}
${
  contactMethod === "telegram"
    ? `<b>Telegram Ник:</b> ${telegramNick || "Не указан"}`
    : ""
}
${contactMethod === "vk" ? `<b>Вк ID:</b> ${vkid || "Не указан"}` : ""}
<b>Канал связи:</b> ${contactMethod || "Не указан"}
`;

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await response.json();
      return NextResponse.json(
        { error: error.description },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
