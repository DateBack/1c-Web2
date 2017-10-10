var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d"); 

var line, circle; 

circle = new Path2D();
circle.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0,2 * Math.PI); 
context.stroke(circle); 

line = new Path2D(); 


var R = canvas.width / 2, d, angle, pX, pY, qX, qY; 
for (d = 0; d < 60; ++d) {
    angle = (d / 60) * (2 * Math.PI); 
    pX = Math.cos(angle) * R; 
    pY = -Math.sin(angle) * R; 
    qX = 0.92 * pX; 
    qY= 0.92 * pY; 
    pX+=R; pY+=R; 
    qX+=R; qY+=R; 

    line.moveTo(pX, pY);
    line.lineTo(qX, qY); 
    
    context.stroke(line);   
}

var date = new Date(), hours, minutes, seconds, hoursAngle, minutesAngle, secondsAngle; 
hours = date.getHours(); 
minutes = date.getMinutes(); 
seconds = date.getSeconds(); 

secondsAngle = (seconds / 60) * (2 * Math.PI);
minutesAngle = (minutes / 60) * (2 * Math.PI); 
hoursAngle = ((hours % 12) / 12) * (2 * Math.PI); 

secondsAngle = Math.PI / 2 - secondsAngle; 
minutesAngle = Math.PI / 2 - minutesAngle; 
hoursAngle = Math.PI / 2 - hoursAngle; 

function drawWatch() {
    context.clearRect(0, 0, canvas.width, canvas.height); 
    setTimeout(drawWatch, 1000);
}

drawWatch(); 
