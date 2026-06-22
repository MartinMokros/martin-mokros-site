import { defineCollection, z } from 'astro:content';

// Each project = one Markdown file in src/content/projects/
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    tag: z.string(),                 // small label, e.g. "Tropics · field"
    eyebrow: z.string().optional(),  // only on the featured project
    order: z.number().default(99),   // controls position (1 = first)
    featured: z.boolean().default(false), // renders as the big dark block
    scan: z.boolean().default(false),     // shows the Potree scan slot
    meta: z.array(z.string()).default([]),// the mono lines under the text
    externalUrl: z.string().optional(),
    externalLabel: z.string().optional(),
  }),
});

// Each post = one Markdown file in src/content/notes/
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    summary: z.string(),
  }),
});

export const collections = { projects, notes };
