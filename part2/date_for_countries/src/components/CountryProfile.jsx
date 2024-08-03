import { useState, useEffect } from 'react'

import axios from 'axios'

const CountryProfile = ({ country }) => {

    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

    const [weather, setWeather] = useState({
        temperature: null,
        wind: null,
        weather: null,
      });

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${API_KEY}`)
        .then(res => {
            const data = res.data
            const temp = data.main.temp;
            const tempCelsius = temp - 273.15;
            setWeather({
                temperature: tempCelsius.toFixed(2),
                wind: data.wind.speed,
                weather: data.weather[0].icon
            });
        })
        .catch(err => console.error(err));
      } ,[country, API_KEY])

    return (

        <div>
            <h1>{country.name.common}</h1>
    
            <ul className="profile-info">
                <li>Capital: {country.capital}</li>
                <li>Area: {country.area}</li>
            </ul>
    
            <p><strong>Languages:</strong></p>
    
            <ul>
                {
                    Object.values(country.languages).map((language, index) => (
                        <li key={index}>{language}</li>
                    ))
                }
            </ul>
    
            <img src={country.flags.png} alt={`Flag ${country.name.common}`} />

            <h2>Weather in {country.capital}</h2>

            {weather.temperature !== null ? (
                <div>
                    <p>Temperature: {weather.temperature} Celcius</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather}@2x.png`} alt="weather" />
                    <p>Wind: {weather.wind} m/s</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
} 

export default CountryProfile