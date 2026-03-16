export const APP_METADATA = {
  name: "seosd blog",
  title: "seosd의 블로그",
  description: "개발, 디자인, 그리고 일상의 기록",
  author: "seosd",
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://x.com/seosd97",
  github: "https://github.com/seosd97",
} as const;

export const STORAGE_KEYS = {
  theme: "blog-theme",
} as const;

export const DEFAULT_THEME = "light";

export const CONFIG = {
  readingTime: {
    charsPerWord: 3.5,
    wordsPerMinute: 200,
    min: 1,
  },
} as const;
