import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function DailyForecast(props) {
  function day() {
     let now = new Date(props.data.dt*1000)
     let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];
 
    return `${day}` ;
 } 

    function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
}

    return(
            <div className = "dailyForecast col">
                 {day()}
                 <WeatherIcon code = {props.data.weather[0].icon} />
                 <div className="temperature">{temperature()}</div>
                  
          </div>);
}
