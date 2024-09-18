let circles = []

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER)
}

function draw() {
  background(0)

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i]
    c.show()

    // Is it a growing one?
    if (c.growing) {
      c.grow()

      // Does it overlap any previous circles?
      for (let j = 0; j < circles.length; j++) {
        let other = circles[j]

        if (other != c) {
          let d = dist(c.x, c.y, other.x, other.y)

          if (d - 1 < c.r + other.r) {
            c.growing = false
          }
        }
      }

      // Is it stuck to an edge?
      if (c.growing) {
        c.growing = !c.edges()
      }
    }
  }

  // Let's try to make a certain number of new circles each frame
  // More later
  let target = 1 + constrain(floor(frameCount / 120), 0, 20)

  // How many
  let count = 0

  // Try N times
  for (let i = 0; i < 1000; i++) {
    if (addCircle()) {
      count++
    }

    // We made enough
    if (count == target) {
      break
    }
  }

  // We can't make any more
  if (count < 1) {
    noLoop()
  }
}

// Add one circle
function addCircle() {
  // Here's a new circle
  let newCircle = new Circle(random(width), random(height), 1)

  // Is it in an ok spot?
  for (let i = 0; i < circles.length; i++) {
    let other = circles[i]
    let d = dist(newCircle.x, newCircle.y, other.x, other.y)

    if (d < other.r + 4) {
      newCircle = undefined
      break
    }
  }

  // If it is, add it
  if (newCircle) {
    circles.push(newCircle)
    return true
  }
}

class Circle {
  constructor(x, y, r) {
    this.growing = true
    this.a = random(45)
    this.x = x
    this.y = y
    this.r = r
  }

  edges() {
    return (
      this.r > width - this.x ||
      this.r > this.x ||
      this.r > height - this.y ||
      this.r > this.y
    )
  }

  grow() {
    this.r += 1
  }

  show() {
    push()
    fill(0)
    stroke(255)
    translate(this.x, this.y)
    rotate(this.a)
    square(0, 0, this.r * 2)
    pop()
  }
}
