# Color Tokens

## Color Palettes (`colorVars`)

11 color scales, each with shades 50–950. Sand also has shade 0 (#ffffff).

| Palette | Role |
|---------|------|
| `sand` | neutral warm (light theme backgrounds) |
| `lilac` | accent (light theme primary) |
| `ice` | cool blue (light theme secondary, subtle bg) |
| `night` | deep purple-gray (light theme text) |
| `cobalt` | deep blue (dark theme primary + alpha tokens) |
| `iris` | violet (visited links) |
| `silver` | neutral cool (text hierarchy, dark theme text) |
| `green` | success feedback |
| `amber` | warning feedback + alpha tokens |
| `red` | danger feedback |
| `sky` | info feedback |

### Alpha Tokens

Cobalt and amber have pre-defined alpha variants using `{shade}a{alpha%}` naming.
These replace runtime `color-mix()` / opacity helpers.

**Cobalt alpha tokens:**

| Token | Value | Used for |
|-------|-------|----------|
| `"300a2"` | `rgb(137 173 255 / 0.02)` | dark bg.softSecondary, gradient.hero |
| `"300a18"` | `rgb(137 173 255 / 0.18)` | dark border.strong |
| `"400a2"` | `rgb(95 135 246 / 0.02)` | dark bg.softPrimary |
| `"400a4"` | `rgb(95 135 246 / 0.04)` | dark quote.bg, gradient.hero |
| `"400a7"` | `rgb(95 135 246 / 0.07)` | dark button.ghost.hover |
| `"400a8"` | `rgb(95 135 246 / 0.08)` | dark border.subtle, code.inlineBg |
| `"400a10"` | `rgb(95 135 246 / 0.10)` | dark button.ghost.active |
| `"400a14"` | `rgb(95 135 246 / 0.14)` | dark border.default |
| `"400a16"` | `rgb(95 135 246 / 0.16)` | dark code.border |
| `"400a18"` | `rgb(95 135 246 / 0.18)` | dark focus.ring |
| `"500a10"` | `rgb(58 99 222 / 0.10)` | dark selection.bg |
| `"950a92"` | `rgb(13 20 43 / 0.92)` | dark bg.overlay |

**Amber alpha tokens:**

| Token | Value | Used for |
|-------|-------|----------|
| `"400a12"` | `rgb(240 163 33 / 0.12)` | dark mark.bg |

### Adding new alpha tokens

1. Add `"{shade}a{alpha}": null` to the palette's contract in `theme.contract.css.ts`
2. Add `"{shade}a{alpha}": "rgb(r g b / 0.{alpha})"` to the palette's values in `theme.css.ts`
3. Reference as `colorVars.{palette}["{shade}a{alpha}"]`

Alpha percentage is rounded to the nearest integer for the token name (e.g., 2.5% → `a2`, 3.5% → `a4`).

---

## Semantic Theme (`themeVars`)

Semantic tokens map to different color values per theme (light/dark).

### Background

| Token | Light | Dark |
|-------|-------|------|
| `bg.canvas` | sand 0 (white) | cobalt 950 |
| `bg.subtle` | ice 50 | cobalt 900/950 mix (38%) |
| `bg.muted` | ice 100 | cobalt 900/950 mix (48%) |
| `bg.elevated` | sand 0 | cobalt 900/950 mix (42%) |
| `bg.inset` | ice 200 | cobalt 950 |
| `bg.softPrimary` | lilac 50 | cobalt 400a2 |
| `bg.softSecondary` | ice 50 | cobalt 300a2 |
| `bg.overlay` | night dark 48% | cobalt 950a92 |

### Text

| Token | Light | Dark |
|-------|-------|------|
| `text.strong` | night 900 | silver 50 |
| `text.default` | night 800 | silver 100 |
| `text.soft` | night 700 | silver 200 |
| `text.muted` | silver 700 | silver 500 |
| `text.disabled` | silver 500 | silver 600 |
| `text.onAccent` | white | cobalt 950 |

### Border

| Token | Light | Dark |
|-------|-------|------|
| `border.subtle` | ice 100 | cobalt 400a8 |
| `border.default` | silver 200 | cobalt 400a14 |
| `border.strong` | silver 400 | cobalt 300a18 |

### Other semantic groups

- `accent` — primary/secondary with hover/active states
- `link` — default, hover, visited
- `focus.ring` — focus outline color
- `selection` — text selection bg/text
- `code` — bg, border, text, inlineBg
- `quote` — bg, border
- `mark` — bg, text
- `feedback` — success/warning/danger/info (each with bg, border, text)
- `button` — primary/secondary (bg, bgHover, bgActive, text), ghost (hover, active)
- `gradient` — hero, panel
- `shadow.color` — shadow rgb base

---

## Usage Rules

1. **Always use `themeVars`** for colors in components — never hardcode or use `colorVars` directly for foreground/background/border colors
2. **`colorVars` is for theme definitions only** — the light/dark theme objects in `theme.css.ts` map `colorVars` → `themeVars`
3. **No `color-mix()` in components** — if you need a transparent variant, add an alpha token to the contract
4. **Dark theme uses `assignVars`** — light is the default via `createGlobalTheme`, dark overrides via `globalStyle(':root[data-theme="dark"]', { vars: assignVars(...) })`
