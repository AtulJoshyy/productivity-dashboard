const myKey = "0ce14f7ed233074345bf8e65b52ab12b";
//get current location

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
     alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}





class Fetch {
  async getCurrent() {
    

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${lposition.coords.longitude}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
