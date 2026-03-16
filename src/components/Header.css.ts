import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { typographyVars } from "../styles/typography.css";
import { textStyles } from "../styles/typography.semantic.css";
import { CONTAINER_WIDE, FONT_DISPLAY } from "../styles/tokens";

export const header = style({
  width: CONTAINER_WIDE,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: layoutVars.space.md,
  paddingTop: layoutVars.space.md,
  paddingBottom: layoutVars.space.md,
});

export const logo = style([
  textStyles.title2,
  {
    fontFamily: FONT_DISPLAY,
    fontWeight: typographyVars.weight[600],
    letterSpacing: typographyVars.tracking[100],
    lineHeight: typographyVars.lineHeight[100],
    color: themeVars.text.strong,
  },
]);

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.sm,
});

export const menuBtn = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "4px",
  width: "1.75rem",
  height: "1.75rem",
  padding: "4px",
  border: "none",
  background: "none",
  cursor: "pointer",
  color: themeVars.text.strong,
});

export const menuLine = style({
  display: "block",
  width: "100%",
  height: "1.5px",
  backgroundColor: "currentColor",
  transition: "background-color 160ms ease",
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 100,
  backgroundColor: themeVars.bg.canvas,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 300ms ease, visibility 300ms ease",
  selectors: {
    '&[data-open="true"]': {
      opacity: 1,
      visibility: "visible",
    },
  },
});

export const overlayInner = style({
  position: "relative",
  padding: layoutVars.space.xl,
  paddingTop: "3.5rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const closeBtn = style({
  position: "absolute",
  top: layoutVars.space.md,
  right: layoutVars.space.xl,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  padding: 0,
  border: "none",
  background: "none",
  color: themeVars.text.strong,
  cursor: "pointer",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.muted,
  },
});

export const overlayNav = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const overlayNavLink = style({
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  fontFamily: FONT_DISPLAY,
  fontWeight: typographyVars.weight[600],
  lineHeight: 1.4,
  color: themeVars.text.strong,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.muted,
  },
});

export const overlayNavLinkActive = style({
  color: themeVars.text.muted,
});

export const overlaySocial = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.md,
  marginTop: "auto",
  paddingBottom: layoutVars.space.lg,
});

export const overlaySocialLink = style({
  display: "inline-flex",
  color: themeVars.text.strong,
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.text.muted,
  },
});
