import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";

export const skipLink = style({
  position: "absolute",
  top: "-100%",
  left: "1rem",
  zIndex: 999,
  padding: "0.5rem 1rem",
  background: themeVars.bg.canvas,
  color: themeVars.text.strong,
  border: `1px solid ${themeVars.border.default}`,
  borderRadius: layoutVars.radius.md,
  fontSize: "0.875rem",
  textDecoration: "none",
  ":focus": {
    top: "1rem",
  },
});
