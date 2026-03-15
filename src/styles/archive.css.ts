import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";

export const yearSection = style({
  marginBottom: layoutVars.space.lg,
});

export const yearHeading = style({
  fontSize: "1rem",
  marginBottom: layoutVars.space.sm,
});

export const articleList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: layoutVars.space.xs,
});

export const articleItem = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.75rem",
});

export const articleDate = style({
  fontSize: "0.75rem",
  fontVariantNumeric: "tabular-nums",
  color: themeVars.text.muted,
  flexShrink: 0,
});

export const articleLink = style({
  fontSize: "0.875rem",
  color: themeVars.text.default,
  ":hover": {
    color: themeVars.link.hover,
  },
});
