window.onload = function() {
  if (navigator.geolocation) {
    // geolocation is supported
    navigator.geolocation.getCurrentPosition(function (position) {
      //  Do something with the location data.
      //  alert("Latitude: " + position.coords.latitude + " " + "Longitude: " + position.coords.longitude);
    //  Pass the location data to the findNearest method.
      findNearest(position.coords.latitude, position.coords.longitude);
    });
  }
}
  //  Find the restaurant that is nearest to the user's location.
  function findNearest(lat, lon) {
  //  Calculate the distances.
    var d1 = haversine(lat, lon, 40.755018, -73.992556);
  //    310 West 38th Street
    var d2 = haversine(lat, lon, 40.791121, -73.973971);
  //  2450 Broadway
    var d3 = haversine(lat, lon, 40.757498, -73.986654);
  //  200 West 44th Street

  //  Add text to the distance label.
    document.getElementById("location1distance").textContent = "Distance: " + d1 + " miles";
    document.getElementById("location2distance").textContent = "Distance: " + d2 + " miles";
    document.getElementById("location3distance").textContent = "Distance: " + d3 + " miles";
  }

