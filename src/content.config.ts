import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import { projectCategories, type ProjectCategory } from "./projectCategories"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
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

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      blurb: z.string(),
      category: z.enum(Object.keys(projectCategories) as [ProjectCategory]),
      platforms: z.string().optional(),
      url: z.string().url().optional(),
      icon: image(),
    }),
})

export const collections = { posts, work, projects }
