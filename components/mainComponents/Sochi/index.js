import Image from 'next/image'
import './style.scss'
import Link from 'next/link'
const Sochi = () => {
    return (
        <div id='sochi' className='sochi'>
            <div className='sochi-text'>
                <div>
                    <h2 className='sochi-title-mian'>Открытие новой студии в Сочи!</h2>
                    <div className='sochi-text-main'>
                        <p>Открытие новой студии Tipme Studio в центре Сочи. Сохраняем главный принцип — забота, оставаясь самой внимательной студией России. Создаём атмосферу доверия, комфорта и поддержки, где каждый чувствует себя ценным.</p>
                    </div>
                </div>
                <Link className='link-more' href='https://tipmestudio.ru/sochi'>Подробнее</Link>
            </div>
            <Image src='/Home/Sochi/sochi.jpg' width={630} height={450} alt='Студия для стриминга в Сочи' />
        </div>
    )
}

export default Sochi