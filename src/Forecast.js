
import React, {useState} from "react";
import axios from "axios";
import DailyForcast from "./DailyForecast";
import "./Forecast.css";

export default function Forcast(props) {
  const[loaded, setLoaded]=useState(false);
  const [forecast, setForecast] = useState(null);

function handleForcastResponse(respose){
 setForecast(respose.data);
  setLoaded(true)
  console.log(respose.data);
}

if(loaded && props.lat === forecast.lat){return(
<div className="container-fluid">


<div className="row weather-forcast">
  <DailyForcast data = {forecast.daily[1]}/>
  <DailyForcast data = {forecast.daily[2]}/>
  <DailyForcast data = {forecast.daily[3]}/>
  <DailyForcast data = {forecast.daily[4]}/>
  <DailyForcast data = {forecast.daily[5]}/>
  </div>


  </div>);
}else{
 const apiKey = "6feaf6a8d604af91166c8484867322e7";
 const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}1&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
 axios.get(url).then(handleForcastResponse); 
 return (
 null
  );
}}
