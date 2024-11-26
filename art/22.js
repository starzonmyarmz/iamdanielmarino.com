function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)
  noFill()

  for (let x = 0; x < width / 16; x++) {
    stroke(`rgba(${int(random(100, 200))}, 0, ${int(random(100, 200))}, ${random(0.1, 0.9)})`)

    bezier(
      width / 2, 5,
      random(100, width - 100), random(16, height - 16),
      random(100, width - 100), random(16, height - 16),
      x * 16, random(height / 2, height - 16),
      )
  }

  noLoop()
}
