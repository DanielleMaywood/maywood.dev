// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

// https://astro.build/config
export default defineConfig({
	site: "https://daniellemaywood.uk",
	markdown: {
		remarkPlugins: [remarkReadingTime],
		shikiConfig: {
			theme: {
				name: "Danielle",
				bg: "var(--surface-2)",
				fg: "var(--text-1)",
				tokenColors: [
					{
						scope: ["entity.name.type"],
						settings: {
							foreground: "var(--code-keyword)",
						},
					},
					{
						scope: ["string"],
						settings: {
							foreground: "var(--code-string)",
						},
					},
					{
						scope: ["constant"],
						settings: {
							foreground: "var(--code-constant)",
						},
					},
					{
						scope: ["variable.declaration", "variable.other"],
						settings: {
							foreground: "var(--code-variable)",
						},
					},
					{
						scope: ["keyword.operator"],
						settings: {
							foreground: "var(--code-fg)",
						},
					},
				],
			},
		},
	},
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
