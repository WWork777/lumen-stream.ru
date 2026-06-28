import './style.scss'
import Image from 'next/image'
import image1 from './image2.png'

const ThreedBlock = () => {
    return(
        <div className='threedblock'>
            <h1 className='threedblock-title'>Помощь с переездом</h1>
            <div className='threedblock-text-block'>
                <div className='threedblock-text-container'>
                    <p className='threedblock-text'>Мы понимаем, как сложно начинать карьеру в новом <br></br> городе. Типми предлагает иногородним моделям <br></br> полную поддержку:</p>
                    <p className='threedblock-text'>Уютное жилье: Безопасное жилье рядом со студией,<br></br> чтобы вы сосредоточились на работе.</p>
                    <p className='threedblock-text'>Помощь с переездом: Организация переезда,<br></br> транспортировка вещей и советы по адаптации.</p>
                    <p className='threedblock-text'>Забота о комфорте: Создаем уютную атмосферу <br></br> для работы и развития.</p>
                </div>
                <div className='threedblock-text-container-mobile'>
                    <p className='threedblock-text'>Мы понимаем, как сложно начинать карьеру в новом городе. Типми предлагает иногородним моделям полную поддержку:</p>
                    <p className='threedblock-text'>Уютное жилье: Безопасное жилье рядом со студией, чтобы вы сосредоточились на работе.</p>
                    <p className='threedblock-text'>Помощь с переездом: Организация переезда, транспортировка вещей и советы по адаптации.</p>
                    <p className='threedblock-text'>Забота о комфорте: Создаем уютную атмосферу для работы и развития.</p>
                </div>
                <div className='threedblock-image'>
                    <Image src={image1} alt='image1' width={500} height={400}></Image>
                </div>
            </div>
        </div>
    )
}

export default ThreedBlock
