function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(255)
  stroke(255)
  strokeWeight(2)

  tile({ cols: 12 }, ({x, y, tile_width}) => {
    fill(random([
      "#6B8E23", "#FF4500", "#2E8B57", "#8A2BE2", "#FF6347", "#4682B4", 
      "#D2691E", "#32CD32", "#FFD700", "#DC143C", "#ADFF2F", "#00CED1", 
      "#FF69B4", "#1E90FF", "#8B4513", "#7FFF00", "#DA70D6", "#20B2AA", 
      "#FF8C00", "#9ACD32", "#9400D3", "#00FA9A", "#FFA07A", "#40E0D0"
    ]))  
    push()
    translate(x + tile_width / 2, y + tile_width / 2)
    square(
      -tile_width / 2,
      -tile_width / 2, 
      random([tile_width, 0]), 
      random([tile_width, 0]),
      random([tile_width, 0]),
      random([tile_width, 0])
    )
    pop()
  })

  noLoop()
}