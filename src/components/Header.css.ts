import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { CONTAINER_WIDE } from "../styles/tokens";

export const header = style({
  width: CONTAINER_WIDE,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "0.875rem",
  paddingBottom: "0.875rem",
});

export const logo = style({
  fontSize: "1rem",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  color: themeVars.text.strong,
});

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.md,
});

export const navLink = style({
  fontSize: "0.875rem",
  color: themeVars.text.soft,
  ":hover": {
    color: themeVars.text.strong,
  },
  ":focus-visible": {
    color: themeVars.text.strong,
  },
});
