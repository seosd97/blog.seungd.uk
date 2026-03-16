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

export default function ArticleList({ articles }: { articles: Article[] }) {
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
      <Search
        onSearch={setQuery}
        placeholder="Search title, description, or tags"
        ariaLabel="Search articles"
      />

      <div className={styles.listHeader}>
        <span className={styles.articleCount}>{articles.length} published</span>
        {q && <span className={styles.matchCount}>{filtered.length} matching</span>}
      </div>

      <div className={styles.list}>
        {filtered.map((article) => (
          <article className={styles.item} key={article.slug}>
            <time className={styles.date} dateTime={article.date}>
              {formatDate(new Date(article.date))}
            </time>

            <a href={`/articles/${article.slug}`} className={styles.title}>
              {article.title}
            </a>

            <p className={styles.desc}>{article.description}</p>

            <div className={styles.meta}>
              <span>{article.readingTime} min read</span>
              {article.tags.length > 0 && (
                <>
                  <span className={styles.separator} />
                  <span className={styles.tagList}>
                    {article.tags.map((t) => (
                      <span className={styles.tag} key={t}>
                        #{t}
                      </span>
                    ))}
                  </span>
                </>
              )}
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className={styles.emptyState}>No matching entries found.</p>
        )}
      </div>
    </>
  );
}
