import { createGlobalThemeContract } from "@vanilla-extract/css";

export const typographyVars = createGlobalThemeContract(
  {
    root: {
      size: null,
    },
    size: {
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
      1000: null,
      1100: null,
      1200: null,
      1300: null,
    },
    lineHeight: {
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
    tracking: {
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
    },
    weight: {
      400: null,
      500: null,
      600: null,
      650: null,
      700: null,
    },
  },
  (_, path) => `type-${path.join("-")}`,
);
