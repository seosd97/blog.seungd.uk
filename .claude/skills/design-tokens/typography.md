# Typography Tokens

## Primitive Scale (`typographyVars`)

### Size — 1rem (16px) base

| Token | Value | px |
|-------|-------|----|
| `size[100]` | `0.75rem` | 12 |
| `size[200]` | `0.8125rem` | 13 |
| `size[300]` | `0.875rem` | 14 |
| `size[400]` | `0.9375rem` | 15 |
| `size[500]` | `1rem` | 16 (base) |
| `size[600]` | `1.0625rem` | 17 |
| `size[700]` | `1.125rem` | 18 |
| `size[800]` | `1.25rem` | 20 |
| `size[900]` | `1.375rem` | 22 |
| `size[1000]` | `1.5rem` | 24 |
| `size[1100]` | `1.75rem` | 28 |
| `size[1200]` | `clamp(1.25rem, 2vw, 1.5rem)` | 20–24 fluid |
| `size[1300]` | `clamp(1.75rem, 2.75vw, 2.125rem)` | 28–34 fluid |

### Line Height

| Token | Value | Use |
|-------|-------|-----|
| `lineHeight[100]` | `1.2` | display, tight headings |
| `lineHeight[200]` | `1.3` | h1-level |
| `lineHeight[300]` | `1.35` | h2, titles (compact) |
| `lineHeight[400]` | `1.4` | h3 |
| `lineHeight[500]` | `1.5` | captions, labels |
| `lineHeight[600]` | `1.6` | code blocks |
| `lineHeight[700]` | `1.62` | body2 (16px) |
| `lineHeight[800]` | `1.64` | body3 (15px) |
| `lineHeight[900]` | `1.8` | body1 (17px, reading) |

### Tracking (letter-spacing)

| Token | Value | Use |
|-------|-------|-----|
| `tracking[100]` | `-0.02em` | headings (tight) |
| `tracking[200]` | `-0.015em` | h2, titles |
| `tracking[300]` | `-0.01em` | — |
| `tracking[400]` | `0.02em` | body with slight spread |
| `tracking[500]` | `0.04em` | nav links |
| `tracking[600]` | `0.05em` | caption3 |
| `tracking[700]` | `0.06em` | label1 |
| `tracking[800]` | `0.08em` | label2 (wide) |

### Weight

| Token | Value |
|-------|-------|
| `weight[400]` | normal |
| `weight[500]` | medium |
| `weight[600]` | semibold |
| `weight[650]` | between semi and bold |
| `weight[700]` | bold |

---

## Semantic Text Styles (`textStyles`)

Semantic styles compose size + lineHeight + tracking into named presets.
Import from `src/styles/typography.semantic.css.ts`.

### Categories

**Display** — hero, article titles
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `display` | 1300 (28–34px fluid) | 100 (1.2) | — |

**Heading** — section headings, large line-height for readability
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `heading1` | 1000 (24px) | 200 (1.3) | 100 (-0.02em) |
| `heading2` | 800 (20px) | 300 (1.35) | 200 (-0.015em) |
| `heading3` | 700 (18px) | 400 (1.4) | 100 (-0.02em) |

**Title** — compact headings (tighter line-height than heading at same size)
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `title1` | 700 (18px) | 300 (1.35) | 200 (-0.015em) |
| `title2` | 600 (17px) | 300 (1.35) | 200 (-0.015em) |
| `title3` | 500 (16px) | 300 (1.35) | 200 (-0.015em) |

**Body** — paragraph text, generous line-height for reading
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `body1` | 600 (17px) | 900 (1.8) | — |
| `body2` | 500 (16px) | 700 (1.62) | — |
| `body3` | 400 (15px) | 800 (1.64) | — |

**Caption** — small informational text
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `caption1` | 300 (14px) | 500 (1.5) | — |
| `caption2` | 200 (13px) | 500 (1.5) | 400 (0.02em) |
| `caption3` | 100 (12px) | 500 (1.5) | 600 (0.05em) |

**Code** — monospace blocks
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `code1` | 300 (14px) | 600 (1.6) | — |

**Label** — uppercase labels, wide tracking
| Name | Size | LH | Tracking |
|------|------|----|----------|
| `label1` | 200 (13px) | 500 (1.5) | 700 (0.06em) |
| `label2` | 100 (12px) | 500 (1.5) | 800 (0.08em) |

---

## Usage Patterns

### `style()` — use semantic tokens with array composition

```ts
import { textStyles } from "../styles/typography.semantic.css";
import { typographyVars } from "../styles/typography.css";

// Semantic only
export const title = style(textStyles.display);

// Semantic + overrides
export const meta = style([
  textStyles.caption2,
  {
    fontWeight: typographyVars.weight[400],
    color: themeVars.text.muted,
  },
]);
```

### `globalStyle()` — use primitives explicitly (no spread)

```ts
// CORRECT: explicit primitive properties
globalStyle(`${prose} h2`, {
  fontSize: typographyVars.size[1000],
  lineHeight: typographyVars.lineHeight[200],
  letterSpacing: typographyVars.tracking[100],
  marginTop: layoutVars.space.lg,
});

// WRONG: spread in globalStyle
globalStyle(`${prose} h2`, {
  ...textStyles.heading1,  // ← do not do this
});
```

### When to skip semantic tokens

Use primitives directly when:
- Only one property is needed (e.g., just `fontSize`)
- The combination is unique to a single element (e.g., logo, nav links)
- Inside `globalStyle()` where object spread is disallowed

### Current usages

| Semantic Token | Used In |
|---------------|---------|
| `display` | `ArticleLayout` (articleTitle) |
| `heading1` | `page.css` (pageTitle + lh override) |
| `heading2` | `ArticleList` (articleTitle) |
| `heading3` | `archive` (yearHeading) |
| `body1` | `prose` (prose container) |
| `body2` | `ArticleList` (articleDesc) |
| `body3` | `archive` (articleLink + tracking override) |
| `caption1` | `Search` (input) |
| `caption2` | `ArticleList` (articleMeta), `ArticleLayout` (metadata), `archive` (articleDate) |
| `caption3` | `ArticleList` (tagBrowseLink) |
| `label1` | `ArticleList` (articleDate, latestNote) |
| `label2` | `ArticleList` (articleCount) |
