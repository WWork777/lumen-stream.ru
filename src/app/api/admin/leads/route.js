import { NextResponse } from "next/server";
import { listLeads } from "../../../../lib/leadsStore";

export const runtime = "nodejs";

const getAdminPassword = () =>
  process.env.ADMIN_PASSWORD || process.env.TIPMI_ADMIN_PASSWORD || "";

export async function POST(req) {
  try {
    const { password } = await req.json();
    const adminPassword = getAdminPassword();

    if (!adminPassword) {
      return NextResponse.json({ error: "Пароль админки не настроен" }, { status: 503 });
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
    }

    const leads = await listLeads();
    return NextResponse.json({ leads });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Не удалось загрузить заявки" },
      { status: 500 },
    );
  }
}
