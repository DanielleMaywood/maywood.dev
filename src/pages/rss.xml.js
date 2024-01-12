import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blogEntries = await getCollection("blog", ({ data }) => {
    if (import.meta.env.DEV) return true;

    return data.published;
  });

  return rss({
    title: "maywood.dev blog",
    description: "A feed of my blog posts",
    site: context.site,
    items: blogEntries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.published,
      description: entry.data.description,
      link: `/blog/${entry.slug}/`,
    })),
  });
}
