window.onload = function() {
  if (navigator.geolocation) {
    // geolocation is supported
    navigator.geolocation.getCurrentPosition(function (position) {
      //  Do something with the location data.
      alert("Latitude: " + position.coords.latitude + " " + "Longitude: " + position.coords.longitude);
    });
  }
}