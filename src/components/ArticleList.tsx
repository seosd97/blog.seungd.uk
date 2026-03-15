import { useState } from "react";
import Search from "./Search";
import * as styles from "./ArticleList.css";
import { formatDate } from "../utils/format";

interface Article {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  readingTime: number;
}

export default function ArticleList({ articles, allTags }: { articles: Article[]; allTags: string[] }) {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase().trim();
  const filtered = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)),
      )
    : articles;

  return (
    <>
      <p className={styles.articleCount}>total {articles.length} articles</p>
      <Search onSearch={setQuery} />

      <div className={styles.articleList}>
        {filtered.map((article) => (
          <article className={styles.articleItem} key={article.slug}>
            <a href={`/articles/${article.slug}`} className={styles.articleTitle}>
              {article.title}
            </a>

            <div className={styles.articleMeta}>
              <time dateTime={article.date}>{formatDate(new Date(article.date))}</time>
              <span className={styles.separator} />
              <span>{article.readingTime}min read</span>
              {article.tags.length > 0 && (
                <>
                  <span className={styles.separator} />
                  <span className={styles.tagList}>
                    {article.tags.map((t) => (
                      <span className={styles.tag} key={t}>
                        {t}
                      </span>
                    ))}
                  </span>
                </>
              )}
            </div>

            <p className={styles.articleDesc}>{article.description}</p>

            <a href={`/articles/${article.slug}`} className={styles.readMore}>
              Read more &rarr;
            </a>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className={styles.articleDesc}>검색 결과가 없습니다.</p>
        )}
      </div>

      {allTags.length > 0 && (
        <nav className={styles.tagBrowse}>
          {allTags.map((tag) => (
            <a href={`/archive?tag=${tag}`} className={styles.tagBrowseLink} key={tag}>
              #{tag}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
