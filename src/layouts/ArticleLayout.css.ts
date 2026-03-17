import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { CONTAINER } from "../styles/tokens";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";

export const articleTitle = style(textStyles.display);

export const metadata = style([
  textStyles.caption3,
  {
    fontWeight: typographyVars.weight[400],
    color: themeVars.text.muted,
  },
]);

export const article = style({
  width: CONTAINER,
  margin: "0 auto",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.lg,
});

export const header = style({
  display: "grid",
  gap: layoutVars.space.xs,
  marginBottom: layoutVars.space.xxl,
});

export const footer = style({
  marginTop: layoutVars.space.lg,
  borderTop: `1px solid ${themeVars.border.subtle}`,
  paddingTop: layoutVars.space.sm,
});

export const backLink = style([
  textStyles.caption3,
  {
    color: themeVars.text.muted,
    ":hover": {
      color: themeVars.link.hover,
    },
  },
]);
