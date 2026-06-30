import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "src/data/seoCities.js");

const sourceUrl =
  "https://ru.wikipedia.org/w/api.php?action=parse&page=%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8&prop=text&format=json&origin=*";

const overrides = {
  "Москва|Москва": { slug: "moscow", prepositional: "Москве", genitive: "Москвы" },
  "Санкт-Петербург|Санкт-Петербург": {
    slug: "saint-petersburg",
    prepositional: "Санкт-Петербурге",
    genitive: "Санкт-Петербурга",
  },
  "Нижний Новгород|Нижегородская область": {
    slug: "nizhny-novgorod",
    prepositional: "Нижнем Новгороде",
    genitive: "Нижнего Новгорода",
  },
  "Ростов-на-Дону|Ростовская область": {
    slug: "rostov-on-don",
    prepositional: "Ростове-на-Дону",
    genitive: "Ростова-на-Дону",
  },
  "Набережные Челны|Татарстан": {
    slug: "naberezhnye-chelny",
    prepositional: "Набережных Челнах",
    genitive: "Набережных Челнов",
  },
  "Йошкар-Ола|Марий Эл": {
    slug: "yoshkar-ola",
    prepositional: "Йошкар-Оле",
    genitive: "Йошкар-Олы",
  },
};

const translitMap = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "yu",
  я: "ya",
  ъ: "",
  ь: "",
};

function translit(value) {
  return value
    .toLowerCase()
    .split("")
    .map((char) => translitMap[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function decode(text) {
  return text
    .replace(/&#(x?[0-9a-fA-F]+);/g, (_, raw) =>
      String.fromCharCode(parseInt(raw.replace(/^x/i, ""), raw.startsWith("x") || raw.startsWith("X") ? 16 : 10)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-");
}

function strip(html) {
  return decode(
    html
      .replace(/<sup[\s\S]*?<\/sup>/g, "")
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .replace(/<script[\s\S]*?<\/script>/g, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\[[^\]]*]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRows(table) {
  return [...table.matchAll(/<tr[\s\S]*?<\/tr>/g)]
    .slice(1)
    .map((row) => [...row[0].matchAll(/<t[dh][^>]*>[\s\S]*?<\/t[dh]>/g)].map((cell) => strip(cell[0])))
    .filter((cells) => /^\d+$/.test(cells[0] ?? ""))
    .map((cells) => ({ name: cells[2], region: cells[3] }))
    .filter((city) => city.name && city.region);
}

function replaceEnding(value, from, to) {
  return `${value.slice(0, -from.length)}${to}`;
}

function guessPrepositional(name) {
  if (/[ыиоеэю]$/i.test(name)) return name;
  if (/ий$/i.test(name)) return replaceEnding(name, "ий", "ом");
  if (/[оы]й$/i.test(name)) return replaceEnding(name, name.slice(-2), "ом");
  if (/ая$/i.test(name)) return replaceEnding(name, "ая", "ой");
  if (/яя$/i.test(name)) return replaceEnding(name, "яя", "ей");
  if (/а$/i.test(name)) return replaceEnding(name, "а", "е");
  if (/я$/i.test(name)) return replaceEnding(name, "я", "е");
  if (/ь$/i.test(name)) return replaceEnding(name, "ь", "и");
  return `${name}е`;
}

function guessGenitive(name) {
  if (/[ыиоеэю]$/i.test(name)) return name;
  if (/ий$/i.test(name)) return replaceEnding(name, "ий", "ого");
  if (/[оы]й$/i.test(name)) return replaceEnding(name, name.slice(-2), "ого");
  if (/ая$/i.test(name)) return replaceEnding(name, "ая", "ой");
  if (/яя$/i.test(name)) return replaceEnding(name, "яя", "ей");
  if (/[гкхжчшщ]а$/i.test(name)) return replaceEnding(name, "а", "и");
  if (/а$/i.test(name)) return replaceEnding(name, "а", "ы");
  if (/я$/i.test(name)) return replaceEnding(name, "я", "и");
  if (/ь$/i.test(name)) return replaceEnding(name, "ь", "и");
  return `${name}а`;
}

function uniqueSlug(baseSlug, region, used) {
  let slug = baseSlug || translit(region);

  if (!used.has(slug)) {
    used.add(slug);
    return slug;
  }

  const regionSlug = translit(region);
  slug = `${baseSlug}-${regionSlug}`;

  if (!used.has(slug)) {
    used.add(slug);
    return slug;
  }

  let counter = 2;
  while (used.has(`${slug}-${counter}`)) {
    counter += 1;
  }

  slug = `${slug}-${counter}`;
  used.add(slug);
  return slug;
}

const response = await fetch(sourceUrl, { headers: { "User-Agent": "Tipmi city data generation" } });
if (!response.ok) {
  throw new Error(`Failed to fetch city source: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const html = payload.parse.text["*"];
const tables = [...html.matchAll(/<table[\s\S]*?<\/table>/g)].map((match) => match[0]);
const rows = [...parseRows(tables[0]), ...parseRows(tables[1])];
const usedSlugs = new Set();

const seoCities = rows.map((city) => {
  const key = `${city.name}|${city.region}`;
  const override = overrides[key];
  const baseSlug = override?.slug ?? translit(city.name);

  return {
    name: city.name,
    prepositional: override?.prepositional ?? guessPrepositional(city.name),
    genitive: override?.genitive ?? guessGenitive(city.name),
    slug: uniqueSlug(baseSlug, city.region, usedSlugs),
    region: city.region,
  };
});

const content = `export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tipmestudio.ru";

export const brand = {
  name: "Типми",
  latinName: "Tipmi Studio",
  phone: "+7 (995) 226-69-17",
  telegram: "https://t.me/tipme_studio",
  whatsapp: "https://api.whatsapp.com/send/?phone=79952266917",
};

export const seoCities = ${JSON.stringify(seoCities, null, 2)};

export const getCityBySlug = (slug) => seoCities.find((city) => city.slug === slug);

export const getCityPath = (city) => \`/rabota-strimerom-v-\${city.slug}\`;

export const seoKeywords = [
  "работа стримером для девушек",
  "работа вебкам моделью",
  "вебкам студия",
  "онлайн работа для девушек",
  "работа моделью без опыта",
  "работа из дома для девушек",
  "обучение вебкам",
  "высокий доход для девушек",
  "удаленная работа стримером",
  "вакансия вебкам модели",
];
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, "utf8");
console.log(`Generated src/data/seoCities.js with ${seoCities.length} cities.`);
