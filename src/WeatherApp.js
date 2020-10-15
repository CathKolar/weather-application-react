import React from "react";


import Today from "./Today";
import Forcast from "./Forcast";
import Conversion from "./Conversion";
import Footer from "./Footer";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div>
       
              </div>
            </div>
          

            <Today defaultCity="Seville" />

            <Forcast />

            <Conversion />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
