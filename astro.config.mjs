// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://blog.seungd.uk",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-light",
        dark: "dracula",
      },
    },
  },
});
