import Advantages from "../../components/mainComponents/Advantages/Advantages";
import HeroBlock from "../../components/mainComponents/HeroBlock/FirstBlock";
import MainForm from "../../components/mainComponents/MainForm";
import MapComponent from "../../components/mainComponents/Map";
import Questions from "../../components/mainComponents/Questions/Questions";
import Quiz from "../../components/mainComponents/quiz/quiz";
import Reviews from "../../components/mainComponents/Reviews/Reviews";
import Sochi from "../../components/mainComponents/Sochi";
import Step from "../../components/mainComponents/Step/Step";
import Technic from "../../components/mainComponents/Technic/Technic";
import Vacancy from "../../components/mainComponents/Vacancy/Vacancy";

export const metadata = {
  title: "Работа стримером на дому с Lumen Studio",
  description:
    "Работа стримером на дому с Lumen Studio. Присоединяйтесь к нашей платформе, получайте обучение и стабильный доход.",
  keywords:
    "работа стримером на дому без опыта, заработок стримером на дому, заработок для девушек в интернете, заработок для девушек в онлайн-работе,работа стримером в Lumen Studio, Работа стримером на дому, Заработок для девушек, Работа на дому для девушек, Веб модель Lumen Studio, онлайн-модель, удаленная модель, работа в видеочате,работа на дому, работа в интернете, вакансии для девушек,работа стримером с обучением,Как стать стримером на дому и зарабатывать деньги,Заработок стримером на платформе Lumen Studio,Работа для девушек моделью на дому без опыта",
  openGraph: {
    title: "Lumen Studio",
    description:
      "Работа стримером на дому с Lumen Studio. Присоединяйтесь к нашей платформе, получайте обучение и стабильный доход.",
    url: "https://lumen-stream.ru",
    images: [
      {
        url: "/logo.svg",
        width: 630,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://lumen-stream.ru",
  },
};
export default function Home() {
  return (
    <>
      <HeroBlock />
      <Step />
      <Quiz />
      <Sochi />
      <Advantages />
      <MapComponent />
      <Vacancy />
      <Technic />
      <Reviews />
      <Questions />
      <MainForm />
    </>
  );
}
