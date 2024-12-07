// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://daniellemaywood.uk",
	integrations: [
		icon({
			include: {
				ph: ["*"],
			},
		}),
		sitemap(),
		robotsTxt(),
	],
});
