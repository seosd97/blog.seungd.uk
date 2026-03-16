import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";
import { FONT_DISPLAY } from "./tokens";

export const yearSection = style({
  marginBottom: layoutVars.space.xl,
});

export const yearHeading = style([
  textStyles.heading3,
  {
    fontFamily: FONT_DISPLAY,
    fontWeight: typographyVars.weight[600],
    marginBottom: layoutVars.space.sm,
  },
]);

export const articleList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: layoutVars.space.xs,
});

export const articleItem = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.75rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
});

export const articleDate = style([
  textStyles.caption2,
  {
    fontVariantNumeric: "tabular-nums",
    color: themeVars.text.muted,
    flexShrink: 0,
  },
]);

export const articleLink = style([
  textStyles.body3,
  {
    fontFamily: FONT_DISPLAY,
    letterSpacing: typographyVars.tracking[200],
    color: themeVars.text.default,
    ":hover": {
      color: themeVars.text.muted,
    },
  },
]);
