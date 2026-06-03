import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    name: z.string(),
    state: z.string().default('MN'),
    tagline: z.string(),
    population: z.string(),
    medianHomePrice: z.string(),
    distanceToGrandRapids: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Malcolm Wallaker'),
    city: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const geo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/geo' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Malcolm Wallaker'),
    city: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    faqSchema: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    city: z.string(),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cities, blog, geo, news };
