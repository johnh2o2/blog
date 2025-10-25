import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    authors: z.array(z.string()),
    journal: z.string().optional(),
    arxiv: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = { posts, projects, research };
