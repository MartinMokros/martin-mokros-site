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

// Each post = one Markdown file in src/content/news/
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    summary: z.string(),
  }),
});

// Each gallery item = one Markdown file in src/content/gallery/
// image is the lead photo; images[] are extra photos shown in the same lightbox entry.
const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),       // omit if unknown; shows as a mono HUD tag
    place: z.string().optional(),    // e.g. "London", "UCL"
    image: z.string(),               // lead image, e.g. "/media/gallery/aria-hq.jpg"
    images: z.array(z.string()).default([]), // additional images in the same entry
    caption: z.string(),             // the website explanation
    link: z.string().optional(),
    linkLabel: z.string().optional(),
    order: z.number().default(99),   // 1 = first
  }),
});

export const collections = { projects, news, gallery };
