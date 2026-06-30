import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tipmestudio.ru";
const maxUrlsPerSitemap = 45000;

const citiesSource = await readFile(resolve(root, "src/data/seoCities.js"), "utf8");
const vacanciesSource = await readFile(resolve(root, "src/data/vacancies.js"), "utf8");
const slugPattern = /["']?slug["']?\s*:\s*"([^"]+)"/g;
const citySlugs = [...new Set([...citiesSource.matchAll(slugPattern)].map((match) => match[1]))];
const vacancySlugs = [...new Set([...vacanciesSource.matchAll(slugPattern)].map((match) => match[1]))];

let blogPaths = [];
const hasBlogRoute = await access(resolve(root, "src/app/blog")).then(() => true).catch(() => false);

if (hasBlogRoute) {
  const blogPostsSource = await readFile(resolve(root, "src/data/blogPosts.js"), "utf8").catch(() => "");

  if (blogPostsSource) {
    blogPaths = [...new Set([...blogPostsSource.matchAll(slugPattern)].map((match) => `/blog/${match[1]}`))];
  } else {
    const postsSource = await readFile(resolve(root, "src/data/posts.json"), "utf8").catch(() => "[]");

    try {
      const posts = JSON.parse(postsSource);
      blogPaths = posts.map((post) => post.slug).filter(Boolean).map((slug) => `/blog/${slug}`);
    } catch {
      blogPaths = [...new Set([...postsSource.matchAll(slugPattern)].map((match) => `/blog/${match[1]}`))];
    }
  }
}

const basePaths = [
  "/",
  "/kontakty",
  "/privacy",
  "/vakansii",
  ...(hasBlogRoute ? ["/blog"] : []),
  ...vacancySlugs.map((slug) => `/vakansii/${slug}`),
  ...blogPaths,
];

const cityPaths = citySlugs.map((slug) => `/rabota-strimerom-v-${slug}`);
const today = new Date().toISOString().slice(0, 10);
const urls = [...new Set([...basePaths, ...cityPaths])];

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const urlsetXml = (paths) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const priority = path === "/" ? "1.0" : path.startsWith("/rabota-strimerom-v-") ? "0.9" : "0.7";
    const changefreq = path === "/" ? "weekly" : "monthly";

    return `  <url>
    <loc>${escapeXml(siteUrl)}${escapeXml(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const sitemapIndexXml = (files) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files
  .map(
    (file) => `  <sitemap>
    <loc>${escapeXml(siteUrl)}/${file}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>
`;

const chunks = [];
for (let index = 0; index < urls.length; index += maxUrlsPerSitemap) {
  chunks.push(urls.slice(index, index + maxUrlsPerSitemap));
}

await mkdir(resolve(root, "public"), { recursive: true });

if (chunks.length === 1) {
  await writeFile(resolve(root, "public/sitemap.xml"), urlsetXml(urls), "utf8");
  console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);
} else {
  const sitemapFiles = chunks.map((_, index) => `sitemap-${index + 1}.xml`);

  await Promise.all(
    chunks.map((chunk, index) =>
      writeFile(resolve(root, "public", sitemapFiles[index]), urlsetXml(chunk), "utf8"),
    ),
  );

  await writeFile(resolve(root, "public/sitemap.xml"), sitemapIndexXml(sitemapFiles), "utf8");
  console.log(`Generated public/sitemap.xml index with ${sitemapFiles.length} sitemaps and ${urls.length} URLs.`);
}
