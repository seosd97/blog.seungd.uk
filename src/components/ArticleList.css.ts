import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { FONT_DISPLAY } from "../styles/tokens";

/* --- Article count --- */

export const articleCount = style({
  fontSize: "0.75rem",
  color: themeVars.text.muted,
  textAlign: "right",
  marginBottom: layoutVars.space.sm,
});

/* --- Article list --- */

export const articleList = style({
  display: "grid",
  gap: layoutVars.space.xl,
});

export const articleItem = style({
  display: "grid",
  gap: "0.375rem",
});

export const articleTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  fontFamily: FONT_DISPLAY,
  letterSpacing: "-0.02em",
  lineHeight: 1.3,
  color: themeVars.text.soft,
  ":hover": {
    color: themeVars.text.strong,
  },
});

export const articleMeta = style({
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

export const articleDesc = style({
  fontSize: "0.875rem",
  lineHeight: 1.65,
  color: themeVars.text.default,
  maxWidth: "65ch",
});

export const readMore = style({
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: themeVars.link.default,
  ":hover": {
    color: themeVars.link.hover,
  },
});

/* --- Tags (browse) --- */

export const tagBrowse = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.625rem",
  marginTop: layoutVars.space.lg,
  paddingTop: "0.75rem",
});

export const tagBrowseLink = style({
  fontSize: "0.75rem",
  color: themeVars.text.muted,
  ":hover": {
    color: themeVars.text.strong,
  },
});
