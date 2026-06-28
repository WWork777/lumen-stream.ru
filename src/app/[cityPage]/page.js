import { notFound } from "next/navigation";
import SeoCityLanding from "../../../components/SeoCityLanding/SeoCityLanding";
import { brand, getCityBySlug, getCityPath, seoCities, seoKeywords, SITE_URL } from "../../data/seoCities";
import { citySeoKeywords } from "../../data/seoSemantics";

const CITY_PAGE_PREFIX = "rabota-strimerom-v-";

const getSlugFromParam = (value) => {
  if (!value?.startsWith(CITY_PAGE_PREFIX)) {
    return null;
  }

  return value.slice(CITY_PAGE_PREFIX.length);
};

const getCityText = (city) => ({
  name: city.name,
});

export function generateStaticParams() {
  return seoCities.map((city) => ({ cityPage: `${CITY_PAGE_PREFIX}${city.slug}` }));
}

export async function generateMetadata({ params }) {
  const { cityPage } = await params;
  const slug = getSlugFromParam(cityPage);
  const city = slug ? getCityBySlug(slug) : null;

  if (!city) {
    return {};
  }

  const cityText = getCityText(city);
  const title = `Работа стримером для девушек — ${cityText.name} | ${brand.name}`;
  const description = `Работа стримером и вебкам моделью для девушек: ${cityText.name}. Обучение с нуля, удаленный формат или студия, гибкий график, поддержка 18+ и понятные выплаты.`;
  const url = `${SITE_URL}${getCityPath(city)}`;

  return {
    title,
    description,
    keywords: [
      ...citySeoKeywords.map((keyword) => `${keyword} ${cityText.name}`),
      `работа для девушек ${cityText.name}`,
      ...seoKeywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "/Home/Hero/hero3.webp",
          width: 1200,
          height: 630,
          alt: `Работа стримером для девушек: ${cityText.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CityPage({ params }) {
  const { cityPage } = await params;
  const slug = getSlugFromParam(cityPage);
  const city = slug ? getCityBySlug(slug) : null;

  if (!city) {
    notFound();
  }

  const cityText = getCityText(city);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: brand.name,
        alternateName: brand.latinName,
        url: SITE_URL,
        telephone: brand.phone,
      },
      {
        "@type": "JobPosting",
        title: `Работа стримером для девушек: ${cityText.name}`,
        description: `Вакансия стримера для девушек 18+: ${cityText.name}. Обучение с нуля, гибкий график, удаленная работа или студия, поддержка команды ${brand.name}.`,
        employmentType: ["CONTRACTOR", "PART_TIME"],
        hiringOrganization: {
          "@type": "Organization",
          name: brand.name,
          sameAs: SITE_URL,
        },
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "Россия",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Можно ли работать стримером из дома: ${cityText.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Да, удаленный формат возможен при наличии подходящей техники, стабильного интернета и комфортного рабочего места.",
            },
          },
          {
            "@type": "Question",
            name: "Нужен ли опыт для старта?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Опыт не обязателен. Команда помогает с обучением, настройкой профиля, образом, техникой и первыми эфирами.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoCityLanding city={city} />
    </>
  );
}
