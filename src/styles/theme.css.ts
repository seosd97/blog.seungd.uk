import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

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

const feedbackContract = {
  bg: null,
  border: null,
  text: null,
} as const;

const buttonContract = {
  bg: null,
  bgHover: null,
  bgActive: null,
  text: null,
} as const;

const colorContract = {
  sand: neutralScaleContract,
  lilac: scaleContract,
  ice: scaleContract,
  night: scaleContract,
  cobalt: scaleContract,
  iris: scaleContract,
  silver: scaleContract,
  green: scaleContract,
  amber: scaleContract,
  red: scaleContract,
  sky: scaleContract,
} as const;

const semanticContract = {
  bg: {
    canvas: null,
    subtle: null,
    muted: null,
    elevated: null,
    inset: null,
    softPrimary: null,
    softSecondary: null,
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
  feedback: {
    success: feedbackContract,
    warning: feedbackContract,
    danger: feedbackContract,
    info: feedbackContract,
  },
  button: {
    primary: buttonContract,
    secondary: buttonContract,
    ghost: {
      hover: null,
      active: null,
    },
  },
  gradient: {
    hero: null,
    panel: null,
  },
  shadow: {
    color: null,
  },
} as const;

export const colorVars = createGlobalThemeContract(
  colorContract,
  (_, path) => `color-${path.map(toKebabCase).join("-")}`,
);

export const themeVars = createGlobalThemeContract(semanticContract, (_, path) =>
  path.map(toKebabCase).join("-"),
);

createGlobalTheme(":root", colorVars, {
  sand: {
    0: "#ffffff",
    50: "#fafaf9",
    100: "#f5f5f3",
    200: "#ececea",
    300: "#dddcda",
    400: "#c5c4c1",
    500: "#a8a7a3",
    600: "#888785",
    700: "#6b6a68",
    800: "#4b4a49",
    900: "#2e2d2c",
    950: "#1c1b1a",
  },
  lilac: {
    50: "#faf6ff",
    100: "#f2ebff",
    200: "#e4d6ff",
    300: "#d2bbff",
    400: "#bb9cf9",
    500: "#a27fe6",
    600: "#8868c7",
    700: "#6c4ea3",
    800: "#50397a",
    900: "#36264f",
    950: "#21172f",
  },
  ice: {
    50: "#f4f9ff",
    100: "#e9f3ff",
    200: "#d2e5ff",
    300: "#b2d3ff",
    400: "#88b9f5",
    500: "#629bd8",
    600: "#4b7db3",
    700: "#3c628d",
    800: "#2f4a67",
    900: "#203141",
    950: "#121c26",
  },
  night: {
    50: "#f5f2fb",
    100: "#ece6f6",
    200: "#d9cdea",
    300: "#bfaed8",
    400: "#9e89be",
    500: "#7d679b",
    600: "#64507d",
    700: "#4b3c5f",
    800: "#342943",
    900: "#1d1727",
    950: "#0e0b13",
  },
  cobalt: {
    50: "#eef4ff",
    100: "#dbe7ff",
    200: "#b8ceff",
    300: "#89adff",
    400: "#5f87f6",
    500: "#3a63de",
    600: "#284bbc",
    700: "#213c96",
    800: "#1d3272",
    900: "#182750",
    950: "#0d142b",
  },
  iris: {
    50: "#f3efff",
    100: "#e7deff",
    200: "#d1c0ff",
    300: "#b59dfd",
    400: "#9677ea",
    500: "#7c5ecb",
    600: "#684aad",
    700: "#53398a",
    800: "#3f2c66",
    900: "#2c1f45",
    950: "#171027",
  },
  silver: {
    50: "#f8f9fc",
    100: "#eff2f7",
    200: "#dee3ec",
    300: "#c9d1de",
    400: "#aab5c7",
    500: "#8b97ab",
    600: "#6e7b90",
    700: "#566174",
    800: "#3e4656",
    900: "#262b36",
    950: "#171b22",
  },
  green: {
    50: "#eef9f1",
    100: "#d9f0df",
    200: "#b7e1c2",
    300: "#8dcea0",
    400: "#5fb77a",
    500: "#36995a",
    600: "#267b46",
    700: "#1d5f36",
    800: "#17482a",
    900: "#12351f",
    950: "#091e11",
  },
  amber: {
    50: "#fff7e8",
    100: "#fdecc8",
    200: "#fbd996",
    300: "#f6be5a",
    400: "#f0a321",
    500: "#d6860a",
    600: "#ae6907",
    700: "#855005",
    800: "#613b04",
    900: "#452a03",
    950: "#261700",
  },
  red: {
    50: "#fff1f1",
    100: "#ffe0e0",
    200: "#ffc2c2",
    300: "#ff9999",
    400: "#f26464",
    500: "#db3f3f",
    600: "#b52d2d",
    700: "#8c2222",
    800: "#661919",
    900: "#461111",
    950: "#250808",
  },
  sky: {
    50: "#eff7ff",
    100: "#dbecff",
    200: "#b6d8ff",
    300: "#82baff",
    400: "#4996f2",
    500: "#2276d6",
    600: "#175db0",
    700: "#13498a",
    800: "#123763",
    900: "#102746",
    950: "#081426",
  },
});

const lightTheme = {
  bg: {
    canvas: colorVars.sand[0],
    subtle: colorVars.ice[50],
    muted: colorVars.ice[100],
    elevated: colorVars.sand[0],
    inset: colorVars.ice[200],
    softPrimary: colorVars.lilac[50],
    softSecondary: colorVars.ice[50],
    overlay: "rgb(18 14 32 / 0.48)",
  },
  text: {
    strong: colorVars.night[900],
    default: colorVars.night[800],
    soft: colorVars.night[700],
    muted: colorVars.silver[600],
    disabled: colorVars.silver[500],
    onAccent: "#ffffff",
  },
  border: {
    subtle: colorVars.ice[100],
    default: colorVars.silver[200],
    strong: colorVars.silver[400],
  },
  accent: {
    primary: colorVars.lilac[400],
    primaryHover: colorVars.lilac[500],
    primaryActive: colorVars.lilac[600],
    secondary: colorVars.ice[400],
    secondaryHover: colorVars.ice[500],
    secondaryActive: colorVars.ice[600],
  },
  link: {
    default: colorVars.lilac[600],
    hover: colorVars.lilac[700],
    visited: colorVars.iris[500],
  },
  focus: {
    ring: "rgb(187 156 249 / 0.32)",
  },
  selection: {
    bg: "rgb(187 156 249 / 0.18)",
    text: colorVars.night[900],
  },
  code: {
    bg: "#f6f9ff",
    border: colorVars.ice[200],
    text: colorVars.ice[700],
    inlineBg: colorVars.ice[50],
  },
  quote: {
    bg: colorVars.lilac[50],
    border: colorVars.lilac[200],
  },
  mark: {
    bg: colorVars.amber[100],
    text: colorVars.night[900],
  },
  feedback: {
    success: {
      bg: colorVars.green[50],
      border: colorVars.green[200],
      text: colorVars.green[700],
    },
    warning: {
      bg: colorVars.amber[50],
      border: colorVars.amber[200],
      text: colorVars.amber[700],
    },
    danger: {
      bg: colorVars.red[50],
      border: colorVars.red[200],
      text: colorVars.red[700],
    },
    info: {
      bg: colorVars.sky[50],
      border: colorVars.sky[200],
      text: colorVars.sky[700],
    },
  },
  button: {
    primary: {
      bg: colorVars.lilac[500],
      bgHover: colorVars.lilac[600],
      bgActive: colorVars.lilac[700],
      text: "#ffffff",
    },
    secondary: {
      bg: colorVars.ice[50],
      bgHover: colorVars.ice[100],
      bgActive: colorVars.ice[200],
      text: colorVars.night[900],
    },
    ghost: {
      hover: colorVars.lilac[50],
      active: colorVars.lilac[100],
    },
  },
  gradient: {
    hero: "linear-gradient(135deg, rgb(187 156 249 / 0.16) 0%, rgb(136 185 245 / 0.20) 100%)",
    panel: "linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)",
  },
  shadow: {
    color: "20 22 38",
  },
} as const;

const darkTheme = {
  bg: {
    canvas: "#0d1327",
    subtle: "#111933",
    muted: "#162042",
    elevated: "#18233d",
    inset: "#0a1021",
    softPrimary: "rgb(95 135 246 / 0.18)",
    softSecondary: "rgb(150 119 234 / 0.12)",
    overlay: "rgb(3 5 11 / 0.76)",
  },
  text: {
    strong: "#f0f0ee",
    default: colorVars.silver[100],
    soft: colorVars.silver[200],
    muted: colorVars.silver[500],
    disabled: colorVars.silver[600],
    onAccent: "#0d1327",
  },
  border: {
    subtle: "rgb(95 135 246 / 0.14)",
    default: "rgb(95 135 246 / 0.24)",
    strong: "rgb(150 119 234 / 0.28)",
  },
  accent: {
    primary: colorVars.cobalt[400],
    primaryHover: colorVars.cobalt[300],
    primaryActive: colorVars.cobalt[500],
    secondary: colorVars.iris[400],
    secondaryHover: colorVars.iris[300],
    secondaryActive: colorVars.iris[500],
  },
  link: {
    default: colorVars.cobalt[200],
    hover: colorVars.cobalt[100],
    visited: colorVars.iris[200],
  },
  focus: {
    ring: "rgb(150 119 234 / 0.36)",
  },
  selection: {
    bg: "rgb(58 99 222 / 0.24)",
    text: "#f0f0ee",
  },
  code: {
    bg: "#101735",
    border: "rgb(95 135 246 / 0.22)",
    text: colorVars.cobalt[100],
    inlineBg: "rgb(95 135 246 / 0.12)",
  },
  quote: {
    bg: "rgb(150 119 234 / 0.10)",
    border: colorVars.iris[400],
  },
  mark: {
    bg: "rgb(240 163 33 / 0.18)",
    text: "#f0f0ee",
  },
  feedback: {
    success: {
      bg: colorVars.green[950],
      border: colorVars.green[800],
      text: colorVars.green[200],
    },
    warning: {
      bg: colorVars.amber[950],
      border: colorVars.amber[800],
      text: colorVars.amber[200],
    },
    danger: {
      bg: colorVars.red[950],
      border: colorVars.red[800],
      text: colorVars.red[200],
    },
    info: {
      bg: colorVars.sky[950],
      border: colorVars.sky[800],
      text: colorVars.sky[200],
    },
  },
  button: {
    primary: {
      bg: colorVars.cobalt[400],
      bgHover: colorVars.cobalt[300],
      bgActive: colorVars.cobalt[500],
      text: "#0d1327",
    },
    secondary: {
      bg: "#162042",
      bgHover: "#1d2a55",
      bgActive: "#24356b",
      text: "#f0f0ee",
    },
    ghost: {
      hover: "rgb(95 135 246 / 0.10)",
      active: "rgb(150 119 234 / 0.16)",
    },
  },
  gradient: {
    hero: "linear-gradient(135deg, rgb(95 135 246 / 0.24) 0%, rgb(150 119 234 / 0.16) 40%, rgb(13 19 39 / 0.96) 100%)",
    panel: "linear-gradient(180deg, #172142 0%, #101735 100%)",
  },
  shadow: {
    color: "3 5 11",
  },
} as const;

createGlobalTheme(":root", themeVars, lightTheme);

globalStyle(":root", {
  colorScheme: "light",
});

globalStyle(':root[data-theme="dark"]', {
  colorScheme: "dark",
  vars: assignVars(themeVars, darkTheme),
});

export const defaultTheme = "light";
export const themeStorageKey = "blog-theme";
