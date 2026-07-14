import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  // Overridden at build time by the floresnexus-cards monorepo workflow
  // (SITE_URL=https://floresnexus.cards). Falls back to this repo's own
  // standalone GitHub Pages project site otherwise.
  site: process.env.SITE_URL ?? "https://nexus-group-lap.github.io",
  // Overridden at build time by the floresnexus-cards monorepo workflow
  // (BASE_PATH=/las-delicias/). Falls back to this repo's own project-page
  // path for standalone deploys.
  base: process.env.BASE_PATH ?? "/las-delicias/",
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
