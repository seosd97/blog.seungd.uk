import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { type APIContext } from "astro";
import { SITE_NAME, SITE_DESCRIPTION } from "../consts";

export async function GET(context: APIContext) {
  const articles = (await getCollection("articles"))
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL("https://blog.seungd.uk"),
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.id}/`,
    })),
  });
}
