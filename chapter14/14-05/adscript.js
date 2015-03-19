

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
  }
}

// Create lines with paths. A path consist of any number of points.
// beginPath(x,y);

// Points are added using moveTo(x,y); and lineTo(x,y);
// moveTo();  Moves the cursor to another location for a new starting point.
// lineTo();  Draws on the canvas.

// If your path has more than one point and you want to form a closed shape, use closePath(x,y);
// closePath();

// Once your path is created.  Fill in the area.
// fill();

// Paint a line along the parts of the path that were drawn with lineTo();
// stroke();

// Canvas API works by a "draw first, render later," process.

// Set the color of a line.
// ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";

// Set line width.
// ctx.lineWidth = 1.0;

