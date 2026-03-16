import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { CONTAINER_WIDE } from "../styles/tokens";
import { textStyles } from "../styles/typography.semantic.css";

export const footer = style([
  textStyles.caption2,
  {
    width: CONTAINER_WIDE,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: layoutVars.space.xl,
    paddingTop: layoutVars.space.md,
    paddingBottom: layoutVars.space.md,
    borderTop: `1px solid ${themeVars.border.subtle}`,
    color: themeVars.text.muted,
  },
]);

export const info = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
});

export const dot = style({
  selectors: {
    "&::before": {
      content: '"·"',
    },
  },
});

export const inlineLink = style({
  color: themeVars.text.muted,
  ":hover": {
    color: themeVars.text.strong,
  },
});

export const socialLinks = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.sm,
});

export const socialLink = style({
  display: "inline-flex",
  color: themeVars.text.muted,
  ":hover": {
    color: themeVars.text.strong,
  },
});
