import Image from "next/image";
import "./style.scss";
import Link from "next/link";

export default function Sochi() {
  return (
    <section id="sochi" className="sochi">
      <div className="sochi-text">
        <div>
          <h2 className="sochi-title-mian">Студия и поддержка в Сочи</h2>
          <div className="sochi-text-main">
            <p>
              Типми помогает девушкам из Сочи и других городов начать работу в
              стриминге: обучение, заботливая команда, понятные условия и помощь
              на первых этапах.
            </p>
          </div>
        </div>
        <Link className="link-more" href="/rabota-strimerom-v-sochi">
          Подробнее
        </Link>
      </div>
      <Image
        src="/Home/Sochi/sochi.jpg"
        width={630}
        height={450}
        alt="Работа стримером в Сочи"
      />
    </section>
  );
}
