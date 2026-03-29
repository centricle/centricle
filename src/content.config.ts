import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { thoughts };
