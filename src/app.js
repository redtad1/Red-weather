function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperture");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apikey = "c43da09a1983b53850881d638a5of324";
let apiurl = `https://api.shecodes.io/weather/v1/forecast?query=chicago&key=${apikey}&units=metric`;

axios.get(apiurl).then(displayTemperature);
