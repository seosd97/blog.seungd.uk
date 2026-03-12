import { globalStyle, style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";

// Prose container — body at 1rem (16px)
export const prose = style({
  maxWidth: "72ch",
  fontSize: "1rem",
  lineHeight: 1.8,
  color: themeVars.text.default,
});

globalStyle(`${prose} p`, {
  marginBottom: layoutVars.space.md,
});

// Headings — only override what global h1-h4 reset doesn't cover
globalStyle(`${prose} h2`, {
  fontSize: "1.375rem",
  lineHeight: 1.3,
  letterSpacing: "-0.02em",
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.sm,
});

globalStyle(`${prose} h3`, {
  fontSize: "1.125rem",
  lineHeight: 1.35,
  letterSpacing: "-0.015em",
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.xs,
});

globalStyle(`${prose} h4`, {
  fontSize: "1rem",
  lineHeight: 1.4,
  marginTop: layoutVars.space.md,
  marginBottom: layoutVars.space.xs,
});

// Must come after heading rules — same specificity, last wins
globalStyle(`${prose} > :first-child`, {
  marginTop: 0,
});

globalStyle(`${prose} blockquote`, {
  borderLeft: `2px solid ${themeVars.quote.border}`,
  backgroundColor: "transparent",
  paddingLeft: "0.75rem",
  marginLeft: 0,
  marginRight: 0,
  marginBottom: layoutVars.space.md,
  fontStyle: "italic",
  fontSize: "0.875rem",
  color: themeVars.text.soft,
});

globalStyle(`${prose} blockquote p`, {
  marginBottom: 0,
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.25rem",
  marginBottom: layoutVars.space.md,
});

globalStyle(`${prose} li`, {
  marginBottom: layoutVars.space.xs,
});

globalStyle(`${prose} pre`, {
  backgroundColor: themeVars.code.bg,
  border: `1px solid ${themeVars.code.border}`,
  borderRadius: "0.375rem",
  padding: "0.75rem",
  overflowX: "auto",
  marginBottom: layoutVars.space.md,
});

globalStyle(`${prose} pre code`, {
  fontSize: "0.8125rem",
  lineHeight: 1.6,
  background: "none",
  padding: 0,
  borderRadius: 0,
  color: themeVars.code.text,
});

globalStyle(`${prose} :not(pre) > code`, {
  fontSize: "0.875em",
  backgroundColor: themeVars.code.inlineBg,
  padding: "0.125em 0.375em",
  borderRadius: "0.25rem",
  color: themeVars.code.text,
});

globalStyle(`${prose} hr`, {
  border: "none",
  borderTop: `1px solid ${themeVars.border.subtle}`,
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.lg,
});

// Only the hover underline — base a styles come from global.css.ts
globalStyle(`${prose} a:hover`, {
  textDecoration: "underline",
});

globalStyle(`${prose} img`, {
  width: "100%",
  height: "auto",
  marginTop: layoutVars.space.md,
  marginBottom: layoutVars.space.md,
  borderRadius: "0.25rem",
});
