import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import { unified } from "@astrojs/markdown-remark"
import rehypeFigure from "./src/plugins/rehype-figure.js"

export default defineConfig({
  site: "https://iamdanielmarino.com",
  integrations: [preact()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai",
    },
    processor: unified({
      rehypePlugins: [rehypeFigure],
    }),
  },
})
