import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"

export default defineConfig({
  site: "https://iamdanielmarino.com",
  integrations: [preact()],
  redirects: {
    "/uses": "/posts/what-im-using-2026/",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai",
    },
  },
})
