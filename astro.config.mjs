import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://maywood.dev",
  integrations: [tailwind(), sitemap(), robotsTxt(), markdoc()],
});
