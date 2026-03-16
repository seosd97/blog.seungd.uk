---
name: design-tokens
description: Design token system guide — typography, color, layout tokens and their usage conventions. Use when creating or modifying styles, adding new components, or working with .css.ts files.
user-invocable: false
---

# Design Token System

This project uses **vanilla-extract** with a three-layer token architecture:

```
contract (shape)  →  primitive (values)  →  semantic (compositions)
```

All style files use the `.css.ts` extension. Tokens are consumed via typed CSS variable references — never raw strings.

## File Map

| Layer | File | Export |
|-------|------|--------|
| Typography contract | `src/styles/typography.contract.css.ts` | `typographyVars` |
| Typography values | `src/styles/typography.css.ts` | `typographyVars` (re-export) |
| Typography semantic | `src/styles/typography.semantic.css.ts` | `textStyles` |
| Color/theme contract | `src/styles/theme.contract.css.ts` | `colorVars`, `themeVars` |
| Color/theme values | `src/styles/theme.css.ts` | `colorVars`, `themeVars` |
| Layout contract | `src/styles/layout.contract.css.ts` | `layoutVars` |
| Layout values | `src/styles/layout.css.ts` | `layoutVars` (re-export) |
| Static constants | `src/styles/tokens.ts` | `FONT_DISPLAY`, `FONT_BODY`, `FONT_MONO`, `CONTAINER_WIDE`, `CONTAINER_NARROW` |

For detailed token references, see:
- [typography.md](typography.md) — size scale, semantic text styles, usage rules
- [color.md](color.md) — color palettes, alpha tokens, semantic theme, light/dark
- [layout.md](layout.md) — spacing, radius, containers

## Core Rules

1. **Import from value files**, not contracts — use `typography.css`, `theme.css`, `layout.css`
2. **Semantic tokens first** — reach for `textStyles.*` before `typographyVars.*`, and `themeVars.*` before `colorVars.*`
3. **Primitives are fallback** — use `typographyVars.*` or `colorVars.*` only when no semantic token fits, or in `globalStyle()` where object spread is not allowed
4. **No magic numbers** — all spacing, sizing, radius, and color must come from tokens
5. **No runtime color helpers** — use pre-defined alpha tokens (`colorVars.cobalt["400a8"]`) instead of `color-mix()` or opacity functions
