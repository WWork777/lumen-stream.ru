import Link from "next/link";
import Image from "next/image";
import MainForm from "../mainComponents/MainForm";
import { PageHero } from "../MarketingPages/MarketingPages";
import { brand, SITE_URL } from "../../src/data/seoCities";
import { blogCategories, blogPosts, getBlogPath, getRelatedBlogPosts } from "../../src/data/blogPosts";
import "./style.scss";

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-top">
        <span>{post.category}</span>
        <time dateTime={post.publishedAt}>{post.readingTime}</time>
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={getBlogPath(post)}>Читать статью</Link>
    </article>
  );
}

function ArticleJsonLd({ post }) {
  const faq = post.faq?.length
    ? {
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        "@type": "Organization",
        name: brand.name,
      },
      publisher: {
        "@type": "Organization",
        name: brand.name,
      },
      mainEntityOfPage: `${SITE_URL}${getBlogPath(post)}`,
      inLanguage: "ru-RU",
      keywords: post.keywords.join(", "),
    },
    faq,
  ].filter(Boolean);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function BlogIndexPage() {
  return (
    <main className="page-main blog-main">
      <PageHero
        eyebrow="Блог"
        title="Блог Типми о работе в стриминге"
        text="Разбираем вебкам работу, вакансии без опыта, удаленный формат, доход, безопасность и роли в команде простым языком."
        image="/blog/14.webp"
        className="page-hero--blog-index"
        actions={[
          { href: "#blog-posts", label: "Читать статьи" },
          { href: "#form", label: "Оставить заявку" },
        ]}
      />


      <section className="blog-grid" id="blog-posts" aria-label="Статьи блога">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>

      <section className="blog-link-panel">
        <div>
          <h2>Не знаете, какая роль подходит?</h2>
          <p>
            Можно начать с короткой консультации: менеджер объяснит вакансии, формат работы,
            обучение и безопасный старт.
          </p>
        </div>
        <Link href="/vakansii">Смотреть вакансии</Link>
      </section>

      <MainForm page="Блог" title="Получить консультацию" />
    </main>
  );
}

export function BlogArticlePage({ post }) {
  const relatedPosts = getRelatedBlogPosts(post);

  return (
    <main className="page-main blog-main">
      <ArticleJsonLd post={post} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        text={post.description}
        image={post.heroImage}
        className="page-hero--blog-article"
        actions={[
          { href: "#form", label: "Оставить заявку" },
          { href: "/blog", label: "Все статьи" },
        ]}
      />

      <section className="blog-article-layout">
        <article className="blog-article">
          <div className="blog-article-meta">
            <time dateTime={post.publishedAt}>Обновлено {post.publishedAt.split("-").reverse().join(".")}</time>
            <span>{post.readingTime}</span>
          </div>

          <p className="blog-lead">{post.intro}</p>

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length > 0 && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {post.faq?.length > 0 && (
            <section className="blog-faq">
              <h2>Частые вопросы</h2>
              {post.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          )}
        </article>

        <aside className="blog-aside">
          <div className="blog-aside-block blog-aside-cta">
            <h2>Подобрать вакансию</h2>
            <p>Напишите менеджеру, если хотите понять, какой формат подойдет по опыту и графику.</p>
            <a href={brand.telegram}>Telegram</a>
          </div>

          {relatedPosts.length > 0 && (
            <div className="blog-aside-block">
              <h2>Похожие статьи</h2>
              <nav aria-label="Похожие статьи">
                {relatedPosts.map((relatedPost) => (
                  <Link href={getBlogPath(relatedPost)} key={relatedPost.slug}>
                    {relatedPost.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </aside>
      </section>

      <MainForm
        page={`Блог: ${post.title}`}
        title="Обсудить работу"
        subtitle="Оставьте контакты, и менеджер расскажет про вакансии, обучение и безопасный старт."
      />
    </main>
  );
}
