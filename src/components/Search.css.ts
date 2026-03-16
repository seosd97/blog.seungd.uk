import { style } from "@vanilla-extract/css";

import { themeVars } from "../styles/theme.css";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";

export const wrapper = style({
  flex: 1,
  minWidth: 0,
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const icon = style({
  position: "absolute",
  left: 0,
  color: themeVars.text.muted,
  pointerEvents: "none",
});

export const input = style([
  textStyles.caption1,
  {
    width: "100%",
    padding: "0.35rem 0",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    color: themeVars.text.default,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${themeVars.border.default}`,
    borderRadius: 0,
    transition: "border-color 160ms ease",
    "::placeholder": {
      color: themeVars.text.muted,
      letterSpacing: typographyVars.tracking[400],
    },
    ":focus-visible": {
      outline: "none",
      borderColor: themeVars.accent.primary,
    },
  },
]);

export const clearBtn = style({
  position: "absolute",
  right: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.25rem",
  height: "1.25rem",
  padding: 0,
  border: "none",
  background: "none",
  color: themeVars.text.muted,
  cursor: "pointer",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.strong,
  },
});
