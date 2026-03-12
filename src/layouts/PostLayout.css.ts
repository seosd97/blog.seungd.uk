import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { CONTAINER_NARROW } from "../styles/tokens";

export const postTitle = style({
  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
  lineHeight: 1.2,
});

export const metadata = style({
  fontSize: "0.75rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: themeVars.text.muted,
});

export const article = style({
  width: CONTAINER_NARROW,
  margin: "0 auto",
  paddingTop: layoutVars.space.xxl,
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
  paddingTop: "0.625rem",
});

export const backLink = style({
  color: themeVars.text.muted,
  fontSize: "0.75rem",
  ":hover": {
    color: themeVars.link.hover,
  },
});
