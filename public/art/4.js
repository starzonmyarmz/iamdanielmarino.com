const padding = 2

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)
  stroke(0)

  tile({ cols: 16 }, ({x, y, tile_width, tile_height}) => {
    fill(random(["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"]))
    rect(
      x + padding,
      y + padding,
      tile_width - padding * 2,
      tile_height - padding * 2
    )
  })

  noLoop()
}
