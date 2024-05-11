import React from "react";
import { useWeather } from "../context/WeatherContext";
const Input = ()=>{
    const WeatherD = useWeather();

    // console.log(WeatherD,'llllll')
    return (
        <>
        <label>Enter you city name to check the weather information</label><br></br>
        <input placeholder="Enter City Name" value={WeatherD.city} onChange={(e)=> WeatherD.setCity(e.target.value)} />
        </>
    )
}

export default Input;