"use client";

import Modal from "../../Modal";
import "./Step.scss";
import { useState } from "react";

export default function Step() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="step">
        <h2>Первый шаг к доходу в онлайн-стриминге</h2>
        <p>
          Оставьте заявку или напишите нам в мессенджер. Мы расскажем о формате,
          подберем вакансию и объясним, как безопасно начать.
        </p>
        <button onClick={() => setIsModalOpen(true)}>Написать нам</button>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
