import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function day() {
    let now = new Date(props.data.dt * 1000);
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

    return `${day}`;
  }

  function temperature() {
    let minTemp = Math.round(props.data.temp.min);
    let maxTemp = Math.round(props.data.temp.max);
    return (
      <div>
        <strong>{minTemp}°|</strong>{maxTemp}°
      </div>
    );
  }

  return (
    <div className="dailyForecast col-sm">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-temperature">{temperature()}</div>
    </div>
  );
}
