import { NextResponse } from "next/server";
import { saveLead, updateLead } from "../../../lib/leadsStore";
import { buildContactMessage, sendTelegramMessage } from "../../../lib/telegram";

export const runtime = "nodejs";

const normalize = (value) => String(value || "").trim();

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.privacyAccepted) {
      return NextResponse.json(
        { error: "Необходимо согласие на обработку персональных данных" },
        { status: 400 },
      );
    }

    const lead = await saveLead({
      type: "form",
      page: normalize(body.page),
      name: normalize(body.name),
      city: normalize(body.city),
      phone: normalize(body.phone),
      telegramNick: normalize(body.telegramNick),
      vkid: normalize(body.vkid),
      contactMethod: normalize(body.contactMethod),
      privacyAccepted: Boolean(body.privacyAccepted),
      raw: body,
    });

    const telegramResult = await sendTelegramMessage(buildContactMessage(lead));
    await updateLead(lead.id, {
      telegramStatus: telegramResult.ok ? "sent" : "failed",
      telegramError: telegramResult.ok ? "" : telegramResult.error,
    });

    return NextResponse.json({
      success: true,
      id: lead.id,
      telegramDelivered: telegramResult.ok,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Не удалось сохранить заявку" },
      { status: 500 },
    );
  }
}
