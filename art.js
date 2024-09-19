// Takes two integers and creates a 2D array

function create2DArray(rows, cols) {
  const arr = []
  for (let i = 0; i < cols; i++) arr.push(Array(rows).fill(0))
  return arr
}



// The first parameter accepts an object with either one or two values:
// - With a single value, it creates a grid with the same number of rows and columns.
// - With two values, it creates a grid with different rows and columns.
// The second parameter is a function that determines how each tile is repeated or rendered.

function tile(options, f) {
  const {
    cols,
    rows = cols
  } = options

  const tile_width = width / cols
  const tile_height = height / rows

  for (let x = 0; x < width; x += tile_width) {
    for (let y = 0; y < height; y += tile_height) {
      f({ x, y, tile_width, tile_height })
    }
  }
}



// Redraw the canvas when clicking on it

document.addEventListener('click', ({ target }) => {
  if (target.matches('canvas')) redraw()
})



// Save an image of the current canvas when pressing "s"

document.addEventListener('keydown', ({ key }) => {
  if (key === 's') saveCanvas(`${document.querySelector('title').innerText}_${Date.now()}`, 'webp')
})
