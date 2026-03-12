import { createGlobalTheme } from "@vanilla-extract/css";

import { layoutVars } from "./layout.contract.css";

export { layoutVars };

createGlobalTheme(":root", layoutVars, {
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
  },
});
