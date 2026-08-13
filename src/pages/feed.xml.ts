import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
  if (!context.site) throw new Error("feed.xml: `site` is not configured in astro.config.mjs")

  const posts = await getCollection("posts")
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return rss({
    title: "Daniel Marino",
    description: "Product designer living in New Hampshire",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  })
}
