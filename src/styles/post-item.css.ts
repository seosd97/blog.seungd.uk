import { style } from "@vanilla-extract/css";


import { themeVars } from "./theme.css";

const displayFont = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';

export const item = style({
  display: "grid",
  gap: "0.75rem",
});

export const titleLink = style({
  fontSize: "clamp(2rem, 3.5vw, 3rem)",
  fontWeight: 600,
  lineHeight: 1.1,
  fontFamily: displayFont,
  letterSpacing: "-0.03em",
  color: themeVars.text.soft,
  textDecoration: "none",
  transition: "color 160ms ease",
  selectors: {
    "&:hover": {
      color: themeVars.text.strong,
    },
  },
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
  fontSize: "0.875rem",
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

export const description = style({
  fontSize: "1.125rem",
  lineHeight: 1.75,
  color: themeVars.text.default,
  maxWidth: "80ch",
});

export const readMore = style({
  fontSize: "0.9375rem",
  fontWeight: 500,
  color: themeVars.link.default,
  textDecoration: "none",
  transition: "color 160ms ease",
  selectors: {
    "&:hover": {
      color: themeVars.link.hover,
    },
  },
});
