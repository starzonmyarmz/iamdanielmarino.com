function gradient(options) {
  const {
    from,
    to,
    x = 0,
    w
  } = options

  for (let i = 0; i < w; i++) {
    let blend = map(i, 0, w, 0, 1)
    stroke(lerpColor(from, to, blend))
    line(x + i, 0, x + i, height)
  }
}

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)
  fill(255)
  strokeWeight(2)
  noiseSeed(Date.now())

  let rows = 70
  let cols = 16
  let xpad = 200
  let ypad_top = 14
  let ypad_bottom = 7
  let row_height = height / rows
  let col_width = (width - xpad * 2) / cols

  for (let row = ypad_top; row < rows - ypad_bottom; row++) {
    stroke(random(['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']))
    let y = row * row_height + (row_height - 1)
    
    beginShape()
    
    curveVertex(0, y)
    curveVertex(0, y)
    curveVertex(xpad / 2, y)

    for (let col = 0; col < cols; col++) {
      let x = col * col_width + xpad
      let d = dist(x, y, width / 2, y)
      curveVertex(x, y - noise(y + x * 0.03) * (width / 4 - d / 2))
    }

    curveVertex(width - xpad / 2, y)
    curveVertex(width, y)
    curveVertex(width, y)
    endShape()
  }

  gradient({
    from: color(255),
    to: color(255, 0),
    w: xpad / 2,
  })

  gradient({
    from: color(255, 0),
    to: color(255),
    x: width - xpad / 2,
    w: xpad / 2,
  })

  noLoop()
}
