import "./Questions.scss";

const questions = [
  {
    id: "One",
    name: "Какие условия и требования к стримерам?",
    text:
      "Нужен возраст от 18 лет, желание общаться и готовность пройти обучение. Опыт и знание английского не обязательны: на старте команда помогает с анкетой, образом, техникой и первыми эфирами.",
  },
  {
    id: "Two",
    name: "Можно ли совмещать с учебой или другой работой?",
    text:
      "Да. График обсуждается индивидуально, поэтому можно выбрать удобные смены и постепенно понять, какой формат подходит именно вам.",
  },
  {
    id: "Three",
    name: "Можно ли работать из дома?",
    text:
      "Да, удаленный формат возможен. Мы подскажем, как подготовить место, настроить программы, свет и камеру, чтобы эфиры были стабильными.",
  },
  {
    id: "Four",
    name: "Как проходит обучение?",
    text:
      "Обучение включает основы общения, настройку профиля, работу с образом, техническую часть и рекомендации по регулярности эфиров. Новички не остаются один на один с вопросами.",
  },
  {
    id: "Five",
    name: "Есть ли карьерный рост?",
    text:
      "Да. Можно расти в доходе как модель, пробовать роль оператора, администратора, скаута или развиваться внутри команды.",
  },
  {
    id: "Six",
    name: "Обязательно ли знать английский?",
    text:
      "Нет, но английский будет преимуществом. Если его нет, команда помогает с базовыми фразами, переводом и сценариями общения.",
  },
];

export default function Questions() {
  return (
    <section className="questions">
      <h2>Вопросы и ответы</h2>
      <div className="questions-container">
        {questions.map((item) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className="detailed-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded="false"
                aria-controls={item.id}
              >
                {item.name}
              </button>
            </h2>
            <div id={item.id} className="accordion-collapse collapse">
              <div className="accordion-body">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
