import { getCollection } from "astro:content";
import { CONFIG } from "../constants";

export async function getPublishedArticles() {
  return (await getCollection("articles"))
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function calculateReadingTime(text: string): number {
  const words = Math.ceil(text.length / CONFIG.readingTime.charsPerWord);
  return Math.max(CONFIG.readingTime.min, Math.ceil(words / CONFIG.readingTime.wordsPerMinute));
}
