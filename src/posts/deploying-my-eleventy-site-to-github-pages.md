---
title: Deploying My Eleventy Site to GitHub Pages
date: 2020-03-02
tags:
  - development
---

I really like [GitHub Pages](https://pages.github.com/), and have used it to host my site for a while. The biggest challenge of switching my site to [Eleventy](https://www.11ty.dev/) was getting deployments to GitHub pages set up. I suppose I could have built my site locally, and then push that to the `gh-pages` branch, but that felt _wrong_. I prefer my `master` branch to be the source of my site, while `gh-pages` to only be the published content.

I’m aware of tools such as [Netlify](https://www.netlify.com/) and [Travis CI](https://travis-ci.com/) which aid in hosting or deployment processes. However I wasn’t looking to add another service into my tech stack. With some digging into [GitHub Actions](https://github.com/features/actions), this seemed like a plausible route for getting my site deployed without having to rely on an external service.

### Setting Up a GitHub Action

GitHub Actions allow you to automate workflows such as code deployment, running tests, compressing images, and so much more. GitHub has a whole _Marketplace_ where you can explore community-created actions. I’m using the [GitHub Pages action](https://github.com/marketplace/actions/github-pages-action) which handles everything I need for deploying. My workflow is fairly simple, and is largely based on the instructions for [Static Site Generators with Node.js](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs). In `/.github/workflows/eleventy_build.yml`, I have the following:

```yaml
name: Eleventy Build

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '10.x'

      - run: npm ci

      - run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: {% raw %}${{ secrets.ACTIONS_DEPLOY_KEY }}{% endraw %}
          publish_dir: ./dist
```

Depending on how your Eleventy project is set up you might need to make some tweaks to the defaults. I recommend checking out the rest of the [documentation](https://github.com/marketplace/actions/github-pages-action#table-of-contents) to see what you can do.

### Hey GitHub, I’m Not Using Jekyll

I found this to be the biggest hurdle, and it kind of buried in [GitHub’s documentation](https://help.github.com/en/github/working-with-github-pages/about-github-pages#static-site-generators). By default, GitHub tries to use Jekyll to build your site. If you’re using any syntax other than what Jekyll recognizes, then you _might_ get errors and your build could potentially fail. The good news is the fix is really easy. In the root of your project, include an empty file `.nojekyll`.

### Committing the Package Lock file

This GitHub action is an _automated environment_, so rather than use `npm install` our action should use `npm ci`. This ensures that you get a _clean install_ of your dependencies. One of the requirements for using `npm ci` is that the project **must** have an existing `package-lock.json`. I’m not really sure what the norm is here, but I don’t typically commit this file. So if you fall into that category, make sure you get that file committed!

### Creating an NPM Build Script

When it’s time for Eleventy to build your site when the `master` branch is pushed upstream, it needs to happen in the context of the Node environment. In my `package.json` I have a script mapped to the command `eleventy`:

```json
"scripts": {
  "build": "eleventy"
}
```

Now when `npm run build` runs in the GitHub action, it will know where to find the `eleventy` command.

### No SSH Deploy Key? No Deployment!

For security purposes, GitHub requires that you have a _deploy key_ and a corresponding _secret_ set up in the repository that this GitHub Action is in. There’s handy [step by step guide with screenshots](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-create-ssh-deploy-key) on how to create the deploy key and secret, as well as adding them to the repository.

In my case I’ve labelled my deploy key _ACTIONS_DEPLOY_KEY_. This is case-sensitive, so make sure you pay attention to what you call your deploy key!

### Wrapping Up

While I’m not sure if this is the best way to get my Eleventy site deployed to GitHub Pages, it meets my needs. As far as I can tell, this general deployment process would be fairly similar to set up with a service like Netlify or Travis CI. However I find it extremely satisfying not being dependent on extra services.
