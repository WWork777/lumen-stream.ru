import { BlogIndexPage } from "../../../components/BlogPages/BlogPages";
import { brand, SITE_URL } from "../../data/seoCities";
import { blogSeoKeywords } from "../../data/blogPosts";

export const metadata = {
  title: `Блог о вебкам работе, стриминге и вакансиях 18+ | ${brand.name}`,
  description:
    "Блог Типми: вебкам работа, работа стримером, оператор чата удаленно, вакансии для девушек без опыта, доход, обучение и безопасность.",
  keywords: blogSeoKeywords,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Блог ${brand.name} о работе в стриминге`,
    description:
      "Материалы для девушек 18+ и кандидатов в команду: вакансии, удаленная работа, обучение, доход и безопасность.",
    url: `${SITE_URL}/blog`,
    siteName: brand.name,
    locale: "ru_RU",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogIndexPage />;
}
