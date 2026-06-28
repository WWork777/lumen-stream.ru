'use client'
import './style.scss'
import React, { useState } from 'react';
import Modal from "../SochiModal/index";
const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="firstblock-sochi">
            <div className='circle-container-sochi'>
                <div className='circle circle-large-sochi'></div>
                <div className='circle circle-medium-sochi'></div>
                <div className='circle circle-small-sochi'></div>
            </div>
            <div className='text-sochi'>
                <h1><span>Типми</span><br></br> Открылась в Сочи!</h1>
                <p>Самая заботливая студия России теперь <br></br> и в вашем городе! Комфорт, доверие<br></br> и поддержка для каждой модели.</p>
                <button className='firstblock-button-sochi' onClick={openModal}>МНЕ ИНТЕРЕСНО</button>
            </div>
            <div className='sochi-heroimage'>
                <div className='sochi-heroimage-top'>
                    <div className='sochi-heroimage-top-left'>
                        <p>Это город,<br></br> где сбываются<br></br> мечты,<br></br> а <span>Типми</span><br></br> помогает<br></br> им стать<br></br> реальностью</p>    
                    </div>
                    <div className='sochi-heroimage-top-right'></div>
                </div>
                <div className='sochi-heroimage-bottom'>

                </div>
            </div>
            <div className="text-mobile">
             <h1><span>Типми</span><br></br> Открылась в Сочи!</h1>
             <p>Самая заботливая студия России теперь <br></br> и в вашем городе! Комфорт, доверие<br></br> и поддержка для каждой модели.</p>
                <button className='firstblock-button-sohci-mobile' onClick={openModal}>СВЯЗАТЬСЯ</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
    
            </Modal>    
        </div>
    )
}

export default Hero