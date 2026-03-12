import { globalKeyframes, globalStyle } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

const bodyFont = '"Avenir Next", "Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", sans-serif';
const displayFont = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';
const monoFont = '"SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monospace';

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
  fontFamily: bodyFont,
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

globalStyle("button, input, textarea, select", {
  font: "inherit",
});

globalStyle("strong", {
  color: themeVars.text.strong,
});

globalStyle("code, pre", {
  fontFamily: monoFont,
});

globalStyle("pre", {
  margin: 0,
});

globalStyle("::selection", {
  backgroundColor: themeVars.selection.bg,
  color: themeVars.selection.text,
});

globalStyle("h1, h2, h3", {
  color: themeVars.text.strong,
  fontFamily: displayFont,
  fontWeight: "600",
  letterSpacing: "-0.04em",
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
