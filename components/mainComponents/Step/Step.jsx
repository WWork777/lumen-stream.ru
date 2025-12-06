"use client";

import Modal from "../../Modal";
import "./Step.scss";
import { useState } from "react";
import Link from "next/link";

export default function Step() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="step">
        <h2>Твой первый шаг к высоким доходам</h2>
        <p>
          Расскажите о себе с помощью небольшой анкеты или напишите нам в любой
          мессенджер, и мы подберем для вас наилучшие условия работы.
        </p>
        <button onClick={openModal}>Написать нам</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
