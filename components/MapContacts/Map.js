'use client';
import React, { useState, useRef } from "react";
import './style.scss'
import Image from 'next/image'  
import map from './map3.png'
import Modal from '../Modal/index';

const MapContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    
    <div className="map-contacts" style={{ width: '100%'}} id="sities">  
        <h1 className="map-h1">Города в которых мы <span>работаем</span></h1>
        <div className="map-container" style={{width: '76%', marginLeft: '12%', marginTop: '5%', marginRight: '12%'}}>
            <Image src={map} alt='map'></Image>
            <div className="mark-sochi">
                <h2>СОЧИ</h2>
                <div className="dot mark-sochi-dot"></div>
            </div>
            <div className="mark-kalinograd">
                <h2>КАЛИНИНГРАД</h2>
                <div className="dot mark-kalinograd-dot"></div>
            </div>
            <div className="mark-kazan">
                <h2>КАЗАНЬ</h2>
                <div className="dot mark-kazan-dot"></div>
            </div>
            <div className="mark-kemerovo">
                <h2>КЕМЕРОВО</h2>
                <div className="dot mark-kemerovo-dot"></div>
            </div>
            <div className="mark-novosib">
                <h2>НОВОСИБИРСК</h2>
                <div className="dot mark-novosib-dot"></div>
            </div>
            <div className="mark-ekb">
                <h2>ЕКАТЕРИНБУРГ</h2>
                <div className="dot mark-ekb-dot"></div>
            </div>
            <div className="mark-vladivostok">
                <h2>ВЛАДИВОСТОК</h2>
                <div className="dot mark-vladivostok-dot"></div>
            </div>
        </div>
        <h2 className="map-text">Не нашли своего города? <br></br>Оставьте <span onClick={openModal}>заявку</span> и мы поможем вам начать работу из вашего города</h2>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
    
      </Modal>
    </div>
  );
};

export default MapContacts;
