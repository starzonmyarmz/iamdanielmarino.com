const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/filters/date-filter.js')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy('src/favicon.png')
  eleventyConfig.addPassthroughCopy('src/favicon.svg')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/font')
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter('dateFilter', dateFilter)

  eleventyConfig.addCollection('all_posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse()
  })

  eleventyConfig.addCollection('recent_posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ]
      .reverse()
      .slice(0, 2)
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
