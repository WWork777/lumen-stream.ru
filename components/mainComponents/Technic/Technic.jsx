import './Technic.scss'

export default function Technic(){
    return(
        <>
            <div className='technic'>
                <h2>Технические условия</h2>
                <div className='technic-container'>
                    <div className='technic-card'>
                        <p className='technic-card-title'>Вариативность работы</p>
                        <div className='technic-card-list'>
                            <span className='technic-card-list-text'>Мобильный стриминг</span>
                            <span className='technic-card-list-text'>Стриминг с компьютера</span>
                            <span className='technic-card-list-text'>Стриминг в VR</span>
                        </div>
                    </div>
                    <div className='technic-card'>
                        <p className='technic-card-title'>Техническая поддержка</p>
                        <svg width="132" height="117" viewBox="0 0 132 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.81">
                            <mask id="mask0_2030_168" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="132" height="117">
                            <path d="M92.9998 102.001H59.9998V78.001H102V54.001H126V102.001H111L102 111.001L92.9998 102.001Z" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6H102V78.0002H45.0001L33.0001 90.0002L21 78.0002H6V6Z" fill="white" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M50.9998 42H53.9998M71.9999 42H74.9999M29.9998 42H32.9998" stroke="black" strokeWidth="11" strokeLinecap="round"/>
                            </mask>
                            <g mask="url(#mask0_2030_168)">
                            <path d="M-6.00049 -12.001H138V131.999H-6.00049V-12.001Z" fill="#ECECEC"/>
                            </g>
                            </g>
                        </svg>
                    </div>
                    <div className='technic-card'>
                        <p className='technic-card-title'>Помощь в оформлении</p>
                        <div className='technic-card-list'>
                            <span className='technic-card-list-text'>Помощь в дизайнерском оформлении комнаты для стрима.</span>
                        </div>
                    </div>
                    <div className='technic-card'>
                        <p className='technic-card-title'>Система обучения от <br></br>профессионалов</p>
                        <div className='technic-card-list'>
                            <span className='technic-card-list-text'>Для каждого сотрудника по ведению стримов с любых устройств.</span>
                            <div className='technic-card-block-container'>
                                <div className='technic-card-block'>Бесплатно</div>
                                <div className='technic-card-block'>Быстро</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}