import { saveLead, updateLead } from "../../../lib/leadsStore";
import { buildQuizMessage, sendTelegramMessage } from "../../../lib/telegram";

export const runtime = "nodejs";

const normalize = (value) => String(value || "").trim();

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.privacyAccepted) {
      return Response.json(
        { error: "Необходимо согласие на обработку персональных данных" },
        { status: 400 },
      );
    }

    const lead = await saveLead({
      type: "quiz",
      page: "Квиз на главной",
      name: normalize(data.name),
      city: normalize(data.city),
      telegram: normalize(data.telegram),
      experience: normalize(data.experience),
      location: normalize(data.location),
      hours: Number(data.hours || 0),
      income: Number(data.income || 0),
      privacyAccepted: Boolean(data.privacyAccepted),
      raw: data,
    });

    const telegramResult = await sendTelegramMessage(buildQuizMessage(lead));
    await updateLead(lead.id, {
      telegramStatus: telegramResult.ok ? "sent" : "failed",
      telegramError: telegramResult.ok ? "" : telegramResult.error,
    });

    return Response.json({
      ok: true,
      id: lead.id,
      telegramDelivered: telegramResult.ok,
    });
  } catch (error) {
    return Response.json(
      { error: error?.message || "Не удалось сохранить заявку" },
      { status: 500 },
    );
  }
}
