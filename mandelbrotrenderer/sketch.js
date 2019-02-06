function setup(){
  pixelDensity(1);
  createCanvas(800, 800)
  background(0)
  loadPixels()
  for(var x = 0; x<width; x++){
    for(var y = 0; y<height; y++){
      var origA = map(x, 0, width, -3, 2)
      var origB = map(y, 0, height, -2.5, 2.5)
      var a = 0
      var b = 0
      var n = 0
      while (n<100&&a*a+b*b<16){
        var aa = a * a - b * b
        var bb = 2*a*b
        a=aa+origA
        b=bb+origB
        n++
      }
      
      
      pixels[((y*width)+x)*4] = map(n, 0, 100, 0, 256)%256
      pixels[((y*width)+x)*4+1] = map(n, 0, 100, 0, 256)%256
      pixels[((y*width)+x)*4+2] = map(n, 0, 100, 0, 256)%256
    }
  }
  updatePixels();
}