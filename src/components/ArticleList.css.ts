import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { FONT_DISPLAY } from "../styles/tokens";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";

export const listHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.sm,
});

export const articleCount = style([
  textStyles.label2,
  {
    fontWeight: typographyVars.weight[600],
    textTransform: "uppercase",
    color: themeVars.text.soft,
  },
]);

export const matchCount = style([
  textStyles.caption3,
  {
    color: themeVars.text.muted,
  },
]);

export const list = style({
  display: "flex",
  flexDirection: "column",
});

export const item = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.lg,
  borderBottom: `1px solid ${themeVars.border.subtle}`,
  ":first-child": {
    borderTop: `1px solid ${themeVars.border.subtle}`,
  },
});

export const date = style([
  textStyles.caption2,
  {
    color: themeVars.text.muted,
    fontVariantNumeric: "tabular-nums",
  },
]);

export const title = style([
  textStyles.heading2,
  {
    fontFamily: FONT_DISPLAY,
    fontWeight: typographyVars.weight[600],
    color: themeVars.text.strong,
    textDecoration: "none",
    lineHeight: typographyVars.lineHeight[400],
    transition: "color 160ms ease",
    ":hover": {
      color: themeVars.text.muted,
    },
  },
]);

export const desc = style([
  textStyles.caption1,
  {
    margin: 0,
    maxWidth: "66ch",
    fontWeight: typographyVars.weight[400],
    color: themeVars.text.default,
  },
]);

export const meta = style([
  textStyles.caption3,
  {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.45rem",
    color: themeVars.text.muted,
    marginTop: "0.125rem",
  },
]);

export const separator = style({
  selectors: {
    "&::before": {
      content: '"\\00b7"',
    },
  },
});

export const tagList = style({
  display: "inline-flex",
  gap: "0.42rem",
});

export const tag = style({
  color: themeVars.text.muted,
});

export const emptyState = style([
  textStyles.body3,
  {
    margin: `${layoutVars.space.md} 0 0`,
    color: themeVars.text.muted,
  },
]);
