import Link from "next/link";
import MainForm from "../mainComponents/MainForm";
import { brand } from "../../src/data/seoCities";
import { getVacancyPath, vacancies } from "../../src/data/vacancies";
import "./style.scss";

export function PageHero({ eyebrow, title, text, actions = [] }) {
  return (
    <section className="page-hero">
      <div>
        {eyebrow && <p>{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <span>{text}</span>}
        {actions.length > 0 && (
          <div className="page-hero-actions">
            {actions.map((action) => (
              <Link href={action.href} key={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function VacanciesIndex() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Вакансии"
        title="Работа в Типми"
        text="Выберите формат: работа в кадре, помощь за кадром, администрирование студии или удаленный поиск моделей."
        actions={[{ href: "#form", label: "Оставить заявку" }]}
      />

      <section className="page-vacancy-grid">
        {vacancies.map((vacancy) => (
          <article key={vacancy.slug}>
            <h2>{vacancy.title}</h2>
            <p>{vacancy.description}</p>
            <ul>
              <li>{vacancy.income}</li>
              <li>{vacancy.format}</li>
              <li>{vacancy.schedule}</li>
            </ul>
            <Link href={getVacancyPath(vacancy)}>Подробнее о вакансии</Link>
          </article>
        ))}
      </section>

      <MainForm page="Страница вакансий" title="Откликнуться на вакансию" />
    </main>
  );
}

export function VacancyDetail({ vacancy }) {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Вакансия"
        title={vacancy.title}
        text={vacancy.intro}
        actions={[
          { href: "#form", label: "Оставить заявку" },
          { href: "/vakansii", label: "Все вакансии" },
        ]}
      />

      <section className="page-detail-layout">
        <div className="page-detail-content">
          <h2>Что предстоит делать</h2>
          <p>{vacancy.description}</p>

          <h2>Требования</h2>
          <ul>
            {vacancy.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Что дает Типми</h2>
          <ul>
            {vacancy.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="page-detail-aside">
          <h2>Условия</h2>
          <dl>
            <div>
              <dt>Доход</dt>
              <dd>{vacancy.income}</dd>
            </div>
            <div>
              <dt>Формат</dt>
              <dd>{vacancy.format}</dd>
            </div>
            <div>
              <dt>График</dt>
              <dd>{vacancy.schedule}</dd>
            </div>
          </dl>
          <a href={brand.telegram}>Написать в Telegram</a>
        </aside>
      </section>

      <MainForm
        page={`Вакансия: ${vacancy.title}`}
        title="Откликнуться"
        subtitle="Оставьте контакты, и менеджер расскажет детали по вакансии."
      />
    </main>
  );
}

export function ContactsPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Контакты"
        title="Связаться с Типми"
        text="Напишите нам в удобный канал или оставьте заявку. Мы ответим, расскажем про формат работы и подберем подходящую вакансию."
        actions={[
          { href: brand.telegram, label: "Telegram" },
          { href: brand.whatsapp, label: "WhatsApp" },
        ]}
      />

      <section className="page-contact-grid">
        <a href="tel:+79951621740">
          <span>Телефон</span>
          <strong>{brand.phone}</strong>
        </a>
        <a href="mailto:studiotimpe@gmail.com">
          <span>Email</span>
          <strong>studiotimpe@gmail.com</strong>
        </a>
        <a href={brand.telegram}>
          <span>Telegram</span>
          <strong>@tipmestudio</strong>
        </a>
        <a href={brand.whatsapp}>
          <span>WhatsApp</span>
          <strong>Написать менеджеру</strong>
        </a>
      </section>

      <section className="page-contact-note">
        <h2>География работы</h2>
        <p>
          Мы принимаем заявки из разных городов России. Можно выбрать студийный формат
          или обсудить удаленную работу, если дома есть подходящие условия.
        </p>
      </section>

      <MainForm page="Страница контактов" title="Оставить контакты" />
    </main>
  );
}
