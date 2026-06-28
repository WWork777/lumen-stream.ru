import { notFound } from "next/navigation";
import { VacancyDetail } from "../../../../components/MarketingPages/MarketingPages";
import { brand, SITE_URL } from "../../../data/seoCities";
import { vacancySeoKeywords } from "../../../data/seoSemantics";
import { getVacancyBySlug, getVacancyPath, vacancies } from "../../../data/vacancies";

export function generateStaticParams() {
  return vacancies.map((vacancy) => ({ vacancy: vacancy.slug }));
}

export async function generateMetadata({ params }) {
  const { vacancy: slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) return {};

  return {
    title: vacancy.seoTitle,
    description: vacancy.seoDescription,
    keywords: vacancySeoKeywords[vacancy.slug] ?? [],
    alternates: {
      canonical: `${SITE_URL}${getVacancyPath(vacancy)}`,
    },
    openGraph: {
      title: vacancy.seoTitle,
      description: vacancy.seoDescription,
      url: `${SITE_URL}${getVacancyPath(vacancy)}`,
      siteName: brand.name,
      locale: "ru_RU",
      type: "website",
    },
  };
}

export default async function VacancyPage({ params }) {
  const { vacancy: slug } = await params;
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) notFound();

  return <VacancyDetail vacancy={vacancy} />;
}
