import React from "react";
import FormattedDate from "./formattedDate";
import weatherIcon from "./weatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
            <weatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="float-left"
          />{" "}
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:2%</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
