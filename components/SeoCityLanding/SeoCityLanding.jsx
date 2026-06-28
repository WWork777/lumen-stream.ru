import Image from "next/image";
import Link from "next/link";
import MainForm from "../mainComponents/MainForm";
import { brand, getCityPath, seoCities } from "../../src/data/seoCities";
import "./style.scss";

const visibleCities = seoCities.slice(0, 36);

const getCityText = (city) => ({
  name: city.name,
});

export default function SeoCityLanding({ city }) {
  const nearbyCities = visibleCities.filter((item) => item.slug !== city.slug).slice(0, 18);
  const cityText = getCityText(city);

  return (
    <main className="seo-city-page">
      <section className="seo-city-hero">
        <Image
          src="/Home/Hero/hero3.webp"
          width={1920}
          height={1080}
          priority
          alt={`Работа стримером для девушек: ${cityText.name}`}
        />
        <div className="seo-city-hero-content">
          <p className="seo-city-kicker">18+ · студия и удаленный формат</p>
          <h1>
            Работа стримером
            <span>{cityText.name}</span>
          </h1>
          <p>
            {brand.name} помогает девушкам из разных городов России начать карьеру в веб-стриминге.
            Для города {cityText.name} доступен удаленный формат:
            обучение с нуля, поддержка команды, безопасный старт и понятные выплаты.
          </p>
          <div className="seo-city-actions">
            <a href="#form">Оставить заявку</a>
            <a href={brand.telegram}>Написать в Telegram</a>
          </div>
        </div>
      </section>

      <section className="seo-city-stats" aria-label="Преимущества работы">
        <div>
          <span>1000$+</span>
          <p>потенциальный доход активных моделей</p>
        </div>
        <div>
          <span>24/7</span>
          <p>помощь с аккаунтами, техникой и эфирами</p>
        </div>
        <div>
          <span>0</span>
          <p>опыт не обязателен, обучение включено</p>
        </div>
      </section>

      <section className="seo-city-content">
        <div className="seo-city-text">
          <h2>Вакансия вебкам модели: {cityText.name}</h2>
          <p>
            Если вы рассматриваете работу для девушек ({cityText.name}) с гибким графиком, высоким доходом и
            возможностью развиваться онлайн, формат стриминга может стать сильным вариантом. В {brand.name}
            можно начать без опыта: команда помогает с регистрацией, анкетой, образом, настройкой камеры,
            светом и первыми эфирами.
          </p>
          <p>
            Подойдет студийный формат и удаленная работа из дома. Мы объясняем, как вести трансляции,
            общаться с аудиторией, удерживать внимание и постепенно повышать заработок. Конфиденциальность,
            безопасность и комфорт остаются базовыми условиями на каждом этапе.
          </p>
        </div>
        <div className="seo-city-card">
          <h3>Что входит в старт</h3>
          <ul>
            <li>обучение вебкам и веб-стримингу с нуля;</li>
            <li>помощь с оборудованием и рабочим местом;</li>
            <li>подбор графика под учебу, работу или личный режим;</li>
            <li>поддержка администраторов и технических специалистов;</li>
            <li>понятная система выплат без скрытых штрафов.</li>
          </ul>
        </div>
      </section>

      <section className="seo-city-grid">
        <article>
          <h2>Работа из дома: {cityText.name}</h2>
          <p>
            Удаленный формат подойдет, если вы хотите работать из своей квартиры и сохранять привычный ритм.
            Мы подскажем, как подготовить пространство, настроить программы и сделать трансляции стабильными.
          </p>
        </article>
        <article>
          <h2>Работа в студии</h2>
          <p>
            Студия удобна для тех, кому важны готовое оборудование, отдельные комнаты, свет, стабильный
            интернет и команда рядом. Это особенно помогает новичкам быстрее привыкнуть к профессии.
          </p>
        </article>
        <article>
          <h2>Для девушек без опыта</h2>
          <p>
            Внешность и опыт не являются главным критерием. Важнее желание учиться, регулярность и умение
            общаться. Остальные навыки постепенно приходят на обучении и первых сменах.
          </p>
        </article>
      </section>

      <section className="seo-city-faq">
        <h2>Частые вопросы: {cityText.name}</h2>
        <details>
          <summary>Можно ли работать вебкам моделью удаленно?</summary>
          <p>
            Да, если дома есть подходящие условия, стабильный интернет и техника. Команда {brand.name}
            помогает подготовиться и настроить рабочее место.
          </p>
        </details>
        <details>
          <summary>Нужен ли опыт или английский язык?</summary>
          <p>
            Опыт не обязателен. Английский будет плюсом, но стартовать можно без него: мы даем базовое
            обучение, подсказки по общению и помогаем освоиться.
          </p>
        </details>
        <details>
          <summary>Можно ли совмещать с учебой или другой работой?</summary>
          <p>
            Да. График обсуждается индивидуально, поэтому формат подходит для девушек, которым нужна
            подработка, вечерние смены или плавный переход в новую сферу.
          </p>
        </details>
      </section>

      <section className="seo-city-links">
        <h2>Работа стримером в других городах</h2>
        <div>
          {nearbyCities.map((item) => (
            <Link href={getCityPath(item)} key={item.slug}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <MainForm
        page={`Городская SEO-страница: ${cityText.name}`}
        title="Оставить заявку"
        subtitle="Расскажите немного о себе, и менеджер Типми свяжется с вами в удобном канале."
      />
    </main>
  );
}
