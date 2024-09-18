const colors = [
  "#FF0000", // Red
  "#0000FF", // Blue
  "#FFFFFF", // White
  "#B22234", // Dark Red
  "#3C3B6E", // Dark Blue
  "#FFD700", // Gold (for a sparkly effect)
  "#A9A9A9", // Dark Gray (for contrast)
  "#00BFFF", // Deep Sky Blue
  "#DC143C", // Crimson Red
  "#8A2BE2"  // Blue Violet
]

const spacing = 5

const allOptions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
  { dx: 1, dy: 1 },
  { dx: -1, dy: -1 },
  { dx: -1, dy: 1 },
  { dx: 1, dy: -1 }
]

function setup() {
  createCanvas(800, 800)
}

function draw() {
  let grid = []
  let rows = floor(width / spacing)
  let cols = floor(height / spacing)

  function isValid(i, j) {
    if (i < 1 || i >= cols - 1 || j < 1 || j >= rows - 1) {
      return false
    }
    return !grid[i][j]
  }

  for (let r = 0; r < rows; r++) {
    grid.push([])
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r].push(0)
    }
  }

  background(255)
  strokeWeight(1)

  let x, y
  let done

  for (let i = 0; i < 500; i++) {
    x = floor(random(cols))
    y = floor(random(rows))
    done = false

    stroke(random(colors))

    if (grid[x][y] === 0) {
      while (!done) {
        let options = []

        for (let option of allOptions) {
          let newX = x + option.dx
          let newY = y + option.dy

          if (isValid(newX, newY)) options.push(option)
        }

        if (options.length > 0) {
          let step = random(options)
          strokeWeight(spacing / (i * .01))
          point(x * spacing, y * spacing)

          x += step.dx
          y += step.dy

          grid[x][y] = 1
        } else {
          done = true
        }
      }
    }
    i++
  }

  noLoop()
}
