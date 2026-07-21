import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"

export default defineConfig({
  site: "https://iamdanielmarino.com",
  integrations: [preact()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai",
    },
  },
})
