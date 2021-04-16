import axios from 'axios';
import React from "react";
import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
import WeatherUI from './Components/WeatherUI';


const App = () => {
  const [City,setCity] = useState('');
  const [weather, setWeather] = useState({});
  const KEY = "a6fa573d63f563261ef96a20068752c8";
  const url =`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${KEY}&units=metric`;
  
  useEffect( () => {
    FetchAPI();
    // getLocation();
  });

  const FetchAPI = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setWeather(response.data)
  }
  const getLocation = async() => {
    const response = await axios.get(`https://geolocation-db.com/json/afa4d000-8eb9-11eb-a6ff-2538b793e762`);
    const currentLocationInfo = `${response.data.city}`;
    console.log(response);
    setCity(currentLocationInfo);
    FetchAPI();
  }
  const setTheCity = (city) => {
    setCity(city);
    FetchAPI();
    console.log(`${city}`);
  }
  return (
    <>
      <div className={ (typeof weather.main != 'undefined') ? ( (weather.main.temp > 15) ? 'app warm' : 'app' ) : 'app' }>
        <div className='linearGradientBackGround'>
          <WeatherUI theCity={setTheCity}/>

          <div className='currentLocationButtonContainer'>
            <button className='currentLocation' onClick={getLocation}> <i class="fas fa-map-marker-alt"></i> Current location</button>
            {/* <button className='currentLocation'> <i class="fas fa-map-marker-alt"></i> Current location</button> */}
          </div>
          
          {(typeof weather.main != 'undefined') ? (
            <div className="container">
              <div className='cityCountry'>{City}, {weather.sys.country}</div>
              {/* <div className='cityCountry'>Patiala, IN</div> */}
              <div className='degreeCelsius'>{Math.round(weather.main.temp)}°c</div>
              {/* <div className='degreeCelsius'>29°c</div> */}
              <div>{weather.weather[0].description}</div>
              {/* <div className='weatherDescription'>Sunny</div> */}
            </div>
          ) : ('')}
          
        </div>
      </div>
    </>
  );
}

export default App;
