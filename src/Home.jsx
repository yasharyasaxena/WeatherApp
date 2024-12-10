import { useState, useEffect } from "react";
import imgUrl from "./assets/search.png";

const API_KEY = "bfa784591ac462e680f21b0c978d5ab4";

export default function Main() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function addLocation(formdata) {
    setLocation(formdata.get("location"));
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [location]);

  return (
    <main>
      <h2>Welcome to Weather App</h2>
      <p>
        Simply enter the name of a city, town, or address, and Weather App
        delivers:
      </p>
      <ul>
        <li>
          Current Conditions: Temperature, humidity, wind speed, and atmospheric
          pressure at a glance.
        </li>
        <li>
          Weather Icons: Clear visuals like sunny, cloudy, or rainy to represent
          the weather.
        </li>
        <li>
          Additional Insights: Feels-like temperature, UV index, and visibility
          for a complete picture.
        </li>
        <li>
          Global Coverage: Get updates from your neighborhood to destinations
          worldwide.
        </li>
      </ul>
      <p>
        Stay informed and prepared with Weather App, your reliable companion for
        planning your day, travel, or outdoor activities!
      </p>
      <div className="weather-container">
        <form action={addLocation}>
          <input type="text" name="location" placeholder="Search Location" />
          <button>
            <img src={imgUrl} />
          </button>
        </form>
        <div>
          {weatherData && weatherData.cod === 200 && (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
              <h1>{weatherData.name}</h1>
              <h2>{(weatherData.main.temp - 273.15).toFixed(1)}°C</h2>
              <h3>Humidity: {weatherData.main.humidity}%</h3>
              <h3>Wind Speed: {weatherData.wind.speed} meter/sec</h3>
              <h3>
                <i>{weatherData.weather[0].description}</i>
              </h3>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
