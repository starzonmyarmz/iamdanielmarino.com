import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Optional accent color for this article: drives link color, voxel
    // palette, and background tint. OKLCH so lightness/chroma/hue stay
    // independently tunable (e.g. "oklch(60% 0.12 250)"). Unset articles
    // keep the title-seeded voxel hue and no link/background tint.
    color: z.string().optional(),
  }),
})

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    order: z.number(),
    slug: z.string(),
  }),
})

export const collections = { posts, work }
