import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";
import { FONT_DISPLAY } from "../styles/tokens";


export const layout = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 14.5rem",
  gap: layoutVars.space.xl,
  alignItems: "start",
  "@media": {
    "screen and (max-width: 940px)": {
      gridTemplateColumns: "1fr",
      gap: layoutVars.space.lg,
    },
  },
});

export const mainColumn = style({
  minWidth: 0,
});

export const sideRail = style({
  display: "grid",
  gap: layoutVars.space.md,
  alignContent: "start",
  position: "sticky",
  top: "5rem",
  marginTop: "0.15rem",
  "@media": {
    "screen and (max-width: 940px)": {
      position: "static",
      top: "auto",
      marginTop: 0,
    },
  },
});

export const articleCount = style([
  textStyles.label2,
  {
    margin: 0,
    fontWeight: typographyVars.weight[600],
    textTransform: "uppercase",
    color: themeVars.text.muted,
  },
]);

export const articleStream = style({
  display: "grid",
});

export const articleRow = style({
  display: "grid",
  gridTemplateColumns: "6.4rem minmax(0, 1fr)",
  gap: layoutVars.space.sm,
  padding: `${layoutVars.space.md} 0`,
  borderBottom: `1px solid ${themeVars.border.subtle}`,
  ":first-child": {
    borderTop: `1px solid ${themeVars.border.subtle}`,
  },
  "@media": {
    "screen and (max-width: 720px)": {
      gridTemplateColumns: "1fr",
      gap: "0.32rem",
      padding: `${layoutVars.space.sm} 0`,
    },
  },
});

export const articleDate = style([
  textStyles.label1,
  {
    textTransform: "uppercase",
    color: themeVars.text.muted,
    fontVariantNumeric: "tabular-nums",
  },
]);

export const articleContent = style({
  display: "grid",
  gap: "0.26rem",
});

export const articleTitle = style([
  textStyles.heading2,
  {
    fontWeight: typographyVars.weight[600],
    fontFamily: FONT_DISPLAY,
    color: themeVars.text.strong,
    textDecoration: "none",
    transition: "color 160ms ease",
    ":hover": {
      color: themeVars.link.hover,
    },
  },
]);

export const articleDesc = style([
  textStyles.body2,
  {
    margin: 0,
    maxWidth: "66ch",
    color: themeVars.text.default,
  },
]);

export const articleMeta = style([
  textStyles.caption2,
  {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.45rem",
    color: themeVars.text.muted,
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

export const tagBrowse = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.35rem 0.5rem",
});

export const tagBrowseLink = style([
  textStyles.caption3,
  {
    color: themeVars.text.muted,
    transition: "color 160ms ease",
    ":hover": {
      color: themeVars.text.strong,
    },
  },
]);

export const latestNote = style([
  textStyles.label1,
  {
    margin: 0,
    textTransform: "uppercase",
    color: themeVars.text.muted,
  },
]);

export const emptyState = style([
  textStyles.body3,
  {
    margin: `${layoutVars.space.md} 0 0`,
    color: themeVars.text.muted,
  },
]);
