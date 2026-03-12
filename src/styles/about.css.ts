import { style } from "@vanilla-extract/css";

const displayFont =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif';

export const wrapper = style({
  width: `min(56rem, 100% - 4rem)`,
  margin: "0 auto",
  paddingTop: "2rem",
  paddingBottom: "1.5rem",
});

export const title = style({
  fontSize: "1.375rem",
  fontWeight: 600,
  fontFamily: displayFont,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  marginBottom: "1.5rem",
});
