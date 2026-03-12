import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

export const wrapper = style({
  marginBottom: "1.5rem",
});

export const input = style({
  width: "100%",
  padding: "0.375rem 0.625rem",
  fontSize: "0.8125rem",
  lineHeight: 1.5,
  color: themeVars.text.default,
  backgroundColor: "transparent",
  border: `1px solid ${themeVars.border.default}`,
  borderRadius: "0.25rem",
  transition: "border-color 160ms ease, box-shadow 160ms ease",
  "::placeholder": {
    color: themeVars.text.muted,
  },
  ":focus-visible": {
    borderColor: themeVars.accent.primary,
    boxShadow: `0 0 0 3px ${themeVars.focus.ring}`,
  },
});
