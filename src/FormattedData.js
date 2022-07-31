import React from "react";

export default function FormattedData(props){
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    
    let day = week[props.date.getDay()];
    let hours = props.date.getHours(); 
    let minutes = props.date.getMinutes(); 

    if(minutes < 10) minutes = `0${minutes}`;

    return <div>{day}, {hours}:{minutes}</div>
}