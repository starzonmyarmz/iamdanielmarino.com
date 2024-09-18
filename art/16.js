class Bit {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    fill(0)
    noStroke()
    square(this.x, this.y, 2, 3)
  }
}

function setup() {
  createCanvas(800, 800)
}

function draw() {
  noiseSeed(Date.now())
  background(255)

  let bits = []
  let dither = width / 2

  for (let y = 1; y < height; y++) {
    for (let x = 0; x < dither; x++) {
      bits.push(new Bit(
        Math.floor(random(0, width)),
        Math.floor(y * 2)
      ))
    }
    dither--
  }

  for (bit of bits) bit.show()

  noLoop()
}