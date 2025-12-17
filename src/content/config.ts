import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    _schema: z.string().optional(),
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
        map_link: z.string(),
      }),
    }),
    about: z.object({
      title: z.string(),
      content: z.array(z.string()),
    }),
    commitment: z.object({
      title: z.string(),
      content: z.array(z.string()),
    }),
    modalities: z.object({
      title: z.string(),
      content: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        })
      ),
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
