function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '<>';  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayWeather(data);
      } else {
        alert('City not found!');
      }
    };
  
    xhr.send();
  }
  
  function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    const state = data.sys.state || 'NA';
    const country = data.sys.country;
  
    weatherDiv.innerHTML ="<h3>Weather in " + city + "," + state + ", " + country + "</h3>" +
    "<p>Temperature: " + temperature + "°C</p>" +
    "<p>Description: " + description + "</p>";

  }
  
