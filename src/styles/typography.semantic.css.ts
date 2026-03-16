import { type StyleRule } from "@vanilla-extract/css";

import { typographyVars } from "./typography.contract.css";

type TextStyle = Pick<StyleRule, "fontSize" | "lineHeight" | "letterSpacing" | "fontWeight">;

export const textStyles = {
  display: {
    fontSize: typographyVars.size[1300],
    lineHeight: typographyVars.lineHeight[100],
  },
  heading1: {
    fontSize: typographyVars.size[1000],
    lineHeight: typographyVars.lineHeight[200],
    letterSpacing: typographyVars.tracking[100],
  },
  heading2: {
    fontSize: typographyVars.size[800],
    lineHeight: typographyVars.lineHeight[300],
    letterSpacing: typographyVars.tracking[200],
  },
  heading3: {
    fontSize: typographyVars.size[700],
    lineHeight: typographyVars.lineHeight[400],
    letterSpacing: typographyVars.tracking[100],
  },
  title1: {
    fontSize: typographyVars.size[700],
    lineHeight: typographyVars.lineHeight[300],
    letterSpacing: typographyVars.tracking[200],
  },
  title2: {
    fontSize: typographyVars.size[600],
    lineHeight: typographyVars.lineHeight[300],
    letterSpacing: typographyVars.tracking[200],
  },
  title3: {
    fontSize: typographyVars.size[500],
    lineHeight: typographyVars.lineHeight[300],
    letterSpacing: typographyVars.tracking[200],
  },
  body1: {
    fontSize: typographyVars.size[600],
    lineHeight: typographyVars.lineHeight[900],
  },
  body2: {
    fontSize: typographyVars.size[500],
    lineHeight: typographyVars.lineHeight[700],
  },
  body3: {
    fontSize: typographyVars.size[400],
    lineHeight: typographyVars.lineHeight[800],
  },
  caption1: {
    fontSize: typographyVars.size[300],
    lineHeight: typographyVars.lineHeight[500],
  },
  caption2: {
    fontSize: typographyVars.size[200],
    lineHeight: typographyVars.lineHeight[500],
    letterSpacing: typographyVars.tracking[400],
  },
  caption3: {
    fontSize: typographyVars.size[100],
    lineHeight: typographyVars.lineHeight[500],
    letterSpacing: typographyVars.tracking[600],
  },
  code1: {
    fontSize: typographyVars.size[300],
    lineHeight: typographyVars.lineHeight[600],
  },
  label1: {
    fontSize: typographyVars.size[200],
    lineHeight: typographyVars.lineHeight[500],
    letterSpacing: typographyVars.tracking[700],
  },
  label2: {
    fontSize: typographyVars.size[100],
    lineHeight: typographyVars.lineHeight[500],
    letterSpacing: typographyVars.tracking[800],
  },
} as const satisfies Record<string, TextStyle>;
