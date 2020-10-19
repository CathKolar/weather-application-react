import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
export default function WeatherInfo (props){
    return (
    <div className="WeatherInfo">
      
    <div className="row current-conditions">
          <div className="col-4">
            <WeatherIcon code={props.data.icon} />
            <h1>
              <div className="condition-description text-capitalize">
                {props.data.description}
              </div>
              <span className="temp-high-low-today">
                <strong>{Math.round(props.data.high)}</strong>º|{" "}
                {Math.round(props.data.low)}º
              </span>
            </h1>
          </div>
          <div className="col-4">
            <h2>
          <WeatherTemperature celsius={props.data.temperature} />
            
              <div className="city">{props.data.city}</div>
            </h2>
            <FormattedDate date={props.data.date} />
          </div>
          <div className="col-4 weather-extras">
            <p>
              Feels like: {Math.round(props.data.feelsLike)}ºC
              <br />
              Humidity: {props.data.humidity}%
              <br />
              Wind: {Math.round(props.data.wind)} km/h
            </p>
          </div>
        </div>
        </div>);}