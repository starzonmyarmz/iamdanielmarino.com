let padding = 0

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER)
}

function draw() {
  background(255)

  let circles = []

  function addCircles(hex, num, size) {
    for (let i = 0; i < num; i++) {
      let circle = new Circle(random(width), random(height), size, hex)
      let overlapping = false

      for (let p = 0; p < circles.length; p++) {
        let d = dist(circle.x, circle.y, circles[p].x, circles[p].y)

        if (d < circle.r + circles[p].r + padding) {
          overlapping = true
          break
        }
      }

      if (!overlapping && !circle.edges()) {
        circles.push(circle)
      }
    }
  }

  // Warm Yellow: #FFD700 (Yellow)
  // Flame Orange: #FFA500 (Orange)
  // Goldenrod: #DAA520 (Yellow-Orange)
  // Fiery Red: #FF4500 (Red-Orange)
  // Burnt Sienna: #E97451 (Red)
  // Ember Brown: #8B4513 (Brown)
  // Charcoal Black: #333333 (Black)

  addCircles('#FFD700', 200, 128)
  addCircles('#FFA500', 200, 64)
  addCircles('#DAA520', 1000, 32)
  addCircles('#FF4500', 3000, 16)
  addCircles('#E97451', 6000, 8)
  addCircles('#8B4513', 12000, 4)
  addCircles('#333333', 24000, 2)

  circles.forEach(circle => circle.show())

  noLoop()
}

class Circle {
  constructor(x, y, r, hex) {
    this.x = x
    this.y = y
    this.r = r
    this.c = hex
  }

  edges() {
    return (
      this.r > width - this.x ||
      this.r > this.x ||
      this.r > height - this.y ||
      this.r > this.y
    )
  }

  show() {
    // fill(this.c)
    // noStroke()

    fill(255)
    stroke(this.c)

    circle(this.x, this.y, this.r * 2)
  }
}
