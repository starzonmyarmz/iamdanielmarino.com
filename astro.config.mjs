import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://iamdanielmarino.com",
  redirects: {
    "/subs": "/projects",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai",
    },
  },
})
