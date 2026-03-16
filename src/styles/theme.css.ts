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
  sumirePrimary: {
    50: "#F5F7FF",
    100: "#EDF1FF",
    200: "#DCE3FF",
    300: "#C3CFFF",
    400: "#A2B1F5",
    500: "#8292E6",
    600: "#6C79CB",
    700: "#5A65AB",
    800: "#404772",
    900: "#2A2D47",
    950: "#0E1020",
    "300a2": "rgb(195 207 255 / 0.02)",
    "300a18": "rgb(195 207 255 / 0.18)",
    "400a2": "rgb(162 177 245 / 0.02)",
    "400a4": "rgb(162 177 245 / 0.04)",
    "400a7": "rgb(162 177 245 / 0.07)",
    "400a8": "rgb(162 177 245 / 0.08)",
    "400a10": "rgb(162 177 245 / 0.10)",
    "400a14": "rgb(162 177 245 / 0.14)",
    "400a16": "rgb(162 177 245 / 0.16)",
    "400a18": "rgb(162 177 245 / 0.18)",
    "500a10": "rgb(130 146 230 / 0.10)",
    "950a92": "rgb(14 16 32 / 0.92)",
  },
  sumireSecondary: {
    50: "#FBF7FF",
    100: "#F5EEFF",
    200: "#EAD9FF",
    300: "#D9BDFF",
    400: "#BE97F2",
    500: "#A475DB",
    600: "#8A5CBD",
    700: "#734B9B",
    800: "#603F7E",
    900: "#503565",
    950: "#1C1028",
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
    subtle: colorVars.sumirePrimary[50],
    muted: colorVars.sumirePrimary[100],
    elevated: colorVars.sand[0],
    inset: colorVars.sumirePrimary[200],
    softPrimary: colorVars.sumireSecondary[50],
    softSecondary: colorVars.sumirePrimary[50],
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
    subtle: colorVars.sumirePrimary[100],
    default: colorVars.silver[200],
    strong: colorVars.silver[400],
  },
  accent: {
    primary: colorVars.sumireSecondary[400],
    primaryHover: colorVars.sumireSecondary[500],
    primaryActive: colorVars.sumireSecondary[600],
    secondary: colorVars.sumirePrimary[400],
    secondaryHover: colorVars.sumirePrimary[500],
    secondaryActive: colorVars.sumirePrimary[600],
  },
  link: {
    default: colorVars.sumireSecondary[700],
    hover: colorVars.sumireSecondary[800],
    visited: colorVars.iris[600],
  },
  focus: {
    ring: "rgb(190 151 242 / 0.32)",
  },
  selection: {
    bg: "rgb(190 151 242 / 0.18)",
    text: colorVars.night[900],
  },
  code: {
    bg: "#f6f8ff",
    border: colorVars.sumirePrimary[200],
    text: colorVars.sumirePrimary[700],
    inlineBg: colorVars.sumirePrimary[50],
  },
  quote: {
    bg: colorVars.sumireSecondary[50],
    border: colorVars.sumireSecondary[200],
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
      bg: colorVars.sumireSecondary[500],
      bgHover: colorVars.sumireSecondary[600],
      bgActive: colorVars.sumireSecondary[700],
      text: "#ffffff",
    },
    secondary: {
      bg: colorVars.sumirePrimary[50],
      bgHover: colorVars.sumirePrimary[100],
      bgActive: colorVars.sumirePrimary[200],
      text: colorVars.night[900],
    },
    ghost: {
      hover: colorVars.sumireSecondary[50],
      active: colorVars.sumireSecondary[100],
    },
  },
  gradient: {
    hero: "none",
    panel: "none",
  },
  shadow: {
    color: "20 22 38",
  },
} as const;

const darkTheme = {
  bg: {
    canvas: colorVars.sumirePrimary[950],
    subtle: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 38%, ${colorVars.sumirePrimary[950]})`,
    muted: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 48%, ${colorVars.sumirePrimary[950]})`,
    elevated: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 42%, ${colorVars.sumirePrimary[950]})`,
    inset: colorVars.sumirePrimary[950],
    softPrimary: colorVars.sumirePrimary["400a2"],
    softSecondary: colorVars.sumirePrimary["300a2"],
    overlay: colorVars.sumirePrimary["950a92"],
  },
  text: {
    strong: colorVars.silver[50],
    default: colorVars.silver[100],
    soft: colorVars.silver[200],
    muted: colorVars.silver[500],
    disabled: colorVars.silver[600],
    onAccent: colorVars.sumirePrimary[950],
  },
  border: {
    subtle: colorVars.sumirePrimary["400a8"],
    default: colorVars.sumirePrimary["400a14"],
    strong: colorVars.sumirePrimary["300a18"],
  },
  accent: {
    primary: colorVars.sumireSecondary[300],
    primaryHover: colorVars.sumireSecondary[200],
    primaryActive: colorVars.sumireSecondary[400],
    secondary: colorVars.sumireSecondary[400],
    secondaryHover: colorVars.sumireSecondary[300],
    secondaryActive: colorVars.sumireSecondary[500],
  },
  link: {
    default: colorVars.sumireSecondary[300],
    hover: colorVars.sumireSecondary[200],
    visited: colorVars.sumireSecondary[400],
  },
  focus: {
    ring: "rgb(190 151 242 / 0.18)",
  },
  selection: {
    bg: "rgb(190 151 242 / 0.18)",
    text: colorVars.silver[50],
  },
  code: {
    bg: colorVars.sumirePrimary[950],
    border: colorVars.sumirePrimary["400a16"],
    text: colorVars.sumirePrimary[100],
    inlineBg: colorVars.sumirePrimary["400a8"],
  },
  quote: {
    bg: colorVars.sumirePrimary["400a4"],
    border: colorVars.sumireSecondary[400],
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
      bg: colorVars.sumireSecondary[400],
      bgHover: colorVars.sumireSecondary[300],
      bgActive: colorVars.sumireSecondary[500],
      text: colorVars.sumirePrimary[950],
    },
    secondary: {
      bg: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 42%, ${colorVars.sumirePrimary[950]})`,
      bgHover: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 56%, ${colorVars.sumirePrimary[950]})`,
      bgActive: `color-mix(in srgb, ${colorVars.sumirePrimary[900]} 70%, ${colorVars.sumirePrimary[950]})`,
      text: colorVars.silver[50],
    },
    ghost: {
      hover: colorVars.sumirePrimary["400a7"],
      active: colorVars.sumirePrimary["400a10"],
    },
  },
  gradient: {
    hero: "none",
    panel: "none",
  },
  shadow: {
    color: colorVars.sumirePrimary[950],
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
