import './style.scss'
import Link from 'next/link'

const InfoSecond = () => {
    return (
        <div className='info'>
            <div className='info-text second'>
            <div className='info-text-second'>
                <h3>Ключевые требования</h3>
                <ul>
                    <li>Коммуникабельность, организаторские способности</li>
                    <li>Лидерские качества, стрессоустойчивость</li>
                    <li>Опыт администрирования и управления персоналом</li>
                    <li>Компьютерная грамотность, знание английского (преимущество)</li>
                </ul>
                <h3>Как устроиться</h3>
                <ul>
                    <li>Подать заявку на сайте</li>
                    <li>Пройти собеседование, возможно, стажировку</li>
                </ul>
                <p>Для полного ознакомления с вакансией, можете прочитать нашу статью</p>
            </div>
            <div className="admin-card-info">
                            <div className="admin-card-info-image">
                                <img src={`/blog/7.jpg`} width={1920} height={1080} />
                            </div>
                            <div className="admin-card-info-title">
                                <h2>Работа администратором вебкам студии. Удаленная работа</h2>
                            </div>
                            <div className="admin-card-info-description">
                                <p>Администратор вебкам — требования, обязанности и преимущества профессии | Типми</p>
                            </div>
                            <div className="admin-card-info-button">
                                <Link href={`/blog/vacancy-admin-tipmi`}>
                                <button>Читать</button>
                                </Link>
                                </div>
                </div>
            </div>
           
        </div>
    )
}

export default InfoSecond 