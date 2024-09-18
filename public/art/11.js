const colors = ["#4e6e00", "#295c2e", "#bce6c3", "#80cd8d", "#69a060"]

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)

  for (let space = 0; space < width; space++) {
    stroke(random(colors))
    if (random() > 0.5) line(space, 0, space, height)
    if (random() > 0.5) line(0, space, width, space)

    stroke(255)
    if (random() > 0.2) line(space, 0, space, height)
    if (random() > 0.2) line(0, space, width, space)
  }

  noLoop()
}
