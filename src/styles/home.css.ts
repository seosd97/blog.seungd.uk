import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

const displayFont =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';

export const wrapper = style({
  width: `min(64rem, 100% - 4rem)`,
  margin: "0 auto",
  paddingTop: "1.5rem",
  paddingBottom: "1rem",
});

/* --- Post count --- */

export const postCount = style({
  fontSize: "0.75rem",
  color: themeVars.text.muted,
  textAlign: "right",
  marginBottom: "0.5rem",
});

/* --- Post list --- */

export const postList = style({
  display: "grid",
  gap: "2rem",
});

export const postItem = style({
  display: "grid",
  gap: "0.375rem",
});

export const postTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  fontFamily: displayFont,
  letterSpacing: "-0.02em",
  lineHeight: 1.3,
  color: themeVars.text.soft,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});

export const postMeta = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.8125rem",
  lineHeight: 1.5,
  color: themeVars.text.muted,
});

export const separator = style({
  selectors: {
    "&::before": {
      content: '"\\00b7"',
    },
  },
});

export const tagList = style({
  display: "inline-flex",
  gap: "0.4em",
});

export const tag = style({
  color: themeVars.text.muted,
});

export const postDesc = style({
  fontSize: "0.875rem",
  lineHeight: 1.65,
  color: themeVars.text.default,
  maxWidth: "65ch",
});

export const readMore = style({
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: themeVars.link.default,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.link.hover,
  },
});

/* --- Tags (browse) --- */

export const tagBrowse = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.625rem",
  marginTop: "1.5rem",
  paddingTop: "0.75rem",
});

export const tagBrowseLink = style({
  fontSize: "0.75rem",
  color: themeVars.text.muted,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});
