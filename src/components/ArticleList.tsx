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
  const latestDate = articles[0]?.date;

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
    <div className={styles.layout}>
      <section className={styles.mainColumn}>
        <div className={styles.articleStream}>
          {filtered.map((article) => (
            <article className={styles.articleRow} key={article.slug}>
              <time className={styles.articleDate} dateTime={article.date}>
                {formatDate(new Date(article.date))}
              </time>

              <div className={styles.articleContent}>
                <a href={`/articles/${article.slug}`} className={styles.articleTitle}>
                  {article.title}
                </a>
                <p className={styles.articleDesc}>{article.description}</p>

                <div className={styles.articleMeta}>
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
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className={styles.emptyState}>No matching entries found.</p>
          )}
        </div>
      </section>

      <aside className={styles.sideRail} aria-label="Article tools">
        <p className={styles.articleCount}>
          {articles.length} published
          {q ? ` · ${filtered.length} matching` : ""}
        </p>

        <Search
          onSearch={setQuery}
          placeholder="Search title, description, or tags"
          ariaLabel="Search articles"
        />

        {allTags.length > 0 && (
          <nav className={styles.tagBrowse} aria-label="Browse tags">
            {allTags.map((tag) => (
              <a href={`/archive?tag=${tag}`} className={styles.tagBrowseLink} key={tag}>
                #{tag}
              </a>
            ))}
          </nav>
        )}

        <p className={styles.latestNote}>
          {latestDate ? `Latest · ${formatDate(new Date(latestDate))}` : "Latest · n/a"}
        </p>
      </aside>
    </div>
  );
}
