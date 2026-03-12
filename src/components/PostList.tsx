import { useState } from "react";
import Search from "./Search";
import * as styles from "../styles/home.css";

interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  readingTime: number;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}.${m}.${day}`;
}

export default function PostList({ posts, allTags }: { posts: Post[]; allTags: string[] }) {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase().trim();
  const filtered = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
    : posts;

  return (
    <>
      <p className={styles.postCount}>total {posts.length} posts</p>
      <Search onSearch={setQuery} />

      <div className={styles.postList}>
        {filtered.map((post) => (
          <article className={styles.postItem} key={post.slug}>
            <a href={`/posts/${post.slug}`} className={styles.postTitle}>
              {post.title}
            </a>

            <div className={styles.postMeta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className={styles.separator} />
              <span>{post.readingTime}min read</span>
              {post.tags.length > 0 && (
                <>
                  <span className={styles.separator} />
                  <span className={styles.tagList}>
                    {post.tags.map((t) => (
                      <span className={styles.tag} key={t}>
                        {t}
                      </span>
                    ))}
                  </span>
                </>
              )}
            </div>

            <p className={styles.postDesc}>{post.description}</p>

            <a href={`/posts/${post.slug}`} className={styles.readMore}>
              Read more &rarr;
            </a>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className={styles.postDesc}>검색 결과가 없습니다.</p>
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
