const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const dateFilter = require('./src/_filters/date-filter.js')
const implicitFigures = require('markdown-it-image-figures');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(implicitFigures, {
    figcaption: true,
    lazy: true
  }))

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
    "./node_modules/prismjs/themes/prism-okaidia.css": "/prism-okaidia.css",
    "./src/img": "/img"
  })

  eleventyConfig.addFilter('dateFilter', dateFilter)

  eleventyConfig.addCollection("work", collection => {
    return [
      ...collection.getFilteredByTag("work")
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
