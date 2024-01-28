module.exports = function categoryFilter(arr, category) {
  return arr.filter((item) => item.data['tags'].includes(category))
}
