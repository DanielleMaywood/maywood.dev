import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    published: z.optional(z.date()),
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
