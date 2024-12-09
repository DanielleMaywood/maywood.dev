import readingTime from "reading-time";
import { toString as astToString } from "mdast-util-to-string";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

export const remarkReadingTime: RemarkPlugin<[]> = () => {
	return (tree, { data }) => {
		const textOnPage = astToString(tree);

		// biome-ignore lint/style/noNonNullAssertion: We want this to crash on failure
		data.astro!.frontmatter!.readingTime = readingTime(textOnPage).text;
	};
};
