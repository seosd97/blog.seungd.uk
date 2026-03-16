import { globalStyle, style } from "@vanilla-extract/css";

import { layoutVars } from "./layout.css";
import { themeVars } from "./theme.css";
import { typographyVars } from "./typography.css";
import { textStyles } from "./typography.semantic.css";

export const prose = style([
  textStyles.body1,
  {
    maxWidth: "72ch",
    color: themeVars.text.default,
  },
]);

globalStyle(`${prose} p`, {
  marginBottom: layoutVars.space.md,
});

globalStyle(`${prose} h2`, {
  fontSize: typographyVars.size[1000],
  lineHeight: typographyVars.lineHeight[200],
  letterSpacing: typographyVars.tracking[100],
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.sm,
});

globalStyle(`${prose} h3`, {
  fontSize: typographyVars.size[800],
  lineHeight: typographyVars.lineHeight[300],
  letterSpacing: typographyVars.tracking[200],
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.xs,
});

globalStyle(`${prose} h4`, {
  fontSize: typographyVars.size[700],
  lineHeight: typographyVars.lineHeight[400],
  letterSpacing: typographyVars.tracking[100],
  marginTop: layoutVars.space.md,
  marginBottom: layoutVars.space.xs,
});

globalStyle(`${prose} > :first-child`, {
  marginTop: 0,
});

globalStyle(`${prose} blockquote`, {
  borderLeft: `2px solid ${themeVars.quote.border}`,
  backgroundColor: "transparent",
  paddingLeft: "0.75rem",
  marginLeft: 0,
  marginRight: 0,
  marginBottom: layoutVars.space.md,
  fontStyle: "italic",
  fontSize: typographyVars.size[400],
  color: themeVars.text.soft,
});

globalStyle(`${prose} blockquote p`, {
  marginBottom: 0,
});

globalStyle(`${prose} ul, ${prose} ol`, {
  paddingLeft: "1.25rem",
  marginBottom: layoutVars.space.md,
});

globalStyle(`${prose} li`, {
  marginBottom: layoutVars.space.xs,
});

globalStyle(`${prose} pre`, {
  backgroundColor: themeVars.code.bg,
  border: `1px solid ${themeVars.code.border}`,
  borderRadius: layoutVars.radius.md,
  padding: "0.75rem",
  overflowX: "auto",
  marginBottom: layoutVars.space.md,
});

globalStyle(`${prose} pre code`, {
  fontSize: typographyVars.size[300],
  lineHeight: typographyVars.lineHeight[600],
  background: "none",
  padding: 0,
  borderRadius: 0,
  color: themeVars.code.text,
});

globalStyle(`${prose} :not(pre) > code`, {
  backgroundColor: themeVars.code.inlineBg,
  padding: "0.125em 0.375em",
  borderRadius: layoutVars.radius.sm,
  color: themeVars.code.text,
});

globalStyle(`${prose} hr`, {
  border: "none",
  borderTop: `1px solid ${themeVars.border.subtle}`,
  marginTop: layoutVars.space.lg,
  marginBottom: layoutVars.space.lg,
});

globalStyle(`${prose} a:hover`, {
  textDecoration: "underline",
});

globalStyle(`${prose} img`, {
  width: "100%",
  height: "auto",
  marginTop: layoutVars.space.md,
  marginBottom: layoutVars.space.md,
  borderRadius: layoutVars.radius.sm,
});
