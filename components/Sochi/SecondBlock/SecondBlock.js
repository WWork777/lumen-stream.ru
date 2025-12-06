import './style.scss'
import Image from 'next/image'
import image1 from './image1.png'

const SecondBlock = () => {
    return (
        <div className='secondblock'>
            <h1 className='secondblock-title'>Акции для всех <br></br> новых моделей студии</h1>
            <div className='secondblock-text-block'>
                <div className='secondblock-text-container'>
                    <p className='secondblock-text'>В честь открытия студии мы запускаем особенную акцию <br></br> для новых моделей.</p>
                    <p className='secondblock-text'>Приходи работать к нам и фиксировано заработай 500$ <br></br> за первый месяц работы <br></br> в нашей студии.</p>
                    <p className='secondblock-text'>Мы гарантируем тебе полную поддержку <br></br> и сопровождение, от тебя только желание <br></br> обучаться и зарабатывать.</p>
                </div>
                <div className='secondblock-text-container-mobile'>
                    <p className='secondblock-text'>В честь открытия студии мы запускаем особенную акцию для новых моделей.</p>
                    <p className='secondblock-text'>Приходи работать к нам и фиксировано заработай 500$ за первый месяц работы в нашей студии.</p>
                    <p className='secondblock-text'>Мы гарантируем тебе полную поддержку и сопровождение, от тебя только желание обучаться и зарабатывать.</p>
                </div>
                <div className='secondblock-image'>
                    <Image src={image1} alt='image1' width={400} height={400}></Image>
                </div>
            </div>
        </div>
    )
}

export default SecondBlock