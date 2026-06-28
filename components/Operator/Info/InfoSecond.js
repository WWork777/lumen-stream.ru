import './style.scss'
import Link from 'next/link'

const InfoSecond = () => {
    return (
        <div className='info'>
            <div className='info-text second'>
                <div className='info-text-second'>
                <h3>Обязанности</h3>
                <ul>
                    <li>Перевод для модели текста, который пишет клиент</li>
                    <li>Самостоятельное формирование текста от лица модели клиенту (по согласованию с моделью)</li>
                    <li>Полное управление чатом</li>
                    <li>Помощь в разработке контента и образа (стиль, сценарии, тематики)</li>
                    <li>Контроль за соблюдением правил площадок, чтобы избежать блокировок</li>
                </ul>
                <h3>Условия работы</h3>
                <ul>
                    <li>Работа дистанционно. Дистанционный формат работы - с подключением через удаленный рабочий стол к компьютеру модели</li>
                </ul>
                <p>Для полного ознакомления с вакансией, можете прочитать нашу статью</p>
                </div>
                <div className="operator-card-info">
                            <div className="operator-card-info-image">
                                <img src={`/blog/2.jpg`} width={1920} height={1080} />
                            </div>
                            <div className="operator-card-info-title">
                                <h2>Вакансия оператора в онлайн вебкам студии. Удаленная работа оператором стримов</h2>
                            </div>
                            <div className="operator-card-info-description">
                                <p>Чем занимается оператор вебкам студии | Timpestudio</p>
                            </div>
                            <div className="operator-card-info-button">
                                <Link href={`/blog/vacancy-operator-tipmi`}>
                                <button>Читать</button>
                                </Link>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSecond 