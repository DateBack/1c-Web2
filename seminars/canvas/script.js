var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d"); 

var line, circle; 

circle = new Path2D();
circle.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0,2 * Math.PI); 
context.stroke(circle); 

line = new Path2D(); 


var R = canvas.width / 2, d, angle, pX, pY, qX, qY; 
var d, angle, pX, pY, qX, qY; 
for (d = 0; d < 60; ++d) {
    angel = (d / 60) * (2 * Math.PI); 
    pX = Math.cos(angel) * R; 
    pY = -Math.sin(angel) * R; 
    qX = 0,9 * pX; 
    qY= 0.9 * pY; 
    pX+=R; pY+=R; 
    qX+=R; qY+=R; 

    line.moveTo(pX, pY);
    line.lineTo(qX, qY); 
    
    context.stroke(line);
    
}
