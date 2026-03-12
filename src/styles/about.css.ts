import { style } from "@vanilla-extract/css";

import { CONTAINER_NARROW, FONT_DISPLAY } from "./tokens";

export const wrapper = style({
  width: CONTAINER_NARROW,
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "1.5rem",
});

export const title = style({
  fontSize: "1.375rem",
  fontWeight: 600,
  fontFamily: FONT_DISPLAY,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  marginBottom: "1.5rem",
});
