export async function POST(req) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const data = await req.json();

  const message = `
💬 Новая заявка из квиза (lumen-stream.ru):

Имя: ${data.name}
Город: ${data.city}
Опыт: ${data.experience}
Где работать: ${data.location}
Часов в неделю: ${data.hours}
Доход: $${data.income}
Telegram: ${data.telegram}
`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!res.ok) throw new Error("Telegram API Error");

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
