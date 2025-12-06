"use client"
import Modal from '../AdminModal/index';
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
                <div className="admin-block"></div>
            </div>
            <div className='text'>
                <h1>Работа <br></br> администратором</h1>
                <h1>В твоем городе</h1>
                <p>Работай администратором <br></br> вебкам-студии</p>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <div className="text-mobile">
             <h1>Работа администратором</h1>
                <h1>В твоем городе</h1>
                <p>Работай администратором вебкам-студии</p>
                <button className='firstblock-button' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
    
            </Modal>    
            <div className='slider'>
                <Image className="admin-image" src={image1} alt='image1'/>
            </div>
            <div className='slider-mobile'>
                <Image className="admin-image-mobile" src={image1} alt='image1'/>
            </div>
        </div>
    )
}

export default Hero