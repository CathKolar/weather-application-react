import React, { useState } from "react";
import "./Today.css";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Today(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: props.defaultCity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Today">
        <div className="row current-conditions">
          <div className="col-4">
            <img src={weatherData.iconUrl} alt="weatherData.description" />
            <h1>
              <div className="condition-description text-capitalize">
                {weatherData.description}
              </div>
              <span className="temp-high-low-today">
                <strong>{Math.round(weatherData.high)}</strong>º|{" "}
                {Math.round(weatherData.low)}º
              </span>
            </h1>
          </div>
          <div className="col-4">
            <h2>
              <span>{Math.round(weatherData.temperature)}ºC</span>
              <span></span>
              <div>{weatherData.city}</div>
            </h2>
            <h6>Tuesday 13:30</h6>
          </div>
          <div className="col-4 weather-extras">
            <p>
              Feels like: {Math.round(weatherData.feelsLike)}ºC
              <br />
              Humidity: {weatherData.humidity}%
              <br />
              Wind: {Math.round(weatherData.wind)} km/h
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6feaf6a8d604af91166c8484867322e7";
    let city = props.defaultCity;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader type="TailSpin" color="#f2f2f1" height={100} width={100} />;
  }
}
