import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";

export const wrapper = style({
  marginBottom: layoutVars.space.lg,
});

export const input = style({
  width: "100%",
  padding: "0.375rem 0.625rem",
  fontSize: "0.8125rem",
  lineHeight: 1.5,
  color: themeVars.text.default,
  backgroundColor: "transparent",
  border: `1px solid ${themeVars.border.default}`,
  borderRadius: layoutVars.radius.sm,
  transition: "border-color 160ms ease, box-shadow 160ms ease",
  "::placeholder": {
    color: themeVars.text.muted,
  },
  ":focus-visible": {
    outline: "none",
    borderColor: themeVars.accent.primary,
    boxShadow: `0 0 0 3px ${themeVars.focus.ring}`,
  },
});
