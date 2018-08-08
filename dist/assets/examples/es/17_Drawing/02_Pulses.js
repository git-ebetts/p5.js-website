/*
 * @name Pulsos
 * @description Los instrumentos de dibujo de software pueden seguir un ritmo o 
 * cumplir las reglas independientemente de los gestos dibujados. Esta es una 
 * forma de dibujo colaborativo en el que el dibujante controla algunos aspectos
 * de la imagen y el software controla a los demás.
 */
var angle = 0;

function setup() {
  createCanvas(710, 400);
  background(102);
  noStroke();
  fill(0, 102);
}

function draw() {
  // Dibujar solo cuando se presiona el mouse
  if (mouseIsPressed === true) {
    angle += 5;
    var val = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }
}