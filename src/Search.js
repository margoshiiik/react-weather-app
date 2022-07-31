import React, { useState } from "react";
import axios from "axios";

// export default function Search() {
//   let [city, newCity] = useState("");
//   let [p1, newP1] = useState("");
//   let [p2, newP2] = useState("");
//   let [p3, newP3] = useState("");
//   let [temp, newTemp] = useState(null);
//   let [wind, newWind] = useState(null);
//   let [humidity, newHumidity] = useState(null);

//   function showWeather(event) {
//     event.preventDefault();
//     newP1(Math.round(temp) + "°C in " + city);
//     newP2("Wind: " + wind + "km/h");
//     newP3("Humidity: " + humidity + "%");
//   }

//   function handleResponse(response) {
//     newTemp(response.data.main.temp);
//     newWind(response.data.wind.speed);
//     newHumidity(response.data.main.humidity);
//   }

//   function change(event) {
//     newCity(event.target.value);
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=364ea10a9dce84c7e6e88f4ed5d11db3&units=metric`;
//     axios.get(url).then(handleResponse);
//   }

//   return (
//     <form onSubmit={showWeather}>
//       <input type="search" placeholder="Enter the city" onChange={change} />
//       <input type="submit" />
//       <h2>{p1}</h2>
//       <h2>{p2}</h2>
//       <h2>{p3}</h2>
//     </form>

//   );
// }
