window.onload = function() {
  var adCanvas = document.getElementById("adCanvas");

  if (adCanvas.getContext) {
  //  Initialize a 2d drawing context.
  //  Context holds all the information about your canvas, such as the objects that you will be drawing and any styling that you might add.
    var ctx = adCanvas.getContext("2d");
  }
}