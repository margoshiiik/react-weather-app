import React, {useState, useEffect} from 'react'; 
import "./WeatherForecast.css"
import axios from 'axios';
import ForecastDay from "./ForecastDay.js"

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null); 

    function handleResponse(response){
        console.log(response.data);
        setLoaded(true);
        setForecast(response.data);
    }

    useEffect(() =>{
        setLoaded(false);
    }, [props]);

    if(loaded){
        return (<div className='WeatherForecast text-center'>
        <div className='row'>
         <ForecastDay forecast={forecast.list[0]} />
         <ForecastDay forecast={forecast.list[10]} />
         <ForecastDay forecast={forecast.list[16]} />
         <ForecastDay forecast={forecast.list[20]} />
         <ForecastDay forecast={forecast.list[30]} />
        </div>
    </div>)
    }

    else{
        let lon = props.elem.lon;
        let lat = props.elem.lat;
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=364ea10a9dce84c7e6e88f4ed5d11db3&units=metric`
        axios.get(url).then(handleResponse);

        return "Loading...."
    }

    ; 
}