import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";
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

export const pageTitle = style([
  textStyles.heading1,
  {
    lineHeight: typographyVars.lineHeight[100],
    marginBottom: layoutVars.space.lg,
  },
]);
