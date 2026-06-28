import { VacanciesIndex } from "../../../components/MarketingPages/MarketingPages";
import { brand, SITE_URL } from "../../data/seoCities";
import { homepageSeoKeywords } from "../../data/seoSemantics";

export const metadata = {
  title: `Вебкам вакансии для девушек 18+ | Стример, оператор чата, скаут — ${brand.name}`,
  description:
    "Вакансии Типми: работа вебкам и стримером, оператор чата удаленно, оператор-переводчик, администратор вебкам-студии, модельный скаут и рекрутер удаленно.",
  keywords: homepageSeoKeywords,
  alternates: {
    canonical: `${SITE_URL}/vakansii`,
  },
  openGraph: {
    title: `Вебкам вакансии ${brand.name} для девушек и команды`,
    description:
      "Работа стримером, оператором-переводчиком, администратором или скаутом. Поддержка, обучение и понятные условия.",
    url: `${SITE_URL}/vakansii`,
    siteName: brand.name,
    locale: "ru_RU",
    type: "website",
  },
};

export default function VacanciesPage() {
  return <VacanciesIndex />;
}
