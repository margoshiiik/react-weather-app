import React from "react";
import FormattedData from "./FormattedData";
import Temperature from "./Temperature";

export default function WeatherInfo(props){
    return (
    <div>
        <h1>{props.data.city}</h1>
    <ul>
        <li>
           <FormattedData date={props.data.date}></FormattedData>
        </li>
        <li>
            {props.data.status}
        </li>
    </ul>

    <div className="row temp">
        <div className="col-6">
            <img src={props.data.image} alt={props.data.status}/>
            <Temperature temp={props.data.temperature}/>
        </div>
        <div className="col-6">
            <ul>
                <li>Pressure {props.data.pressure}</li>
                <li>Humidity {props.data.humidity}</li>
                <li>Wind {props.data.wind} km/h</li>
            </ul>
        </div>
    </div>
    </div>
    );
}