"use client";

import "./style.scss";
import { useState } from "react";
import Image from "next/image";
import Modal from "../../Modal";
import Link from "next/link";

const cards = [
  { text: "Работа удаленно или в студии", icon: "/Home/Hero/1.svg" },
  { text: "Обучение и поддержка команды", icon: "/Home/Hero/2.svg" },
  { text: "Гибкий график под ваш ритм", icon: "/Home/Hero/3.svg" },
  { text: "Помощь с образом и стартом", icon: "/Home/Hero/4.svg" },
];

export default function FirstBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="firstblock">
      <Image
        src="/Home/Hero/hero3.webp"
        width={1920}
        height={1080}
        priority
        alt="Работа стримером в Типми"
      />
      <div className="hero-content">
        <div className="text">
          <h1>
            Работа
            <br />
            стримером
          </h1>
          <p>
            Получайте от <span>1000$</span> в месяц
          </p>
          <div className="hero-actions">
            <button className="firstblock-button" onClick={() => setIsModalOpen(true)}>
              Связаться с нами
            </button>
            <Link className="firstblock-link" href="/vakansii">
              Смотреть вакансии
            </Link>
          </div>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.text}>
              <p>{card.text}</p>
              <Image src={card.icon} width={180} height={100} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
