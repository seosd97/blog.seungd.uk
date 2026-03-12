import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";
import { CONTAINER_NARROW } from "./tokens";

export const article = style({
  width: CONTAINER_NARROW,
  margin: "0 auto",
  paddingTop: "2.5rem",
  paddingBottom: "1.5rem",
});

export const header = style({
  display: "grid",
  gap: "0.25rem",
  marginBottom: "2.5rem",
});

export const footer = style({
  marginTop: "1.5rem",
  borderTop: `1px solid ${themeVars.border.subtle}`,
  paddingTop: "0.625rem",
});

export const backLink = style({
  color: themeVars.text.muted,
  textDecoration: "none",
  fontSize: "0.75rem",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.link.hover,
  },
});
