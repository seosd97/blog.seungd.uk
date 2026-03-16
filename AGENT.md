# Blog Web

Astro + vanilla-extract blog. Static build, light/dark theme.

## Style System

All styles use vanilla-extract `.css.ts` files with a layered design token system.
Refer to the **design-tokens** skill (`.claude/skills/design-tokens/`) for the full guide before creating or modifying any style file.

Key conventions:
- Use `textStyles.*` (semantic) over `typographyVars.*` (primitive) in `style()`
- Use `themeVars.*` (semantic) over `colorVars.*` (primitive) in components
- No spread (`...`) in `globalStyle()` — declare properties explicitly
- No runtime color helpers — use pre-defined alpha tokens (e.g., `colorVars.cobalt["400a8"]`)
- No hardcoded color/spacing/sizing values — always use tokens
