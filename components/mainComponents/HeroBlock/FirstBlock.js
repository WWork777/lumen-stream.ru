"use client";
import "./style.scss";
import { useState } from "react";
import Image from "next/image";
import Modal from "../../Modal";
import Link from "next/link";

const FirstBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="firstblock">
      <Image
        src="/Home/Hero/hero3.webp"
        width={1920}
        height={1080}
        alt="Работа стримером в Типми студио"
      />
      <div className="hero-content">
        <div className="text">
          <h1>
            Работа<br></br>стримером
          </h1>
          <p>
            Получайте от&nbsp;&nbsp;<span>1000$</span>&nbsp;&nbsp;в&nbsp;месяц
          </p>
          <button className="firstblock-button" onClick={openModal}>
            Связаться с нами
          </button>
        </div>
        <div className="cards">
          <div className="card">
            <p>Работа удаленно или на&nbsp;студии</p>
            <Image
              src="/Home/Hero/1.svg"
              width={180}
              height={100}
              alt="Карточка1"
            />
          </div>
          <div className="card">
            <p>Постоянное обучение и&nbsp;поддежка</p>
            <Image
              src="/Home/Hero/2.svg"
              width={180}
              height={100}
              alt="Карточка1"
            />
          </div>
          <div className="card">
            <p>Удобный график работы</p>
            <Image
              src="/Home/Hero/3.svg"
              width={180}
              height={100}
              alt="Карточка1"
            />
          </div>
          <div className="card">
            <p>Создание личного образа</p>
            <Image
              src="/Home/Hero/4.svg"
              width={180}
              height={100}
              alt="Карточка1"
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </div>
  );
};

export default FirstBlock;
