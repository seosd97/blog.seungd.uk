import { style } from "@vanilla-extract/css";

import { layoutVars } from "../styles/layout.css";
import { themeVars } from "../styles/theme.css";
import { FONT_DISPLAY } from "../styles/tokens";
import { typographyVars } from "../styles/typography.css";

export const menuBtn = style({
  position: "relative",
  width: "3.5rem",
  height: "2.75rem",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  color: themeVars.text.soft,
  marginBottom: layoutVars.space.xl,
});

export const menuLine = style({
  position: "absolute",
  left: 0,
  width: "100%",
  height: 0,
  borderTop: `1px solid currentColor`,
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
  fontSize: typographyVars.size[1300],
  fontFamily: FONT_DISPLAY,
  fontWeight: typographyVars.weight[600],
  lineHeight: typographyVars.lineHeight[400],
  color: themeVars.text.strong,
  textDecoration: "none",
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.accent.primaryHover,
  },
});

export const overlayNavLinkActive = style({
  color: themeVars.text.muted,
});

export const overlayFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",
  paddingBottom: layoutVars.space.lg,
});

export const overlaySocial = style({
  display: "flex",
  alignItems: "center",
  gap: layoutVars.space.md,
});

export const overlaySocialLink = style({
  display: "inline-flex",
  color: themeVars.text.strong,
  transition: "color 160ms ease",
  ":hover": {
    color: themeVars.accent.primary,
  },
});
