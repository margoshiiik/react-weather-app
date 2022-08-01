import React from "react";

export default function ForecastDay(props){
    console.log(props);

    function day(){
        let date = new Date(props.forecast.dt * 1000);
        let n = date.getDay(); 
        let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return week[n]; 
    }

    return (
        <div className='col'>
                <div>{day()}</div>
                <img src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} className='imageWeather mt-1' /> 
                <div>
                    <span className='max-temp'>{Math.round(props.forecast.main.temp_max)}°</span>
                    <span className='min-temp'>{Math.round(props.forecast.main.temp_min)}°</span>
                </div>
        </div>
    )
}