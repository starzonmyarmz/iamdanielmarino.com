function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)
  noFill()

  tile({ cols: 24 }, ({x, y, tile_width, tile_height}) => {
    push()
    translate(x + tile_width / 2, y + tile_height / 2)
    stroke(`#${random(["e63946","f1faee","a8dadc","457b9d","1d3557"])}`)
    if (random() > 0.5) circle(x, y, x * 2)
    pop()
  })

  noLoop()
}
