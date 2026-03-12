import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

const displayFont =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';

export const wrapper = style({
  width: `min(56rem, 100% - 4rem)`,
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "1.5rem",
});

export const title = style({
  fontSize: "1.375rem",
  fontWeight: 600,
  fontFamily: displayFont,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  marginBottom: "1.5rem",
});

export const yearSection = style({
  marginBottom: "1.5rem",
});

export const yearHeading = style({
  fontSize: "1rem",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  color: themeVars.text.strong,
  marginBottom: "0.5rem",
});

export const postList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: "0.25rem",
});

export const postItem = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.75rem",
});

export const postDate = style({
  fontSize: "0.75rem",
  fontVariantNumeric: "tabular-nums",
  color: themeVars.text.muted,
  flexShrink: 0,
});

export const postLink = style({
  fontSize: "0.875rem",
  color: themeVars.text.default,
  textDecoration: "none",
  transition: "color 160ms ease",
});

globalStyle(`${postLink}:hover`, {
  color: themeVars.link.hover,
});
