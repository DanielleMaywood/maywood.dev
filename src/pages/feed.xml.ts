import type { AstroConfig } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

export async function GET(context: AstroConfig) {
	const parser = new MarkdownIt();
	const posts = await getCollection("posts");

	return rss({
		title: "Danielle Maywood's Blog",
		description: "A collection of my personal rambling.",
		// biome-ignore lint/style/noNonNullAssertion: This is always set
		site: context.site!,
		items: posts
			// We only want published posts
			.filter((post) => post.data.date !== undefined)
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.date,
				link: `/posts/${post.id}`,
				// biome-ignore lint/style/noNonNullAssertion: Posts have bodies
				content: sanitizeHtml(parser.render(post.body!), {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
				}),
			})),
	});
}
