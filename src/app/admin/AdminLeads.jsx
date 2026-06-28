"use client";

import { useMemo, useState } from "react";
import "./style.scss";

const formatDate = (value) => {
  if (!value) return "-";
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
};

export default function AdminLeads() {
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const stats = useMemo(() => {
    const total = leads.length;
    const failed = leads.filter((lead) => lead.telegramStatus === "failed").length;
    const sent = leads.filter((lead) => lead.telegramStatus === "sent").length;
    return { total, failed, sent };
  }, [leads]);

  const loadLeads = async (event) => {
    event?.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Не удалось войти");
      }

      setLeads(data.leads || []);
      setIsUnlocked(true);
    } catch (error) {
      setStatus(error.message);
      setIsUnlocked(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="admin-leads">
      <section className="admin-leads-head">
        <div>
          <p>Мини-админка</p>
          <h1>Заявки с сайта</h1>
          <span>Здесь сохраняются анкеты и квизы, даже если Telegram не принял сообщение.</span>
        </div>

        <form onSubmit={loadLeads}>
          <input
            type="password"
            placeholder="Пароль администратора"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Загрузка..." : isUnlocked ? "Обновить" : "Войти"}
          </button>
        </form>
      </section>

      {status && <p className="admin-leads-error">{status}</p>}

      {isUnlocked && (
        <>
          <section className="admin-leads-stats">
            <div>
              <span>{stats.total}</span>
              <p>всего заявок</p>
            </div>
            <div>
              <span>{stats.sent}</span>
              <p>ушло в Telegram</p>
            </div>
            <div>
              <span>{stats.failed}</span>
              <p>ошибка Telegram</p>
            </div>
          </section>

          <section className="admin-leads-list">
            {leads.length === 0 ? (
              <p className="admin-leads-empty">Заявок пока нет.</p>
            ) : (
              leads.map((lead) => (
                <article className="admin-lead-card" key={lead.id}>
                  <div className="admin-lead-top">
                    <div>
                      <strong>{lead.name || "Без имени"}</strong>
                      <span>{formatDate(lead.createdAt)}</span>
                    </div>
                    <mark className={lead.telegramStatus === "sent" ? "sent" : "failed"}>
                      {lead.telegramStatus === "sent" ? "Telegram OK" : "Telegram error"}
                    </mark>
                  </div>

                  <dl>
                    <div>
                      <dt>Тип</dt>
                      <dd>{lead.type === "quiz" ? "Квиз" : "Форма"}</dd>
                    </div>
                    <div>
                      <dt>Страница</dt>
                      <dd>{lead.page || "-"}</dd>
                    </div>
                    <div>
                      <dt>Город</dt>
                      <dd>{lead.city || "-"}</dd>
                    </div>
                    <div>
                      <dt>Телефон</dt>
                      <dd>{lead.phone || "-"}</dd>
                    </div>
                    <div>
                      <dt>Telegram</dt>
                      <dd>{lead.telegramNick || lead.telegram || "-"}</dd>
                    </div>
                    <div>
                      <dt>VK</dt>
                      <dd>{lead.vkid || "-"}</dd>
                    </div>
                    {lead.type === "quiz" && (
                      <>
                        <div>
                          <dt>Опыт</dt>
                          <dd>{lead.experience || "-"}</dd>
                        </div>
                        <div>
                          <dt>Формат</dt>
                          <dd>{lead.location || "-"}</dd>
                        </div>
                        <div>
                          <dt>Часы</dt>
                          <dd>{lead.hours || 0} / нед.</dd>
                        </div>
                      </>
                    )}
                  </dl>

                  {lead.telegramError && <p className="admin-lead-error">{lead.telegramError}</p>}
                </article>
              ))
            )}
          </section>
        </>
      )}
    </main>
  );
}
