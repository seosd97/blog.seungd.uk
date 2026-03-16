import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";
import { CONTAINER_WIDE } from "../styles/tokens";

export const header = style({
  width: CONTAINER_WIDE,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: layoutVars.space.md,
  paddingTop: "0.8rem",
  paddingBottom: "0.8rem",
  borderBottom: `1px solid ${themeVars.border.subtle}`,
  "@media": {
    "screen and (max-width: 720px)": {
      alignItems: "flex-start",
      gap: layoutVars.space.sm,
    },
  },
});

export const logo = style([
  textStyles.title2,
  {
    fontWeight: typographyVars.weight[650],
    letterSpacing: typographyVars.tracking[100],
    lineHeight: typographyVars.lineHeight[100],
    color: themeVars.text.strong,
  },
]);

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.sm,
  minWidth: 0,
  "@media": {
    "screen and (max-width: 720px)": {
      gap: layoutVars.space.xs,
    },
  },
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.sm,
});

export const navLink = style([
  textStyles.label1,
  {
    fontWeight: typographyVars.weight[600],
    letterSpacing: typographyVars.tracking[500],
    color: themeVars.text.soft,
    transition: "color 160ms ease",
    ":hover": {
      color: themeVars.text.strong,
    },
    ":focus-visible": {
      color: themeVars.text.strong,
    },
  },
]);

export const navLinkActive = style({
  color: themeVars.text.strong,
});
