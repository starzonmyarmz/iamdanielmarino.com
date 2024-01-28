const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const categoryFilter = require('./src/filters/category-filter.js')
const dateFilter = require('./src/filters/date-filter.js')
const md = require('markdown-it')
const implicitFigures = require('markdown-it-image-figures');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(implicitFigures, {
    figcaption: true,
    lazy: true
  }))

  eleventyConfig.addPassthroughCopy('src/favicon.png')
  eleventyConfig.addPassthroughCopy('src/favicon.svg')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/font')
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter('categoryFilter', categoryFilter)
  eleventyConfig.addFilter('dateFilter', dateFilter)

  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse()
  })

  eleventyConfig.addCollection("work", collection => {
    return [
      ...collection.getFilteredByGlob("src/work/*.md")
        .sort((a, b) => {
          return a.data.order - b.data.order
        })
    ]
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
