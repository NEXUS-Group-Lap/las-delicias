import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  // TODO: replace with the final domain once purchased, or pass SITE=https://your-domain.com at build time.
  site: process.env.SITE ?? "https://panaderialasdelicias.com",
  // Set at build time for the floresnexus.cards/las-delicias preview deploy; defaults to root for the eventual standalone domain.
  base: process.env.BASE_PATH ?? "/",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", es: "es" },
      },
    }),
  ],
});
