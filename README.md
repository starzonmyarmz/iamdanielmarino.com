# iamdanielmarino.com

My personal site, built with [Astro](https://astro.build) and deployed to [Netlify](https://www.netlify.com).

## Development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to dist/ and compresses images in dist/images
npm run preview  # serves dist/
npm run format   # Prettier
```

## Content

- **Posts** live in `src/content/posts/` as Markdown with `title` and `date` frontmatter.
- **Work** case studies live in `src/content/work/` with `title`, `blurb`, `order` and `slug`.
- **Images** referenced with Markdown syntax go in `src/assets/images/` and use a relative path, e.g. `![Alt](../../assets/images/posts/example.png)`, so Astro optimizes them. Images inside raw HTML (like the `<figure>`s on work pages) and videos go in `public/images/`.
- **Pages** like Projects, Resume and Uses are in `src/pages/`.

## Styles and fonts

Styles are in `src/styles/main.css`, imported by `src/layouts/Base.astro`.

Source Serif is self-hosted from `public/` as Latin subsets of the variable fonts. The subset command is in the commit that added them. If you replace a font, give it a new filename, since fonts are cached for a year.

## Deploying

Pushing to `main` deploys to production on Netlify. Build settings and cache headers are in `netlify.toml`.
