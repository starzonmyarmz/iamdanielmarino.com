const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const dateFilter = require('./src/filters/date-filter.js')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy('src/favicon.png')
  eleventyConfig.addPassthroughCopy('src/favicon.svg')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/font')
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter('dateFilter', dateFilter)

  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse()
  })

  eleventyConfig.addCollection("work", collection => {
    const work = collection.getFilteredByGlob("src/work/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order)
      })
    return work
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
