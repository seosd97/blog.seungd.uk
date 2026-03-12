import { style } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

const cardShadow = `0 24px 80px rgb(${themeVars.shadow.color} / 0.12)`;
const softShadow = `0 14px 40px rgb(${themeVars.shadow.color} / 0.08)`;

export const page = style({
  minHeight: "100vh",
  padding: "2rem 0 4rem",
  backgroundColor: themeVars.bg.canvas,
});

export const shell = style({
  width: "min(1080px, calc(100% - 2rem))",
  margin: "0 auto",
  display: "grid",
  gap: "1.25rem",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "min(1080px, calc(100% - 3rem))",
      gap: "1.5rem",
    },
  },
});

export const hero = style({
  display: "grid",
  gap: "1rem",
  padding: "1.25rem",
  borderRadius: "2rem",
  border: `1px solid ${themeVars.border.subtle}`,
  background: themeVars.gradient.hero,
  boxShadow: cardShadow,
  "@media": {
    "screen and (min-width: 900px)": {
      gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, 0.85fr)",
      padding: "1.6rem",
    },
  },
});

export const content = style({
  display: "grid",
  gap: "1rem",
  alignContent: "start",
});

export const eyebrow = style({
  color: themeVars.accent.primary,
  fontSize: "0.82rem",
  fontWeight: "700",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
});

export const title = style({
  maxWidth: "10ch",
  fontSize: "clamp(2.6rem, 4vw + 1rem, 5.2rem)",
  lineHeight: 0.95,
});

export const lead = style({
  maxWidth: "58ch",
  color: themeVars.text.soft,
  fontSize: "1rem",
});

export const actions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
});

const actionBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "3rem",
  padding: "0.85rem 1.15rem",
  borderRadius: "999px",
  border: "1px solid transparent",
  fontSize: "0.95rem",
  fontWeight: "700",
  transition:
    "transform 160ms ease, background-color 160ms ease, border-color 160ms ease, color 160ms ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-1px)",
    },
  },
});

export const primaryAction = style([
  actionBase,
  {
    backgroundColor: themeVars.button.primary.bg,
    color: themeVars.button.primary.text,
    selectors: {
      "&:hover": {
        backgroundColor: themeVars.button.primary.bgHover,
      },
    },
  },
]);

export const secondaryAction = style([
  actionBase,
  {
    borderColor: themeVars.border.default,
    backgroundColor: themeVars.bg.elevated,
    color: themeVars.text.strong,
    selectors: {
      "&:hover": {
        backgroundColor: themeVars.button.ghost.hover,
      },
    },
  },
]);

export const panel = style({
  display: "grid",
  gap: "1rem",
  alignContent: "start",
  padding: "1.15rem",
  borderRadius: "1.5rem",
  border: `1px solid ${themeVars.border.subtle}`,
  backgroundColor: themeVars.bg.elevated,
  boxShadow: softShadow,
});

export const panelEyebrow = style({
  color: themeVars.text.muted,
  fontSize: "0.76rem",
  fontWeight: "700",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
});

export const metricGrid = style({
  display: "grid",
  gap: "0.75rem",
});

export const metricCard = style({
  display: "grid",
  gap: "0.25rem",
  padding: "0.9rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.bg.subtle,
  border: `1px solid ${themeVars.border.subtle}`,
});

export const metricValue = style({
  color: themeVars.text.strong,
  fontSize: "1.2rem",
  fontWeight: "700",
});

export const metricLabel = style({
  color: themeVars.text.soft,
  fontSize: "0.92rem",
});

export const panelNote = style({
  color: themeVars.text.muted,
  fontSize: "0.92rem",
});

export const featureGrid = style({
  display: "grid",
  gap: "1rem",
  "@media": {
    "screen and (min-width: 820px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
});

export const featureCard = style({
  display: "grid",
  gap: "0.6rem",
  padding: "1.2rem",
  borderRadius: "1.35rem",
  border: `1px solid ${themeVars.border.subtle}`,
  backgroundColor: themeVars.bg.elevated,
  boxShadow: softShadow,
});

export const featureTitle = style({
  fontSize: "1.35rem",
  lineHeight: 1.05,
});

export const featureCopy = style({
  color: themeVars.text.soft,
  fontSize: "0.96rem",
});

export const footer = style({
  padding: "1rem 0 0",
  color: themeVars.text.muted,
  fontSize: "0.92rem",
});
