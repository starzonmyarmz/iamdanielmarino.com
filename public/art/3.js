let colors
let rotations

function setup() {
  createCanvas(800, 800)
  colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"]
  rotations = [0, HALF_PI, PI, HALF_PI + PI]
}

function draw() {
  background(255)
  noStroke()

  tile({ cols: 24 }, ({x, y, tile_width, tile_height}) => {
    fill(random(colors))
    push()
    translate(x + tile_width / 2, y + tile_height / 2)
    rotate(random(rotations))    
    arc(-tile_width / 2, -tile_height / 2, tile_width * 2, tile_height * 2, 0, HALF_PI, CHORD)
    pop()
  })

  noLoop()
}
