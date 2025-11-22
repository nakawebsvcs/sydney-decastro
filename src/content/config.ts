import { defineCollection, z } from "astro:content";

// CORRECTED schema that matches your ACTUAL data structure
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      buttons: z.array(
        z.object({
          text: z.string(),
          link: z.string(),
        })
      ),
      location: z.object({
        studio: z.string(),
        address: z.string(),
        map_link: z.string(),
      }),
    }),
    about: z.object({
      title: z.string(),
      content: z.array(z.string()), // This is correct - array of strings
    }),
    commitment: z.object({
      title: z.string(),
      content: z.array(z.string()), // This is correct - array of strings
    }),
    modalities: z.object({
      title: z.string(),
      content: z.array(z.string()), // This is correct - array of strings
    }),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
};
