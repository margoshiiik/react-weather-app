import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
    <div className="Weather">
        <form >
            <div className="row">
                <div className="col-9"><input type="search" className="form-control" aria-describedby="emailHelp" placeholder="Enter the city" /></div>
                <div className="col-3 "><input type="submit" className="btn btn-primary"/></div>
            </div>
    </form>
    <h1>New York</h1>
    <ul>
        <li>
            Wednesday 7:00
        </li>
        <li>
            Mostly Cloudy
        </li>
    </ul>

    <div className="row temp">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
            <span className="temperature">6</span><div className="units">°C</div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation 15%</li>
                <li>Humidity 72%</li>
                <li>Wind 13 km/h</li>
            </ul>
        </div>
    </div>
    </div>);
}