import React, {useState} from "react";
import "./Weather.css"

export default function Temperature(props){
    let [celsius, setF] = useState(true);

    function toF(event){
        event.preventDefault(); 
        setF(false); 
    }

    function toC(event){
        event.preventDefault(); 
        setF(true); 
    }

    function convert(temp) {
        return (temp * 9/5 + 32); 
    }

    if(celsius){
        return (
            <span className="float-right">
                <span className="temperature">{Math.round(props.temp)}</span><div className="units">°C | <a href="/" onClick={toF}>°F</a></div>
            </span>
        )
    }

    else {
        return (
            <span className="float-right">
                <span className="temperature">{Math.round(convert(props.temp))}</span><div className="units"><a href="/" onClick={toC}>°C</a> | °F</div>
            </span>
        )
    }
    
}