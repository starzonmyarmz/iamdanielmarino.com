// https://editor.p5js.org/rjgilmour/sketches/l3XM1tz6d

let hMap = []
let resolution = 5
let threshold = 3
let density = 50

function setup() {
  createCanvas(800, 800)
}

function draw() {
  noiseSeed(Date.now())
  background(255)

  for (let i = 0; i < 1 + width / resolution; i++) {
    hMap[i] = []
    
    for (let j = 0; j < 1 + height / resolution; j++) {
      hMap[i][j] = noise(i / density, j / density) * 100
    }
  }
  
  for (let i = 0; i < 1 + width / resolution; i++) {
    for (let j = 0; j < 1 + height / resolution; j++) {
      
      if (i < width / resolution && j < height / resolution) {
        let a = floor(hMap[i][j] / threshold)
        let b = floor(hMap[i + 1][j] / threshold)
        let c = floor(hMap[i][j + 1] / threshold)
        let d = floor(hMap[i + 1][j + 1] / threshold)
        
        let ab = 0
        let ac = 0
        let bcx = 0
        let bcy = 0
        let bd = 0
        let cd = 0
        let height = 0
        
        if (a != b) {
          let contour = threshold * max(a, b)
          height = contour
          let diff = abs(hMap[i][j] - hMap[i + 1][j])
          let add = abs(hMap[i][j] - contour)
          ab = i * resolution + resolution * add / diff
        }
        
        if (a != c) {
          let contour = threshold * max(a, c)
          height = contour
          
          let diff = abs(hMap[i][j] - hMap[i][j + 1])
          let add = abs(hMap[i][j] - contour)
          ac = j * resolution + resolution * add / diff
        }
        
        if (c != d) {
          let contour = threshold * max(c, d)
          height = contour
          
          let diff = abs(hMap[i][j + 1] - hMap[i+1][j + 1])
          let add = abs(hMap[i][j + 1] - contour)
          cd = i * resolution + resolution * add / diff
        }
        
        if (b != c) {
          let contour = threshold * max(b, c)
          height = contour
          
          let diff = abs(hMap[i+1][j] - hMap[i][j + 1])
          let add = abs(hMap[i+1][j] - contour)
          bcx = (i+1) * resolution - resolution * add / diff
          bcy = j * resolution + resolution * add / diff
        }
        
        if (b != d) {
          let contour = threshold * max(b, d)
          height = contour
          
          let diff = abs(hMap[i + 1][j] - hMap[i + 1][j + 1])
          let add = abs(hMap[i + 1][j] - contour)
          bd = j * resolution + resolution * add / diff
        }

        stroke(200)
        strokeWeight(1)

        if (height % 9 == 0) {
          stroke(0)
          strokeWeight(2)
        }
        
        if (ab) {
          if (ac) {
            line(ab, j * resolution, i * resolution, ac)
          }
          
          if (bcx || bcy) {
            line(ab, j * resolution, bcx, bcy)
          }
        } else if (ac) {
          if (bcx || bcy) {
            line(i * resolution, ac, bcx, bcy)
          }
        }
        
        if (cd) {
          if (bd) {
            line(cd, (j + 1) * resolution, (i + 1) * resolution, bd)
          }

          if (bcx || bcy) {
            line(cd, (j + 1) * resolution, bcx, bcy)
          }
        } else if (bd) {
          if (bcx || bcy) {
            line((i + 1) * resolution, bd, bcx, bcy)
          }
        }
      }
    }
  }

  noLoop()
}