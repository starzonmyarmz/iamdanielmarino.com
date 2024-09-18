const spacing = 20
const allOptions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 }
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

  let x, y
  let s = 0
  let c = 0
  let done

  for (let i = 0; i < 10000; i++) {
    x = floor(random(cols))
    y = floor(random(rows))
    done = false
    s++
    c++

    if (grid[x][y] === 0) {
      strokeWeight(s * .01)
      stroke(c * (255 / 10000))

      while (!done) {
        let options = []

        for (let option of allOptions) {
          let newX = x + option.dx
          let newY = y + option.dy

          if (isValid(newX, newY)) options.push(option)
        }

        if (options.length > 0) {
          let step = random(options)

          beginShape()
          vertex(x * spacing, y * spacing)
          x += step.dx
          y += step.dy
          vertex(x * spacing, y * spacing)
          endShape()
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
