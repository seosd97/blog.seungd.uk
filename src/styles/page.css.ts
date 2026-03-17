import { style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";
import { CONTAINER, FONT_DISPLAY } from "./tokens";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";

export const pageWrapper = style({
  width: CONTAINER,
  margin: "0 auto",
  paddingTop: layoutVars.space.lg,
  paddingBottom: layoutVars.space.lg,
});

export const pageTitle = style([
  textStyles.display,
  {
    fontFamily: FONT_DISPLAY,
    fontWeight: typographyVars.weight[600],
    color: themeVars.text.strong,
    marginBottom: layoutVars.space.sm,
  },
]);

export const pageTitleLink = style({
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    color: "inherit",
  },
});

export const pageHeading = pageTitle;
