import { globalKeyframes, globalStyle } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";
import { FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

// html bg needed for iOS overscroll color
globalStyle("html", {
  fontSize: "16px",
  backgroundColor: themeVars.bg.canvas,
  minHeight: "100%",
});

globalStyle("body", {
  margin: 0,
  minHeight: "100vh",
  backgroundColor: themeVars.bg.canvas,
  color: themeVars.text.default,
  fontFamily: FONT_BODY,
  lineHeight: 1.6,
  textRendering: "optimizeLegibility",
  transition: "background-color 180ms ease, color 180ms ease",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("img", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("a", {
  color: themeVars.link.default,
  textDecoration: "none",
  transition: "color 160ms ease",
});

globalStyle("a:hover", {
  color: themeVars.link.hover,
});

globalStyle("a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible", {
  outline: `2px solid ${themeVars.accent.primary}`,
  outlineOffset: "2px",
  borderRadius: "2px",
});

globalStyle("button, input, textarea, select", {
  font: "inherit",
});

globalStyle("strong", {
  color: themeVars.text.strong,
});

globalStyle("code, pre", {
  fontFamily: FONT_MONO,
});

globalStyle("pre", {
  margin: 0,
});

globalStyle("::selection", {
  backgroundColor: themeVars.selection.bg,
  color: themeVars.selection.text,
});

globalStyle("h1, h2, h3, h4", {
  color: themeVars.text.strong,
  fontFamily: FONT_DISPLAY,
  fontWeight: "600",
  letterSpacing: "-0.02em",
  margin: 0,
});

globalStyle("p", {
  margin: 0,
});

// Page load fade-in animation
globalKeyframes("fadeInUp", {
  from: {
    opacity: 0,
    transform: "translateY(8px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

globalStyle("main", {
  animation: "fadeInUp 400ms ease-out",
});

// Shiki dual theme: swap colors in dark mode
globalStyle(':root[data-theme="dark"] .astro-code', {
  color: "var(--shiki-dark)" as never,
  backgroundColor: "var(--shiki-dark-bg)" as never,
});

globalStyle(':root[data-theme="dark"] .astro-code span', {
  color: "var(--shiki-dark)" as never,
});

// Reduced motion support
globalStyle("*, *::before, *::after", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.01ms !important" as never,
      animationIterationCount: "1 !important" as never,
      transitionDuration: "0.01ms !important" as never,
    },
  },
});
