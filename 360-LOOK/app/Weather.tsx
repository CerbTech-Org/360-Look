// Weather.js

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './styles';
import { getWeather, getForecast } from './api';
import Look from "./components/myWeather"

const Weather = () => {
    const [city, setCity] = useState("Cotonou");
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    const handleGetWeather = () => {
        getWeather(city, setWeatherData, setForecastData);
    };
    useEffect(() => {
        const fetchWeatherData = () => getWeather(city, setWeatherData, setForecastData);
        // Fetch data initially
        fetchWeatherData();
        const intervalId = setInterval(fetchWeatherData, 30000); 
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [])
    const handleGetForecast = () => {
        getForecast(city, setWeatherData, setForecastData);
    };
    return (
        <View style={{
            width: "100%",
            height: "100%"
        }}>
            {weatherData ? (
                <Look temperature={weatherData.temperature} weather={weatherData.description} />
            ) : (
                <Text>Loading weather data...</Text>
            )}
        </View>
    )
};

export default Weather;
