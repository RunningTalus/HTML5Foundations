

window.onload = function() {
  var adCanvas = document.getElementById("adCanvas");

  if (adCanvas.getContext) {
    //  Initialize a 2d drawing context.
    //  Context holds all the information about your canvas, such as the objects that you will be drawing and any styling that you might add.
    var ctx = adCanvas.getContext("2d");

    drawAdvert();
  }

  function drawAdvert() {
    //  Create the Background Rectangle
    ctx.fillStyle = "rgba(0,0,0,0.4)";

    // Draw the rectangle on the canvas
    ctx.fillRect(0,0,600,150);

    // Add the text.
    ctx.font = "Bold 32px Georgia";

    // Align the text to center.
    ctx.textAlign = "center";

    // Set the text color to green.
    ctx.fillStyle = "#FFFFFF";

    // Calculate the position for the text.
    var textX = (adCanvas.width / 2) - 80;
    var textY = (adCanvas.height / 2);

    // Add the "New York's Best Pizza" text
    ctx.fillText("New York's Best Pizza", textX, textY - 10);

    // Update the font and add the "Joe's Pizza Co." text
    ctx.font = "Italic 22px Georgia";

    // Draw text below the center by adding 25px to y canvas coordinate
    ctx.fillText("Joe's Pizza Co.", textX, textY + 25);

    // Add the separator line.
    var lineLength = 360;

    // 0.5 will make the line crisp.
    var lineY = (adCanvas.height / 2) + 0.5;

    // Create a new empty path.
    ctx.beginPath();

    // Set the start point of your line using moveTo();
    ctx.moveTo(40, lineY);

    // Draw the line. +40 value is added because the starting point o f the line is 40 pixels from the left of the canvas.
    ctx.lineTo((lineLength + 40), lineY);

    // Set the line width to 1.0
    ctx.lineWidth = 1.0;

    // Set the line color to a semi-transparent white
    ctx.strokeStyle = "rgba(255,255,255,0.4)";

    // Display your path by calling stroke();
    ctx.stroke();

  }
}

// Create lines with paths. A path consist of any number of points.
// beginPath(x,y);

// Points are added using moveTo(x,y); and lineTo(x,y);
// moveTo();  Moves the cursor to another location for a new starting point.
// lineTo();  Draws on the canvas.

// If your path has more than one point and you want to form a closed shape, use closePath(x,y);
// closePath();

// Canvas API works by a "draw first, render later," process.
// ***** NOTE: Unlike drawing a rectangle, you must use fill() or stroke() to display our path! *****

// Once your path is created.  Fill in the area.
// fill();

// Paint a line along the parts of the path that were drawn with lineTo();
// stroke();

// Set the color of a line.
// ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";

// Set line width.
// ctx.lineWidth = 1.0;

// Create a circular path using arc().  arc() takes 5 parameters.
// arc(x, y, radius, startAngle.endAngle.anticlockwise);

// x, y are the center of the circle
// radius is the radius
// startAngle and endAngle specify the start and endpoint of the arc in radians, NOT degrees.
// anticlockwise: true is counterclockwise vs. anticlockwise = false is clockwise.


// To convert degrees to radians in JavaScript.
// var radians = (Math.PI /180) * degrees;

// Call beginPath() before you draw your arc.

// DRAW A CIRCLE
// ctx.beginPath();
// ctx.arc(50, 50, 50, 0, Math.PI*2, true)
  // Math.PI * 2 === (Math.PI / 180) * 360
// ctx.fill();

// DRAW A SEGMENT OF A CIRCLE
// ctx.beginPath();
// ctx.arc(50, 50, 50, 0, Math.PI*1.5, true)
// ctx.fill();

// DRAW A PIE-SHAPED SECTION OF A CIRCLE
// ctx.beginPath();
// ctx.arc(50,50,50,Math.PI * 1.75, Math.PI * 1.5, true);
  // ctx.arc(x, y, radius, startAngle, endAngle, rotation);
// ctx.lineTo(50,50);
  // draw a line to the center of the arc
// ctx.fill();
  // fill the pie shape





