import './style.scss'
import Link from 'next/link'

const InfoSecond = () => {
    return (
        <div className='info'>
            <div className='info-text second'>
                <div className='info-text-second'>
                <h3>Что тебе дает студия</h3>
                <ul>
                    <li>Гарантированный доход для начинающих моделей</li>
                    <li>Заработок от 1000$ (120к в месяц)</li>
                    <li>Удобный формат выплат по согласованию на собеседовании</li>
                    <li>Обучение, поддержка и развитие на всех этапах</li>
                    <li>Гибкий рабочий график</li>
                    <li>Аксессуары для работы</li>
                    <li>Создание образа</li>
                </ul>
                <p>Для полного ознакомления с вакансией, можете прочитать нашу статью</p>
                </div>
                <div className="model-card-info">
                            <div className="model-card-info-image">
                                <img src={`/blog/14.webp`} width={1920} height={1080} />
                            </div>
                            <div className="model-card-info-title">
                                <h2>Вакансии вебкам-модели работа в вебкам студии: работа на вебкам удаленно</h2>
                            </div>
                            <div className="model-card-info-description">
                                <p>Кто такая вебкам модель - все о профессии</p>
                            </div>
                            <div className="model-card-info-button">
                                <Link href={`/blog/vacancy-model-tipmestudio`}>
                                <button>Читать</button>
                                </Link>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSecond 