window.onload = function() {
  var adCanvas = document.getElementById("adCanvas");

  if (adCanvas.getContext) {
  //  Initialize a 2d drawing context.
    var ctx = adCanvas.getContext("2d");
  //  context holds all the information about your canvas, such as the objects that you will be drawing and any styling that you might add.
    drawAdvert();
  }

  function drawAdvert() {
  //  Create the Background Rectangle
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0,0,600,150);
  }
}