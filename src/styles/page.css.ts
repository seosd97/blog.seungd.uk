import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { CONTAINER_NARROW, CONTAINER_WIDE } from "./tokens";

export const pageWrapper = style({
  width: CONTAINER_NARROW,
  margin: "0 auto",
  paddingTop: layoutVars.space.xl,
  paddingBottom: layoutVars.space.lg,
});

export const pageWrapperWide = style({
  width: CONTAINER_WIDE,
  margin: "0 auto",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.md,
});

export const pageTitle = style({
  fontSize: "1.375rem",
  lineHeight: 1.2,
  marginBottom: layoutVars.space.lg,
});
