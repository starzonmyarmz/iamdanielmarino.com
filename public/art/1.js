function setup() {
  createCanvas(800, 800)
  ellipseMode(CORNER)
  angleMode(DEGREES)
  frameRate(12)
}

function draw() {
  background(0)
  stroke(0)

  let tile = width / 12

  for (let x = 0; x < width; x += tile) {
    for (let y = 0; y < height; y += tile) {
      for (let z = 1; z < 8; z++) {
        let pos = (tile - (tile / z)) / 2

        rect(
          x + random(pos - 3, pos + 3),
          y + random(pos - 3, pos + 3),
          tile / z,
          tile / z
        )
      }
    }
  }

  noLoop()
}
