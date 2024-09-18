function create2DArray(rows, cols) {
  const arr = []
  for (let i = 0; i < cols; i++) arr.push(Array(rows).fill(0))
  return arr
}

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

document.addEventListener('click', ({ target }) => {
  if (target.matches('canvas')) redraw()
})

document.addEventListener('keydown', ({ key }) => {
  if (key === 's') saveCanvas(`${document.querySelector('title').innerText}_${Date.now()}`, 'webp')
})
