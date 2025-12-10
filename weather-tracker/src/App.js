import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function WeatherApp() {

    const api_key = "f00c38e0279b7bc85480c3fe775d518c";

    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({ loading: false, data: {}, error: false });
    const [forecast, setForecast] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cities")) || [];
        setCities(saved);
    }, []);

    const saveCity = (city) => {
        if (!cities.includes(city)) {
            const updated = [...cities, city];
            setCities(updated);
            localStorage.setItem("cities", JSON.stringify(updated));
        }
    };

    const toDateFunction = () => {
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const day = new Date();
        return `${day.getDate()} ${months[day.getMonth()]}`;
    };

    const getWeather = async (cityName) => {
        try {
            setWeather({ loading: true, data: {}, error: false });

            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
            );

            setWeather({ loading: false, data: res.data, error: false });
            saveCity(cityName);
            getForecast(cityName); // Fetch second endpoint now

        } catch (err) {
            setWeather({ loading: false, data: {}, error: true });
        }
    };

    const getForecast = async (cityName) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&units=metric`
            );
            setForecast(res.data.list.slice(0, 5)); // Show only 5 intervals
        } catch (err) {
            console.log("Forecast fetch failed");
        }
    };

    const search = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            getWeather(input);
            setInput("");
        }
    };

    return (
        <div className="app">

            <h1 className="app-title">Weather Tracker</h1>

            <input
                type="text"
                placeholder="Enter City Name..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={search}
            />

            <h3> Previous Searches</h3>
            <ul>
                {cities.map((c,i)=>(
                    <li key={i} onClick={()=>getWeather(c)}>{c}</li>
                ))}
            </ul>

            {weather.loading && <Oval height={60} width={60} color="black" />}

            {weather.error && <h3><FontAwesomeIcon icon={faFrown}/> City Not Found</h3>}

            {weather.data.main && (
                <div className="weather-box">
                    <h2>{weather.data.name}, {weather.data.sys.country}</h2>
                    <p>{toDateFunction()}</p>
                    <h1>{Math.round(weather.data.main.temp)}°C</h1>
                    <p>{weather.data.weather[0].description.toUpperCase()}</p>
                    <p>Wind: {weather.data.wind.speed} m/s</p>
                </div>
            )}

            {forecast.length>0 && (
                <div className="forecast-box">
                    <h3>5 Day Forecast</h3>
                    {forecast.map((f,i)=>(
                        <p key={i}>{f.dt_txt} → {f.main.temp}°C</p>
                    ))}
                </div>
            )}

        </div>
    );
}

export default WeatherApp;
