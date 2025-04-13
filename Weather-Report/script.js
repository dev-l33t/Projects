const apiKey = "008d957c200984a9eca9ac10b829a10e"; 

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      const cityName = data.name;
      resultDiv.innerHTML = `
        <h3>${cityName}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = "City not found. Try another.";
    });
}
