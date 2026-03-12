import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { type APIContext } from "astro";
import { SITE_NAME, SITE_DESCRIPTION } from "../consts";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL("https://blog.seungd.uk"),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}
