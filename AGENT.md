# Blog Web

Personal blog by seosd. Astro 6 + vanilla-extract, static build, light/dark theme.

- **Site URL**: https://blog.seungd.uk
- **Engine**: Node >=22.12.0, Yarn 4.9.1

## Project Structure

```
src/
├── pages/                  # File-based routing
│   ├── index.astro              → / (article list with search)
│   ├── about.astro              → /about
│   ├── archive.astro            → /archive (grouped by year)
│   ├── articles/[slug].astro    → /articles/:slug (dynamic)
│   └── rss.xml.ts               → RSS feed
├── layouts/
│   ├── Layout.astro             # Root HTML wrapper (meta, theme init, header/footer)
│   └── ArticleLayout.astro      # Article wrapper (title, date, tags, prose)
├── components/
│   ├── Header.astro             # Full-page nav overlay, theme toggle
│   ├── Footer.astro             # Copyright + social links
│   ├── ThemeToggle.astro        # Light/dark switcher (web component)
│   ├── MenuLines.astro          # Hamburger button (5 lines)
│   ├── SocialLinks.astro        # X & GitHub links (reusable, props: size, linkClass)
│   ├── ArticleList.tsx          # React: searchable article list (client:load)
│   ├── Search.tsx               # React: search input with clear button
│   ├── ErrorBoundary.tsx        # React: error boundary wrapper
│   └── *.css.ts                 # Component styles (vanilla-extract)
├── content/
│   └── articles/                # Markdown articles (glob loader)
├── styles/
│   ├── theme.contract.css.ts    # Color/semantic token contract
│   ├── theme.css.ts             # Light/dark theme values
│   ├── typography.contract.css.ts
│   ├── typography.css.ts        # Typography primitives (size, weight, lineHeight, tracking)
│   ├── typography.semantic.css.ts  # Named text styles (display, heading, body, caption, etc.)
│   ├── layout.contract.css.ts
│   ├── layout.css.ts            # Spacing (xs–xxl) & radius
│   ├── global.css.ts            # Global styles (fonts, links, code, Shiki theme swap)
│   ├── prose.css.ts             # Article reading styles
│   ├── page.css.ts              # Page wrapper & title
│   ├── archive.css.ts
│   └── tokens.ts               # Static constants (containers, font stacks)
├── utils/
│   └── articles.ts              # getPublishedArticles(), calculateReadingTime()
├── constants.ts                 # APP_METADATA, SOCIAL_LINKS, STORAGE_KEYS, CONFIG
└── content.config.ts            # Content collection schema
```

## Commands

```bash
yarn dev       # Dev server (localhost:4321)
yarn build     # Build to ./dist/
yarn preview   # Preview build
yarn lint      # Biome lint
yarn format    # Biome format (write)
yarn check     # Biome check
```

## Content System

Articles live in `src/content/articles/` as Markdown files with this frontmatter schema:

```yaml
title: string       # required
description: string # required
date: Date          # required
tags: string[]      # default: []
draft: boolean      # default: false (drafts are excluded from published list)
```

- `getPublishedArticles()` filters out drafts and sorts by date descending
- `calculateReadingTime()` estimates reading time based on character count

## Style System

All styles use vanilla-extract `.css.ts` files with a **three-layer design token system** (contract → primitive → semantic).
Refer to the **design-tokens** skill (`.claude/skills/design-tokens/`) for the full guide before creating or modifying any style file.

Key conventions:
- Use `textStyles.*` (semantic) over `typographyVars.*` (primitive) in `style()`
- Use `themeVars.*` (semantic) over `colorVars.*` (primitive) in components
- No spread (`...`) in `globalStyle()` — declare properties explicitly
- No runtime color helpers — use pre-defined alpha tokens (e.g., `colorVars.cobalt["400a8"]`)
- No hardcoded color/spacing/sizing values — always use tokens

## Theme System

Light/dark theme via CSS variables + `data-theme` attribute on `<html>`.

- **Inline script** in Layout.astro runs before paint: checks `localStorage[STORAGE_KEYS.theme]`, falls back to `prefers-color-scheme`, sets `data-theme`
- **Light theme**: sand/night/iris/silver palettes
- **Dark theme**: sumire palettes with alpha tokens for transparency
- **Syntax highlighting**: Shiki dual themes — `one-light` (light) / `dracula` (dark), swapped via CSS variables

## Typography

- **Display font**: Iowan Old Style / Palatino Linotype / Georgia (serif)
- **Body font**: Avenir Next / Pretendard / Noto Sans KR (sans-serif, Korean support)
- **Code font**: SFMono-Regular / Consolas / Liberation Mono (monospace)
- Semantic text styles: `display`, `heading1–3`, `title1–3`, `body1–3`, `caption1–3`, `code1`, `label1–2`

## Icons

- Always use `astro-icon` with `@iconify-json/lucide` — usage: `<Icon name="lucide:icon-name" size={N} />`
- Never create custom SVGs — always search the lucide icon set first

## Linting & Formatting

Biome with:
- 100-char line width
- Trailing commas
- Unused imports → error
- Unused variables → warn
- Astro files skip `useJsxKeyInIterable` rule
