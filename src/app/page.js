import Advantages from "../../components/mainComponents/Advantages/Advantages";
import HeroBlock from "../../components/mainComponents/HeroBlock/FirstBlock";
import MainForm from "../../components/mainComponents/MainForm";
import MapComponent from "../../components/mainComponents/Map";
import Questions from "../../components/mainComponents/Questions/Questions";
import Quiz from "../../components/mainComponents/quiz/quiz";
import Reviews from "../../components/mainComponents/Reviews/Reviews";
import Step from "../../components/mainComponents/Step/Step";
import Technic from "../../components/mainComponents/Technic/Technic";
import Vacancy from "../../components/mainComponents/Vacancy/Vacancy";
import { brand, SITE_URL } from "../data/seoCities";
import { homepageSeoKeywords } from "../data/seoSemantics";

export const metadata = {
  title: `Вебкам работа и вакансии стримера для девушек 18+ — ${brand.name}`,
  description:
    "Типми помогает девушкам 18+ начать вебкам работу или работу стримером: вакансии без опыта, обучение с нуля, удаленный формат или студия, гибкий график и понятные выплаты.",
  keywords: homepageSeoKeywords,
  openGraph: {
    title: `${brand.name} — вебкам вакансии, работа стримером и онлайн-работа для девушек`,
    description:
      "Вакансии для девушек 18+: стример, вебкам модель, оператор-переводчик, администратор и скаут. Обучение, поддержка и гибкий формат работы.",
    url: SITE_URL,
    siteName: brand.name,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/Home/Hero/hero3.webp",
        width: 1200,
        height: 630,
        alt: "Работа стримером для девушек в Типми",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <HeroBlock />
      <Step />
      <Quiz />
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
