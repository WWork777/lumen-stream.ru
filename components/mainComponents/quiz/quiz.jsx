"use client";
import { useState, useEffect } from "react";
import styles from "./quiz.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    experience: "",
    location: "",
    city: "",
    hours: 0,
    income: 0,
    name: "",
    telegram: "@",
    privacyAccepted: false,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const questions = [
    {
      title: "Был ли опыт работы?",
      type: "radio",
      name: "experience",
      options: [
        {
          value: "Да, я работала вебкам моделью",
          label: "Да, я работала вебкам моделью",
        },
        {
          value: "Нет, но имею опыт в нестандартных условиях",
          label: "Нет, но имею опыт в нестандартных условиях",
        },
        {
          value: "Опыта нет, но хочу попробовать",
          label: "Опыта нет, но хочу попробовать",
        },
      ],
    },
    {
      title: "Откуда хочешь работать?",
      type: "radio",
      name: "location",
      options: [
        { value: "Из дома", label: "Из дома" },
        { value: "Со студии", label: "Со студии" },
      ],
    },
    {
      title: "Из какого ты города?",
      type: "text",
      name: "city",
      placeholder: "Введите ваш город",
    },
    {
      title: "На какой доход хочешь выйти?",
      type: "income",
      name: "hours",
      label: "Сколько часов в неделю готова работать?",
      placeholder: "Часы в неделю",
    },
  ];

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "hours" ? +value : value,
      income: name === "hours" ? +value * 15 : prev.income,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnimating(true);

    try {
      await fetch("/api/sendQuiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (typeof ym !== "undefined") {
        ym(99528524, "reachGoal", "Quiz");
      }

      setTimeout(() => {
        setStep(6);
        setIsAnimating(false);
      }, 300);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setIsAnimating(false);
    }
  };

  const renderQuestion = () => {
    if (step === 0) return null;
    const question = questions[step - 1];

    return (
      <div
        className={`${styles.question} ${
          isAnimating ? styles.fadeOut : styles.fadeIn
        }`}
      >
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${(step / (questions.length + 1)) * 100}%` }}
          ></div>
          <span>
            Шаг {step} из {questions.length + 1}
          </span>
        </div>

        <h2>{question.title}</h2>

        {question.type === "radio" && (
          <div className={styles.options}>
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`${styles.option} ${
                  formData[question.name] === option.value ? styles.active : ""
                }`}
              >
                <input
                  type="radio"
                  name={question.name}
                  value={option.value}
                  checked={formData[question.name] === option.value}
                  onChange={handleChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}

        {question.type === "text" && (
          <input
            type="text"
            name={question.name}
            value={formData[question.name]}
            onChange={handleChange}
            placeholder={question.placeholder}
            className={styles.textInput}
          />
        )}

        {question.type === "income" && (
          <>
            <label>{question.label}</label>
            <div className={styles.rangeContainer}>
              <input
                type="range"
                name={question.name}
                min="0"
                max="40"
                value={formData[question.name]}
                onChange={handleChange}
                className={styles.rangeInput}
              />
              <div className={styles.rangeValues}>
                <span>0</span>
                <span className={styles.selectedValue}>
                  {formData.hours} часов
                </span>
                <span>40</span>
              </div>
            </div>
            <div className={styles.incomePreview}>
              Примерный доход: <span>${formData.hours * 15}</span> в неделю
            </div>
          </>
        )}

        <div className={styles.navigation}>
          <button
            onClick={handleBack}
            className={styles.backButton}
            disabled={step === 0}
          >
            Назад
          </button>
          <button
            onClick={handleNext}
            className={styles.nextButton}
            disabled={
              (step === 1 && !formData.experience) ||
              (step === 2 && !formData.location) ||
              (step === 3 && !formData.city)
            }
          >
            {step === questions.length ? "Продолжить" : "Далее"}
          </button>
        </div>
      </div>
    );
  };

  const renderFinalForm = () => (
    <form
      onSubmit={handleSubmit}
      className={`${styles.finalForm} ${
        isAnimating ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <h2 className={styles.formTitle}>Заполните контактные данные</h2>
      <p className={styles.formDescription}>
        Мы свяжемся с вами в ближайшее время
      </p>

      <div className={styles.inputGroup}>
        <label>Ваше имя</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Как к вам обращаться?"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Telegram</label>
        <input
          type="text"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
          placeholder="@username"
          required
        />
      </div>

      <label className={styles.consent}>
        <input
          type="checkbox"
          name="privacyAccepted"
          checked={formData.privacyAccepted}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              privacyAccepted: event.target.checked,
            }))
          }
          required
        />
        <span>
          Я согласна на обработку персональных данных и принимаю{" "}
          <Link href="/privacy" target="_blank">политику конфиденциальности</Link>.
        </span>
      </label>

      <div className={styles.navigation}>
        <button
          type="button"
          onClick={handleBack}
          className={styles.backButton}
        >
          Назад
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!formData.privacyAccepted}
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );

  const renderSuccess = () => (
    <div className={styles.successScreen}>
      <div className={styles.checkmark}>✓</div>
      <h2 className={styles.successTitle}>Спасибо за заявку!</h2>
      <p className={styles.successText}>
        Мы уже обрабатываем ваши данные и скоро свяжемся с вами в Telegram
      </p>
    </div>
  );

  return (
    <div className={styles.container}>
      {step === 0 && (
        <div
          className={`${styles.welcomeScreen} ${
            isAnimating ? styles.fadeOut : styles.fadeIn
          }`}
        >
          <div className={styles.welcomeContent}>
            <h1 className={styles.welcomeTitle}>
              Твой первый шаг к высоким доходам
            </h1>
            <p className={styles.welcomeText}>
              Ответь на несколько простых вопросов, и мы подберем для тебя
              наилучшие условия работы.
            </p>
            <button onClick={handleNext} className={styles.startButton}>
              Начать квиз
            </button>
          </div>
        </div>
      )}

      {step > 0 && step <= questions.length && renderQuestion()}
      {step === questions.length + 1 && renderFinalForm()}
      {step === 6 && renderSuccess()}
    </div>
  );
}
