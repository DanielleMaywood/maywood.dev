import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    published: z.optional(z.date()),
    description: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
