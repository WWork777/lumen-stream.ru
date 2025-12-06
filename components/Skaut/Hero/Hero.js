"use client"
import Modal from "../SkautModal/index";
import React, { useState } from 'react';
import Image from "next/image";
import './style.scss';
import image1 from './image1.png';
import '../../mainComponents/HeroBlock/style.scss';
const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="firstblock">
            <div className='circle-container'>
                <div className='circle circle-large'></div>
                <div className='circle circle-medium'></div>
                <div className='circle circle-small'></div>
                <div className="skaut-block"></div>
            </div>
            <div className='text'>
                <h1>Работа скаутом <br></br> вебкам-моделей</h1>
                <h1>В твоем городе</h1>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <div className="text-mobile">
             <h1>Работа скаутом вебкам-моделей</h1>
                <h1>В твоем городе</h1>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
    
            </Modal>    
            <div className='slider'>
                <Image className="skaut-image" src={image1} alt='image1'/>
            </div>
            <div className='slider-mobile'>
                <Image className="skaut-image-mobile" src={image1} alt='image1'/>
            </div>
        </div>
    )
}

export default Hero