import { createGlobalTheme } from "@vanilla-extract/css";

import { typographyVars } from "./typography.contract.css";

export { typographyVars };

createGlobalTheme(":root", typographyVars, {
  root: {
    size: "16px",
  },
  size: {
    100: "0.75rem",
    200: "0.8125rem",
    300: "0.875rem",
    400: "0.9375rem",
    500: "1rem",
    600: "1.0625rem",

    700: "1.125rem",
    800: "1.25rem",
    900: "1.375rem",
    1000: "1.5rem",
    1100: "1.75rem",
    1200: "clamp(1.25rem, 2vw, 1.5rem)",
    1300: "clamp(1.75rem, 2.75vw, 2.125rem)",
  },
  lineHeight: {
    100: "1.2",
    200: "1.3",
    300: "1.35",
    400: "1.4",
    500: "1.5",
    600: "1.6",
    700: "1.62",
    800: "1.64",
    850: "1.7",
    900: "1.8",
  },
  tracking: {
    100: "-0.02em",
    200: "-0.015em",
    300: "-0.01em",
    400: "0.02em",
    500: "0.04em",
    600: "0.05em",
    700: "0.06em",
    800: "0.08em",
  },
  weight: {
    400: "400",
    500: "500",
    600: "600",
    650: "650",
    700: "700",
  },
});
