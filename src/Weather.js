import React, {useState} from "react";
import axios from 'axios'; 
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    let [city, newCity] = useState(props.default);
    let [ready, newReady] = useState({ ready: false });
    let [weatherState, newWeatherState] = useState({}); 

    function handleResponse(response){
        console.log(response); 
        newWeatherState({
            ready: true, 
            city: (response.data.name),
            wind: (response.data.wind.speed), 
            temperature: (response.data.main.temp), 
            status: (response.data.weather[0].main), 
            humidity: (response.data.main.humidity),
            image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, 
            pressure: (response.data.main.pressure), 
            date: new Date(response.data.dt *1000)
        })
    }

    function change(event){
        newCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search(){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=364ea10a9dce84c7e6e88f4ed5d11db3&units=metric`;
        axios.get(url).then(handleResponse);
    }

    if(weatherState.ready){
       return (
        <div className="Weather">
            <form >
                <div className="row">
                    <div className="col-9"><input type="search" className="form-control" aria-describedby="emailHelp" placeholder="Enter the city" onChange={change}/></div>
                    <div className="col-3 "><input type="submit" className="btn btn-primary" onClick={handleSubmit}/></div>
                </div>
            </form>
            <WeatherInfo data={weatherState} />
        </div> 
        );   
    }
    else {
        search();
        return (
            "Loading..."
        )
    }
};