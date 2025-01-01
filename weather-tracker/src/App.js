import React, { useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function GfGWeatherApp() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });

    const toDateFunction = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December',
        ];
        const WeekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        ];
        const currentDate = new Date();
        return `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    };

    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });

            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            const url = 'https://api.openweathermap.org/data/2.5/weather';

            try {
                const response = await axios.get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                });
                setWeather({ data: response.data, loading: false, error: false });
            } catch (error) {
                setWeather({ ...weather, data: {}, error: true });
                console.error('Error fetching weather data:', error);
            }
        }
    };

    return (
        <div className="app">
            <h1 className="app-title">Weather App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter City Name..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={search}
                />
            </div>
            {weather.loading && (
                <div className="loading">
                    <Oval color="black" height={80} width={80} />
                </div>
            )}
            {weather.error && (
                <div className="error">
                    <FontAwesomeIcon icon={faFrown} />
                    <span>City not found</span>
                </div>
            )}
            {weather.data.main && (
                <div className="weather-info">
                    <h2>
                        {weather.data.name}, {weather.data.sys.country}
                    </h2>
                    <p>{toDateFunction()}</p>
                    <div className="temp-info">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                            alt={weather.data.weather[0].description}
                        />
                        <span>
                            {Math.round(weather.data.main.temp)}°C
                        </span>
                    </div>
                    <p>{weather.data.weather[0].description.toUpperCase()}</p>
                    <p>Wind Speed: {weather.data.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

export default GfGWeatherApp;
