colors = ['#194D33', '#DBA507', '#8EC7D2', '#0D6986', '#0D6986']

function setup() {
  createCanvas(800, 800)
}

function draw() {
  noiseSeed(Date.now())
  background(255)

  for (let x = 0; x < width; x++) {
    let color = random(colors)
    stroke(color)

    if (random() > 0.5) {
      line(width / 2, height / 2, x, 0)
    } else {
      line(width / 2, height / 2, x, height)
    }
  }

  for (let y = 0; y < width; y++) {
    let color = random(colors)
    stroke(color)

    if (random() > 0.5) {
      line(width / 2, height / 2, 0, y)
    } else {
      line(width / 2, height / 2, width, y)
    }
  }

  noLoop()
}