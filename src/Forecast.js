
import React, {useState} from "react";
import axios from "axios";
import DailyForcast from "./DailyForecast";
import "./Forecast.css";

export default function Forcast(props) {
const [forecast, setForecast] = useState({ready: false});

function handleForcastResponse(respose){
 setForecast({element:respose.data, 
  ready:true});
  

}

if(forecast.ready && props.longitude === forecast.lon &&
    props.latitude === forecast.lat){return(
<div className="container-fluid">
<div className="card-body week-ahead">
<div className="row forecast">
  <DailyForcast data = {forecast.element.daily[1]}/>
  <DailyForcast data = {forecast.element.daily[2]}/>
  <DailyForcast data = {forecast.element.daily[3]}/>
  <DailyForcast data = {forecast.element.daily[4]}/>
  <DailyForcast data = {forecast.element.daily[5]}/>
</div>
</div>
 </div>);
}else{
 const apiKey = "60d38116e62d6fb396ee92dba877d5ca";
 const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}1&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
 axios.get(url).then(handleForcastResponse); 
 return (
 null
  );
}}