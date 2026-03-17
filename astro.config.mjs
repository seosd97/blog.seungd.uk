import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://blog.seungd.uk",
  redirects: {
    "/a": "/",
  },
  integrations: [react(), sitemap(), icon()],
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
