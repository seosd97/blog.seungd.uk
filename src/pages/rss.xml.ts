import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { APP_METADATA } from "../constants";
import { getPublishedArticles } from "../utils/articles";

export async function GET(context: APIContext) {
	const articles = await getPublishedArticles();

	return rss({
		title: APP_METADATA.name,
		description: APP_METADATA.description,
		site: context.site ?? new URL("https://blog.seungd.uk"),
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.date,
			description: article.data.description,
			link: `/a/${article.id}/`,
			author: APP_METADATA.author,
			categories: article.data.tags,
		})),
	});
}
