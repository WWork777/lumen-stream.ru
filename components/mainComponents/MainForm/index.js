"use client";

import "./style.scss";
import { useState } from "react";
import ConsentCheckbox from "../../ConsentCheckbox";

const initialData = {
  name: "",
  city: "",
  phone: "",
  telegramNick: "",
  vkid: "",
  contactMethod: "telegram",
  privacyAccepted: false,
};

export default function MainForm({
  page = "Главная страница",
  title = "Заполнение анкеты",
  subtitle = "Расскажите немного о себе, и менеджер Типми свяжется с вами в удобном канале.",
}) {
  const [activeButton, setActiveButton] = useState("telegram");
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const nextErrors = {};
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
    const cityRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
    const phoneRegex =
      /^(?:8|\+7)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    const nickRegex = /^@?[A-Za-z0-9_]+$/;

    if (!formData.name.trim()) nextErrors.name = "Введите имя";
    else if (!nameRegex.test(formData.name)) nextErrors.name = "Имя может содержать только буквы, пробелы и дефис";

    if (!formData.city.trim()) nextErrors.city = "Введите город";
    else if (!cityRegex.test(formData.city)) nextErrors.city = "Город может содержать только буквы, пробелы и дефис";

    if (!formData.phone.trim()) nextErrors.phone = "Введите телефон";
    else if (!phoneRegex.test(formData.phone)) nextErrors.phone = "Укажите телефон в формате +7 999 123-45-67";

    if (activeButton === "telegram" && formData.telegramNick && !nickRegex.test(formData.telegramNick)) {
      nextErrors.telegramNick = "Ник Telegram может содержать буквы, цифры и подчеркивание";
    }

    if (activeButton === "vk" && formData.vkid && !nickRegex.test(formData.vkid)) {
      nextErrors.vkid = "VK ID может содержать буквы, цифры и подчеркивание";
    }

    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted = "Подтвердите согласие на обработку персональных данных";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    const payload = {
      ...formData,
      contactMethod: activeButton,
      telegramNick: activeButton === "telegram" ? formData.telegramNick : "",
      vkid: activeButton === "vk" ? formData.vkid : "",
      page,
    };

    try {
      setIsSending(true);
      const response = await fetch("/api/sendmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Ошибка отправки");
      }

      setStatus("Заявка отправлена. Мы скоро свяжемся с вами.");
      setFormData(initialData);
      setActiveButton("telegram");
    } catch (error) {
      setStatus("Не удалось отправить форму. Напишите нам в Telegram или WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <section className="main-form" id="form">
      <h2>{title}</h2>
      <p className="main-form-text">{subtitle}</p>

      <form className="main-form-form" onSubmit={handleSubmit}>
        <label>
          <span>Имя</span>
          <input
            type="text"
            placeholder="Анна"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          {errors.name && <small>{errors.name}</small>}
        </label>

        <label>
          <span>Город</span>
          <input
            type="text"
            placeholder="Москва"
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
          {errors.city && <small>{errors.city}</small>}
        </label>

        <label>
          <span>Телефон</span>
          <input
            type="tel"
            placeholder="+7 999 123-45-67"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </label>

        <div className="main-form-toggle" role="group" aria-label="Канал связи">
          <p>Где вам написать?</p>
          {["telegram", "whatsapp", "vk"].map((method) => (
            <button
              type="button"
              key={method}
              onClick={() => setActiveButton(method)}
              className={activeButton === method ? "active" : ""}
            >
              {method === "telegram" ? "Telegram" : method === "whatsapp" ? "WhatsApp" : "VK"}
            </button>
          ))}
        </div>

        {activeButton === "telegram" && (
          <label>
            <span>Ник в Telegram</span>
            <input
              type="text"
              placeholder="@username"
              value={formData.telegramNick}
              onChange={(event) => updateField("telegramNick", event.target.value)}
            />
            {errors.telegramNick && <small>{errors.telegramNick}</small>}
          </label>
        )}

        {activeButton === "vk" && (
          <label>
            <span>VK ID</span>
            <input
              type="text"
              placeholder="id или ник"
              value={formData.vkid}
              onChange={(event) => updateField("vkid", event.target.value)}
            />
            {errors.vkid && <small>{errors.vkid}</small>}
          </label>
        )}

        <ConsentCheckbox
          checked={formData.privacyAccepted}
          onChange={(value) => updateField("privacyAccepted", value)}
          error={errors.privacyAccepted}
        />

        <button type="submit" className="main-form-send" disabled={isSending}>
          {isSending ? "Отправляем..." : "Отправить заявку"}
        </button>

        {status && <p className="main-form-status">{status}</p>}
      </form>
    </section>
  );
}
