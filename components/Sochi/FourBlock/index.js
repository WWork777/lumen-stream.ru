import './style.scss'

const Card = ({text,secondText}) => {
    return (
        <div className="ag-courses_item-sochi">
            <a href="#" className="ag-courses-item_link-sochi">
                <div className="ag-courses-item_bg-sochi"></div>
                <div className="ag-courses-item_title-sochi">
                    {text}
                </div>
           
            </a>
        </div>
    )
}

const BigCard = ({text,secondText}) => {
    return (
        <div className="ag-courses_item-sochi">
            <a href="#" className="ag-courses-item_link-sochi">
                <div className="ag-courses-item_bg-sochi"></div>
                <div className="ag-courses-item_title-sochi">
                    {text}
                </div>
                <div className="ag-courses-item_title-sochi">
                    {secondText}
                </div>
            </a>
        </div>
    )
}

const FourBlock = () => {
    return (
        <div className='fourblock'>
            <h1 className='fourblock-title'>Почему выбирают нас</h1>
            <div className="ag-format-container-sochi">
                <div className='fourblock-cards-top'>
                    <Card text='Забота – ключ к успеху: Типми создает комфорт и душевное спокойствие для моделей.'/>
                    <Card text='Уверенность и удовольствие: Типми заботится о вашей безопасности и комфорте.'/>
                </div>
                <div className='fourblock-cards-top'>
                    <Card text='Честность – наш принцип: Прозрачные договоры и гарантированный доход без скрытых условий.'/>
                    <Card text='Поддержка 24/7: Личный менеджер всегда готов помочь вам в любой ситуации.'/>
                </div>
                <Card text='Работа с лидерами отрасли: Мы отслеживаем тренды adult-индустрии и предоставляем нашим моделям возможности для роста и развития.'/>
                <BigCard text='Мы верим, что успех каждой модели начинается с заботы и внимания. Именно поэтому в Типми мы создаём атмосферу, в которой вам будет комфортно раскрывать свой потенциал.' secondText='Не упустите шанс стать частью нашей заботливой и профессиональной команды в Сочи! Подробности об акции, переезде и условиях можно узнать, заполнив форму на нашем сайте или связавшись с нами по контактным данным.'/>
            </div>
        </div>
    )
}

export default FourBlock
