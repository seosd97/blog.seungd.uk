import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { textStyles } from "../styles/typography.semantic.css";

export const fallback = style([
  textStyles.body3,
  {
    padding: layoutVars.space.lg,
    color: themeVars.text.muted,
    textAlign: "center",
  },
]);

export const retryBtn = style({
  marginTop: layoutVars.space.sm,
  padding: `${layoutVars.space.xs} ${layoutVars.space.md}`,
  border: `1px solid ${themeVars.border.subtle}`,
  borderRadius: layoutVars.radius.sm,
  background: "none",
  color: themeVars.text.default,
  cursor: "pointer",
  ":hover": {
    color: themeVars.text.strong,
    borderColor: themeVars.border.default,
  },
});
