window.onload = function() {
  // Get the video.
  var video = document.getElementById("myVideo");

  // Get the buttons.
  var playBtn = document.getElementById("playBtn");
  var pauseBtn = document.getElementById("pauseBtn");

  // Add an event listener for the play button.
  playBtn.addEventListener("click", function(e) {
    // Play the video.
    video.play();
  });

  // Add an event listener for the pause button.
  pauseBtn.addEventListener("click", function(e) {
    // Pause the video
    video.pause();
  });
}
