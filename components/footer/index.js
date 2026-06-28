import "./style.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          <span>T</span>
          <strong>Типми</strong>
        </Link>
        <nav>
          <Link href="/vakansii">Вакансии</Link>
          <Link href="/#sities">Города</Link>
          <Link href="/#form">Анкета</Link>
          <Link href="/kontakty">Контакты</Link>
        </nav>
      </div>

      <div className="footer-center">
        <div className="footer-center-left">
          <a href="tel:+79951621740">+7 (995) 162-17-40</a>
          <a href="mailto:studiotimpe@gmail.com">studiotimpe@gmail.com</a>
          <span>Работаем с заявками из городов России</span>
        </div>
        <div className="links">
          <Link href="https://t.me/tipmestudio">Telegram</Link>
          <Link href="https://api.whatsapp.com/send/?phone=79951621740">WhatsApp</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <Link href="/privacy">Политика конфиденциальности</Link>
        <p>© 2026 Типми</p>
      </div>
    </footer>
  );
}
