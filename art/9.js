function setup() {
  createCanvas(800, 800)
}

function draw() {
  const segments = 24

  background(0)
  noFill()

  for (let i = 0; i < segments; i++) {
    let colors = random(['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'])

    stroke(colors)
    strokeWeight(1)

    beginShape()
    curveVertex(0, 0)

    for (let j = 0; j < segments; j++) {
      noiseSeed(Date.now())

      let x = j * width / segments
      let y

      if (j == 0) {
        y = 0
      } else {
        y = noise(j) * height
      }

      curveVertex(x, y)
    }

    curveVertex(width, height)
    curveVertex(width, height)
    endShape()
  }

  fill(0)
  noStroke()

  for (let q = 0; q < width; q++) {
    if (random([true, false, false])) {
      rect(q, 0, 1, height)
    }
  }

  noLoop()
}
