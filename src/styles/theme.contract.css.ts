import { createGlobalThemeContract } from "@vanilla-extract/css";

const toKebabCase = (value: string) =>
  value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const scaleContract = {
  50: null,
  100: null,
  200: null,
  300: null,
  400: null,
  500: null,
  600: null,
  700: null,
  800: null,
  900: null,
  950: null,
} as const;

const neutralScaleContract = {
  0: null,
  ...scaleContract,
} as const;

const primaryContract = {
  ...scaleContract,
  "400a2": null,
  "400a4": null,
  "400a8": null,
  "400a12": null,
  "400a18": null,
  "300a24": null,
  "400a32": null,
} as const;

const amberContract = {
  ...scaleContract,
  "400a12": null,
} as const;

const secondaryContract = {
  ...scaleContract,
  "300a2": null,
  "300a18": null,
  "400a2": null,
  "400a4": null,
  "400a7": null,
  "400a8": null,
  "400a10": null,
  "400a14": null,
  "400a16": null,
  "400a18": null,
  "400a24": null,
  "500a10": null,
  "950a48": null,
  "950a92": null,
} as const;

const colorContract = {
  sand: neutralScaleContract,
  primary: primaryContract,
  secondary: secondaryContract,
  silver: scaleContract,
  amber: amberContract,
} as const;

const semanticContract = {
  bg: {
    canvas: null,
    subtle: null,
    muted: null,
    elevated: null,
    inset: null,
    overlay: null,
  },
  text: {
    strong: null,
    default: null,
    soft: null,
    muted: null,
    disabled: null,
    onAccent: null,
  },
  border: {
    subtle: null,
    default: null,
    strong: null,
  },
  accent: {
    primary: null,
    primaryHover: null,
    primaryActive: null,
    secondary: null,
    secondaryHover: null,
    secondaryActive: null,
  },
  link: {
    default: null,
    hover: null,
    visited: null,
  },
  focus: {
    ring: null,
  },
  selection: {
    bg: null,
    text: null,
  },
  code: {
    bg: null,
    border: null,
    text: null,
    inlineBg: null,
  },
  quote: {
    bg: null,
    border: null,
  },
  mark: {
    bg: null,
    text: null,
  },
  button: {
    ghost: {
      hover: null,
      active: null,
    },
  },
} as const;

export const colorVars = createGlobalThemeContract(
  colorContract,
  (_, path) => `color-${path.map(toKebabCase).join("-")}`,
);

export const themeVars = createGlobalThemeContract(semanticContract, (_, path) =>
  path.map(toKebabCase).join("-"),
);
