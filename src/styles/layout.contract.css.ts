import { createGlobalThemeContract } from "@vanilla-extract/css";

export const layoutVars = createGlobalThemeContract(
  {
    space: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      xxl: null,
    },
  },
  (_, path) => path.join("-"),
);
