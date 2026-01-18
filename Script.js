
 function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "07e92fb2cc4c7195a01a8fd376a78a78";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          document.getElementById("result").innerText = "City not found!";
        } else {
          document.getElementById("result").innerHTML =
            `🌡 Temperature: ${data.main.temp} °C <br>
             ☁ Weather: ${data.weather[0].main} <br>
             💧 Humidity: ${data.main.humidity}%`;
        }
      })
      .catch(() => {
        document.getElementById("result").innerText = "Error fetching data";
      });
  }

