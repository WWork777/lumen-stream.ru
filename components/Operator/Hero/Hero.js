"use client"
import Modal from "../OperatorModal/index";
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
                <div className="operator-block"></div>
            </div>
            <div className='text'>
                <h1>Работа <br></br> оператором</h1>
                <h1>В твоем городе</h1>
                <p>Работай оператором <br></br> веб-студии</p>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <div className="text-mobile">
             <h1>Работа оператором</h1>
                <h1>В твоем городе</h1>
                <p>Работай оператором веб-студии</p>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
    
            </Modal>    
            <div className='slider'>
                <Image className="operator-image" src={image1} alt='image1'/>
            </div>
            <div className='slider-mobile'>
                <Image className="operator-mobile-image" src={image1} alt='image1'/>
            </div>
        </div>
    )
}

export default Hero