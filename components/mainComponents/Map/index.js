"use client";

import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";
import map from "./map3.png";
import Modal from "../../Modal";
import Link from "next/link";

const mapCities = [
  { className: "mark-kaliningrad", title: "Калининград", href: "/rabota-strimerom-v-kaliningrad", x: 9, y: 28 },
  { className: "mark-saint-petersburg", title: "Санкт-Петербург", href: "/rabota-strimerom-v-saint-petersburg", x: 14, y: 31 },
  { className: "mark-moscow", title: "Москва", href: "/rabota-strimerom-v-moscow", x: 17, y: 43 },
  { className: "mark-nizhny", title: "Нижний Новгород", href: "/rabota-strimerom-v-nizhny-novgorod", x: 22, y: 45 },
  { className: "mark-kazan", title: "Казань", href: "/rabota-strimerom-v-kazan", x: 25, y: 50 },
  { className: "mark-samara", title: "Самара", href: "/rabota-strimerom-v-samara", x: 27, y: 56 },
  { className: "mark-ufa", title: "Уфа", href: "/rabota-strimerom-v-ufa", x: 31, y: 54 },
  { className: "mark-yekaterinburg", title: "Екатеринбург", href: "/rabota-strimerom-v-yekaterinburg", x: 36, y: 46 },
  { className: "mark-chelyabinsk", title: "Челябинск", href: "/rabota-strimerom-v-chelyabinsk", x: 36, y: 54 },
  { className: "mark-novosibirsk", title: "Новосибирск", href: "/rabota-strimerom-v-novosibirsk", x: 46, y: 62 },
  { className: "mark-krasnoyarsk", title: "Красноярск", href: "/rabota-strimerom-v-krasnoyarsk", x: 55, y: 58 },
  { className: "mark-irkutsk", title: "Иркутск", href: "/rabota-strimerom-v-irkutsk", x: 63, y: 67 },
  { className: "mark-khabarovsk", title: "Хабаровск", href: "/rabota-strimerom-v-khabarovsk", x: 82, y: 59 },
  { className: "mark-vladivostok", title: "Владивосток", href: "/rabota-strimerom-v-vladivostok", x: 86, y: 76 },
];

export default function RussiaMap() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="map" id="sities">
      <h2>Работаем по всей РФ</h2>
      <p className="map-note">На карте отмечены крупные города, но заявку можно оставить из любого региона России.</p>
      <div className="map-container">
        <Image src={map} alt="Карта городов Типми" priority={false} />
        {mapCities.map((city) => (
          <Link
            className={`map-marker ${city.className}`}
            href={city.href}
            key={city.title}
            style={{ "--marker-x": `${city.x}%`, "--marker-y": `${city.y}%` }}
          >
            <span>{city.title}</span>
            <i aria-hidden="true"></i>
          </Link>
        ))}
      </div>

      <div className="map-text-container">
        <div className="map-text-container-line">
          <h2 className="map-title">Не нашли свой город?</h2>
          <div className="map-text">
            <button className="first-text" type="button" onClick={() => setIsModalOpen(true)}>
              <span>Напишите нам</span>
              <small>Работаем по всей РФ: поможем начать работу из вашего города.</small>
            </button>
            <p className="second-text">Все зависит от тебя!</p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
