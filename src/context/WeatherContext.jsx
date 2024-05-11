import { createContext, useContext, useState } from "react";
import { weatherData,weatherDataForLocation } from "../api/weatherAPI";
const weatherContext = createContext(null);


export const useWeather = () => {
    return useContext(weatherContext);
}
export const WeatherProvider = (props)=>{
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);
    const fetchData = async()=>{
        let respo = await weatherData(city);
        setData(respo);
    }

    const getWeatherDataUserLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            weatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data));
        });
    }

    return (
        <weatherContext.Provider value={{fetchData,city,setCity,data,getWeatherDataUserLocation}}>
            {props.children}
        </weatherContext.Provider>
    )
}