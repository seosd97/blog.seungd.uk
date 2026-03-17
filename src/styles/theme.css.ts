import { assignVars, createGlobalTheme, globalStyle } from "@vanilla-extract/css";

import { colorVars, themeVars } from "./theme.contract.css";

export { colorVars, themeVars };

createGlobalTheme(":root", colorVars, {
  white: "#ffffff",
  primary: {
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
    "400a2": "rgb(162 177 245 / 0.02)",
    "400a4": "rgb(162 177 245 / 0.04)",
    "400a8": "rgb(162 177 245 / 0.08)",
    "400a12": "rgb(162 177 245 / 0.12)",
    "400a18": "rgb(162 177 245 / 0.18)",
    "300a24": "rgb(195 207 255 / 0.24)",
    "400a32": "rgb(162 177 245 / 0.32)",
  },
  secondary: {
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
    "300a2": "rgb(217 189 255 / 0.02)",
    "300a18": "rgb(217 189 255 / 0.18)",
    "400a2": "rgb(190 151 242 / 0.02)",
    "400a4": "rgb(190 151 242 / 0.04)",
    "400a7": "rgb(190 151 242 / 0.07)",
    "400a8": "rgb(190 151 242 / 0.08)",
    "400a10": "rgb(190 151 242 / 0.10)",
    "400a14": "rgb(190 151 242 / 0.14)",
    "400a16": "rgb(190 151 242 / 0.16)",
    "400a18": "rgb(190 151 242 / 0.18)",
    "400a24": "rgb(190 151 242 / 0.24)",
    "500a10": "rgb(166 117 219 / 0.10)",
    "950a48": "rgb(28 16 40 / 0.48)",
    "950a92": "rgb(28 16 40 / 0.92)",
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
});

const lightTheme = {
  bg: {
    canvas: colorVars.white,
    subtle: colorVars.secondary[50],
    muted: colorVars.secondary[100],
    elevated: colorVars.white,
  },
  text: {
    strong: colorVars.silver[900],
    default: colorVars.silver[800],
    soft: colorVars.silver[700],
    muted: colorVars.silver[600],
    disabled: colorVars.silver[500],
  },
  border: {
    subtle: colorVars.secondary[100],
    default: colorVars.secondary[200],
    strong: colorVars.secondary[400],
  },
  accent: {
    primary: colorVars.primary[400],
    primaryHover: colorVars.primary[500],
    primaryActive: colorVars.primary[600],
  },
  link: {
    default: colorVars.primary[700],
    hover: colorVars.primary[800],
  },
  focus: {
    ring: colorVars.primary["300a24"],
  },
  selection: {
    bg: colorVars.primary["400a18"],
    text: colorVars.silver[900],
  },
  code: {
    bg: colorVars.secondary[100],
    border: colorVars.secondary[200],
    text: colorVars.primary[700],
    inlineBg: colorVars.primary[50],
  },
  quote: {
    bg: colorVars.primary[50],
    border: colorVars.primary[200],
  },
  button: {
    ghost: {
      hover: colorVars.primary[100],
      active: colorVars.primary[200],
    },
  },
} as const;

const darkTheme = {
  bg: {
    canvas: colorVars.silver[950],
    subtle: `color-mix(in srgb, ${colorVars.silver[900]} 38%, ${colorVars.silver[950]})`,
    muted: `color-mix(in srgb, ${colorVars.silver[900]} 48%, ${colorVars.silver[950]})`,
    elevated: `color-mix(in srgb, ${colorVars.silver[900]} 42%, ${colorVars.silver[950]})`,
  },
  text: {
    strong: colorVars.silver[50],
    default: colorVars.silver[100],
    soft: colorVars.silver[200],
    muted: colorVars.silver[400],
    disabled: colorVars.silver[600],
  },
  border: {
    subtle: colorVars.secondary["400a10"],
    default: colorVars.secondary["400a18"],
    strong: colorVars.secondary["400a24"],
  },
  accent: {
    primary: colorVars.primary[200],
    primaryHover: colorVars.primary[300],
    primaryActive: colorVars.primary[400],
  },
  link: {
    default: colorVars.primary[300],
    hover: colorVars.primary[400],
  },
  focus: {
    ring: colorVars.primary["400a32"],
  },
  selection: {
    bg: colorVars.primary["300a24"],
    text: colorVars.silver[50],
  },
  code: {
    bg: colorVars.silver[900],
    border: colorVars.secondary["400a18"],
    text: colorVars.primary[300],
    inlineBg: colorVars.primary["400a18"],
  },
  quote: {
    bg: colorVars.primary["400a12"],
    border: colorVars.primary[400],
  },
  button: {
    ghost: {
      hover: colorVars.primary["400a18"],
      active: colorVars.primary["300a24"],
    },
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
