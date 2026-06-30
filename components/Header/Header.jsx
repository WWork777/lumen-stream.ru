"use client";

import "./Header.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import OffcanvasHeader from "../OffcanvasHeader/OffcanvasHeader";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleOpenOffcanvas = async () => {
    const { Offcanvas } = await import("bootstrap");
    const offcanvasElement = document.getElementById("offcanvasRight");
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement) || new Offcanvas(offcanvasElement);
    offcanvasInstance.show();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsDark(currentScrollTop > 80);
      setIsFixed(currentScrollTop <= lastScrollTop || currentScrollTop < 80);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header className={`all-header ${isFixed ? "" : "translate"}`}>
        <Link href="/" className="logo-container" aria-label="Типми">
          <span className="logo-mark">T</span>
          <span className="brand-name">Типми</span>
        </Link>

        <div className={`menu-header ${isDark ? "dark" : ""}`}>
          <nav className="menu" aria-label="Основная навигация">
            <Link href="/vakansii">Вакансии</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/#sities">Города</Link>
            <Link href="/#form">Анкета</Link>
            <Link href="/kontakty">Контакты</Link>
          </nav>

          <div className="menu icons">
            <a href="tel:+79952266917">+7 (995) 226-69-17</a>
            <a href="https://t.me/tipmestudio" aria-label="Telegram">TG</a>
            <a href="https://api.whatsapp.com/send/?phone=79952266917" aria-label="WhatsApp">WA</a>
          </div>

          <button id="btn-menu" className="btn-menu" type="button" onClick={handleOpenOffcanvas} aria-label="Открыть меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <OffcanvasHeader />
    </>
  );
}
