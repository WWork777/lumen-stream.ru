"use client";

import Link from "next/link";

export default function OffcanvasHeader() {
  const closeMenu = async () => {
    const { Offcanvas } = await import("bootstrap");
    const offcanvasElement = document.getElementById("offcanvasRight");
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance?.hide();
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="false"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
      </div>
      <div className="offcanvas-body">
        <nav className="menu" aria-label="Мобильная навигация">
          <Link href="/" className="logo-container" onClick={closeMenu}>
            <span className="logo-mark">T</span>
            <span className="brand-name">Типми</span>
          </Link>
          <Link href="/vakansii" onClick={closeMenu}>Вакансии</Link>
          <Link href="/#sities" onClick={closeMenu}>Города</Link>
          <Link href="/#form" onClick={closeMenu}>Анкета</Link>
          <Link href="/kontakty" onClick={closeMenu}>Контакты</Link>
          <div className="footer-contacts">
            <div className="links">
              <a href="https://t.me/tipmestudio">TG</a>
              <a href="https://api.whatsapp.com/send/?phone=79951621740">WA</a>
            </div>
            <a href="tel:+79951621740">+7 (995) 162-17-40</a>
            <a href="mailto:studiotimpe@gmail.com">studiotimpe@gmail.com</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
