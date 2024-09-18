colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#fff"]

function setup() {
  createCanvas(800, 800)
}

function draw() {

  for (color of colors) {

    stroke(color)

    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        push()
        translate(i * 20, j * 20)
        switch (random(['top', 'left', 'right', 'bottom'])) {
          case 'top':
            line(0, 0, 20, 0)
            break
          case 'left':
            line(0, 0, 0, 20)
            break
          case 'right':
            line(20, 0, 20, 20)
            break
          case 'bottom':
            line(0, 20, 20, 20)
            break
        }

        pop()
      }
    }
  }

  fill(255)
  line(0, 0, 800, 0)
  line(0, 0, 0, 800)
  line(800, 0, 800, 800)
  line(0, 800, 800, 800)

  noLoop()
}