import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forcast from "./Forecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }
 

   function search (){ 
    const apiKey = "6feaf6a8d604af91166c8484867322e7";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);}

  function handleSubmit(event){
       event.preventDefault();
    search(city);
   }
  function handleCityChange(event){setCity(event.target.value);}
    function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let unit = "metric";
    let apiKey = "6feaf6a8d604af91166c8484867322e7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);}

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  
   

 
    
  if (weatherData.ready) {
    return (
      <div className="Weather">
         <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
          <div className="search">
      <form id="search-city" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          autoFocus="on"
          autoComplete="off"
          className="city-input"
          id="city-input"
          onChange={handleCityChange}
        />
        <input
          type="submit"
          value="🔎"
          className="search-button"
          id="search-button"
        />
      </form>
       <div className="Locate">
      <button className="current-location-button" onClick={getCurrentLocation}> ➢ Current Location </button>
    </div>
        <WeatherInfo data={weatherData}/>
      </div>

            <Forcast lat = {weatherData.latitude} lon = {weatherData.longitude}/>

         
              </div>
      </div>
      </div>
      </div>
    );
  } else {
   search()
    return <Loader type="TailSpin" color="#f2f2f1" height={100} width={100} />;
  }
}
