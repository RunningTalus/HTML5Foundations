window.onload = function() {
  // Get the video.
  var video = document.getElementById("myVideo");

  // Get the buttons.
  var playBtn = document.getElementById("playBtn");

  // Add an event listener for the play button.
  playBtn.addEventListener("click", function(e) {
    // Play the video.
    video.play();
  });
}
