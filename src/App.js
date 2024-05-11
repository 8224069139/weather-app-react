import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/InputNew';
import Button from './components/Button';
import './App.css';

import { useWeather } from './context/WeatherContext';

function App() {
  const weather = useWeather();
  console.log(weather,"fetchData")

  useEffect(()=>{
    // get user current location
    weather.getWeatherDataUserLocation();
  },[])
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input/>
      <Button onClick={weather.fetchData} text="Search"/>
      
      {weather.data && <Card data={weather.data} />  } 
    </div>
  );
}

export default App;
