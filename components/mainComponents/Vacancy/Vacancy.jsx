import Link from "next/link";
import "./Vacancy.scss";
import { getVacancyPath, vacancies } from "../../../src/data/vacancies";

export default function Vacancy() {
  return (
    <section id="vacancy" className="vacancy">
      <div className="vacancy-heading">
        <p>Карьера в Типми</p>
        <h2>Доступные вакансии</h2>
      </div>

      <div className="vacancy-container">
        {vacancies.map((vacancy) => (
          <article className="vacancy-card" key={vacancy.slug}>
            <div>
              <h3>{vacancy.shortTitle}</h3>
              <p>{vacancy.intro}</p>
            </div>
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
            <Link href={getVacancyPath(vacancy)}>Подробнее</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
