var context = document.getElementById('canvas').getContext('2d');

//setting context
context.font = '38pt Arial';
context.fillStyle = '#1e68ed';
context.strokeStyle = 'blue';


var obj_with = canvas.width/2 + -103
var obj_hight = canvas.height/2 + -6


draw();

// Functions.....................................................
function draw() {
   context.clearRect(0, 0, context.canvas.width,
                           context.canvas.height);
   drawGrid('#ba4b4b', 10, 10);

   context.save();

   context.shadowColor = 'rgba(33, 102, 123, 0.8)';
   context.shadowOffsetX = 12;
   context.shadowOffsetY = 12;
   context.shadowBlur = 15;
   drawTwoArcs();
   context.restore();
}


function drawGrid(color, stepx, stepy) {
   // Listing omitted for brevity. See Example 2.13 on p. 106
   // for a complete listing.
}

function drawTwoArcs() {
   context.beginPath();
   context.arc(300, 190, 150, 0, Math.PI*2, false); // Outer: CCW
   context.arc(300, 190, 100, 0, Math.PI*2, true);  // Inner: CW

   context.fill();
   context.shadowColor = undefined;
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   context.stroke();
//    context.closePath();
}

