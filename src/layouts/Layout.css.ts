import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { textStyles } from "../styles/typography.semantic.css";

export const skipLink = style([
  textStyles.body3,
  {
    position: "absolute",
    top: "-100%",
    left: "1rem",
    zIndex: 999,
    padding: "0.5rem 1rem",
    background: themeVars.bg.canvas,
    color: themeVars.text.strong,
    border: `1px solid ${themeVars.border.default}`,
    borderRadius: layoutVars.radius.md,
    textDecoration: "none",
    ":focus": {
      top: "1rem",
    },
  },
]);
