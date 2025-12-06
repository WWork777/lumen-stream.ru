'use client';
import './Reviews.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Reviews(){

    const availableReviews = [
        {id: 1, name: "Анастасия", date: "10.01.2025", star: 5, text: 'Для меня важно было найти работу с гибким графиком и возможностью работать удаленно. Здсь я получила именно то, что искала. Условия для работы просто отличные, а команда всегда готова помочь. Это не просто работа, а возможность хорошо зарабатывать $)'},
        {id: 2, name: "Екатерина", date: "23.02.2025", star: 5, text: 'Я пришла в Lumen по рекомендации подруги, и не пожалела! Здесь работают не только профессионалы,  но и замечательные люди. Такие забавные управляющие Условия созданы для максимального комфорта: студии стильные, оборудование новое, с интернетом проблем не бывает. Доход намного выше, чем я ожидала, и это благодаря постоянной поддержке команды. Лучшие'},
        {id: 3, name: "София", date: "24.02.2025", star: 5, text: 'Перепробовала несколько студий, но только здесь почувствовала себя по-настоящему комфортно. Коллектив как большая семья, где тебя всегда поймут. Условия работы супер, ребята на связи всегда. Доход действительно высокий, особенно с учётом грамотных советов от менеджеров. Lumen one love'},
    ]

    return(
        <>
            <div id='reviews' className='home-reviews home-block'>
                <h2>Отзывы</h2>
                <Swiper
                   slidesPerView={'auto'}
                   spaceBetween={0}
                   className="reviews-catalog"
                   loop={true}  
               >
                   {availableReviews.map(item => (
                       <SwiperSlide key={item.id}>
                            <div className='reviews-home-card'>
                                <div className='review-profile'>
                                    <div className='profile-info'>
                                        <p className='profile-name'>{item.name}</p>
                                        <p className='profile-date'>{item.date}</p>
                                        <div className='star'>
                                            {Array.from({ length: item.star }).map((_, i) => (
                                            <Image 
                                                key={i} 
                                                src={'/Home/Reviews/star.svg'} 
                                                width={30} 
                                                height={30} 
                                                alt='Звезда'
                                            />
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <p className='reviews-text'>{item.text}</p>
                            </div>
                       </SwiperSlide>
                   ))}
                   
               </Swiper>
            </div>
        </>
    )
}