import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./formattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />{" "}
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:2%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b099962e02751ab0461373b3eae3c493";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
