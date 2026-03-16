# Layout Tokens

## Spacing (`layoutVars.space`)

| Token | Value | px |
|-------|-------|----|
| `space.xs` | `0.25rem` | 4 |
| `space.sm` | `0.5rem` | 8 |
| `space.md` | `1rem` | 16 |
| `space.lg` | `1.5rem` | 24 |
| `space.xl` | `2rem` | 32 |
| `space.xxl` | `2.5rem` | 40 |

## Border Radius (`layoutVars.radius`)

| Token | Value | px |
|-------|-------|----|
| `radius.sm` | `0.25rem` | 4 |
| `radius.md` | `0.375rem` | 6 |

## Container Widths (static constants)

| Constant | Value |
|----------|-------|
| `CONTAINER_WIDE` | `min(64rem, 100% - 4rem)` |
| `CONTAINER_NARROW` | `min(56rem, 100% - 4rem)` |

## Font Families (static constants)

| Constant | Stack |
|----------|-------|
| `FONT_DISPLAY` | Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif |
| `FONT_BODY` | Avenir Next, Pretendard, Noto Sans KR, Apple SD Gothic Neo, sans-serif |
| `FONT_MONO` | SFMono-Regular, Consolas, Liberation Mono, Courier New, monospace |

Import containers and fonts from `src/styles/tokens.ts` (plain JS constants, not CSS variables).
