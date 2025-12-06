import './style.scss'

const FiveBlock = () => {
    return(
        <div className='fiveblock'>
            <h1 className='fiveblock-title'>Контакты</h1>
            <div className='fiveblock-text-block'>
                <div className='fiveblock-card'>
                    <p>Адрес:</p> 
                    <p>г. Сочи, ул. Пушкинская, 10</p>
                </div>
                <div className='fiveblock-card'>
                    <p>
                        Телефон:
                    </p>
                    <p>
                    +7 (812) 123-45-67
                    </p>
                  
                </div>
                <div className='fiveblock-card'>
                    <p>Почта:</p> 
                    <p>6lKv2@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default FiveBlock