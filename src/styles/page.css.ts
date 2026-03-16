import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";
import { CONTAINER_NARROW, CONTAINER_WIDE, FONT_DISPLAY } from "./tokens";

export const pageWrapper = style({
  width: CONTAINER_NARROW,
  margin: "0 auto",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.lg,
});

export const pageWrapperWide = style({
  width: CONTAINER_WIDE,
  margin: "0 auto",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.lg,
});

export const pageTitle = style([
  textStyles.display,
  {
    fontFamily: FONT_DISPLAY,
    fontWeight: typographyVars.weight[600],
    marginBottom: layoutVars.space.sm,
  },
]);

export const pageHeading = pageTitle;
