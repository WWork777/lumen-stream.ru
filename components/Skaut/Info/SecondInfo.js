import './style.scss'
import Link from 'next/link'

const InfoSecond = () => {
    return (
        <div className='info'>
            <div className='info-text second'>
            <div className='info-text-second'>
                <h3>Система оплаты</h3>
                <ul>
                    <li>Модель на собеседовании и отработала 1 неделю - выплата 5000 руб.</li>
                    <li>Модель отработала 2 недели - выплата 5000 руб.</li>
                    <li>Модель отработала 1 месяц (включая нормы рабочих часов) - 10 000 руб.</li>
                    <li>Итого за 1 приведенную модель Вы получаете 20 000 руб.</li>
                </ul>
                <h3>Студия гарантирует</h3>
                <ul>
                    <li>Своевременную оплату за этапы работы вебкам модели</li>
                    <li>Поддержку на всех этапах работы</li>
                </ul>
                <p>Для полного ознакомления с вакансией, можете прочитать нашу статью</p>
            </div>
            <div className="skaut-card-info">
                            <div className="skaut-card-info-image">
                                <img src={`/blog/4.jpg`} width={1920} height={1080} />
                            </div>
                            <div className="skaut-card-info-title">
                                <h2>Работа рекрутером вебкам моделей, удаленная работа скаута моделей</h2>
                            </div>
                            <div className="skaut-card-info-description">
                                <p>Работа скаута вебкам студии - чем занимается | Типми</p>
                            </div>
                            <div className="skaut-card-info-button">
                                <Link href={`/blog/vacancy-scout-tipmi`}>
                                <button>Читать</button>
                                </Link>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSecond 