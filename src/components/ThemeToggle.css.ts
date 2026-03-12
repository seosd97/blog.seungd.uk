import { style } from "@vanilla-extract/css";

import { themeVars } from "../styles/theme.css";

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
  ":focus-visible": {
    outline: `2px solid ${themeVars.accent.primary}`,
    outlineOffset: "2px",
    borderRadius: "2px",
  },
});
