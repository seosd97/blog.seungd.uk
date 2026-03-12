import { createVar, globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

const displayFont =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';
const monoFont =
  '"SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monospace';

// Spacing tokens (based on 16px = 1rem)
const spaceXs = createVar();
const spaceSm = createVar();
const spaceMd = createVar();
const spaceLg = createVar();
const spaceXl = createVar();

globalStyle(":root", {
  vars: {
    [spaceXs]: "0.25rem",
    [spaceSm]: "0.5rem",
    [spaceMd]: "1rem",
    [spaceLg]: "1.5rem",
    [spaceXl]: "2.5rem",
  },
});

// Type scale styles
export const postTitle = style({
  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
  fontWeight: 600,
  lineHeight: 1.2,
  fontFamily: displayFont,
  letterSpacing: "-0.02em",
  color: themeVars.text.strong,
});

export const metadata = style({
  fontSize: "0.75rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: themeVars.text.muted,
});

// Prose container — body at 1rem (16px)
export const prose = style({
  maxWidth: "72ch",
  fontSize: "1rem",
  lineHeight: 1.8,
  color: themeVars.text.default,
});

globalStyle(`${prose} p`, {
  marginBottom: spaceMd,
});

globalStyle(`${prose} h2`, {
  fontFamily: displayFont,
  fontSize: "1.375rem",
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "-0.02em",
  color: themeVars.text.strong,
  marginTop: spaceLg,
  marginBottom: spaceSm,
});

globalStyle(`${prose} > :first-child`, {
  marginTop: 0,
});

globalStyle(`${prose} h3`, {
  fontFamily: displayFont,
  fontSize: "1.125rem",
  fontWeight: 600,
  lineHeight: 1.35,
  letterSpacing: "-0.015em",
  color: themeVars.text.strong,
  marginTop: spaceLg,
  marginBottom: spaceXs,
});

globalStyle(`${prose} h4`, {
  fontFamily: displayFont,
  fontSize: "1rem",
  fontWeight: 600,
  lineHeight: 1.4,
  color: themeVars.text.strong,
  marginTop: spaceMd,
  marginBottom: spaceXs,
});

globalStyle(`${prose} blockquote`, {
  borderLeft: `2px solid ${themeVars.quote.border}`,
  backgroundColor: "transparent",
  paddingLeft: "0.75rem",
  marginLeft: 0,
  marginRight: 0,
  marginBottom: spaceMd,
  fontStyle: "italic",
  fontSize: "0.875rem",
  color: themeVars.text.soft,
});

globalStyle(`${prose} blockquote p`, {
  marginBottom: 0,
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.25rem",
  marginBottom: spaceMd,
});

globalStyle(`${prose} li`, {
  marginBottom: spaceXs,
});

globalStyle(`${prose} pre`, {
  backgroundColor: themeVars.code.bg,
  border: `1px solid ${themeVars.code.border}`,
  borderRadius: "0.375rem",
  padding: "0.75rem",
  overflowX: "auto",
  marginBottom: spaceMd,
});

globalStyle(`${prose} pre code`, {
  fontFamily: monoFont,
  fontSize: "0.8125rem",
  lineHeight: 1.6,
  background: "none",
  padding: 0,
  borderRadius: 0,
  color: themeVars.code.text,
});

globalStyle(`${prose} :not(pre) > code`, {
  fontFamily: monoFont,
  fontSize: "0.875em",
  backgroundColor: themeVars.code.inlineBg,
  padding: "0.125em 0.375em",
  borderRadius: "0.25rem",
  color: themeVars.code.text,
});

globalStyle(`${prose} hr`, {
  border: "none",
  borderTop: `1px solid ${themeVars.border.subtle}`,
  marginTop: spaceLg,
  marginBottom: spaceLg,
});

globalStyle(`${prose} a`, {
  color: themeVars.link.default,
  textDecoration: "none",
  transition: "color 160ms ease",
});

globalStyle(`${prose} a:hover`, {
  color: themeVars.link.hover,
  textDecoration: "underline",
});

globalStyle(`${prose} img`, {
  width: "100%",
  marginTop: spaceMd,
  marginBottom: spaceMd,
  borderRadius: "0.25rem",
});

globalStyle(`${prose} strong`, {
  color: themeVars.text.strong,
  fontWeight: 600,
});
