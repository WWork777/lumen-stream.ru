"use client";
import React, { useState, useRef } from "react";
import "./style.scss";
import Image from "next/image";
import map from "./map3.png";
import Modal from "../../Modal";
import Link from "next/link";

const RussiaMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //   const [activeIndex, setActiveIndex] = useState(null);

  //   const handleToggle = (index) => {
  //     setActiveIndex(activeIndex === index ? null : index);
  //   };

  //   const handleClick = (index) => {
  //     setActiveIndex(index);
  //   };

  //   const items = [
  //     { title: 'Сочи', content: '' },
  //     { title: 'Калиниград', content: '' },
  //     { title: 'Казань', content: '' },
  //     { title: 'Екатеринбург', content: '' },
  //     { title: 'Новосибирск', content: '' },
  //     { title: 'Кемерово', content: '' },
  //     { title: 'Владивосток', content: '' }
  //   ];
  return (
    <div className="map" style={{ width: "100%" }} id="sities">
      <h2>Города в которых мы работаем</h2>
      <div
        className="map-container"
        style={{
          width: "76%",
          marginLeft: "12%",
          marginTop: "5%",
          marginRight: "12%",
        }}
      >
        <Image src={map} alt="map"></Image>
        <div className="mark-sochi">
          <h2>Сочи</h2>
          <div className="dot mark-sochi-dot"></div>
        </div>
        <div className="mark-kalinograd">
          <h2>Калининград</h2>
          <div className="dot mark-kalinograd-dot"></div>
        </div>
        <div className="mark-kazan">
          <h2>Казань</h2>
          <div className="dot mark-kazan-dot"></div>
        </div>
        <div className="mark-kemerovo">
          <h2>Кемерово</h2>
          <div className="dot mark-kemerovo-dot"></div>
        </div>
        <div className="mark-novosib">
          <h2>Новосибирск</h2>
          <div className="dot mark-novosib-dot"></div>
        </div>
        <div className="mark-ekb">
          <h2>Екатеринбург</h2>
          <div className="dot mark-ekb-dot"></div>
        </div>
        <div className="mark-vladivostok">
          <h2>Владивосток</h2>
          <div className="dot mark-vladivostok-dot"></div>
        </div>
      </div>
      {/* <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordionItem">
                <button
                    className="accordionHeader"
                    onClick={() => handleToggle(index)}
                >
                    {item.title}
                
                </button>
                {activeIndex === index && (
                    <div className="accordionBody">{item.content}</div>
                )}
                </div>
            ))}
        </div> */}
      <div className="map-text-container">
        <div className="map-text-container-line">
          <h2 className="map-title">Не нашли своего города?</h2>
          <div className="map-text">
            <p className="first-text" onClick={openModal}>
              <span>Напишите</span>
              нам
              <br></br>и&nbsp;мы поможем вам начать<br></br>работу
              из&nbsp;вашего города!
            </p>
            <p className="second-text">
              Всё зависит<br></br> от тебя!
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </div>
  );
};

export default RussiaMap;
