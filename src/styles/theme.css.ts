import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css";

import { colorVars, themeVars } from "./theme.contract.css";

export { colorVars, themeVars };

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
    "300a2": "rgb(137 173 255 / 0.02)",
    "300a18": "rgb(137 173 255 / 0.18)",
    "400a2": "rgb(95 135 246 / 0.02)",
    "400a4": "rgb(95 135 246 / 0.04)",
    "400a7": "rgb(95 135 246 / 0.07)",
    "400a8": "rgb(95 135 246 / 0.08)",
    "400a10": "rgb(95 135 246 / 0.10)",
    "400a14": "rgb(95 135 246 / 0.14)",
    "400a16": "rgb(95 135 246 / 0.16)",
    "400a18": "rgb(95 135 246 / 0.18)",
    "500a10": "rgb(58 99 222 / 0.10)",
    "950a92": "rgb(13 20 43 / 0.92)",
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
    "400a12": "rgb(240 163 33 / 0.12)",
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
    muted: colorVars.silver[700],
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
    default: colorVars.lilac[700],
    hover: colorVars.lilac[800],
    visited: colorVars.iris[600],
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
    canvas: colorVars.cobalt[950],
    subtle: `color-mix(in srgb, ${colorVars.cobalt[900]} 38%, ${colorVars.cobalt[950]})`,
    muted: `color-mix(in srgb, ${colorVars.cobalt[900]} 48%, ${colorVars.cobalt[950]})`,
    elevated: `color-mix(in srgb, ${colorVars.cobalt[900]} 42%, ${colorVars.cobalt[950]})`,
    inset: colorVars.cobalt[950],
    softPrimary: colorVars.cobalt["400a2"],
    softSecondary: colorVars.cobalt["300a2"],
    overlay: colorVars.cobalt["950a92"],
  },
  text: {
    strong: colorVars.silver[50],
    default: colorVars.silver[100],
    soft: colorVars.silver[200],
    muted: colorVars.silver[500],
    disabled: colorVars.silver[600],
    onAccent: colorVars.cobalt[950],
  },
  border: {
    subtle: colorVars.cobalt["400a8"],
    default: colorVars.cobalt["400a14"],
    strong: colorVars.cobalt["300a18"],
  },
  accent: {
    primary: colorVars.cobalt[300],
    primaryHover: colorVars.cobalt[200],
    primaryActive: colorVars.cobalt[400],
    secondary: colorVars.cobalt[400],
    secondaryHover: colorVars.cobalt[300],
    secondaryActive: colorVars.cobalt[500],
  },
  link: {
    default: colorVars.cobalt[300],
    hover: colorVars.cobalt[200],
    visited: colorVars.cobalt[400],
  },
  focus: {
    ring: colorVars.cobalt["400a18"],
  },
  selection: {
    bg: colorVars.cobalt["500a10"],
    text: colorVars.silver[50],
  },
  code: {
    bg: colorVars.cobalt[950],
    border: colorVars.cobalt["400a16"],
    text: colorVars.cobalt[100],
    inlineBg: colorVars.cobalt["400a8"],
  },
  quote: {
    bg: colorVars.cobalt["400a4"],
    border: colorVars.cobalt[400],
  },
  mark: {
    bg: colorVars.amber["400a12"],
    text: colorVars.silver[50],
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
      text: colorVars.cobalt[950],
    },
    secondary: {
      bg: `color-mix(in srgb, ${colorVars.cobalt[900]} 42%, ${colorVars.cobalt[950]})`,
      bgHover: `color-mix(in srgb, ${colorVars.cobalt[900]} 56%, ${colorVars.cobalt[950]})`,
      bgActive: `color-mix(in srgb, ${colorVars.cobalt[900]} 70%, ${colorVars.cobalt[950]})`,
      text: colorVars.silver[50],
    },
    ghost: {
      hover: colorVars.cobalt["400a7"],
      active: colorVars.cobalt["400a10"],
    },
  },
  gradient: {
    hero: `linear-gradient(160deg, ${colorVars.cobalt["400a4"]} 0%, ${colorVars.cobalt["300a2"]} 54%, transparent 100%)`,
    panel: `linear-gradient(165deg, color-mix(in srgb, ${colorVars.cobalt[900]} 34%, ${colorVars.cobalt[950]}) 0%, ${colorVars.cobalt[950]} 42%, color-mix(in srgb, ${colorVars.cobalt[900]} 28%, ${colorVars.cobalt[950]}) 100%)`,
  },
  shadow: {
    color: colorVars.cobalt[950],
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
