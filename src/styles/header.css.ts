import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

export const header = style({
  width: `min(64rem, 100% - 4rem)`,
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
  textDecoration: "none",
});

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const navLink = style({
  fontSize: "0.875rem",
  color: themeVars.text.soft,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});

export const themeToggleBtn = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.75rem",
  height: "1.75rem",
  padding: 0,
  border: "none",
  background: "none",
  color: themeVars.text.soft,
  cursor: "pointer",
  borderRadius: "0.25rem",
  transition: "color 160ms ease, background-color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
    backgroundColor: themeVars.button.ghost.hover,
  },
  ":active": {
    backgroundColor: themeVars.button.ghost.active,
  },
});
