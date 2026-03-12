import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

export const footer = style({
  width: `min(64rem, 100% - 4rem)`,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.75rem",
  borderTop: `1px solid ${themeVars.border.subtle}`,
  fontSize: "0.75rem",
  color: themeVars.text.muted,
});

export const info = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
});

export const dot = style({
  selectors: {
    "&::before": {
      content: '"·"',
    },
  },
});

export const inlineLink = style({
  color: themeVars.text.muted,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});

export const socialLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const socialLink = style({
  display: "inline-flex",
  color: themeVars.text.muted,
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});
