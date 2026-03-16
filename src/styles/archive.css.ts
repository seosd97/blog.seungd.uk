import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";
import { FONT_DISPLAY } from "./tokens";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";

export const yearSection = style({
  marginBottom: layoutVars.space.xl,
});

export const yearHeading = style([
  textStyles.heading2,
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
  gap: layoutVars.space.md,
  paddingTop: layoutVars.space.xs,
  paddingBottom: layoutVars.space.xs,
});

export const articleDate = style([
  textStyles.caption3,
  {
    fontVariantNumeric: "tabular-nums",
    color: themeVars.text.muted,
    flexShrink: 0,
  },
]);

export const articleLink = style([
  textStyles.caption1,
  {
    fontFamily: FONT_DISPLAY,
    letterSpacing: typographyVars.tracking[200],
    color: themeVars.text.default,
    ":hover": {
      color: themeVars.text.muted,
    },
  },
]);
