let rows, cols, grid, space

function setup() {
  createCanvas(800, 800)

  space = 4
  rows = width / space
  cols = height / space
  grid = create2DArray(rows, cols)
}

function draw() {
  background(255)
  noFill()
  stroke(0)

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      strokeWeight(random(1, space))
      point(c * space + (space / 2), r * space + (space / 2))
    }
  }

  noLoop()
}
