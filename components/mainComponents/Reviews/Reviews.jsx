"use client";

import "./Reviews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  const availableReviews = [
    {
      id: 1,
      name: "Анастасия",
      date: "10.01.2025",
      star: 5,
      text: "Для меня было важно найти работу с гибким графиком и возможностью работать удаленно. В Типми я получила именно то, что искала: обучение, поддержку и понятные условия. Команда всегда на связи, поэтому старт прошел спокойно.",
    },
    {
      id: 2,
      name: "Екатерина",
      date: "23.02.2025",
      star: 5,
      text: "Пришла по рекомендации подруги и быстро поняла, что здесь относятся к моделям внимательно. Студия стильная, техника новая, интернет стабильный. Доход оказался выше, чем я ожидала, а советы менеджеров реально помогают расти.",
    },
    {
      id: 3,
      name: "София",
      date: "24.02.2025",
      star: 5,
      text: "Пробовала несколько студий, но только в Типми почувствовала себя комфортно. Коллектив поддерживает, график можно обсудить, обучение без давления. Для меня это стало хорошей возможностью зарабатывать и развиваться.",
    },
  ];

  return (
    <div id="reviews" className="home-reviews home-block">
      <h2>Отзывы</h2>
      <Swiper slidesPerView="auto" spaceBetween={0} className="reviews-catalog" loop>
        {availableReviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="reviews-home-card">
              <div className="review-profile">
                <div className="profile-info">
                  <p className="profile-name">{item.name}</p>
                  <p className="profile-date">{item.date}</p>
                  <div className="star">
                    {Array.from({ length: item.star }).map((_, i) => (
                      <Image
                        key={i}
                        src="/Home/Reviews/star.svg"
                        width={30}
                        height={30}
                        alt="Звезда"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="reviews-text">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
