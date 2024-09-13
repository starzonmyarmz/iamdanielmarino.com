---
title: My GIF Workflow Using Eleventy, Netlify, and Alfred
date: 2021-02-13
tags: post
---

I used to keep my GIFs on Dropbox in the `/public` directory. There was a time when Dropbox would serve content as HTML from this directory. This was a simple way to share my GIFs with the world. I even adopted an [Alfred workflow](https://destroytoday.com/blog/gif-workflow) for quickly searching and copying my GIFs URL to the clipboard. Back in 2017, Dropbox disabled the ability to render HTML from the `/public` directory, and thus this workflow stopped working.

Since then I’ve been keeping my personal collection of GIFs in a GitHub repo—which has been just okay. I really missed having a quick way to search and copy URLs. To use a GIF I’d have to go to the repo, find the image, view the raw image, and  finally manually copy the url from the browser. Lame.

A few weeks ago, I decided to give my GIF workflow an upgrade!

I started by turning my [GIFs repo](https://github.com/starzonmyarmz/gifs) into a static site using [Eleventy](https://www.11ty.dev/). The static site consists of two primary things: a directory with all of my GIFs, and a [generated JSON file](https://github.com/starzonmyarmz/gifs/blob/main/src/gifs.njk) listing all my GIFs (more on this in a bit).

I created a new site on Netlify that watches my GIFs repo, and runs a build process anytime I push to `main` branch. This only took a few minutes to set up, and all my GIFs are now easily accessible by URL.

I was still missing a component though—a quick and easy way to search for GIFs and copy their URLs. I built an [Alfred script](https://github.com/starzonmyarmz/gifz-alfred-workflow/blob/main/index.js) using [Alfy](https://github.com/sindresorhus/alfy) to handle this part. Alfy is so cool to work with, allowing you to build Alfred workflows using JavaScript and Node. The Alfred Script takes an input, and searches for it against the [JSON file on the Netlify site](https://gifz.netlify.app/gifs.json). When I find the GIF I want, it copies the URL to the clipboard.

![My gif flow using Alfred App](/img/gif_workflow.gif)

This update was well-needed, and I find myself using my personal GIFs much more often now! I only wish I had done something like this much sooner.
