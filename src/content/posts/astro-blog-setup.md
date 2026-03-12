---
title: "Astro로 블로그 만들기"
description: "Astro 프레임워크를 선택한 이유와 세팅 과정"
date: 2026-03-05
tags: ["개발", "Astro"]
---

## 왜 Astro인가

블로그 프레임워크를 고르는 건 생각보다 어려운 일이다. Next.js, Gatsby, Hugo, Jekyll 등 선택지가 너무 많다. 그 중에서 Astro를 선택한 이유는 명확했다.

- **콘텐츠 퍼스트**: Astro는 콘텐츠 중심 사이트를 위해 설계되었다
- **제로 자바스크립트**: 기본적으로 클라이언트에 JS를 보내지 않는다
- **아일랜드 아키텍처**: 필요한 곳에만 인터랙티브 컴포넌트를 추가할 수 있다

## 프로젝트 세팅

프로젝트 생성은 간단하다:

```bash
npm create astro@latest
```

### Vanilla Extract 설정

타입 안전한 CSS를 위해 Vanilla Extract를 선택했다. `astro.config.mjs`에 Vite 플러그인을 추가하면 된다:

```javascript
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
```

### Content Collections

Astro 6에서는 `src/content.config.ts`에서 콘텐츠 컬렉션을 정의한다. `defineCollection`과 `z` 스키마를 사용하면 타입 안전하게 프론트매터를 관리할 수 있다.

```typescript
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

## 코드 품질

린팅과 포매팅에는 `Biome`를 사용한다. ESLint + Prettier 조합보다 훨씬 빠르고, 설정도 단순하다. `biome.jsonc` 하나로 린팅과 포매팅 규칙을 모두 관리할 수 있다는 점이 좋다.

### 주요 설정

- 들여쓰기: 2 spaces
- 따옴표: double quotes
- 세미콜론: always
- 줄 끝: LF

이 정도면 블로그를 시작하기에 충분한 기반이 갖춰졌다. 다음은 실제 레이아웃과 컴포넌트를 만들어 볼 차례다.
