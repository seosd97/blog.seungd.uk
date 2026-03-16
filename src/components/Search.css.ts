import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";

export const wrapper = style({
  marginBottom: layoutVars.space.sm,
});

export const input = style([
  textStyles.caption1,
  {
    width: "100%",
    padding: "0.35rem 0",
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
